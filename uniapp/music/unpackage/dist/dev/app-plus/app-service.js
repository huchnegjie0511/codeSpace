if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  const ON_LOAD = "onLoad";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = { ...defaultSettings };
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * vuex v4.1.0
   * (c) 2022 Evan You
   * @license MIT
   */
  var storeKey = "store";
  function useStore(key) {
    if (key === void 0)
      key = null;
    return vue.inject(key !== null ? key : storeKey);
  }
  function forEachValue(obj, fn) {
    Object.keys(obj).forEach(function(key) {
      return fn(obj[key], key);
    });
  }
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }
  function isPromise(val) {
    return val && typeof val.then === "function";
  }
  function assert(condition, msg) {
    if (!condition) {
      throw new Error("[vuex] " + msg);
    }
  }
  function partial(fn, arg) {
    return function() {
      return fn(arg);
    };
  }
  function genericSubscribe(fn, subs, options) {
    if (subs.indexOf(fn) < 0) {
      options && options.prepend ? subs.unshift(fn) : subs.push(fn);
    }
    return function() {
      var i = subs.indexOf(fn);
      if (i > -1) {
        subs.splice(i, 1);
      }
    };
  }
  function resetStore(store2, hot) {
    store2._actions = /* @__PURE__ */ Object.create(null);
    store2._mutations = /* @__PURE__ */ Object.create(null);
    store2._wrappedGetters = /* @__PURE__ */ Object.create(null);
    store2._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    var state = store2.state;
    installModule(store2, state, [], store2._modules.root, true);
    resetStoreState(store2, state, hot);
  }
  function resetStoreState(store2, state, hot) {
    var oldState = store2._state;
    var oldScope = store2._scope;
    store2.getters = {};
    store2._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    var wrappedGetters = store2._wrappedGetters;
    var computedObj = {};
    var computedCache = {};
    var scope = vue.effectScope(true);
    scope.run(function() {
      forEachValue(wrappedGetters, function(fn, key) {
        computedObj[key] = partial(fn, store2);
        computedCache[key] = vue.computed(function() {
          return computedObj[key]();
        });
        Object.defineProperty(store2.getters, key, {
          get: function() {
            return computedCache[key].value;
          },
          enumerable: true
          // for local getters
        });
      });
    });
    store2._state = vue.reactive({
      data: state
    });
    store2._scope = scope;
    if (store2.strict) {
      enableStrictMode(store2);
    }
    if (oldState) {
      if (hot) {
        store2._withCommit(function() {
          oldState.data = null;
        });
      }
    }
    if (oldScope) {
      oldScope.stop();
    }
  }
  function installModule(store2, rootState, path, module, hot) {
    var isRoot = !path.length;
    var namespace = store2._modules.getNamespace(path);
    if (module.namespaced) {
      if (store2._modulesNamespaceMap[namespace] && true) {
        console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join("/"));
      }
      store2._modulesNamespaceMap[namespace] = module;
    }
    if (!isRoot && !hot) {
      var parentState = getNestedState(rootState, path.slice(0, -1));
      var moduleName = path[path.length - 1];
      store2._withCommit(function() {
        {
          if (moduleName in parentState) {
            console.warn(
              '[vuex] state field "' + moduleName + '" was overridden by a module with the same name at "' + path.join(".") + '"'
            );
          }
        }
        parentState[moduleName] = module.state;
      });
    }
    var local = module.context = makeLocalContext(store2, namespace, path);
    module.forEachMutation(function(mutation, key) {
      var namespacedType = namespace + key;
      registerMutation(store2, namespacedType, mutation, local);
    });
    module.forEachAction(function(action, key) {
      var type = action.root ? key : namespace + key;
      var handler = action.handler || action;
      registerAction(store2, type, handler, local);
    });
    module.forEachGetter(function(getter, key) {
      var namespacedType = namespace + key;
      registerGetter(store2, namespacedType, getter, local);
    });
    module.forEachChild(function(child, key) {
      installModule(store2, rootState, path.concat(key), child, hot);
    });
  }
  function makeLocalContext(store2, namespace, path) {
    var noNamespace = namespace === "";
    var local = {
      dispatch: noNamespace ? store2.dispatch : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._actions[type]) {
            console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
            return;
          }
        }
        return store2.dispatch(type, payload);
      },
      commit: noNamespace ? store2.commit : function(_type, _payload, _options) {
        var args = unifyObjectStyle(_type, _payload, _options);
        var payload = args.payload;
        var options = args.options;
        var type = args.type;
        if (!options || !options.root) {
          type = namespace + type;
          if (!store2._mutations[type]) {
            console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
            return;
          }
        }
        store2.commit(type, payload, options);
      }
    };
    Object.defineProperties(local, {
      getters: {
        get: noNamespace ? function() {
          return store2.getters;
        } : function() {
          return makeLocalGetters(store2, namespace);
        }
      },
      state: {
        get: function() {
          return getNestedState(store2.state, path);
        }
      }
    });
    return local;
  }
  function makeLocalGetters(store2, namespace) {
    if (!store2._makeLocalGettersCache[namespace]) {
      var gettersProxy = {};
      var splitPos = namespace.length;
      Object.keys(store2.getters).forEach(function(type) {
        if (type.slice(0, splitPos) !== namespace) {
          return;
        }
        var localType = type.slice(splitPos);
        Object.defineProperty(gettersProxy, localType, {
          get: function() {
            return store2.getters[type];
          },
          enumerable: true
        });
      });
      store2._makeLocalGettersCache[namespace] = gettersProxy;
    }
    return store2._makeLocalGettersCache[namespace];
  }
  function registerMutation(store2, type, handler, local) {
    var entry = store2._mutations[type] || (store2._mutations[type] = []);
    entry.push(function wrappedMutationHandler(payload) {
      handler.call(store2, local.state, payload);
    });
  }
  function registerAction(store2, type, handler, local) {
    var entry = store2._actions[type] || (store2._actions[type] = []);
    entry.push(function wrappedActionHandler(payload) {
      var res = handler.call(store2, {
        dispatch: local.dispatch,
        commit: local.commit,
        getters: local.getters,
        state: local.state,
        rootGetters: store2.getters,
        rootState: store2.state
      }, payload);
      if (!isPromise(res)) {
        res = Promise.resolve(res);
      }
      if (store2._devtoolHook) {
        return res.catch(function(err) {
          store2._devtoolHook.emit("vuex:error", err);
          throw err;
        });
      } else {
        return res;
      }
    });
  }
  function registerGetter(store2, type, rawGetter, local) {
    if (store2._wrappedGetters[type]) {
      {
        console.error("[vuex] duplicate getter key: " + type);
      }
      return;
    }
    store2._wrappedGetters[type] = function wrappedGetter(store3) {
      return rawGetter(
        local.state,
        // local state
        local.getters,
        // local getters
        store3.state,
        // root state
        store3.getters
        // root getters
      );
    };
  }
  function enableStrictMode(store2) {
    vue.watch(function() {
      return store2._state.data;
    }, function() {
      {
        assert(store2._committing, "do not mutate vuex store state outside mutation handlers.");
      }
    }, { deep: true, flush: "sync" });
  }
  function getNestedState(state, path) {
    return path.reduce(function(state2, key) {
      return state2[key];
    }, state);
  }
  function unifyObjectStyle(type, payload, options) {
    if (isObject(type) && type.type) {
      options = payload;
      payload = type;
      type = type.type;
    }
    {
      assert(typeof type === "string", "expects string as the type, but found " + typeof type + ".");
    }
    return { type, payload, options };
  }
  var LABEL_VUEX_BINDINGS = "vuex bindings";
  var MUTATIONS_LAYER_ID = "vuex:mutations";
  var ACTIONS_LAYER_ID = "vuex:actions";
  var INSPECTOR_ID = "vuex";
  var actionId = 0;
  function addDevtools(app, store2) {
    setupDevtoolsPlugin(
      {
        id: "org.vuejs.vuex",
        app,
        label: "Vuex",
        homepage: "https://next.vuex.vuejs.org/",
        logo: "https://vuejs.org/images/icons/favicon-96x96.png",
        packageName: "vuex",
        componentStateTypes: [LABEL_VUEX_BINDINGS]
      },
      function(api) {
        api.addTimelineLayer({
          id: MUTATIONS_LAYER_ID,
          label: "Vuex Mutations",
          color: COLOR_LIME_500
        });
        api.addTimelineLayer({
          id: ACTIONS_LAYER_ID,
          label: "Vuex Actions",
          color: COLOR_LIME_500
        });
        api.addInspector({
          id: INSPECTOR_ID,
          label: "Vuex",
          icon: "storage",
          treeFilterPlaceholder: "Filter stores..."
        });
        api.on.getInspectorTree(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            if (payload.filter) {
              var nodes = [];
              flattenStoreForInspectorTree(nodes, store2._modules.root, payload.filter, "");
              payload.rootNodes = nodes;
            } else {
              payload.rootNodes = [
                formatStoreForInspectorTree(store2._modules.root, "")
              ];
            }
          }
        });
        api.on.getInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            makeLocalGetters(store2, modulePath);
            payload.state = formatStoreForInspectorState(
              getStoreModule(store2._modules, modulePath),
              modulePath === "root" ? store2.getters : store2._makeLocalGettersCache,
              modulePath
            );
          }
        });
        api.on.editInspectorState(function(payload) {
          if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
            var modulePath = payload.nodeId;
            var path = payload.path;
            if (modulePath !== "root") {
              path = modulePath.split("/").filter(Boolean).concat(path);
            }
            store2._withCommit(function() {
              payload.set(store2._state.data, path, payload.state.value);
            });
          }
        });
        store2.subscribe(function(mutation, state) {
          var data = {};
          if (mutation.payload) {
            data.payload = mutation.payload;
          }
          data.state = state;
          api.notifyComponentUpdate();
          api.sendInspectorTree(INSPECTOR_ID);
          api.sendInspectorState(INSPECTOR_ID);
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: mutation.type,
              data
            }
          });
        });
        store2.subscribeAction({
          before: function(action, state) {
            var data = {};
            if (action.payload) {
              data.payload = action.payload;
            }
            action._id = actionId++;
            action._time = Date.now();
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: action._time,
                title: action.type,
                groupId: action._id,
                subtitle: "start",
                data
              }
            });
          },
          after: function(action, state) {
            var data = {};
            var duration = Date.now() - action._time;
            data.duration = {
              _custom: {
                type: "duration",
                display: duration + "ms",
                tooltip: "Action duration",
                value: duration
              }
            };
            if (action.payload) {
              data.payload = action.payload;
            }
            data.state = state;
            api.addTimelineEvent({
              layerId: ACTIONS_LAYER_ID,
              event: {
                time: Date.now(),
                title: action.type,
                groupId: action._id,
                subtitle: "end",
                data
              }
            });
          }
        });
      }
    );
  }
  var COLOR_LIME_500 = 8702998;
  var COLOR_DARK = 6710886;
  var COLOR_WHITE = 16777215;
  var TAG_NAMESPACED = {
    label: "namespaced",
    textColor: COLOR_WHITE,
    backgroundColor: COLOR_DARK
  };
  function extractNameFromPath(path) {
    return path && path !== "root" ? path.split("/").slice(-2, -1)[0] : "Root";
  }
  function formatStoreForInspectorTree(module, path) {
    return {
      id: path || "root",
      // all modules end with a `/`, we want the last segment only
      // cart/ -> cart
      // nested/cart/ -> cart
      label: extractNameFromPath(path),
      tags: module.namespaced ? [TAG_NAMESPACED] : [],
      children: Object.keys(module._children).map(
        function(moduleName) {
          return formatStoreForInspectorTree(
            module._children[moduleName],
            path + moduleName + "/"
          );
        }
      )
    };
  }
  function flattenStoreForInspectorTree(result, module, filter, path) {
    if (path.includes(filter)) {
      result.push({
        id: path || "root",
        label: path.endsWith("/") ? path.slice(0, path.length - 1) : path || "Root",
        tags: module.namespaced ? [TAG_NAMESPACED] : []
      });
    }
    Object.keys(module._children).forEach(function(moduleName) {
      flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + "/");
    });
  }
  function formatStoreForInspectorState(module, getters, path) {
    getters = path === "root" ? getters : getters[path];
    var gettersKeys = Object.keys(getters);
    var storeState = {
      state: Object.keys(module.state).map(function(key) {
        return {
          key,
          editable: true,
          value: module.state[key]
        };
      })
    };
    if (gettersKeys.length) {
      var tree = transformPathsToObjectTree(getters);
      storeState.getters = Object.keys(tree).map(function(key) {
        return {
          key: key.endsWith("/") ? extractNameFromPath(key) : key,
          editable: false,
          value: canThrow(function() {
            return tree[key];
          })
        };
      });
    }
    return storeState;
  }
  function transformPathsToObjectTree(getters) {
    var result = {};
    Object.keys(getters).forEach(function(key) {
      var path = key.split("/");
      if (path.length > 1) {
        var target = result;
        var leafKey = path.pop();
        path.forEach(function(p) {
          if (!target[p]) {
            target[p] = {
              _custom: {
                value: {},
                display: p,
                tooltip: "Module",
                abstract: true
              }
            };
          }
          target = target[p]._custom.value;
        });
        target[leafKey] = canThrow(function() {
          return getters[key];
        });
      } else {
        result[key] = canThrow(function() {
          return getters[key];
        });
      }
    });
    return result;
  }
  function getStoreModule(moduleMap, path) {
    var names = path.split("/").filter(function(n) {
      return n;
    });
    return names.reduce(
      function(module, moduleName, i) {
        var child = module[moduleName];
        if (!child) {
          throw new Error('Missing module "' + moduleName + '" for path "' + path + '".');
        }
        return i === names.length - 1 ? child : child._children;
      },
      path === "root" ? moduleMap : moduleMap.root._children
    );
  }
  function canThrow(cb) {
    try {
      return cb();
    } catch (e) {
      return e;
    }
  }
  var Module = function Module2(rawModule, runtime) {
    this.runtime = runtime;
    this._children = /* @__PURE__ */ Object.create(null);
    this._rawModule = rawModule;
    var rawState = rawModule.state;
    this.state = (typeof rawState === "function" ? rawState() : rawState) || {};
  };
  var prototypeAccessors$1 = { namespaced: { configurable: true } };
  prototypeAccessors$1.namespaced.get = function() {
    return !!this._rawModule.namespaced;
  };
  Module.prototype.addChild = function addChild(key, module) {
    this._children[key] = module;
  };
  Module.prototype.removeChild = function removeChild(key) {
    delete this._children[key];
  };
  Module.prototype.getChild = function getChild(key) {
    return this._children[key];
  };
  Module.prototype.hasChild = function hasChild(key) {
    return key in this._children;
  };
  Module.prototype.update = function update2(rawModule) {
    this._rawModule.namespaced = rawModule.namespaced;
    if (rawModule.actions) {
      this._rawModule.actions = rawModule.actions;
    }
    if (rawModule.mutations) {
      this._rawModule.mutations = rawModule.mutations;
    }
    if (rawModule.getters) {
      this._rawModule.getters = rawModule.getters;
    }
  };
  Module.prototype.forEachChild = function forEachChild(fn) {
    forEachValue(this._children, fn);
  };
  Module.prototype.forEachGetter = function forEachGetter(fn) {
    if (this._rawModule.getters) {
      forEachValue(this._rawModule.getters, fn);
    }
  };
  Module.prototype.forEachAction = function forEachAction(fn) {
    if (this._rawModule.actions) {
      forEachValue(this._rawModule.actions, fn);
    }
  };
  Module.prototype.forEachMutation = function forEachMutation(fn) {
    if (this._rawModule.mutations) {
      forEachValue(this._rawModule.mutations, fn);
    }
  };
  Object.defineProperties(Module.prototype, prototypeAccessors$1);
  var ModuleCollection = function ModuleCollection2(rawRootModule) {
    this.register([], rawRootModule, false);
  };
  ModuleCollection.prototype.get = function get(path) {
    return path.reduce(function(module, key) {
      return module.getChild(key);
    }, this.root);
  };
  ModuleCollection.prototype.getNamespace = function getNamespace(path) {
    var module = this.root;
    return path.reduce(function(namespace, key) {
      module = module.getChild(key);
      return namespace + (module.namespaced ? key + "/" : "");
    }, "");
  };
  ModuleCollection.prototype.update = function update$1(rawRootModule) {
    update([], this.root, rawRootModule);
  };
  ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
    var this$1$1 = this;
    if (runtime === void 0)
      runtime = true;
    {
      assertRawModule(path, rawModule);
    }
    var newModule = new Module(rawModule, runtime);
    if (path.length === 0) {
      this.root = newModule;
    } else {
      var parent = this.get(path.slice(0, -1));
      parent.addChild(path[path.length - 1], newModule);
    }
    if (rawModule.modules) {
      forEachValue(rawModule.modules, function(rawChildModule, key) {
        this$1$1.register(path.concat(key), rawChildModule, runtime);
      });
    }
  };
  ModuleCollection.prototype.unregister = function unregister(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    var child = parent.getChild(key);
    if (!child) {
      {
        console.warn(
          "[vuex] trying to unregister module '" + key + "', which is not registered"
        );
      }
      return;
    }
    if (!child.runtime) {
      return;
    }
    parent.removeChild(key);
  };
  ModuleCollection.prototype.isRegistered = function isRegistered(path) {
    var parent = this.get(path.slice(0, -1));
    var key = path[path.length - 1];
    if (parent) {
      return parent.hasChild(key);
    }
    return false;
  };
  function update(path, targetModule, newModule) {
    {
      assertRawModule(path, newModule);
    }
    targetModule.update(newModule);
    if (newModule.modules) {
      for (var key in newModule.modules) {
        if (!targetModule.getChild(key)) {
          {
            console.warn(
              "[vuex] trying to add a new module '" + key + "' on hot reloading, manual reload is needed"
            );
          }
          return;
        }
        update(
          path.concat(key),
          targetModule.getChild(key),
          newModule.modules[key]
        );
      }
    }
  }
  var functionAssert = {
    assert: function(value) {
      return typeof value === "function";
    },
    expected: "function"
  };
  var objectAssert = {
    assert: function(value) {
      return typeof value === "function" || typeof value === "object" && typeof value.handler === "function";
    },
    expected: 'function or object with "handler" function'
  };
  var assertTypes = {
    getters: functionAssert,
    mutations: functionAssert,
    actions: objectAssert
  };
  function assertRawModule(path, rawModule) {
    Object.keys(assertTypes).forEach(function(key) {
      if (!rawModule[key]) {
        return;
      }
      var assertOptions = assertTypes[key];
      forEachValue(rawModule[key], function(value, type) {
        assert(
          assertOptions.assert(value),
          makeAssertionMessage(path, key, type, value, assertOptions.expected)
        );
      });
    });
  }
  function makeAssertionMessage(path, key, type, value, expected) {
    var buf = key + " should be " + expected + ' but "' + key + "." + type + '"';
    if (path.length > 0) {
      buf += ' in module "' + path.join(".") + '"';
    }
    buf += " is " + JSON.stringify(value) + ".";
    return buf;
  }
  function createStore(options) {
    return new Store(options);
  }
  var Store = function Store2(options) {
    var this$1$1 = this;
    if (options === void 0)
      options = {};
    {
      assert(typeof Promise !== "undefined", "vuex requires a Promise polyfill in this browser.");
      assert(this instanceof Store2, "store must be called with the new operator.");
    }
    var plugins = options.plugins;
    if (plugins === void 0)
      plugins = [];
    var strict = options.strict;
    if (strict === void 0)
      strict = false;
    var devtools = options.devtools;
    this._committing = false;
    this._actions = /* @__PURE__ */ Object.create(null);
    this._actionSubscribers = [];
    this._mutations = /* @__PURE__ */ Object.create(null);
    this._wrappedGetters = /* @__PURE__ */ Object.create(null);
    this._modules = new ModuleCollection(options);
    this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
    this._subscribers = [];
    this._makeLocalGettersCache = /* @__PURE__ */ Object.create(null);
    this._scope = null;
    this._devtools = devtools;
    var store2 = this;
    var ref = this;
    var dispatch = ref.dispatch;
    var commit = ref.commit;
    this.dispatch = function boundDispatch(type, payload) {
      return dispatch.call(store2, type, payload);
    };
    this.commit = function boundCommit(type, payload, options2) {
      return commit.call(store2, type, payload, options2);
    };
    this.strict = strict;
    var state = this._modules.root.state;
    installModule(this, state, [], this._modules.root);
    resetStoreState(this, state);
    plugins.forEach(function(plugin) {
      return plugin(this$1$1);
    });
  };
  var prototypeAccessors = { state: { configurable: true } };
  Store.prototype.install = function install(app, injectKey) {
    app.provide(injectKey || storeKey, this);
    app.config.globalProperties.$store = this;
    var useDevtools = this._devtools !== void 0 ? this._devtools : true;
    if (useDevtools) {
      addDevtools(app, this);
    }
  };
  prototypeAccessors.state.get = function() {
    return this._state.data;
  };
  prototypeAccessors.state.set = function(v) {
    {
      assert(false, "use store.replaceState() to explicit replace store state.");
    }
  };
  Store.prototype.commit = function commit(_type, _payload, _options) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;
    var mutation = { type, payload };
    var entry = this._mutations[type];
    if (!entry) {
      {
        console.error("[vuex] unknown mutation type: " + type);
      }
      return;
    }
    this._withCommit(function() {
      entry.forEach(function commitIterator(handler) {
        handler(payload);
      });
    });
    this._subscribers.slice().forEach(function(sub) {
      return sub(mutation, this$1$1.state);
    });
    if (options && options.silent) {
      console.warn(
        "[vuex] mutation type: " + type + ". Silent option has been removed. Use the filter functionality in the vue-devtools"
      );
    }
  };
  Store.prototype.dispatch = function dispatch(_type, _payload) {
    var this$1$1 = this;
    var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;
    var action = { type, payload };
    var entry = this._actions[type];
    if (!entry) {
      {
        console.error("[vuex] unknown action type: " + type);
      }
      return;
    }
    try {
      this._actionSubscribers.slice().filter(function(sub) {
        return sub.before;
      }).forEach(function(sub) {
        return sub.before(action, this$1$1.state);
      });
    } catch (e) {
      {
        console.warn("[vuex] error in before action subscribers: ");
        console.error(e);
      }
    }
    var result = entry.length > 1 ? Promise.all(entry.map(function(handler) {
      return handler(payload);
    })) : entry[0](payload);
    return new Promise(function(resolve, reject) {
      result.then(function(res) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.after;
          }).forEach(function(sub) {
            return sub.after(action, this$1$1.state);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in after action subscribers: ");
            console.error(e);
          }
        }
        resolve(res);
      }, function(error) {
        try {
          this$1$1._actionSubscribers.filter(function(sub) {
            return sub.error;
          }).forEach(function(sub) {
            return sub.error(action, this$1$1.state, error);
          });
        } catch (e) {
          {
            console.warn("[vuex] error in error action subscribers: ");
            console.error(e);
          }
        }
        reject(error);
      });
    });
  };
  Store.prototype.subscribe = function subscribe(fn, options) {
    return genericSubscribe(fn, this._subscribers, options);
  };
  Store.prototype.subscribeAction = function subscribeAction(fn, options) {
    var subs = typeof fn === "function" ? { before: fn } : fn;
    return genericSubscribe(subs, this._actionSubscribers, options);
  };
  Store.prototype.watch = function watch$1(getter, cb, options) {
    var this$1$1 = this;
    {
      assert(typeof getter === "function", "store.watch only accepts a function.");
    }
    return vue.watch(function() {
      return getter(this$1$1.state, this$1$1.getters);
    }, cb, Object.assign({}, options));
  };
  Store.prototype.replaceState = function replaceState(state) {
    var this$1$1 = this;
    this._withCommit(function() {
      this$1$1._state.data = state;
    });
  };
  Store.prototype.registerModule = function registerModule(path, rawModule, options) {
    if (options === void 0)
      options = {};
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
      assert(path.length > 0, "cannot register the root module by using registerModule.");
    }
    this._modules.register(path, rawModule);
    installModule(this, this.state, path, this._modules.get(path), options.preserveState);
    resetStoreState(this, this.state);
  };
  Store.prototype.unregisterModule = function unregisterModule(path) {
    var this$1$1 = this;
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    this._modules.unregister(path);
    this._withCommit(function() {
      var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
      delete parentState[path[path.length - 1]];
    });
    resetStore(this);
  };
  Store.prototype.hasModule = function hasModule(path) {
    if (typeof path === "string") {
      path = [path];
    }
    {
      assert(Array.isArray(path), "module path must be a string or an Array.");
    }
    return this._modules.isRegistered(path);
  };
  Store.prototype.hotUpdate = function hotUpdate(newOptions) {
    this._modules.update(newOptions);
    resetStore(this, true);
  };
  Store.prototype._withCommit = function _withCommit(fn) {
    var committing = this._committing;
    this._committing = true;
    fn();
    this._committing = committing;
  };
  Object.defineProperties(Store.prototype, prototypeAccessors);
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$a = {
    __name: "wyheader",
    props: {
      icon: {
        type: String,
        default: "mic"
      },
      bgColor: {
        type: String,
        default: "#fff"
      },
      needBox: {
        type: Boolean,
        default: true
      }
    },
    setup(__props) {
      const store2 = useStore();
      const showMenu = () => {
        store2.commit("changeIsShowMenu", true);
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = vue.resolveComponent("uni-icons");
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode("view", { class: "head" }),
            vue.createElementVNode(
              "view",
              {
                class: "header",
                style: vue.normalizeStyle({ backgroundColor: __props.bgColor })
              },
              [
                vue.createVNode(_component_uni_icons, {
                  type: "bars",
                  size: "22",
                  onClick: showMenu
                }),
                vue.createElementVNode("view", { class: "content" }, [
                  vue.createCommentVNode(" 添加一个插槽 "),
                  vue.renderSlot(_ctx.$slots, "content", {}, void 0, true)
                ]),
                vue.createVNode(_component_uni_icons, {
                  type: __props.icon,
                  size: "22"
                }, null, 8, ["type"])
              ],
              4
              /* STYLE */
            ),
            __props.needBox ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "box"
            })) : vue.createCommentVNode("v-if", true)
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-f4ce61de"], ["__file", "C:/Users/74719/Desktop/code-space-master/uniapp/music/components/wyheader/wyheader.vue"]]);
  const _sfc_main$9 = {
    __name: "menuLeft",
    setup(__props) {
      const store2 = useStore();
      const isShow = vue.computed(() => {
        return store2.state.isShowMenu;
      });
      const hideMenu = () => {
        store2.commit("changeIsShowMenu", false);
      };
      return (_ctx, _cache) => {
        const _component_uni_icons = vue.resolveComponent("uni-icons");
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createElementVNode(
              "view",
              {
                class: vue.normalizeClass(["menu-left", vue.unref(isShow) ? "show" : "hide"])
              },
              [
                vue.createCommentVNode(" userInfo "),
                vue.createElementVNode("view", { class: "menu-hd" }, [
                  vue.createElementVNode("view", { class: "user-info" }, [
                    vue.createElementVNode("view", { class: "avatar" }, [
                      vue.createElementVNode("image", {
                        class: "pic",
                        src: "/static/logo.png",
                        mode: "aspectFill"
                      })
                    ]),
                    vue.createElementVNode("view", { class: "username" }, [
                      vue.createElementVNode("text", null, "蜗牛"),
                      vue.createVNode(_component_uni_icons, {
                        type: "right",
                        size: "16"
                      })
                    ])
                  ]),
                  vue.createCommentVNode(" 扫一扫 "),
                  vue.createElementVNode("view", { class: "qricon" }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "scan",
                      size: "24"
                    })
                  ])
                ]),
                vue.createElementVNode("view", { class: "menu-bd" }, "hello")
              ],
              2
              /* CLASS */
            ),
            vue.withDirectives(vue.createElementVNode(
              "view",
              {
                class: "menu-mask",
                onClick: hideMenu
              },
              null,
              512
              /* NEED_PATCH */
            ), [
              [vue.vShow, vue.unref(isShow)]
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  };
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-5a515901"], ["__file", "C:/Users/74719/Desktop/code-space-master/uniapp/music/components/menuLeft/menuLeft.vue"]]);
  const _sfc_main$8 = {
    __name: "songList",
    props: {
      list: Array,
      title: String
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_icons = vue.resolveComponent("uni-icons");
        return vue.openBlock(), vue.createElementBlock("view", { class: "recommend" }, [
          vue.createElementVNode("view", { class: "recommend-hd" }, [
            vue.createElementVNode(
              "view",
              { class: "title" },
              vue.toDisplayString(__props.title),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "more" }, [
              vue.createVNode(_component_uni_icons, {
                type: "right",
                size: "16"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "recommend-bd" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(__props.list, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "recommend-bd__item",
                  key: item.id
                }, [
                  vue.createElementVNode("view", { class: "item-pic" }, [
                    vue.createElementVNode("image", {
                      src: item.picUrl,
                      mode: "aspectFill"
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode(
                    "view",
                    { class: "title" },
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-29452354"], ["__file", "C:/Users/74719/Desktop/code-space-master/uniapp/music/components/songList/songList.vue"]]);
  const _sfc_main$7 = {
    __name: "recommendSong",
    props: {
      list: Array
    },
    setup(__props) {
      const props = __props;
      const swiperList = vue.ref([]);
      vue.onUpdated(() => {
        let arr = [];
        props.list.forEach((item, i) => {
          if (arr.length === 3) {
            swiperList.value.push(arr);
            arr = [];
          }
          arr.push(item);
        });
      });
      return (_ctx, _cache) => {
        const _component_uni_icons = vue.resolveComponent("uni-icons");
        return vue.openBlock(), vue.createElementBlock("view", { class: "recommend-song" }, [
          vue.createElementVNode("view", { class: "recommend-hd" }, [
            vue.createElementVNode("view", { class: "title" }, "推荐歌曲"),
            vue.createElementVNode("view", { class: "more" }, [
              vue.createVNode(_component_uni_icons, {
                type: "right",
                size: "16"
              })
            ])
          ]),
          vue.createElementVNode("swiper", { class: "swiper-wrap" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(swiperList.value, (item) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
                  vue.createElementVNode("view", { class: "swiper-item" }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(item, (song) => {
                        return vue.openBlock(), vue.createElementBlock("view", { class: "song-item" }, [
                          vue.createElementVNode("view", { class: "song-detail" }, [
                            vue.createElementVNode("view", { class: "pic" }, [
                              vue.createElementVNode("image", {
                                src: song.al.picUrl,
                                mode: "aspectFill"
                              }, null, 8, ["src"])
                            ]),
                            vue.createElementVNode("view", { class: "desc" }, [
                              vue.createElementVNode(
                                "view",
                                { class: "name" },
                                vue.toDisplayString(song.al.name),
                                1
                                /* TEXT */
                              ),
                              vue.createElementVNode("view", { class: "author" }, [
                                song.recommendReason ? (vue.openBlock(), vue.createElementBlock(
                                  "text",
                                  {
                                    key: 0,
                                    class: "reason"
                                  },
                                  vue.toDisplayString(song.recommendReason),
                                  1
                                  /* TEXT */
                                )) : vue.createCommentVNode("v-if", true),
                                vue.createTextVNode(
                                  " " + vue.toDisplayString(song.ar[0].name),
                                  1
                                  /* TEXT */
                                )
                              ])
                            ])
                          ]),
                          song.videoInfo.video ? (vue.openBlock(), vue.createElementBlock("view", {
                            key: 0,
                            class: "mv iconfont icon-video"
                          })) : vue.createCommentVNode("v-if", true)
                        ]);
                      }),
                      256
                      /* UNKEYED_FRAGMENT */
                    ))
                  ])
                ]);
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-4a8ab05d"], ["__file", "C:/Users/74719/Desktop/code-space-master/uniapp/music/components/recommendSong/recommendSong.vue"]]);
  const baseUrl = "http://192.168.43.144:3000";
  const apiGetBanner = (data) => {
    return uni.request({
      url: baseUrl + "/banner",
      method: "GET",
      data
    });
  };
  const apiGetBall = () => {
    return uni.request({
      url: baseUrl + "/homepage/dragon/ball",
      method: "GET"
    });
  };
  const apiGetRecommendList = () => {
    return uni.request({
      url: baseUrl + "/recommend/resource",
      method: "GET"
    });
  };
  const apiGetRecommendSongs = () => {
    return uni.request({
      url: baseUrl + "/recommend/songs",
      method: "GET"
    });
  };
  const apiGetPersonalizedList = () => {
    return uni.request({
      url: baseUrl + "/personalized?limit=6",
      method: "GET"
    });
  };
  const _sfc_main$6 = {
    __name: "index",
    setup(__props) {
      const state = vue.reactive({
        banners: [],
        balls: [],
        recommendList: [],
        recommendSongs: [],
        personalizedList: []
      });
      onLoad(() => {
        getBanner();
        getBall();
        getRecommendList();
        getRecommendSongs();
        getPersonalizedList();
      });
      const getBanner = () => {
        apiGetBanner({ type: 2 }).then((res) => {
          state.banners = res.data.banners;
        });
      };
      const getBall = async () => {
        const { data: { data: balls } } = await apiGetBall();
        state.balls = balls;
      };
      const getRecommendList = async () => {
        const { data: { recommend } } = await apiGetRecommendList();
        state.recommendList = recommend;
      };
      const getRecommendSongs = async () => {
        const res = await apiGetRecommendSongs();
        state.recommendSongs = res.data.data.dailySongs;
      };
      const getPersonalizedList = async () => {
        const res = await apiGetPersonalizedList();
        formatAppLog("log", "at pages/index/index.vue:96", res.data.result);
        state.personalizedList = res.data.result;
      };
      return (_ctx, _cache) => {
        const _component_uni_search_bar = vue.resolveComponent("uni-search-bar");
        const _component_wyheader = resolveEasycom(vue.resolveDynamicComponent("wyheader"), __easycom_0);
        const _component_menuLeft = resolveEasycom(vue.resolveDynamicComponent("menuLeft"), __easycom_1);
        const _component_songList = resolveEasycom(vue.resolveDynamicComponent("songList"), __easycom_2);
        const _component_recommendSong = resolveEasycom(vue.resolveDynamicComponent("recommendSong"), __easycom_3);
        return vue.openBlock(), vue.createElementBlock("view", { class: "index" }, [
          vue.createVNode(_component_wyheader, null, {
            content: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "search" }, [
                vue.createVNode(_component_uni_search_bar, { placeholder: "歌曲" })
              ])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createCommentVNode(" menu "),
          vue.createVNode(_component_menuLeft),
          vue.createCommentVNode(" banner "),
          vue.createElementVNode("view", { class: "banner" }, [
            vue.createElementVNode("swiper", {
              "indicator-dots": true,
              autoplay: false,
              interval: 3e3,
              duration: 1e3,
              "indicator-color": "#eee",
              "indicator-active-color": "#d81e06",
              circular: ""
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(state.banners, (item) => {
                  return vue.openBlock(), vue.createElementBlock("swiper-item", {
                    key: item.encodeId
                  }, [
                    vue.createElementVNode("view", { class: "swiper-item" }, [
                      vue.createElementVNode("image", {
                        src: item.pic,
                        mode: ""
                      }, null, 8, ["src"])
                    ])
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          vue.createCommentVNode(" balls "),
          vue.createElementVNode("view", { class: "balls" }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList(state.balls, (item) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "ball-item",
                  key: item.id
                }, [
                  vue.createElementVNode("view", { class: "icon" }, [
                    vue.createElementVNode("image", {
                      src: item.iconUrl,
                      mode: "aspectFill"
                    }, null, 8, ["src"])
                  ]),
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          vue.createCommentVNode(" 推荐歌单 "),
          vue.createVNode(_component_songList, {
            list: state.recommendList,
            title: "推荐歌单"
          }, null, 8, ["list"]),
          vue.createCommentVNode(" 推荐歌曲 "),
          vue.createVNode(_component_recommendSong, {
            list: state.recommendSongs
          }, null, 8, ["list"]),
          vue.createCommentVNode(" xxx雷达歌单 "),
          vue.createVNode(_component_songList, {
            list: state.personalizedList,
            title: "蜗牛的雷达歌单"
          }, null, 8, ["list"])
        ]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-1cf27b2a"], ["__file", "C:/Users/74719/Desktop/code-space-master/uniapp/music/pages/index/index.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {};
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 播客 ");
  }
  const PagesPlayPlay = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3], ["__file", "C:/Users/74719/Desktop/code-space-master/uniapp/music/pages/play/play.vue"]]);
  const _sfc_main$4 = {
    __name: "mine",
    setup(__props) {
      const store2 = useStore();
      const isLogin = vue.computed(() => {
        return store2.state.loginState;
      });
      return (_ctx, _cache) => {
        const _component_wyheader = resolveEasycom(vue.resolveDynamicComponent("wyheader"), __easycom_0);
        const _component_menuLeft = resolveEasycom(vue.resolveDynamicComponent("menuLeft"), __easycom_1);
        const _component_uni_icons = vue.resolveComponent("uni-icons");
        return vue.openBlock(), vue.createElementBlock("view", { class: "mine" }, [
          vue.createVNode(_component_wyheader, {
            icon: "more-filled",
            bgColor: "transparent",
            needBox: false
          }, {
            content: vue.withCtx(() => [
              vue.createElementVNode("view", null, "我的音乐")
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_menuLeft),
          vue.createElementVNode("view", { class: "mine-bd" }, [
            vue.createElementVNode("view", { class: "user" }, [
              vue.createElementVNode("view", { class: "pic" }, [
                vue.createElementVNode("image", {
                  src: "/static/logo.png",
                  mode: "aspectFill"
                })
              ]),
              vue.unref(isLogin) ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "user-online"
              }, " 已经登录 ")) : (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "user-outline"
              }, [
                vue.createElementVNode("text", null, "立即登录"),
                vue.createVNode(_component_uni_icons, {
                  type: "right",
                  size: "16"
                })
              ]))
            ])
          ])
        ]);
      };
    }
  };
  const PagesMineMine = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-7c2ebfa5"], ["__file", "C:/Users/74719/Desktop/code-space-master/uniapp/music/pages/mine/mine.vue"]]);
  const _sfc_main$3 = {
    data() {
      return {};
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_wyheader = resolveEasycom(vue.resolveDynamicComponent("wyheader"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "follow" }, [
      vue.createVNode(_component_wyheader, { icon: "plus-filled" }, {
        content: vue.withCtx(() => [
          vue.createElementVNode("text", null, "动态")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createTextVNode(" 关注 ")
    ]);
  }
  const PagesFollowFollow = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "C:/Users/74719/Desktop/code-space-master/uniapp/music/pages/follow/follow.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {};
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 社区 ");
  }
  const PagesCommunityCommunity = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "C:/Users/74719/Desktop/code-space-master/uniapp/music/pages/community/community.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {};
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, " 登录 ");
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "C:/Users/74719/Desktop/code-space-master/uniapp/music/pages/login/login.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/play/play", PagesPlayPlay);
  __definePage("pages/mine/mine", PagesMineMine);
  __definePage("pages/follow/follow", PagesFollowFollow);
  __definePage("pages/community/community", PagesCommunityCommunity);
  __definePage("pages/login/login", PagesLoginLogin);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:5", "App Launch");
      let key = uni.getStorageSync("cookie");
      if (!key) {
        this.$store.commit("changeLoginState", false);
        return;
      }
      uni.request({
        url: baseUrl + "/login/status",
        data: {
          cookie: key
        },
        success: (res) => {
          formatAppLog("log", "at App.vue:19", res.data.data.account.id);
          let id = res.data.data.account.id;
          if (id) {
            this.$store.commit("changeLoginState", true);
            this.getUser(key);
          }
        }
      });
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:30", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:33", "App Hide");
    },
    methods: {
      getUser(key) {
        if (!key)
          return;
        uni.request({
          url: baseUrl + "/user/account",
          data: {
            cookie: key
          },
          success: (res) => {
            formatAppLog("log", "at App.vue:44", res);
            let nickname = res.data.profile && res.data.profile.nickname;
            let id = res.data.profile && res.data.profile.userId;
            let avatar = res.data.profile && res.data.profile.avatarUrl;
            this.$store.commit("getUserInfo", { nickname, userId: id, avatar });
          }
        });
      }
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/74719/Desktop/code-space-master/uniapp/music/App.vue"]]);
  const store = createStore({
    state: {
      isShowMenu: false,
      // 控制菜单显示隐藏
      loginState: false,
      // 是否登录
      userInfo: {
        // 用户信息
        nickname: "",
        userId: null,
        avatar: ""
      }
    },
    mutations: {
      changeIsShowMenu(state, flag) {
        state.isShowMenu = flag;
      },
      changeLoginState(state, val) {
        state.loginState = val;
      },
      getUserInfo(state, opt) {
        state.userInfo = opt;
      }
    }
  });
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(store);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);

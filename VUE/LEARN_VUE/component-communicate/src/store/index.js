import  { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            lists: ['html', 'css', 'javascript', 'vue', 'react', 'nodejs', 'mongodb', 'mysql', 'webpack', 'git']
        };
    },
    mutations: {
        listsAdd(state, val) {
            state.lists.push(val);
        }
    }
});

export default store;

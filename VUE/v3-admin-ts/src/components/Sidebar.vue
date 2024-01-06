<template>
    <div class="sidebar">
        <!-- 菜单 -->
        <el-menu
            class="sidebar-el-menu"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            :collapse="collapse"
            :default-active="route.path"
            router
            >
            <!-- 定制菜单内部 slot自定义组件内部  -->
            <template v-for="item in items">
                <!-- 多级菜单用这个 -->
                <template v-if="item.subs">
                    <el-sub-menu :index="item.index" 
                    :key="item.index" v-permiss="item.permiss">
                    <template #title>
                            <el-icon>
                                <component :is="item.icon"/>
                            </el-icon>
                            <span>{{item.title}}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-menu-item 
                                :index="subItem.index"
                                v-permiss="item.permiss"
                            >
                            {{subItem.title}}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <!-- 单级菜单用这个 -->
                <template v-else>
                    <el-menu-item :index="item.index" 
                    :key="item.index"
                    v-permiss="item.permiss">
                    <!-- 输出多个图标 -->
                        <el-icon>
                            <!-- component组件占位符 组件name -->
                            <!-- 引入组件两种方法，第一种直接输出组件名 第二种使用component输入组件名字 -->
                            <component :is="item.icon" />
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
// import { roleTypes } from 'element-plus';
// import { computed } from 'vue'
import{ useRoute } from 'vue-router'
import { useSidebarStore } from '../store/sidebar';
import { computed } from 'vue';

const route=useRoute()
const SidebarStore=useSidebarStore();
const collapse = computed(()=> SidebarStore.collapse);
// const onRoutes=computed(()=>{
//     return route.path
// })
    const items=[
        {
            icon:'Odometer',
            index:'/dashboard',
            title:'系统首页',
            permiss:'1'

        },
        {
            icon:"Calendar",
            index:'1',
            title:'表格相关',
            permiss:'2',
            subs:[
                {
                    index:'/table',
                    title:'常用表格',
                    permiss:'2'
                },
                {
                    index:'/import',
                    title:'导入excel',
                    permiss:'2'
                },
                {
                    index:'/export',
                    title:'导出excel',
                    permiss:'2'
                }
            ]
        },
        {
            icon:'Edit',
            index:'3',
            title:'表单相关',
            permiss:'4',
            subs:[
                {
                    index:'/form',
                    title:'基本表单',
                    permiss:'5',
                },
                {
                    index:'/upload',
                    title:'文件上传',
                    permiss:'6',
                }
            ]

        },
    ]
</script>

<style scoped>

</style>
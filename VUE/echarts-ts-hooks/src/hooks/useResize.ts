import { onMounted,onUnmounted } from 'vue' // onUnmounted 用于在组件卸载时移除监听


/**
 * 窗口缩放监听
 * @param handlerFn  回调函数
 * @param immediate 是否立即执行
*/

// import { onMounted } from "vue"

export function useResize(
    handlerFn:()=>void,//返回值为空
    immediate:boolean = true // 默认为true
){
    const handler = ()=>{
        handlerFn()
    }
    onMounted(()=>{
        window.addEventListener('resize',handler)
        immediate && handler()
        if(immediate){
            handler()
        }
    })
    onUnmounted(()=>{
        window.removeEventListener('resize',handler)
    })
}
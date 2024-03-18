// patches 的过程 有哪些改变需要收集？ 
// [{type:}]
// patchFlag 变量 响应式业务后生成的 哪种类型的改变
// [{type:patchFlag}]
//在新旧dom树里面有很多类型或者值，当生成新的dom树的时候，vue需要对比新旧dom树的差异，然后生成patchs，然后再根据patchs去更新dom树
//在其中patch会使用if语句逐个对比新旧dom树的差异，然后生成patchs
const PatchFlags = {
    class: 1,
    TEXT:2,
    STYLE:4,
    Element: 16,
    COMPONENT: 32,
}
patchFlag = 1 //0001
patchFlag = 2 //0010
if (patchFlag&PatchFlags.CLASS){
    if(oldProps.class !== newProps.class){
        hotPatchProp(el,'class',nullnewProps.class,isSVG)
    }
}else if(PatchFlags&PatchFlags.STYLE){
    

}else if(shapFlag & ShapeFlag.COMPONENT){
    // 组件的patch
}else if(ShapeFlag & ShapeFlag.ELEMENT){
    // 元素的patch
}
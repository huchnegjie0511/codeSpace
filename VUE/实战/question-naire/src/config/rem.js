(function(){//自执行函数源码不干扰其他js文件
    var docEl=document.documentElement//获取页面的根节点,读取html的标签
    var resizeEvt='orientationchange' in window?'orientationchange':'resize'//判断是否支持orientationchange事件,如果支持就是orientationchange,否则就是resize
    var recalc=function(){//定义一个函数
        var clientWidth=docEl.clientWidth//获取页面的宽度
        if(!clientWidth) return//如果页面的宽度不存在,就返回
        docEl.style.fontSize=20*(clientWidth/320)+'px'//设置根节点的字体大小  /320是把iphone5的手机屏幕作为标准
    }
    window.addEventListener(resizeEvt,recalc,false)//监听resizeEvt事件,调用recalc函数，设备尺寸变更实时重置字体大小
    doc.addEvebtlistener('DONContentLoaded',recalc)

})(document,window);
const https=require('https');
const cheerio= require('cheerio')
const fs=require('fs')
https.get('https://movie.douban.com/top250',(res)=>{//形参res写什么都可以
    // console.log(res);
    let html ='';

    res.on('data',(chunk)=>{
        // console.log(chunk+'');//直接打印是十六进制数据,通过chunk+''可以更改进制  由于数据过大，会分段读取，自动合并
        html+=chunk;
    });//监听方法,表示读取数据的过程中就会触发,监听数据读取
    res.on('end',()=>{
        //不能直接写document因为是浏览器赋予的，所以node没有，不能直接写,直接使用cheerio包
        const $=cheerio.load(html);
        const result = []
        $('li .item').each(function(){
            const tittle=$('.info .title',this).text();//info容器下的tittle 只要没有重名就会自动找到
            const star =$('.info .bd .rating_num',this).text();
            const pic=$('.pic img',this).attr('src');//读属性使用attr
            result.push({
                tittle,
                star,
                pic
            })
        })
        fs.writeFile('./list.json',JSON.stringify(result),(err,data)=>{
            if (err){
                throw err;
            }
            console.log('文件写入成功')
        })
        console.log(result);
    })
});//只有传统页面才可以直接爬

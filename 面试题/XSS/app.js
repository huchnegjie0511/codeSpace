const express = require('express')
const path = require('path')
const app = express()
const ejs = require('ejs');

app.set('views', path.join(__dirname, 'views'));//设置了模板的目录
app.engine('html', ejs.__express);//设置了模板引擎为ejs
app.set('view engine', 'html');//设置了模板引擎为html


app.get('/', function (req, res) {//路由
  res.render('index', {title:'express', xss: req.query.xss})//渲染模板
})


app.listen(3000, () => {//监听3000端口
  console.log('listening on 3000');
})
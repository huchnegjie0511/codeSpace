 const http = require('http');
 const url = require('url');

const responseData = {
    ID: 123,
    Name: 'Tom',
    RegisterDate: '2020-01-01'
};  


 function toHTML(data){
    return `
    <ul>
        <li><span>账号:</span>${data.ID}</li>
        <li><span>账号:</span>${data.Name}</li>
        <li><span>注册时间:</span>${data.RegisterDate}</li>
    <ul>
    `
 }

 const server = http.createServer((req, res) => {
        const { pathname } = url.parse(`http://${req.headers.host}${req.url}`);
        if (pathname === '/hello') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello, World!');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    }
);

server.listen(3000, () => { 
    console.log('Server is listening on port 3000');
}
);

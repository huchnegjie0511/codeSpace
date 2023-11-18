const button1=document.getElementById('login-button');
const username=document.getElementById('login').value;
const password=document.getElementById('login-password').value;

button1.addEventListener('click',()=>{
    const username=document.getElementById('login').value;
    const password=document.getElementById('login-password').value;
    console.log(1221);
    fetch(`http://192.168.31.45:3000/login?username=${username}&password=${password}`)
    .then(data=>data.json())
    .then(data=>{
        console.log('提交成功');
    })
})


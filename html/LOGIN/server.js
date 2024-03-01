const btn=document.getElementById('login-button');
const username=document.getElementById('login').value;
const password=document.getElementById('login-password').value;

btn.addEventListener('click',()=>{
    const username=document.getElementById('login').value;
    const password=document.getElementById('login-password').value;
    console.log(1221);
    fetch(`http://192.168.43.144:3000/login?username=${username}&password=${password}`)
    .then(data=>data.json())
    .then(res =>{
        console.log(res);
    })
})


let a = 1 

console.log(a) // 1
setTimeout(() => {
 console.log(a)
}, 1000)

for (let i = 0; i < 10000; i++) {
  a++
}
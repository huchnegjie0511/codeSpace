
console.log('start');


setTimeout(() => {
  console.log('setTimeout');
  setTimeout(() => {
    console.log('setTimeout2');
  });
}, 1000);


new Promise((resolve, reject) => {
  console.log('promise');
  resolve();
}).then(() => {     // then1
  console.log('then1');
})
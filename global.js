setTimeout(() =>{
    console.log('timeout');
    clearInterval(int)
    clearInterval(name)
},3000)

const int = setInterval(() => {
    console.log('interval');
}, 1000);

const name = setInterval(() => {
    console.log('tashi');
}, 2000);
console.log(__dirname);
console.log(__filename);
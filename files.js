 const fs = require('fs');

// // // fs.readFile('./docs/blogs.txt', (err,data) => {
// // //     if (err) {
// // //         console.log(err);
// // //     }
// // //     console.log(data.toString());
// // // })

// // // fs.writeFile('./docs/blogs.txt','Hey man',() => {
// // //     console.log('file was written');
// // // })

// // // fs.writeFile('./docs/blogs1.txt','wai charo',() => {
// // //     console.log('file was written');
// // // })

// // // if (!fs.existsSync('./assets')){

// // //     fs.mkdir('./assets', (err)=>{
// // //         if (err){
// // //             console.log(err);
// // //         }
// // //         console.log('folder created');
// // //     })
// // // }
// // // else{
// // //     fs.rmdir('./assets', (err)=>{
// // //         if (err){
// // //             console.log(err);
// // //         }
// // //         console.log('folder deleted');
// // //     })
// // // }

// //   if (fs.existsSync ('./docs/blogs.txt')){
// //       fs.unlink('./docs/blogs.txt',(err)=>{
// //           if (err){
// //               console.log(err);
// //           }
// //           console.log('file deleted')
// //       })
// //   }

// const fs = require('fs');

// const readStream = fs.createReadStream('./docs/blogs2.txt',{encoding:'utf8'})
// const writestream = fs.createWriteStream('./docs/blogs4.txt')

// readStream.pipe(writestream);





// const sum = (x,y)=>{
//     const ans = x+y;
//     return ans;
// }
// console.log(sum(2,3));

const num = (x)=>{
    if (x%3==0 && x%5==0){
        return 'buzz';
    } else{
        return 'fizz';
    }
}
console.log(num(15));






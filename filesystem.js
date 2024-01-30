//node.js =>>serve-side javascript runtime enveronment

//fs is a one of module 

//  const fs=require('fs');
//cmd type pwd -----you got one path take and past
//fs.stat is a method
//node fileststem
// stat la 2 arrgument fist is path another one is  callback in callback 1 is err 2 is stats

///////////////////////////////////asynchronous way

// fs.stat("D:/learning/GUVI/NODE_js/day_39_1/filesystem.js",(err,stats)=>{
//     if (err) {
//         console.log(err);
//         return;
        
//     }
//      console.log(stats);
//   console.log(stats.isFile());
// console.log(stats.isDirectory());
// console.log(stats.isSymbolicLink());
// console.log(stats.size);
//  });


/////////////////////////////blocking or synchronous
// const fs = require('fs/promises');
// async function test(){
//     try{
//       const stats = await fs.stat("D:/learning/GUVI/NODE_js/day_39_1/filesystem.js");
//     //   console.log(stats.isFile());
//     } catch(err){
//         console.log(err);

//     }
// }
// test();

// const test = "D:/learning/GUVI/NODE_js/day_39_1/";
// console.log(path.dirname(test));
// console.log(path.basename(test));
// console.log(path.extname(test));
// console.log(path.basename(test,path.extname(test)));


///////////////////////////////////////////sathish////////////////////////////////////////////////////////
// Node.js => server-side JavaScript Runtime Environment
///////////////////////// asynchronous way
// const fs=require('fs');
// fs.stat("D:/learning/GUVI/NODE_js/day_39_1/filesystem.js",(err,stats)=>{
//         if (err) {
//             console.log(err);
//             return;
            
//         }
        // console.log(stats);
        // console.log(stats.isFile());
        // console.log(stats.isDirectory());
        // console.log(stats.isSymbolicLink());
        // console.log(stats.size);

    // });




////////////////////////// asynchronous way     non blocking way
// fs.stat('/Users/sathish/Desktop/b47-wd-tamil-dsa/nodejs/filesystem.js', (err, stats) => {
//     if(err){
//         console.error(err);
//         return;
//     }

//     // console.log(stats.isFile());
//     // console.log(stats.isDirectory());
//     // console.log(stats.isSymbolicLink());
//     console.log(stats.size);
// });

//////////////////////////// blocking or synchronous
// const fs = require('fs/promises');
// async function test(){
//     try {
       
//         const stats = await fs.stat('D:/learning/GUVI/NODE_js/day_39_1/filesystem.js');
//         console.log(stats.isFile());
//     } catch (err){
//         console.error(err);
//     }
// }
// test();

///////////////////////////////////////////////////path////////////////////////////////
// const fs = require('fs');
// const path = require('path');
// const test = 'D:/learning/GUVI/NODE_js/day_39_1/test.txt';
// const text = 'D:/learning/GUVI/NODE_js/day_39_1/text.txt';
//console.log(path.dirname(test));  //directory name   D:/learning/GUVI/NODE_js/day_39_1
// console.log(path.basename(test));  // text file name  test.txt
// console.log(path.extname(test));     //.txt
//  console.log(path.basename(test, path.extname(test)));  //only file name  test
//  console.log(path.basename(text, path.extname(text)));


//print all files
// const fs = require('fs');
// const path = require('path');
//  const folderPath = 'D:/learning/GUVI/NODE_js/day_39_1/';

// fs.readdir(folderPath, (err, files) => {
//     if(err){
//         console.error(err);
//         return;
//     }
// console.log(files);
//     files.forEach(file => {
//         console.log(file, path.resolve(file));
//     });
// });



//////////////////// read the contents of a file   asy
//  const fs = require('fs');

// fs.readFile('D:/learning/GUVI/NODE_js/day_39_1/test.txt','utf-8', (err, data) => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     // console.log(data);
//   console.log(data.split('\n'));
//     // console.log(data);

// });


//////////////////// write contents to a file
//r+ read and write
//w+ replace all
//a+ append
//   const fs = require('fs');

//this replac all from test file
//   fs.writeFile('/learning/GUVI/NODE_js/day_39_1/test.txt', 'Hello saveen', err => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     // file is written successfully
//      console.log('contents written to the file!');
// })

// not replace the file and appended the text content
// fs.writeFile('/learning/GUVI/NODE_js/day_39_1/test.txt', '\nHello World!', {flag: 'a+'}, err => {
//     if(err){
//         console.error(err);
//         return;
//     }
//     // file is written successfully
//      console.log('contents written to the file!');
// })


///////////////////////////// create a new folder
//  const fs = require('fs'); 
// const path = require('path');
// const folderName = '/learning/GUVI/NODE_js/day_39_1/testDir';
// try {
//     if(!fs.existsSync(folderName)){
//         fs.mkdirSync(folderName);
//     }
// } catch(error){
//     console.error(error);
// }

//  const files = fs.readdirSync('/learning/GUVI/NODE_js/day_39_1');
// //  console.log(files);

// files.forEach(file => {
//     // console.log("file",file);
//     const resolvedPath = path.resolve(path.join('day_39_1', file));
//     // console.log(path.join('day_39_1',file));
//   console.log("resolvedPath",resolvedPath);

//     // fs.stat(resolvedPath, (err, stats) => {
//     //     if(err){
//     //         console.error(err);
//     //         return;
//     //     }

//     //     console.log(resolvedPath, stats.isFile());
//     // });
// });



// const fs = require('fs');

// const filePath = 'path/to/file.json';

// const timestamp = Date.now();

// const data = {
//   timestamp: timestamp
// };

// const jsonData = JSON.stringify(data);

// fs.writeFile(filePath, jsonData, 'utf8', (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//     return;
//   }

//   console.log('File has been saved with the current timestamp.');
// });




///////////////////////////////////////////sathish////////////////////////////////////////////////////////
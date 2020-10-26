const fs = require('fs')
const path = require('path')
// fs.mkdir(path.join(__dirname,'test') ,(err)=>{if(err){throw err}
// console.log('creatting complited')
// })

// const filePath = path.join(__dirname,'test','text.txt')
// fs.writeFile(filePath,'hello',err=>{
//     if(err){
//         throw err
//     }
//     console.log('creatting complited')
// })

fs.readFile(filePath,(err,content)=>{
 if(err){
     throw err
 }  
 const data = Buffer.from(content)
 console.log('content: ', data.toString()) 
})
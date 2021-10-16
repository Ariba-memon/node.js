// console.log('Hello world')

// const fs = require('fs')
// const path = require('path')
// const os = require('os')
// const event = require('events')

// const emitter = new EventEmitter()
// fs.readdir('./',function(err,res){
//     console.log(res)
// })


// readfile

// fs.readFile('./index.html','utf8',function(err,filedata){
//     if(err){
//         console.log('Error ===>',err)
//     }else{
//         console.log('Data ===>',filedata)
//     }
// })

// fs.writeFile('./index.html','<h1>hello</h1>',function(err,writeFile){
//         if(err){
//             console.log(err)
//         }else{
//             console.log('Write sucessfully')
//         }
//     })


// Appendfile
// fs.appendFile('./index.html','add somethinng',function(err,writeFile){
//         if(err){
//             console.log(err)
//         }else{
//             console.log(' sucessfully')
//         }
//     })


// const pathobj = path.parse(__filename)
// console.log(pathobj)


//  console.log(os.freemem())
//  console.log(os.totalmem())


const express = require('express');
const { appendFile } = require('fs');
const { request } = require('http');
const { response } = require('express');
const app = express();
console.log('hello')

app.listen(3000,()=>{
    console.log('server is runing on local host 3000')
    console.log('server chal gaya')
})

app.get('/'),(request,response) =>{
    response.send('hello world')
}


app.get('/getUsers'),(request,response) =>{
    response.send([{ name: 'ariba'},])
}


app.get('/getTodos'),(request,response) =>{
    console.log(request)
    response.send([{ title: 'test'},{ title: 'test1'}])
}

app.use(express.json())
app.post('/sendData'),(request,response) =>{
    console.log(request.body)
    response.send('data mil gaya')
}
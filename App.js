// function add(a,b){
//     return a+b;
// }
// const result = add(10,20)
// console.log("Result:",result);

const fs=require('fs');
//fs.writeFile()

fs.writeFile('student.txt',"This is nodejs",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File created sucessfully");
})


fs.appendFile('student.txt',"\nHello World",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("File updated sucessfully");
})



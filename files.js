const fs = require('fs');

fs.readFile('./docs/blog1.txt', (err,data) =>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
// this executes first as readfile is asynchronous and it take some time to execute.
console.log("hello");


fs.writeFile('./docs/blog1.txt','hello world',()=>{
    console.log('file is written');
});
fs.writeFile('./docs/blog2.txt','File created from code',()=>{
    console.log('file is written');
});


if(!fs.existsSync('./assests')){
    fs.mkdir('./assests',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    });

} else {
    fs.rmdir('./assests',(err)=> {
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    });
}



if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlinkSync('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('file deleted');
    }); // deletes the file
}
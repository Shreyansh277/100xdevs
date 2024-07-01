## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.




const fs = require('fs');


const contentTowrite= "HELLO ANSH";

fs.appendFile("a.txt",contentTowrite,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Content written successfully");
    }
});






fs.writeFile("a.txt",contentTowrite,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Content written successfully");
    }
});











for(let i=0;i<100;i++)
{
console.log(i);
}

console.log("done");
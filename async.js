// CRUS Using fs module in asynchronous way

const fs =require("fs");

// Making a folder named async

fs.mkdir("Async", (err)=>{
console.log("Folder Made");
})
 

//make a text file in folder


fs.writeFile("Async/her.txt","Mein Hoon Din", (err, data)=>{
    console.log("Folder Made");
})

// Addind data into existing file

fs.appendFile("Async/her.txt", "Tum bahdiua hao",(err, data)=>{
        console.log("qdded");
})

//Reading the file wwithou bufer using encoding
const dataa= fs.readFile("Async/her.txt", "utf-8", (err, data)=>{
            console.log(data);});

// Rename the text file

fs.rename("Async/her.txt", "Async/min.text",  (err)=>{
                console.log("rename");
});

// Delete the file 

fs.unlink('Async/min.text', (err)=>{
    console.log("deleted");} )

//  delete the folder    

    fs.rmdir('Async',  (err)=>{
        console.log("deleted");} )
// const express = require("express");
// const app = express();

// function sum(n){
//     let ans =0;
//     for(let i=0; i<=n; i++){
//         ans= ans +i;
//     }
//     return ans;
// }


// app.get("/", (req,res)=> {
//     const n= req.query.n;
//     const ans= sum(n);
//     res.send("hello your ans is "+ ans);
// });

// // app.listen(3000);
// const  express = require("express");
// const app= express();
// app.use(express.json());

// const books= [{"id":0,"name" : "alchemist", "auhtor":"paulo" }, {"id":1, "name" :"richdad", "author": "robert"}]

// app.get("/books", (req,res)=>{
//     res.json(books);
// });

// app.post("/books", (req,res)=>{
//    const newBook = req.body;
//    books.push(newBook);
// });

// app.put("/", (req,res)=> {

// });

// app.delete("/", (req,res)=>{

// });

// app.listen(3000);


/*Assignments week02 (JS)

const fs = require("fs");

fs.readFile("abc.txt", "utf8", (err,data)=>{

    if(err){
        console.log(err);
        return;
    }

    let trimdata = data.replace( /\s{2,}/g, " ");


    fs.writeFile("trim.txt", trimdata, "utf8", (err) =>{
        if(err){
        console.log(err);
        return;
        }
    });
    
    
});  */

// const date= new Date.now();

// console.log(date);

// let num = [1, 2, 3, 4, 7, 8, 9, 0, 11, 111];
// function high() {
//     let highest = num[0];
//     for (let i = 1; i < num.length; i++) {
//         if (highest < num[i]) {
//             highest = num[i];
//         }
//     }
//     return highest;
// }

// console.log(high());

// let num = [3,4,55,6];

// let high = Math.max(...num);

// console.log(high);



// let people = [{ name: "hadi rasool", gender: "male" }, { name: "hadiya shafiq", gender: "female" }, { name: "imaad javid ", gender: "male" }];

// for (let i = 0; i < people.length; i++) {

//     if (people[i].gender == "male") {
//         let space = people[i].name.indexOf(" ");
//         console.log(people[i].name.substring(0,space));
//     }

// }


// let myName = "hadi rasool";
// console.log(myName.split(" ")[0]);


// function counter(){
//     for( i= 30; i>0; i--){
//         setTimeout(() => {console.log(i)}, 1000);
//     }
// }

// counter();

// function counter(i) {
//     console.log(i);
//     if (i > 0) {
//         setTimeout(function() {
//             counter(i - 1);
//         }, 1000); // Delay of 1000ms (1 second)
//     }
// }

// counter(30); // Start the countdown from 30



// function counter() {
//     for (let i = 0; i < 30; i++) {
//         setTimeout(() => {
//             console.log(30-i);
//         }, 1000*i);
//     }
// }

// counter(); // Start the countdown from 30

// var a= 1;

// function data(){
//     if(!a){
//         var a=10;
//     }
//     console.log(a);
// }

// data();
// console.log(a);

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];


// let object = {
//     name: "hadi",
//     sem: "first"
// };

// console.log(object.name);
// function hello(){
// console.log("hello");
// }

// for(i=0; i<100; i++){
//     hello();
// }


// setTimeout( () => {console.log("hi")}, 1000);



// Read from a file 
// const fs = require('fs');

// function startRead(){
// let readFiile = new Promise ( function (resolve,reject) {
//     fs.readFile("trim.txt", "utf-8", function (err, data){
//         resolve(data);
//     })
// });
// return readFiile;
// }

// async function getdata(){
//     let fileContent = await startRead();
//     console.log(fileContent);
// }

// getdata();


// const express = require("express");
// const app = express();


// app.get("/abc", (req,res)=> {
//     res.send("hello world");
// }); 

// app.listen(3000);



// let str = "hello";

// let abc= str.split().reverse();

// console.log(abc);



// let a = {name: "bob"};

// a.name = "sally";



// function isAnagram(str1, str2) {
//     let newStr1= str1.toLowerCase().split("").sort().join("");
//     let newStr2= str2.toLowerCase().split("").sort().join("");
//     if(newStr1===newStr2){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }
  
// console.log(isAnagram("showkjwdjet", "akwohst"));

let string =`10 +   2 *    (   6 - (4 + 1) / 2) + 7`

let newstring = string.replace(/\s+/g, ' ').trim();

console.log(eval(newstring));















































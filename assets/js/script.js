"use strict ";


//Practise



// let person = {
//     name: "Nurlan",
//     surname: "Umudov",
//     age: 22
// }

// // console.log(person.name);
// // console.log(person)

// document.querySelector("h1").innerText = person.name




// let datas = [
//     {
//         name: "Fatime",
//         surname: "Qayxanova",
//         groups: [
//             "PB-101",
//             "P314"
//         ],
//         teachers: [
//             "Cavid",
//             "Hemid"
//         ]
//     },
//     {
//         name: "Fexriyye",
//         surname: "Tagizade",
//         groups: [
//             "PB-101"       
//         ],
//         teachers: [
//             "Cavid"       
//         ]
//     },
//     {
//         name: "Afide",
//         surname: "Hemidova",
//         groups: [
//             "PB-101",
//             "P314"
//         ],
//         teachers: [
//             "Cavid",
//             "Hemid"
//         ]
//     }
// ]

// console.log(datas)


//String

// let surname = "Tagizade Fexriyye Aze";

// console.log(surname.length)

// console.log(surname.toLowerCase());

// console.log(surname.toUpperCase());

// console.log(surname.trim());

// console.log(surname.indexOf("a"));

// console.log(surname.startsWith("t".toUpperCase()));

// console.log(surname.lastIndexOf("a"));

// console.log(surname.substring(0,3));

// for (let i = 0; i < surname.length; i++) {
//     const element = surname[i];
    
//     console.log(element)
// }

// console.log(surname.includes("t".toUpperCase()))


// let array = surname.split(" ");

// console.log(array);

// console.log(surname.slice(0,3))

// console.log(surname.replace("Aze","Italiya"))



// let nums = [1,2,3,4,4,5];

// for (const item of nums) {
//     console.log(item);
// }




// let person = {
//     name: "Nurlan",
//     surname: "Umudov",
//     age: 22
// }



// // for (const key in person) {
// //     console.log(person[key])
// // }


// for (const key in person) {
//     if(key =="name" || key =="surname")
//     {  console.log(person[key]) }   
// }


//Array


// let nums = [1,2,3,4,5,5];

// nums.forEach(element => {
//     console.log(element)
// })



// nums.forEach((element,i) => {
//     console.log(element + " " +i)
// })



// let data = nums.toString();

// let data = nums.join("-");

//console.log(data);


// nums.pop();

// nums.shift(100);

// console.log(nums);


// nums.unshift(500);

// console.log(nums);



// const myGirls = ["fdhdjh", "jidffuisf"];
// const myBoys = ["jbfhbfd", "oewureurheui"];
// const myChildren = myGirls.concat(myBoys);

// console.log(myChildren);


// let address= "Ehmedli";

// let  result = [...address];

// console.log(result)


// let obj = {
//     name: "test",
//     surname: "testov",
// }

// let data = {...obj};

// console.log(data);



// let nums = [1,2,3,4,5,6,6];

// let data = [...nums];

// console.log(data);







//Functions


// function showText(){
//     console.log("hello world")
// }

// showText();




// function showText(text){

//         console.log(text)
//     }

//     showText(100);



//     function sum(a,b){
//         let result= a+b;
//         console.log(result)
//     }

//     sum(100,200);



// let datas = [1,2,100,23,32,500,43];


// function findData(arr){
//     for (const item of arr) {
//         if(item== 100){
//             console.log("100 already found");
//         }
//     }
// }
// findData(datas)


// function sum(a,b){
//     return a+ b;
// }

// console.log(sum(4,5));




//  let datas = [1,2,100,23,32,500,43];

// function test(arr) {
//     arr[0] = 100;
//     console.log(arr);
// }

// test(datas);
// console.log(datas);






// let b = 100;

// function test(a) {
//     a = 20;
//     console.log(a);
// }

// test(b);

// console.log(b)



// function test(...datas){
//     for (let i = 0; i < datas.length; i++) {
//         const element = datas[i];
//         console.log(element)
//     }
// }
//  test(1,2,3,4,5,5,6,6,9)





// function test(){
//     console.log(arguments)
// }

// test(1,2,2,3,4,5)







// function test(){
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(element)

//     }
// }

// test(1,2,2,3,4,5)









// let showText = () => {
//     console.log("tested")
// }

// showText();





// let showText = (text) => {
//     console.log(text)
// }

// showText("Nesir bey");




// function showNumber(){
//     console.log(this)
// }

// showNumber();





// const showText = (text) => {
//     console.log(text)
// }

// showText("Nesir bey");




// let student = {
//     name: "Reshad",
//     surname: "Aghayev",
//     age:21,
//     address: "Neftciler",
//     getFullName:function(){
//         console.log(this.name + " " + this.surname)
//     },
//     getFullData:()=>{
//         console.log(this.name + " " + this.surname)
//     }
// }
// student.getFullName();
// student.getFullData();



// let student = {
//     name: "Reshad",
//     surname: "Aghayev",
//     age:21,
//     address: "Neftciler",
//     getFullName:function(){
//         console.log(this)
//     },
//     getFullData:()=>{
//         console.log(this)
//     }
// }
// student.getFullName();
// student.getFullData();





// const test = () => {
//     for (let i = 0; i < arguments.length; i++) {
//         const element = arguments[i];
//         console.log(element)
        
//     }
// }
// test(1,2,3)





// this.alert();



// document.querySelector("button").addEventListener("clikc",function(){
//     window.location.reload()
// })






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Hometask


// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.


// let n = 21;

// function div(){
//     if(n % 3 == 0 &&  n%7 == 0){
//         console.log(true)
//     }
//     else
//     console.log(false)
// }

// div();



// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir. 

// let n = 5;
// let func = 1;

//  function factorial(){
//        for (let i = 1; i <= n; i++) {
//         if(n>0){
//             func*= i
//         }
//        }
//        console.log(func)
//  }

// factorial();




// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin 
// kvadratlarinin cemini hesablayan bir function yazin.


// let sum = 0;

// function sumOfSquare(){
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] % 2 === 0) {
//             sum+= nums[i] * nums[i] 
//         }
//     }
//         console.log(sum);
//     }
// const nums = [1,2,3,4,5,6]

// sumOfSquare();







// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password
// beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin. 


// let mail = "cavid@code.edu.az";

// let password = "12345";


// function loginSuccess(mail,password){
//     if(mail == "cavid@code.edu.az" && password == "12345" ){
//         return "Girish olundu";
//     }
//     else {
//         return "Mail ve ya password sehvdir";
//     }
// }

// const result = loginSuccess("cavid@code.edu.az","12345");

// console.log(result)





// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.


// const array= [1,2,3,4,5];
// let sum = 0;

// function sumOfOddNums(array){
//     for (let i = 0; i < array.length; i++) {
//             if(array[i] % 2 == 1){
//                     sum+=array[i];
//             }        
//     }

//     return sum;
// }

// let result = sumOfOddNums(array);

// console.log(result)





// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.


// const array= [5,6,7,4,2];
// let sum = 0;

// function sumOfEvenNums(array){
//     for (let i = 0; i < array.length; i++) {
//             if(array[i] % 2 == 0){
//                     sum+=array[i];
//             }        
//     }

//     return sum;
// }

// let result = sumOfEvenNums(array);

// console.log(result)









// 8) Icerisinde name, surname, age, email olan bir nece student objectleriniz var.
// Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.
// 1) Yashi 18-25 araliginda olan telebelerin sayi.
// 2) Emailinde "c" herfi olan studentlerin sayi.



// const students = [
//     {name: "Nurlan" , surname: "Umudov" , age: 22 , email: "nurlan@code.edu.az"} , 
//     {name: "Ayxan" , surname: "Aghayev" , age: 24 , email: "aycan@gmail.com"} , 
//     {name: "Reshad" , surname: "Aghayev" , age: 21 , email: "reshad@mail.ru"} , 
//     {name: "Behruz" , surname: "Eliyev" , age: 27 , email: "behruz@code.edu.az"} , 
// ] 


// 8.1)

// let count = 0;

// function countAges(students){
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].age >= 18 && students[i].age <= 25) {
//       count++;
//     }
//     }
//     return count;
// }

//   let result = countAges(students);

//   console.log(result)

// 8.2)

// let count = 0;

// function countStudents(students){
//     for (let i = 0; i < students.length; i++) {
//         if(students[i].email.includes("c")){
//             count++;
//         }
//     }
//     return count;
// }

// let result = countStudents(students);
// console.log(result)


// 9) Function yazacaqsiz, Functiona parametr olaraq string gelecek.
// Hemin function gelen parametrin ilk herfini boyuk herf edib geri qaytarsin.


// function upperFirstLetter(str) {
//     if (str.length === 0 ||  typeof str !== 'string') {
//       return "String format is wrong";
//     }
//     else{
//         return str.charAt(0).toUpperCase() + str.slice(1);

//     }
//   }

  
// let result = upperFirstLetter("salamlar");
// console.log(result);

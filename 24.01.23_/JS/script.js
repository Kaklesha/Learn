" use strict"

//let number = 4.6;

//console.log(number);
/*
console.log("string"*9);

const persone= "alex";

console.log(persone);

const persone1= 'alex';

console.log(persone1);

const persone2= `alex`;

console.log(persone2);

const bool = true;

const bool1 = false;

console.log(typeof(something));

*/

// const obj = {

//     name: "Johs",
//     age: `25`,
//     isMarried:`false`
//   };

// console.log(obj.name, obj.age);
// console.log(obj[`name`]);

// let arr = [ `plum.png`, `orange.jpg`,`apple.bmp` ];


// //  arr.forEach(element => {
// //     console.log(element);
// // });



// console.log(arr[1]);


// const ort = {
//     a: `2`,
//     2: `3`
// };
// ort[`3`]=`313`;
// console.log(ort[`3`]);


// const orty = {
//     abc: {
//         def: {

//         }
//     }
// }

// const storeName = `DoggiHouse`;
// storeDescription = {
//     budget: 10000,
//     employees: [`Raichel`,`Ivan`,`Grigory`],
//     products: {
//         cuts: 200,
//         hair:3000
//     },
//     open: true
// };

// console.log(typeof(storeDescription[`open`]));
// // console.log(typeof(storeDescription[`products`]));
// const fr = confirm("are winning son");
// const catagory = `toys`;

// console.log(`https://someurl.com/${catagory}/5`);

// const user =`Ivan`;
// alert(`Help, ${Ivan}`);
//console.log(4+ +"4");

//TASK #1
//1

// numberOfFilms = prompt(`How many are you watched movies?`,`3`);
// alert(numberOfFilms);

// //2 

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// personalMovieDB[`count`]=numberOfFilms;

// dump1 =prompt(`Can you say one of last movies what watched`,`Fight club`);

// dump2 =prompt(`How would you rate him`,`7`);

// //alert(personalMovieDB[`movies['dump1']=dump2`]);

// alert(`This action=${personalMovieDB.movies[`dump1`]=dump2} `);

// console.log(personalMovieDB.movies);
// console.log(personalMovieDB);

//part #19

const num = 50;

// if (num < 49) {
//     console.log(`Error`);
// } else if (num > 100) {
//     console.log(`Much more`);
// } else {
//     console.log(`OK!`);
// };

//ternary if

// (num ===50) ? console.log(`Ok1`): console.log('Error :>> ', Error);

// switch (num) {

//     case 49:
//         console.log(`not right`);
//         break;

//     case 100:
//         console.log(`don't`);
//         break;
//     case 50:
//         console.log(`don't correctly`);
//         break;
//     default : 
//         console.log(`error`);
//         break;
// }

//TASK#2
//1 
// let i=5;
// while(i<=5||i<=10){
// console.log(` ${i}`);
// i++;
// };

//2

// for (let index = 20; index > 10; index--) {
// console.log(` ${index}`);

//     if(index === 13) {
        
//         break;
//     }
    
// };

//3

// for (let i = 2; i <= 10; i++) {
//    if (i%2===0) {
//        console.log(i);
//    }
    
// };

// let i=2;
// while(i <= 16){

//     if (i % 2 === 0) {
//         console.log(`= ${i}`);
//         i++;
//         continue;
//     } else {
//         //console.log(i);
//      //   console.log(`+ ${i}`);
//     }
//    // console.log(`- ${i}`);

//     i++;
   
// // };




// const arr = [] , arr1 =[];
// let i=5, j=0;
// while(i<=10){

//     arr[j]=i;
//     i++;
//     j++;

// };

// arr.forEach(element => {
//     console.log(element);
// });

// arr.forEach(element => {
//     arr1[i]=element;
//     console.log(` ${arr1[i]}`);
    
// });

//01.02.2023

//task for function learn (**)

let base=0, squert=0;

function showFirstMessage(base,squert) {

    if ( typeof(squert)!= `number`)
    {

        let drf= typeof(squert);
        return console.log(`Error ${drf}` );
    }
    let str = '', dump=base, i=0;
    str=dump;

    while(i<squert){

        dump += base;
        str += `---${dump}`;
        i++;
        }
        console.log(`даст ответ: ${str}`);
    

};
showFirstMessage(5,0);
showFirstMessage(5,2);
showFirstMessage(5,3);
showFirstMessage(5,4);
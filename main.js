// var a = [10, 97, 67, 40, 86, 60];




// //map
// function hi(e) {
//     return e * 5
// }
// var y = a.map(hi);
// console.log(y);


// //filter
// function hello(c) {
//     return c % 3 == 0
// }
// var x = a.filter(hello)
// console.log(x);


// //some any one condition satisfied true return
// var a=[12,3,24,99,32,100];
// function world(d) {
//     return d / 2
// }
// var z = a.some(world)
// console.log(z);


// //every 
// function lion(v) {
//     return v % 5 == 0
// }
// var n = a.every(lion)
// console.log(n);


// //reduce
// function redu(k, j) {
//     return k + j;
// }
// var g = a.reduce(redu);
// console.log(g);


// //foreach
// let b = a.forEach(function (m) {
//     let l = m;
//     console.log(l);
// });

// let arry = ["hi", "welcome", "to", "all", "fabevy"];
// arry.forEach(function(m){
//     let l = m;
//     console.log(l);
// });

// //setTimeOut
// setTimeout(function () {
//     console.log("Hi Friends");
// }, 3000);


// //setInterval
// let clr = setInterval(function () {
//     console.log("hello world");
// }, 2000);
// clearInterval(clr);


// //callback funcion
// function jerry(a, b) {
//     g = a * b;
//     return g;
// }
// function kutty(d, e, f) {
//     console.log(f(d, e));
// }
// kutty(29, 39, jerry);

// function a(u, v) {
//     w = u * v;
//     console.log(w);
// }

// function b(x, y, z) {
//     z(3, 7)
// }
// b(3, 7, a)

// function a(d,e,f){
//     f(d,e,c)
// }

// function b(g,h,i){
//    i(g,h)
// }

// function c(j,k){
//     var l=j+k;
//     console.log(l);
// }



// a(9,9,c);


// var arr=[1,2,3,4,5];
// var x = arr.length;
// console.log(x);
// for (let i=0; i<x; i++){
//     console.log(arr.pop());
//     console.log(arr);
// }




// //promise
// var q = 2;
// var fav = new Promise((res, rej) => {
//     if (q > 5) {
//         res("success");
//     }
//     else {
//         rej("fail")
//     }
// });
// fav.then(console.log).catch(console.log);


// //find
// fav.then(console.log).catch(console.log);

// function fin(r){
//     if(r%3==0){
//         return r;
//     }
// }
// var s=a.find(fin);
// console.log(s);

// let num=100;
// let num1=new Promise(function(yes,no){
//     if(num>9){
//         yes("true")
//     }
//     else{
//         no("false")
//     }
// });
// num1.then(console.log).catch(console.log);


// function a(ab,cd){
//     let store=ab+cd;
//     console.log(store);
// }

// function a(c,d,e){
//   var f=c*d;
//   e(f);
// }

// function b(g){
//    console.log(g);
// }
// a(3,8,b);



//this

// let obj = {
//     name: "prakash",
//     age:24,
//     email:"jerryprakash717@gmail.com",
//     get: function () {
//         console.log("Hi...!", this.email);
//     }
// }
// obj.get();

//class / constructor
// class student {
//     constructor(name, age, roll, mob) {
//         this.name = name;
//         this.age = age;
//         this.roll = roll;
//         this.mob = mob;
//     }
// }

// student1 = new student("prakash", 24, 007, 930109398);
// student2 = new student("arun", 21, 732, 9826821093);
// student3 = new student("ram", 23, 342, 933309998);
// student4 = new student("ramki", 27, 463, 9010233771);
// student5 = new student("manoj", 28, 982, 9234515678);
// console.log(student5.roll);

// var a=[2,5,8,99,55,90,20];
// var b=a.some(function(c){
// return c%2==0;
// });
// console.log(b);

//deep copy

// var a="ramkumar"
// var b=a;
// var a="prabhu"
// console.log(a);
// console.log(b);


///shallow copy
// var c={
//     name:"prakash",
//     age:24,
//     mob_no:9629415921,
// }

// var d=c;
// d.email="jerryprakash717@gmail.com";
// c.native="Surandai";
// console.log(d);
// console.log(c);.

// function a(k){
//     var l=k*k;
//     console.log(l);   
// }

// function b(i,j){
//     j(i,a)
// }

// function c(e,f){
//     f(e,b)
// }

// function d(g,h){
//     h(g,c)
// }
// c(8,d);







//q-1
// function sub(a,b=5){
//     let c = a-b;
//     return c;
//     }
//     console.log(sub(8,2));

//q-2
// function person(first_name, last_name) {
//           this.first_name = first_name;
//           this.last_name = last_name;
//     }

//     let person1 = new person('Mukul', 'Latiyan');
//     let person2 = new person('Rahul', 'Avasthi');

//     console.log(person1.first_name);


//q-3
// var arr = [1, 2, 3, 4];
// var arr1 = [...arr];
// arr[4] = 5;
// console.log(arr, arr1);


//q-4
// console.log(check);
// var check = function () {
//     console.log("Hi")
// }

//q-5
// class Animals {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     sing() {
//         return `${this.name} can sing`;
//     }
//     dance() {
//         return `${this.name} can dance`;
//     }
// }
// class Cats extends Animals {
//     constructor(name, age, whiskerColor) {
//         super(name, age);
//         this.whiskerColor = whiskerColor;
//     }
//     whiskers() {
//         return `I have ${this.whiskerColor} whiskers`;
//     }
// }
// let clara = new Cats("Clara", 33, "indigo");
// console.log(clara);

//q-6
// var arr =[1,2,3,4];
// var arr1 = arr;
// arr[4] = 5;
// console.log(arr,arr1);

//q-7
// function a(){
//     console.log("Hi");
//     }

//     function b(){
//     console.log("React");
//     }

//     a(b);

//q-8
// let obj1 = {
//     "name": "Monisha"
// }
// let obj = Object.assign({}, obj1);
// obj1.position = "QAE"
// console.log(obj, obj1);

//q-9
// function add(a, b) {
//     c = a + b;
//     return c;
// }

// function value1(u, v, w) {
//     w(u, v);
// }

// function value2(a, x) {
//     a(x, 9, add)
// }
// console.log(value2(value1, 5));

//q-10
// "use strict"
// let a;
// b=5;
// console.log(a,b)

//q-11
// for(var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i)
//   }, 1000);
// }

//q-12
// function sub(a,b){
// let c = a-b;
// return c;
// }
// console.log(sub(8));

//q-13
// let a;
// b=5;
// console.log(a,b)

//q-14
// localStorage.setItem("skill",JSON.stringify(["HTML","CSS","JS"]));
// localStorage.length

//q-15
// var num = 0;
// console.log(num++);
// console.log(num++);
// console.log(++num);
// console.log(num);

//q-16
// const heros = [
//     { name: 'Spider-Man' },
//     { name: 'Thor' },
//     { name: 'Black Panther' },
//     { name: 'Captain Marvel' },
//     { name: 'Silver Surfer' }
//   ];

//   const name= heros.map(function(heros, index) {
//     return { id: index, heros: heros.name };
//   });

//   console.log(name);

// ​const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
// const a= inputWords.filter(function(word) {
//     return word.length >= 7;
//   });   
//   console.log(a);

// ["exuberant", destruction", "present"]


//q-17
// let employees = [
//     {
//         "id": 11,
//         "name": "Abhinav",
//         "salary": 75000
//     },
//     {
//         "id": 2131,
//         "name": "Raj",
//         "salary": 62000
//     },
//     {
//         "id": 3012,
//         "name": "Raj",
//         "salary": 32000
//     }]

// let a = employees.map(function (b) {
//     return b.id;
// })
// console.log(a);


//q-18
// const num = 0;
// console.log(num++);
// console.log(num++);
// console.log(++num);
// console.log(num);



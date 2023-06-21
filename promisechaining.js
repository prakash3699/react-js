// Promise
// function a() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Hi");
//         }, 6000)
//     })
// }

// function b() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Welcome to");
//         }, 5000)
//     })
// }

// function c() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Great Girikalan");
//         }, 2000)
//     })
// }

// function d() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Magic show")
//         }, 4000)
//     })
// }

// async function main() {
//     try {
//         var one = await d()
//         var two = await b();
//         var three = await a();
//         var four = await c();

//         console.log(one);
//         console.log(two);
//         console.log(three);
//         console.log(four);
//     }
//     catch{
//         console.log("error");
//     }
// }
// main();

// a().then((x)=>{
//     console.log(x);
//     return b();
// })

// .then((y)=>{
//     console.log(y);
//     return c();
// })

// .then((z)=>{
//     console.log(z);
//     return d();
// })
// .then(console.log)
// .catch((err)=>{
//     console.log("error..!")
// });

// Promise.all([a(), b(), c(), d()])
//     .then((x) => {
//         console.log(x, "Success");
//     })
//     .catch((y) => {
//         console.log("Error..!");
//     });

const shape = {
  radius: 10,
  diameter() {
    return this;
  },
};

"use strict";
// function multiply(a: number, b: number) {
//     return a * b;
// }
// console.log(multiply(3, 4));
// let a : string;
// let b:number;
// Array
// let a:string[]= []; 
// let c:{
//     name:string;
//     age:number;
//     adult:boolean
// };
// c= {
//     name:'sumit ',
//     age:34, 
//     adult:true
// }
// let myFunc: Function;
// myFunc = ( ) => {
//     console.log("Hello");
// }
// myFunc();
// type stringOrname = string|number;
// const userDetails = (id: stringOrname, user:{ name: string, age: number }) => {
//     console.log(`user id is ${id},name is ${user.name}`)
// }
// class
class player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
const mashrafi = new player('peal', 40, 'babangladesh');
mashrafi.play();

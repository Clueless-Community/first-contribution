                                                        // BASICS OF JAVSCRIPT

// // Variable declaration

// var firstName = "Ankit";
// console.log(firstName);
// firstName = "Kumar";
// console.log(firstName);
// var definedMath = 6;
// console.log(definedMath/2);
// let last_name = 'Pandey';
// last_name = 'Kumar';
// // let last_name = "sumedh";   error as let not again declared
// console.log(last_name);

// // Constant declaration

// const pi = 3.14;
// // const pi = 5.64;         //error as constant not changed
// console.log(pi*3);

// //String indexing  (0 indexing by default)
// let unKnown = "Rahul";
// console.log(unKnown[4]);
// console.log(unKnown.length);
// console.log(unKnown[unKnown.length - 2]);
// let unDefined = "    UnderstanDING  ";
// console.log(unDefined, unDefined.length);
// unDefined.trim();       // give new string which is immutable(can't change)
// console.log(unDefined, unDefined.length);
// unDefined = unDefined.trim();           // Should be put in another variable to change
// console.log(unDefined, unDefined.length);
// unDefined = unDefined.toUpperCase();
// // unDefined = unDefined.toLowerCase();
// unDefined = unDefined.slice(1,4);       // upper bound excluded
// unDefined = unDefined.slice(3);             // till infinity
// console.log(unDefined, unDefined.length);

// Number to string
// let numString;               // typeof undefined
// const numString  = 90;       // Must be defined 
// let numString = 234;        
// numString = numString + "";
// numString = String(numString);
// console.log(typeof numString);
// console.log(typeof String, typeof Number, typeof undefined, typeof null);       // null show object which is bug


// // String to number
// // numString = + "234";        
// numString = Number(numString);
// console.log(typeof(numString));

// let value1 = "45";
// let value2 = "56";
// // let addVal = value1 + " " + value2;          // String concatenation
// let addVal = +value1 + +value2;                 // Number concatenation
// console.log(addVal);

// // Template String
// let age = 20;
// let firstName = "Ankit";
// let aboutMe = `My name is ${firstName} and my age is ${age}`;
// console.log(aboutMe);

// let num1 = "8";
// let num2 = 8;
// console.log(num1 == num2);      // compare values not data type
// console.log(num1 === num2);      // compare values and data type
// // console.log(num1 != num2);          // compare values not data type
// console.log(num1 !== num2);         // compare values and data type

// Falsy values     null, false, "", undefined, 0



                                                            // ARRAYS



// let numbers = ["45" , "67", "89"];
// let heyBuddy = {};
// console.log(numbers);
// numbers[1] = "78";
// console.log(numbers);
// console.log(typeof numbers);
// console.log(typeof heyBuddy);
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(heyBuddy));
// numbers.push("banana")      // push at last
// console.log(numbers);
// console.log(numbers.pop());         // pop at last
// console.log(numbers);                                               // push, pop fast as compared to shift and unshift
// numbers.unshift("banana")           // push at front
// console.log(numbers);
// let removed = numbers.shift()          // pop from front
// console.log(removed);

// primitive vs Reference data type
// let num1 = 5;
// let num2 = num1;
// console.log("num1" , num1, "num2" , num2);
// num1++;
// console.log("num1" , num1, "num2" , num2);

// let array1 = ["1", "2", "3"];
// let array2 = array1;
// console.log("array1", array1, "array2", array2);
// array1.push("5");
// console.log("array1", array1, "array2", array2);

// // cloning array
// let array1 = ["2", "3", "5"];
// let array2 = ["2", "3", "5"];
// console.log(array1 == array2);          // false as it have different address
// let array2 = array1.slice(0);
// let array2 = [].concat(array1);
// let array2 = [...array1];
// let array2 = array1;
// let array3 = [...array1, ...array2];           // Spread operator(Only string is iterable)
// let array4 = [..."12345767"];
// console.log(array2);
// console.log(array3);
// console.log(array4);
// let array5 = array1.slice(0).concat("89", "76");
// console.log(array1, array5);
// array1.push("23");
// console.log(array1, array3);

// // Why to use const
// let array1 = [34, 45, 67];
// array1 = [];
// console.log(array1);
// const array2 = [34, 45, 67];
// // array2 = [];         // Not assignable
// array2.push(35, 65);        // But can be pushed 
// console.log(array2);

// // for loop :- for of(give value), for in(give index)
// const array1 = [3, 4, 5, 6, 7];
// for(let array of array1)
//     console.log(array);
// for(let array in array1){
//     console.log("index", array);
//     console.log("value", array1[array]); 
// }   

// // array destructing
// const array1 = ["45", "66", "34", "65","98"];
// array1.push(455, 88, 909, 453, 2323);
// const [var1, var2, , var3, ...var4] = array1;
// console.log(var1, var2, var3, var4);


                                                            // OBJECTS


// const details = {
//     name : "Ankit",
//     dob : "12 dec, 2002",
//     registrationNo : 39,
//     interest : ["cricket", "gardening", "studious"],
//     "my hobbies" : ["reading", "sleeping", "padhai bhi"]
// }
// const key = "email";
// details.key = "krankit121202@gmail.com";
// details[key] = "krankit121202@gmail.com";
// console.log(details.interest);
// console.log(details["dob"]);
// console.log(details["my hobbies"]);
// console.log(details);
// console.log(details);
// for(let key in details){
//     console.log(key);           // Only key printed
//     console.log(details.key);    // Undefined
//     console.log(details[key]);      // Only value printed
//     console.log(`${key} : ${details[key]}`);    // key value pair     (Template Literal)
//     console.log(key ,  details[key]);
// }
// console.log(Object.keys(details));
// for(let key of Object.keys(details)){
//     console.log(details[key]);
// }

// Computed Properties
// const obj1 = "valObj1";
// const obj2 = "valObj2";
// const val1 = "myVal1";
// const val2 = "myVal2";
// const obj3 = {
//     [obj1] : val1,
//     [obj2] : val2
// }
// const obj3 = {};
// obj3[obj1] = val1;
// obj3[obj2] = val2;
// console.log(obj3);

// Spread operator
// const obj1 = {
//     key1 : "value1",
//     key2 : "value2"
// };
// const obj2 = {
//     key1 : "valueAgain",                // Same value compensate the other former one
//     key3 : "value3",
//     key4 : "value4"
// };

// const newObj = {...obj1, ...obj2, };
// console.log(newObj);

// Destructuring
// const obj = {
//     yourName : "Ankit Kumar",
//     course : "Btech",
//     "registration no" : "20105124039",
//     branch : "CSE"
// }
// // const {yourName, course} = obj;
// // console.log(yourName);
// const {yourName:var1, course:var2, ...restProps} = obj;
// console.log(var1);
// console.log(restProps);
// const obj = [
//     {userId : 1, userName : "you", gender : 'male'},
//     {userId : 2, userName : "me", gender : 'male'}
// ]
// // console.log(obj.userId);
// for(let user of obj){
//     console.log(user.userName);
// }
// const [user1, user2] = obj;
// console.log(user2);


                                                // FUNCTIONS
                                                //(Same identifiers shouldn't) 
// Function declaration                                               
// function add(num1, num2){
//     return num1 + num2;
// }

// Function expression
// const add = function(num1, num2){
//     return num1 + num2;
// }

// Arrow function
// const add = (num1, num2) =>{
//     return num1 + num2;
// }
// console.log(add(4, 5));

// // In case of one parameter only
// const paraOne = num => num;
// console.log(paraOne(5));

// function inside function
// const calci = () => {
//     const add = (num1, num2) =>{
//         return num1 + num2;
//     }
//     const mult = (num1, num2) =>{
//         console.log(num1*num2);
//     }
//     // const div = num1 => num1/2;
//     // console.log(add(5,6));
//     // console.log(div(4));
//     // console.log("making calci");

//     // Lexial scope : A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.
//     // const value1 = 45;
//     const func = () => {
//         // const value1 = 35;
//         console.log(value1);
//     }
//     func();
// }
// const value1 = 33;
// calci();

// let and const :- block scope, var :- function scope
// {
//     let var1 = "45";
//     const var2 = "78";
//     var var3 = "34";
// }
// console.log(var3);

// Default and rest parameter
// const defaultFunc = (a, b=5) => {
//     console.log(a + b);
// }
// defaultFunc(3);
// const restPara = (a, b, c, ...d) =>{
//     console.log(`a = ${a}`);
//     console.log(`b = ${b}`);
//     console.log(`c = ${c}`);
//     console.log(`d = ${d}`);
// }
// restPara(1, 2,3,4,5,67,7,);

// Call back function(passing parameter as a function)
// function callingFunc(){
//     console.log("Hey there");
// }
// const callerFunc = (callback) => {
//     callback();
// }
// callerFunc(callingFunc);

// Functions return function
// function funcCalling(){
//     function returnFunc(){
//         return "Hello";
//     }
//     return returnFunc;
// }
// const ans = funcCalling();
// console.log(ans());

                                                            // ARRAY METHOD


// forEach Method

// const array1 = [2,3,4,5,6];
// const func = (num, index) => {
//     console.log(`index is ${index} and num is ${num}`);
// }
// for(let arr in array1){
//     func(array1[arr] , arr)
// }
// // array1.forEach(func);               // form (value, index) , if one parameter then (value)           

// array1.forEach(function(num, index){
//     console.log(`index is ${index} and num is ${num}`);
// })

// const student = [
//     {name : "Me", age : 19},
//     {name : "You", age : 32},
//     {name : "he", age : 49},
//     {name : "She", age : 22}
// ]

// student.forEach((user, index) => {
//     console.log(user.age, index);
// })

// map method(return array necessary to use return)

// const array1 = [2,3,4,5,6];
// const func = num =>{
//     // return num*num;
//     console.log(num*num);
// }  
// console.log(array1.map(func));

// const student = [
//     {name : "Me", age : 19},
//     {name : "You", age : 32},
//     {name : "he", age : 49},
//     {name : "She", age : 22}
// ]

// const users = student.map((user)=>{
//     return user.name;
// })
// console.log(users);

// filter method(output of the true value)

// const array1 = [2,3,4,5,6];
// const isEven = array1.filter((num) => {
//     return num%2==0
// })
// console.log(isEven);

// reduce method

// const productDetails = [
//     {Id : 1, name : "tv1", price : 23},
//     {Id : 2, name : "tv2", price : 23},
//     {Id : 3, name : "tv3", price : 23},
//     {Id : 4, name : "tv4", price : 23},
// ]
// const totalPrice = productDetails.reduce((totalAmt, currentAmt) => {
//     return totalAmt + currentAmt.price;
// }, 0)
// console.log(totalPrice);

// sort method(changes original array, all above opposite)
// Works on ASCII value order, default value is string
// const array1 = [34,22,12,69,09];
// const array1 = ["34","22","12","69","09"];
// console.log(array1.sort());
// const productDetails = [
//     {Id : 1, name : "tv1", price : 233},
//     {Id : 2, name : "tv2", price : 204},
//     {Id : 3, name : "tv3", price : 253},
//     {Id : 4, name : "tv4", price : 23},
// ]

// const lowToHigh = productDetails.slice(0).sort((a, b) => {
//     return a.price - b.price;
// })

// const highToLow = productDetails.slice(0).sort((a, b) => {
//     return b.price - a.price;
// })
// console.log(highToLow);

// find method

// const productDetails = [
//     {Id : 1, name : "tv1", price : 233},
//     {Id : 2, name : "tv2", price : 204},
//     {Id : 3, name : "tv3", price : 253},
//     {Id : 4, name : "tv4", price : 23},
// ]

// const findMethod = productDetails.find((user) => user.Id == 2)
// console.log(findMethod);

// Every method(return true or false on basis of all values)

// const productDetails = [
//     {Id : 1, name : "tv1", price : 233},
//     {Id : 2, name : "tv2", price : 204},
//     {Id : 3, name : "tv3", price : 253},
//     {Id : 4, name : "tv4", price : 23},
// ]

// const findMethod = productDetails.every((user) => user.price >= 423)
// console.log(findMethod);

// some method(condition satisfy for any one)

// const productDetails = [
//     {Id : 1, name : "tv1", price : 233},
//     {Id : 2, name : "tv2", price : 204},
//     {Id : 3, name : "tv3", price : 253},
//     {Id : 4, name : "tv4", price : 23},
// ]

// const findMethod = productDetails.some((user) => user.price <= 22)
// console.log(findMethod);

// fill method(value, startIndex, endIndex)

// const array1 = new Array(12).fill(7);
// console.log(array1);
// const array2 = [4,5,6,7,7,8,5];
// array2.fill(9, 2, 6);
// console.log(array2);

// splice method(start, delete, insert)
// const print = array2.splice(2,2,3,3,4)
// console.log(print);
// console.log(array2);

// array , string - iterable,  object - not, array like object :- have length property and index acess

// Set(not index-based, non-repeated value)

// const array1 = new Set([3,4,5,6,7,4,3, 'waitor']);
// console.log(array1);
// array1.add(67, 5,6,7);
// array1.add([67, 5,6,7]);        // Both are different array
// array1.add([67, 5,6,7]);
// console.log(array1);
// const present = array1.has(4);
// console.log(present);

// Map(key , value pair, ordered fashion, )

// const details = new Map();
// details.set('name' , 'you');
// details.set('branch', 'Cse');
// details.set(1, 39);
// details.set([1,2,3,4,5], 'reg')
// console.log(details);
// console.log(details.get(1));
// for(let detail of details.keys()){
//     console.log(detail, typeof detail);
// }

// for(let [key, pair] of details){
//     console.log(key,pair)
// }

// const users = {'Id' : 1, 'name' : "you", 'marks' : 78};
// const array1 = new Map();
// array1.set(users,{'branch' : 'cse', 'gender' : 'male'});               // create key, value pair
// console.log(array1);
// console.log(users.Id);
// console.log(array1.get(users));
// console.log(array1.get(users).gender);

// cloning object

// const createObj = {
//     'id' : 1,
//     'name' : "you"
// }
// // const createObj1 = {...createObj};
// const createObj1 = Object.assign({}, createObj);
// createObj.Aadhar = 5657565;
// console.log(createObj);
// console.log(createObj1);

// Optional Chaining(for nested object)

const createObj = {
    'id' : 1,
    'name' : "you",
    'branch' : {'sce' : 'CSE'}
}

console.log(createObj.branch);
// console.log(createObj.branch.sce.address.gram);      // Error
console.log(createObj?.branch?.sce?.address?.gram);     // once found undefined , it print undefined(not proceed further)

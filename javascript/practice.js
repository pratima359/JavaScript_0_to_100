//hoisting is work for only VAR, hoisting is not wirking with variable LET and CONST.

// #1

// console.log("a",a)  //not hoisted
// var a=4;

// a=6
// console.log("a", a)
// var a    // hoisted


//All fuctions are hoisted but Only, when function are wrritten in the form of expresstion then hoisted is not working.
// like below example are not hoisted on funtion

// greatFunction()

// const greatFunction = function Great(){
// 	console.log("hello not hoisted")

// }

// like below example are hoisted on funtion

// Great()

//  function Great(){
// 	console.log("hello not hoisted")

// }

//#JavaScript Recursion
//factorial

// function factorial(num){
 
//  if (num===0) {
//  	return 1
//  } else {
//  	return num * factorial(num-1)
 	 
//  }

// }
// console.log(factorial(5))

//#2

// program to convert date to number

// const d1 = new Date();
// console.log( d1.getTime());

// program to trim a string
// const string = '      Hello World       ';
// const val = string.split(' ')
//or
 // const val = string.replaceAll(' ', '')
 // console.log(val)


// program to get the dimensions of an image

// const img =  Image();
// // program to get the dimensions of an image

// const img = new Image();
// img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';
// console.log(img)


//#5
// function sumfun(a, b){
//    	return result= a+b
//    }

// function funpara(sumfun){
//     console.log('hi run ', result, sumfun)
// }

// funpara(sumfun(2,3))

// #6
// program to check if a number is a float or integer value
// function checkNumber(x) {

// 	if (typeof x === 'number') {
//           if (Number.isInteger(x)) {
//           	return `${x} is integer `
//           } else {
//           		return `${x} is float `
//           }
// 	} else {
// 		console.log("this is not a number please enter the number")
// 	}
// }


// checkNumber(5.4)


//#7 generate random number 
// function random (){
// 	return Math.random()
// }

// console.log(random())

//#8 Find Sum of Natural Numbers Using Recursion

// function sumRecurstion(num){
//     if(num>0) {
//     	sum = num-1
//     	return num + sumRecurstion(sum)
//     }else{
//     	return num
//     }	

// }

// console.log(sumRecurstion(3))

//#9 Find Factorial of Number Using Recursion

// function factorialwithrecursion(num){
// 	if (num==0) {
// 		return 1
// 	} else {
// 		return num*factorialwithrecursion(num-1)
// 	}
// }

// console.log(factorialwithrecursion(3))

//#10 Check If a Variable is of Function Type

// const isvarIfunction = function(){
//     console.log('hello function')
// }

// console.log(typeof isvarIfunction)

//#11 Pass Parameter to a setTimeout() Function
// function fun(){
//    console.log('hello')
// }

// setTimeout(fun,2000)


//#11 
// let a = new Object();    // A new Object object
// let b = new String();    // A new String object
// let c = new Number();    // A new Number object
// let d = new Boolean();
// console.log(c, d)

//#12
// const arr2 =[3,4]
// const arr1 =[1,2,6,18,59,95]
// const arr = arr1.filter(x=>
// 	arr2.indexOf(x) !== -1
// 	)
// or
// const arr1 = [9]
// const arr2 = [4,6,8,9,2]
// function comapare(a, b) {
// return	arr1.filter(x=> {
// 	console.log("arr1 : ",x)
// 	console.log(arr2.indexOf(x))
// })
// }
// console.log(comapare(arr1, arr2))

//#13 how many a in angular
// const value = 'angular'
// const ar = value.split('')
// const arr = ar.filter(x=>x === 'a')
// console.log(arr.length)

//#14 Get Random Item From an Array
// const a =[2,6,8,9,5]
// function fun(a){
//   const mfloor =Math.floor(Math.random()* a.length)
//   return item =a[mfloor]
// }

// console.log(fun(a))

//#15 Compare Elements of Two Arrays
// const arr1 = [4,6,8,9]
// const arr2 = [4,6,8,9]
// function comapare(a, b) {
// 	const str = JSON.stringify(arr2) == JSON.stringify(arr1)
// return str
// }

// or

// function comapare(arr, arrr) {
// 	if (arr.length !== arrr.length) {
//         return false
// 	} else {
//       for ( let i = 0;  i <arr.length; i++) {
//       	return  result = arr[i] = arrr[i]
//       }
// 	}
// 	return result
// }
// console.log(comapare(arr1, arr2))

//#16 Remove a Property from an Object
// const myobj = {
// 	name:'pratima',
// 	age:32,
// 	myhobies:['watchingmovies', 'playingchess'],
// 	greet:function () {
// 	    console.log('Hello everyone.');
// 	},
// 	 score: {
//         maths: 90,
//         science: 80
//     }
// }

// delete myobj.age

// const newobj = new myobj()
// console.log(myobj)

//#17 // program to check if a key exists
// const program ={
// 	name:'john',
// 	age:32
// }
// const programKey = 'name' in program
// console.log(programKey)


//#18 Clone a JS Object

// const obj = {
// 	name:'pratima',
// 	age:31
// }

// const cloneobj = obj  //1st
// const cloneobj = {...obj} //2nd method
// const cloneobj = Object.assign({}, obj) //3rd
// const clonePerson = JSON.parse(JSON.stringify(person)); //4th
// console.log(cloneobj)



//#19
// function fixInput(input) {
//     const [beforeDot, afterDot = ''] = input.split('.', 2);

//     const sanitizedAfterDot = afterDot.replace(/\./g, '');

//     const output = `${beforeDot}.${sanitizedAfterDot}`;

//     return output;
// }

// console.log(fixInput('208.5.7'))

//#20 Program to Loop Through an Object

// const studentobj = {
// 	name:'viraj',
// 	clg:'mit',
// 	yaer:2
// }
// for (let skey in studentobj ) {
// 	const key = skey
// 	const val = studentobj[skey]
// 	console.log(`key is ${key} and value is ${val} `)
// }

//#21 Merge Property of Two Objects
// const studentobj = {
// 	name:'viraj',
// 	clg:'mit',
// 	yaer:2
// }

//  const program ={
// 	name:'john',
// 	age:32
// }

// studentobjs= Object.assign(studentobj, program)
// console.log( studentobjs)

//#22 Program to Count the Number of Keys/Properties in an Object
//  const studentobj = {
// 	name:'viraj',
// 	clg:'mit',
// 	yaer:2
// }
// var i =0
// for (let keyval in studentobj) {
// 	item=i++
// 	console.log(item)
// }
//

//# 23 Program to Convert Objects to Strings
//  const studentobj = {
// 	name:'viraj',
// 	clg:'mit',
// 	yaer:2
// }
// // console.log(new String(studentobj)) //1st
// const objtostring = JSON.stringify(studentobj)
// console.log(typeof objtostring)

//# Replace all Instances of a Character in a String
// const string = 'Learning JavaScript Program';
// const result = string.replace(/a/g, "A");
// console.log(result);

//#25
// function Studentobj () {
// 	this.name='viraj',
// 	this.clg='mit',
// 	this.yaer=2
// }

// let firstinstance = new Studentobj()
// let secondinstance = new Studentobj()

// Studentobj.prototype.gender ='male'
// console.log(firstinstance.gender, secondinstance)

//#26 Remove Specific Item From an Array
// const arrdata = [2,7,9,6,5]
// function removespecificitem(arr, n) {
	
// 	 const newarr =[]
// 	for (var i = 0; i < arr.length; i++) {
// 		console.log(arr[i])
// 		if (arr[i] !== n) {
//            console.log("inner", newarr.push(arr[i])) 
// 		} 
		
// 	}
// 	return newarr
// }
// console.log(removespecificitem(arrdata, 9))
// or
// function removeItemFromArray(array, n) {
//     const index = array.indexOf(n);
// console.log("indexss" ,index);
//     // if the element is in the array, remove it
//     if(index > -1) {

//         // remove item
//         array.splice(index, 1);
//     }
//     return array;
// }

// const result = removeItemFromArray([1, 2, 3 , 4, 5], 6);

// console.log(result);

//#27  if An Array Contains a Specified Value

// const arr =[1, 2, 3 , 4, 5]
// // const isarrrval = arr.indexOf(4) !== -1
// // or
// const isarrrval = arr.includes(5)
// console.log(isarrrval);

//#28 Program to Insert Item in an Array
// let index=3;
// let item = 89
// let arr =[1, 2, 3 , 9, 5]
//  arr.splice(index, 0, item)
// console.log(arr);

//#29 Program to Add Element to Start of an Array
// index=0
// element=99
// let arr =[1, 2, 3 , 9, 5]
// const newar= arr.splice(index,0,element)
// or
// const newar= arr.unshift(element)
// console.log(arr);

//#30  Remove Duplicates From Array
// let newar
// const arr =[1, 2, 3 , 9, 5,9,3]
// newar= [...new Set(arr)]
// console.log(newar)

//31 Check Whether a String is Palindrome or Not
// const str = 'chamach'


//#32  Sort Words in Alphabetical Order
// const str = 'Alphabetical'
// const strarray = str.split('').sort()

//#33 Program to Replace Characters of a String
// const str ="this is bad girl"
// const replacedstr = str.replace('bad', 'good')
// console.log(replacedstr)

//#34 Program to Reverse a String
// const str = Alphabetical
// let newarr =''
// for (let i = str.length - 1; i >= 0; i--) {
// 	newarr = str[i]

// }

//#35 Program to Check the Number of Occurrences of a Character in the String
// const str = 'Occurrences hello hi'

// function fun(str,letter){
// let count = 0
// 	for (var i = 0; i <str.length; i++) {
// 		// console.log(str.charAt(i))
// 	if (str.charAt(i) == letter){
// 		count = count+1
// 	}
// }
// 	return count
// }

// console.log(fun(str, 'r'))

//# Convert First letter to UpperCase
// const str = 'uperCase'
// const splitedstr = str.charAt(0).toUpperCase()+ str.slice(1)
// console.log(splitedstr)

//#Program to Create Multiline Strings
// const str = 'Program to Create Multiline Strings'
// const multistr = `${str}` 

//# Program to Generate Random String
// console.log(Math.random().toString(36).substring(2,7)  )


//#// program to trim a string

// const string = '      Hello World       ';
// const result = string.split(' ').join('');
// console.log(result);  

//#Program to Compare Two Strings
// const str1 ='Compare'
// const str2 = 'Compares'
// if (str1.toUpperCase() === str2.toUpperCase()){
//     return false
// }else{
//     return true
// }

//# 
// function fun(h, b) {
// 	const A = (h*b)/2
// 	return A
// }
// console.log(fun(30, 5))

//#

// let a= '2'
// let b='3'
// let temp

// temp =a;
// console.log(temp)
// a=b
//  console.log(a)
//  b=temp
//  console.log(b)

//# Program to Check if a number is Positive, Negative, or Zero
// const num = parseInt(prompt("Enter the number"))

// if (num>0) {
// 	console.log("number is prsitive")
// } else if(num == 0) {
// 	console.log("number is zero")
// }else{
// 	("number is negetive")
// }

//#Program to Check if a Number is Odd or Even
// const num = 9

// if (num%2 === 0) {
// 	console.log("number is even")
// } else {
// 	console.log("number is odd")
// }

//# Program to Find the Largest Among Three Numbers
// const a=88
// const b=5
// const c=76

// const greatest = Math.max(a,b,c)
// console.log(greatest)

//#  Program to Check Prime Number
// const num= 7
// let isprime = true
// for (var i = 2; i < num; i++) {
// 	if(num%i == 0){
//         isprime = false
// 	}
// }
// console.log(isprime)

//#

// function factorial(num) {
// 	if (num == 0) {
// 		return 1
// 	} else {
// 		return num*factorial(num-1)
// 	}
	
// }
// console.log(factorial(4))

//# multiplication table
// const num =5
// for (var i = 1; i <=10; i++) {
// 	console.log(num*i)
// }

//# Program to Display Fibonacci Sequence Using Recursion

// const num = 4  

// function fabonacciSeries(num) {
// 	if (num < 2) {
// 		return num
// 	} else {
// 		return fabonacciSeries(num-1)+fabonacciSeries(num-2)
// 	}
// }
// console.log(fabonacciSeries(num) )

//# Program to Display Fibonacci Sequence 

// const num1=0,
// const num2= 1
// let tempnum
// for (var i = 1; i <= number; i++) {
// 	tempnum =num1+num2
// 	num1 = num2
// 	num2 = tempnum 
// }


//# leap year or not
// const year = 2022

// if (year%4==0) {
// 	console.log("year is leap")
// } else {
// 	console.log("year is not leap")
// }


//# Program to Format the Date
// const todaydate ='08-03-2023'
// function formateDtae(datestr, format ='MM-DD-YYYY') {
// 	if (format === 'MM-DD-YYYY') {
// 		const [month, date, year] = datestr.split('-')
// 		return `${month}/${date}/${year}`

// 	}
// 	return datestr
// }

// console.log(formateDtae(todaydate, 'MM-DD-YYYY'))

//#Generate a Random Number Between Two Numbers
// input from the user
// const min = 4
// const max =8
// const randnumber = Math.floor(Math.random()* (max-min+1)) + min

// console.log(randnumber)


//#// program to get the URL

// const url1 = window.location.href;
// const url2 = document.URL;
// console.log(url1);
// console.log(url2);


//#
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female'    
// }
// const{name,age,gender}= person
// destructuring using different variable names, then do like below
// let { name: name1, age: age1, gender:gender1 } = person;

//# // program to swap variables using destructuring

// let x=2
// let y=4

// [x,y]= [y,x]

//#
// const items = [

//   { name: "Book", price: 150 },

//   { name: "Bike", price: 20 },

//   { name: "car", price: 60 },

//   { name: "phone", price: 30 },

//   { name: "TV", price: 10 },

// ];

// // console.log(items.length);

// // filter method
// const filterArray = items.filter((val) => val.price < 100);

// // map method
// const mappedArray = filterArray.map((val) => val.name);

// // findMethod
// const findAnItem = filterArray.find((val) => val.price > 10);

// // forEach method
// const forEachItem = items.forEach((val) => {});

// // someMethod
// const some = items.some((val) => val.price > 1000);

// // everyMethod
// const every = items.every((val) => val.price < 1000);
// // reduceMethod
// const reduce = items.reduce((count, value) => {
//   return value.price + count;
// }, 0);


//#

// var createHelloWorld = function() {
//     return function(...args) {
//               const hello= 'Hello';
//         const world ='World'
//         return "Hello World"
//     }
// };
// const f = createHelloWorld();
//   f(); 


//#
// var createCounter = function(n) {
//     return function() {
//     	return n++
//     };
// };
// const counter = createCounter(10)
//  console.log(counter() )
//  console.log(counter() )

//#Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
// var createCounter = function(init) {
// 	i =init
//     function increment() {
//     	return ++init
//     }
//     function reset() {
//     	init=i
//     	return init
//     }
//     function decrement() {
//     	return  --init
//     }
//     return{increment, reset, decrement}
// };

// const counter = createCounter(5)
//  console.log( counter.increment())
//    console.log(counter.reset())
//   console.log( counter.decrement())


//# arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// filter using function
// const arr = [0,10,20,30]
// const fn = function greaterThan10(n) { return n > 10; }

// var filter = function(arr, fn) {
// 	 let filteredarr = []
//     for (var i = 0; i < arr.length; i++) {
//             console.log( fn(arr[i]))
//             if (fn(arr[i])) {
//             	 filteredarr.push(arr[i])
//             }
           
//     	}
//     	return filteredarr

// };

// const newArray = filter(arr, fn);
// console.log(newArray)

//# map function using function
// const arr = [2,3,4,5]

// const fn = function(n){return n+2}
// function fummap(arr, fn) {
// 	const newarr =[]
// 	for (var i = 0; i < arr.length; i++) {
// 		console.log(fn(arr[i]))
// 		newarr.push(fn(arr[i]))
// 	}
// 	return newarr
// }

// console.log(fummap(arr, fn))

//# reduce function using function

// const arr = [2,3,5,6,10,50]
// const fn =function sum(accum, curr) { return accum + curr; }

// function function_reduce(arr, fn, init) {
// 	var val = init
// 	for (var i = 0; i < arr.length; i++) {
// 		val = fn(val, arr[i])
// 		console.log(val)
// 	}

// 	return val
// }

// function_reduce(arr, fn ,0)

//# 
// const multifuntions= [x => x + 1]

// function composefun(multifuntions){
//          return function(x){
//          	for (let i =multifuntions.length-1; i >= 0; i--) {
//          	   x=multifuntions[i](x)
         	  
//          	}
//          	return x
//          }
// }

//  const fn=composefun(multifuntions)
// console.log(fn(4))

//# length of argument

// var argumentsLength = function(...args) {
//      return args.length
// };

// console.log(argumentsLength(2,3,5,6))

//# add two promises 
// const promiseOne = new Promise(resolve => setTimeout(()=>resolve(8),20))
// const promiseTwo = new Promise(resolve => setTimeout(()=>resolve(10),30)) 

// async function addtwopromise(promiseOne, promiseOne){
//    const [val1, val2] = await Promise.all([promiseOne, promiseTwo])
//     return val1+val2
// }
// console.log(addtwopromise(promiseOne, promiseTwo))

//# Is object empty

// const obj = {"x": 5, "y": 42}
// console.log(Object.keys(obj).length ===0 ?'empty': 'notempty')

//# 
// const arr = [1,2,3,4,5,10,20,6,8,9,7]
// const size =2
// function chunkedarr(arr, size){
// 	let newarr =[]
	
// 	for (var i = 0; i < arr.length; i=i+size) {
// 		console.log(newarr.push(arr.slice(i, i+size)))
		
// 	}
// 	console.log(newarr)
// 	return newarr
// }
// chunkedarr(arr, size )

//# Sorting
// const arr=[5, 4, 1, 2, 3]
// console.log(arr.sort(function(a,b){return a-b}))






//#
// const arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ]
// const arr2 = [
//     {"id": 3, "x": 5}
// ]


// const joinedarr = (...arrs)=>{
// 	 let result = {}

//       arrs.forEach(
//       	(item)=>{item.forEach(
//       		finalitem =>{console.log(result[finalitem.id] = {...result[finalitem.id], ...finalitem})}
//       		// (finalitem)=>{console.log(Object.values(finalitem))}
//       		)
//       		}
//       	)
//       return Object.values(result)
// }

// console.log(joinedarr(arr1,arr2))

//#flatten-deeply-nested-array
// const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// const n = 0
// const flatarr = arr.flat(0)
// console.log(flatarr)


//# Compact Object
// const obj = {"a": null, "b": [false, 1], "c":{"z": true}}
// let getCompact = (val) => {
//     if (Array.isArray(val)) {
//         let resultArray = [];
//         console.log(`Iterating thru array: ${JSON.stringify(val)}`);
//         for (let subVal of val) {
//             let compactSub = getCompact(subVal);
//             console.log(`111 : ${compactSub}`)
//             if (Boolean(compactSub)) {
//                 resultArray.push(compactSub);
//             }
//         }
//         return resultArray;
//     }

//     if (typeof val === 'object' && val !== null) {
//         let resultObject = {};
//         console.log(`Iterating thru object: ${JSON.stringify(val)}`);
//         for (let [key, subVal] of Object.entries(val)) {
//             console.log(`Checking key ${key}: ${JSON.stringify(subVal)}`);
//             let compactSub = getCompact(subVal);
//             console.log(`compactSub ${compactSub}`)
//             if (Boolean(compactSub)) {
//                 resultObject[key] = compactSub;
//             }
//         }
//         return resultObject;
//     }

//     if (Boolean(val) === true) return val;
//     return undefined;
// }
// var compactObject =  getCompact(obj);
// console.log(compactObject)



// const house = {"rooms":[{"no":1,"owner":"Pratima","window":[{"color":"brown","material":"seesham"},{"color":"brown","material":"sangwan"}],"door":[{"color":"white","material":"plastic"},{"color":"brown","material":"sangwan"}],"fan":[{"color":"white","material":"steel"}],"light":[{"color":"white","type":"bulb"},{"color":"white","type":"tubelight"}]},{"no":2,"owner":"saurabh","window":[{"color":"brown_2","material":"seesham_2"},{"color":"brown_2","material":"sangwan_2"}],"door":[{"color":"white_2","material":"plastic_2"},{"color":"brown_2","material":"sangwan_2"}],"fan":[{"color":"white_2","material":"steel_2"}],"light":[{"color":"white_2","type":"bulb_2"},{"color":"white_2","type":"tubelight_2"}]},{"no":3,"owner":"family","window":[{"color":"brown_3","material":"seesham_3"},{"color":"brown_3","material":"sangwan_3"}],"door":[{"color":"white_3","material":"plastic_3"},{"color":"brown_3","material":"sangwan_3"}],"fan":[{"color":"white_3","material":"steel_3"}],"light":[{"color":"white_3","type":"bulb_3"},{"color":"white_3","type":"tubelight_3"}]}]}
// //find no of  rooms
// const noofhouse= house.rooms
// console.log(noofhouse.length)
//saurabh's room number
// const srooms =noofhouse.find(val =>val.owner ==='saurabh')
// console.log(srooms.no)

//replace all no with like 1,2, 3 with 101, 102,103 
// const changesroomno = noofhouse.map(val => (val.no+100))
// console.log(changesroomno)

//#create an enum and replace type of light

// const  lightenum ={
// 	"rotatedbulb":"rotatedbulb",
// 	"Tube":"tublight"
// }

// for (i=0; i<house.rooms.length;i++) {
// 	let room = house.rooms[i];

// }
//or
// for (let room of house.rooms) {
// 	// console.log(room)
// 	const newLightArray = []
// 	for(let light of room.light){                //here room is  object , so it is converted into arr "room.light"
//          const newBulbType = light.type.replace('bulb', lightenum.rotatedbulb )
//          newLightArray.push(newBulbType)
// 	}
// 	console.log(newLightArray)
// 	room.light = newLightArray
// 	console.log(room)
// }

//#pass by value and pass by reference
// pass by values works with premitive data. these are premitive data type Boolean, byte, character, short, int, long, float, and double.
//*pass by reference works with non premitive data type. object and array are non premitive


//pass by value

// let a= 5
// let b=a    //here a's values is passed on b
// a = a+6
// console.log("a", a)
// console.log("b", b)

//pass by reference

// let obj1 ={
// 	name:"pratima",
// 	age:30
// }
// let obj2 = obj1
// obj2.age =32
// console.log("obj1", obj1)
// console.log("obj2", obj2)

// let arr1 =[5.4,9]
// let arr2 =arr1
//  arr2.push(6)
// console.log("arr1", arr1)
// console.log("arr2", arr2)

//# pass by value example

// let a = 1;
// let b = 2;
// function passbyvalue(a, b) {
// 	let temp
// 	temp =b //temp=2
// 	b=a     //b=1
// 	a=temp  // a=2
// 	 console.log(`Inside Pass by value a = ${a} b = ${b}`);
// }

// console.log(`Before calling Pass by value
//         Function -> a = ${a} b = ${b}`);

// passbyvalue(a,b)

// console.log(`After calling Pass by value
//        Function -> a =${a} b = ${b}`);

//# pass by reference

// let obj ={a:5, b:6,c:9} ;
// // let objb = {a:'7',b:'3',c:'4'];
// function passbyvalue(a, b) {
// 	let temp =obj.a // temp= 5, temp=x00a
// 	obj.a= obj.b     //a=6, x00a = x00b
// 	obj.b=temp  // b=5, x00b = x00a
// 	 console.log(`Inside Pass by value a = ${obj.a} b = ${obj.b}`);
// }

// console.log(`Before calling Pass by value
//         Function -> a = ${obj.a} b = ${obj.b}`);

// passbyvalue(obj.a,obj.b)

// console.log(`After calling Pass by value
//        Function -> a =${obj.a} b = ${obj.b}`);


//#Updating the object reference in the function.

// function updatingobj(obj) {
// 	obj.a =14
// 	obj.b = 20
// 	console.log(`Inside Pass by value a = ${obj.a} b = ${obj.b}`);
// }

// let obj = {a:10, b:16,c:9}
// console.log(`Before calling Pass by value a = ${obj.a} b = ${obj.b}`);

// updatingobj(obj)
// console.log(`After calling Pass by value a =${obj.a} b = ${obj.b}`);

//important
// Note: In Pass by Reference, we are mutating the original value. when we pass an object as an arguments and update that object’s reference in the function’s context, that won’t affect the object value. But if we mutate the object internally, It will affect the object .

//#
// let obj = {
// 	a: 10,
// 	b: 20

// }

// function PassbyReference(obj) {

// 	// Mutating the original object or changing exxisting obj
// 	obj.c = "GEEKSFORGEEKS";
// 	console.log(obj);
// }


// console.log(`Mutating the original object -> `)
// console.log(`Before calling Pass By
// 		Reference Function -> obj`);
// console.log(obj);

// PassbyReference(obj)
// console.log(`After calling Pass By
// 		Reference Function -> obj`);
// console.log(obj);

//

// function PassbyReference(obj) {

// 	// Changing the reference of the object OR here it is creating new address of whole obj
// 	obj = {
// 		a: 10,            
// 		b: 20,
// 		c: "GEEKSFORGEEKS"
// 	}
// 	console.log(`Inside Pass by
// 		Reference Function -> obj `);
		
// 	console.log(obj);
// }

// let obj = {
// 	a: 10,
// 	b: 20

// }
// console.log(`Before calling Pass By
// 		Reference Function -> obj`);
// console.log(obj);

// PassbyReference(obj)
// console.log(`After calling Pass By
// 		Reference Function -> obj`);
// console.log(obj);


//#print loop using for loop

// const arr =[5,8,7,9]

// for (var i=0; i<arr.length; i++){
//       console.log(arr[i])
// }

//print loop using while loop

// const arr =[5,8,7,9]
// var i=0
// let text =''
// while(i<arr.length){
//     text = text+arr[i] 
//     i++
// }

// console.log(text)

//# nested loop

// 1
// 12
// 123
// 1234
// 12345

// for (var i = 1; i <= 5; i++) {
// 	for (var j = 1; j <=i ; j++) {
// 		console.log(j)
// 	}
//   console.log('\n')
// }

//2nd loop
// 1
// 22
// 333
// 4444
// 5555

// A|B___________
// 1|1
// 2|22
// 3|333
// 4|4444
// 5|5555

// for (var i = 1; i <= 5; i++) {
// 	for (var j =1; j<=i; j++) {
// 		console.log(i)
// 	}
	// console.log('\n')
// }

//#
// 5555
// 4444
// 333
// 22
// 1

//   B_________
// A
//  5|5555
//  4|4444
//  3|333
//  2|22
//  1|1     ↑coloum

// for (var i = 5; i >=1; i--) {
//    for (var j = 1; j <=i ; j++) {
//    	console.log(i)
//    }
//    console.log("\n")
// }

//#
// A B_________
// 5|54321
// 4|4321
// 3|321
// 2|21
// 1|1

// for (var i =5; i >=1; i--) {
// 	for (var j =i; j >=1; j--) {
// 		console.log(j)
// 	}
// 	console.log('\n')
// }

//# call() method allows an object to use the method (function) of another object.

// var obj = {name:'Pratima'}

// function sayHello(){
// 	return "hello"+ this.name
// }
// var obj2 = {
// 	name:'neetu',
// 	getName: function(){
// 		return this.name
// 	}
// }
// console.log(obj2.getName())
// console.log(obj2.getName.call(obj))

//# memorize 
// function memorise(num) {
// 	var cache ={}
//     if(num in cache){
//     	console.log('num is in cache', cache[num])
//     	return cache[num]
//     }else{
//     	console.log('else storing',cache[num] = num + 20)
//     	return cache[num]

//     }
// }

// console.log('final',memorise(50))
// console.log('final',memorise(5))
// console.log('final',memorise(40))

//# scope

// var val = 80;
// let val1=60

// function socpe() {
// 	console.log('val', val)
// 	console.log('val', val1)
// }

//# Rest parameter is used to take a variable number of arguments and turns them into an array while the spread operator takes an array or an object and spreads it
//# rest operator
// let var1 =65
// let var2=55
// let var3=6
// let var4=14
// function rest(...arg) {
// 	let i=0
// 	let sumofarg =0
// 	while(i<arg.length){
//         sumofarg = sumofarg+arg[i]
//         i++
        
// 	}
// 	return sumofarg
// }

// rest(var1,var2,var3,var4)

//# spread operator
// let arr=[6,8,9,12,34,5]
// function spread(arr) {
// 	console.log(arr)
// }

// console.log(...arr)


//#

// let obj = {
// 	name:'pratima',
// 	age:30
// }

//# obj using Class.
// class Obj {
// 	constructor(){
// 		this.name ='pratima'
// 		this.age =28
// 	}
// }
// const myobj = new Obj()
// console.log(myobj)

//# obj create  Method.

// const tree = {
// type:'rose wood',
// year:150,
// use: function useFun() {
// 	console.log('we are using in mutiple ways', this.type)
// 	return this.type
// }
// }

//  tree.anotheruse = function anotherfun() {
// 	console.log('hii another function')
// }
// console.log(tree)

//# obj using Object Literals
// const obj = {
// 	key:'value',
// 	name:'pratima',
// 	hobbies:{game:'chcess'},
// 	myfun:function() {
// 		console.log('hello')
// 	}
// }

// //access of data from above obj by using two way's
// console.log(acceesedname = obj.name)
// console.log( acceesedhobbies = obj['hobbies'])

// //add a new key-value pair to an object

// obj.age =29
// console.log(obj)
// //To delete a key-value pair from an object
// console.log(delete obj.key)
// console.log('deleted',obj)
//Object Methods
//Object methods are functions that can be used on objects.Object methods are defined using the method() syntax.
// const person = {
//   name: 'John',
//   age: 25,
//   sayName() {
//     console.log(this.name);
//   }
// };

// person.sayName();
//here We can call the sayName() method using the person.sayName() syntax

//Object methods or function can also be used to create new objects.
// const newobjusingmethods = function (name, age) {
// 	const person={
//            name:name,
//            age :age
// 	}
// 	return person
// }

// console.log(newobjusingmethods('sapna',30))

//Objects can also be accessed using a combination of dot notation and bracket notation. 
//This can be useful when the object name or property name contains spaces or other special characters.

// const person = {
//   'full name': 'John Smith'
// };
// const name = person['full name'];
// console.log(name);

//# object using Prototype

// const obj ={
// 	name:'sawan',
// 	sayName: function() {
// 		console.log('hello obj')
// 	}
// }

// const objusingprototype = Object.create(obj)
// console.log(objusingprototype)

//# object using constroctor

// function fun(name, age) {
// 	this.name= name,
// 	this.age = age,
// 	this.sayName= function() {
// 		console.log(this.name +'and' + this.age )
// 	}
// }
// let instantobj = new fun('jack', 30)
// console.log(instantobj.sayName())


// //#setter and getter
// const person ={
// 	firstName:'pratima',
// 	secondName:'adarshi',
// 	set fullName(name) {
// 		const [firstname, lastname] = name.split(' ');
// 	this.firstname = firstname;
// 	this.lastname =lastname;
// 	}
// }

//  person.fullName = 'jack jill'
// console.log(person.firstname); 
// console.log(person);

// const person ={
// 	firstName:'pratima',
// 	secondName:'adarshi',
// 	fun : function(name) {
// 		const [firstname, lastname] = name.split(' ');
// 	this.firstname = firstname;
// 	this.lastname =lastname;
// 		this.secondName = firstname

// 	}
// }

//  person.fun('jack jill') 
// console.log(person.firstname); 
// console.log(person.lastname);
// console.log(person)


//# Object Iteration

// const person = {
//   name: 'John',
//   age: 25
// };

// for (let key in person) {
//   console.log(typeof key, typeof person[key]);
// }

// console.log(Object.keys(person))

//# Object entries
// const obj = {
//   name: 'John',
//   age: 30
// };

// for (const [key, value] of Object.entries(obj)) {
//   console.log(key + ': ' + value);
//   console.log(typeof key + ': ' + typeof value);
// }

//# Object assign
// const object1 = {
//   a: 1,
//   b: 2,
// };

// const object2 = {
//   b: 4,
//   c: 5,
// };
// const object3 = Object.assign(object1, object2);
// console.log(object3);

//# 
// console.log("1")
// // var scope = "global scope";
// function check() 
// {
// 	console.log("2")
//     // var scope = "local scope"; 
//     function f() 
//     { 
//     	console.log("3")
//     	// console.log('s',scope)
//          // return scope; 
         
//     }
//     console.log("4")
//     f()
//     // return f();
// }
// console.log("5")
// check()
// // console.log(check())


//#

// function func1(){
// 	console.log("2")
//   setTimeout(()=>{
//   	console.log("5")
//     console.log(x);
//     console.log(y);
//   },3000);
// console.log("3")
//   var x = 2;
//   console.log("4")
//   let y = 12;
// }
// console.log("1")
// func1();


//#
// var x = 23;

// (function(){
//   var x = 43;
//   (function random(){
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })(); 

//# need to clarification
  // let hero = {
  //   powerLevel: 99,
  //   getPower(){
  //   	console.log('4')
  //     return this.powerLevel;
  //   }
  // }
  
  // let getPower = hero.getPower;
  //  console.log('calling independent getPower function',getPower()); //when we run this function it is giving only getPower function and this is independent of hero, so in this getPower function we are not getting any variable like powerLevel.
  //  //if we will call like below then , it will gives hero's getpower and return some powerLevel
  //   let getPower = hero.getPower();
  //    console.log('calling dependent getPower function with hero so will get powerLevel value Through this keyword',getPower());
  // let hero2 = {powerLevel:42};
  // console.log(getPower.apply(hero2));
 
 //#
   // Code 2  Since we are using the arrow function inside func2, this keyword refers to the global object.
  
  // const a = function(){
  //   console.log('1',this);
  
  //   const b = {
  //     func1: function(){
  //       console.log('2',this);
  //     }  
  //   }
  
  //   const c = {
  //     func2: ()=>{
  //       console.log('3',this);
  //     }
  //   }
  
  //   b.func1();
  //   c.func2();
  // }
  // a();


  //# Code 3  Only in the IIFE inside the function f, this keyword refers to the global/window object.
  // const b = {
  //   name:"Vivek",
  //   f: function(){
  //     var self = this;
  //     console.log('1',this.name);
  //     (function(){
  //       console.log('2',this.name);
  //       console.log('3',self.name);
  //     })();
  //   }
  // }
  // b.f();

  //#// Code 4

// (function(a){
//   return (function(){
//     console.log('2',a);
//     a = 23;
//   })()
// })(45);

// # code5 
// Each time bigFunc is called, an array of size 700 is being created,
// Modify the code so that we don't create the same array again and again

// function bigFunc(element){
//   let newArray = new Array(7).fill('♥');
//   console.log('1',newArray)
//   return newArray[element];
// }

// console.log(bigFunc('3',3)); // Array is created
// console.log(bigFunc('5',5)); // Array is created again

//ans

// function bigFunc(){
//   let newArray = new Array(7).fill('♥');
//   console.log('1',newArray)
//   return (element)=> newArray[element];
// }
// let getElement = bigFunc();
// console.log(getElement('3',3)); // Array is created
// console.log(getElement('5',5)); 

//# code6 modify the code
// function randomFunc(){
//   for(var i = 0; i < 2; i++){
//     setTimeout(()=> console.log(i),1000);
//   }
// }
// randomFunc();

//ans
// function randomFunc(){
//   for(let i = 0; i < 2; i++){
//     setTimeout(()=> console.log(i),1000);
//   }
// }
// randomFunc(); 
//or
// function randomFunc(){
//   for(var i = 0; i < 2; i++){
//   (function(i){
//       setTimeout(()=>console.log(i),1000);
//     })(i);
//   }
// }
// randomFunc();


//#What is the output of the following code?

// const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => console.log('let',b[i]), 1000);
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(() => console.log('var',b[i]), 1000);
// }


//#  In JavaScript, how do you turn an Object into an Array []?

// const obj ={ id: "1", name: "user22", age: "26", work: "programmer" };
// //Method 1: Convert the keys to Array using - Object.keys()
// const objtoarrkey = Object.keys(obj)
// // Method 2 Converts the Values to Array using - Object.values()
// const objtoarrval = Object.values(obj)
// // Method 3 Converts both keys and values using - Object.entries()
// const objtoarrkeyval = Object.entries(obj)
// console.log(objtoarrkeyval)

//# Write the code to find the vowels

// function findVowel(str) {
// 	let count=0
// 	const vowels = ['a', 'e', 'i', 'o', 'u']
// 	for (let char of str.toLowerCase()) {
// 		console.log(typeof char,char)
// 		if (vowels.includes(char)) {
//            count++
// 		} 
// 	}
// 	return count
// }

// console.log(findVowel('findVowel'))

//# Write the code given If two strings are anagrams of one another, then return true.
// var firstWord = "Deepak";
// var secondWord = "Aman";

// function strcompararing(str1 , str2) {
//      const one = str1.toLowerCase().split('').sort().join('')
//      const two = str2.toLowerCase().split('').sort().join('')
//      if (one=== two) {
//      	return true
//      } else {
//      	return false
//      }
// }
// console.log(strcompararing(firstWord, secondWord))



//# 1clouser, variables or their reference is alwayas retain in clouser. it doesn;t destroy outer varible. and when we called stored variable then we can able to access that value.
// function x() {
// 	var a=7
// 	return function y(){
//        console.log(a)
// 	}
// }
// let z= x()
// console.log('z', z)
// console.log('calling z', z())

//2 clouser anything in the outer side function is accesable to the inner function
// function outersideFunction(outVarible) {
//     const skill= "javaScript"
//     return function innnerFunction (innerVariable){
//         // console.log('outVarible', outVarible);
//         // console.log('innerVariable', innerVariable);
//         console.log('skil', skill);
//     }

// }

// const valueOfOuterFunction = outersideFunction('outerVariable')
// console.log('not calling the function only chceking a variable call',valueOfOuterFunction)
// console.log('as a function call',valueOfOuterFunction('innerVariale'))

//#3 clouser

// function sum(a,b, c) {
//    return {
//    	getSumTwo: function() {
//    		return a+b
//    	},
//    	getSumThree:  hi =()=> {
//    		return a+b+c
//    	},
//    	setTime:setTimeout(()=>{console.log(c)},1000)
//    }
// }
// var z= sum(6,8,5)
// console.log(z.getSumThree())
// console.log('t',z.setTime())

//solution to without error

// function sum(a,b, c) {
//    return {
//    	getSumTwo: function() {
//    		return a+b
//    	},
//    	getSumThree:  hi =()=> {
//    		return a+b+c
//    	},
//    	setTime:function (){setTimeout(()=>{console.log(c)},1000)}
//    }
// }
// var z= sum(6,8,5)
// console.log(z.getSumThree())
// console.log('t',z.setTime())
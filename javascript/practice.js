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

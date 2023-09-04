//# JavaScript Program to Add Two Numbers
// function addtwo(a, b) {
// 	const c= a+b
// 	return c
// }

// console.log(addtwo(2,8) )

//# JavaScript Program to Find the Square Root

// function Squareroot(a) {
// 	const c = Math.sqrt(a)
// 	return c
// }
// console.log(Squareroot(16) )

//# JavaScript Program to Calculate the Area of a Triangle

// function areaTriangle(b,h) {
// 	const A = b*h/2
// 	return A
// }
// console.log(areaTriangle(2, 5) )

//# JavaScript Program to Swap Two Variables

// let a=8
// let b=6

// let temp = a
// a=b
// b=temp

// console.log('a', a)
// console.log('b', b)

//# Javascript Program to Convert Celsius to Fahrenheit
//F = (C x 1.8) + 32
// const c = 60
// const Fahrenheit = (c*1.8)+32
//  console.log('Fahrenheit', Fahrenheit)

//# Javascript Program to Generate a Random Number
// const randnum = Math.random(3)
// console.log('randnum', randnum)

//# Javascript Program to Check if a Number is Odd or Even
// function oddevennum(num) {
// 	if (num%2 === 0) {
//          console.log( "num is even")
// 	} else {
// 		console.log("num is odd")
// 	}

// }
// console.log(oddevennum(3))

//# JavaScript Program to Find the Largest Among Three Numbers
// const a=56
// const b=80
// const c=2
// console.log(Math.max(a,b,c) )
//or
// if (a>=b && a>=c) {
// 	console.log('a is largest')
// } else if (b>=c && b>=a){
// 	console.log('b is largest')
// }else{
// 	console.log('c is largest')
// }

//# JavaScript Program to Check Prime Number
// const num =8

// if (num%2==0) {
// 	console.log("prime number")
// } else {
// 	console.log("not prime number")
// }

//# JavaScript Program to Find the Factorial of a Number
// function factorial(num) {
// 	if (num<=1) {
// 		return 1
// 	} else {
// 		return num*factorial(num-1)
// 	}
// }

// console.log(factorial(4))

//#JavaScript Program to Display the Multiplication Table
// function table(num) {
// 	let  tablearr =[]
// 	for (var i = 1; i <= 10; i++) {
// 		  tablearr.push(num *i)
// 		 // console.log(tablearr)
// 	}
// 	return tablearr
// }
// console.log(table(5))


//#
// function fiabonic(n) {
// 	if (n<1) {
// 		return 1
// 	} else {
//      return  n+ fiabonic(n-1)
// 	}
// }

// console.log(fiabonic(5))

//# JavaScript Program to Make a Simple Calculator
// let result
// const num1 = 8
// const num2 = 3
// let operator ='/'
// switch(operator){
// 	case'+': 
// 	result =num1 +num2
// 	break;
// 	case '-': 
// 	result = num1- num2
// 	break;
// 	case '*': 
// 	result = num1*num2
//     break;
//     case '/':
//    	result =num1 /num2
//     break;
//     default: console.log('invalid num')
//     break;
// }

// console.log(result)

//# JavaScript Program to Check if the Numbers Have Same Last Digit
// const num = '89006'
// const lastdigit = num.split('')
// const lenghts = lastdigit.length -1
// if (lastdigit[lenghts] === '6') {
// 	console.log('Numbers Have Same Last Digit')
// } 

//# JavaScript Program to Find the Factors of a Number

// let num =12
// for (var i = 1; i <= num; i++) {
// 	const arr =[]
// 	if (num%i === 0) {
// 		 arr.push(i)
// 		console.log('arr',arr)
// 	} else {
// 		console.log('not factors', i)
// 	}
// }

//# JavaScript Program to Find Sum of Natural Numbers Using Recursion

// function sum_recursion(num) {
// 	if (num<=0) {
// 		return num
// 	} else {
// 		return	num+ sum_recursion(num -1)
		
// 	}
// }
// console.log(sum_recursion(6))

//# JavaScript Program to Convert Decimal to Binary

// const decimalnum =8.56
// const binary = decimalnum.toString(2)
// console.log(binary)

//# JavaScript Program to Check Whether a String is Palindrome or Not
// const str = 'abcdcba'
// const data = str.split('')
// const reversedata = data.reverse().join('')
// console.log(reversedata)

// if (str === reversedata) {
// 	console.log('String is Palindrome')
// } else {
// 	console.log('String is not Palindrome')
// }

//# JavaScript Program to Sort Words in Alphabetical Order
// const str = 'Alphabetical'
// const sortt =str.split('')
// // const sorts = sortt.sort()
// // console.log(sorts)
// // or
// console.log(sortt.sort(function (a ,b){
// 	return (b-a)
// }))

//# JavaScript Program to Replace Characters of a String
// const str ='Characters'
// const replacedstr = str.replaceAll('Characters','Stringssss')
// console.log(replacedstr)

//# JavaScript Program to Reverse a String
// const str ='JavaScript'
// const reversestr = str.split('').reverse()
// console.log('reversestr', reversestr)


//#JavaScript Program to Create Objects in Different Ways
//1
// const obj1 = {}
// console.log(obj1)
//2
// const obj2 = new Object()
// console.log(obj2)
//3
// const obj3 = {name:'pratima', age:30}
// console.log(obj3)
//4
// function tree() {
//       this.type='mahogni',
//      this.age=100,
//       this.leafetype='green'
// }
// const obj4 = new tree()
// console.log(obj4)

//# Program to Check the Number of Occurrences of a Character in the String
// const str = 'Occurrences'
// const splitedstr = str.split('')
// // console.log(splitedstr.filter(val=>val==='c').length)
// let numberofoccurence =0
// for (var i = 0; i < str.length; i++) {
// 	if (str[i] === 'c') {
// 		numberofoccurence++
// 	} 
// }
// console.log(numberofoccurence)

//# JavaScript Program to Convert the First Letter of a String into UpperCase
// const str = 'firstLetter'
// const upercase= str.slice(0,1).toUpperCase() + str.slice(1)
// console.log(upercase)

//# JavaScript Program to Count the Number of Vowels in a String
// const str = 'VowelsString'
// let numberofvowels =0
// for (var i = 0; i < str.length; i++) {
// 	if (str[i] ==='a' || str[i] ==='e' || str[i] ==='i' || str[i] ==='o' || str[i] ==='u') {numberofvowels++} 
// }

// console.log(numberofvowels)

//# JavaScript Program to Remove a Property from an Object
// const obj={name:'pratima',age:30,hobbies:['chess','drwaing']}
// console.log(delete(obj.hobbies))
// console.log(obj)

//# JavaScript Program to Add Key/Value Pair to an Object

// let obj ={name:'pratima',age:30,hobbies:['chess','drwaing']}
// obj.height=5.3
// console.log(obj)

//# JavaScript Program to Count the Number of Keys/Properties in an Object
// let obj ={name:'pratima',age:30,hobbies:['chess','drwaing']}

// console.log(Object.entries(obj))

//# JavaScript Program to Merge Property of Two Objects
// const person ={
// 	name:'pratima',
// 	age:30,
// }
// const personone ={
// 	gender:'male'
// }

// const mergedobj = Object.assign(person, personone);
// console.log(mergedobj)


//# JavaScript Program to Clone a JS Object
// let obj ={
// 	name:'pratima',
// 	age:30,
// 	gender:'female'
// }
// const clonedobj = obj
// const clonedobj = Object.assign({}, obj)
// console.log(clonedobj)

//# JavaScript Program to Add Key/Value Pair to an Object

// let obj ={
// 	name:'pratima',
// 	age:30,
// 	gender:'female'
// }
// obj.height =6
// console.log(obj)

//# JavaScript Program to Format Numbers as Currency Strings

// 100000 = 1,00,000
// 10000000 = 1,00,00,000
// 26 = 26
// 100 = 100
// 1000 = 1,000

// const num= 10000000
// const num = 100000
// const strnum = num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
// console.log(strnum)
// const formatedcurrency = `$ ${num}`

//# JavaScript Program to Generate Random String
// const random = Math.random()
// console.log(random.toString(36).substring(2,7))

//# JavaScript Program to Check if a String Starts With Another String
// const string = 'hello world';
// const toCheckString = 'he';
//1stway
// const ifcheck = string.startsWith(toCheckString)
//2nd way
// const ifcheck = string.lastIndexOf(toCheckString)
// console.log(ifcheck)

//# JavaScript Program to Trim a String
// const string = ' hello world  ';
// console.log(string.trim())

//# JavaScript Program to Convert Objects to Strings

// const obj ={
// 	name:'pratima',
// 	age:30,
// }

// const str = JSON.stringify(obj)
// console.log( str)

//# JavaScript Program to Check Whether a String Contains a Substring

// const str='String'
// const substr = 'in'
// if (str.includes(substr)) {
// 	console.log('yes')
// }

//# JavaScript Program to Format the Date
// const todayDate = '27/08/2023'
// console.log(todayDate)
// function formateDate(date, formate) {
// 	const[day,month,year] =date.split('/')
// 	const result = `${day}-${month}-${year}`
// 	console.log(result)
// }

// formateDate(todayDate, 'MM/DD/YYYY')

//#JavaScript Program to Compare The Value of Two Dates
// const day1 = new Date().getMonth()
// const day2 = new Date().getMonth()
// if (day1 === day2) {
//          console.log('same month')
// } 

//# JavaScript Program to Create Counter
// let count =[]
// for (var i = 0; i < 5; i++) {
// 	count.push(i)
// }
// console.log(count)

//# JavaScript Program to Remove Specific Item From an Array
// const arr =[6,8,45,89,2,5]
// const n=4
// let newarr=[]
// function RemoveSpecific(arr , n) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if (i!=n) {
//         newarr.push(arr[i])
// 		} 
// 	}
// 	return newarr
// }
//  console.log(RemoveSpecific(arr, n))

// or 2nd way
// const arr =[6,8,45,89,2,5]
// const val=89

// const index = arr.indexOf(val)
// if (index > -1) {
//  console.log(arr. splice(index, 1))
// } 
// console.log(arr)

//# JavaScript Program to Check if An Array Contains a Specified Value
// const arr =[6,8,45,89,2,5]
// const val=89
// if (arr.indexOf(val) == -1) {
//    console.log('not Contains')
// } else{
// 	console.log('contain')
// }

//# JavaScript Program to Insert Item in an Array
// const arr =[6,8,45,89,2,5]
// const insertedarr = arr.push(9)
// 	console.log(arr)

//# JavaScript Program to Append an Object to An Array
// const objs = {
// 	name:'pratima',
// 	age:30,
// 	gender:'female'
// }
// let newarr =[]
// const mynewarr=[...newarr, objs]
//or2ndway
// const mynewarr = newarr.push(objs)
// console.log(newarr)

//# JavaScript Program to Check if An Object is An Array
// const objs = {
// 	name:'pratima',
// 	age:30,
// 	gender:'female'
// }

// if (Array.isArray(objs)) {
// 	console.log('arr')
// }else {
// 	console.log('not arr')
// }

//# JavaScript Program to Empty an Array
// const arr= [6,8,45,89,2,5]
// function createEmptyarr(arr) {
// 	const array =[]
// 	return array
// }
// console.log(createEmptyarr(arr))

//# JavaScript Program to Add Element to Start of an Array
// const arr= [6,8,45,89,2,5]
// arr.unshift(9)
// console.log(arr)

//# JavaScript Program to Remove Duplicates From Array
// const arr= [6,8,2,5,7,2,3,6,9]
// let newarr=[]
// for (var i = 0; i < arr.length; i++) {
// 	if (newarr.indexOf(arr[i]) === -1) {
// 		console.log(newarr.indexOf(i))
//          newarr.push(arr[i])
// 	}else{
// 		console.log('dublicate',arr[i])
// 	}
// }

// console.log(newarr)

//# JavaScript Program to Merge Two Arrays and Remove Duplicate Items
// const arr1 = [6,8,2,5]
// const arr2 = [3,4,5,6]

// const mergedarr = [...arr1 ,...arr2]
// let newArr =[]
// for (var i = 0; i < mergedarr.length; i++) {
// 	if (newArr.indexOf(mergedarr[i]) === -1) {
//          newArr.push(mergedarr[i])
// 	} 
// }
// console.log(newArr)

//# JavaScript Program to Sort Array of Objects by Property Values
// const obj ={
// 	name:'pratima',
// 	age:30,
// 	gender:'female'
// }

// let newarr =[] 
// for(var [k,v] of Object.entries(obj)){
// 	newarr.push(v)
// }
// const sortedarr= newarr.sort()
// console.log(sortedarr)

//# JavaScript Program to Compare Elements of Two Arrays
// const arr1 = [6,8,2,5]
// const arr2 = [3,4,5,6]
// for (var i = 0; i < arr1.length; i++) {
// 	for (var j = 0; j < arr2.length; j++) {
// 		if (arr1[i] == arr2[j]) {
// 			console.log('compared ' )
// 		} else {
// 			console.log('not compared ')
// 		}
	
// 	}
// }
// or 2nd way
  // const result = JSON.stringify(arr1) == JSON.stringify(arr2)
  // console.log(result)

 //#81 JavaScript Program To Perform Intersection Between Two Arrays
 
 //# JavaScript Program to Pass Parameter to a setTimeout() Function
// function fun(arg) {
// 	console.log('fun function')
// }
// console.log(setTimeout(fun,2000))

//# bubble sort

// const data = [14,8,6,52,1,3]

// for (var i = 0; i < data.length-1; i++) {
// 	for (var j = 0; j < data.length-1-i; j++) {
// 		// let flag=0
// 		console.log("j : ", j)
// 		let indexToPrint = [j, j+1]
// 		console.log(indexToPrint)
// 		// let arrToPrint = [data[j], data[j+1]]
// 		// console.log(arrToPrint)
// 		if (data[j]>data[j+1]) {
//                // flag++
//                let temp = data[j]
//                // console.log(temp)
// 				data[j]= data[j+1]
// 				// console.log(data[j])
// 				data[j+1]= temp
				
// 		} 
// 		console.log(data)
		
// 	}
 
//   console.log("end of i : ", i) 
// }

// console.log(data)

//# find the max number
// function function_name(nums) {
// 	let maxnum = 0
// 	for(let num of nums){
// 		console.log(num)
// 		if (num>maxnum) {
//             maxnum = num
//             console.log('maxnumin',maxnum)
// 		} 
// 	}
// 	return maxnum
// }
// console.log(function_name([4,19,6,8,7]))


//#





















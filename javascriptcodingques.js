//1 How To find duplicate elements in array in javascript
// const arr = [1,2,8,2,9,8]

// function duplicatenum(arr) {
	
// 	let newarr=[]
// 	for (var i = 0; i < arr.length; i++) {
// 		if (newarr.indexOf(arr[i]) === -1) {
//            newarr.push(arr[i])
// 		}else{
// 			console.log(arr[i])
// 		}
// 	}
// 	return newarr
// }

// console.log(duplicatenum(arr))


//2 How To find max/min in a given array in javascript

// const arr = [9,87,1,65,665]

// const min = Math.min(...arr)
// const max = Math.max(...arr)
// console.log(min, max)


//3 How To find second Largest value in array
// const arr =[2,8,7,9]

// const mdata = arr.sort((a, b)=>{return b-a})
// console.log(mdata[1])


//4 How to Find missing elements in a given Array 1 to 10

// const arr = [1,2,3,4,5,6,9,10]

// const narr = []
// const minval = Math.min(...arr)
// const maxval = Math.max(...arr)

// for (var i = minval; i < maxval; i++) {
//      if (arr.indexOf(i) == -1) {
//      	narr.push(i)
//      }
// }
// console.log(narr)

//5 how to find even or odd numbers in array in javascript

// const num = [1,2,3,8,9,12,16]

// const even = num.filter(val=> val%2 ===0)
// console.log(even)
// const odd = num.filter(val=> val%2 !==0)
// console.log(odd)


//6 How to find the sum of all elements in array in Javascript

// const arr = [1,9,6,4]

// const sumOfAllElement = arr.reduce((acc, current)=>acc+current,0)
// console.log(sumOfAllElement)


//7 how to find fictorial of a given number in Javascript

// function factorial(num) {
// 	if (num<=1) {
// 		return 1
// 	} else {
//       return num * factorial((num-1))
// 	}
// }

// console.log(factorial(5))

//8 how to find prime number in Javascript
// const arr = 12
// 	for (let i = 2; i < arr; i++) {
// 		if (arr%i==0) {
// 			var result= `not a number`
// 		}else{
// 			var result = `prime number`
// 		}
		
// 	}
// 	console.log(result)



//9 how to find vowels from string in javascript

// const str = 'hi find vowels'

// function vowelfind(str, vowels) {
// 	let narr = []
//       const sstr = str.split('') 
//      for (var i = 0; i < sstr.length; i++) {
//      	   if (vowels.includes(sstr[i])) {
//               narr.push(sstr[i])
//      	   }
//      }
//      return narr
// }
// console.log(vowelfind(str , ['a','e','i','o','u']))


//10 how to reverse a string in Javascript

//  const str = 'hi find vowels'
// const sstr = str.split('').reverse().join('') 
// console.log(sstr)


//11 how to find palindrome in javascript

// const str = 'poope'

// const rstr = str.split('').reverse().join('')
// if (str == rstr) {
// 	console.log("this is palandrom")
// } else {
// 	console.log("this is not palandrom")
// }


//12 how to swap two variables without using the third

// let a=8
// let b=4
// console.log([a,b]=[b,a])



//13 how to merged two arrays in javascript

// const arr1 = ['1','8','9']
// const arr2 = ['45', '7','9']

// const mergeone = [...arr1, ...arr2]
// const mergetwo =arr1.concat(arr2)
// console.log(mergetwo)


// const obj1 = {type:"Fiat", model:"500", color:"white"};
// const obj2 = {type:"Fit", model:"888", color:"white"};

// console.log({...obj1, ...obj2})


//14 How to find factor of a given integer in javascript


//15 simple calculator in javscript



//16 How to compare two Arrays are Equal or Not in JavaScript


// const a1= [4,'a',8,9]
// const a2 = [4, 'b', 8, 9]

// if (JSON.stringify(a1) == JSON.stringify(a2)) {
// 	// console.log('array are equal')
	
// }else{
// 		// console.log('array are not equal')
	
// }


//17 how to find intersection of two arrays in javascript

// const a1= [2,9,6,8,4,4,4]
// const a2 = [4, 8,6, 9,12]


// function intersectionnum(a1,a2) {
// 	let narr = []
// 	for(let val of a2 ){
// 		if (a1.indexOf(val) !== -1) {
//              narr.push(val)  
// 		}
// 	}
// 	return narr
// }

// console.log(intersectionnum(a1,a2))


//18 how to find union of two arrays in javascript

// const a1= [2,1,6,8,17]
// const a2 = [4, 8,6,19,12,17]
// const onearr = [...a1, ...a2]

// console.log(uniquearr = [...new Set(onearr)])


//19 how to convert kilometers into miles in Javascript

// function milsconvrt(km) {
// 	const mile = km * .621371
// 	return mile 
// }

// console.log(milsconvrt(4))


//20 how to convert first letter of string in uppercase

// const str = 'kilometers into miles'

// const sstr = str.split(' ')
// const data = sstr.map(val => {
// 	return val.charAt(0).toUpperCase()+ val.slice(1)
// }).join(' ')
// console.log(data)


//21 how to find fibonacci sequence in javascript (learn)

// function fibonacci(num) {
//     if (num == 1)
//         return 0;
//     if (num == 2)
//         return 1;
//     return fibonacci(num - 1) + fibonacci(num - 2);
// }
// console.log("Fibonacci(5): " + fibonacci(5));
// console.log("Fibonacci(8): " + fibonacci(8));



//22 How to Check the No of Occurrence of Character in String

// const str = 'kilometers into miles'

// function occurence(str, a) {
// 	let count =0
// 	const sstr = str.split('')
// 	for (let i = 0; i < sstr.length; i++) {
// 		if (sstr[i]==a) {
// 		count++
// 	    }
	
// 	}
// 	return count
// }

// console.log(occurence(str, 'e'))


// var a=1 b=2 c=3

// console.log(a)
// setTimeout(()=>{
// 	console.log(c)
// },0)
// console.log(b)


// for(i=0; i<4; i++){
// 	setTimeout(()=>console.log(i),0)
// }

// console.log(x)
		
// 		 let x=7

// function sayHello() {                  // in the output we can get (8,6,3,2,9) these values in arguments in regular function
// 	console.log(typeof arguments)
// }
// sayHello(8,6,3,2,9)

// function a(x) {
// 	return function b(y) {
// 		return function c(x) {
// 			return (x+y+x)
// 		}
// 	}
// }

// console.log(a(1)(6)(4))





//#new
//# create a function that accept non-negetive integer and string and returns a new list with strings filtered out.
//  function nonzerofun(list){
//      let newarr =[] 
//    for (var i = 0; i < list.length; i++) {
   
//    	   if (	list[i] !== 0 && typeof list[i] !== 'string') {
//       	   newarr.push(list[i])
//       } else {
//       	  console.log(list[i])
//       }
//    }
// return newarr
// }
// console.log('nonzerofun', nonzerofun([1,2,'a','b']))



//# 

// function arraydifffind(a, b) {
// 	let newarr =[]
// 	for (var i = 0; i < a.length; i++) {
// 		if (!b.includes(a[i])) {
//              newarr.push(a[i])
// 		} 
// 	}
// 	return newarr
// }

// console.log(arraydifffind([1,2], [1]))   //output [2]



//# input [{name:'bart'}, {name:'lisa'}]
//output 'bart & lisa'

// function listfun(arr) {
// 	let slist =''
// for (var i = 0; i < arr.length; i++) {
// 	slist += `& ${arr[i].name}`
// }
// return slist
// }
// console.log(listfun([{name:'bart'}, {name:'lisa'}]))




//# kthSmallest

// const arr =[0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
// let k =3

// function kthSmallest(arr, k) {
 
//     for (var i = 0; i <k; i++) {
//        let minIndex =i
//         for (var j = i+1; j < arr.length; j++) {
//           if (arr[j]< arr[minIndex]) {
//             minIndex = j
//           }
//         }
//         [arr[i], arr[minIndex]] = [ arr[minIndex], arr[i]]
//     }
//     return arr[k-1]
// }

// let arr = [7, 10, 4, 3, 20, 15];
// let k = 3;
// console.log(kthSmallest(arr, k)); // Output: 7




//# 
// function func1() {
// 	setTimeout(()=>{
// 		console.log(x)
// 		console.log(y)
// 	},3000)
// 	var x=2;
// 	let y =12
// }

// func1()



// const str= 'I have a key of fords'
// const sstr = str.split(' ').reverse().join(' ')
// console.log(sstr)


// function logestword(str) {
//     const sstr = str.split(' ')
//     const lengthar =sstr.map(v=> v.length)
//     const lstr = sstr[lengthar[sstr.length-1]]
//     console.log(lstr)
// }
// console.log(logestword(str))

// const str = 'poop'

// function palndrom(str) {
//   const rstr = str.split(' ').reverse().join('')
//   const strj = str.split(' ').join('')
//   console.log(strj)
//   if (rstr == strj) {
//     console.log('palndron')
//   } else {
//     console.log('not palndron')
//   }
// }
// console.log(palndrom(str))

// const arr= [7,9,5,6,8,3,5,2,8,9]
// const uniquedata = [...new Set(arr)]
// or
// function uniquedata(arr) {
//   let newarr= []
//   for (var i = 0; i < arr.length; i++) {
//       if (!newarr.includes(arr[i])) {
//         newarr.push(arr[i])
//       }else{
//         console.log(arr[i])
//       }
//   }
//   return newarr
// }
// console.log(uniquedata(arr))

// function noofvowels(str, vowels) {
//   let count=0
//   const sstr = str.split('')
//   for (var i = 0; i < sstr.length; i++) {
//     if (vowels.includes(sstr[i])) {
//       count++
//     }
//   }
//   return count
// }
// console.log(noofvowels(str, ['a','e','i','o','u']))

// function fact(n) {
//   if (n<1) {
//     return 1
//   } else {
//     return n* fact(n-1)
//   }

// }
// console.log(fact(5))


// const str = 'abccccccccd'

// function maxchar(str) {
//   let newobj ={}
//     for(let val of str ){
//       console.log(val, newobj[val], newobj)
//       if (newobj[val]) {
//         newobj[val] = newobj[val]+1
//       } else {
//         newobj[val]=1
//       }
//     }
//     return newobj
// }

// console.log(maxchar(str))


// function chunkfun(arr, chunk) {
//   let newarr=[]
//   for (var i = 0; i < arr.length; i +=chunk) {
//     newarr.push(arr.slice(i, i+chunk))
//   }
//   return newarr
// }
// console.log(chunkfun(arr, 2))

// function capitalize(str) {
//     const sstr = str.split(' ')
//   const ustr= sstr.map(v=>v.charAt(0).toUpperCase() + v.slice(1)).join(' ')
// return ustr
  
// }

// console.log(capitalize(str))



// const arr = [1,2,3,5]
// count=10
// let output = [4,6,7,8,9,10]

// function findnotincluded(arr) {
//   let notincuded =[]
//   for (var i =1; i <= count; i++) {
//     if (!arr.includes(i)) {
//       notincuded.push(i)
//     }
//   }
//   return notincuded
// }
// console.log(findnotincluded(arr))



// const str = 'javascript'
// // const char = 'a'

// function countchar(str, char) {
//   let count = 0
//   const sstr = str.split('')
//   for (var i = 0; i < sstr.length; i++) {
//     if (sstr[i].includes(char)) {
//       count++
//     } 
//   }
//   return count
// }
// console.log(countchar(str, 'a'))


//# find the longest word in String
// const str = 'write a function to find longest word in string'
// // output: 'function'

// function findlongest(str) {
// const sstr = str.split(' ')
// const word= sstr.map(v=> v.length)
// const sorted = Math.max.apply(null,word)
// console.log(sorted)
// const longest = word.indexOf(sorted)
// return sstr[longest]
// }
// console.log(findlongest(str))


// const input = ["23-43-65", "98-12-100", "12-23-239"]
// // const output = [65,100,239]

// const data = input.map(v=>Number(v.split('-')[2]))
// console.log(data)



// const arr =[{name:'pratima',
//   age:32,
//   place:'pune'
// },{name:'Subhu',
//   age:26,
//   place:'bangalore'
// },{name:'puru',
//   age:33,
//   place:'noida'
// }]

// // output:[26,32,33]

// const agedatas = arr.sort((a, b)=>a.age-b.age)
// const agedata = agedatas.map(v=>v.age)
// console.log(agedata)


// const arr = [5,5,5,2,2,2,2,2,2,9,4]
//   const item= {}
//   for(let val of arr){
//     if(item[val]){
//       console.log('hii')
//     item[val]= item[val]+1
//     }else{
//       console.log('hello', item[val])
//       item[val] =  1
//     }
//   }
 
// console.log(item)


//# replace space with underscore

// const input = 'ui dev details' 
// // const output = ui_dev_details

// const output = input.split(' ').map(v=>`${v}_`)
// console.log(output.join(' '))


//# how to empty an array in javascript
// const arr = [1,3,5,6,7,4]
// arr.length =0
// console.log(arr)


//duplicate
// const arr = [1,2,3,4,5]
// // const duplicate = arr.concat(arr)
// const duplicates = Object.assign([...arr, ...arr])
// console.log(duplicates)


//# frequentoccuring

// const arr = [1,2,3,12,2,3,12,1,2,3,2121]

// function frequentoccuring(arr) {
//   let item ={}
//   for (var val of arr) {
//     if(item[val]){
//       item[val] = item[val]+1
//     }else{
//       item[val] =1
//     }
//   }
//   return item
// }
// console.log(frequentoccuring(arr))



//# Shuffle the items
// const arr = [1,2,3,4,54,56,6]

// const suffleIndex = Math.floor(Math.random()*arr.length )
// console.log(arr[suffleIndex])
// var temp = arr[suffleIndex]
// arr[suffleIndex]= arr[arr.length]
// arr[arr.length]= temp

// console.log(arr)



// unique

// function unique(arr1,arr2) {
//   const arrd= arr1.concat(arr2)
//   console.log(arrd)
//   const arr=[]
// for (var i = 0; i < arrd.length; i++) {
//     if (arr.includes(arrd[i])) {
       
//     } else {
//       arr.push(arrd[i])
//     }
// }
// return arr
// }
// console.log(unique([1,2,3],[100, 2,1,10]))




//# seperate the number and char in diffrent arr.
// const arr = [1,'d', 'e', 2,3]

// const newarr =arr.filter(v=>typeof v == 'number')
// const strarr  =arr.filter(v=>typeof v == 'string')
// console.log(newarr, strarr)


//function curry example

// function a(x) {
//   return function b(y) {
//     return function c(z) {
//       return x+y+z
//     }
//   }
// }

// const sum = a(2)(6)(9)
// console.log(sum)


//# example of deep copy and shallow copy

const obj={
  name:'pratima',
  age:34,
  place:'bangalore'
}

const obj2={
  name:'subhu',
  age:34,
  place:'Patna'
}

const shallowcopy = Object.assign(obj, obj2)
console.log(shallowcopy)

const deepcopy = Object.assign(JSON.stringify({...obj, ...obj}))
console.log(deepcopy)














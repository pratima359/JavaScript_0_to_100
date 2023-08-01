// #1
// const str = "pra and another words tima";

// const firstthreestr = str.slice(0,3);
// const endthree = str.substring(str.length-3);

// const newstr = `${firstthreestr}${endthree}`

// const mydata = newstr.length >= 3 ? newstr: str

// console.log("data", mydata)

// #2
// const str = "my name is pratima adarshi."

// const newstr = (str) => str.slice(0, str.length/2);
//  console.log("data", newstr)

// #3
 // const str = "my name is pratima adarshi."
 // const str1 = "i am learning javascript"

 // const newstr = (str, str1)=> str.slice(1).concat(str1.slice(1));
 // console.log("data", newstr('pratima','adarshi'))
// #4
// const nearestTo100 = (a, b)=> (100-a) <(100-b)?a:b;
 
//  console.log(nearestTo100(99,1))
//  console.log(nearestTo100(1,98))

// #5

// const arr = [3,5,4,6,7,8,2,9]

// const finalevenarr = (arr)=>
// arr.filter(num => num%2 === 0)
// //or we can create array like this

//   function createArray(num){
// 	const newarr = [];
// 	for ( i =1; i <= num ; i +=1) {
// 		 newarr.push(i)
// 	}
//       return newarr;
// }
// console.log("data", finalevenarr(createArray(8)))

// #6

// const arr = [3,5,4,6,7,8,2,9]
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// const ascorder = arr.sort(function (a,b){return (a-b)})
// const ascorder = fruits.sort()
// console.log("data", ascorder)

// or another way to write ascending order of sorting

// #7 largest even number from the array



// var maskid = "";
// var myemailId =  "mynewemail@gmail.com";
// var prefix= myemailId.substring(0, myemailId .lastIndexOf("@"));
// var postfix= myemailId.substring(myemailId .lastIndexOf("@"));

// for(var i=0; i<prefix.length; i++){
      
//   maskid = maskid + "*";
    
// }
// maskid =maskid +postfix;

// console.log(maskid)
// console.log(prefix)
// console.log(postfix)



// let text = '-$12';
// let results = text.includes('-');

// let result = results ? (text.replace('-', '')) : text

// console.log(result)


// const obj1 ={a:1, b:2, c:3};

// const obj2 ={a:6, b:'hi', h:3};

// const obj3 ={a:1, b:2, c:3};

// const checkequalprop = (p,q) => Object.keys(p).every(val =>q[val])
// console.log(checkequalprop(obj2, obj3))


// const str =`abhjd jhdjsmn hello namste hhiii
// ghdg jhdfjshdk yruieyt oooo
// rrrr yyyy tttt uuuu kkkk`

// const finalarr =str.split('\n').map(row =>row.split(','))

// console.log(finalarr)


// var emailAddress = "john.doe@gmail.com"
    
//     function maskEmail(email) {
//       let split = email.split('@')
//       return email.substr(0,2) + new Array(split[1].length - 1).fill('x').join('') + "@" + split[1]
//     }
    
//     console.log(maskEmail(emailAddress))

// const s = 'webmaster'

// const str =s.split('')
// const fsort = str.sort()
// console.log(fsort.join())


// const vowelstr = (a) => a.match(/[aeiou]/gi)
// console.log(vowelstr('hi pratima uot'))2



 
// const strs ='abacddbec'.split('').filter(
//      (item,index, arr) => arr.filter(fitem => fitem === item).length === 1
//     );
// console.log(strs)


// const people = [{firstName:'aam', lastName:'adarshi',dob:'08/03/1992', department:'Devlopment', salary:85000},
// {firstName:'badu', lastName:'narayan',dob:'08/02/2020', department:'Devlopment', salary:85000},
// {firstName:'shyama', lastName:'nm',dob:'09/03/1980', department:'management', salary:185000},
// {firstName:'praicy', lastName:'oioiio',dob:'12/07/1992', department:'test', salary:40000}]

// const avgsal = people.reduce((accum, current)=> accum + parseInt(current.salary),0)/ people.length
// const avgsal = people.filter(age =>new Date().getFullYear() - new Date(age.dob).getFullYear() > 30)
// const avgsal = people.map(name => name.firstName +' '+ name.lastName)
// const avgsal = people.sort(people.dob)
// console.log(avgsal)


// const link = document.createElement('a')
// link.href ='jhjghgh'
// link.innerText ='this is the link'
// console.log(document.body.appendChild(link))


// const hhhj =document.querySelector('p')
// hhhj.innerHTML = hhhj.innerText.split(' ').map( arr=> arr.length > 8 ? `<span style="background-color: green">${arr}</span>` : arr).join(' ');

// const hhhj =document.querySelector('p')
// const para = hhhj.innerText.split(' ').map( arr=> arr.length > 8 ? `<span style="background-color: green">${arr}</span>` : arr).join(' ');
//  hhhj.innerHTML = para;

// const str = "angular"
// const areapte = str.split('').filter(arr=> 'a'.indexOf(arr) > -1)
// or another method
// const areapte = (str, lettertofind=['a']) => str.split('').filter(arr => lettertofind.indexOf(arr) > -1)
//  console.log(areapte('angular'))

// const para =document.querySelector('p')

// var paras = para.innerText.split('.').join('</br>');

//  para.innerHTML = paras;

// const para = document.getElementsByTagName('p')[0];
// // para1.innerText = document.querySelectorAll('p')[1];
// // para2.innerText = document.querySelectorAll('p')[2];

// const mcount = para.innerText.split(' ').length
// const elemttext = document.createElement('div')
//  elemttext.innerText() = `${mcount} words inside of text`
// document.body.insertBefore(elemttext, para)

// const para = document.getElementsByTagName('p')[0];
// // const mcount = Array.from(para.innerText)
// const mcount = para.innerText.split('').map(val =>val.innerText.replace(/\?/g, 'ðŸ˜Š'))
// console.log(mcount)

// var val =document.getElementById("form1")
//  console.log(val)

// function firstWord(s) {
//   let firstBlank = s.indexOf(' ');
//   return s.substr(0, firstBlank);
  
// }

// console.log(firstWord('speak again'))
// function getLastElement(s){
// 	let lastIndex = s.length -1
// 	 console.log(s[lastIndex])
//   // return s.length
// }
// getLastElement([0,4,6,9])


// const a = [7,7];
//  const sp = a.reduce((accum,val)=> accum+val ,0)

// #2619 Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// const nums = [1,2,3,5,7]
// const sp =  nums.length > 0 ? nums[nums.length - 1] : -1
//  console.log(sp)

// #2626
//sum of all array using reduce function

// nums = [1,2,3,4]
// const rs= nums.reduce((accum, val) => accum+val, 0) 

//  console.log(rs)


// #2634.

// const arr =[0,2,5,12,10,15,78,98]

// const fn = function sum(n){
// 	return n<15
// }

// var filtereddata = function(arr, fn){
//    const result = [];
//                    0  < 7
//   	for (var i =0; i<arr.length;  i++) {
// 	  	  if(fn(arr[i])) {
// 	            result.push(arr[i])
// 		  }else{
// 		  	console.log('not gteater data', arr[i])
// 		  }
// 	  }
// return result
// };

// filtereddata(arr, fn)

// const s = [x => x + 1, x => 2 * x]

// var compose = 
// 	return function(functions) {
//         for(let i = functions.length - 1; i >= 0; i--) {
//             x = functions[i](x)
//             console.log(x)
//         }
//         return x
//     }


// const rs = compose(s)
//  console.log(rs)

// #

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]

// const arr =[1,2,3,4,5]
// var fnum = function(arr, size){
// 	const chunkedArray = [];
// 	let i=0;
// 	while(i<arr.length){
//         chunkedArray.push(arr.slice(i, i+size))
//         i= i+size
// 	}
// 	return chunkedArray
// }

// console.log(fnum(arr, 1))

// const account = ' ws80759293'
// console.log(account.trim().leng)

// const data = "02"
// console.log(data.slice(1))

// const data = "02"
// console.log(data.split('').slice(1,2))

// const emp = [
//     {
//         name: "Ram",
//         empID: 101
//     },
//     {
//         name: "Sham",
//         empID: 102
//     },
//     {
//         name: "Mohan",
//         empID: 103
//     }
// ];

// const finddata = emp.find(val => val.name === "Ram")  in the find() output { name: 'Ram', empID: 101 } 
// const finddata = emp.filter(val =>val.name === 'Sham')  in the filter() output is in the form of object with array [ { name: 'Sham', empID: 102 } ] 
// console.log(finddata)

// const x = [1, 2, 3, 4, 5,6,8,12];

// const evendata = x.filter(val=> val%2 ===0)
// console.log(evendata)  //output [ 2, 4, 6, 8, 12 ]    

// const evendata = x.find(val=> val%2 ===0)
// console.log(evendata) //output => 2



// const emp = [
//     {
//         name: "Ram",
//         empID: 101
//     },
//     {
//         name: "Sham",
//         empID: 102
//     },
//     {
//         name: "Mohan",
//         empID: 103
//     },
//     {
//         name: "Sham",
//         empID: 104
//     },
// {
//         name: "djj",
//         empID: 105
//     },
//     {
//         name: "Sham",
//         empID: 106
//     },


// ];

// const finddata = emp.filter(val =>val.name === 'Sham')
// console.log(finddata) //output is [{ name: 'Sham', empID: 102 },{ name: 'Sham', empID: 104 }, { name: 'Sham', empID: 106 } ] 

// const finddata = emp.find(val =>val.name === 'Sham')
// console.log(finddata)  //output is { name: 'Sham', empID: 102 }  

// const data =[1,2,3,4,6,87,10,5,20]
// const lastIndex = data.length-1
// const lastIndexValue = data[lastIndex]
// console.log(lastIndexValue)

// const matchvalidation = (passord, newpassword)=>{
   
//    if(passord !== newpassword){
//    	return {
//    		status:false,
//    		errMsg: 'Your password must match.',
//    	}
//    }
//     if (passord === newpassword) {
//      return {status:true,
//      	errMsg: 'Your password is matching.',}
//    }
// }

// const newps ='Pratima'
// const pasd = 'Pratima'
// const newpass = newps.trim().length
// const confirmpass = pasd.trim().length
// const passVlidation = matchvalidation(newpass, confirmpass)

// if(!passVlidation.status){
//    console.log(passVlidation.errMsg)
// }else{
// 	console.log(passVlidation.errMsg)
// }


// export const EmailRegEx =
//   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// export const numberRegEx = /[^0-9.-]+/g

// export const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,14}$/

// export const passwordNumberCharRegEx = /^(?=\D*\d)(?=.*?[a-zA-Z]).*[\W_].*$/
// // /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/  only at least  number and letter

// export const atLeastNumberRegex = /[0-9]/

// export const passwordCaseSensitiveRegEx = /(?=.*[a-z])(?=.*[A-Z])/

// export const atLeastSymbolRegEx = /(?=.*[-+_!@#$%^&*.:;"'<>,?{}])/


 // const validateStartDate = (input) => {
// const input = '03/02/2023';
// const startDate = new Date(input); 
// console.log(startDate)
//  const currentDate = new Date();
//  const currentYear = currentDate.getFullYear();
//  console.log(currentDate)
//  const timeten = {
// 	NumberTen:10
// }
//  const yearsAgoToday = currentDate.setFullYear(currentYear - timeten.NumberTen)
//  console.log(yearsAgoToday)
//  const yearsAgoTodaysDate = new Date(yearsAgoToday)
//  console.log(yearsAgoTodaysDate)

// if (yearsAgoTodaysDate > startDate) {
//     return {
//       status: false,
//       errMsg: 'Start date cannot be earlier than 10 years from today',
//     }
//   }

//   return {
//     status: true,
//   }
// }




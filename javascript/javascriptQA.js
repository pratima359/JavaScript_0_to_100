//What are the possible ways to create objects in JavaScript

// A:- 
// const obj1 = {name:'pratima', age: 20}
// var obj2 = Object.create(null);
// const obj3 = new Object({
//      name: "Sudheer",
//      age: 34
// })
// console.log(obj3)

// function person(name , age){
// return (`${name} ${age}`)
// }
// console.log(person("pratimaadarshi",30))

// function person(name , age){
//     this.names = name
//     this.ages =age
// }
// console.log(new person("pratimaadarshi",30))

// function person(){}
// person.prototype.name = 'pratima';
// var newobj = new person();
// console.log(new person())

// class Person{
// 	constructor(){
// 		this.name = 'pratima'
// 	}
// }
// console.log(new Person())

// const nm= 'pratima'
// console.log(JSON.parse(nm))

// let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];
// let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]


// let uri = 'employeeDetails?name=john&occupation=manager'

// let encodedUri = encodeURI(uri)
// let decode = decodeURI(encodedUri)
// console.log(decode)



//  const fieldVal = {
//   SSN: 'SSN',
//   DOB: 'DOB',
//   CITY: 'City',
//   ZIP: 'Zip',
//   DTC: 'DTCNumber',
//   GOVTID: 'GovtID',
// }

// const mapping = [
//   {
//     "name": fieldVal.SSN,
//     "type": [
//       "1A",
//       "1B",
//       "1C",
//       "1D",
//       "2A"
//     ]
//   },
//  {
//     "name": fieldVal.DOB,
//     "type": [
//       "1A",
//       "1B"
//     ]
//   },
//   {
//     "name": fieldVal.CITY,
//     "type": [
//       "1A",
//       "1B",
//       "1C",
//       "1D",
//       "3A",
//       "3B",
//       "3C",
//       "3D"
//     ]
//   },
//   {
//     "name": fieldVal.ZIP,
//     "type": [
//       "1A",
//       "1C",
//       "3A",
//       "3C"
//     ]
//   },
//   {
//     "name": fieldVal.DTC,
//     "type": [
//       "2A",
//       "4A"
//     ]
//   },
//   {
//     "name": fieldVal.GOVTID,
//     "type": [
//       "3A",
//       "3B",
//       "3C",
//       "3D",
//       "4A"
//     ]
//   }
// ]

// const accountTypeList =  {
//       "email": "test3a@gmail.com",
//       "accountNumber": "10001031",
//       "accountType": "1A"
//     }


// function accountdata(mappings, fieldVals, accountTypes){
// 	const disc = mappings.find(val => val.name === fieldVals)
// 	const arrs = disc.type
// 	const flag = arrs.includes(accountTypes)
// 	return flag
// }
// const flag = accountdata(mapping, fieldVal.SSN, accountTypeList.accountType)


//  const mdata=mapping.map((fval) => {
// 	 const data = fval.type
// 	 console.log('data',data)
// 	const somedata = data.some((val) =>  val == accountTypeList.accountType)
// 	return fval.name
// })
// console.log('MDAR',mdata )
// const switchfun = (fname)=>{
// switch (fname) {
//   case fieldVal.GOVTID:
//    console.log(fieldVal.GOVTID);
//     text = "Today is Saturday";
//     break;
//   case fieldVal.ZIP:
//    console.log(fieldVal.ZIP);
//     text = "Today is Sunday";
//     break;
//   default:
//     text = "Looking forward to the Weekend";
// }
// }
// console.log(switchfun(mdata))

// const AccountAuthCode = [
//   {
//     id: '0',
//     value: 'Yes, sign me up for Online Documents',
//   },
//   {
//     id: '1',
//     value: 'No, I prefer mailing',
//   },
// ]

// let userFullnames = AccountAuthCode.map((auth)=>{
//     return `${auth.id}`;
// }
// )

// console.log(userFullnames);


// function sumArray(arr) {
//   return arr.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e)
// }

// console.log(sumArray([[5,8],[0,5],[1,3]]))


// let obj ={
// 	a:'a',
// 	b: 'b',
// 	c: {deep: "deep try"}
// }


// var stringify = JSON.stringify(obj)
// var suprclone = JSON.parse(stringify)    //parse is converting string to obj
// console.log(suprclone);


// var data = false == "" 

// var data = false == []  
// var data= false == {} 
// var data = "" == 0      
// var data = "" == []     
// var data = "" == {}     
// var data = 0 == []      
// var data = 0 == {}      
// var data = 0 == null 
// console.log(data); 

// var user1 = {name : "nerd", org: "dev"};
// var user2 = {name : "nerd", org: "dev"};
// var eq = user1 === user2;
// alert(eq); 



//  function generateYearList() {
//     const currentYear = new Date().getFullYear()
//     const years = []

//     for (let i = 0; i < 20; i++) {
//       years.push((currentYear - i).toString())
//     }

//     return years

//   }
  
// const yars= generateYearList()  

//     console.log("year", yars)



 // function generateMonthList() {
 //    const date = new Date()
 //    const currentMonth = date.getMonth()
 //    console.log("currentMonth", currentMonth)
 //    const months = [
 //      'January',
 //      'February',
 //      'March',
 //      'April',
 //      'May',
 //      'June',
 //      'July',
 //      'August',
 //      'September',
 //      'October',
 //      'November',
 //      'December',
 //    ]

 //    return months.slice(0, currentMonth + 1).reverse()
 //  }


 // const date = new Date()
 //  console.log("date", date)
 //    const currentMonth = date.getMonth()
 //    console.log("currentMonth", currentMonth)
 //  const months = [
 //      'January',
 //      'February',
 //      'March',
 //      'April',
 //      'May',
 //      'June',
 //      'July',
 //      'August',
 //      'September',
 //      'October',
 //      'November',
 //      'December',
 //    ]

 //    const mon = months.slice(0, currentMonth + 1).reverse()


//  const stateAmount = '55.55.5';
//  const rplaceStr = isNaN(Number(stateAmount.replace(',', '')) ) //1st
// // const what = Number(stateAmount.toString().replace(',', '')) <= 50000 //2nd
// console.log('rplaceStr',rplaceStr)

// const value = '1,230.903.4'
//  const valueWithOutDecimal = value.replace(',', '')
//   const decimalSplitted = valueWithOutDecimal?.split('.')
//   const decimalFormatted =
//       decimalSplitted[0] +
//       '.' +
//       decimalSplitted[1]

//       const decimalFormattedFixed = Number(decimalFormatted).toFixed(2) <= 50000

//   console.log("mon", decimalFormattedFixed)


// my code of formated

// export const formatValue = (value) => {
//   if (value === undefined || value === null || !value) {
//     return ''
//   }
//   const valueWithReplaced = value.replace(',', '')

//   if (valueWithReplaced.includes('.')) {
//     const decimalSplitted = valueWithReplaced?.split('.')
//     const decimalFormatted = decimalSplitted[0] + '.' + decimalSplitted[1]

//     const decimalFormattedFixes = Number(decimalFormatted).toFixed(2)
//     const decimalFormattedFixed = decimalFormattedFixes
//       ?.toString()
//       ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
//     return decimalFormattedFixed
//   } else {
//     const maxDecimal = Number(valueWithReplaced).toFixed(2)
//     return maxDecimal?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
//   }
// }

//end

// ankit code

// export const formatValue = (value) => {
//   if (value === undefined || value === null || !value) {
//     return ''
//   }
//   const valueWithOutDecimal = value.replace(',', '')
//   const maxDecimal = Number(valueWithOutDecimal).toFixed(2)
//   if (maxDecimal.includes('.')) {
//     const decimalSplitted = maxDecimal?.toString()?.split('.')
//     const decimalFormatted =
//       decimalSplitted[0]?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') +
//       '.' +
//       decimalSplitted[1]
//     return decimalFormatted
//   } else {
//     return maxDecimal?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '.00'
//   }
// }

//end

//  const formatValue = (value) => {
//   const valueWithReplaced = value.replace(',', '')

//   if (valueWithReplaced.includes('.')) {
//    const decimalSplitted = valueWithReplaced?.split('.')
//   const decimalFormatted =
//       decimalSplitted[0] +
//       '.' +
//       decimalSplitted[1]

//       const decimalFormattedFixes = Number(decimalFormatted).toFixed(2)
// const decimalFormattedFixed = decimalFormattedFixes?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
//     return decimalFormattedFixed
//   } else {
//   	  const maxDecimal = Number(valueWithReplaced).toFixed(2)
//     return maxDecimal?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
//   }
// }

// const mydata = formatValue('1,230')
// const mydata = formatValue('1,230.00')
// const mydata = formatValue('1,230.690')
// const mydata = formatValue('1,230.69.80')
// const mydata = formatValue('49999.098.9')
// console.log("mydata", mydata)
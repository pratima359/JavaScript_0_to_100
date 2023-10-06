const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"



const spantext= document.querySelector("#pass-box")
const passlength = document.querySelector("#total-char")
const numbertype = document.querySelector("#numbers") 
const uppertype = document.querySelector("#upper-case")
const lowertype = document.querySelector("#lower-case")
const symboletype = document.querySelector("#symbols")

console.log(passlength)

const getRandomData =(anytypeofSet)=>{
      return anytypeofSet[Math.floor(Math.random() * anytypeofSet.length)]
}


const generatePassword =( gpassword ='')=>{
     if (uppertype.checked) {
          gpassword += getRandomData(upperSet)
     }
     if (lowertype.checked) {
        gpassword += getRandomData(lowerSet)
     }

     if (symboletype.checked) {
        gpassword += getRandomData(symbolSet)
     }

     if (numbertype.checked) {
        gpassword += getRandomData(numberSet)
     }
    
     if (gpassword.length < passlength.value) {
        return generatePassword(gpassword)
     }

//fill the trimed generated password 
spantext.innerText =trimCertainchar(gpassword, passlength.value)

      console.log(gpassword)
   return gpassword
}



document.getElementById("btn").addEventListener('click', function(){generatePassword()})



//how to trim some length of char

function trimCertainchar(str, lengthlimit){
  if (str.length> lengthlimit){
      let subStr = str.substring(0, lengthlimit);
      return subStr
}else{
    str
}
}

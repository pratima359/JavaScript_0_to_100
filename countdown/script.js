
const endDate = "2 October 2023 00:00 AM"
document.getElementById("end-date").innerHTML = endDate

const inputs = document.querySelectorAll("input");

function countdown() {
	const now = new Date()
	const end = new Date(endDate)
	const diff = (end - now)
	
   //how many hour 
   //3600000msec =1hr
   // 1      = 1/3600000
   // 43847556 msec = 1*43847556/3600000

   //how manys days  24*60*60*1000 milisecond = 1 day
console.log("diff is in milisecond", )
inputs[0].value = Math.floor(diff/(24*60*60*1000))
//1hr = 60*60*1000 milisecond
inputs[1].value = Math.floor(diff/(60*60*1000))
//1min = 60*1000 milisecond
inputs[2].value = Math.floor(diff/(60*1000))
// 1second = 1000 milisecond
inputs[3].value = Math.floor(diff/1000)
}

countdown()

setInterval(()=>{
	countdown()
},1000)
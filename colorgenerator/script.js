
	const btntext = document.getElementById("btn")
	
	

	function colorChamge(){

		//convering random number to hexadecimal color code
		const randomenumber = Math.floor(Math.random() * 16777215)
        const hexacode = "#"+ randomenumber.toString(16)
       //console.log(hexacode)
		document.getElementById("color-code").innerText = hexacode
 		document.getElementById("maindiv").style.backgroundColor = hexacode
          // below code is for copy the color code
 		navigator.clipboard.writeText(hexacode)
	}

//event call
	btntext.addEventListener('click', colorChamge)

// initial call 
colorChamge()
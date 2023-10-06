const inputItem = document.querySelector("#item")
const todoboxItem = document.querySelector("#to-do-box")

inputItem.addEventListener("keyup", function (event) {
   console.log(event)
    if (event.key === 'Enter') {
      // const createdLi = document.createElement('li')
      //   createdLi.innerHTML = `${inputItem.value}
      //           <i class="fas fa-times"></i>`
      //   todoboxItem.appendChild(createdLi)
      //    console.log("createdLi",createdLi)
      // or
        addTodoList(inputItem.value)
          inputItem.value = ''
    }
})

//add the todo list below

const addTodoList =(itemdata)=>{
  const createdLi = document.createElement('li')
        createdLi.innerHTML = `${itemdata}
                <i class="fas fa-times"></i>`
        todoboxItem.appendChild(createdLi)
         console.log("createdLi",createdLi)

        // Add strick on done to do and change the color

 createdLi.addEventListener('click', function stricklist() {
         createdLi.classList.toggle("done")
 })       


         // remove on clicking x
createdLi.querySelector(".fas").addEventListener('click', function removelist() {
     createdLi.remove()
})


}



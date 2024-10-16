const buttons =document.querySelectorAll(".button")
const bd=document.querySelector("body")
buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    bd.style.backgroundColor=e.target.id

    
  })

})

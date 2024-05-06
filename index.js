const label = document.getElementById("label-random")
const button =document.getElementById("btn-random")

let max = 20
let min = 10

button.onclick = () =>{
    label.textContent = Math.floor(Math.random() * (max - min)) + min
}
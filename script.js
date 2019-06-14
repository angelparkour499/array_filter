var array = [1, 2, 3];
function handleClick() {
    const bar = document.getElementById('number').value.split("")
    
    const myArray = document.getElementById("myArray")
       myArray.innerHTML = `[${bar}]`
console.log(myArray)}


 function even() {
    const bar = document.getElementById('number').value.split("")
if (document.getElementById('box').checked == true) {
    
var even = bar.filter((e) => e % 2 === 1)
const myArray = document.getElementById("myArray")
myArray.innerHTML = `[${even}]`

console.log(even)
}
else {
    myArray.innerHTML = `[${bar}]`
    console.log(myArray)} }


function odd() {
    const bar = document.getElementById('number').value.split("")
if (document.getElementById('box2').checked == true) {
var odd = bar.filter((e) => e % 2 === 0)
const myArray = document.getElementById("myArray")
myArray.innerHTML = `[${odd}]`
console.log(odd)
}
else {
    const myArray = document.getElementById("myArray")
myArray.innerHTML = `[${bar}]`
    console.log(myArray)} }




console.log("yes, i am working")
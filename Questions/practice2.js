var demo = document.getElementById('input');
var area = document.getElementById('board')
const root = document.getElementsByClassName('all')

demo.addEventListener('keyup', doSomething)
function doSomething(){
    area.textContent = demo.value;
}



var sum = 2+2



var heading = document.createElement('h1')
heading.textContent = sum;
area.appendChild(heading)
var heading2 = document.createElement('h1')
heading2.textContent = sum+2;

console.log(typeof(sum))
console.log(typeof(toString(sum)))

// heading.remove();

area.replaceChild(heading2, heading)



localStorage.




console.log(localStorage)


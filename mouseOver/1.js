const box = document.querySelector('#box');
const body = document.querySelector('body');
let hover = 0
function changeBackground(){
    hover = (hover+1)%2;
    if(hover){
        let x = getRandomColor()
        let y = getRandomColor();
        body.style.backgroundColor = x;
        box.style.backgroundColor = y;
        box.style.color = x;
        box.style.borderColor = 'white';   
    } else{
        let x = getRandomColor()
        let y = getRandomColor()
        body.style.backgroundColor = x;
        box.style.backgroundColor = y;
        box.style.color = x;
        box.style.borderColor = 'black';
    }
}
function getRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red},${green},${blue})`;
    return color;
}
box.addEventListener('mouseover', changeBackground)
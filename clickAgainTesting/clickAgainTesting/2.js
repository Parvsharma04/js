const btn = document.querySelector('#btn');
const body = document.querySelector('body');
let click = 0;
function changeBackground(){
    click = (click+1)%2;
    if(click){
        body.style.backgroundColor = 'red';
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
        btn.style.borderColor = 'white';   
    } else{
        body.style.backgroundColor = 'white';
        btn.style.backgroundColor = 'white';
        btn.style.color = 'black';
        btn.style.borderColor = 'black';
    }
}
btn.addEventListener('click', changeBackground);
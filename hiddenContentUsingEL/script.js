const btn = document.querySelector('.show')
const div = document.querySelector('.hiddenData')

function showData(){
    if(div.classList.contains('show')){
        div.classList.remove('show');
    } else{
        div.classList.add('show')
    }
}

btn.addEventListener('click', showData)
console.log(div.classList.contains('hiddenData'))
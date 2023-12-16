var obj = {};
var objArray = [];
const btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    obj.fname = document.getElementById('fname').value;
    obj.lname = document.getElementById('lname').value;

    if(localStorage.getItem('xyz')){
        objArray = JSON.parse(localStorage.getItem('xyz'));
    }
    objArray.push(obj);
    localStorage.setItem('xyz',JSON.stringify(objArray));
    createTable(obj);
});

function createTable(obj){
    const tr = document.createElement('tr');
    for(var key in obj){
        const td = document.createElement('td');
        td.innerText = obj[key];
        tr.append(td);
    }
    document.querySelector('table tbody').append(tr);
}
window.addEventListener('load', function(){
    if(localStorage.getItem('xyz')){
        objArray = JSON.parse(localStorage.getItem('xyz'));
        objArray.forEach(obj=>{
            createTable(obj);
        });
    }
});

const clr = document.getElementById('clrbtn');
clr.addEventListener('click', function(){localStorage.clear(); location.reload();})



console.log(localStorage)
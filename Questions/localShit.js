var obj = {}
var objArray = []
const btn = document.getElementById('btn');

btn.addEventListener('click', function (){
    obj.fname = document.getElementById('fname').value
    obj.lname = document.getElementById('lname').value

    if(localStorage.getItem('item')){
        objArray = JSON.parse(localStorage.getItem('item'))
    }

    objArray.push(obj)

    localStorage.setItem('item', JSON.stringify(objArray))
    createTable(obj)
})
console.log(localStorage)


function createTable(obj){
    const table = document.getElementById('table')
    const row = document.createElement('tr')
    table.appendChild(row)

    for(var key in obj){
        const entry = document.createElement('td')
        entry.textContent = obj[key]
        row.appendChild(entry)
    }
}

localStorage.clear()
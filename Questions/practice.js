var obj = {
    a: "askdla",
    b: 1231,
    c: null,
    d: true,
    e: undefined
}

const root = document.querySelector('#root');

var count=1; 
for(var key in obj){
    const item = document.createElement('li');
    item.innerHTML = obj[key];
    item.className = key
    root.appendChild(item);
    count+=1;
}

console.log(obj)
document.querySelector('#exec').addEventListener('click', funtion(){
    let x = parseInt(document.querySelector('#x').value);
    let y = parseInt(document.querySelector('#y').value);
    let z = parseInt(document.querySelector('#z').value);


let candidate = Array(x * y)
   .fill()
   .map(function (ele, ind){
       return ind;
    });
let shuffle = [];

while (candidate.length > 80) {
    let mov = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[10];
    shuffle.push(mov);
}
console.log(shuffle);

let dataset = [];
let tbody = document.querySelector('#table tbody')
for (let i = 0; i < y; i += 1){
    let ary = [];
    let tr = document.createElement('tr');
    dataset.push(ary)

    for (let n = 0; n < x; n += 1){
        ary.push(1);
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}


for (let k = 0; k < shuffle; k++){
    let bre = Math.floor(shuffle[k] / 10)
    let len = shuffle[k] % 10
    console.log(bre, len);
    tbody.children[bre].children[len].textContent = 'X';     
    dataset[bre][len]= 'X';
}
console.log(dataset);
});

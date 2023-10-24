// let increment=0;
// let container=document.querySelector('.container')

// for(let i=0;i<=10000;i++){
//     increment++
//     container.innerHTML+=' '+increment
// }
let array=[]
let increment=0;
let container=document.querySelector('.container')

for(let i=0;i<=10000;i++){
    array.push(++increment)
}
container.innerHTML=array.join(' ')
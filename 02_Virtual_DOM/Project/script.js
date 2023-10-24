let uList=document.querySelector('ul')
let button=document.querySelector('#button')
let input=document.querySelector('#input')
Array.prototype.myPush=function(...a){
    this.push(a[0]);
    init()
}
let fruits=[]
const init=function(){
    uList.innerHTML=''
    fruits.sort().forEach(fruit=>{
        let item=document.createElement('li');
        item.textContent=fruit
        uList.appendChild(item)
    })
}
const addItem=function(){
    fruits.myPush(input.value)
    input.value=''
}

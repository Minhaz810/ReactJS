let number=0;
let counter=document.querySelector('p')
let button=document.querySelector('button')

button.addEventListener('click',()=>{
    number+=1
    counter.innerText=number
})
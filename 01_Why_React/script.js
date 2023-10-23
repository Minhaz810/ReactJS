// const domContainer=document.querySelector('#root')

//  reactDOM.render(কি রেন্ডার করতে চাচ্ছি,কোথায় রেন্ডার করতে চাচ্ছি)
// ReactDOM.render('Hello World',domContainer)

// const myElement=React.createElement('div',null,'hello world')
// ReactDOM.render(myElement,domContainer)

// const myElement=(
//     <div class="container">
//         <p>0</p>
//         <button>Increament++</button>
//     </div>
// )

// ReactDOM.render(myElement,domContainer)



// const Increament=()=>{
//     return(
//     <div class="container">
//          <p>0</p>
//          <button>Increament++</button>
//      </div>
//     )
// }
// let number=0;
// let text=document.querySelector('p')
// let button=document.querySelector('button')

// button.addEventListener('click',()=>{
//     number+=1
//     text.innerText=number
// }) //কাজ করবে না,কারণ button render করার আগেই আমরা একে call করছি।
// ReactDOM.render(<Increament/>,domContainer)



// const Increament=()=>{
//     return(
//     <div class="container">
//          <p>0</p>
//          <button>Increament++</button>
//      </div>
//     )
// }
// ReactDOM.render(<Increament/>,domContainer)
// let number=0;
// let text=document.querySelector('p')
// let button=document.querySelector('button')

// button.addEventListener('click',()=>{
//     number+=1
//     text.innerText=number
// }) //still এটা একটা lengthy code,আগের মতোই কাজ করলাম।

// const Increament=()=>{
//     // const reactState=React.useState(0)
//     // console.log(reactState) //একটা array পাবো,যার ১ম element হবে একটা ভ্যালু অর্থ্যাৎ আমাদের number variable টার মতো। আর ২য় element হবে একটা function
//     const [counter,setCounter]=React.useState(0)

//     return(
//     <div className="container">
//          <p>{counter}</p>
//          <button onClick={()=>setCounter(counter+1)}>Increament++</button>
//      </div>
//     )
// }
// ReactDOM.render(<div><Increament/>,<Increament/>,<Increament/></div>,domContainer)


let count=0;
 let addOne = () =>{
     count++;
    reRenderApp();
 };
 let minusOne = ()=>{
     count-=1;
     reRenderApp();
 }
 let reset = () =>{
    count=0;
    reRenderApp();
 }

var appRoot = document.getElementById('app');

let reRenderApp = () =>{
    const tempalateTwo =(
        <div>
        <h1>Count:{count}</h1>
        <button onClick={addOne}>addOne</button>
        <button onClick={minusOne}>minusOne</button>
        <button onClick={reset}>reset</button>
        
        
        </div>
        )
        ;
        ReactDOM.render(tempalateTwo,appRoot);
}
reRenderApp();
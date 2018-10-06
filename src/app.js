console.log("hello");

const app ={
    title:'heading',
    subtitle:'subheading',
    option:[]
}
function getLength(){
    if(app.option.length > 0 )
 {   return <p> here are your opption</p>;}

else 
    {return 'no option';}

}
const tempalate = (
<div>
<h1>{app.title  }</h1>
{app.subtitle && <p>app.subtitle</p> }
{getLength()}
<ol>
<li>one</li>
<li>two</li>
</ol>
</div>

);
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
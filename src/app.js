console.log("hello");

const app ={
    title:'heading',
    subtitle:'subheading',
    options:[]
}
function getLength(){
    if(app.options.length > 0 )
 {   return <p> here are your opption</p>;}

else 
    {return 'no option';}

}
const onFormSubmit = (e) =>{
    e.preventDefault();         //this prevent page to refresh
    const option = e.target.elements.option.value; //target input feild

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        reRender();
    }
};
const removeAll =()=>{
    app.options=[];
    reRender();

}
var appRoot = document.getElementById('app');
let reRender =() =>{
    const tempalate = (
        <div>
            <h1>{app.title  }</h1>
            {app.subtitle && <p>{app.subtitle}</p> }
            {getLength()}
            <p>{app.options.length}</p>
            <button onClick={removeAll}> Remove All </button>
            <ol>
                <li>one</li>
                <li>two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>ADD option</button>
            </form>
        </div>
        
        
        );
        ReactDOM.render(tempalate,appRoot);
}
reRender();



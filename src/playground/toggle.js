console.log("this is toggle app");
let visibility = false;
let toggleSomething = ()=>{
    visibility = (!visibility)
    
reRender();
};
     let appRoot = document.getElementById('app');
 const reRender=()=>{
    const firstTempalate = (
        <div>
            <h1>Toggle App</h1>
            <button onClick={toggleSomething }>{visibility?'hide details':'show detils'}</button>
            {
               ( visibility && <p >hello</p>)
            }
        </div>
    );
    ReactDOM.render(firstTempalate,appRoot);
}

reRender();
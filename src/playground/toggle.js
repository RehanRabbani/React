class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.visibility = this.visibility.bind(this);
        this.state={
            
            btnText:false
        };
    }
    visibility(){
        console.log('hello');
        this.setState((preState)=>{
           return{
              btnText:!preState.btnText
           
           }
        });
    }
    render(){
        return(
            
                <div>
                    <h1>Toggle App</h1>
                    <button onClick={this.visibility}>{this.state.btnText?'hide details':'showdetails'}</button> 
                    {
                        this.state.btnText &&(
                            <div>
                            <p>these are some details</p>
                            </div>

                        )
                    }               
                </div>
            
        );
    }
}



ReactDOM.render(<Visibility/>,document.getElementById('app'));

//JSX FORM
// console.log("this is toggle app");
// let visibility = false;
// let toggleSomething = ()=>{
//     visibility = (!visibility)
    
// reRender();
// };
//      let appRoot = document.getElementById('app');
//  const reRender=()=>{
//     const firstTempalate = (
//         <div>
//             <h1>Toggle App</h1>
//             <button onClick={toggleSomething }>{visibility?'hide details':'show detils'}</button>
//             {
//                ( visibility && <p >hello</p>)
//             }
//         </div>
//     );
//     ReactDOM.render(firstTempalate,appRoot);
// }

// reRender();
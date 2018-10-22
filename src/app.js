class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
        this.getAction = this.getAction.bind(this);
        this.additem =this.additem.bind(this);
        this.removeItem=this.removeItem.bind(this);
        this.state={
            array:[]
        };
    }
   removeAll(){
    this.setState(()=>({ array:[]}));
   }
   removeItem(optionToRemove){
      this.setState((preState)=>({
        array:preState.array.filter((option)=>{
            return optionToRemove !== option;
        })
      }));
   }
  
   getAction(){
      const randomNum = Math.floor(Math.random() * this.state.array.length);
      const option = this.state.array[randomNum];
      alert(option);
    
   }
   additem(option){
       if(!option){
           return 'enter  items';
       }
       else if (this.state.array.indexOf(option) > -1) {
           return 'This item already exist';
       }
    //    this.setState((preState)=>{
    //        return{
               
    //            array:preState.array.concat([option])
    //        };
    //    })
       this.setState((preState)=>({array:preState.array.concat(option)}));
       
    
   }
    render(){
        let title = "Indecision App";
        let subtitle = "salam";
     
        
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                 hasOptions={this.state.array.length>0}
                 getAction={this.getAction}
                />
                <Options
                 options={this.state.array}
                 removeAll={this.removeAll}
                 removeItem={this.removeItem}
                  />
                <AddOption
                additem ={ this.additem}
                />
            </div>
        );
    }
}
const Header = (props) =>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle} </h2>
        </div>
        );
};

// class Header extends React.Component{
//     render(){
//         return (
//                 <div>
//                     <h1>{this.props.title}</h1>
//                     <h2>{this.props.subtitle} </h2>
//                 </div>
//                 );
//     }
// }
const Action = (props) =>{
    return(
        <div>
             <button
               onClick ={props.getAction} 
              disabled={!props.hasOptions}
              >
              What Should I Do</button>
        </div>
 );
};
// class Action extends React.Component{
    
//     render(){
//         return(
//                <div>
//                     <button
//                       onClick ={this.props.getAction} 
//                      disabled={!this.props.hasOptions}
//                      >
//                      What Should I Do</button>
//                </div>
//         );
//     }
// }
const Options = (props) =>{
    return(
               
        <div>
        <button onClick ={props.removeAll}>Remove All</button>
        {props.options.map((ar)=>(
            <Option
             key={ar} 
             arrayText={ar}
             removeItem={props.removeItem}
             />
        )
         

          )}
        </div>

    
);

};
// class Options extends React.Component{
   
//     render(){
//         return(
               
//                   <div>
//                   <button onClick ={this.props.removeAll}>Remove All</button>
//                   {this.props.options.map((ar)=><Option key={ar} arrayText={ar}/>
                   

//                     )}
//                   </div>

              
//         );

//     }
// }
const Option = (props) =>{
    return(
        <div>
        
        {props.arrayText}
        <button 
        onClick ={(e)=>{
            props.removeItem(props.arrayText);
        }}
        >
        Remove
        </button>
       
        </div>
        
    );
};
// class Option extends React.Component{
//     render(){
//         return(
//             <ul>
//             <li>{this.props.arrayText}</li>
//             </ul>
            
//         );
//     }
// }
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.additem =this.additem.bind(this);
        this.state = {
            error:undefined
        }
    }
    additem (e){
        e.preventDefault();
        const option = e.target.elements.hamza.value.trim();
        const error = this.props.additem(option);
    //    this.setState(()=>{
    //        return{
    //            error
    //        };
    //    });
      this.setState(()=>({error}));

    }
    

    render(){
        return(
            <div>
            {this.state.error && (<p>{this.state.error}</p>)}
            <form onSubmit={this.additem}>
                <input type="text" name="hamza"  />
                <button  >AddOption</button>
            </form>
            </div>
            
        );

    }
}

ReactDOM.render(<IndecisionApp/>,document.querySelector('#app'));

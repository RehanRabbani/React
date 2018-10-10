class IndecisionApp extends React.Component{
    render(){
        let title = "Indecision App";
        let subtitle = "salam";
        const array =['item one','item two','item three'];
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={array} />
                <AddOption/>
            </div>
        );
    }
}
class Header extends React.Component{
    render(){
        return (
                <div>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle} </h2>
                </div>
                );
    }
}
class Action extends React.Component{
    getAction(){
            alert('action');
        }
    render(){
        return(
               <div>
                    <button onClick ={this.getAction} >What Should I Do</button>
               </div>
        );
    }
}
class Options extends React.Component{
    removeAll(){
        alert('remove');
    }
    render(){
        return(
               
                  <div>
                  <button onClick ={this.removeAll}>Remove All</button>
                  {this.props.options.map((ar)=><Option key={ar} arrayText={ar}/>
                   

                    )}
                  </div>

              
        );

    }
}
class Option extends React.Component{
    render(){
        return(
            <div>
            {this.props.arrayText}
            </div>
            
        );
    }
}
class AddOption extends React.Component{
    additem (e){
        e.preventDefault();
        const op = e.target.elements.hamza.value.trim();
        if(op)
        {
            alert(op);
            
        }
      

    }

    render(){
        return(

            <form onSubmit={this.additem}>
                <input type="text" name="hamza" />
                <button>AddOption</button>
            </form>
        );

    }
}

ReactDOM.render(<IndecisionApp/>,document.querySelector('#app'));

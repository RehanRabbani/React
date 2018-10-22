class Counter extends React.Component{
    constructor(props)
    {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state ={
            count:0
        };
    }
    addOne(){
       this.setState((preState)=>{
           return{
            count:preState.count +1
           };
       });
    }
    minusOne(){
        this.setState((preState)=>{
            return{
                count:preState.count-1
            };
        })
    }
    reset(){
        this.setState(()=>{
            return{
                count:0
            }
        });
    }

    render(){
        return(
            <div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}
ReactDOM.render(<Counter/>,document.getElementById('app'));



// let count=0;
//  let addOne = () =>{
//      count++;
//     reRenderApp();
//  };
//  let minusOne = ()=>{
//      count-=1;
//      reRenderApp();
//  }
//  let reset = () =>{
//     count=0;
//     reRenderApp();
//  }

// var appRoot = document.getElementById('app');

// let reRenderApp = () =>{
//     const tempalateTwo =(
//         <div>
//         <h1>Count:{count}</h1>
//         <button onClick={addOne}>addOne</button>
//         <button onClick={minusOne}>minusOne</button>
//         <button onClick={reset}>reset</button>
        
        
//         </div>
//         )
//         ;
//         ReactDOM.render(tempalateTwo,appRoot);
// }
// reRenderApp();
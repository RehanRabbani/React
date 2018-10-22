
console.log('practise.js');
let contacts = [
	{	
		imgURL: "ali.jpg",
		name: "Ali",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "0300-1234567",
		envelop: "<i class='far fa-envelope'></i>",
		email: "ALi123@example.com",
		detail:'seen',			
		status: "Hey there! I am using WhatsApp. "
	},

	{	
		imgURL: "ahmed.jpg",
		name: "ahmed",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "0313-2239567",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Ahmed234@example.com",
		detail:"seen",	
		status: "Stay there to prove everyone wrong. "
	},

	{	
		imgURL: "zeeshan.jpg",
		name: "Zeeshan",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "0321-5236561",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Zeeshan345@example.com",
		detail:"sent",
		status: "urgent calls only. "
	},

	{	
		imgURL: "ahsan.jpg",
		name: "Ahsan",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "0345-2224569",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Ahsan456@example.com",
		detail:"seen",
		status: "busy "
	},

	{	
		imgURL: "irfan.jpg",
		name: "Irfan",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "0321-2951489",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Irfan567@example.com",
		detail:"seen",
		status: "sleeping. "
	},

	{	
		imgURL: "arman.jpg",
		name: "Arman",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "033-6534564",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Arman678@example.com",
		detail:"not sent",
		status: "new number. "
	},

	{	
		imgURL: "hassan.jpg",
		name: "Hassan",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "034-39814563",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Hassan789@example.com",
		detail:"seen",
		status: "watching movie. "
	},
	{	
		imgURL: "hassan.jpg",
		name: "Hassan",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "034-39814563",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Hassan789@example.com",
		detail:"seen",
		status: "watching movie. "
	},
	{	
		imgURL: "hassan.jpg",
		name: "Hassan",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "034-39814563",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Hassan789@example.com",
		detail:"seen",
		status: "watching movie. "
	},
	{	
		imgURL: "hassan.jpg",
		name: "Hassan",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "034-39814563",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Hassan789@example.com",
		detail:"seen",
		status: "watching movie. "
	},
	{	
		imgURL: "hassan.jpg",
		name: "Hassan",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "034-39814563",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Hassan789@example.com",
		detail:"seen",
		status: "watching movie. "
	},
	{	
		imgURL: "hassan.jpg",
		name: "Hassan",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "034-39814563",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Hassan789@example.com",
		detail:"seen",
		status: "watching movie. "
	},
	{	
		imgURL: "hassan.jpg",
		name: "Hassan",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "034-39814563",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Hassan789@example.com",
		detail:"seen",
		status: "watching movie. "
	},

	{	
		imgURL: "ghani.jpg",
		name: "Ghani",
		phoneIcon: "<i class='fas fa-phone'></i>",
		number: "0315-2444560",
		envelop: "<i class='far fa-envelope'></i>",
		email: "Ghani987@example.com",
		detail:"seen",		
		status: "battery about to die. "
	}

];
class Parent extends React.Component{
    constructor(props)
    {
        super(props);
        this.additem = this.additem.bind(this);
        this.state={
            array:[],
            number:0,
            guessNumber:10
        }
    }
    additem(value){
       
        if(value>this.state.guessNumber)
        return ' number is Too BIG '

       else if(value<this.state.guessNumber)
       return ' Number Is TOo small'
       this.setState (()=>{
           return{
               
            guessNumber:Math.floor(Math.random()*10)
        

            
           }
           return 'Success'
        
        }
    )    }
    
render(){
    return(

       <div>
       <AddOption className="StyleOption"
       additem={this.additem}
       guessValue={this.state.guessNumber}
       />

     
       </div>
    );
    
}
}
class AddOption extends React.Component{
    constructor(props)
    {
        super(props);
        this.additem =this.additem.bind(this);
        this.state={
            error:undefined
        }
    }
    additem(e){
        e.preventDefault();
        const value = e.target.elements.hafeez.value;
         const error=   this.props.additem(value); 
       this.setState(()=>{
           return{
               error
           }
       })
    }
    render(){
      return(
       <div>
    {this.state.error && (<p id="one" >{this.state.error}</p>)}
       <form onSubmit={this.additem}>
       <input type="number"  name="hafeez"/>
       <button >submit </button>
       
     {console.log(this.props.guessValue)}  
       </form>
       </div>
      );
    }
}



ReactDOM.render(<Parent/>,document.getElementById('app'));
console.log('class');
class Person {
    constructor(name ='Anonymous',age=0 ){
        this.name=name;
        this.age=age;
    }
    getDescription(){
        return  ` hi my name is ${this.name} and I am ${this.age} year old`;
    }
}
class Visitor extends Person{
    constructor(name,age,visiting){
        super(name,age);//sipuer keyword call the parent constructor
        this.visiting=visiting
       
    }
    hasVisit(){
        return !!this.visiting;
    }
    getDescription(){
    let description = super.getDescription();// here super is using to call parent function
    if(this.hasVisit()){
        description += ` visits ${this.visiting}.`;
    }
    return description;

}}

const me = new Visitor('Rehan',23,'lahore');
console.log(me.getDescription());
const other = new Visitor();
console.log(other.getDescription());


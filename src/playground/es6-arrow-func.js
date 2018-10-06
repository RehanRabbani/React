 // es5 arrow function
 let sqaure = function(x){
     return x*x;
 }
 console.log(sqaure(8));
 // es6 
 let sqArrow = (x) => x*x;
 console.log(sqArrow(2));
 let getFirstName = ( x) => x.split(' ')[0];
 console.log(getFirstName('rehan ta'));
 //challenge
 const multiplier = {
     numbers:[1,2,3],
     multiplyBy:2,
     multiply (){
         return this.numbers.map((number) => number * this.multiplyBy);
     }
 };
 console.log(multiplier.multiply());
 
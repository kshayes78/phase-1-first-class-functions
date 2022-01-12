const sum = (num1, num2) => num1 + num2; 
function receivesAFunction(sum) {
    return sum(1,2)
 }
 function returnsANamedFunction(){
  return function newFunction(){

  }
 }

const returnsAnAnonymousFunction = function() {
     return function(){
         
     }
};
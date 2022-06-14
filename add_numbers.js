/* 
add() gets anywhere between 0 and 100 arguments (Integers) and returns their sum.
Examples

add() == 0
add(2) == 2
add(1, 1) == 2
add(1, 2, 3) == 6
add(-3, -2, -1, 1, 2, 3, 4) == 4

*/
//with Classic Function

function add (...args) {
    const myTotal = args.reduce((total,num)=>total + num,0)
    return myTotal;
  }
  

//with Arrow Function
const add = (...args)=>{
  
    const myTotal =  args.reduce((total,num) => total + num,0) 
    return myTotal
  
   }




// Function Declaration
function add(n1, n2){
   return n1 +n2;
}

// Function Expression
const sub = function(n1,n2){
  return n1 - n2
} 

//Callback example
const cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

console.log( add(1,2) )       // viser 3
console.log( add )            // funktionen bliver vist
console.log( add(1,2,3) ) ;   // viser 3
console.log( add(1) );	      // viser NaN
console.log( cb(3,3,add) );   // viser 3+3=6
console.log( cb(4,3,sub) );   // viser 4+3=1
console.log(cb(3,"hh",add));  // viser 3+hh=3hh
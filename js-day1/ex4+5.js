function mul(n1, n2) {
    return n1 * n2;
}

const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};

console.log(cb(5, 3, mul)); // "Result from the two numbers: 5+3=15"

console.log(cb(10, 2, function(n1, n2){
    return n1 / n2
;})); // "Result from the two numbers: 10+2=5"
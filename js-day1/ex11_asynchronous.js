//Asynchronous Callbacks
const msgPrinter = function(msg,delay){
    setTimeout(() => console.log(msg),delay); //Observe an arrow-function
};
console.log("aaaaaaaaaa");      // intant-ish
msgPrinter ("bbbbbbbbbb",2000); // efter 2 sekunder
console.log("dddddddddd");      // instant-ish + meget lidt
msgPrinter ("eeeeeeeeee",1000); // efter 1 sekund
console.log("ffffffffff");      // instant-ish + meget lidt men efter d

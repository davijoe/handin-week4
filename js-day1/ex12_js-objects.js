const JavaScriptDay1Opgaver = {
    antal: "for mange",
    sværhedsgrad: "for let",
    tid: "for lidt"
}

for(let prop in JavaScriptDay1Opgaver) {
    console.log(prop, JavaScriptDay1Opgaver[prop]);
}

delete JavaScriptDay1Opgaver.tid;

for(let prop in JavaScriptDay1Opgaver) {
    console.log(prop, JavaScriptDay1Opgaver[prop]);
}

JavaScriptDay1Opgaver.antal = "lidt for mange i hvert fald";
JavaScriptDay1Opgaver.sværhedsgrad = "lidt for let i hvert fald";

for(let prop in JavaScriptDay1Opgaver) {
    console.log(prop, JavaScriptDay1Opgaver[prop]);
}
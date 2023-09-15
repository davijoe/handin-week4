var makeCounter = function() {
    var privateCounter = 0;

    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function() {changeBy(1);},
        decrement: function() {changeBy(-1);},
        value: function() { return privateCounter;}
    }
};

var counter1 = makeCounter();
var counter2 = makeCounter();
counter1.increment();
counter1.increment();
//alert(counter1.value()); /* Alerts 2 */

function createPerson(name, age) {
    let _name = name;
    let _age = age;

    return {
        setName: function(newName) {
            _name = newName;
        },
        setAge: function(newAge) {
            _age = newAge;
        },
        getInfo: function() {
            return `${_name}, ${_age}`;
        }
    };
}

const person = createPerson("Peter", 40);
//person.setName("John");
person.setAge(45);
console.log(person.getInfo());
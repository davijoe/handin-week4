//Implement YOUR OWN functions that takes callbacks as arguments
const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

function myFilter(array, callback){
    const result = [];
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

const carsBelow5000 = myFilter(cars, car => car.price < 5000);
console.log(carsBelow5000);

function myMap(array, callback) {
    const result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

const carMakes = myMap(cars, car => car.make);
console.log(carMakes);
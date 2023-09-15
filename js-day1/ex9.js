//Given this JavaScript array - Use the filter filter function to get arrays with only
const cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

const carsNewerThan1999 = cars.filter(car => car.year > 1999);
const allVolvos = cars.filter(car => car.make === 'Volvo');
const carsBelow5000 = cars.filter(car => car.price < 5000);

console.log(carsNewerThan1999);
console.log(allVolvos);
console.log(carsBelow5000);
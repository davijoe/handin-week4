const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 },
    { id: 6, year: 2010, make: 'Toyota', model: 'Camry', price: 21000 },
    { id: 7, year: 2012, make: 'Honda', model: 'Accord', price: 22000 },
    { id: 8, year: 2015, make: 'Ford', model: 'Focus', price: 18000 },
    { id: 9, year: 2016, make: 'Subaru', model: 'Outback', price: 25000 },
    { id: 10, year: 2018, make: 'Nissan', model: 'Rogue', price: 28000 },
    { id: 11, year: 2017, make: 'Mazda', model: '3', price: 19000 },
    { id: 12, year: 2013, make: 'Kia', model: 'Optima', price: 16500 },
    { id: 13, year: 2011, make: 'Hyundai', model: 'Elantra', price: 14000 },
    { id: 14, year: 2019, make: 'Ford', model: 'Escape', price: 29000 },
    { id: 15, year: 2020, make: 'Chevy', model: 'Equinox', price: 27500 },
    { id: 16, year: 2009, make: 'Toyota', model: 'Rav4', price: 16000 },
    { id: 17, year: 2014, make: 'Honda', model: 'Civic', price: 20000 },
    { id: 18, year: 2008, make: 'BMW', model: '3 Series', price: 23000 },
    { id: 19, year: 2012, make: 'Audi', model: 'A4', price: 24000 },
    { id: 20, year: 2014, make: 'Mercedes', model: 'C-Class', price: 32000 }
];

function populateTable(cars) {  
    const table = document.getElementById('car-table');
    const rows = cars.map(car => `
        <tr>
            <td>${car.make}</td>
            <td>${car.model}</td>
            <td>${car.year}</td>
            <td>${car.price}</td>
        </tr>
    `);

    // Note: This leaves the headers and replaces only the car rows.
    table.innerHTML = `
        <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
        </tr>
    ` + rows.join('');
}

document.getElementById('sort-btn').addEventListener('click', () => {
    const sortedCars = [...cars].sort((a, b) => a.year - b.year);
    populateTable(sortedCars);
});

document.getElementById('filter-btn').addEventListener('click', () => {
    const brand = document.getElementById('filter-input').value.toLowerCase();
    const filteredCars = cars.filter(car => car.make.toLowerCase().includes(brand));
    populateTable(filteredCars);
    document.getElementById('filter-result').textContent = filteredCars.length ? '' : 'No cars match the given brand.';
});

document.getElementById('reset-btn').addEventListener('click', () => {
    populateTable(cars);
    document.getElementById('filter-result').textContent = '';
    document.getElementById('filter-input').value = '';
});

// Initially populate the table
populateTable(cars);


let expanded = false; // To track the current state
const carsPerPage = 10;

function displayCars() {
    if (expanded) {
        populateTable(cars);
    } else {
        populateTable(cars.slice(0, carsPerPage));
    }
}

function toggleCars() {
    expanded = !expanded;
    displayCars();
    document.getElementById('toggle-btn').textContent = expanded ? 'Show Less' : 'Show More';
}

// Attach the toggleCars function to the button:
document.getElementById('toggle-btn').addEventListener('click', toggleCars);

// Initially display the first page of cars:
displayCars();

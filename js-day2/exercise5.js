const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
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

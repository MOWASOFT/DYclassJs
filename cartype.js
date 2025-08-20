let carTypes = {
    toyota: {
        model: 'Corolla',
        year: 2022,
        fuel: 'Petrol',
        color: 'Red',
    },

    honda: {
        model: 'Civic',
        year: 2021,
        fuel: 'Diesel',
        color: 'Blue',
    },

       tesla: {
        model: 'Model 3',
        year: 2023,
        fuel: 'Electric',
        color: 'Black',
    },
};

function showCarDetails(brand){
    let car = carTypes[brand];
    if (car) {
        console.log( `${brand.toUpperCase()} Details:`);
        console.log (`Model: ${car.model}`);
        console.log (`Year: ${car.year}`);
        console.log (`Fuel: ${car.fuel}`);
        console.log (`Color: ${car.color}`);
    }
    else {
        console.log('Car brand not Available');
    }
}

//showCarDetails('toyota')
//showCarDetails('tesla')
//showCarDetails('benz')


carTypes.benz = {
        model: 'GLK',
        year: 2022,
        fuel: 'Petrol',
        color: 'Yellow',
    }

    //console.log(carTypes)
showCarDetails('benz')
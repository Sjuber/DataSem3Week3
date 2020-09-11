var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799},
    {id: 6, year: 1996, make: 'Volvo', model: 'V68', price: 4900}
];
var cors = cars.filter(bil => bil.year > 1999);

var curs = cars.filter(bil => bil.make === 'Volvo');

var cirs = cars.filter(bil => bil.price < 5000);

function Squeeler(ray) {
   var roy = ray.map(function (curr) {return "INSERT INTO cars (id,year,make,model,price) VALUES ( " + curr.id + ", " + curr.year + ", " + curr.make + ", " + curr.model + ", " + curr.price + " );"})
   return roy;
};

console.log(cars);
console.log("ALL FROM BEYOND 1999");
console.log(cors);
console.log("ALL VOLVOES");
console.log(curs);
console.log("ALL WITH PRICE BELOW 5000");
console.log(cirs);
console.log("SQL STATEMENTS");
console.log(Squeeler(cars));
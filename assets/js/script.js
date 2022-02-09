
//øvelse 1
function fiveAndGreaterOnly(arr) {
 let newArray = arr.filter(val => val > 5) 
        return newArray
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

//øvelse 2 

function evensOnly(arr) {
    let newArray = arr.filter(val => val % 2 === 0)
    return newArray             
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]


//øvelse 3
function fiveCharactersOrFewerOnly(arr) {
    let newArray = arr.filter(name => name.length <= 5)
    return newArray      
}
// test
console.log(fiveCharactersOrFewerOnly(["hund", "ulv", "kanin", "marsvin", "hamster", "kat"])); // ["hund", "kat", "kanin", "ulv"] 

//øvelse 4 
function royalNames(arr){
    let newArray = arr.filter(name => name.royal == true)
    return newArray  
}

// test
console.log(royalNames([
            { name: "Mette", royal: false },
            { name: "Magrethe", royal: true },
            { name: "Jakob", royal: false },
            { name: "Mary", royal: true },
            { name: "Frederik", royal: true }
]));
// =>
//[ { name: 'Magrethe', royal: true },
//  { name: 'Mary', royal: true },
//  { name: 'Frederik', roayl: true } ]


// Øvelse 5: Er du over 18?
function ofAge(arr) {
    let newArray = arr.filter(name => name.age >= 18)
    return newArray  
}
// test
console.log(ofAge([
    { name: "Mette Frederiksen", age: 80 },
    { name: "Jakob Elleman", age: 2 },
    { name: "Søren Pape", age: 5 },
    { name: "Pia Olsen Dyhr", age: 16 },
    { name: "Pernille Skipper", age: 100 },
    { name: "Kristian Thulesen Dahl", age: 54 }
])); 
// => 
//[ { name: 'Mette Frederiksen', age: 80 },
//  { name: 'Pernille Skipper', age: 100 }, 
//  { name: 'Kristian Thulesen Dahl', age: 54 } ]

//øvelse 6
const cars = [
    {name: 'Mercedes', model: 'E220', kml: 23.3, km: 138000, year: 2018, price: 439000},
    {name: 'Honda', model: 'Accord', kml: 11.6, km: 96000, year: 2012, price: 199600},
    {name: 'Seat', model: 'Tarraco', kml: 18.1, km: 15000, year: 2020, price: 424500},
    {name: 'VW', model: 'Fox', kml: 14.8, km: 167000, year: 2005, price: 19990},
    {name: 'Skoda', model: 'Scala', kml: 27.5, km: 8500, year: 2020, price: 244900},
    {name: 'Jaguar', model: 'F-Type', kml: 11.9, km: 33000, year: 2017, price: 899900},
    {name: 'Toyota', model: 'Avensis', kml: 16.7, km: 356000, year: 2005, price: 19900},
    {name: 'VW', model: 'Golf', kml: 19.6, km: 35000, year: 2018, price: 209800},
    {name: 'Mercedes', model: 'AMG', kml: 12.9, km: 21000, year: 2019, price: 679900}
]

//øvelse 6a

function filterByName(arr) {
    let newArray = arr.filter(car => car.name == "Mercedes")
    return newArray  
}
console.log(filterByName(cars))
// Result => 
// 0: {name: "Mercedes", model: "E220", kml: 23.3, km: 138000, year: 2018, …}
//1: {name: "Mercedes", model: "AMG", kml: 12.9, km: 21000, year: 2019, …}

//øvelse 6b

function filterByMinPrice(arr) {
    let newArray = arr.filter(car => car.price >= 200000)
    return newArray 
}
console.log(filterByMinPrice(cars))
// Result => 
//0: {name: "Mercedes", model: "E220", kml: 23.3, km: 138000, year: 2018, …}
//1: {name: "Seat", model: "Tarraco", kml: 18.1, km: 15000, year: 2020, …}
//2: {name: "Skoda", model: "Scala", kml: 27.5, km: 8500, year: 2020, …}
//3: {name: "Jaguar", model: "F-Type", kml: 11.9, km: 33000, year: 2017, …}
//4: {name: "VW", model: "Golf", kml: 19.6, km: 35000, year: 2018, …}
//5: {name: "Mercedes", model: "AMG", kml: 12.9, km: 21000, year: 2019, …}



//øvelse 6c
function filterByMinpriceMaxKml(arr) {
    let newArray = arr.filter(car => car.price >= 200000 && car.kml >= 15)
    return newArray 
}
console.log(filterByMinpriceMaxKml(cars));
// Result => 
//0: {name: "Mercedes", model: "E220", kml: 23.3, km: 138000, year: 2018, …}
//1: {name: "Seat", model: "Tarraco", kml: 18.1, km: 15000, year: 2020, …}
//2: {name: "Skoda", model: "Scala", kml: 27.5, km: 8500, year: 2020, …}
//3: {name: "VW", model: "Golf", kml: 19.6, km: 35000, year: 2018, …}
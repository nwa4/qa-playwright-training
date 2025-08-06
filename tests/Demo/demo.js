let name = "John Doe";
var location = "New York City";
let age = 30;

let person = {
    name: name,
    location: location,
    age: age
};

let array = [1, 2, 3, 4, 5];

console.log(age);

// age = age * 2; // Doubling the age

function doubleTheAge(personAge) {
    return personAge * 2;
}

let age1 = doubleTheAge(20);
let age2 = doubleTheAge(40);
let age3 = doubleTheAge(50);

console.log(age1, age2, age3); // Outputs the doubled ages

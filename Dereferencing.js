// Q1 Make a dereferenced copy of the array below. (Hint: You will need to dereference each object in the array, not just the 
    // array itself)


let myPeople = [
    {
        firstName: "Luke",
        lastName: "Parker",
        age: 23
    }, {
        firstName: "Rachel",
        lastName: "Nox",
        age: 28
    }, {
        firstName: "Douglas",
        lastName: "Adams",
        age: 42
    }
];
let myLukeArray = myPeople.find(p => p.firstName == "Luke");
console.log(myLukeArray);

let myRachelArray = myPeople.find(r => r.firstName == "Rachel");
console.log(myRachelArray);

let myDouglasArray = myPeople.find(r => r.firstName == "Douglas");
console.log(myDouglasArray);

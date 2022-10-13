// Exercise 1

const ironhacker = {
  firstName: "Anthony",
  secretPower: "Gay",
  favoriteColors: ["blue", "orange", "pink", "black", "red"],
};

console.log(ironhacker);

// Exercise 2
const cat = {};

cat.name = "Néandre";
cat["age"] = 5;
cat["is this cat cute?"] = true;
let location = {
  street: "12 rue de Rambouillet",
  city: "Paris",
  phone: "999",
};

cat.adress = location;

cat.name = "Neandre";

console.log(cat);

// Exercise 3
const anotherCat = {
  name: "Zouzou",
  age: 7,
  isCute: true,
  details: {
    superPowers: ["Sleeping", "Eating", "Maw"],
    hobbies: ["Sleeping on a keyboard", "Pretending to be scary"],
    "weekday whereabout": [
      { day: "Monday", location: "Garage", activity: "Making a mess" },
      { day: "Tuesday", location: "Living-room", activity: "Sleeping" },
      { day: "Wednesday", location: "Bedroom", activity: "Warming the bed" },
    ],
  },
};

// console.log() one of the hobbies

console.log(anotherCat.details.hobbies[1]);

// console.log() the length of the superPowers
// Array

console.log(anotherCat.details.superPowers.length);

// do a loop on the cat weekday whereabout and
// log On <DAY>, my cat is in the <LOCATION>
// and he is <ACTIVITY>

for (wkObj of anotherCat.details["weekday whereabout"]) {
  console.log(
    `On ${wkObj.day}, my cat is in the ${wkObj.location} and he is ${wkObj.activity}`
  );
}

// delete the age of the cat !
delete cat.age;

// Done ? Now do a loop again on the weekday
// whereabout and log On <DAY>, my cat is in
// the <LOCATION> and he is <ACTIVITY>, only
// when the cat is not sleeping !
for (wkObj of anotherCat.details["weekday whereabout"]) {
  if (wkObj.activity !== "Sleeping") {
    console.log(
      `On ${wkObj.day}, my cat is in the ${wkObj.location} and he is ${wkObj.activity}`
    );
  }
}

// Last activity : create a function that
// take an Array as argument and make it return
// a random element from the Array ! Use this
// function on any Array of the cat Object and log the result.

function randElement(inArr) {
  randIndex = Math.floor(Math.random() * inArr.length);
  console.log(`element ${randIndex} is : ${inArr[randIndex]}`);
}

randElement(anotherCat.details["weekday whereabout"]);

const students = [
  {
    name: "Bob",
    age: 23,
  },
  {
    name: "John",
    age: 32,
  },
  {
    name: "Alice",
    age: 41,
  },
];

console.log([students[(1, 2)].age]); // doesn't work

function add(a, b) {
    return a + b;
}

let globalVar = 'a global variable';

function myFunction() {
  let localVar = 'a local variable';
  
  if (localVar) {
    let blockVar = 'a block-scoped variable';
  } else {
    let otherBlockVar = 'a different block-scoped variable';
  }
}


// Define the variables below:
// Uncomment, I commented them out so as not to show errors on vscode while I was working
let stringWithQuotes = 'Confucius once said, "It does not matter how slowly you go, as long as you do not stop."';
let stringWithApostrophe = "Everything you've ever wanted is on the other side of fear.";

// These lines will log your quotes to the console:
console.log(stringWithQuotes);
console.log(stringWithApostrophe);



//TEMPLATE Literal
let firstName = "Mike";
let email = "mike@email.com";

// Write your code here
let message = `Dear ${firstName},
Thank you for subscribing!
Your email: ${email}`;

console.log(message);


//STRING interpolation = Concatenation using Template Literals
let fruits = ['apple', 'orange', 'banana'];
let myHtml = '<ol>';

for (let i = 0; i < fruits.length; i++) {
    myHtml += `<li>${fruits[i]}</li>`;
}
myHtml += '</ol>';


//PARSE String To Number    https://stackabuse.com/javascript-convert-string-to-number/
let myStringInt = '10';
let myStringFloat = '1.275';

// Fix this code so that it adds correctly
let result = parseInt(myStringInt) + parseFloat(myStringFloat);

// This will print your results to the console
console.log(result);

//rounding floats
console.log(0.1 + 0.2);  // 0.30000000000000004
console.log((0.1 * 10 + 0.2 * 10) / 10);  // 0.3

console.log(1.03 + 1.04);  // 2.0700000000000003
console.log((1.03 * 100 + 1.04 * 100) / 100);  // 2.07



//isNAN
//isFinite
// javascript code

let notANumber = isNaN("w");
console.log(notANumber);

let isANumber = isNaN(1);
console.log(isANumber);

let finiteNumber = isFinite(1);
console.log(finiteNumber);

let notAFiniteNumber = isFinite(Infinity);
console.log(notAFiniteNumber);


// coercion
// javascript code
let num100 = 100;
let str100 = "100";
console.log(num100 == str100); //true
console.log(num100 === str100); //false
console.log(num100 + str100);
console.log(num100 + Number(str100));


// incremnent and decrement
let num = 10;
console.log(num);
num++;
console.log(num);
num--;
console.log(num);

//Ternerary Operators

let memberType = 'basic';
let price = memberType === 'basic' ? 5 : 10;

let memberType = 'basic';
let price;

if (memberType === 'basic') {
    price = 5;
} else {
    price = 10;
}



let memberType = 'elite';
let price = memberType === 'basic' ? 5
    : memberType === 'pro' ? 10
        : membertype === 'elite' ? 20
            : 0;                


// javascript code
let age = 15;
let result;

if (age > 21) {
    result = "drink whiskey";
}
else if (age >= 18) {
    result = "drink beer";
}
else if (age >= 12) {
    result = "drink cola";
}
else {
    result = "drink cola";
}
console.log(result);


//FOR Loop
let numbers = [42, 65, 0, 9, 73, 10, 11, 44];

// Write your code here


for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] + 10);
}


//WHILE LOOP
let i = 0;
while (i < 11) {
    console.log(i);
    i++;
}

//DO WHILE LOOP
let i = 10;
do {
    console.log('checking i...');
    console.log('i is', i);
} while (i < 10);
console.log('Loop complete');


let attemptedUploads = 0;
do {
    console.log("Attempting upload...");
    attemptedUploads++;
} while (attemptedUploads < 5);

console.log("Upload attempts exceeded maximum");



// break and continue
for (let i = 0; i < 21; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    if (i === 10) {
        break;
    }
    console.log(i);
}


//Array Example
let crew = ["Jean-Luc", "Wesley", "Warf", "William", "Data", "Tasha"];
console.log(crew);

// Write your code here
let lastCrewMember = crew.pop();
console.log(lastCrewMember);
console.log(crew);
crew.sort();
console.log(crew);
let newCrew = crew.slice(1, 4);
console.log(newCrew);
newCrew.push("Guinan");
console.log(newCrew);



//Object Example

let spaceship = {
    name: "Red Dwarf",
    type: "Mining vessel",
    owner: "Jupiter Mining Corporation",
    captain: "Frank Hollister"
}
console.log(spaceship);


let data = {
    firstName: "Arthur",
    lastName: "Dent",
    species: "Human"
};

// add your code here
let firstName = data["firstName"];
console.log(firstName);
let species = data.species;
console.log(species);
data.age = 42;




// this will log the data to the console
console.log(data);


//this keyword challenge
let classroom = {
    numOfStudents: 0,
    schoolHours: false,
    playtime: false,
    openSchool: function () {
        this.schoolHours = true;
        this.numOfStudents = 20;
    },
    breakTime: function () {
        if (this.schoolHours) {
            this.playtime = true;
        }
        this.numOfStudents = 20;
    },
};

classroom.openSchool();
console.log(classroom.numOfStudents);
classroom.breakTime();
console.log(classroom.playtime);



// for in loop challenge
let gamerScores = {
    john: 89,
    paul: 725,
    george: 553,
    robert: 9302,
    steve: 733,
};
// write your code here

for (let gamer in gamerScores) {
    console.log(gamer + ' scored ' + gamerScores[gamer]);
}





// nested data structure challenge
// javascript code


let studentData = [
    {
        name: "John Smith",
        email: "john@gmail.com",
        subjects: ["Math", "Psychology", "Physics", "Chemistry", "Biology"]
    },
    {
        name: "Mary Jones",
        email: "mary@gmail.com",
        subjects: ["Fine Art", "Music", "Biology", "Geography", "Politics"]
    }
];

console.log(studentData);
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


//Get ElementsBy
let parentElement = document.getElementsByClassName("section-content")[0].parentNode;
console.log(parentElement);

let children = document.getElementById("main").children;
console.log(children);

let sibling = document.getElementsByTagName("h1")[0].nextElementSibling;
console.log(sibling);


//Get Elements Properties
let usernameInput = document.getElementById("username-input");
let inputHtml = usernameInput.outerHTML;
console.log(inputHtml);
let inputPadding = window.getComputedStyle(usernameInput).padding;
console.log(window.getComputedStyle(usernameInput).paddingLeft);
console.log(window.getComputedStyle(usernameInput).paddingTop);
console.log(window.getComputedStyle(usernameInput).paddingRight);
console.log(window.getComputedStyle(usernameInput).paddingBottom);






function turnOff() {
    let stat = document.getElementById("switch").innerHTML;
    console.log(stat);

    if (stat === "ON") {
        document.getElementById("switch").innerHTML = "OFF";
        document.getElementById("switch").style.backgroundColor = "red";
        console.log("OFF");
    }
    else {
        document.getElementById("switch").innerHTML = "ON";
        document.getElementById("switch").style.backgroundColor = "GREEN";
        console.log("ON");
    }
}

<button id="switch" onclick="turnOff();">ON</button>



let body = documnet.body;
let newheading = document.createElement("h3");
newheading.innerHTML = "Shopping List";
body.appendChild(newheading);
let button = document.getElementsByName("button")[0]
button.remove;

document.createElement(): Create a new element
element.appendChild(): Append an element as the child of another element
element.cloneNode(): Clone an entire element.Pass true to "deep clone" which clones its children also
element.remove(): Remove an element from the DOM




function addSquare() {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "square");
    document.getElementById("squares-wrapper").appendChild(newDiv);
}

function removeSquare() {
    let divToRemove = null;
    let squareClass = document.getElementsByClassName("square");
    if (squareClass.length > 0) {
        console.log(">0");
        divToRemove = document.getElementsByClassName("square")[squareClass.length - 1];
        divToRemove.remove();
    }
}


function todayReport() {
    let report = document.getElementById("report");
    let html = "<h4>Today</h4><p>Scattered thunderstorms</p><ul><li>Temp: 29C</li><li>Precipitation: 25%</li><li>Humidity: 58%</li><li>Wind: 16km/h</li></ul>";
    report.innerHTML = html;
}

function tomorrowReport() {
    let report = document.getElementById("report");
    let html = "<h4>Tomorrow</h4><p>Partly cloudy</p><ul><li>Temp: 27C</li><li>Precipitation: 20%</li><li>Humidity: 65%</li><li>Wind: 13km/h</li></ul>";
    report.innerHTML = html;


//example on click event
    function changeCards() {
        console.log("called");
        let cards = document.getElementsByClassName("card");

        for (let i = 0; i < cards.length; i++) {
            cards[i].style.backgroundColor = "red";
        }
    }

//  <!DOCTYPE html>
////<html lang="en-US">
////  <head>
////    <title>Click Events</title>
////    <link rel="stylesheet" href="index.css" type="text/css">
////  </head>
////  <body>
////    <div class="card" onClick="alert('You clicked Div 1');">Div 1</div>
////    <div class="card" onClick="alert('You clicked Div 2');">Div 2</div>

////    <p onClick="changeCards();">Click me to change the divs to red</p>

////    <script src="index.js"></script>
////  </body>
////</html>
//*/



    function turnPink() {
        let myBox = document.getElementById("box");
        myBox.style.backgroundColor = "lightpink";
    }

    function turnYellow() {
        let myBox = document.getElementById("box");
        myBox.style.backgroundColor = "yellow";
    }

    //< !DOCTYPE html >
    //    <html lang="en-US">
    //        <head>

    //            <title>Mouse Movements & Scrolling</title>
    //        </head>
    //        <body>

    //            <div id="box" onmouseenter="turnPink();" onmouseleave="turnYellow();">When the mouse enters I should turn pink. When the mouse leaves I should turn yellow.</div>

    //            <script src="index.js"></script>
    //        </body>
    //    </html>







    function keyPressed(event) {
        let o = document.getElementById("key-info");
        o.innerHTML = event.key;
    }
    //< !DOCTYPE html >
    //    <html lang="en-US">
    //        <head>

    //            <title>Keyboard Events</title>
    //        </head>
    //        <body onkeydown="keyPressed(event);">

    //            <h1>The last key clicked was: <span id="key-info"></span></h1>

    //            <script src="index.js"></script>
    //        </body>
    //    </html>


    //ADDING EVENT Listeners
    let box = document.getElementById("box");

    function changeBorder() {
        box.style.borderColor = "grey";
    }

    function changeBackground() {
        box.style.backgroundColor = "pink";
    }

    function revertBack() {
        box.style.borderColor = "white";
        box.style.backgroundColor = "lightblue";
    }

    // Write your code here
    box.addEventListener("click", changeBorder);
    box.addEventListener("mouseover", changeBackground);
    box.addEventListener("mouseleave", revertBack);
//    < !DOCTYPE html >
//        <html lang="en-US">
//            <head>
//                <title>Adding Event Listeners</title>
//                <link rel='stylesheet' href='index.css'>
//  </head>
//                <body>
//                    <div id="box"></div>
//                    <script src="index.js"></script>
//                </body>
//</html>



    // Add EventListener and get Element Properties
    document.addEventListener("DOMContentLoaded", function () {
        let boxA = document.getElementById("testA");
        let boxB = document.getElementById("testB");
        let boxC = document.getElementById("testC");
        let boxD = document.getElementById("testD");
        let boxE = document.getElementById("testE");
        let boxF = document.getElementById("testF");

        boxA.addEventListener("click", boxClicked);
        boxB.addEventListener("click", boxClicked);
        boxC.addEventListener("click", boxClicked);
        boxD.addEventListener("click", boxClicked);
        boxE.addEventListener("click", boxClicked);
        boxF.addEventListener("click", boxClicked);


        //alert('load complete');
    });

    function boxClicked(evnet) {
        //alert('boxclicked');
        if (event.type === "click") {
            if (event.target.style.backgroundColor === "orange") {
                event.target.style.backgroundColor = "green";
            }
            else {
                event.target.style.backgroundColor = "orange";
            }
        }
    }

    //< !DOCTYPE html >
    //    <html lang="en-US">
    //        <head>
    //            <title>Working With JavaScript Functions</title>
    //            <link href="index.css" rel="stylesheet" type="text/css" />
    //            <script src="https://code.jquery.com/jquery-3.5.1.slim.js" integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM=" crossorigin="anonymous"></script>
    //        </head>
    //        <body>
    //            <div id='testA' class="box"></div>
    //            <div id='testB' class="box"></div>
    //            <div id='testC' class="box"></div>
    //            <div id='testD' class="box"></div>
    //            <div id='testE' class="box"></div>
    //            <div id='testF' class="box"></div>
    //            <script src="index.js"></script>
    //        </body>
    //    </html>


    //Preferred Solution
    function boxClicked() {
        if (this.style.backgroundColor === "orange") {
            this.style.backgroundColor = "green";
        } else {
            this.style.backgroundColor = "orange";
        }

    }

    let boxes = document.getElementsByClassName('box');

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('click', boxClicked);
    }




    //Fornm Exasmple

    function handleSubmit(event) {
        // Prevent the default submit action (more on this in a couple units)
        event.preventDefault();

        // Get the two input elements
        let user = document.getElementById('username');
        let pass = document.getElementById('password');

        // Log their values to the console
        console.log('Username:', user.value);
        console.log('Password:', pass.value);
    }

    // This gets the form and attaches an event listener to it
    let form = document.getElementById('login-form');
    form.addEventListener('submit', handleSubmit);


    //Form Challenge
    function getFormDetails(event) {
        console.log("called");
        // Prevent the default submit action (more on this in a couple units)
        event.preventDefault();

        // Get the two input elements
        let name = document.getElementById('name');
        let email = document.getElementById('email');

        document.getElementById('name-result').innerHTML = name.value;
        document.getElementById('email-result').innerHTML = email.value;
    }



    // This gets the form and attaches an event listener to it
    let newsletterForm = document.getElementById('newsletter-signup');
    newsletterForm.addEventListener('submit', getFormDetails);


    //read dom like tree
    let ol = document.getElementsByTagName('ol')[0];
    let listItems = ol.children;
    let first = listItems[0].innerHTML;
    console.log(first);
    let fourth = listItems[3].innerHTML;
    console.log(fourth);


    // build list dynamially
    let cocktails = ["Daiquari", "Dry Martini", "Margatrita", "Manhattan", "Mojito", "Mai Tai"];


    let list = document.createElement('ul');
    let listItems = "";

    for (let cocktail of cocktails) {
        listItems = listItems + "<li>" + cocktail + "</li>"
    }

    list.innerHTML = listItems;

    document.body.appendChild(list);


    // read html table
    function buildTableData() {

        let tbody = document.getElementsByTagName('tbody')[0];
        let rows = tbody.children;

        let reviews = [];

        for (let row of rows) {
            let review = {};

            let cells = row.children;
            review.name = cells[0].textContent;
            review.rating = cells[1].textContent;
            review.review = cells[2].textContent;
            reviews.push(review);
        }

        return reviews;
    }

    let data = buildTableData();
    console.log(data);


    // buold a html table from array of objects
    let books = [
        {
            title: "The Girl With the Dragon Tattoo",
            author: "Stieg Larsson",
            published: 2005
        },
        {
            title: "Harry Potter and the Goblet of Fire",
            author: "JK Rowling",
            published: 2000
        },
        {
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            published: 2011
        },
        {
            title: "Days Without End",
            author: "Sebastian Barry",
            published: 2016
        },
        {
            title: "The Silence of the Girls",
            author: "Pat Barker",
            published: 2018
        },
    ];

    // Write your code here

    function buildTable() {

        let html = `
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Published</th>
      </tr>
    </thead>
    <tbody>
`;

        for (let book of books) {
            let rowHtml = `
    <tr class="book-row">
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.published}</td>
    </tr>
  `;
            html += rowHtml;
        }

        return html;
    }

    let table = buildTable();
    document.getElementById("books-table").innerHTML = table;

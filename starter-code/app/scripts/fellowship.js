console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var middleEarth = document.createElement("section");  
  // append middle-earth to your document body
  body.appendChild(middleEarth);
  middleEarth.id = "middle-earth";
  console.log("created middle-earth section tag");
  // inside, add each land as an article tag
  for(var i = 0; i < lands.length; i++) {
  var newLand = document.createElement("article");
  middleEarth.appendChild(newLand);
  newLand.id =lands[i];
  console.log("added lands");
  }
  // inside each article tag include an h1 with the name of the land
  for(i = 0; i < lands.length; i++) {
    var landTitle = document.createElement("h1");
    document.getElementById(lands[i]).appendChild(landTitle);
    landTitle.innerHTML = lands[i];
    console.log("added land titles");
  }
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var hobbitList = document.createElement("ul");
  hobbitList.id = "teamHobbit";
  var theShire = document.getElementById("The Shire");
  theShire.appendChild(hobbitList);
  console.log("create unordered list of hobbits");

  for(var i = 0; i < hobbits.length; i++) {
    var newHobbit = document.createElement("li");
    hobbitList.appendChild(newHobbit);
    newHobbit.innerHTML = hobbits[i];
  // give each hobbit a class of hobbit
    newHobbit.className = "hobbit";
    console.log("add hobbits");
  }
}

makeHobbits();

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement("div");
  // add the ring as a child of Frodo
  document.getElementsByClassName("hobbit")[0].appendChild(theRing);
  theRing.id = "the-ring";
  // give the div a class of 'magic-imbued-jewelry'
  theRing.className = "magic-imbued-jewelry";
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  document.getElementById("the-ring").addEventListener("click", nazgulScreech);
  console.log("Ring created and event listener added.");
}

keepItSecretKeepItSafe();

// Part 4

function makeBuddies() {
  // create an aside tag
  var buddyTag = document.createElement("aside");
  // attach an unordered list of the 'buddies' in the aside
  var buddyList = document.createElement("ul");
  var rivendell = document.getElementById("Rivendell");
  // insert your aside as a child element of rivendell
  rivendell.appendChild(buddyTag);
  buddyTag.appendChild(buddyList);

  for(var i = 0; i < buddies.length; i ++) {
    var newBuddy = document.createElement("li");
    buddyList.appendChild(newBuddy);
    newBuddy.innerHTML = buddies[i];
    newBuddy.className = "squad";
    console.log("We have our buddies here.");
  }
}

makeBuddies();

// Part 5

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  document.getElementsByClassName("squad")[3].innerHTML ="Aragorn";
  buddies[3] = "Aragorn";
}

beautifulStranger();


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var hobbitSquad = document.getElementsByClassName("teamHobbit");
  var hobbitList = document.createElement("ul");
  var rivendell = document.getElementById("Rivendell");
  rivendell.appendChild(teamHobbit);
  console.log("Hobbits are headed to Rivendell");
}

leaveTheShire();

// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell

  var theFellowshipTeam = document.createElement("div");
  var rivendell = document.getElementById("Rivendell");
  var theFellowship = document.createElement("ul");
  rivendell.appendChild(theFellowshipTeam);
  theFellowshipTeam.id = "the-fellowship";
  theFellowshipTeam.appendChild(theFellowship);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  theFellowship.appendChild(document.getElementsByClassName("hobbit")[0]);
  alert(hobbits[0] + " has joined the party");
  theFellowship.appendChild(document.getElementsByClassName("hobbit")[1]);
  alert(hobbits[1] + " has joined the party");
  theFellowship.appendChild(document.getElementsByClassName("hobbit")[2]);
  alert(hobbits[2] + " has joined the party");
  theFellowship.appendChild(document.getElementsByClassName("hobbit")[3]);
  alert(hobbits[3] + " has joined the party");
  theFellowship.appendChild(document.getElementsByClassName("squad")[0]);
  alert(buddies[0] + " has joined the party");
  theFellowship.appendChild(document.getElementsByClassName("squad")[1]);
  alert(buddies[1] + " has joined the party"); 
  theFellowship.appendChild(document.getElementsByClassName("squad")[2]);
  alert(buddies[2] + " has joined the party");
  theFellowship.appendChild(document.getElementsByClassName("squad")[3]);
  alert(buddies[3] + " has joined the party");
  theFellowship.appendChild(document.getElementsByClassName("squad")[4]);
  alert(buddies[4] + " has joined the party"); 
  // after each character is added make an alert that they have joined your party
}

forgeTheFellowShip();

// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalfTheWhite = document.getElementsByClassName("squad")[2];
  gandalfTheWhite.innerHTML = "Gandalf The White";
  console.log(gandalfTheWhite);
  // apply style to the element
  gandalfTheWhite.style.background = "white";
  gandalfTheWhite.style.border = "grey 5px solid";
  // make the background 'white', add a grey border
}

theBalrog();


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown");
  // Boromir's been killed by the Uruk-hai!
  alert("Boromir's been killed by the Uruk-hai!");
  // put a linethrough on boromir's name
  var boromir = document.getElementsByClassName("squad")[3];
  console.log(boromir);
  boromir.remove();
  // Remove Boromir from the Fellowship
}

hornOfGondor();


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}

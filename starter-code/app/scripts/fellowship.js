
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

$('document').ready(function(){
  console.log('$ready');
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBuddies();
  beautifulStranger();
  leaveTheShire();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  $('body').append('<section id="middle-earth"></section>');
  for(let i =0; i < lands.length; i++) {
    $('#middle-earth').append('<article>' + "<h1>" + lands[i] + "</h1>" + '</article>');
  };
};


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  $('article').first().append('<ul></ul>');
  for(let i = 0; i < hobbits.length; i++) {
    $('ul').append('<li class="hobbit">' + hobbits[i] + '</li>');
  };
};


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  $('li').first().append('<div class="magic-imbued-jewelry"></div>').on('click', function() {
    nazgulScreech();
  });
};


// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  $('#middle-earth>article:nth-child(2)').append('<aside></aside>');
  $('#middle-earth>article:nth-child(2)>aside').append('<ul></ul>');
  for(let i = 0; i < buddies.length; i++) {
    $('#middle-earth>article:nth-child(2)>aside>ul').append('<li>' + buddies[i] + '</li>');
  };
};


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  $('#middle-earth>article:nth-child(2)>aside>ul>li:nth-child(4)').text('Aragorn');
}


// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  $('#middle-earth>article:nth-child(2)').append($('.hobbit'));
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  $('#middle-earth>article:nth-child(2)').append('<div class="the-fellowship"></div>');
  $('.the-fellowship').append($('.hobbit').each(function() {
    alert($(this).text() + " has joined your party");
  }));
  $('.the-fellowship').append($('#middle-earth>article:nth-child(2)>aside>ul>li').each(function() {
    alert($(this).text() + " has joined your party");
  }));
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  $('.the-fellowship>li:nth-child(5)').text('Gandalf the White').css('background', 'white').css('border', 'solid gray');
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("The Horn of Gondor has been blown!");
  $('.the-fellowship>li:nth-child(9)').css('text-decoration', 'line-through').remove();
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  for(let i = 0; i <2; i ++){
    $('#middle-earth>article:nth-child(3)').append($('.the-fellowship>li:nth-child(1)'));
  };
  $('#middle-earth>article:nth-child(3)').append('<div id="mount-doom"></div>');
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  $('#mount-doom').append('<div id="gollum"></div>');
  $('#middle-earth>article:nth-child(3)>li:nth-child(2)>div').removeClass('magic-imbued-jewelry');
  $('#gollum').addClass('magic-imbued-jewelry').on('click', function() {
    nazgulScreech();
  });
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
  $('#gollum').remove();
  $('#middle-earth>article:nth-child(1)').append($('.hobbit'));
  $('.baddies').remove();
}

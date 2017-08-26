var pickButton;
var header;
var body;
var choice;
var aList;

var students = [
  "Kevin",
  "Jonathan",
  "Angel",
  "Eric",
  "Janette",
  "Desmond",
  "Ashiya",
  "Monica",
  "Susana",
  "Deborah",
  "Thomas",
  "Julissa",
  "Kyla",
  "John",
  "Shonica",
  "Krystal"
];

var colors = [
  'brown',
  'darkblue',
  'navy', 0,
  'firebrick', 0,
  'black'
];
var cur = 0;

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello rand.js');

  body = document.getElementById('body');
  header = document.getElementById('header');
  pickButton = document.getElementById('pickButton');
  pickButton2 = document.getElementById('pickButton2');
  choice = document.getElementById('choice');
  aList = document.getElementById('aList');

  pickButton.addEventListener('click', pickOnClick );
  pickButton2.addEventListener('click', pickClick2 );
  aList.addEventListener('click', aListOnClick );

  // build the attendance list
  for (let i=0; i<students.length; i++) {
    let li = document.createElement('li');
    li.innerText = students[i];
    aList.append(li);
  }
});

var pickOnClick = function (event) {
  choice.innerHTML = '&nbsp;'
  var rand = students[Math.floor(Math.random() * students.length)];
  var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      window.clearInterval(x);
      cur = 0;
      choice.innerText = rand;
      return;
    }
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 200);
}

var aListOnClick = function (event) {
  if (event.target.tagName === 'LI') {
    event.target.style.textDecoration = 'line-through';
var killLine = students.indexOf(event.target.innerText);
var removeFromList = students.splice(killLine, 1) 
  }
}

var pickClick2 = fucntion (event) {
  alert("Just Chillin'")
  <iframe width="560" height="315" src="https://www.youtube.com/embed/ffJY0rUCYbI" frameborder="0" allowfullscreen></iframe>
}

// var killOnClick = function(rand){
// kill = students.splice(Math.floor(Math.random() * students.length), 1);

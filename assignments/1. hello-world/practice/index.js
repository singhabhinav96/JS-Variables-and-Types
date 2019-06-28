// Challenge 1.
// Log message in console saying "I'm Learning Javascript"
function c1() {
  var message = "I'm Learning Javascript";
  console.log(message);
}

// Challenge 2.
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).
function c2() {
  var admin;
  var name = "John";
  admin = name;
  alert(admin);
}

// Challenge 3.
// Use alert function to to show a message saying “Hello World”.
function c3() {
  alert("Hello World");
}

// Challenge 4.
// Use prompt to take the name of person and greets them. i.e "Welcome Arun"
function c4() {
  var name = prompt("Enter your Name");
  if (name != null) {
    document.getElementById("message").innerHTML = "Welcome " + name;
  }
}

// Challenge 5.
// Get an input from the user using the prompt box and display the length of the string.
// e.g “Learning is fun” should output will be 15.
function c5() {
  var string = prompt("Enter your string");
  if (string != null) {
    string = string.length();
    document.getElementById("message").innerHTML = string;
  }
}

// Challenge 6.
var city = "Dharamshala";
var country = "India";
alert(city + "," + " " + country);
// Alert the above variable like "Dharamshala, India";

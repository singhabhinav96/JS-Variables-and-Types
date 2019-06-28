function display() {
  var name = prompt("Enter your Name");
  if (name != null) {
    document.getElementById("message").innerHTML = "Good Morning " + name;
  }
}

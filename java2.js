var FirstName = prompt("Enter your first name: ");
var LastName = prompt("Enter your last name: ");
var YearOfBirth = Number(prompt("Enter your birth year: "));

document.getElementById("Q3FA1").innerHTML = "Hello " +FirstName + " " + LastName + "! How does it feel to be " + (2025 - YearOfBirth) + " years old?";
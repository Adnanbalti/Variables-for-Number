/*                  Question-01. 
Declare a variable called age & assign to it your age. Show
your age in an alert box.*/

var age = 20;
alert("I am " + age + " year old.");


/*                  Question-03. 
Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser:*/

var birthYear = 2002;
document.write("My birth year is " + birthYear + "." + "<br>");


/*                  Question-04. 
A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
 */

var name = prompt("Enter your name");
var proName = prompt("What do you want to buy?");
var quantity = prompt("How many things do you want to buy?");
document.write(name + " ordered " + quantity + " " + proName + " on XYZ Clothing store.");
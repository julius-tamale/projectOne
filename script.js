//Create the body and button selectors
//I will use the button selector to change color of the body onclick
const bodySelector = document.querySelector('body');
const buttonSelector = document.querySelector('.btn');

//add an event listener on the button
//create a function that listens to a click event and changes body bg color
//create 3 color variables that generate random numbers for rgb values


buttonSelector.addEventListener('click', bgColorChange);

/*removed parentheses when adding bgColorChange function to button as it
invokes the function before clicking the button*/

function bgColorChange() {
    let redColor = Math.floor(Math.random() * 255); //red color values random number
    let greenColor = Math.floor(Math.random() * 255); //red color values random number
    let blueColor = Math.floor(Math.random() * 255); //red color values random number
    bodySelector.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}
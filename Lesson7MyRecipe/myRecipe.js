/* global $ */

/*
    Program Name: Recipe Display Application
    Author: Dana Lebofsky
    
    Date: July 27, 2017
    
    Filename: drill4.js
    
*/


//displays the next element after the current target
function display(event) {
    
    $(event.currentTarget).next().fadeIn("fast");
    
}//end of display


//attach event listener to h3 elements to invoke display function when clicked
//$("h3").click(display);

//displays and animates the next element after the current target
function display2(event) {
    
        $(event.currentTarget).next().animate( {height: 'toggle'}, "fast");
    
} //end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);
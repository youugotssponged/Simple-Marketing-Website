/*
    File: poll.js
    Name: Jordan McCann
    Student ID: 23571144
*/

window.onload = function(){ // Runs the code below when the window loads on the browser
    "use strict"; // Enable the latest ES features (modern JS)

    // Stores html strings to be used by each buttons handler function
    let trueString    =  '<h1>You said: YES</h1><h1><i>101%</i> said YES</h1><h3><i>Thanks for participating!</i></h3>';
    let falseString   = '<h1>You said: NO</h1><h1><i>0.01%</i> said: NO</h1><h3><i>Thanks for participating!</i></h3>';

    // Gets both audio elements
    let audioElement1 = document.getElementById('TaDaSound');
    let audioElement2 = document.getElementById('BooSound');

    //// Audio handler functions
    function playSound1(){
        audioElement1.play(); // Plays the embedded sound for YES radio button
    }
    function playSound2(){
        audioElement2.play(); // Plays the embedded sound for NO radio
    }

    // Gets both radio buttons to use and handle
    let radioBtns = document.getElementsByClassName('btns');

    // Gets the radio buttons + text
    let radioSection = document.getElementsByClassName('radioSection');

    // Used to update the webpage and hide the elements after one has been clicked
    function hideElements(){
        for(let i = 0; i < radioSection.length; i++){
            radioSection[i].hidden = true; // Renders the elements non-visible when hideElements() is called
        }
    }

    // Ran when the Yes Radio Button is clicked
    // Is called when the radio button for YES is clicked on the page
    function btn1HandlePoll(){
        console.log("RadioBtn - Yes - Was Clicked"); // Debug Info
        hideElements();// Hide poll components thats currently visible
        playSound1(); // Plays a sound to enforce feedback
        radioSection[3].hidden = false;// Unhides the component
        radioSection[3].style.fontFamily = "Iceberg"; // Sets the CSS font-family
        radioSection[3].style.color = "Green"; // Sets the font color
        radioSection[3].innerHTML = trueString; // Sets the text
    }

    // Ran when the No Radio Button is clicked
    // Is called when the radio button for when NO is clicked on the page
    function btn2HandlePoll(){
        console.log("RadioBtn - No - Was Clicked"); // Debug Info
        hideElements(); // Hide poll components thats currently visible
        playSound2(); // Plays a sound to enforce feedback
        // Show the element and update
        radioSection[3].hidden = false; // Unhides the component
        radioSection[3].style.fontFamily = "Iceberg"; // Sets the CSS font-family
        radioSection[3].style.color = "Red"; // Sets the font color
        radioSection[3].innerHTML = falseString; // Sets the text
    }

    // Attach Event Listeners to handle the user clicking on either of the radio buttons
    radioBtns[0].addEventListener('click', btn1HandlePoll);
    radioBtns[1].addEventListener('click', btn2HandlePoll);

}

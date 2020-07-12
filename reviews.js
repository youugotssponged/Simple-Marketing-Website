/*
    File: review.js
    Name: Jordan McCann
    Student ID: 23571144
*/

// Function called when the 
// Show all reviews button
// is clicked on the page
function handleReviews(){
    "use strict"; // Enables the latest ES6 and up features on the browser for modern Javascript execution
    
    // Store the API link needed for fetching the data 
    let API = 'https://student.computing.edgehill.ac.uk/~walshd/cis1110api/product-reviews/bikeoil';

    // Get elements for accessing and modifying
    let currentHiddenElements = document.getElementsByClassName('isHidden'); // Accesses the hidden elements to unhide on the page
    let borderlines = document.getElementsByClassName('isBorderHidden'); // Accesses the hidden borders to unhide
    let profileImgs = document.getElementsByClassName('profileimg'); // Accesses the profile image section to be modified
    let middleText = document.getElementsByClassName('middletext'); // Accesses the middle text space to append to (Usernames)
    let reviewMessage = document.getElementsByClassName('reviewmsg'); // Accesses the review message space to append to from the api
    let ratingImageSpace = document.getElementsByClassName('review_middle'); // Accesses the rating image space to append to

    // Get the button to hide it later
    let button = document.getElementById('isBtnHidden'); // Accesses the button element that will be hidden when script is complete

    // Fetch Data from API
    fetch(API,{method: 'get'}) // Using the METHOD of GET for pulling the data from the api
    .then(function(response){ 
        return response.json(); // Return what was found into a local JSON object
    })
    .then(function(data){ // Handle the data

        // Modify rating images based on rating per object
        // Generates each users rating of the product from the API data of rating
        for(let i = 0; i < data.length; i++) // For every object found in the api
        {   
            // Create image elements that will be appended to the page
            // Within the reviewmiddle section
            let rate1 = document.createElement("IMG");
            let rate2 = document.createElement("IMG");
            let rate3 = document.createElement("IMG");
            let rate4 = document.createElement("IMG");
            let rate5 = document.createElement("IMG");

            // If the current object of data's rating is 5 then:  
            if(data[i].rating == 5){
                
                // Set the source of the image
                rate1.setAttribute("src", "img/Reviews/RedStar.png");
                rate2.setAttribute("src", "img/Reviews/RedStar.png");
                rate3.setAttribute("src", "img/Reviews/RedStar.png");
                rate4.setAttribute("src", "img/Reviews/RedStar.png");
                rate5.setAttribute("src", "img/Reviews/RedStar.png");

                // Set the class
                rate1.setAttribute("class", "reviewimg");
                rate2.setAttribute("class", "reviewimg");
                rate3.setAttribute("class", "reviewimg");
                rate4.setAttribute("class", "reviewimg");
                rate5.setAttribute("class", "reviewimg");

                // Append to the page
                ratingImageSpace[i].appendChild(rate1);
                ratingImageSpace[i].appendChild(rate2);
                ratingImageSpace[i].appendChild(rate3);
                ratingImageSpace[i].appendChild(rate4);
                ratingImageSpace[i].appendChild(rate5);

            }
            else if(data[i].rating == 4){ // If the current object of data's rating is 4 then: 

                // Set the source of the image
                rate1.setAttribute("src", "img/Reviews/RedStar.png");
                rate2.setAttribute("src", "img/Reviews/RedStar.png");
                rate3.setAttribute("src", "img/Reviews/RedStar.png");
                rate4.setAttribute("src", "img/Reviews/RedStar.png");
                rate5.setAttribute("src", "img/Reviews/BlackStar.png");

                // Set the class
                rate1.setAttribute("class", "reviewimg");
                rate2.setAttribute("class", "reviewimg");
                rate3.setAttribute("class", "reviewimg");
                rate4.setAttribute("class", "reviewimg");
                rate5.setAttribute("class", "reviewimg");

                // Append to the page
                ratingImageSpace[i].appendChild(rate1);
                ratingImageSpace[i].appendChild(rate2);
                ratingImageSpace[i].appendChild(rate3);
                ratingImageSpace[i].appendChild(rate4);
                ratingImageSpace[i].appendChild(rate5);
            }
            else if(data[i].rating == 3){ // If the current object of data's rating is 3 then: 

                // Set the source of the image
                rate1.setAttribute("src", "img/Reviews/RedStar.png");
                rate2.setAttribute("src", "img/Reviews/RedStar.png");
                rate3.setAttribute("src", "img/Reviews/RedStar.png");
                rate4.setAttribute("src", "img/Reviews/BlackStar.png");
                rate5.setAttribute("src", "img/Reviews/BlackStar.png");

                // Set the class
                rate1.setAttribute("class", "reviewimg");
                rate2.setAttribute("class", "reviewimg");
                rate3.setAttribute("class", "reviewimg");
                rate4.setAttribute("class", "reviewimg");
                rate5.setAttribute("class", "reviewimg");

                // Append to the page
                ratingImageSpace[i].appendChild(rate1);
                ratingImageSpace[i].appendChild(rate2);
                ratingImageSpace[i].appendChild(rate3);
                ratingImageSpace[i].appendChild(rate4);
                ratingImageSpace[i].appendChild(rate5);
            }
            else if(data[i].rating == 2){ // If the current object of data's rating is 2 then: 

                // Set the source of the image
                rate1.setAttribute("src", "img/Reviews/RedStar.png");
                rate2.setAttribute("src", "img/Reviews/RedStar.png");
                rate3.setAttribute("src", "img/Reviews/BlackStar.png");
                rate4.setAttribute("src", "img/Reviews/BlackStar.png");
                rate5.setAttribute("src", "img/Reviews/BlackStar.png");

                // Set the class
                rate1.setAttribute("class", "reviewimg");
                rate2.setAttribute("class", "reviewimg");
                rate3.setAttribute("class", "reviewimg");
                rate4.setAttribute("class", "reviewimg");
                rate5.setAttribute("class", "reviewimg");

                // Append to the page
                ratingImageSpace[i].appendChild(rate1);
                ratingImageSpace[i].appendChild(rate2);
                ratingImageSpace[i].appendChild(rate3);
                ratingImageSpace[i].appendChild(rate4);
                ratingImageSpace[i].appendChild(rate5);
            }
            else if(data[i].rating == 1){ // If the current object of data's rating is 1 then: 

                // Set the source of the image
                rate1.setAttribute("src", "img/Reviews/RedStar.png");
                rate2.setAttribute("src", "img/Reviews/BlackStar.png");
                rate3.setAttribute("src", "img/Reviews/BlackStar.png");
                rate4.setAttribute("src", "img/Reviews/BlackStar.png");
                rate5.setAttribute("src", "img/Reviews/BlackStar.png");

                // Set the class
                rate1.setAttribute("class", "reviewimg");
                rate2.setAttribute("class", "reviewimg");
                rate3.setAttribute("class", "reviewimg");
                rate4.setAttribute("class", "reviewimg");
                rate5.setAttribute("class", "reviewimg");

                // Append to the page
                ratingImageSpace[i].appendChild(rate1);
                ratingImageSpace[i].appendChild(rate2);
                ratingImageSpace[i].appendChild(rate3);
                ratingImageSpace[i].appendChild(rate4);
                ratingImageSpace[i].appendChild(rate5);
            }
        }

        // Assign random profile pic to simulate different users
        for(let i = 0; i < profileImgs.length; i++){
            let randomnum; // variable to stoe the random number
            try{ // Try catch to stop the error of the randomisation from ending up as null
                // Learned from: https://www.w3schools.com/jsref/jsref_random.asp
                randomnum = Math.floor((Math.random() * 10) + 1); // Randomise a number between one and 10
                if(randomnum < 5){ // If the number is less than five set the profile pictures in a pattern
                    profileImgs[i + 1].src = 'img/Reviews/robotprof.png';
                    profileImgs[i].src = 'img/Reviews/robotprofWhite.png';
                }

                if(randomnum > 5){ // If the number is more than five, set the profile pictures in a different pattern
                    profileImgs[i].src = 'img/Reviews/robotprof.png';
                    profileImgs[i + 1].src = 'img/Reviews/robotprofWhite.png';
                }

            } catch(error){ // If there is an error, re-randomise a number
                randomnum = Math.floor((Math.random() * 10) + 1); // Re-Randomise
            }
        }

        // Modify element data
        for(let i = 0; i < middleText.length; i++){ // Middle Text
            middleText[i].innerHTML = data[i].nickname;
        }
    
		// Appends the review message of every object to the correct allocation area
        for(let i = 0; i < reviewMessage.length; i++){ // Review Message
            reviewMessage[i].innerHTML = data[i].review;
        }

        // Reveal Elements
        for(let i = 0; i < currentHiddenElements.length; i++){
            currentHiddenElements[i].style.display = 'block';
        }

        // Reveal Borders
        for(let i = 0; i < borderlines.length; i++){
            borderlines[i].style.display = 'block';
        }

        // Hides button once complete
        button.style.display = 'none';

    })
    .catch(function(error){ // Catch any errors
        console.log(error); // Print it to the console for later debugging
        alert(error); // Throw the error in an alert on the page -- given by the browser
    });

}
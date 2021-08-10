
// File: Logos Flashcards Game.js
// Project: CSIS 3020 (Mini Project)
// Author:  Natalia Ahmad
// History: Version 1 October 24th, 2020
// Text-editor used: Atom Version 1.51.0
// Browser: Code tested on Google Chrome Version 85.0.4183.102

// all the variables
var logoImage;
var nextButton;
var correctButton;
var imgValue;
var inputBtn;

var choice1;
var choice2;
var choice3;
var choice4;

var questionCounter = 0;
var correctCounter = 0;
var wrongCounter = 0;
var firstTimePlaying = true;

//empty arrays for used images and choices
var usedImages = [];
var allChoices = [];

//array for images with 4 choices and the correct answer
var images = [{
    // all images are taken from Wikimedia commons
    // Mitsubishi_logo
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Mitsubishi_logo.svg",
    choices: ["Asseta", "Cadillac", "Truckers FM", "Discord", "Ingman", "Dorrance & Company"],
    correctAnswer: "Mitsubishi"
  }, {
    // Cadillac_logo
    image: "https://upload.wikimedia.org/wikipedia/commons/8/83/Cadillac_%285220691319%29.jpg",
    choices: ["Asseta", "Ingman", "Dorrance & Company", "Discord", "American Brodcasting Company", "Mozilla Firefox"],
    correctAnswer: "Cadillac"
  }, {
    // Asseta_logo
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Asseta-company-logo.png",
    choices: ["Manchurian Artifact Company", "Manchurian Artifact Company", "Truckers FM", "Discord", "Cadillac", "Ingman"],
    correctAnswer: "Asseta"
  }, {
    // Dorrance_and_company_logo
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Dorrance_and_company_logo%2C_ca_1923.png",
    choices: ["Asseta", "Cadillac", "Ingman", "Mozilla Firefox", "Truckers FM", "Mitsubishi"],
    correctAnswer: "Dorrance & Company"
  }, {
    //Manchurian_Aircraft_Manufacturing_Company_Logo
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Manchurian_Aircraft_Manufacturing_Company_Logo.png",
    choices: ["American Brodcasting Company", "Asseta", "Dorrance & Company", "Cadillac", "Ingman", "Truckers FM"],
    correctAnswer: "Manchurian Artifact Company"
  }, {
    // abc image
    image: "https://upload.wikimedia.org/wikipedia/commons/5/54/American_Broadcasting_Company_Logo.svg",
    choices: ["Dorrance & Company", "Cadillac", "Discord", "Ingman", "Mozilla Firefox", "Mitsubishi"],
    correctAnswer: "American Brodcasting Company"
  }, {
    // firefox logo
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Firefox_Project_Logo%2C_2019.svg",
    choices: ["Discord", "Truckers FM", "Ingman", "Manchurian Artifact Company", "Asseta", "Cadillac"],
    correctAnswer: "Mozilla Firefox"
  }, {
    // discord image
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Font_Awesome_5_brands_discord_color.svg",
    choices: ["Mitsubishi", "American Brodcasting Company", "Ingman", "Truckers FM", "Dorrance & Company", "Mozilla Firefox"],
    correctAnswer: "Discord"
  }, {
    // ingman image
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Unilever_Ingman_Production_logo.png",
    choices: ["Discord", "Asseta", "Cadillac", "Mozilla Firefox", "Mitsubishi", "American Brodcasting Company"],
    correctAnswer: "Ingman"
  }, {
    // truckers FM
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/TruckersFM_Logo.png",
    choices: ["Asseta", "Cadillac", "Ingman", "Dorrance & Company", "Discord", "Mozilla Firefox"],
    correctAnswer: "Truckers FM"
  }];

  //function to start the quiz
  function startQuiz () {
      nextButton = document.getElementById("nextButton");
      if (questionCounter > 9) {
          alert("Game has ended.\nTo play again, click the back button to go to Welcome screen and then click the Start button.");
          nextButton.disabled = true;
      }
      else {
          nextButton.disabled = false;
      }
  	setImage (logoImage);
  	setChoice();

      inputBtn = document.getElementsByClassName("inputBtn");
      for (i = 0; i < inputBtn.length; i++) {
          inputBtn[i].style.cssText = "background: white";
          inputBtn[i].disabled = false;
      }
  }

  //function to display logo images in random order
  function setImage (logoImage) {
  	imgValue = Math.floor(Math.random() * 10);

      if (usedImages.indexOf(images[imgValue].image) != -1) {
          setImage(images[imgValue].image);
      }
      else {
          logoImage = images[imgValue].image;
          document.getElementById("logoImage").src = logoImage;
          usedImages.push(logoImage);
      }
  }

  for (i = 0; i < images.length; i++) {
      allChoices.push(images[i].correctAnswer);
  }

  //function to set all the choices buttons
  function setChoice () {
  	randomBtn = Math.floor(Math.random() * 4);
      var correctAnswer;
      var alt = document.getElementById("logoImage").src;
      for (i = 0; i < 4; i++) {
          var buttonNum = i + 1;
          if (randomBtn == i) {
              for (j = 0; j < images.length; j++) {
                  if (images[j].image == alt) {
                      correctAnswer = images[j].correctAnswer;
                      console.log(correctAnswer);
                      document.getElementById("choice" + buttonNum).value = correctAnswer;
                  }
              }
          }
          else {
              randomAnsIndex = Math.floor(Math.random() * images.length);
              if (allChoices[randomAnsIndex] == correctAnswer) {
                  randomAnsIndex = Math.floor(Math.random() * images.length);
              }
              else {
                  document.getElementById("choice" + buttonNum).value = allChoices[randomAnsIndex];
              }
          }
      }
  }

  //function to shuffle the choices
  function shuffle (array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      while (currentIndex != 0) {
      randomIndex = Math.floor ( Math.random() * currentIndex );
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  	}
  	return array;
  }

  //function to find the correct answer related to the image
  function correctAns () {
  	firstTimePlaying = false;
  	var alt = document.getElementById("logoImage").src;
  	var correctAnswer;
  	for (i = 0; i < images.length; i++) {
  		if (images[i].image == alt) {
  			correctAnswer = images[i].correctAnswer;
  		}
  	}
  	var value1 = document.getElementById("choice1").value;
  	var value2 = document.getElementById("choice2").value;
  	var value3 = document.getElementById("choice3").value;
  	var value4 = document.getElementById("choice4").value;

  	if (value1 == correctAnswer) {
  		document.getElementById("choice1").style.cssText = "background:green";
  	}
    else if (value2 == correctAnswer) {
  		document.getElementById("choice2").style.cssText = "background:green";
  	}
    else if (value3 == correctAnswer) {
  		document.getElementById("choice3").style.cssText = "background:green";
  	}
    else if (value4 == correctAnswer) {
  		document.getElementById("choice4").style.cssText = "background:green";
  	}
  }

  //function to check the answer with the image
  function checkAns (element) {
  	var image = document.getElementById("logoImage").src;
  	var correctAnswer;
  	for (i = 0; i < images.length; i++) {
  		if (images[i].image == image) {
  			correctAnswer = images[i].correctAnswer;
  		}
  	}
      questionCounter++;
  	if (element.value == correctAnswer) {
  		correctCounter++;
  	}
      else {
          wrongCounter++;
          alert ("Sorry, wrong answer.");
      }
      for (i = 0; i < inputBtn.length; i++) {
          inputBtn[i].disabled = true;
      }
      document.getElementById("questionCounter").innerHTML = "Questions Asked: " + questionCounter;
      document.getElementById("correctCounter").innerHTML = "Correct Answer: " + correctCounter;
      document.getElementById("wrongCounter").innerHTML = "Wrong Answers: " + wrongCounter;
  }

  window.addEventListener( "load", startQuiz, false );

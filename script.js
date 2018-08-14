// List of gifs from document

/*
1 'https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif',
2 'https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif',
3 'https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif',
4 'https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif',
5 'https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif',
6 'https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif',
7 'https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif',
8 'https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif',
9 'https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif',
10 'https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif',

*/
var currentSong = 0
var songs = ['https://open.spotify.com/embed/track/6DCZcSspjsKoFjzjrWoCdn', ]
// those are variables selecting main elements on the page

var resultBox = document.getElementById('result')
var result2Box = document.getElementById('result')
var titleBox = document.getElementById('title')
var voteBox = document.getElementById('vote-box')
var mainImage = document.getElementById('main-image')
var youImage = document.getElementById('you-image')
var spotifyImage = document.getElementById('spotify-image')
var yrImage = document.getElementById('yr-image')
var youScore = document.getElementById('you-score')
var spotifyScore = document.getElementById('spotify-score')
var yrScore = document.getElementById('yr-score')
var gifPanelBox = document.getElementById('gif-panel')
var gifPanel2Box = document.getElementById('gif-panel')
var resultButton = document.getElementById('result-button')
var nextSongButton = document.getElementById('nextbutton')
var secondPage = document.getElementById('secondpage')
var firstPage = document.getElementById('firstpage')
// this is how you replace the image from the background
// mainImage.style.backgroundImage = "url(https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif)"

// this is how we hide the resultBox element
resultBox.hidden = true;
nextSongButton.hidden = true;
secondPage.hidden = true;

// this is how you create a function
function testClickFunction(){
  resultBox.hidden = true;
}

// Second Song Page Stuff

function nextSongClickFunction(){
  secondPage.hidden = false;
  firstPage.hidden = true;
  voteBox.hidden = true;

}


// Activity today will be

// 1. Create a variable to store the user selected Rating  userRating
var userRating = 0;
// 2. Create 10 different functions to update the userRating score
// 3. Add the functions to the correpondent HTML elements, using the onclick="functionName()" attribute
function firstbuttonClickFunction(){
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif)"
  userRating = 1;
  resultButton.hidden = false;

}
function button2ClickFunction(){
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)"
  userRating = 2;
  resultButton.hidden = false;

}
function button3ClickFunction(){

  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif)"
  userRating = 3;
  resultButton.hidden = false;

}
function button4ClickFunction(){
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif)"
  userRating = 4;
    resultButton.hidden = false;
}
function button5ClickFunction(){
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif)"
  userRating = 5;
  resultButton.hidden = false;
}
function button6ClickFunction(){
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif)"
  userRating = 6;
  resultButton.hidden = false;
}
function button7ClickFunction(){
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif)"
  userRating = 7;
  resultButton.hidden = false;
}
function button8ClickFunction(){
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif)"
  userRating = 8;
  resultButton.hidden = false;
}
function button9ClickFunction(){
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif)"
  userRating = 9;
  resultButton.hidden = false;
}
function button10ClickFunction(){
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif)"
  userRating = 10;
  resultButton.hidden = false;
}

// 4. Create a function to process the click on Compare button
function compareCLickFunction(){
  gifPanelBox.hidden = true;
  youScore.innerHTML = userRating;
  resultBox.hidden = false;
  nextSongButton.hidden = false;


  if(userRating === 1) {
   youImage.style.backgroundImage = "url(https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif)"
   yrImage.style.backgroundImage = "url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)"
   spotifyImage.style.backgroundImage = "url(https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif)"
  }
  if(userRating === 2) {
   youImage.style.backgroundImage = "url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)"
  }
  if(userRating === 3) {
   youImage.style.backgroundImage = "url(https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif)"
  }
  if(userRating === 4) {
   youImage.style.backgroundImage = "url(https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif)"
  }
  if(userRating === 5) {
   youImage.style.backgroundImage = "url(https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif)"
  }
  if(userRating === 6) {
   youImage.style.backgroundImage = "url(https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif)"
  }
  if(userRating === 7) {
   youImage.style.backgroundImage = "url(https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif)"
  }
  if(userRating === 8) {
   youImage.style.backgroundImage = "url(https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif)"
  }
  if(userRating === 9) {
   youImage.style.backgroundImage = "url(https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif)"
  }
  if(userRating === 10) {
   youImage.style.backgroundImage = "url(https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif)"
  }

}
// 5. The function should, hide the element voteBox and show resultBox
// 5.1 Show User score replacing youScore.innerHTML = content
// 5.2. Change youImage with appropriated Gif image

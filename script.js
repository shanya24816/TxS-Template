var iframeElement = document.querySelector("#song-iframe");

var gifs =[
'url(https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif)',//1
'url(https://i.giphy.com/media/1d5KHhOA1oTpX7ROOi/giphy.gif)',//2
'url(https://i.giphy.com/media/3o6Zt5nSYQa0czSmnm/giphy.gif)',//3
'url(https://i.giphy.com/media/2tKCVxXIkBgqUZGDJb/giphy.gif)',//4
'url(https://i.giphy.com/media/KtfjlVSFI8EVO/giphy.gif)',//5
'url(https://i.giphy.com/media/xUPGGDgB1ZlUduRov6/giphy.gif)',//6
'url(https://i.giphy.com/media/wAxlCmeX1ri1y/giphy.gif)',//7
'url(https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif)',//8
'url(https://i.giphy.com/media/1TJB4TPjtaEJq/giphy.gif)',//9
'url(https://i.giphy.com/media/xe9csf50g4SqY/giphy.gif)'//10
]

var currentSong = 3;
var songs = [
		'spotify:track:3GCdLUSnKSMJhs4Tj6CV3s',
		'spotify:track:7KXjTSCq5nL1LoYtL7XAwS',
		'spotify:track:6tZ3b7ik1QDXFAZlXib0YZ',
		'spotify:track:3GCdLUSnKSMJhs4Tj6CV3s',
		'spotify:track:0KrmvQ1HsaWgeWSh8Cdb0o',
 ]

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
var resultButton = document.getElementById('result-button')
var nextSongButton = document.getElementById('nextbutton')
var SongName = document.getElementById('nameofsong')

resultBox.hidden = true;
nextSongButton.hidden = true;

setAlbumCover(songs[0], mainImage)
iframeElement.src = getSpotifyScr(songs[0])

function testClickFunction(){
  resultBox.hidden = true;
}

var userRating = 0;

function firstbuttonClickFunction(){
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif)"
  userRating = 1;


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

function nextSong(){
	gifPanelBox.hidden = false;
	resultBox.hidden = true;
	nextSongButton.hidden = true;
	setAlbumCover(songs[currentSong + 1], mainImage)

}

function compareCLickFunction(){
  gifPanelBox.hidden = true;
  youScore.innerHTML = userRating;
  resultBox.hidden = false;
  nextSongButton.hidden = false;


  if(userRating === 1) {
   youImage.style.backgroundImage = "url(https://i.giphy.com/media/BCXMSiVZeo8xy/giphy.gif)"
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




function getSpotifyScr(song) {
	const songCode = song.split(':')[2];
	return `https://open.spotify.com/embed/track/${songCode}`;
}


async function setAlbumCover(song, element) {
  var aa = await getAlbumCover(song);
  element.style.backgroundImage = `url(${aa})`;
}

async function getAlbumCover(song) {
  //return the Image for a specific song ID
  const songCode = song.split(':')[2];
  const data = await fetch(`https://cors-anywhere.herokuapp.com/https://embed.spotify.com/oembed?url=http://open.spotify.com/track/${songCode}`)
    .then(r => r.json());
  return data.thumbnail_url;
}


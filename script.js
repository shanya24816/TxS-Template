var iframeElement = document.querySelector("#song-iframe");

var gifs =[
'url(https://media.giphy.com/media/5CtQQBulwgWly/giphy.gif)',//1
'url(https://media.giphy.com/media/5YueTKmGG8hs1MqcdP/giphy.gif)',//2
'url(https://media.giphy.com/media/EMA2GQg31g436/giphy.gif)',//3
'url(https://media.giphy.com/media/ScZzMlETdv9mg/giphy.gif)',//4
'url(https://media.giphy.com/media/NV5Pi952EDymZvh8J1/giphy.gif)',//5
'url(https://media.giphy.com/media/1rf4V8kgTLvva/giphy.gif)',//6
'url(https://media.giphy.com/media/l46CyxkMBFwHlJ3kk/giphy.gif)',//7
'url(https://media.giphy.com/media/pa37AAGzKXoek/giphy.gif)',//8
'url(https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif)',//9
'url(https://media.giphy.com/media/14qb1Uhf40ndw4/giphy.gif)'//10
]

var currentSong = 0;

var songTitle = [
  'All the Stars',
  'Humble',
  'Kevins Heart',
  'Doing the Sponge'
]

var artist = [
  'Kendrick Lamar, SZA',
  'Kendrick Lamar',
  'J Cole',
  'Spongebob Squarepants'
]

var songData = [
  {

    songTitle: "All the Stars",
    artistName: "Kendrick Lamar, SZA",
    spotifyScore: 7,
    songURI: 'spotify:track:3GCdLUSnKSMJhs4Tj6CV3s',//danceability": 0.698
    userRating: null,
    backgroundColor: "green",
  },

  {
    songTitle: "Humble",
    artistName: "Kendrick Lamar",
    spotifyScore: 9,
    songURI: 'spotify:track:7KXjTSCq5nL1LoYtL7XAwS',//danceability": 0.908
    userRating: null,
    backgroundColor: "blue",
  },

  {
  songTitle: "Kevins Heart",
    artistName: "J Cole",
    spotifyScore: 8,
    songURI: 'spotify:track:6tZ3b7ik1QDXFAZlXib0YZ',//danceability": 0.829
    userRating: null,
    backgroundColor: "orange",
  },

  {
    songTitle: "Doing the Sponge",
    artistName: "Spongebob Squarepants",
    spotifyScore: 5,
    songURI: 'spotify:track:0KrmvQ1HsaWgeWSh8Cdb0o',//danceability": 0.547
    userRating: null,
    backgroundColor: "purple",

  }

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
var songTitle = document.getElementById('song-title')
var artistName = document.getElementById('artist-name')
var resultsPage = document.getElementById('results-page')

resultBox.hidden = true;
nextSongButton.hidden = true;
resultsPage.hidden = true;

setAlbumCover(songData[0].songURI, mainImage)
iframeElement.src = getSpotifyScr(songData[0].songURI)

function testClickFunction(){
  resultBox.hidden = true;
}

var userRating = 0;

function firstbuttonClickFunction(){
  mainImage.style.backgroundImage = "url(https://media.giphy.com/media/5CtQQBulwgWly/giphy.gif)"
  userRating = 1;


}
function button2ClickFunction(){
  mainImage.style.backgroundImage = "url(https://media.giphy.com/media/5YueTKmGG8hs1MqcdP/giphy.gif)"
  userRating = 2;
  resultButton.hidden = false;

}
function button3ClickFunction(){

  mainImage.style.backgroundImage = "url(https://media.giphy.com/media/EMA2GQg31g436/giphy.gif)"
  userRating = 3;
  resultButton.hidden = false;

}
function button4ClickFunction(){
  mainImage.style.backgroundImage = "url(https://media.giphy.com/media/ScZzMlETdv9mg/giphy.gif)"
  userRating = 4;
  resultButton.hidden = false;
}
function button5ClickFunction(){
  mainImage.style.backgroundImage = "url(https://media.giphy.com/media/NV5Pi952EDymZvh8J1/giphy.gif)"
  userRating = 5;
  resultButton.hidden = false;
}
function button6ClickFunction(){
  mainImage.style.backgroundImage = "url(https://media.giphy.com/media/l46CyxkMBFwHlJ3kk/giphy.gif)"
  userRating = 6;
  resultButton.hidden = false;
}
function button7ClickFunction(){
  mainImage.style.backgroundImage = "url(https://media.giphy.com/media/1rf4V8kgTLvva/giphy.gif)"
  userRating = 7;
  resultButton.hidden = false;
}
function button8ClickFunction(){
  mainImage.style.backgroundImage = "url(https://media.giphy.com/media/pa37AAGzKXoek/giphy.gif)"
  userRating = 8;
  resultButton.hidden = false;
}
function button9ClickFunction(){
  mainImage.style.backgroundImage = "url(https://i.giphy.com/media/MhHcCN6PoTdL2/giphy.gif)"
  userRating = 9;
  resultButton.hidden = false;
}
function button10ClickFunction(){
  mainImage.style.backgroundImage = "url(https://media.giphy.com/media/14qb1Uhf40ndw4/giphy.gif)"
  userRating = 10;
  resultButton.hidden = false;
}




function nextSong(){
	console.log(currentSong)
 if (currentSong <= songData.length - 2) {

	console.log("test");

	gifPanelBox.hidden = false;
	resultBox.hidden = true;
	nextSongButton.hidden = true;
	currentSong = currentSong + 1
	setAlbumCover(songData[currentSong].songURI, mainImage)
	iframeElement.src = getSpotifyScr(songData[currentSong].songURI)
	songTitle.innerHTML = songData[currentSong].songTitle;
	artistName.innerHTML = songData[currentSong].artistName;
} else {
	nextSongButton.innerHTML = "Finish";
	console.log("finished list")
}
}


function compareCLickFunction(){
  gifPanelBox.hidden = true;
  youScore.innerHTML = userRating;
  resultBox.hidden = false;
  nextSongButton.hidden = false;
  spotifyScore.innerHTML = songData[currentSong].spotifyScore;

 youImage.style.backgroundImage = gifs[userRating - 1];

 spotifyImage.style.backgroundImage = gifs[songData[currentSong].spotifyScore-1];
 if (currentSong === songData.length - 1) {
 	nextSongButton.innerHTML = "Finish";
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

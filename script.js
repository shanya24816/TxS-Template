var name = 'THIS IS MY NAME';
var number = 15;
var anothernumber = 10;
var anothername = 'SHANYA';
var food = 'TACOS';
var oranges = 'ORANGES';


// var resultBox = document.getElementById('result')
// resultBox.innerHTML = 'Something'



var voteBox = document.getElementById('vote-box')

// adding click event to selected elemtent
// in this case voteBox contains the element id='votBox'
voteBox.addEventListener('click', voteBoxFunction);
function voteBoxFunction(){
	voteBox.innerHTML = '<h1>* * * Vote Here Please :) * * *</h1>'
}

var titleBox = document.getElementById('title')
titleBox.addEventListener('mouseover', titleBoxFunction);
	function titleBoxFunction() {
		titleBox.innerHTML = '<h1>SHANYA WILLIAMS</h1>'
	}
//select range, add event called change, create a voteBoxFunction
document.querySelector('#range').addEventListener('change', rangeChange)

function rangeChange(event){
	var rangeValue = event.target.value //result value of the range
	if(rangeValue > 0 && rangeValue > 10){
	} 
	titleBox.innerHTML = rangeValue
}
document.querySelector('#result').hidden = true




// function('parameter')
// alert('hello')
// alert(name)
// alert(number)
// alert(food)
// alert(oranges)
// alert(name + 'crayons')


// document.querySelector('#result').hidden = true
document.getElementById('result')

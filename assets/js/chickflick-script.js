
let carouselWidth = 325; 


let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

let imageNum = 0;


function showNextImage() {

	imageNum = imageNum + 1;
	checkControls()

	let calcleft = -carouselWidth * imageNum;

	imageRow.style.left = calcleft + "px";
}


nextButton.onclick = showNextImage;


function showPrevImage() {
	
	imageNum = imageNum - 1;
	checkControls()
	
	let calcleft = -carouselWidth * imageNum;

	imageRow.style.left = calcleft + "px";
}


prevButton.onclick = showPrevImage;


let totalImages = document.getElementsByClassName("carousel-image").length;



function checkControls() {

	if (imageNum === 0) {
		prevButton.classList.add("hidden")
	}
	else if (prevButton.classList.contains("hidden")) {
		prevButton.classList.remove("hidden")
	}

	if (imageNum === totalImages - 1) {
		nextButton.classList.add("hidden")
	}
	else if (nextButton.classList.contains("hidden")) {
		nextButton.classList.remove("hidden")
	}
}

//image1

function showSummary1() {
    let summary1 = document.getElementById('movie1-description');
    summary1.style.display = "block";
    let background1 = document.getElementById('background1');
    background1.style.display = "block";
}

document.getElementById('invisible-box1').onmouseover = showSummary1;

function hideSummary1() {
    let summary2 = document.getElementById('movie1-description');
    summary2.style.display = "none";
    let background2 = document.getElementById('background1');
    background2.style.display = "none";
}

document.getElementById('invisible-box1').onmouseleave = hideSummary1;

//image2

function showSummary2() {
    let summary = document.getElementById('movie2-description');
    summary.style.display = "block";
    let background = document.getElementById('background2');
    background.style.display = "block";
}

document.getElementById('invisible-box2').onmouseover = showSummary2;

function hideSummary2() {
    let summary = document.getElementById('movie2-description');
    summary.style.display = "none";
    let background = document.getElementById('background2');
    background.style.display = "none";
}

document.getElementById('invisible-box2').onmouseleave = hideSummary2;

//image 3

function showSummary3() {
    let summary = document.getElementById('movie3-description');
    summary.style.display = "block";
    let background = document.getElementById('background3');
    background.style.display = "block";
}

document.getElementById('invisible-box3').onmouseover = showSummary3;

function hideSummary3() {
    let summary = document.getElementById('movie3-description');
    summary.style.display = "none";
    let background = document.getElementById('background3');
    background.style.display = "none";
}

document.getElementById('invisible-box3').onmouseleave = hideSummary3;

//image4

function showSummary4() {
    let summary = document.getElementById('movie4-description');
    summary.style.display = "block";
    let background = document.getElementById('background4');
    background.style.display = "block";
}

document.getElementById('invisible-box4').onmouseover = showSummary4;

function hideSummary4() {
    let summary = document.getElementById('movie4-description');
    summary.style.display = "none";
    let background = document.getElementById('background4');
    background.style.display = "none";
}

document.getElementById('invisible-box4').onmouseleave = hideSummary4;

//image 5

function showSummary5() {
    let summary = document.getElementById('movie5-description');
    summary.style.display = "block";
    let background = document.getElementById('background5');
    background.style.display = "block";
}

document.getElementById('invisible-box5').onmouseover = showSummary5;

function hideSummary5() {
    let summary = document.getElementById('movie5-description');
    summary.style.display = "none";
    let background = document.getElementById('background5');
    background.style.display = "none";
}

document.getElementById('invisible-box5').onmouseleave = hideSummary5;





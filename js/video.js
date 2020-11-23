//extra help from http://www.developphp.com/

var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
	
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});



var rate = 1.0;

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	rate = rate * .9;
	video.playbackRate = rate;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	rate = rate / .9;
	video.playbackRate = rate;
	console.log(video.playbackRate);
});


document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 5;
});


document.querySelector("#mute").addEventListener("click", function() {
	video = document.querySelector("#myVideo");
	console.log("Muted");
	if (video.muted){
		video.muted = false;
		document.querySelector("#volume").innerHTML = video.volume*100 + "%";
	} else {
		video.muted = true;
		document.querySelector("#volume").innerHTML = "0%";
	}
});


document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log("Volume adjusted");
	// console.log(this);
	console.log(this.value);
	document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = this.value*0.01;
});


document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	var element = document.getElementById("myVideo");
	element.classList.add("oldTime");
});


document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	var element = document.getElementById("myVideo");
	element.classList.remove("oldTime");
});

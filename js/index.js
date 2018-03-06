window.onload = function() {
	var night = document.getElementById("night");
	var day = document.getElementById("day");
	var font = document.getElementById("font-change");
	var fontclick = document.getElementById("font-click");
	day.style.display = "none";
	night.style.display = "block";
	font.style.display = "block";
	fontclick.style.display = "none";
	night.onclick = function(){
		day.style.display = "block";
		night.style.display = "none";
	}
	day.onclick = function(){
		day.style.display = "none";
		night.style.display = "block";
	}
	font.onclick = function(){
		font.style.display = "none";
		fontclick.style.display = "block";
	}
	fontclick.onclick = function(){
		font.style.display = "block";
		fontclick.style.display = "none";
	}
	
}
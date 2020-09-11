document.getElementById("search-submit").onclick = function() {
	var search = document.getElementById("search-field").value
	if (search != "") {
		window.location = "http://google.com/search?q="+search
	}
};

document.getElementById("search-field").onkeypress = function(e) {
	if (e.key == "Enter") {
		document.getElementById("search-submit").click();
	}
}

function startTime() {
	var today = new Date();
	var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var day = daylist[today.getDay()];
	
	hours = today.getHours()
	var partOfDay = "";
	if (hours < 12) {partOfDay = "morning";}
	else if (hours < 17) {partOfDay = "afternoon";}
	else if (hours < 21) {partOfDay = "evening";}
	else {partOfDay = "night";}
	
	var date = checkNumber(today.getDate())+"/"+checkNumber((today.getMonth()+1))+"/"+today.getFullYear();
	var time = checkNumber(today.getHours())+":"+checkNumber(today.getMinutes())+":"+checkNumber(today.getSeconds());
	
	document.getElementById("time").innerHTML = day+" "+date+" "+time;
	document.getElementById("header").innerHTML = "good "+partOfDay+", astraxy!";
	document.title = "good "+partOfDay+", astraxy!";
	setTimeout(startTime, 500);
}

function checkNumber(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
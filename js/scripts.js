var images = ["../img/employee_database1.png", "../img/employee_database2.png", "../img/employee_database3.png",
			  "../img/employee_database4.png", "../img/employee_database5.png", "../img/employee_database6.png"];
var counter = 0;

document.getElementById("next_button").onclick = function() {nextImage()};
document.getElementById("prev_button").onclick = function() {prevImage()};

function nextImage() {
	if (counter < images.length - 1 && counter >= 0) {
		counter += 1;
		document.getElementById("employee_database_interface").setAttribute("src", images[counter]);
	}
}

function prevImage() {
	if (counter < images.length && counter > 0) {
		counter -= 1;
		document.getElementById("employee_database_interface").setAttribute("src", images[counter]);
	}
}
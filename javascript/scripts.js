var images = ["../images/employee_database1.png", "../images/employee_database2.png", "../images/employee_database3.png",
			  "../images/employee_database4.png", "../images/employee_database5.png", "../images/employee_database6.png"];
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
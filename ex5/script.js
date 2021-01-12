$(function (){ //dollar sign = doc.addventlistener("DOMCon")

	$("#navbarToggle").blur(function (event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 992) {
			$("#navbarNav").collapse('hide');
		}
	});
});
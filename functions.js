function showOrHidePopUp(){
	
	let popUp = document.getElementById('popup');
	let popUpStyle = window.getComputedStyle(popUp);
	
	if (popUpStyle.display == "none"){
		popUp.style.display = "block";
	}else{
		popUp.style.display = "none";
	}
}              
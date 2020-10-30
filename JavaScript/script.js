$(document).ready(function() {

// À propos nous
	$("#button1").click(function(){
		$("#apropos").toggle();
	});
// contact
	$("#button2").click(function(){
		$("#contact").toggle();
	});

});

function validation()
{
	if (document.getElementById("nomfam").value === "" || document.getElementById("prenom").value === "")
	{
		alert("Veuillez entrer votre nom ET prénom");
	}
}
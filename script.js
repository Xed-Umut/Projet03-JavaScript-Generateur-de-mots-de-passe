const afficheurJS = document.getElementById("afficheur");
const longueurJS = document.getElementById("longueur");
const majusculesJS = document.getElementById("majuscules");
const minusculesJS = document.getElementById("minuscules");
const chiffresJS = document.getElementById("chiffres");
const symbolesJS = document.getElementById("symboles");
const boutonGenererJS = document.getElementById("button");

const listeMajuscules = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const listeMinuscules = "abcdefghijklmnopqrstuvwxyz";
const listeChiffres = "0123456789";
const listeSymboles = "!@#$%^&*()_+=";

function genererMDP() {

    let password = "";
	let mdp = [];

	// Vérifie s'il y a au moins une case de coché
	if (majusculesJS.checked == false && minusculesJS.checked == false && chiffresJS.checked == false && symbolesJS.checked == false){
		alert("Attention aucune case n'est cochée");
		document.getElementById("majuscules").checked = true;
		document.getElementById("minuscules").checked = true;
		return;
	}

	// 
    for (let i = password.length; i < longueurJS.value; i++) {
		
		if (majusculesJS.checked) {
			var tablisteMajuscules = listeMajuscules.split("");
			mdp = mdp.concat(tablisteMajuscules);
		}

		if (minusculesJS.checked) {
			var tablisteMinuscules = listeMinuscules.split("");
			mdp = mdp.concat(tablisteMinuscules);
		}

		if (chiffresJS.checked) {
			var tablisteChiffres = listeChiffres.split("");
			mdp = mdp.concat(tablisteChiffres);
		}

		if (symbolesJS.checked) {
			var tablisteSymboles = listeSymboles.split("");
			mdp = mdp.concat(tablisteSymboles);
		}

        const caractere = mdp[Math.floor(Math.random() * mdp.length)];
        password += caractere;
    }

    afficheurJS.innerText = password;
}

boutonGenererJS.addEventListener("click", genererMDP);
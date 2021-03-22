window.onload = InitialiserEvenements;

function InitialiserEvenements()
{
	//Exercice 1
	document.getElementById("question").addEventListener("click", AfficherQuestion);
	document.getElementById("reponse").addEventListener("click", DemanderReponse);

	//Exercice 2
	var elements = document.querySelectorAll("#ex2 p");
	var cpt;
	for (cpt=0; cpt<elements.length; cpt++)
	{
		elements[cpt].addEventListener("mouseover", GrossirTexte);
		elements[cpt].addEventListener("mouseout", RapetisserTexte);
	}

	//Exercice 3
	document.getElementById("themeFonce").addEventListener("click", AppliquerTheme);
	document.getElementById("themeDepart").addEventListener("click", AppliquerTheme);	

}

//exercice 1
function AfficherQuestion()
{
    document.getElementById("texteQuestion").style.display = "block";
    document.getElementById("reponse").style.display = "block";
}
function DemanderReponse()
{
    var person = prompt("Please enter the answer", "");

    if (person == "Le veau") {
      txt = "Bravo";
      document.getElementById("message").style.color = "black";
      document.getElementById("message").style.fontWeight = 'bold';
      document.getElementById("message").textContent = txt;
    } else {
      txt = "Mauvaise réponse";
      document.getElementById("message").style.color = "red";
      document.getElementById("message").style.fontWeight = 'none';
      document.getElementById("message").textContent = txt;
    }
}

//exerccie 2
function GrossirTexte()
{
    document.this.fontSize = "200%";
}
function RapetisserTexte()
{
	document.this.fontSize = "100%";
}

//exercice 3 
function AppliquerTheme()
{
	
	
}




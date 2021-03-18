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
}
function DemanderReponse()
{
}

//exerccie 2
function GrossirTexte()
{

}
function RapetisserTexte()
{
	
}

//exercice 3 
function AppliquerTheme()
{
	
	
}




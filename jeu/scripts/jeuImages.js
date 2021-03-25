
window.onload = Initialiser;

//nombre d'images différentes à utiliser dans le jeu 
var nombreImages = 0;
//nombre d'image trouvées pendant le tour
var imagesTrouvees = 0;
//nombre de tours effectués
var tours = 0;
//pour le chronomètre
var secondes = 0;
var timer;

function Initialiser()
{
	document.getElementById("btnFacile").addEventListener("click", GenererJeu(1));
	document.getElementById("btnMoyen").addEventListener("click", GenererJeu(2));
	document.getElementById("btnDifficile").addEventListener("click", GenererJeu(3));
	var lesImages = document.getElementsByClassName("image");
	for (var cpt=0; cpt<lesImages.length; cpt++)
	{
		lesImages[cpt].addEventListener("click", VerifierImage);
	}
	document.getElementById("btnPixabay").addEventListener("click", CreerLien);
	document.getElementById("btnEmoji").addEventListener("click", CreerLien);

}

// <button> + <a> ne valide pas en html
// il faut donc faire le lien hypertexte en javascript
function CreerLien()
{
	if (this.id == "btnPixabay")
	{
		window.open("https://pixabay.com/fr/");
	}
	else
	{
		window.open("https://fr.wikipedia.org/wiki/%C3%89moji");
	}
}

function GenererJeu(dif)
{
	//ajoutez le code pour déterminer le niveau ici

	if(dif=1)
	{
		nombreImages = 5;
		document.querySelector('')
	}
	else if(dif=2)
	{
		nombreImages = 10;
	}
	else if(dif=3)
	{
		nombreImages = 15;
	}
	else
	{
		nombreImages = 5;
	}



	DisparaitreNiveaux();
	GenererImageATrouver();
	GenererLesImages();
	DebuterChronometre();
	VerifierToutesTrouvees();
}

function GenererImageATrouver()
{
	var hasard;
	var str1 = "emoji";
	var str2 = ".png"
	if (nombreImages == 5)
	{
		hasard = math.floor((Math.random() * 5) + 1);
	}
	else if (nombreImages == 10)
	{
		hasard = math.floor((math.random() * 10) + 1);
	}
	else if (nombreImages == 15)
	{
		hasard = math.floor((math.random() * 15) + 1);
	}
	var image = string.concat(str1, hasard, str2);
	document.getElementById(imageATrouver).src = image;
}

function GenererLesImages()
{

}

function VerifierImage() 
{

	VerifierToutesTrouvees();
}

function VerifierToutesTrouvees()
{
	var imagesRestantes = 0;



	if (imagesRestantes == 0)
	{
		clearInterval(timer);
		ApparaitreNiveaux();
	}
}
	
function DisparaitreNiveaux()
{
	document.getElementById("btnFacile").style.display = "none";
	document.getElementById("btnMoyen").style.display = "none";
	document.getElementById("btnDifficile").style.display = "none";
}
function ApparaitreNiveaux()
{
	document.getElementById("btnFacile").style.display = "block";
	document.getElementById("btnMoyen").style.display = "block";
	document.getElementById("btnDifficile").style.display = "block";
}
function DebuterChronometre()
{
	secondes = 0;
	timer = setInterval(AfficherChronometre,1000);
}
function AfficherChronometre()
{
	secondes++;
	document.querySelector("#chrono span").innerHTML = secondes;
}

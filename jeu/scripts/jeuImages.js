
window.onload = Initialiser();

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

	if(dif==1)
	{
		nombreImages = 5;

	}
	else if(dif==2)
	{
		nombreImages = 10;
	}
	else if(dif==3)
	{
		nombreImages = 15;
	}
	else
	{
		nombreImages = 5;
	}



	//DisparaitreNiveaux();
	GenererImageATrouver();
	GenererLesImages();
	DebuterChronometre();
	VerifierToutesTrouvees();
}

function GenererImageATrouver()
{
	var hasard;
	if (nombreImages == 5)
	{
		hasard = Math.floor((Math.random() * 5) + 1);
	}
	else if (nombreImages == 10)
	{
		hasard = Math.floor((Math.random() * 10) + 1);
	}
	else if (nombreImages == 15)
	{
		hasard = Math.floor((Math.random() * 15) + 1);
	}
	var image = "images/emoji";
	image = image.concat(hasard);
	image = image.concat(".png");
	document.getElementById("imageATrouver").src = image;
}

function GenererLesImages()
{
	var hasard;
    var nbrImageSup;
	var lesImages = document.getElementsByClassName("image");
	if (nombreImages == 5)
	{
	    nbrImageSup = 10;
		for (var countImage = 0; countImage < nbrImageSup; countImage++)
		{
			var image1 = "images/emoji";
			image1 = image1.concat(hasard);
			image1 = image1.concat(".png");
			lesImages[countImage].src = image1;
		}
	}
	else if (nombreImages == 10)
	{
        nbrImageSup = 20;
		for (var countImage = 0; countImage < nbrImageSup; countImage++)
		{
			var image1 = "images/emoji";
			image1 = image1.concat(hasard);
			image1 = image1.concat(".png");
			lesImages[countImage].src = image1;
		}
	}
	else if (nombreImages == 15)
	{
	    nbrImageSup = 30;
		for (var countImage = 0; countImage < nbrImageSup; countImage++)
		{
			var image1 = "images/emoji";
			image1 = image1.concat(hasard);
			image1 = image1.concat(".png");
			lesImages[countImage].src = image1;
		}
	}
	for (var countSup = nombreImages; countSup < lesImages.length; countSup++) {
		lesImages[countSup].style.display = "none";
    }
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
		tours++;
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

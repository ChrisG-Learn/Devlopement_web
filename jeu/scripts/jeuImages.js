
window.onload = Initialiser;

var lesImages = document.getElementsByClassName("image");
var cpt;
var image;
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
	document.getElementById("btnFacile").addEventListener("click", GenererJeu);
	document.getElementById("btnMoyen").addEventListener("click", GenererJeu);
	document.getElementById("btnDifficile").addEventListener("click", GenererJeu);
	lesImages = document.getElementsByClassName("image");
	for (cpt = 0; cpt<lesImages.length; cpt++)
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

function GenererJeu() //Fini
{
	//ajoutez le code pour déterminer le niveau ici


	var div = document.getElementById("infoTour");
	var spans = div.getElementsByTagName("span");

	if(this.id == "btnFacile")
	{
		nombreImages = 5;
        spans[0].innerHTML = "Facile";
	}
	else if(this.id == "btnMoyen")
	{
		nombreImages = 10;
		spans[0].innerHTML = "Moyen";
	}
	else if(this.id == "btnDifficile")
	{
		nombreImages = 15;
		spans[0].innerHTML = "Difficile";
	}
	else
	{
		nombreImages = 5;
		spans[0].innerHTML = "Non reconue";
	}


	DisparaitreNiveaux();
	GenererImageATrouver();
	GenererLesImages();
	DebuterChronometre();
	VerifierToutesTrouvees();
}

function GenererImageATrouver() //Fini
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
	image = "images/emoji";
	image = image.concat(hasard);
	image = image.concat(".png");
	document.getElementById("imageATrouver").src = image;
}

function GenererLesImages()
{
	var hasard;
    var nbrImageSup;
	if (nombreImages == 5)
	{
	    nbrImageSup = 10;
		for (var count = 0; count < 10; count++)
		{
			hasard = Math.floor((Math.random() * 5) + 1);
			var image1 = "images/emoji";
			image1 = image1.concat(hasard);
			image1 = image1.concat(".png");
			lesImages[count].src = image1;
		}
	}
	else if (nombreImages == 10)
	{
        nbrImageSup = 20;
		for (var count = 0; count < 20; count++)
		{
			hasard = Math.floor((Math.random() * 10) + 1);
			var image1 = "images/emoji";
			image1 = image1.concat(hasard);
			image1 = image1.concat(".png");
			lesImages[count].src = image1;
		}
	}
	else if (nombreImages == 15)
	{
	    nbrImageSup = 30;
		for (var count = 0; count < 30; count++)
		{
			hasard = Math.floor((Math.random() * 15) + 1);
			var image1 = "images/emoji";
			image1 = image1.concat(hasard);
			image1 = image1.concat(".png");
			lesImages[count].src = image1;
		}
	}
	for (var countSup = nbrImageSup; countSup < lesImages.length; countSup++) {
		lesImages[countSup].style.display = "none";
    }
}  //Fini

function VerifierImage() 
{
	if (this.getAttribute("src") == image)
	{
		this.style.borderColor = "red";
		imagesTrouvees++;
    }
	VerifierToutesTrouvees();
}

function VerifierToutesTrouvees()
{
	var imagesRestantes = 0;
	for (var count = 0; count < lesImages.length; count++) {
		if (lesImages[count].getAttribute("src") == image && lesImages[count].style.borderColor != "red")
		{
		imagesRestantes = imagesRestantes + 1;
		}

	}

	if (imagesRestantes == 0)
	{
		Restart();
	}

}

function Restart()
{
    clearInterval(timer);
    ApparaitreNiveaux();
    tours++;
    imagesTrouvees = 0;
    for (var count = 0; count < lesImages.length; count++)
    {
        lesImages[count].style.borderColor = "black";
        lesImages[count].src = "images/envers.png";
        lesImages[count].style.display = "inline";
    }
    document.getElementById("imageATrouver").src = "images/envers.png";
	document.querySelector("#chrono span").innerHTML = "0";

    var div = document.getElementById("infoTour");
	var spans = div.getElementsByTagName("span");
	spans[1].innerHTML = tours;
}

function DisparaitreNiveaux() //Fini
{
	document.getElementById("btnFacile").style.display = "none";
	document.getElementById("btnMoyen").style.display = "none";
	document.getElementById("btnDifficile").style.display = "none";
}
function ApparaitreNiveaux() //Fini
{
	document.getElementById("btnFacile").style.display = "block";
	document.getElementById("btnMoyen").style.display = "block";
	document.getElementById("btnDifficile").style.display = "block";

}
function DebuterChronometre() //Fini
{
	secondes = 0;
	timer = setInterval(AfficherChronometre,1000);
}
function AfficherChronometre() //Fini
{
	secondes++;
	document.querySelector("#chrono span").innerHTML = secondes;
}
{
	
}
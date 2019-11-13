
// Ressources
var argent = Argenttotal = 5;
var carottes = 0;
var avocats = 0;
var argentcarotte = 0.5;
var argentavocat = 4;
//Ressource incrementation
var nbChampsCarottes = 1;
var nbChampsAvocats = 0;

//Compteur pour avocats
var pousseAvocats = 0;

//variable pour modifier les chiffres
var tabspan =  document.getElementsByTagName('span');
console.log(tabspan)
var Argents = tabspan[0];
var nbcarotte = tabspan[1];
var nbavocat = tabspan[2];
var ajoutchampcarotte = tabspan[3];
var ajoutchampavocat = tabspan[4];
var displaycarotte = document.getElementById('achatChampCarottesSpan');
var displayavocat = document.getElementById('achatChampAvocatsSpan');
var nbcarottes = nbcarotte.innerHTML;
var displaychampbio = tabspan[9];
var diplayvideo
var timercarotte = 1000;
var timeravocat = 3000;
var prixchampcarotte = 10;
var prixchampavocat = 20;
var champbiomemoire = 0;
var argenttampon = Argenttotal;
var Argenttotal
var champtemps
var bio = 0;
var champbiomemoire = nbChampsCarottes + nbChampsAvocats;
var champtemps = champbiomemoire * 5;


//entrer valeur html dans l'index

var affichageprod = document.getElementById("production");
//Fonction appelée au chargement de la page (voir la balise <body> de index.html)
function main () 
{
	pousse();
	aGagne();
	champAvocats();
}

//Appelée toutes les secondes, cette fonction fait pousser les légumes
function démarrageavocat() {
	if(nbChampsAvocats == 1){
		affichernbavocat = document.getElementById('Avocats');
		affichernbavocat.style.display = "";
		affichernbchampavocat = document.getElementById('champsAvocats');
		affichernbchampavocat.style.display = "";
	}
}
function pousse ()
{
		carottespousse = carottes * nbChampsCarottes;
 		carottes++ ;
 		miseAJourAffichage();
 		setTimeout(pousse, timercarotte);

}
function champAvocats() {
		pousseAvocats = avocats * nbChampsAvocats;
 		avocats++;
 		miseAJourAffichage();
 		setTimeout(champAvocats, timeravocat);
}
//Met à jour les <span> pour qu'ils affichent la valeur des variables 
function miseAJourAffichage()
{	
	Argents.innerHTML = Argenttotal;
	nbcarotte.innerHTML = carottespousse;
	ajoutchampcarotte.innerHTML = nbChampsCarottes;
	ajoutchampavocat.innerHTML = nbChampsAvocats;
	nbavocat.innerHTML = pousseAvocats;
	if (Argenttotal > 20) {
		displayavocat.style.display = "";
	}
	else{
		displayavocat.style.display = "none";
	}
	
	carottesseconde = (nbChampsCarottes / timercarotte) * 1000;
	avocatsseconde = (nbChampsAvocats / timeravocat) * 1000;
	affichageprod.innerHTML = "Vous produisez "+carottesseconde+" carottes et "+avocatsseconde+" avocats par seconde";
	
	if (bio == 0) {
		if ((nbChampsAvocats && nbChampsCarottes ) > 60 ) {
			displaychampbio.style.display ="";
			bio++;
		}else{
			displaychampbio.style.display ="none";
		}
	}
}

//Vendre ses légumes contre de l'argent
function vendreLegumes() 
{
	nbargentcarotte = carottespousse * argentcarotte;
	nbargentavocat = pousseAvocats * argentavocat;
	Argenttotal += nbargentcarotte + nbargentavocat ;
	carottes = 0;
	avocats = 0;
	displaycarotte.style.display = "";
	setTimeout(miseAJourAffichage,1);

}

//Peut recevoir en argument "carotte" ou "avocat"
function acheterChamp(legume)
{
	switch(legume){
		case "carotte":
			if (nbChampsCarottes >= 200 && Argenttotal >= 5000) {
				Argenttotal -= prixchampcarotte * 20
				nbChampsCarottes += 200
			}
			else{
				if (nbChampsCarottes >= 40 && Argenttotal >= 3000) {
					Argenttotal -= prixchampcarotte * 10
					nbChampsCarottes += 10
				}
				else{
					if (Argenttotal >= 10) {
						Argenttotal -= prixchampcarotte;
						nbChampsCarottes++;	
					}						
				}
			}
			break;
		case "avocat":

			if (nbChampsAvocats >= 200 && Argenttotal >= 10000) {
				Argenttotal -= prixchampavocat * 20
				nbChampsAvocats += 200
			}
			else{
				if (nbChampsAvocats >= 40 && Argenttotal >= 1000) {
					Argenttotal -= prixchampavocat * 10;
					nbChampsAvocats +=  10;
				}
				else{
					if(Argenttotal >= 20 ) {
						Argenttotal -= prixchampavocat;
						nbChampsAvocats++;
						démarrageavocat();
					}
				}
			}
			break
			
	} // acolade de fin de switch
	miseAJourAffichage();
} // fin de la fonction

//changement en champs bio
function productionbio() {
		if (argenttampon > 0)  {
			timercarotte = timercarotte * 3;
			timeravocat = timeravocat * 3;
			ventechampbio();
			displaychampbio.style.display = "none"
			$.messager.alert("msg", "Vendu");

		}
		else{
		$.messager.alert('msg' , "Vous n'avez pas assez d'argent !");
	}
}	
	
function ventechampbio() {
	argenttampon = Argenttotal;
	prixchampavocat += 40;
	prixchampcarotte += 20;
	argentcarotte = 5;
	argentcarotte = 10;
	Argenttotal = argenttampon - champtemps;

}
//Vérifie que joueur a gagné, à appeler souvent...
function aGagne()
{
	if (Argenttotal > 9999999) {
		displayvideo = document.getElementById('Video');
		displayglobal = document.getElementById('Global');
		displayglobal.style.display = "none";
		displayvideo.style.display = "";
	}
	else{
		setTimeout(aGagne, 100)
	}
}

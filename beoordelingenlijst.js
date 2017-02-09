function geefCijfer(){
	var cijfer_totaal = document.getElementById("cijfer").value;
	
	if(cijfer_totaal > 0 && cijfer_totaal < 50){
		document.getElementById("resultaat").innerHTML += "Het cijfer is " + cijfer_totaal + " en is dus onvoldoende. <br>";
	} else if(cijfer_totaal >49 && cijfer_totaal < 60){
		document.getElementById("resultaat").innerHTML += "Het cijfer is " + cijfer_totaal + " en is dus matig. <br>";
	} else if(cijfer_totaal >59 && cijfer_totaal < 75){
		document.getElementById("resultaat").innerHTML += "Het cijfer is " + cijfer_totaal + " en is dus voldoende. <br>";
	} else if(cijfer_totaal >74 && cijfer_totaal < 101){
		document.getElementById("resultaat").innerHTML += "Het cijfer is " + cijfer_totaal + " en is dus goed. <br>";
	} else{
		document.getElementById("resultaat").innerHTML += "Dat cijfer kan niet gegeven worden!!! <br>";
	}
}

function geefCijfer2(){
	var cijfer_totaal2 = document.getElementById("cijfer2").value;
	
	if(cijfer_totaal2 > 0 && cijfer_totaal2 < 50){
		document.getElementById("resultaat").innerHTML += "De beoordeling is onvoldoende, want het cijfer is " + cijfer_totaal2 + "<br>";
	} else if(cijfer_totaal2 >49 && cijfer_totaal2 < 60){
		document.getElementById("resultaat").innerHTML += "De beoordeling is matig, want het cijfer is " + cijfer_totaal2 + "<br>";
	} else if(cijfer_totaal2 >59 && cijfer_totaal2 < 75){
		document.getElementById("resultaat").innerHTML += "De beoordeling is voldoende, want het cijfer is " + cijfer_totaal2 + "<br>";
	} else if(cijfer_totaal2 >74 && cijfer_totaal2 < 101){
		document.getElementById("resultaat").innerHTML += "De beoordeling is goed, want het cijfer is " + cijfer_totaal2 + "<br>";
	} else{
		document.getElementById("resultaat").innerHTML += "Dat cijfer kan niet gegeven worden!!! <br>";
	}
	
}
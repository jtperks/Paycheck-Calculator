

function takeHome(hours){
	var hourly = 29.5;
	hours = document.getElementById("hours").value;
	var tax = .8;
	var jenks = "$" + ((hourly*hours)*tax).toFixed(2);
	return document.getElementById("test").innerHTML=jenks;

}

function clearly(){
    var alibi = document.getElementById("hours").value = 0.00; 
    document.getElementById("test").innerHTML="$"+0.00;
    return alibi;  
}
//
	


function hacerclic(){  
	//document.querySelector("#principal p:first-child").onclick=mostraralerta; 
	 var lista=document.querySelectorAll("#principal p"); 
	for(var f=0; f<lista.length; f++){
		lista[f].onclick=mostraralerta;
	}
} 
function mostraralerta()
{  
	alert('hizo clic!'); 
} 
window.onload=hacerclic; 
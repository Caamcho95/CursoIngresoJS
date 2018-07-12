function Mostrar()
{
//tomo la edad  
	var edad;

	edad = document.getElementById('edad').value;

	if(edad >=18 )
	{
		alert("Es Mayor");
	}
	else{ if(edad>12 && edad <18)
	{
		alert("Adolecente");
	}
	else
	{
		alert("Niño");
	}}


}//FIN DE LA FUNCIÓN
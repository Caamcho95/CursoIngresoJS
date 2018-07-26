function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	/*(10>numero>0)*/

	while(numero>9 || numero<0)
	{
		numero = prompt("re-ingrese un número entre 0 y 9.");
		
	}

	document.getElementById('Numero').value=numero;




}//FIN DE LA FUNCIÓN  spidersen 
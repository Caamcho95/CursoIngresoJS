function mostrar()
{

	var numero;
	var divisor=0;
	var contador;

	numero = prompt("Ingrese Numero")
	numero = parseInt(numero);

	for(contador=1;contador<=numero;contador++)
	{
		if(numero%contador ==0)
		{
			divisor++
		}
		
	}
	if(divisor>2)
		{
			alert("No es primo");
		}
	else
		{
			alert("Es primo");
		}



}//FIN DE LA FUNCIÓN
function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("Ingrese Primer Numero");
	numeroDos = prompt("Ingrese Segundo Numero");

	numeroDos=parseInt(numeroDos);
	numeroUno=parseInt(numeroUno);

	if(numeroUno==numeroDos)
	{
		alert(numeroUno+ " " +numeroDos);
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resultado=numeroUno/numeroDos
			alert(resultado);
			
		}
		else
		{
			if(numeroUno<numeroDos)
			{
				resultado=numeroUno+numeroDos;
				
				if(resultado<50)
				{
					alert("La suma es "+resultado+ " y es menor a 50");
				}
				else
				{
					alert(resultado);
				}


			}
		}

	}

}

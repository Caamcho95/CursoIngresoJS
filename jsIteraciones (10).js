function mostrar()
{

	var contador;
	var numero;
	var respuesta="si";
	var promedioNegativos;
	var promedioPositivos;
	var contadorcero;
	var contadorpositivos;
	var contadornegativos;
	var diferencia;
	var cantidadPares;
	
	contador=0;
	contadorcero=0
	contadorpositivos=0
	contadornegativos=0
	negativos=0;
	positivos=0;
	cantidadPares=0;

	//declarar contadores y variables 
	while(respuesta!="no")
	{
		numero = prompt("Ingrese numero");
		numero = parseInt(numero);
		contador++
		if(numero<0)
		{
			negativos=negativos+numero;
			contadornegativos++
		}
		
		if(numero>0)
		{
			positivos = positivos+numero;
			contadorpositivos++
		}
		
		if(numero ==0)
		{
			contadorcero++ 
		}

		if(numero%2==0 && numero !=0)
		{
			cantidadPares++
		}

		respuesta = prompt("Ingrese no para salir");
	}
	
	promedioPositivos = positivos/contadorpositivos;
	promedioNegativos = negativos/contadornegativos;
	diferencia = positivos-negativos;



	
	document.write("la suma de negativos es :"+negativos+ " y de los positivos es: "+positivos+ " Cantidad de positivos es: "+contadorpositivos+ " la de de negativos es: "+contadornegativos+" Y la de cero es: "+contadorcero);
	document.write(" El promedio de lo negativos es: "+promedioNegativos+" el promedio de los positivos es: "+promedioPositivos+ " Y la diferencia es: "+diferencia+ " La cantidad de pares es: "+cantidadPares);



}//FIN DE LA FUNCIÓN
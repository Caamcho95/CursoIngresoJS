function mostrar()
{
	var letra;
	var numero;
	
	var cantidadImpares=0;
	var cantidadCero=0;
	var promedio;
	var sumaPositivos;
	var sumaNegativos;
	var maximoLetra
	var maximoNumero;
	var minimoLetra;
	var respuesta="si";
	var cantidadPares=0;
	var positivo=0
	var cantidadPositivo=0;
	var negativo=0;
	var cantidadNegativos=0;
	var contador=0;


	while(respuesta!= "no")
	{	
		contador++
		letra=prompt("Ingresar una Letra")
		numero=prompt("Ingrese un numero")
		numero=parseInt(numero)
		while(isNaN(numero)||numero>100||numero<0)
		{
			numero=prompt("Ingrese un numero")
			numero=parseInt(numero)
		}
		if(numero%2==0 && numero !=0)
		{
			cantidadPares++
		}
		else
		{
			cantidadImpares++
		}
		if(numero==0)
		{
			cantidadCero++
		}
		if(numero>0)
		{
			sumaPositivos=positivo+numero
			cantidadPositivo++

		}
		if(numero<0)
		{
			sumaNegativos=negativo+numero
			cantidadNegativos++
		}
		if(contador==1)
		{
			maximoNumero=numero
			maximoLetra=letra
			minimoLetra=letra
			minimoNumero=numero
		}
		else
		{
			if(numero>maximoNumero)
			{
				maximoNumero=numero
				maximoLetra=letra
			}
			if(numero<minimoNumero)
			{
				minimoLetra=letra
				minimoNumero=numero
			}
		}
		respuesta=prompt("Quiere continuar si/no")

	}
	promedio=sumaPositivos/cantidadPositivo
	document.write("La cantidad de pares es "+cantidadPares)
	document.write("<br>"+"La cantidad de numeros impares es "+cantidadImpares)
	document.write("<br>"+"la cantidad de ceros es "+cantidadCero)
	document.write("<br>"+"el promedio de positivos es "+promedio)
	document.write("<br>"+"la suma de todos los negativos es "+sumaNegativos)
	document.write("<br>"+"el numero y la letra del maximo son "+maximoLetra+ " y "+ maximoNumero);

}

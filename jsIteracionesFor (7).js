function mostrar()
{

	 var numero;
	 var contador;
	 var divisores=0;


	 numero = prompt("ingresar un numero");
	 numero=parseInt(numero);

	for(contador=1;contador<=numero;contador++)
	{
		if(numero%contador ==0)
		{
			document.write(" "+contador+" ");
			divisores++
		}
	}
	document.write("<br>"+"La cantidad de divisores es "+ divisores);


}//FIN DE LA FUNCIÓN
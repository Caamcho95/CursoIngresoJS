function mostrar()
{
	 	var numerosPares=0;
	 	var numero;
	 	var contador;
	 	numero=prompt("Ingrese un numero.");
		numero=parseInt(numero);

	  for (contador=numero;contador>0;contador--)
	  {
			
			    if (contador %2 == 0){
			            document.write(" "+contador+" ");
			            numerosPares++;
			    }
			  

	  
    }
    document.write("<br>"+"Cantidad de números pares: "+numerosPares);


}//FIN DE LA FUNCIÓN
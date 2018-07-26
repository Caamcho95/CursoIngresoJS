function mostrar()
{
	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;
	while(respuesta=='si')
	{
		contador++;
		numero=prompt("ingrese un numero");
		acumulador=acumulador+parseInt(numero);
		respuesta=prompt("desea continuar, si o no");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
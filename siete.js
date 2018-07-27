function mostrar()
{
	var sexo;
	var promedio;
	var nota;
	var minimaNota;
	var contador=0
	var contadorNota=0;
	var promedioNotas;
	var acumuladornota=0;
	var contadorVarones=0;

	while(contador<3)
	{
		nombre = prompt("Ingrese nombre");
		sexo = prompt("Ingrese Sexo f o m");
		
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("reingrese sexo");
		}

		nota = prompt("ingrese nota")
		nota = parseInt(nota);

		while(nota<0 || nota>10)
		{
			nota = prompt("REingrese nota")
			nota = parseInt(nota);

		}
		if(nota >= 6 && sexo == "m")
		{
			contadorVarones++
		}

		acumuladornota= acumuladornota+nota

		contador++
		contadorNota++

	}

	promedioNotas=acumuladornota/contadorNota;
	alert(promedioNotas);
	alert(contadorVarones);
}
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
	var minimaNotaSexo;

	while(contador<5)
	{	
		contador++
		nombre = prompt("Ingrese nombre");
		sexo = prompt("Ingrese Sexo f o m");
		
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("reingrese sexo");
		}

		nota = prompt("ingrese nota")
		nota = parseInt(nota);

		while(isNaN(nota)||nota<0 || nota>10)
		{
			nota = prompt("REingrese nota")
			nota = parseInt(nota);

		}
		if(contador==1)
		{
			minimaNota=nota;
			minimaNotaSexo=sexo;
		}
		else
		{
			if(nota<minimaNota)
			{
				minimaNota=nota;
				minimaNotaSexo=sexo;
			}
		}
		if(nota >= 6 && sexo == "m")
		{
			contadorVarones++
		}

		
		acumuladornota= acumuladornota+nota;

		
		

	}

	promedioNotas=acumuladornota/contador;
	alert("El promedioa de las notas es "+promedioNotas);
	alert("La cantidad de varones con una nota mas de 6 es "+contadorVarones);
	alert("La nota mas baja es "+minimaNota+ " Y el sexo es "+minimaNotaSexo);
}
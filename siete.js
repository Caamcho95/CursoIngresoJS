function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var nota;
	var peorNota
	var peroNotaSexo
	var contador;
	var mejorNota;
	var masviejo
	var nombreMasViejo
	var masChico;
	var masChicoNota

	contador=0

	while(contador<7)
	{
		contador++
		nombre = prompt("Ingrese nombre");
		sexo = prompt("Ingrese sexo m o f");
		while(sexo != "f" && sexo!="m")
		{
			sexo=prompt("Reingrese sexo");
		}
		edad = prompt("Ingrese edad");
		while(isNaN(edad)||edad>100 ||edad<=0)
		{
			edad = prompt("Reingrese edad");
		}
		nota = prompt("Ingrese nota");
		while(isNaN(nota)||nota>10||nota<0)
		{
			nota=prompt("Reingrese nota");
		}
		

		if(contador==1)
		{
			peorNota = nota
			peroNotaSexo=nombre

			masviejo=edad
			nombreMasViejo=nombre

			masChico=edad
			masChicoNota=nota


		}
		else
		{
			if(nota<peorNota)
		{
			peorNota=nota;
			peroNotaSexo=sexo

		}
		if(edad>masviejo)
		{
			masviejo=edad
			nombreMasViejo=nombre
		}
		if(edad<masChico)
		{
			masChico=edad
			masChicoNota=nota
		}
		}
	}
	document.write("la peor nota es "+peorNota+ " y el sexo es "+peroNotaSexo)
	document.write("<br>"+"La edad del mas viejo es "+masviejo+ " Y el nombre es "+nombreMasViejo)
	document.write("<br>"+"La edad del mas chico es "+masChico+ " Y su nota es "+masChicoNota)


}

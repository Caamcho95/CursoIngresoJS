function mostrar()
{
	var dia;

	dia= prompt("Ingrese dia");

	if(dia=="domingo"||dia=="sabado")
	{
		alert("Buen finde");
	}
	else
	{
		if(dia=="lunes"||dia=="martes"||dia=="miercoles"||dia=="jueves"||dia=="viernes")
		{
			alert("A trabajar");
		}
		else
		{
			alert("el dia no existe");
		}
	}
}

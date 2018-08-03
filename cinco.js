function mostrar()
{
	var dia;
	var mensaje;

	dia= prompt("Ingrese dia");


	switch(dia)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			mensaje="A trabajar";
			break;
		case "sabado":
		case "domingo":
			mensaje="Buen findes";
			break;
		default:
			mensaje="el dia no es valido";

		
	}
	alert(mensaje)
}
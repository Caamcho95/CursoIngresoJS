function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota = Math.floor(Math.random() * 10) + 1

	if(nota >= 9)
	{
		alert("Exelente "+ nota);
	}
	else if(nota >3 && nota <9)
	{
		alert("Aprobo "+nota);
	}
	else
	{
		alert("Vamos que la proxima se puede "+nota);
	}

}//FIN DE LA FUNCIÓN
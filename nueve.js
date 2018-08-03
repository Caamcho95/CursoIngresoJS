function mostrar()
{
	var peso;
	var temperatura;
	var nombre;
	var contadorTemperaturaPares=0;
	var respuesta="si";
	var contador=0;
	var masPesado;
	var masPesadoNombre
	var masPesadoTemperatura;
	var contadorAnimalesCero=0;
	var sumaDePeso;
	var promedioPeso
	var pesominimoBajoCero
	var pesomaximoBajoCero
	var banderaDelprimerbajocer=0

	while(respuesta!="no")
	{
	contador++
	nombre=prompt("Ingrese nombre");
	
	peso=prompt("Ingrese peso");
	peso= parseInt(peso);
	while(isNaN(peso)|| peso<0 || peso>100)
	{
		peso=prompt("REIngrese peso");
	}

	temperatura=prompt("Ingrese temperatura");
	temperatura= parseInt(temperatura);
	sumaDePeso=sumaDePeso+peso
	while(isNaN(temperatura)|| temperatura<-30 || temperatura>30)
	{
		temperatura=prompt("REIngrese temperatura");
	}
	if(temperatura%2==0)
	{
		contadorTemperaturaPares++
	}
	if(contador==1)
	{
		masPesado=peso
		masPesadoNombre=nombre
		masPesadoTemperatura=temperatura
	}
	else
	{
	if(peso>masPesado)
	{
		masPesado=peso
		masPesadoNombre=nombre
		masPesadoTemperatura=temperatura
	}
	}
	if(temperatura<0)
	{
		contadorAnimalesCero++
		if(banderaDelprimerbajocer==0)
		{
			banderaDelprimerbajocer=666
			pesominimoBajoCero=peso
			pesomaximoBajoCero=peso
		}
		else
		{
			if(peso<pesominimoBajoCero)
			{
				pesominimoBajoCero=peso
			}
			if(peso>pesomaximoBajoCero)
			{
				pesomaximoBajoCero=peso
			}
		}

	}
	promedioPeso=sumaDePeso/contador
	respuesta=prompt("Quiere continuar si/no")
	}
}

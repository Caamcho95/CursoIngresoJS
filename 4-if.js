//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1
	var num2
	var resultado

	num1=prompt("Ingrese numero1");
	num2=prompt("ingrese numero2");

	num1=parseInt(num1);
	num2=parseInt(num2);

	if(num1 == num2){alert(resultado = num1*num2);}
	else{
		if(num1 > num2){alert(resultado = num1-num2);}
		else{document.write(resultado = num1+num2);}
	}
	
}


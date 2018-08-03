
function mostrar()
{
	var base;
	var altura;
	var superficie;
	var perimetro;

	base=prompt("Ingresar base");
	base=parseInt(base);
	altura=prompt("ingrese altura");
	altura=parseInt(altura);

	superficie=(base*altura)/2;
	perimetro=base*3;

	alert("La superficie es "+superficie+ " y el perimetro es "+perimetro);


}

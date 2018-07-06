/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var ingreso;
	var resultado;
	var resultadoFinal;

	ingreso = document.getElementById('sueldo').value;

	ingreso = parseInt(ingreso);

	resultado = ingreso * 10 /100;
	resultadoFinal = resultado+ingreso;

	document.getElementById("resultado").value = resultadoFinal;
}

function mostrar()
{
	var precio;
	var descuento;
	var descuentoDinero;
	var precioDescuento
	var iva=21
	var ivaDescuento
	var precioFinal

	
	precio=prompt("Ingrese precio");
	precio=parseInt(precio);
	descuento=prompt("Ingrese descuento");
	descuento=parseInt(descuento);

	descuentoDinero=(precio*descuento)/100
	precioDescuento=precio - descuentoDinero;
	precioIva=(precioDescuento*iva)/100

	precioFinal=precioDescuento+ precioIva

	alert("El descuento es "+descuentoDinero)
	alert("El precio con descuento es "+precioDescuento);
	alert("El iva es "+precioIva)
	document.getElementById('elPrecioFinal').value = precioFinal







}

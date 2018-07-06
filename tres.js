function mostrar()
{
	var precio;
	var descuento;
	var precioDescuento;
	var precioIva;
	var precioFinal;
	var precioFinalIva;

	precio = prompt("Ingresar Precio");
	descuento = prompt("Ingresar el descuento");

	precio = parseInt(precio);
	descuento = parseInt(descuento);

	precioDescuento = (precio * descuento)/100;

	precioFinal = precio - precioDescuento;

	precioIva = precio*0.21;

	precioFinalIva = precioFinal+precioIva;

	alert("El descuento en dinero es "+precioDescuento+" El precio con el descuento es "+ precioFinal+" El IVA es "+precioIva);

	document.getElementById('elPrecioFinal').value = precioFinalIva;







}

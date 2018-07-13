/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lampara;
 	var precio;
 	var precioFinal;
 	var descuento;
 	var cantidad;
 	var precioDescuento;
 	var marca;
 	var precioBruto;

 	lampara = 35
 	cantidad = document.getElementById('Cantidad').value;
 	document.getElementById('precioDescuento').value = precioDescuento;
 	marca = document.getElementById('Marca').value;

 	precio = parseInt(precio);
 	cantidad = parseInt(cantidad);
 	precioFinal = parseInt(precioFinal);
 	descuento = parseInt(descuento);
 	precioDescuento =parseInt(precioDescuento);

 	precioFinal=lampara*cantidad

 	if(cantidad>=6)
 	{
 		precioDescuento=precioFinal*0.50
 		document.getElementById("precioDescuento").value=precioDescuento;
 	}
 	else
 	{
 		if (cantidad==5 && marca=="ArgentinaLuz") 
 		{
 			precioDescuento=precioFinal*0.60
 			document.getElementById("precioDescuento").value=precioDescuento;
 		}
 		else
 		{
 			if (cantidad==5)
 			{
 				precioDescuento=precioFinal*0.70
 				document.getElementById("precioDescuento").value=precioDescuento;
 			}
 			else
 			{
 				if (cantidad==4 && marca=="ArgentinaLuz"|| marca=="FelipeLamparas")
 				 {
 				 	precioDescuento=precioFinal*0.75
 					document.getElementById("precioDescuento").value=precioDescuento;
 		
 				 }
 				 else
 				 {
 				 	if (cantidad==4) 
 				 	{
 				 		precioDescuento=precioFinal*0.80
 						document.getElementById("precioDescuento").value=precioDescuento;
 				 	}
 				 	else
 				 	{
 				 		if (cantidad==3 && marca=="ArgentinaLuz") 
 				 		{
 				 			precioDescuento=precioFinal*0.85
 							document.getElementById("precioDescuento").value=precioDescuento;
 				 		}
 				 		else
 				 		{
 				 			if (cantidad==3 && marca=="FelipeLamparas") 
 				 			{
 				 				precioDescuento=precioFinal*0.90
 								document.getElementById("precioDescuento").value=precioDescuento;
 				 			}
 				 			else
 				 			{
 				 				if (cantidad==3) 
 				 				{
 				 					precioDescuento=precioFinal*0.95
 									document.getElementById("precioDescuento").value=precioDescuento;
 				 				}
 				 			}
 				 		}
 				 	}
 				 }
 			}
 		}

 	}

 	if(precioDescuento>=120)
 	{
 		precioBruto=precioDescuento*1.10;
 		alert("Uste pago" +precioDescuento+ " ,siendo "+precioBruto+ "el impuesto que pago");
 	}
 }
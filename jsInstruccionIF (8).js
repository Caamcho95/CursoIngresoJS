function Mostrar()
{
//tomo la edad  
var edad;
var civil;

edad = document.getElementById("edad").value;
civil = document.getElementById("estadoCivil").value;

if(edad < 18 && civil != "Soltero"){}
else{
    if(edad >= 18 && civil == "Soltero"){
        alert("Es soltero y no es menor");
    }
}
	


}//FIN DE LA FUNCIÓN
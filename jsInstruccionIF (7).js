function Mostrar()
{
//tomo la edad  
var edad
var civil
edad=document.getElementById("edad").value;
civil=document.getElementById("estadoCivil").value;

if(edad < 18 && civil != "Soltero"){
    alert("es muy pequeño para no ser soltero");}

	


}//FIN DE LA FUNCIÓN
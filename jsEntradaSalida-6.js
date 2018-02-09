/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    //1) Variables
    var numeroUno;
    var numeroDos;
    var resultado;
//Ingresar los Datos
    numeroUno=document.getElementById("numeroUno").value;
    numeroDos=document.getElementById("numeroDos").value;
    //Lo qu tienen que hacer los datos
    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
    
    resultado=numeroUno+numeroDos;
    //Mostrar
    alert(resultado);

}


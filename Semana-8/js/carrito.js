function getData(){
    /*
        Verificar que la cantidad y llamar a la funcion "ingresar"
    */
    var cantidad = parseInt(document.getElementById("cantidad-id").value);
    if (cantidad >0 && cantidad < 11){
        ingresar();
    }
    else{
        alert("Error Verifique la cantidad (Recuerda debe de ser un numero entre 1 -10)");
    }
}
function obtener_precio(){
    /*
        Sacar el Valor del Producto
    */
    var producto = document.getElementById("menu-id").value;
    if (producto == "Cerveza") 
        valor = "20";
    else if (producto == "Brandy") 
        valor = "152";
    else if (producto == "Ginebra") 
        valor = "200";
    else if (producto == "Cordiales") 
        valor = "300";
    else if (producto == "Mezcal") 
        valor = "350";
    else if (producto == "Tequila") 
        valor = "40";
    else if (producto == "Vodka") 
        valor = "200";
    else if (producto == "Whiskey") 
        valor = "700";
    else{
        alert("Seleccione producto")
        valor = 0
    }
    return parseInt(valor);
}
function ingresar() {
    /*
        extracion de datos
    */
    var cantidad = parseInt(document.getElementById("cantidad-id").value);
    var precio = parseInt(document.getElementById("valor-id").value);
    var producto = document.getElementById("menu-id").value;
    var text = document.getElementById("textarea-id").value;

    //Llamada de funcion

    valor = obtener_precio();

    //Calculo
    
    p_precio = cantidad * valor
    precio = precio + p_precio
    

    //Formato del Texto

    if (valor != 0)
        formato = text + "Cantidad: " + cantidad +" Producto: "+ producto+ " Precio: $"+ valor+ " Total: $"+ p_precio+"\n"
    
    //Poner los valores visibles en html

    document.getElementById("valor-id").value =eval (precio);
    document.getElementById("textarea-id").value = formato;

    //Limpiar el input y el text area

    document.getElementById("clear-id").onclick =  function(){
        answer = confirm("¿Desea Restablecer los valores?")
        if (answer == true){
            precio = 0;
            document.getElementById("valor-id").value =eval (precio);
            document.getElementById("textarea-id").value = "";
        }

    };
}
//Materialize
$(document).ready(function(){
    $('select').formSelect();
});
function enviarPHP() {
  var precio = parseInt(document.getElementById("valor-id").value);
  var text = document.getElementById("textarea-id").value; 
}
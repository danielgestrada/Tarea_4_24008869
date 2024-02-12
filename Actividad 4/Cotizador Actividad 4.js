//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%


//Recargo
var recargo = 0
var recargo_total = 0
var recargo_total_total = 0

//Precio final 
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")

var casado = prompt("¿Está casado actualmente?")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyugue
if("SI" == casado.toUpperCase()){
  edad_conyugue = prompt("¿Que edad tiene su esposo/a?")
}else {
  edad_conyugue_numero = 0
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyugue_numero = parseInt(edad_conyugue)
//convirtiendo la edad del cónyuge si se esta casado/a


var hijos = prompt("¿Tiene hijos o hijas?")
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("¿Cuantos hijos tiene?")
  cantidad_hijos_numero = parseInt(cantidad_hijos)
}else {
  cantidad_hijos_numero = 0
}

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}else if(edad_numero>=25 && edad_numero<50){
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
}else if(edad_numero>=50){
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo
}

var recargo_conyugue = 0
var recargo_conyugue_total = 0

if(edad_conyugue_numero>=18 && edad_conyugue_numero<25){
  recargo_conyugue = precio_base * casado_18
  recargo_conyugue_total = recargo_conyugue_total + recargo_conyugue
}else if(edad_conyugue_numero>=25 && edad_conyugue_numero<50){
  recargo_conyugue = precio_base * casado_25
  recargo_conyugue_total = recargo_conyugue_total + recargo_conyugue
}else if(edad_conyugue_numero>=50){
  recargo_conyugue = precio_base * casado_50
  recargo_conyugue_total = recargo_conyugue_total + recargo_conyugue
}

var recargo_hijos = 0
var recargo_hijos_total = 0

if(cantidad_hijos_numero>0){
  recargo_hijos = precio_base * hijos_recargo
  recargo_hijos_total = recargo_hijos_total + recargo_hijos
}


recargo_total_total = recargo_total + recargo_conyugue + recargo_hijos
precio_final = precio_base + recargo_total_total

alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total_total)
alert ("El precio sera de: "+precio_final)
/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

const { saludo } = require("../M04 JavaScript Bucles/homework")

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if (num > 0) {
     return "Es positivo"
   } else if (num < 0) {
 return  "Es negativo"
   }else{
      return false
   }
}

esPositivo(49)
esPositivo(-1)
esPositivo(0)





function agregarSimboloExclamacion( str = "feid es el mejor reguetonero del mundo") {

   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
 
       return str + "!"
}
agregarSimboloExclamacion()

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
 
   
   return nombre + " " + apellido
}
combinarNombres("soy roque", "coronel")

function obtenerSaludo( nombre = "Ezequiel") {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
  
   let string = "Hola "
   return  string +  nombre + "!"
 
}
obtenerSaludo()

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
  
   return alto * ancho
}
obtenerAreaRectangulo(40,40)

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:

   return lado * 4
}
retornarPerimetro(5)

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
    
   return  base * altura / 2
}
areaDelTriangulo(6,6)

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   return euro * 1.20
}
deEuroAdolar(2)

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   if(letra.length !== 1) {
      return "Dato incorrecto";
    }
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    if(vocales.includes(letra.toLowerCase())) {
      return "Es vocal";
    }
    return "Dato incorrecto";
  }
  esVocal('B')  
  esVocal('ab')
  esVocal('E')
  esVocal('u')
 
  
  
   
 

   


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};

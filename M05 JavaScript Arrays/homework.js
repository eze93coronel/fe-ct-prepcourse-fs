/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   
   return array.shift();
}
devolverPrimerElemento(['MANZANAS','BANANAS','MELONES'])

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop()
}
devolverUltimoElemento(['MANZANAS','BANANAS','MELONES'])

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   
   return array.length
}
obtenerLargoDelArray( ['MANZANAS','BANANAS','MELONES','zanahorias'])



function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

  
for(let i=0; i < array.length ; i++) {
   array[i] = array[i] + 1
}
 
     return array

}
incrementarPorUno([1,2,3,4,5])

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   

 array.push(elemento);
  return array
  
}
agregarItemAlFinalDelArray( ['anana','manzana',])
function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento)
   return array
}
agregarItemAlComienzoDelArray(['pc','lavarropas'])

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

       
   let frase = palabras.join(' ')
     
   return frase
}

dePalabrasAFrase(["!que" , "onda!!", 'aca aprendiendo']) 
function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
  for(let i = 0; i < array.length; i++) {
      if(array[i] === elemento) {
         return true;
      }
  }
return false;

}

arrayContiene([1,2,3])
function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.cls

   // Tu código:
   let result = 0
   
   arrayOfNums.forEach(num => {
      result += num
   })
   return result
}

agregarNumeros([1,2,3,4,5,6])

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let acumulado = 0
   for(let j = 0; j < resultadosTest.length; j++) {
      acumulado = acumulado + resultadosTest[j]
   }
   return acumulado / resultadosTest.length
}

promedioResultadosTest([10,15,20])
function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   let acumulado = 0
   for(let i = 0; i < arrayOfNums.length; i++) {
      if(arrayOfNums[i] > acumulado){
         acumulado = arrayOfNums[i]
     }
   }
  

   return acumulado
}
numeroMasGrande([1,2,4,5,7,8])

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
 let   acumulador = 1
   if(arguments.length === 0) {
      return 0
   }else if (arguments.length === 1) {
          return arguments[0]
   }else {
      for (let i = 0; i < arguments.length; i++) {
          acumulador = acumulador  * arguments[i]
      }
   }
   return acumulador
}
multiplicarArgumentos([7,5,8])

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let numeros = 0
   for(let i = 0; i < array.length; i++) {
      
      if(array[i] > 18){
         numeros += 1
      }
   }
   return numeros
}
cuentoElementos([12,18,19,33,45,67])
function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia === 1 || numeroDeDia === 7){
       return "Es fin de semana"
       
      }else if(numeroDeDia > 1 && numeroDeDia < 7){
         return "Es dia laboral"
      }else{
           return "No es un numero correspondiente a un dia de la semana"
      }
}
diaDeLaSemana()
function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
    let number = num.toString();
    if(number[0] === "9") {
        return true;
    }else {
        return false;
    }
}

empiezaConNueve(999)
empiezaConNueve(899)

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for(let i = 0; i < array.length  - 1; i++) {
        if(array[i] !== array[i + 1]) {
         return false;
        }
   }
   return true;
}

todosIguales([3,3,3])

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   arrayResult = [];
   for(let i = 0; i < array.length; i++) {
       if(array[i] === "Enero" || array[i] === "Marzo"  || array[i] === "Noviembre"){
         arrayResult.push(array[i]);
       }
   }
   if(arrayResult.length  === 3){
       return arrayResult
   }else{
       return "No se encontraron los meses pedidos"
   }
}
mesesDelAño(["Enero","Marzo","Mayo","junio", "Julio","Noviembre"])
function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let array = []
   for(let i = 0; i < 11; i++) {  
      array.push( i * 6 )
   }
   return array
}
tablaDelSeis()
function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let newArray = [];
   for(let i = 0; i < array.length; i++) {
     if(array[i] > 100) {
        newArray.push(array[i]);
     }
   }

   return newArray;
}
mayorACien([101,2,34,178,190])
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   let arrayNumbers = [];
   let sum = num 
   for(let i = 0; i < 10; i++) {
      sum = sum + 2
      if(sum === i ){
          break;
      }else{
          arrayNumbers.push(sum);
      }
   } 
   if(arrayNumbers.length < 10){
      return "Se interrumpió la ejecución"
   }else if(arrayNumbers.length === 10){
       return arrayNumbers
   }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let arrayNumber = [];
   let sumar = num
   for(let i = 0; i < 10; i++){
       if(i === 5){
          continue;
       }else{
         sumar = sumar + 2
         arrayNumber.push(sumar);
       }
   }
   return arrayNumber
}
console.log(continueStatement(10))
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

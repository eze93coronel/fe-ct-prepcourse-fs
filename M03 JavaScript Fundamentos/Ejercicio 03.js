/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   
   if(x === y){
      return true
   } else if (x != y){
      return false
   }
}
sonIguales(20 === 30)
sonIguales(20 != '30')



function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
 if(str1.length === str2.length) {
  return true
 }else {
       return false
 }
     
   
  
}

tienenMismaLongitud('hola','hola')
tienenMismaLongitud('holaaaa','holaaaaaaaaaaaa')




function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   if(num < 90){
      return true;
   }else (num > 90)
      return false
   
}
menosQueNoventa(70)
menosQueNoventa(100)
function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   if(num > 50){
      return true
   }else {
      return false
   }
   
}
mayorQueCincuenta(80)
mayorQueCincuenta(40)

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 2 === 0) {
      return true;
   }else {
      return false
   }
 
} 
esPar(16)
esPar(13)

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   if(num % 2 === 1){
      return true
   }else{
      return false
   }
}
esImpar(13)
esImpar(10)
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};

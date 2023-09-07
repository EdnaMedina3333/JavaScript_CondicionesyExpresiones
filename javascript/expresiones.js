console.log("Estoy vivo");

/*
Operador
Elemento que nos permite realizar una operación entre dos o más elementos.

-Aritméticos (+, -, *, /)
-De asignación (= asignación)
-De cadenas (toLowerCase, toUpperCase, trim, toString, concat)
-Lógicos (&&, ||, !)
-De comparación (<, >, <=, >=, == igualdad, === igualdad estricta)
*/

/*Operadores aritméticos: son operadores que nos permiten tomar valores numéricos como sus operandos y retornar un valor númerico único. Corresponden a operaciones matemáticas.*/

//Suma (+): Se utiliza para sumar números
let resultado = 5 + 3; //resultado contendrá el valor 8

//Resta (-): Se utiliza para restar un número de otro
let resultado1 = 10 - 4; //resultado1 contendrá el valor 6

//Multiplicación (*): se utiliza para multiplicar dos números
let resultado2 = 6 * 3; //resultado2 contendrá el valor 18

//División (/): Se utiliza para dividir un número por otro. La división por cero produce un valor especial llamado "infinity" (infinito).
let resultado3 = 15 / 3; //resultado3 contendrá el valor 5

//Módulo (%): Se utiliza para obtener el resto de una división entre dos números
let resultado4 = 10 % 3; //resultado4 contendrá el valor 1 (el resto de 10 dividido por 3)

//Incremento (++): Se utiliza para aumentar en 1 el valor de una variable
let numero = 5;
numero++; //ahora numero contendrá el valor 6

//Decremento (- -): Se utiliza para disminuir en 1 el valor de una variable
let numero1 = 8;
numero1--; //ahora numerp1 contendrá el valor 7

//Doble igual - igualdad abstracta
5 =="5" //true, ya que javascript convierte la cadena "5" a un número antes de la comparación

//Triple igual - igualdad estricta
5 === "5" //false, porque no son del mismo tipo y los tipos también son diferentes


/*
Ejercicio de un programa que convierta de grados celsius a farenheit
Fórmula: (0 °C × 9/5) + 32 = 32 °F
*/

let gradosC = 25; 
let gradosF = (gradosC * 9/5) + 32;
console.log (gradosF)

//Código de Toño que me gustó y lo voy a guardar
/*function conversionGrados (celsius){
    let gradosF = (celsius * 9 / 5) + 32; //gradosF significa grados farenheit
    return gradosF;
}
console.log (conversionGrados (prompt("Ingresa grados Celcius")));
*/



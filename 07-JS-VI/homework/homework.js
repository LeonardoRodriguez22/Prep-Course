// Do not change any of the function names

function mayuscula(nombre) {
  
  return nombre[0].toUpperCase() + nombre.substring(1);

  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
}

function invocarCallback(cb) {
 
 cb();
  // Invoca al callback `cb`
  //Tu código:
}

function operacionMatematica(n1, n2, cb) {
  
  cb(n1,n1);
  
  
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
}

function sumarArray(numeros, cb) {
 
  var total = 0;
  
  for(let i = 0; i < numeros.length; i++){
    total += numeros[i];
  }
  cb(total);

  // var total = numeros.reduce((a, b) => (a + b), 0);
  
  // var total = numeros.reduce(function(a, b){
  //return (a + b)
  //, 0}  
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
}

function forEach(array, cb) {
 
  // for(var i=0; i < array.length;i++){
    // cb(array[i]);
  // }


 array.forEach(function(a){
    cb(a);
 });

  //array ---> [1, 2, 3, 4]
  //
 
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
}

function map(array, cb) {
  
  var newArray = array.map(function(elemento){
    return cb(elemento);
  })
  return newArray;

  
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
}

function filter(array) {
  
  var newArray = array.filter(function(e){
    return e[0] === "a";
  });

  return newArray;
  
  // function igual(e){
  //   return e.charAt(0) === "a";
  // }
  
  // return array.filter(igual);
  //return.array.filter(function(e){
    //return e.charAt(0) === "a";
  //}):
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};

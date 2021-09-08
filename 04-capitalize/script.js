/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  if (str !== '' && str !== ' ') {
    const arr = str.trim().split(/\s{1,}/g);
    const result = arr.map((element) => {
      return element[0].toUpperCase() + element.substr(1);
    });
    return result.join(" ");
  
  } else {
    return str;
  }
} 


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('слово '));
console.log(capitalize('молодость  всё  простит'));






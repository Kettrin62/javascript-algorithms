/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
  //debugger;
  let arr = [];
  for (let i = 2; i <= num; i++) {
    arr.push(i);
  };
  
  
  arr.forEach(item => {
    for (let j = item**2; j <= num; j += item) {
      arr = arr.filter(elem => {
        return elem !== j;
      })
    }
  })
  for (let j = 2; j <= num; j++) {
    arr = arr.filter(item => {
      if (item === 2 || item === 3) {
        return item;
      } else if (item % j !== 0) {
        return item;
      }
    });
    console.log(arr);
    return arr;
  };
  return arr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]

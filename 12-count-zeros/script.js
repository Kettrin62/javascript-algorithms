/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
  let countHundred = 0;
  let countTen = 0;
  let i = n;
  while ((i - 100) >= 0) {
    countHundred ++;
    i = i - 100;
  };
  while ((i - 10) >= 0) {
    countTen ++;
    i = i - 10;
  };
  if (n > 100) {
    return countHundred * 20 + countTen;
  } if (n === 100 ) {
    return countHundred * 20 - 9;
  } else return countTen;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100


/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
  const arr = [0, 1];
  if (n > 2) {
    for (i=2; i<=n; i++) {
      arr.push(arr[i-1]+arr[i-2]);
    };
  } if (n === 0) return 0;
  return arr[n-1];
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)
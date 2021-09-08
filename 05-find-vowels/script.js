/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {
  const strVow = 'аяоёуюыиэе';
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (strVow.includes(str[i].toLowerCase())) {
      result++;
    };
  };
  return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здрАвствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3
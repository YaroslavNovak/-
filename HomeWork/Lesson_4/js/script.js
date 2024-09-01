/*---1---
Перепишіть функцію, використовуючи '?' або '||'*/

/*function checkAge(age) {
  if (age > 18 || age === 18) {
    return true;
  } else {
    return confirm("Батьки дозволили?");
  }
}
console.log(checkAge(18));*/

/*---2---
  Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.*/

/*function minNumber(a, b) {
  if (a > b) {
    return confirm("Найменше число: " + b);
  } else {
    return confirm("Найменше число: " + a);
  }
}
console.log(minNumber(60, 25));*/

/*---3---
Перепишіть з використанням стрілкових функцій

Замініть Функціональні Вирази на стрілкові функції у коді нижче:*/

/*function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Ви згодні?",
  function () {
    alert("Ви погодились.");
  },

  function () {
    alert("Ви скасували виконання.");
  }
);*/

/*function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(
  "Ви згодні?",
  () => alert("Ви погодились."),
  () => alert("Ви скасували виконання.")
);*/

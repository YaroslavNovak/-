//--1--
//1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
//бал і кількість пропущених занять
//2) написати метод який буде виводити цю інформацію

/*function user() {
  console.log("Student", this);
}

user();

const student = {
  name: "Yaroslav",
  specialty: "teacher",
  avengar_bal: 85,
  missed: 5,
  seyUser: user,
};

student.seyUser();*/

//3) написати три варіанти студентів
//4) прикріпити знначення за допомогою call apply bind
//В мене нажаль не спрацьовує чомусь this і я до кінця не зрозумів мені потрібно використати усі три знначення call apply bind
// чи можна лише одне
// function group() {
//   console.log(this);
// }

// const student = {
//   name: "Yaroslav",
//   specialty: "teacher",
//   avengar_bal: 85,
//   missed: 5,
//   group: group,
//   sayGroupWindow: group.bind(window),
//   info: function () {
//     console.log("Name is, $ {this.name}");
//     console.log("Specialty is $ {this.specialty} ");
//     console.log("Average mark $ {this.avengar_bal} ");
//     console.log("The number of missed classes $ {this.missed} ");
//   },
// };

// const student1 = {
//   name: "Natalya",
//   specialty: "teacher",
//   avengar_bal: 90,
//   missed: 3,
// };
// const student2 = {
//   name: "Nazarii",
//   specialty: "programmer",
//   avengar_bal: 93,
//   missed: 6,
// };
// const student3 = {
//   name: "Timofii",
//   specialty: "doctor",
//   avengar_bal: 98,
//   missed: 0,
// };
// student.info.bind(student1)();
// student.info.bind(student2)();
// student.info.bind(student3)();

//--2--
//Написати дві кнопки і закріпити на них функції
//при натисканні на кнопку html - має видати коротке визначення що це таке
//при натисканні на кнопку css - має видати коротке визначення що це таке

// const description = {
//   showItems() {
//     console.log("Опис:", this.items);
//   },
// };
// const html = {
//   items: [
//     "HTML — стандартизована мова розмітки документів для перегляду вебсторінок у браузері.",
//   ],
// };

// const css = {
//   items: [
//     "CSS —  спеціальна мова, що використовується для запису оформлення сторінок, написаних мовами розмітки даних.",
//   ],
// };
// document
//   .querySelector("#html")
//   .addEventListener("click", description.showItems.bind(html));
// document
//   .querySelector("#css")
//   .addEventListener("click", description.showItems.bind(css));

//--3--
//Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
//функція має повертати назву товару і вартість
//перевірити на варіантах:

//1) banana 30, 4,5

//2) cherry 58, 1,3

//3) jrange 89. 3,4
//-------
// const products = [
//   { name: "banana", price: 30, quantity: 4.5 },
//   { name: "cherry", price: 58, quantity: 1.3 },
//   { name: "jrange", price: 89, quantity: 3.4 },
// ];
// let nameNew = products.map(
//   (item) => item.name + ": " + item.price * item.quantity
// );

// console.log(nameNew);

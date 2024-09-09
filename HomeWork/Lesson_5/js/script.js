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

function list() {
  console.log(this);
}

const student = {
  name: "Yaroslav",
  specialty: "teacher",
  avengar_bal: 85,
  missed: 5,
  list: list,
  sayListWindow: list.bind(window),
  info: function () {
    console.log("Name is ${this.name}");
    console.log("Specialty is ${this.specialty}");
    console.log("Average mark ${this.avengar_bal}");
    console.log("The number of missed classes ${this.missed}");
  },
};

const student1 = {
  name: "Natalya",
  specialty: "teacher",
  avengar_bal: 90,
  missed: 3,
};
student.info.bind(student1)();
//4) прикріпити знначення за допомогою call apply bind

//--2--
//Написати дві кнопки і закріпити на них функції
//при натисканні на кнопку html - має видати коротке визначення що це таке
//при натисканні на кнопку css - має видати коротке визначення що це таке

//--3--
//Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
//функція має повертати назву товару і вартість
//перевірити на варіантах:

//1) banana 30, 4,5

//2) cherry 58, 1,3

//3) jrange 89. 3,4

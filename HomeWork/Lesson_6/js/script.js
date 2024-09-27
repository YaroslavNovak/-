// Створити телефонну книгу
// - створити початковий клас Abonent, де зберігатимуться ім*я і номер
// - створити set який прийматиме телефон і номер
// - створити get який виводитиме данні про абонента
// - створити три різних юзери
// - вивести данні
//------

class Abonent {
  constructor(options) {
    this.name = options.name;
    this.tel = options.tel;
  }
  firstName = "";
  lastName = "";

  set name(newName) {
    const nameRow = newName.split(" ");
    this.firstName = nameRow[0];
    this.lastName = nameRow[1];
  }
  get name() {
    return "First name: ${ this.firstName } last name: ${this.lastName} and mobile tel: ${this.mobTel}";
  }
}
const Yarik = new Abonent({
  name: "Yaroslav Novak",
  tel: 380956558612,
});
const Nata = new Abonent({
  name: "Natalya Novak",
  tel: 380962385790,
});
const Nazar = new Abonent({
  name: "Nazarii Novak",
  tel: 380989662389,
});

console.log(Yarik);
console.log(Nata);
console.log(Nazar);

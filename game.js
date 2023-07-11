window.addEventListener("DOMContentLoaded", () => {
  const app = new App();
});
let userStorage = [];
let imageStorage = [];
let show = document.querySelector(".showUserStorage");
let charImage = document.querySelector(".charImage");
const select = document.querySelector(".select");

const Chars = {
  Human: "./img/human.png",
  Dwarf: "./img/dwarf.png",
  Elf: "./img/Elf.png",
  Orc: "./img/orc.png",
};

let baseStrong = 10;
let baseAbility = 10;
let baseLife = 100;
let baseEnergy = 50;

let rowName = document.querySelector(".nameChar");
let rowRace = document.querySelector(".race");
let rowDateCreate = document.querySelector(".date");
let rowEnergy = document.querySelector(".energy");

class App {
  elementForm = document.forms[form]; // записываем в переменную форму из html документа
  form = new Form(form); // создает экземпляр класса Form
}

class Form {
  // Класс обработки формы
  constructor(form) {
    // В конструктор класса принимается форма
    this.form = form;
    this.elements = this.form.elements;
    this.eventListener(); // метод класса. Создается слушатель события submit. При совершении события срабатывает метод класса Form(createUser)
    this.setupInpDate(); //
  }
  elem = document.createElement("div");
  app = document.querySelector("body");

  setCharImage() {
    this.elements = this.form.elements;
    this.inputs = Array.from(this.elements);
    const [, charSet] = this.inputs;
    charImage.style.backgroundImage = `url(${Chars[charSet.value]})`;
    return Chars[charSet.value];
  }
  createUser(e) {
    e.preventDefault();
    this.inputs = Array.from(this.elements);
    const charImg = this.setCharImage();
    const user = new Character([
      ...this.inputs.map((item) => item.value),
      charImg,
    ]);
    rowName.innerHTML = `Имя пользователя: ${user.name}`;
    rowRace.innerHTML = `Раса персонажа: ${user.race}`;
    rowDateCreate.innerHTML = `Дата создания: ${user.createDate}`;

    console.log(user);
    userStorage.push(user);
    console.log(userStorage);
  }

  setupInpDate() {
    this.inputs = Array.from(this.elements).filter(
      (item) => item.tagName === "INPUT" || item.tagName === "SELECT"
    );
    const dateInp = this.inputs.filter((item) => item.type === "date")[0];
    const date = new Date();
    dateInp.value = `${date.getFullYear()}-0${date.getMonth()}-0${date.getDate()}`;
  }

  eventListener() {
    this.form.addEventListener("submit", this.createUser.bind(this));
    select.addEventListener("change", this.setCharImage.bind(this));
  }
}

class Character {
  constructor([name, fantasyRace, createDate]) {
    this.name = name;
    this.race = fantasyRace;
    this.createDate = createDate;
  }
}

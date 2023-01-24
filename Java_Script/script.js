/* Часть 1 */

let mercedes = {
    name: "Mercedes",
    model: "GL450",
    engine: "4.0",
    year: "2015",
    color: "black",
    hp: "300",
    forSale: true
};

let bmw = {
    name: "BMW",
    model: "X6",
    engine: "3.0",
    year: "2018",
    color: "white",
    hp: "313",
    forSale: false
};

let audi = {
    name: "Audi",
    model: "Q7",
    engine: "3.0",
    year: "2021",
    color: "blue",
    hp: "249",
    forSale: true
};

let currentYear = 2023;
mercedes.age = currentYear - mercedes.year;

bmw.age = currentYear - bmw.year;

audi.age = currentYear - audi.year;

let names = mercedes.name + " " + mercedes.model + ", " + bmw.name + " " + bmw.model + ", " + audi.name + " " + audi.model;

let averageAge = (mercedes.age + bmw.age + audi.age) / 3;

let atLeastOneForSale = (mercedes.forSale === true || bmw.forSale === true || audi.forSale === true) ? "Да" : "Нет";

let allYoungerThanFive = null;

if (mercedes.age < 5 && bmw.age < 5 && audi.age < 5) {
    allYoungerThanFive = "Да";
} else {
    allYoungerThanFive = "Нет";
}

let atLeastOneHasLittleHP = (mercedes.hp < 250 || bmw.hp < 250 || audi.hp < 250) ? "Да" : "Нет";

alert("Сейчас " + currentYear + " год");
alert("Марка и Модель всех автомобилей: " + names + ".");
alert("Средний возраст всех автомобилей " + averageAge + " лет");
alert("Хотя бы один автомобиль продается? " + atLeastOneForSale + "!");
alert("Все авто младше 5лет?  " + allYoungerThanFive + " !");
alert("Хоть один автомобиль имеет менее 250 лошадиных сил? " + atLeastOneHasLittleHP + " !");

/* Часть 2 */

let car = bmw;

if (car.name === "Mercedes" && car.model === "GL450") {
    alert("Мой любимый Мерседес!");
} else {
    alert("Это - " + car.name + " " + car.model);
}

if (car.age <= 0) {
    alert("Новый автомобиль");
} else if (car.age <= 3) {
    alert("Свежий автомобиль");
} else {
    alert("Лет этому авто: " + car.age);
}

let consumption=(car.engine<=3.0)?"Экономичный автомобиль":"Прожорливый автомобиль";
alert(consumption);

let russianColor = car.color;

switch (russianColor) {
    case "black":
        russianColor = "черный";
        break;
    case "silver":
        russianColor = "серебристый";
        break;
    case "red":
        russianColor = "красный";
        break;
    case "white":
        russianColor = "белый";
        break;
    case "gray":
        russianColor = "серый";
        break;
    case "blue":
        russianColor = "синий";
        break;
    default:
        russianColor = " Невозможно определить цвет автомобиля.";
}

alert(russianColor);
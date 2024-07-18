//1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль. +
const superLinkEll = document.getElementById("super_link");
console.log(superLinkEll);
//2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка". +
const cardLinkEll = document.querySelectorAll(".card-link");
cardLinkEll.forEach((element) => {
  element.textContent = "ссылка";
});
//3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.+
const cardBodyEll = document.querySelector(".card-body");
const cardLinkAll = cardBodyEll.querySelectorAll(".card-link");
cardLinkAll.forEach((element) => {
  console.log(element);
});
//4. Найти первый попавшийся элемент на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.+
const dataNumberEll = document.querySelector('[data-number="50"]');
console.log(dataNumberEll);
//5. Выведите содержимое тега title в консоль. +
const titleTeg = document.querySelector("title");
console.log(titleTeg);
//6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.+
const cardTitleEll = document.querySelector(".card-title");
console.log(cardTitleEll.parentElement);
//7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".+
const paragraphEll = document.createElement("p");
paragraphEll.textContent = "Привет";
const cardClass = document.querySelector(".card");
cardClass.prepend(paragraphEll);

//8. Удалите тег h6 на странице. +
const titleEll = document.querySelector(".mb-2").remove();

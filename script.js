// 1/1
document.title = "Ваше Имя Фамилия";

// 1/2
const header = document.getElementById("header");
const h1 = header.querySelector("h1");
h1.textContent = "Изучение JavaScript";

// 1/3
const menuLinks = document.querySelectorAll(".menu-link");
menuLinks.forEach(link => {
  console.log(link.textContent);
});

// 1/4
const featuresList = document.querySelectorAll(".features-list li");
if (featuresList[1]) {
  featuresList[1].innerHTML = "Поддержка <strong>API</strong>";
}



// 2/1
const infoSection = document.getElementById("info");
const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.textContent = "Введение в DOM";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "Создание элементов";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "Изменение атрибутов";
ul.appendChild(li3);

infoSection.appendChild(ul);

// 2/2
const headerElement = document.getElementById("header");
const link = document.createElement("a");
link.textContent = "Мой профиль в Linkedin";
link.href = "https://github.com/Rapier300dmg/my_new_index.html.git";
link.target = "_blank";

headerElement.appendChild(link);

// 2/3
const main = document.getElementById("main");
const section = document.createElement("section");
section.className = "dynamic";

const h2 = document.createElement("h2");
h2.textContent = "Обучение JavaScript";
section.appendChild(h2);

const p = document.createElement("p");
p.textContent = "Динамическое создание элементов позволяет улучшить интерфейс пользователя";
section.appendChild(p);

main.insertBefore(section, main.firstChild);

// 2/4
const firstParagraph = infoSection.querySelector("p");
if (firstParagraph) {
  infoSection.removeChild(firstParagraph);
}

// 2/5
const footer = document.getElementById("footer");
footer.innerHTML = "";

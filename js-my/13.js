// 1
// Створити калькурялтор вартості продукту взалежності від ціни.

// При роботі з подіями використовувати делагування. Відрендерити всю розмітку через JS
// При змінні данних в інпуті №1 чи №2 автоматично має перераовуватися загальна вартість
// Завжди має відображатися валюта - гривня
// Загальна сума відображається з копійками (2 знаки після коми)
// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.
// Кольрова підказка має змінювати своє значення при перетягувані повзунка.
// В інпуті №2 мін і мах поріг встановлюєте самостійно.
// При завантаженні сторінки скрип має автоматично розрахувати вартість на основі данних за замовчуванням
// які ви встановите в розмітці.

const form = document.querySelector("form");
const amount = document.querySelector(".amount");
const total = document.querySelector("#total");
const quantityInput = document.querySelector("#quantity");

const recalculateTotal = (event) => {
  const { price, quantity } = form.children;

  if (event.target == quantityInput) {
    amount.textContent = quantity.value;
  }
  // Перевіряємо, що змінився саме <input type="range" id="quantity"...>

  total.textContent = Number(price.value * quantity.value).toFixed(2);
  // total.textContent = form.children.price.value * form.children.quantity.value;
};

form.addEventListener("change", recalculateTotal);

// Один з варіантів, як додати початкове значення total
const { price, quantity } = form.children;
total.textContent = Number(price.value * quantity.value).toFixed(2);

// Замітки по 1 задачі:
// 1. В консоль будуть виводитись всі інпути форми, в які користувач вніс зміни
// form.addEventListener('change', event => {
//     console.log(event.target);
// })

// 2. Коли щось змінюється у формі ми хочемо перерахувати наш  total (перерендирити textContent)
// Для цього беремо дітей форми, знаходимо price і quantity, так як це інпути і у них є name, вони одразу нам будуть доступні як ноди (як елементи форми), і беремо їх значення value
// console.log(form.children) - щоб переглянути детально дітей форми
// Тобто ми з одного масиву дістаємо 2 елементи, їх значення (attributes -> value) і перемножуємо між собою
// total.textContent = form.children.price.value * form.children.quantity.value;

// 2
// Створити гелерею з картинок використовуючи масив

// При кліку на картинку показувати модалку з написом що зберігіється в полі title.
// Використовувати делегування при обробці кліків

const images = [
  {
    title: "Коник стрибунець",
    src: "https://cdn.pixabay.com/photo/2022/11/07/00/27/grasshopper-7575278_1280.jpg",
  },
  {
    title: "Фрукт",
    src: "https://cdn.pixabay.com/photo/2022/10/22/18/10/quince-7539818_1280.jpg",
  },
  {
    title: "Люди",
    src: "https://cdn.pixabay.com/photo/2022/11/05/22/43/against-light-7572922_1280.jpg",
  },
  {
    title: "Годиник",
    src: "https://cdn.pixabay.com/photo/2022/11/06/13/36/architecture-7574031_1280.jpg",
  },
  {
    title: "Метро",
    src: "https://cdn.pixabay.com/photo/2022/10/31/17/57/subway-7560452_1280.jpg",
  },
  {
    title: "Хмари",
    src: "https://cdn.pixabay.com/photo/2022/10/24/09/54/switzerland-7543063_1280.jpg",
  },
];

const galleryContainer = document.querySelector(".gallery-container");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal-title");
const closeBtn = document.querySelector(".close");
const imageElements = [];

// Створення елементу img

images.forEach((imageElement) => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("gallery-item");

  const image = document.createElement("img");
  image.src = imageElement.src;
  image.alt = imageElement.title;
  image.dataset.title = imageElement.title;

  imageContainer.appendChild(image);

  imageElements.push(imageContainer);
});

// Додавання створенних елементів img до розмітки

galleryContainer.append(...imageElements);

// Делегування: вішаємо слухача на блок-контейнер для відкриття модалки

// Використовуємо варіант відкриття модалки через стилі (за замовчуванням стоїть display: none), але можна і краще роботи через додавання класу. В в будь якому разі все залежить від задачі

// galleryContainer.addEventListener('click', event => {
//     if (event.target.nodeName !== 'IMG') {
//         return;
//     }
//     modal.style.display = 'block';
//     modalTitle.textContent = event.target.dataset.title;
// })

const onImageClick = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  modal.style.display = "block";
  modalTitle.textContent = event.target.dataset.title;
};

galleryContainer.addEventListener("click", onImageClick);

// Закриття модалки

// window.addEventListener('click', event => {
//     if (event.target == closeBtn || event.target == modal) {
//         modal.style.display = 'none';
//     }
// })

const onBtnModalClick = (event) => {
  if (event.target == closeBtn || event.target == modal) {
    modal.style.display = "none";
  }
};

window.addEventListener("click", onBtnModalClick);
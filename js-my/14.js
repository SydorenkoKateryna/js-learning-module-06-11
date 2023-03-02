// Вивести lodash у консоль
// console.log(_)

// Throttle resize
let counterResize = 0;

// Переглядаємо к-ть змін розміру вікна браузара
window.addEventListener("resize", _.throttle(resizeHandler, 300));

function resizeHandler() {
  console.log(++counterResize);
}

// При постсуфіксному інкременті / декременті counter++ / counter-- спочатку віддається змінна, а потім виконується постсуфіксний інкремент / декремент
// При префіксному інкременті / декременті ++counter / --counter спочатку виконується префіксний інкремент / декремент, а потім віддається змінна

// Throttle scroll
let counterScroll = 0;

window.addEventListener("scroll", _.throttle(scrollHandler, 500));

function scrollHandler() {
  console.log(++counterScroll);
}

// Debounce with inputs
const input = document.querySelector("input");

input.addEventListener("input", _.debounce(inputHandler, 500));

function inputHandler(event) {
  console.log(event.target.value);
}

// Form registration with 2 inputs
// Потрібна валідація, щоб в інпутах було введено мінімум 8 символів

const REQUIRED_SYMBOLS_AMOUNT = 8;

const nickNameInput = document.querySelector("#user-nick");
const passwordInput = document.querySelector("#user-pass");

console.log(nickNameInput);
console.log * passwordInput;

nickNameInput.addEventListener("input", _.debounce(inputHandler, 500));
passwordInput.addEventListener("input", _.debounce(inputHandler, 500));

function inputHandler(event) {
  console.log(event.target.value);

  const currentInput = event.target;
  const symbolAmount = currentInput.value.length;

  // if (symbolAmount < REQUIRED_SYMBOLS_AMOUNT) {
  //     currentInput.style.background = 'red';
  // } else {
  //     currentInput.style.background = 'lightgreen';
  // }

  currentInput.style.background =
    symbolAmount < REQUIRED_SYMBOLS_AMOUNT ? "red" : "lightgreen";
}

// Intersection observer example 1

// Intersection observer - це така штука в JS, яка дає розуміти чи досяг у нас юзер якогось місця сторінки

// Задача: зрозуміти, коли юзер досягає кінця сторінки і тоді показати текст з анімацією

const target = document.querySelector(".animated-text");

// Створюємо екземпляр класу IntersectionObserver
// Потребує callback функцію

const observer = new IntersectionObserver(handleIntersection);

// Потрібно підпсати IntersectionObserver на події, коли юзер лише починає читати якийся кусок коду, а не вже прочитав

// У нашому прикладі підписуємо IntersectionObserver на target

// Властивість observe - спостерігати (за target)

observer.observe(target);

// entries - шматки сторінки за якими слідкуємо, у нашому випадку шматок один - target

function handleIntersection(entries) {
  entries.map((entry) => {
    // isIntersecting - властивість
    // entry.isIntersecting = true - юзер досяг шматок сторінки за яким слідкували

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}

// Intersection observer example 2

const images = document.querySelectorAll(".lazyload");

const observer = new IntersectionObserver(handleIntersection);

// Підписуємо IntersectionObserver на всі images
images.forEach((image) => observer.observe(image));

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      // adding src from data
      entry.target.src = entry.target.dataset.src;
      // add class loaded
      entry.target.classList.add("loaded");
      // unsubscribe entry
      // Відписуємо IntersectionObserver після того, як він спрацював, щоб одні і ті самі зображення не завантажувались кожного разу повторно
      observer.unobserve(entry.target);
    }
  });
}

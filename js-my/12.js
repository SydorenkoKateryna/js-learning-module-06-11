// 1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body.
// Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки

const modal = document.querySelector(".modal");
console.log(modal);
const overlay = document.querySelector(".overlay");
console.log(overlay);
const openBtn = document.querySelector(".btn-open");
console.log(openBtn);
const closeBtn = document.querySelector(".btn-close");
console.log(closeBtn);

//---------- 1 variant ----------

// openBtn.addEventListener('click', event => {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// })

// closeBtn.addEventListener('click', event => {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })

// overlay.addEventListener('click', event => {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })

//---------- 2 variant ----------

// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

//---------- 3 variant ----------

// const openModal =  () => {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeModal = () => {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

//---------- 4 variant ----------

function openModal () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

function closeModal () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

openBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//// 2. Додати в модалку логіку закриття при натисканні на кнопку Escape

document.addEventListener('keydown', event => {
    if(event.code === 'Escape' && event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})


///3. Створити форму реєстрації користувача за допомогою js де буде 2 поля
//    1. Поле логіна
//    2. Поле пароль
//    3. Захаркодити вірні логін і пароль в константах
//    4. Додати логіку сабміта форми, при сабміті перевіряємо введені логін і пароль.
//        1. Якщо логін і пароль співпадають - видаляємо форму з документа і показуємо **h2**  з написом **“Вхід успішний”**
//        2. Якщо логі і пароль не співпадають з даними з констант в пункті 3с - показуємо під формою помилку червоним кольором **“Логін або пароль не вірні”**

// const formContainer = document.querySelector("#app");
// formContainer.appendChild(form);

const createForm = () => {
    const form = document.createElement("form");
    form.classList.add("form");
    form.autocomplete = "off";
  
    const loginInput = document.createElement("input");
    loginInput.type = "text";
    loginInput.name = "login";
    loginInput.placeholder = "Login";
  
    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.name = "password";
    passwordInput.placeholder = "Password";
  
    const submitBtn = document.createElement("button");
    submitBtn.classList.add("btn");
    submitBtn.type = "submit";
    submitBtn.textContent = "Register";
  
    form.append(loginInput, passwordInput, submitBtn);
  
    document.querySelector("#app").append(form);
  };
  
  createForm();
  
  const DEFAULTS = {
    PASSWORD: "password",
    LOGIN: "login",
  };
  
  const handleSuccess = () => {
    document.querySelector("form").remove();
    document
      .querySelector("#app")
      .insertAdjacentHTML("afterbegin", "<h2>Вхід успішний</h2>");
  };
  
  const handleError = () => {
  
    const errorText = document.createElement("p");
    errorText.style.color = "red";
    errorText.textContent = "Логін або пароль не вірні";
  
    document.querySelector("#app").append(errorText);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      elements: { login, password },
    } = event.currentTarget;
  
    // if(event.currentTarget.elements.login.value)
    if (login.value === DEFAULTS.LOGIN && password.value === DEFAULTS.PASSWORD) {
      // SUCCESS
      handleSuccess();
      return;
    }
  
    // FAIL
    handleError();
    event.currentTarget.reset();
  };
  
  document.querySelector("form").addEventListener("submit", handleSubmit);
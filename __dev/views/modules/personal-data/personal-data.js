//Имя
document.querySelector("#change-name").addEventListener("click", function() {
  document.querySelector("#name").disabled = false;
  document.querySelector("#data-name").style.backgroundColor = "#f4f4f4";
  document.querySelector("#change-name").style.display = "none";
  document.querySelector("#save-name").style.display = "block";
})
document.querySelector("#save-name").addEventListener("click", function() {
  document.querySelector("#name").disabled = true;
  document.querySelector("#data-name").style.backgroundColor = "#ffffff";
  document.querySelector("#change-name").style.display = "block";
  document.querySelector("#save-name").style.display = "none";
})

//Фамилия
document.querySelector("#change-surname").addEventListener("click", function() {
  document.querySelector("#surname").disabled = false;
  document.querySelector("#data-surname").style.backgroundColor = "#f4f4f4";
  document.querySelector("#change-surname").style.display = "none";
  document.querySelector("#save-surname").style.display = "block";
})
document.querySelector("#save-surname").addEventListener("click", function() {
  document.querySelector("#surname").disabled = true;
  document.querySelector("#data-surname").style.backgroundColor = "#ffffff";
  document.querySelector("#change-surname").style.display = "block";
  document.querySelector("#save-surname").style.display = "none";
})

//Отчество
document.querySelector("#change-patronimic").addEventListener("click", function() {
  document.querySelector("#patronimic").disabled = false;
  document.querySelector("#data-patronimic").style.backgroundColor = "#f4f4f4";
  document.querySelector("#change-patronimic").style.display = "none";
  document.querySelector("#save-patronimic").style.display = "block";
})
document.querySelector("#save-patronimic").addEventListener("click", function() {
  document.querySelector("#patronimic").disabled = true;
  document.querySelector("#data-patronimic").style.backgroundColor = "#ffffff";
  document.querySelector("#change-patronimic").style.display = "block";
  document.querySelector("#save-patronimic").style.display = "none";
})

//Дата рождения
document.querySelector("#change-birth-date").addEventListener("click", function() {
  document.querySelector("#birth-date").disabled = false;
  document.querySelector("#birth-date").placeholder = "дд. мм. гггг";
  document.querySelector("#data-birth-date").style.backgroundColor = "#f4f4f4";
  document.querySelector("#change-birth-date").style.display = "none";
  document.querySelector("#save-birth-date").style.display = "block";
})
document.querySelector("#save-birth-date").addEventListener("click", function() {
  document.querySelector("#birth-date").disabled = true;
  document.querySelector("#birth-date").placeholder = "Дата рождения";
  document.querySelector("#data-birth-date").style.backgroundColor = "#ffffff";
  document.querySelector("#change-birth-date").style.display = "block";
  document.querySelector("#save-birth-date").style.display = "none";
})

//Номер телефона
document.querySelector("#change-phone").addEventListener("click", function() {
  document.querySelector("#phone").disabled = false;
  document.querySelector("#data-phone").style.backgroundColor = "#f4f4f4";
  document.querySelector("#change-phone").style.display = "none";
  document.querySelector("#save-phone").style.display = "block";
})
document.querySelector("#save-phone").addEventListener("click", function() {
  document.querySelector("#phone").disabled = true;
  document.querySelector("#data-phone").style.backgroundColor = "#ffffff";
  document.querySelector("#change-phone").style.display = "block";
  document.querySelector("#save-phone").style.display = "none";
})

//Почта
document.querySelector("#change-email").addEventListener("click", function() {
  document.querySelector("#email").disabled = false;
  document.querySelector("#data-email").style.backgroundColor = "#f4f4f4";
  document.querySelector("#change-email").style.display = "none";
  document.querySelector("#save-email").style.display = "block";
})
document.querySelector("#save-email").addEventListener("click", function() {
  document.querySelector("#email").disabled = true;
  document.querySelector("#data-email").style.backgroundColor = "#ffffff";
  document.querySelector("#change-email").style.display = "block";
  document.querySelector("#save-email").style.display = "none";
})

//Пароль
document.querySelector("#change-password").addEventListener("click", function() {
  document.querySelector("#password").disabled = false;
  document.querySelector("#data-password").style.backgroundColor = "#f4f4f4";
  document.querySelector("#change-password").style.display = "none";
  document.querySelector("#save-password").style.display = "block";
})
document.querySelector("#save-password").addEventListener("click", function() {
  document.querySelector("#password").disabled = true;
  document.querySelector("#data-password").style.backgroundColor = "#ffffff";
  document.querySelector("#change-password").style.display = "block";
  document.querySelector("#save-password").style.display = "none";
})

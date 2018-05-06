//Адрес

document.querySelector("#change-address").addEventListener("click", function() {
  document.querySelector("#change-address").style.display = "none";
  document.querySelector("#add-address-block").style.display = "block";
  document.querySelector("#add-address-btn").style.display = "none";
  document.querySelector("#remove-address1").style.display = "block";
  document.querySelector("#remove-address2").style.display = "block";
  document.querySelector("#address1").style.border = "1px solid #d5d5d5";
  document.querySelector("#address2").style.border = "1px solid #d5d5d5";
  document.querySelector("#address1").style.borderBottom = "none";
  document.querySelector("#address1").style.backgroundColor = "#ffffff";
  document.querySelector("#address2").style.backgroundColor = "#ffffff";
  document.querySelector("#address__form").style.backgroundColor = "#f4f4f4";
  document.querySelector("#address__form").style.paddingBottom = "0px";
})
document.querySelector("#remove-address1").addEventListener("click", function() {
  document.querySelector("#first-address").style.display = "none";
})
document.querySelector("#remove-address2").addEventListener("click", function() {
  document.querySelector("#second-address").style.display = "none";
  document.querySelector("#address1").style.borderBottomColor = "#d5d5d5";
})
document.querySelector("#remove-address1").addEventListener("click", function() {
  document.querySelector("#first-address").style.display = "none";
})
document.querySelector("#remove-address2").addEventListener("click", function() {
  document.querySelector("#second-address").style.display = "none";
  document.querySelector("#address1").style.borderBottomColor = "#d5d5d5";
})

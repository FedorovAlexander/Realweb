//Адрес
let changeAddress = document.querySelector("#change-address");
let addAddressBlock = document.querySelector(".address__add");
let addAddressButton = document.querySelector(".address__add-btn");
let removeAddressLink = document.querySelectorAll(".address__remove");
let addressLabel = document.querySelectorAll(".address__label");
let addressForm = document.querySelector(".address__form");
let removeAddressLink1 = document.querySelector("#remove-address1");
let removeAddressLink2 = document.querySelector("#remove-address2");
let addressBlock0 = document.querySelector("#address-block-1");
let addressBlock1 = document.querySelector("#address-block-2");
let addressBlocks = document.querySelectorAll(".address__block");


changeAddress.addEventListener("click", function() {
  this.style.display = "none";
  addAddressBlock.style.display = "block";
  addAddressButton.style.display = "none";

  removeAddressLink.forEach(function(item) {
    item.style.display = "block";
  });

  addressLabel.forEach(function(item) {
    item.style.border = "1px solid #d5d5d5";
    item.style.backgroundColor = "#ffffff";
  });

  addressForm.style.backgroundColor = "#f4f4f4";
  addressForm.style.paddingBottom = "0px";
});

removeAddressLink.forEach(function(item,i) {
  item.addEventListener('click', function() {
    addressBlocks[i].style.display = 'none'
  })
});
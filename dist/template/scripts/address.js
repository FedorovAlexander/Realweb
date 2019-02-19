"use strict";

//Адрес
function addressBlock() {
    var changeAddress = document.querySelector("#change-address");
    var addAddressBlock = document.querySelector(".address__add");
    var addAddressButton = document.querySelector(".address__add-btn");
    var removeAddressLink = document.querySelectorAll(".address__remove");
    var addressLabel = document.querySelectorAll(".address__label");
    var addressForm = document.querySelector(".address__form");
    var addressBlocks = document.querySelectorAll(".address__block");

    changeAddress.addEventListener("click", function() {
        this.style.display = "none";
        addAddressBlock.style.display = "block";
        addAddressButton.style.display = "none";

        removeAddressLink.forEach(function(item) {
            item.style.display = "block";
            item.style.cursor = "pointer";
        });

        addressLabel.forEach(function(item) {
            item.style.border = "1px solid #d5d5d5";
            item.style.backgroundColor = "#ffffff";
        });

        addressForm.style.backgroundColor = "#f4f4f4";
        addressForm.style.paddingBottom = "0px";
    });

    removeAddressLink.forEach(function(item, i) {
        item.addEventListener('click', function() {
            addressBlocks[i].style.display = 'none';
        });
    });
}

addressBlock();
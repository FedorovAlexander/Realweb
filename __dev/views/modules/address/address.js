//Адрес
function addressBlock() {
	let changeAddress = document.querySelector("#change-address");
	let addAddressBlock = document.querySelector(".address__add");
	let addAddressButton = document.querySelector(".address__add-btn");
	let removeAddressLink = document.querySelectorAll(".address__remove");
	let addressLabel = document.querySelectorAll(".address__label");
	let addressLabel1 = document.querySelector(".address__label:first-child");
	let addressForm = document.querySelector(".address__form");
	let addressBlocks = document.querySelectorAll(".address__block");


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
			item.style.paddingLeft = "12px"
		});

		addressLabel1.style.borderBottom = "none";
		addressForm.style.backgroundColor = "#f4f4f4";
		addressForm.style.paddingBottom = "0px";
	});

	removeAddressLink.forEach(function(item,i) {
		item.addEventListener('click', function() {
			addressBlocks[i].style.display = 'none';

			if(addressLabel.length <= 1) {
				addressLabel1.style.borderBottom = "none";
			} else {
				addressLabel1.style.borderBottom = "1px solid #d5d5d5";
			}
		})
	});
}

addressBlock();
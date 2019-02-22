'use strict';

function changeData() {
    var dataItem = document.querySelectorAll('.personal-data__item');
    dataItem.forEach(function(item) {

        item.querySelector('.personal-data__change--change').addEventListener('click', function() {
            item.querySelector('.personal-data__input').disabled = false;
            item.classList.add("personal-data__item--active");
            item.querySelector(".personal-data__change--change").style.display = "none";
            item.querySelector(".personal-data__change--save").style.display = "block";
        });

        item.querySelector(".personal-data__change--save").addEventListener('click', function() {
            item.querySelector('.personal-data__input').disabled = true;
            item.classList.remove("personal-data__item--active");
            item.querySelector(".personal-data__change--change").style.display = "block";
            item.querySelector(".personal-data__change--save").style.display = "none";
        });
    });
}

changeData();

function hoverButton() {
    var dataItem = document.querySelectorAll('.personal-data__item');
    dataItem.forEach(function(item) {

        item.querySelector('.personal-data__change--change').addEventListener('mouseover', function() {
            item.style.backgroundColor = "#f4f4f4";
            item.querySelector('.personal-data__input').style.backgroundColor = "#f4f4f4";
            console.log('woof');
        });

        item.querySelector('.personal-data__change--change').addEventListener('mouseleave', function() {
            item.style.backgroundColor = "#ffffff";
            item.querySelector('.personal-data__input').style.backgroundColor = "#ffffff";
            console.log('meow');
        });
    });
}

hoverButton();
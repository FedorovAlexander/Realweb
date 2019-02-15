function changeData() {
  let dataItem = document.querySelectorAll('.personal-data__item');
  dataItem.forEach(function(item) {
    
    item.querySelector('.personal-data__change--change').addEventListener('click', function() {
      item.querySelector('.personal-data__input').disabled = false;
      item.style.backgroundColor = "#f4f4f4";
      item.querySelector(".personal-data__change--change").style.display = "none";
      item.querySelector(".personal-data__change--save").style.display = "block";
    })

    item.querySelector(".personal-data__change--save").addEventListener('click', function() {
      item.querySelector('.personal-data__input').disabled = true;
      item.style.backgroundColor = "#ffffff";
      item.querySelector(".personal-data__change--change").style.display = "block";
      item.querySelector(".personal-data__change--save").style.display = "none";
    })
  })
}

changeData()
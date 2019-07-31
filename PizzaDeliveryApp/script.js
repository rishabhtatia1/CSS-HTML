const cartBtn = document.querySelectorAll('.pizzaButton');

cartBtn.forEach(function(item, key) {
  item.addEventListener('click', function() {
    document.getElementById("cartWrapper").style.display = "block";
  });
});

const closeBtn = document.querySelector('#closeCart');

closeBtn.addEventListener('click', function () {
  document.getElementById("cartWrapper").style.display = "none";
});

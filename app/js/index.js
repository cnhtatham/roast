var orderBtn = document.getElementById('orderBtn');
var drinkOptions = document.getElementById('drinkOptions');
var closeOrderBtn = document.getElementById('closeOrder');

closeOrderBtn.style.display = 'none';
drinkOptions.style.display = 'none';

//ORDER SELECTION
orderBtn.addEventListener('click', function () {
    drinkOptions.style.display = 'block';
    closeOrderBtn.style.display = 'inline-block';
})
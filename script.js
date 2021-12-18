const btn = document.getElementById('button');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close');

console.log(btn, popup, closeBtn);

btn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);

function openPopup() {
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}
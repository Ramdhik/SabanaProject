// Triggrer kelas aktif navbar
const navbarList = document.querySelector('.list');
// saat di click
document.querySelector('#hamburger').onclick = (e) => {
  navbarList.classList.toggle('active');
  e.preventDefault();
};

// Triggrer kelas aktif search box
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
// saat di click
document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('nyala');
  searchBox.focus();
  e.preventDefault();
};

// Triggrer kelas aktif shopping cart
const ShoppingCart = document.querySelector('.shopping-cart');
// saat di click
document.querySelector('#cart-button').onclick = (e) => {
  ShoppingCart.classList.toggle('on');
  e.preventDefault();
};

//modal box
const itemModal = document.querySelector('#item-modal');
const itemModal2 = document.querySelector('#item-modal2');
const itemModal3 = document.querySelector('#item-modal3');
const itemModal4 = document.querySelector('#item-modal4');
const itemModal5 = document.querySelector('#item-modal5');
const itemModal6 = document.querySelector('#item-modal6');
const itemModal7 = document.querySelector('#item-modal7');
const itemModal8 = document.querySelector('#item-modal8');
const itemModal9 = document.querySelector('#item-modal9');
const itemButton = document.querySelector('.item-detail-button');
const itemButton2 = document.querySelector('.item-detail-button2');
const itemButton3 = document.querySelector('.item-detail-button3');
const itemButton4 = document.querySelector('.item-detail-button4');
const itemButton5 = document.querySelector('.item-detail-button5');
const itemButton6 = document.querySelector('.item-detail-button6');
const itemButton7 = document.querySelector('.item-detail-button7');
const itemButton8 = document.querySelector('.item-detail-button8');
const itemButton9 = document.querySelector('.item-detail-button9');

itemButton.onclick = (e) => {
  itemModal.style.display = 'flex';
  e.preventDefault();
};
itemButton2.onclick = (e) => {
  itemModal2.style.display = 'flex';
  e.preventDefault();
};
itemButton3.onclick = (e) => {
  itemModal3.style.display = 'flex';
  e.preventDefault();
};
itemButton4.onclick = (e) => {
  itemModal4.style.display = 'flex';
  e.preventDefault();
};
itemButton5.onclick = (e) => {
  itemModal5.style.display = 'flex';
  e.preventDefault();
};
itemButton6.onclick = (e) => {
  itemModal6.style.display = 'flex';
  e.preventDefault();
};
itemButton7.onclick = (e) => {
  itemModal7.style.display = 'flex';
  e.preventDefault();
};
itemButton8.onclick = (e) => {
  itemModal8.style.display = 'flex';
  e.preventDefault();
};
itemButton9.onclick = (e) => {
  itemModal9.style.display = 'flex';
  e.preventDefault();
};
//close modal box
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemModal.style.display = 'none';
  e.preventDefault();
};
document.querySelector('#item-modal2 .close-icon').onclick = (e) => {
  itemModal2.style.display = 'none';
  e.preventDefault();
};
document.querySelector('#item-modal3 .close-icon').onclick = (e) => {
  itemModal3.style.display = 'none';
  e.preventDefault();
};
document.querySelector('#item-modal4 .close-icon').onclick = (e) => {
  itemModal4.style.display = 'none';
  e.preventDefault();
};
document.querySelector('#item-modal5 .close-icon').onclick = (e) => {
  itemModal5.style.display = 'none';
  e.preventDefault();
};
document.querySelector('#item-modal6 .close-icon').onclick = (e) => {
  itemModal6.style.display = 'none';
  e.preventDefault();
};
document.querySelector('#item-modal7 .close-icon').onclick = (e) => {
  itemModal7.style.display = 'none';
  e.preventDefault();
};
document.querySelector('#item-modal8 .close-icon').onclick = (e) => {
  itemModal8.style.display = 'none';
  e.preventDefault();
};
document.querySelector('#item-modal9 .close-icon').onclick = (e) => {
  itemModal9.style.display = 'none';
  e.preventDefault();
};

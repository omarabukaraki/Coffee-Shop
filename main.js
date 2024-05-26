
// let lbOpen = document.querySelector(".listBtn");
// lbOpen.onclick  = function openNav() {
//     document.getElementById("mySidenav").style.width = "60%";
//   }
  
// let lbClose = document.querySelector(".closebtn");
// lbClose.onclick = function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
  
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-from');

document.querySelector('#search-btn').onclick = ()=>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
  cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-item-container');

document.querySelector('#cart-btn').onclick = ()=>{
  cartItem.classList.toggle('active');
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
}

window.onscroll = ()=>{
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  cartItem.classList.remove('active');

}
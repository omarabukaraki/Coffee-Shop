

let lbOpen = document.querySelector(".listBtn");
lbOpen.onclick  = function openNav() {
    document.getElementById("mySidenav").style.width = "60%";
  }
  

let lbClose = document.querySelector(".closebtn");
lbClose.onclick = function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
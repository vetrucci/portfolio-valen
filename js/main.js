const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

hamburgerMenu.addEventListener('click', displayMenu);
menu.addEventListener('click', displayMenu);


function displayMenu(){
    if (menu.classList.contains('tampil')) {
        menu.classList.remove('tampil');
        iconBars.style.display = 'inline';
        iconClose.style.display = 'none';
    }else {
        menu.classList.add('tampil')
        iconBars.style.display = 'none';
        iconClose.style.display = 'inline';
    }
}

function toggleCV() {
    var container = document.getElementById("containerCV");
    var btn = document.getElementById("btnCV");

    if (container.style.display === "none" || container.style.display === "") {
        container.style.display = "block";
        btn.innerText = " Tutup Dokumen CV";
        btn.style.backgroundColor = "#dc3545"; // Berubah warna jadi merah
    } else {
        container.style.display = "none";
        btn.innerText = " VIEW RESUME";
        btn.style.backgroundColor = "#007bff"; // kembali jadi biru
    }
}
const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const desktopMenu = document.getElementById('desktop-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        desktopMenu.classList.toggle('show-on-mobile', mobileMenu.classList.contains('open'));
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });
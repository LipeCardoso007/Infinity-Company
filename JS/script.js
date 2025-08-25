function esconderSubmenu() {
    const submenu = document.getElementById("submenu-FO");

    // Alterna visibilidade
    if (submenu.style.display === "flex") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "flex";
    }
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    let porcentagem = (window.scrollY / window.innerHeight) * 100;

    if (porcentagem > 30) { 
        header.style.opacity = '0';
        header.style.pointerEvents = 'none';
    } else {
        header.style.opacity = '1';
        header.style.pointerEvents = 'auto';
    }
});

function rolar() {
  document.getElementById("main").scrollIntoView({
    behavior: "smooth"})
}
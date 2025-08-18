function esconderSubmenu() {
    const submenu = document.getElementById("submenu-FO");

    // Alterna visibilidade
    if (submenu.style.display === "flex") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "flex";
    }
}

function toggleBorder() {
    const border = document.getElementById("container-button-fazer-orçamento");
        border.classList.toggle("ativo");
}

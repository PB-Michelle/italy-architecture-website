export function initMenu() {

    const menuContainer = document.querySelector(".menu_container");
    const menuCheckbox = document.getElementById("menu_desplegable");

    const menuIcon = menuContainer.querySelector(".menu-icon");

    if (menuIcon) {
        menuIcon.setAttribute("tabindex", "0");
        menuIcon.setAttribute("role", "button");
        menuIcon.setAttribute("aria-label", "Open menu");
    }

    menuIcon.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            menuCheckbox.checked = !menuCheckbox.checked;
        }
    });

    const updateAria = () => {
    const isOpen = menuCheckbox.checked;
    menuIcon.setAttribute("aria-expanded", isOpen);
    };

    menuCheckbox.addEventListener("change", updateAria);
    updateAria();

    if (!menuContainer || !menuCheckbox) return;

    let menuTimeout;

    menuContainer.addEventListener("mouseleave", () => {
        menuTimeout = setTimeout(() => {
            menuCheckbox.checked = false;
        }, 200); // puedes ajustar el tiempo
    });

    menuContainer.addEventListener("mouseenter", () => {
        clearTimeout(menuTimeout);
    });

    menuContainer.addEventListener("focusout", (e) => {
        if (!menuContainer.contains(e.relatedTarget)) {
            menuCheckbox.checked = false;
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            menuCheckbox.checked = false;
        }
    });
}
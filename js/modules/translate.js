// Main Translations - English
export const translations = {
    en: {
        //Menu
        menuMainLink: "Main page",
        menuTimelineLink: "Timeline",
        menuMapLink: "Cultural map",
        English: "English",
        Spanish: "Spanish",

        //Main Page
        main_page_Title: "Living architecture:<br>A trip through Italy",
        main_text: "More than a website, it is an experience. Discover how italian architecture has shaped the course of the world culture, through an interactive design that invites you to learn and explore.",
        startBtn: "Get Started!",
        timelineInvite: "Travel through centuries of italian architecture: from Rome to the Baroque at a single glance.",
        visitTimelineBtn: "Visit the Timeline",
        culturalmapInvite: "Discover where Italy's architectural wonders come alive: explore the interactive map and trace history across cities and monuments.",
        visitMapBtn: "Visit the Interactive Map",

        //Footer
        createdByTitle: "Created by:",
        credits: "&copy; 2026 Living Architecture: Italy",
        discoverTitle: "Discover:",
        mainLink1: "Main page",
        timelineLink1: "A timeline",
        mapLink1: "Interactive cultural map",

        //Timeline Page
        timelineMainTitle:"Timeline",
        year1: "1st B.C",
        year2: "1100s",
        year3: "1400s",
        year4: "1580s",
        year5: "1730s",
        year6: "1750s",
        year7: "1920s",
        year8: "1950s",

        //Cultural Map Page
        mapMainTitle: "Cultural Map",
        Pisa:"Pisa",
        Rome: "Rome",
        Florence: "Florence",
        Venice: "Venice",
        Milan:"Milan",
        Naples: "Naples",
        Palermo: "Palermo",
    },

    // Main Translations - Spanish
    es: {
        //Menú
        menuMainLink: "Página principal",
        menuTimelineLink: "Línea de tiempo",
        menuMapLink: "Mapa cultural",
        English: "Inglés",
        Spanish: "Español",

        //Maing Page
        main_page_Title: "Arquitectura viva:<br>Un viaje por Italia",
        main_text: "Más que un sitio web, es una experiencia. Descubre cómo la arquitectura italiana ha moldeado el curso de la cultura mundial, a través de un diseño interactivo que te invita a aprender y explorar.",
        startBtn: "¡Comenzar!",
        timelineInvite: "Un viaje a través de siglos de arquitectura italiana: desde Roma hasta el Barroco en un solo vistazo.",
        visitTimelineBtn:" Visitar la Línea del Tiempo",
        culturalmapInvite: "Descubre dónde cobran vida las maravillas arquitectónicas de Italia: explora el mapa interactivo y sigue la historia a través de ciudades y monumentos.",
        visitMapBtn:" Visitar el Mapa Interactivo",

        //Footer
        createdByTitle: "Creado por:",
        credits: "&copy; 2026 Arquitectura Viva: Italia",
        discoverTitle: "Descubre:",
        mainLink1: "Página principal",
        timelineLink1: "Línea del tiempo",
        mapLink1: "Mapa cultural interactivo",

        //Timeline Page
        timelineMainTitle:"Línea de tiempo",
        year1: "Siglo I a.C",
        year2: "1100",
        year3: "1400",
        year4: "1580",
        year5: "1730",
        year6: "1750",
        year7: "1920",
        year8: "1950",

        //Cultural Map Page
        mapMainTitle:"Mapa Cultural",
        Pisa:"Pisa",
        Rome: "Roma",
        Florence: "Florencia",
        Venice: "Venecia",
        Milan:"Milán",
        Naples: "Nápoles",
        Palermo: "Palermo",
    }
};

//Language System
export function changeLanguage(lang, modules = {}) {

    document.documentElement.lang = lang;
    const texts = translations[lang];
    Object.keys(texts).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = texts[id];
        }
    });


    if (modules.timeline?.setLanguage) {
        modules.timeline.setLanguage(lang);
    }

    if (modules.map?.setLanguage) {
        modules.map.setLanguage(lang);
    }

    requestAnimationFrame(() => {
        Object.keys(texts).forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.innerHTML = texts[id];
            }
        });
    });
}

export function initLanguage (modules = {}) {

    document.querySelectorAll(".lang").forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();

            const lang = btn.dataset.lang;
            localStorage.setItem("language", lang);
            changeLanguage(lang, modules);

            // Close Menu
            const menu = document.getElementById("menu_desplegable");
            if (menu) {
                menu.checked = false;
            }
        });
    });
    const savedLang = localStorage.getItem("language") || "en";
    changeLanguage(savedLang, modules);
}
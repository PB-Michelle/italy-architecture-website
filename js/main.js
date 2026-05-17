import {initMenu} from "./modules/menu.js";
import {initLanguage} from "./modules/translate.js";
import {initTimeline} from "./modules/timeline.js";
import {initMap} from "./modules/map.js";

document.addEventListener("DOMContentLoaded", () => {

    let timeline = null;
    let map = null;

    if (document.querySelector(".timeline-bar")) {
        timeline = initTimeline();
    }

    if (document.querySelector(".interactive_map")) {
        map = initMap();
    }

    initMenu();
    initLanguage({ timeline, map });
    changeLanguage(localStorage.getItem("language") || "en", { timeline, map });
});
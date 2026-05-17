export function initMap() {     
        // Cultural Map Interactive - English
        const cityDataEN = {
        pisa:{
        title:"Tower of Pisa",
        image:"images/cultural_map/Torre de Pisa.jpeg",
        text:"Built as the bell tower of the cathedral in the Campo dei Miracoli, it began to tilt as early as the third floor due to unstable ground. Standing nearly 56 meters tall and clad in white marble, it remains one of Italy's most iconic monuments.",
        facts:[
        "Pisa is not just about the tower: the Campo dei Miracoli also included the Cathedral, The Baptistery, and the monumental Cemetery, forming a unique architectural ensemble.",
        "In the Middle Ages, Pisa was a powerful maritime republic, rivaling Venice and Genoa; its wealth financed the great works that still amaze visitors today."
        ]},

        rome:{
        title:"The Colosseum",
        image:"images/cultural_map/Coliseo Romano.jpg",
        text:"Built in the 1st century AD under the emperors Vespasian and Titus, the Colosseum was the largest amphitheater of the Roman world, designed to host gladiator contests, animal hunts, and public spectacles. Rising about 48 meters high and constructed with travertine stone and concrete, it remains one of Italy’s most enduring symbols of Roman engineering and imperial power.",
        facts:[
        "It could hold around 50,000 spectators, who entered through a complex system of numbered gates and corridors.",
        "Parts of the arena floor could be removed to reveal underground chambers where animals and scenery were prepared."
        ]},

        florence:{
        title:"Florence Cathedral",
        image:"images/cultural_map/Santa Maria del Fiore.jpg",
        text:"Begun in 1296 and completed over several centuries, Santa Maria del Fiore is the cathedral of Florence and one of the greatest masterpieces of Gothic and Renaissance architecture. Famous for its immense brick dome engineered by Filippo Brunelleschi, it rises above the city skyline and remains a lasting symbol of Florentine art, innovation, and civic pride.",
        facts:[
        "Brunelleschi’s dome was built without traditional wooden centering, an extraordinary engineering achievement for its time.",
        "The cathedral’s exterior is decorated with white, green, and pink marble from different regions of Italy."
        ]},

        venice:{
        title:"St. Mark’s Basilica",
        image:"images/cultural_map/Basilica de San Marcos.jpg",
        text:"Originally built in the 9th century and later rebuilt in the 11th century, St. Mark’s Basilica is the most famous church in Venice and one of the finest examples of Italo-Byzantine architecture. Known for its golden mosaics, ornate domes, and richly decorated façade, it has long stood as a symbol of Venetian wealth, faith, and maritime power.",
        facts:[
        "Its interior contains thousands of square meters of golden mosaics, giving it the nickname “Church of Gold.”.",
        "The famous bronze horses on the façade are replicas; the original sculptures are preserved inside the basilica museum."
        ]},

        milan:{
        title:"Milan Cathedral",
        image:"images/cultural_map/Catedral de Milan.jpg",
        text:"Begun in 1386 and completed over several centuries, Milan Cathedral is the largest church in Italy and one of the greatest examples of Gothic architecture in Europe. Famous for its forest of spires, intricate marble carvings, and vast interior, it remains a powerful symbol of Milan’s history, faith, and artistic ambition.",
        facts:[
        "The cathedral is decorated with more than 3,000 statues, more than any other major cathedral in the world.",
        "At its highest spire stands the golden statue of the Madonna, known as the Madonnina, one of Milan’s most beloved landmarks."
        ]},

        naples:{
        title:"Castel Nuovo",
        image:"images/cultural_map/Castel Nuovo.jpg",
        text:"Built in 1279 under Charles I of Anjou, Castel Nuovo is one of Naples’ most important medieval landmarks and a striking symbol of royal power. Recognizable by its massive round towers, fortified walls, and grand triumphal arch entrance, it served for centuries as a royal residence and political center overlooking the Bay of Naples.",
        facts:[
        "The white marble triumphal arch at its entrance was added in the 15th century to celebrate Alfonso V of Aragon’s victory.",
        "Despite its name, meaning “New Castle,” it is more than seven centuries old."
        ]},

        palermo:{
        title:"Palermo Cathedral",
        image:"images/cultural_map/Catedral de Palermo.jpg",
        text:"Originally built in 1185 and transformed over the centuries, Palermo Cathedral is one of Sicily’s most remarkable monuments, reflecting Norman, Gothic, Baroque, and Neoclassical influences. Known for its imposing towers, elegant arches, and richly layered history, it remains a lasting symbol of Palermo’s diverse cultural heritage and religious importance.",
        facts:[
        "The cathedral houses the tombs of several Sicilian kings and the Holy Roman Emperor Frederick II.",
        "Its architecture changed so many times that it combines styles from different centuries in one single building."
        ]},
        };

        // Cultural Map Interactive - Spanish
        const cityDataES = {
        pisa:{
        title:"Torre de Pisa",
        image:"images/cultural_map/Torre de Pisa.jpeg",
        text:"Construido como campanario de la catedral en Campo dei Miracoli, comenzó a inclinarse ya en el tercer piso debido a la inestabilidad del terreno. Con casi 56 metros de altura y revestido de mármol blanco, sigue siendo uno de los monumentos más emblemáticos de Italia.",
        facts:[
        "Pisa no se limita solo a la torre: el Campo dei Miracoli también incluía la Catedral, el Baptisterio y el monumental Cementerio, formando un conjunto arquitectónico único.",
        "En la Edad Media, Pisa fue una poderosa república marítima que rivalizaba con Venecia y Génova; su riqueza financió las grandes obras que aún hoy asombran a los visitantes."
        ]},

        rome:{
        title:"El Coliseo",
        image:"images/cultural_map/Coliseo Romano.jpg",
        text:"Construido en el siglo I d. C. bajo los emperadores Vespasiano y Tito, el Coliseo fue el anfiteatro más grande del mundo romano, diseñado para albergar combates de gladiadores, cacerías de animales y espectáculos públicos. Con una altura aproximada de 48 metros y construido con piedra travertina y hormigón, sigue siendo uno de los símbolos más duraderos de Italia, la ingeniería romana y el poder imperial.",
        facts:[
        "Podía albergar alrededor de 50.000 espectadores, quienes ingresaban mediante un complejo sistema de puertas y pasillos numerados.",
        "Partes del piso de la arena podían retirarse para revelar cámaras subterráneas donde se preparaban animales y escenografías."
        ]},

        florence:{
        title:"Catedral de Florencia",
        image:"images/cultural_map/Santa Maria del Fiore.jpg",
        text:"Iniciada en 1296 y completada a lo largo de varios siglos, Santa Maria del Fiore es la catedral de Florencia y una de las grandes obras maestras de la arquitectura gótica y renacentista. Famosa por su inmensa cúpula de ladrillo diseñada por Filippo Brunelleschi, se eleva sobre el perfil de la ciudad y sigue siendo un símbolo duradero del arte florentino, la innovación y el orgullo cívico.",
        facts:[
        "La cúpula de Brunelleschi fue construida sin los tradicionales soportes de madera, un logro de ingeniería extraordinario para su época.",
        "El exterior de la catedral está decorado con mármol blanco, verde y rosa procedente de distintas regiones de Italia."
        ]},

        venice:{
        title:"Basilica de San Marcos",
        image:"images/cultural_map/Basilica de San Marcos.jpg",
        text:"Construida originalmente en el siglo IX y posteriormente reconstruida en el siglo XI, la Basílica de San Marcos es la iglesia más famosa de Venecia y uno de los mejores ejemplos de la arquitectura ítalo-bizantina. Conocida por sus mosaicos dorados, sus ornamentadas cúpulas y su ricamente decorada fachada, ha sido durante siglos un símbolo de la riqueza veneciana, la fe y el poder marítimo.",
        facts:[
        "Su interior contiene miles de metros cuadrados de mosaicos dorados, lo que le dio el apodo de “Iglesia de Oro”.",
        "Los famosos caballos de bronce de la fachada son réplicas; las esculturas originales se conservan dentro del museo de la basílica."
        ]},

        milan:{
        title:"Catedral de Milán",
        image:"images/cultural_map/Catedral de Milan.jpg",
        text:"Iniciada en 1386 y completada a lo largo de varios siglos, la Catedral de Milán es la iglesia más grande de Italia y uno de los mayores ejemplos de la arquitectura gótica en Europa. Famosa por su bosque de agujas, sus intrincadas tallas de mármol y su inmenso interior, sigue siendo un poderoso símbolo de la historia, la fe y la ambición artística de Milán.",
        facts:[
        "La catedral está decorada con más de 3.000 estatuas, más que cualquier otra gran catedral del mundo.",
        "En su aguja más alta se encuentra la estatua dorada de la Virgen, conocida como la Madonnina, uno de los símbolos más queridos de Milán."
        ]},

        naples:{
        title:"Castel Nuovo",
        image:"images/cultural_map/Castel Nuovo.jpg",
        text:"Construido en 1279 bajo el reinado de Carlos I de Anjou, Castel Nuovo es uno de los monumentos medievales más importantes de Nápoles y un destacado símbolo del poder real. Reconocible por sus enormes torres circulares, murallas fortificadas y su gran arco triunfal de entrada, sirvió durante siglos como residencia real y centro político con vista a la Bahía de Nápoles.",
        facts:[
        "El arco triunfal de mármol blanco en su entrada fue añadido en el siglo XV para celebrar la victoria de Alfonso V de Aragón.",
        "A pesar de su nombre, que significa “Castillo Nuevo”, tiene más de siete siglos de antigüedad."
        ]},

        palermo:{
        title:"Catedral de Palermo",
        image:"images/cultural_map/Catedral de Palermo.jpg",
        text:"Construida originalmente en 1185 y transformada a lo largo de los siglos, la Catedral de Palermo es uno de los monumentos más destacados de Sicilia, reflejando influencias normandas, góticas, barrocas y neoclásicas. Conocida por sus imponentes torres, elegantes arcos y su rica historia acumulada, sigue siendo un símbolo duradero de la diversa herencia cultural de Palermo y de su importancia religiosa.",
        facts:[
        "La catedral alberga las tumbas de varios reyes sicilianos y del emperador del Sacro Imperio Romano Germánico Federico II.",
        "Su arquitectura cambió tantas veces que reúne estilos de distintos siglos en un solo edificio."
        ]}
        };

        // Cultural Map Interactivity
        let currentLang = localStorage.getItem("language") || "en";

        let cityData =
            currentLang === "es"
            ? cityDataES
            : cityDataEN;

        let updateCity = null;
        let activeCity = "pisa";
        let cityTitle = null;

        if (document.querySelector(".interactive_map")) {

        const cityButtons = document.querySelectorAll(".city-point");
        const visualOrder = [
            "milan",
            "venice",
            "florence",
            "pisa",
            "rome",
            "naples",
            "palermo"
        ];
        visualOrder.forEach((cityKey) => {
            const btn = document.querySelector(`.city-point[data-city="${cityKey}"]`);
            if (btn) {
                btn.setAttribute("tabindex", "0");
            }
        });
        const mapContainer = document.querySelector(".map");
        visualOrder.forEach(cityKey => {
            const btn = document.querySelector(`.city-point[data-city="${cityKey}"]`);
            if (btn) {
                mapContainer.appendChild(btn);
            }
        });
        
        const cityImage = document.getElementById("cityImage");
        const cityName = document.getElementById("cityName");

        const cityText = document.getElementById("cityText");
        if (cityText) {
            cityText.setAttribute("aria-live", "polite");
        }
        
        const cityFacts = document.getElementById("cityFacts");
        cityTitle = document.getElementById("cityTitle");

        updateCity = function(cityKey) {

            const data = cityData[cityKey];
            if (!data) return;

            activeCity = cityKey;

            cityImage.src = data.image;
            cityImage.alt = data.title;
            cityName.textContent = data.title;
            cityText.innerHTML = data.text;
            cityFacts.innerHTML = "";

            data.facts.forEach(fact => {
                const li = document.createElement("li");
                li.textContent = fact;
                cityFacts.appendChild(li);
            });

            // Active Button
            cityButtons.forEach(btn => btn.classList.remove("active"));
            const activeBtn = document.querySelector(
                `.city-point[data-city="${cityKey}"]`
            );
            if (activeBtn) {
                activeBtn.classList.add("active");
            }
        }

        // City Buttons
        cityButtons.forEach(btn => {

            btn.addEventListener("click", function () {
                const cityKey = this.dataset.city;
                updateCity(cityKey);
            });
            btn.addEventListener("keydown", function (e) {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    const cityKey = this.dataset.city;
                    updateCity(cityKey);
                }
            });
        });
        }
        
        updateCity(activeCity);
        
        return {
        updateCity: (city = activeCity) => {
            updateCity(city);
        },
        setLanguage: (lang) => {
            cityData =
                lang === "es"
                ? cityDataES
                : cityDataEN;

            if (cityTitle) {
                cityTitle.textContent =
                    lang === "es"
                    ? "Datos Curiosos"
                    : "Fun Facts";
            }

            updateCity(activeCity);
        }};
}
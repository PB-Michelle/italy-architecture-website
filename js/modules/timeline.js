export function initTimeline () {
    // Dynamic Texts - Timeline - English
    const timelineDataEN = {
        "1st B.C": {
            title: "1st B.C - 1100s",
            text: "More than a temple, the <b>Pantheon of Rome</b> embodies the ambition of ancient Rome during its transition from Republic to Empire. Although its origins trace back to Marcus Vipsanius Agrippa, the current structure was rebuilt under Hadrian, standing out for its imposing concrete dome—the largest unreinforced dome in the world—and its central oculus, which symbolically connects the earthly space with the divine by allowing light and rain to enter. This feature not only demonstrates Roman engineering, but also their deep integration of architecture, science, and religion. As a cultural icon, the Pantheon established Rome as an artistic benchmark whose legacy would influence movements such as the Renaissance and Neoclassicism, shaping the course of Western architecture. Moreover, its near-perfect preservation makes it an exceptional testament to the durability and precision of Roman techniques. Even today, it remains a key reference point for architects and artists seeking a balance between functionality, symbolism, and beauty.",
            img: "images/timeline/Panteon de Roma.png",
            alt: "Pantheon of Rome"
        },
        "1100s": {
            title: "1100s - 1400s",
            text: "During the Middle Ages, Italian architecture became a bridge between classical heritage and emerging Christian spirituality, and the <b>Siena Cathedral</b> stands as one of its most representative examples. Built between the 12th and 14th centuries, this cathedral blends Romanesque and Italian Gothic elements, distinguished by its striking white-and-black marble façade and richly decorated interior of mosaics and sculptures. More than a place of worship, it functioned as a symbol of the city’s civic and religious power. A curious detail is its marble floor, composed of panels that narrate biblical and allegorical stories, designed to be “read” as one walks across them. Culturally, the cathedral reflects a period in which art and architecture were deeply tied to faith, but also to urban pride, paving the way for the artistic development that would culminate in the Renaissance.",
            img: "images/timeline/Catedral de Siena.png",
            alt: "Siena Cathedral"
        },
        "1400s": {
            title: "1400s - 1580s",
            text: "During the late Middle Ages and the transition toward the Renaissance, Rome began to reassert itself as a spiritual and artistic center, a transformation embodied in the site of the <b>St. Peter’s Basilica</b>. Although the current structure was built later, it stands on the foundations of the original basilica commissioned by Constantine the Great, preserving its significance as the heart of Christianity. Its later redesign brought together some of the greatest minds in architecture, including Donato Bramante and Michelangelo, whose vision introduced monumental scale, perfect symmetry, and a renewed dialogue with classical antiquity. A striking feature is its massive dome, inspired by the Pantheon, which dominates the Roman skyline and symbolizes the connection between heaven and earth. Culturally, the basilica represents the moment when religious devotion, artistic innovation, and political power converged, marking a decisive shift from medieval traditions to the human-centered ideals that would define the Renaissance and reshape Western art and architecture.",
            img: "images/timeline/Basilica de San Pedro.png",
            alt: "St. Peter’s Basilica"
        },
        "1580s": {
            title: "1580s - 1730s",
            text: "During the height of monarchical power in Europe, the <b>Palace of Caserta</b> stands as one of the greatest expressions of Italian Late Baroque architecture. Designed by Luigi Vanvitelli for the Bourbon dynasty, this monumental complex was conceived not only as a royal residence, but as a symbol of control, order, and grandeur. Its architecture integrates classical influences with an imposing scale, while its gardens, fountains, and visual axes reflect an almost theatrical planning of space. A notable feature is its hydraulic system, designed to supply water to the palace’s extensive fountains, considered an advanced engineering achievement for its time. Culturally, the palace represents the culmination of an architectural tradition that transforms art into an instrument of power, projecting the image of an Italy aligned with the great European courts and consolidating the legacy of the Baroque in the visual identity of the continent.",
            img: "images/timeline/Palacio de Caserta.png",
            alt: "Palace of Caserta"
        },
        "1730s": {
            title: "1730s - 1750s",
            text: "During the transition from the late Renaissance to the Baroque and Rococo periods, architecture in Italy became increasingly theatrical, dynamic, and closely tied to aristocratic power. The <b>Palazzina di Caccia di Stupinigi</b>, designed by Filippo Juvarra, embodies this transformation as a refined hunting lodge for the House of Savoy. Its unique layout, with radiating wings extending from a central oval hall, creates a sense of movement and symmetry that reflects the Baroque fascination with perspective and spatial drama. A distinctive feature is the bronze stag placed atop the roof, symbolizing both the building’s purpose and the aristocratic identity it represents. Culturally, Stupinigi illustrates how architecture evolved beyond religious and civic functions to become a medium of leisure, status, and artistic expression, capturing the elegance and sophistication that defined Italian court life during this era.",
            img: "images/timeline/Palacio Stupinigi.png",
            alt: "Palazzina di Caccia di Stupinigi"
        },
        "1750s": {
            title: "1750s - 1920s",
            text: "During the 19th century, Italy embraced industrial progress and urban transformation, a shift exemplified by the <b>Galleria Vittorio Emanuele II</b>. Designed by Giuseppe Mengoni, this elegant arcade combines classical architectural language with innovative materials such as iron and glass, creating a luminous and expansive interior space. Its monumental dome and cross-shaped layout were conceived not only for circulation, but as a social and commercial hub—often referred to as one of the first modern shopping galleries. A curious detail is the mosaic of a bull on the floor, where tradition says that spinning on its heel brings good luck. Culturally, the gallery represents Italy’s transition into modernity, where architecture begins to merge aesthetics, technology, and public life, redefining the urban experience and anticipating the development of contemporary cities.",
            img: "images/timeline/Galleria Vittorio Emanuele II.png",
            alt: "Galleria Vittorio Emanuele II"
        },
        "1920s": {
            title: "1920s - 1950s",
            text: "During the 20th century, Italy explored new ways to express identity and power through architecture, and the <b>Palazzo della Civiltà Italiana</b> became one of the most representative symbols of this process. Designed by Giovanni Guerrini, Ernesto Bruno La Padula, and Mario Romano, the building stands out for its repetitive geometry of arches, inspired by classical Roman architecture but reinterpreted through modern principles of symmetry and rationality. Known as the “Square Colosseum,” its design seeks to project order, permanence, and grandeur. A curious detail is that its six rows of arches are said to symbolize, according to some interpretations, the letters in the name of Benito Mussolini. Culturally, the building reflects how architecture can be used as an ideological tool, merging tradition and modernity to construct a national image, marking a key point in the evolution toward contemporary architecture in Italy.",
            img: "images/timeline/Palazzo della Civiltà Italiana.png",
            alt: "Palazzo della Civiltà Italiana"
        },
        "1950s": {
            title: "1950s - to the present",
            text: "During contemporary architecture, Italy has redefined its relationship with the urban and natural environment, embracing sustainable and innovative solutions. The <b>Bosco Verticale</b>, designed by Stefano Boeri, exemplifies this new vision by integrating more than 900 trees and thousands of plants into two residential towers, creating a vertical ecosystem in the heart of the city. This project not only transforms the urban aesthetic, but also improves air quality and promotes biodiversity in a highly industrialized environment. A notable detail is that the building’s vegetation is equivalent to several hectares of traditional forest, distributed vertically. Culturally, Bosco Verticale represents a paradigm shift in Italian architecture: it is no longer just about constructing spaces, but about designing living systems that respond to today’s environmental challenges, consolidating Italy as a reference in sustainable innovation and contemporary design.",
            img: "images/timeline/Bosco Verticale Milan.png",
            alt: "Bosco Verticale"
        }
    };

    // Dinamic Texts - Timeline - Spanish
    const timelineDataES = {
        "1st B.C": {
            title: "Siglo I a.C - 1100",
            text: "Más que un templo, el <b>Panteón de Roma</b> encarna la ambición de la Roma antigua en su transición de República a Imperio. Aunque su origen se remonta a Marco Vipsanio Agripa, la estructura actual fue reconstruida bajo Adriano, destacando por su imponente cúpula de hormigón —la mayor no armada del mundo— y su óculo central, que conecta simbólicamente el espacio terrenal con lo divino al permitir el paso de la luz y la lluvia. Este detalle no solo evidencia la ingeniería romana, sino también su profunda relación entre arquitectura, ciencia y religión. Como ícono cultural, el Panteón consolidó a Roma como un referente artístico cuyo legado influiría en movimientos como el Renacimiento y el Neoclasicismo, marcando el rumbo de la arquitectura occidental. Además, su conservación casi intacta lo convierte en un testimonio excepcional de la durabilidad y precisión de las técnicas romanas. Incluso hoy, sigue siendo un punto de referencia clave para arquitectos y artistas que buscan equilibrio entre funcionalidad, simbolismo y belleza.",
            img: "images/timeline/Panteon de Roma.png",
            alt: "Panteón de Roma"
        },
        "1100s": {
            title: "1100 - 1400",
            text: "Durante la Edad Media, la arquitectura italiana se convirtió en un puente entre la herencia clásica y la espiritualidad cristiana emergente, y la <b>Catedral de Siena</b> es uno de sus ejemplos más representativos. Construida entre los siglos XII y XIV, esta catedral combina elementos del estilo románico y gótico italiano, destacando por su fachada de mármol blanco y negro y su elaborado interior decorado con mosaicos y esculturas. Más que un lugar de culto, funcionaba como símbolo del poder cívico y religioso de la ciudad. Un dato curioso es que el suelo de la catedral está compuesto por paneles de mármol que narran historias bíblicas y alegóricas, pensados para ser “leídos” mientras se camina sobre ellos. En términos culturales, la catedral refleja una época en la que el arte y la arquitectura estaban profundamente ligados a la fe, pero también al orgullo urbano, marcando el camino hacia el desarrollo artístico que culminaría en el Renacimiento.",
            img: "images/timeline/Catedral de Siena.png",
            alt: "Catedral de Siena"
        },
        "1400s": {
            title: "1400 - 1580",
            text: "Durante la Baja Edad Media y el inicio del Renacimiento, Roma comenzó a reafirmarse como centro espiritual y artístico, una transformación que se refleja en el sitio de la <b>Basílica de San Pedro</b>. Aunque la estructura actual fue construida posteriormente, se levanta sobre los cimientos de la basílica original encargada por Constantino el Grande, conservando su importancia como corazón del cristianismo. Su rediseño posterior reunió a algunas de las mentes más influyentes de la arquitectura, como Donato Bramante y Miguel Ángel, cuya visión introdujo una escala monumental, simetría perfecta y un renovado diálogo con la antigüedad clásica. Uno de sus elementos más impactantes es su enorme cúpula, inspirada en el Panteón, que domina el horizonte romano y simboliza la conexión entre el cielo y la tierra. En términos culturales, la basílica representa el momento en que la devoción religiosa, la innovación artística y el poder político convergen, marcando la transición de las tradiciones medievales hacia los ideales humanistas que definirían el Renacimiento y transformarían el arte y la arquitectura occidental.",
            img: "images/timeline/Basilica de San Pedro.png",
            alt: "Basilica de San Pedro"
        },
        "1580s": {
            title: "1580 - 1730",
            text: "Durante el auge del poder monárquico en Europa, el <b>Palacio de Caserta</b> se erige como una de las máximas expresiones del Barroco tardío italiano. Diseñado por Luigi Vanvitelli para la dinastía borbónica, este complejo monumental fue concebido no solo como residencia real, sino como símbolo de control, orden y grandeza. Su arquitectura integra influencias clásicas con una escala imponente, mientras que sus jardines, fuentes y ejes visuales reflejan una planificación casi escenográfica del espacio. Un dato notable es su sistema hidráulico, diseñado para alimentar las extensas fuentes del palacio, considerado una obra de ingeniería avanzada para su tiempo. En términos culturales, el palacio representa la culminación de una tradición arquitectónica que transforma el arte en instrumento de poder, proyectando la imagen de una Italia alineada con las grandes cortes europeas y consolidando el legado del Barroco en la identidad visual del continente.",
            img: "images/timeline/Palacio de Caserta.png",
            alt: "Palacio de Caserta"
        },
        "1730s": {
            title: "1730 - 1750",
            text: "Durante la transición del Renacimiento tardío al Barroco y el Rococó, la arquitectura en Italia se volvió cada vez más teatral, dinámica y estrechamente ligada al poder aristocrático. La <b>Palazzina di Caccia di Stupinigi</b>, diseñada por Filippo Juvarra, encarna esta transformación como una refinada residencia de caza para la Casa de Saboya. Su diseño único, con alas que se irradian desde un salón central ovalado, crea una sensación de movimiento y simetría que refleja la fascinación barroca por la perspectiva y el dramatismo espacial. Un elemento distintivo es el ciervo de bronce situado en la cima del edificio, símbolo tanto de su función como de la identidad aristocrática que representa. En términos culturales, Stupinigi muestra cómo la arquitectura evolucionó más allá de funciones religiosas y cívicas para convertirse en un medio de ocio, estatus y expresión artística, capturando la elegancia y sofisticación que definieron la vida cortesana italiana en esta época.",
            img: "images/timeline/Palacio Stupinigi.png",
            alt: "Pabellón de caza de Stupinigi"
        },
        "1750s": {
            title: "1750 - 1920",
            text: "Durante el siglo XIX, Italia adoptó el progreso industrial y la transformación urbana, un cambio ejemplificado por la <b>Galleria Vittorio Emanuele II</b>. Diseñada por Giuseppe Mengoni, esta elegante galería combina el lenguaje arquitectónico clásico con materiales innovadores como el hierro y el vidrio, creando un espacio interior amplio y luminoso. Su cúpula monumental y su diseño en forma de cruz fueron concebidos no solo para la circulación, sino como un centro social y comercial, considerado una de las primeras galerías comerciales modernas. Un dato curioso es el mosaico de un toro en el suelo, donde la tradición dice que girar sobre el talón trae buena suerte. En términos culturales, la galería representa la transición de Italia hacia la modernidad, donde la arquitectura comienza a fusionar estética, tecnología y vida pública, redefiniendo la experiencia urbana y anticipando el desarrollo de las ciudades contemporáneas.",
            img: "images/timeline/Galleria Vittorio Emanuele II.png",
            alt: "Galería Victor Manuel II"
        },
        "1920s": {
            title: "1920 - 1950",
            text: "Durante el siglo XX, Italia exploró nuevas formas de expresar identidad y poder a través de la arquitectura, y el <b>Palazzo della Civiltà Italiana</b> se convirtió en uno de los símbolos más representativos de este proceso. Diseñado por Giovanni Guerrini, Ernesto Bruno La Padula y Mario Romano, este edificio destaca por su geometría repetitiva de arcos, inspirada en la arquitectura clásica romana, pero reinterpretada bajo principios modernos de simetría y racionalidad. Conocido como el “Coliseo Cuadrado”, su diseño busca proyectar orden, permanencia y grandeza. Un dato curioso es que sus seis filas de arcos simbolizan, según algunas interpretaciones, las letras del nombre de Benito Mussolini. En términos culturales, el edificio refleja cómo la arquitectura puede ser utilizada como herramienta ideológica, fusionando tradición y modernidad para construir una imagen nacional, marcando un punto clave en la evolución hacia la arquitectura contemporánea en Italia.",
            img: "images/timeline/Palazzo della Civiltà Italiana.png",
            alt: "Palacio de la Civiltà Italiana"
        },
        "1950s": {
            title: "1950 - hasta el presente",
            text: "Durante la arquitectura contemporánea, Italia ha redefinido su relación con el entorno urbano y natural, apostando por soluciones sostenibles e innovadoras. El <b>Bosco Verticale</b>, diseñado por Stefano Boeri, ejemplifica esta nueva visión al integrar más de 900 árboles y miles de plantas en dos torres residenciales, creando un ecosistema vertical en medio de la ciudad. Este proyecto no solo transforma la estética urbana, sino que también mejora la calidad del aire y promueve la biodiversidad en un entorno altamente industrializado. Un dato destacado es que la vegetación del edificio equivale a varias hectáreas de bosque tradicional, distribuidas en altura. En términos culturales, el Bosco Verticale representa un cambio de paradigma en la arquitectura italiana: ya no se trata solo de construir espacios, sino de diseñar sistemas vivos que respondan a los desafíos ambientales del presente, consolidando a Italia como referente en innovación sostenible y diseño contemporáneo.",
            img: "images/timeline/Bosco Verticale Milan.png",
            alt: "Bosque Vertical"
        }
    };

    // Timeline Interactivity
    const circles = document.querySelectorAll(".circle");
    circles.forEach(circle => {
        circle.setAttribute("tabindex", "0");
        circle.setAttribute("role", "button");
    });

    let currentLang = localStorage.getItem("language") || "en";
    let timelineData  =
        currentLang === "es"
        ? timelineDataES
        : timelineDataEN;

    let activeIndex = 0;
    let labels = Object.keys(timelineData);

    const mainTitle = document.getElementById("timelineMainTitle");

    const timelineTitle = document.getElementById("timelineTitle");
    const timelineText = document.getElementById("timelineText");

    const carouselTrack = document.getElementById("carouselTrack");
    const images = carouselTrack ? carouselTrack.querySelectorAll("img") : [];

    const slides = document.querySelectorAll(".slide");

    function updateTimeline(index) {

        const label = labels[index];
        const data = timelineData[label];

        if (!data) return;

        activeIndex = index;

        // Update title
        if (timelineTitle) {
            timelineTitle.textContent = data.title;
        }

        // Update text
        if (timelineText) {
            timelineText.innerHTML = data.text;
        }

        // Update active timeline point
        circles.forEach(circle => {
            circle.classList.remove("active");
            circle.setAttribute("aria-selected", "false");
        });

        if (circles[index]) {
            circles[index].classList.add("active");
            circles[index].setAttribute("aria-selected", "true");
        }

        // Update active slide/image
        slides.forEach(slide =>
            slide.classList.remove("active")
        );

        if (slides[index]) {
            slides[index].classList.add("active");
        }

        if (carouselTrack) {
            carouselTrack.style.transform =
                `translateX(-${index * 100}%)`;
        }
    }

    if (circles.length > 0) {
        circles.forEach((circle,index) => {
            circle.addEventListener("click", () => {
                updateTimeline(index);
            });
            circle.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    updateTimeline(index);
                }
});
        });
    }

    updateTimeline(0);

    return {
        updateTimeline: (index = activeIndex) => {
            updateTimeline(index);
        },
        setLanguage: (lang) => {
            timelineData =
                lang === "es"
                ? timelineDataES
                : timelineDataEN;

            labels = Object.keys(timelineData);
            updateTimeline(activeIndex);

        if (mainTitle) {
            mainTitle.textContent =
                lang === "es" ? "Línea de tiempo" : "Timeline";
        }

        }};
}
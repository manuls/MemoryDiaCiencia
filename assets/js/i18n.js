/**
 * Sistema de internacionalización (i18n) para Memory: Mujeres en la Ciencia
 * Idiomas soportados: Español (es) y Galego (gl)
 */

// ==========================================================================
// Traducciones de la UI
// ==========================================================================

const translations = {
    es: {
        // Page titles
        page_title: "Memory: Mujeres en la Ciencia",
        page_title_about: "Acerca de - Memory: Mujeres en la Ciencia",
        page_title_scientists: "Científicas - Memory: Mujeres en la Ciencia",

        // Header
        main_title: "🧬 Mujeres en la Ciencia",
        subtitle: "11 de febrero · Día Internacional de la Mujer y la Niña en la Ciencia",

        // Stats
        stats_moves: "Movimientos:",
        stats_pairs: "Parejas:",

        // Buttons
        btn_reset: "🔄 Reiniciar",
        btn_howto: "ℹ️ Cómo jugar",
        btn_scientists: "👩‍🔬 Científicas",
        btn_about: "📖 Acerca de",
        btn_play_now: "🎮 Jugar ahora",
        btn_explore: "👩‍🔬 Ver científicas",
        btn_play_again: "🔄 Jugar de nuevo",

        // Scientist modal
        modal_field_label: "Campo de estudio",
        modal_bio_label: "Biografía",
        modal_achievement_label: "🏅 Logro destacado",

        // Victory modal
        victory_title: "¡Felicidades!",
        victory_subtitle: "Has encontrado todas las parejas",
        victory_stat_label: "Movimientos",
        victory_message: "🌟 Has conocido a 10 mujeres increíbles que cambiaron el mundo con la ciencia. ¡Tú también puedes ser una de ellas!",
        victory_explore: "🔍 Puedes seguir explorando la información de las científicas pulsando sobre sus retratos en el tablero.",

        // How to play modal
        howto_title: "Mujeres en la Ciencia",
        howto_subtitle: "11 de febrero · Día Internacional de la Mujer y la Niña en la Ciencia",
        howto_heading: "Cómo jugar",
        howto_steps: "<strong>1.</strong> Toca una carta para voltearla y descubrir a una científica.<br><br><strong>2.</strong> Toca otra carta para buscar su pareja.<br><br><strong>3.</strong> Si las dos cartas son iguales, ¡encontraste una pareja! Aparecerá información sobre ella.<br><br><strong>4.</strong> Si no coinciden, las cartas se voltearán de nuevo.<br><br><strong>5.</strong> Encuentra las 10 parejas para ganar.",
        howto_tip_title: "💡 Consejo",
        howto_tip: "¡Presta atención y usa tu memoria! Cuantos menos movimientos hagas, mejor.",

        // Footer
        footer_made_by: 'Hecho por <a href="http://manuelquiroga.com">Manu Quiroga</a> con 💜 para el <strong>Día Internacional de la Mujer y la Niña en la Ciencia</strong>',
        footer_fsg: "Fundación Secretariado Gitano - Sede Pontevedra",

        // Back link
        back_link: "← Volver al juego",

        // About page
        about_title: "Acerca de este proyecto",
        about_subtitle: "Memory: Mujeres en la Ciencia",
        about_game_title: "🔬 El Juego",
        about_game_p1: '<strong>Memory: Mujeres en la Ciencia</strong> es un juego educativo interactivo creado para celebrar el <strong>Día Internacional de la Mujer y la Niña en la Ciencia</strong> (11 de febrero de 2026).',
        about_game_p2: "El objetivo de este juego es dar visibilidad a mujeres científicas que han hecho contribuciones fundamentales a la ciencia y la tecnología, muchas de ellas sin el reconocimiento que merecían en su época.",
        about_game_p3: "A través de un formato de juego de memoria clásico, las jugadoras pueden:",
        about_game_li1: "Conocer a 10 científicas extraordinarias de diferentes épocas y campos",
        about_game_li2: "Aprender sobre sus logros y contribuciones a la ciencia",
        about_game_li3: "Descubrir cómo estas mujeres cambiaron el mundo",
        about_game_li4: "Inspirarse para seguir sus pasos en el mundo de la ciencia",
        about_author_title: "👤 El Autor",
        about_author_role: "Desarrollador y educador digital",
        about_author_text: "Este proyecto ha sido desarrollado dentro de las actividades del Día Internacional de la Niña y la Mujer en la Ciencia de la Fundación Secretariado Gitano en su sede de Pontevedra.",
        about_license_title: "📜 Licencia",
        about_license_name: "📄 MIT License",
        about_license_text: "Este proyecto es de código abierto y se distribuye bajo la licencia MIT. Esto significa que puedes usar, copiar, modificar y distribuir este software libremente, siempre que incluyas el aviso de copyright original.",
        about_copyright: "Copyright © 2026 Manu Quiroga",
        about_images: "Las imágenes de las científicas son representaciones artísticas de imágenes de dominio público o promocionales.",

        // Scientists gallery page
        gallery_title: "Nuestras Científicas",
        gallery_subtitle: "Conoce a las 10 mujeres que cambiaron el mundo con la ciencia",
        achievement_label: "🏅 Logro destacado",

        // Scientists gallery - individual data
        scientist_1_field: "Matemáticas e Informática",
        scientist_1_bio: "Matemática británica, considerada la primera programadora de la historia. Hija del poeta Lord Byron, trabajó con Charles Babbage en la Máquina Analítica y vio su potencial más allá del cálculo numérico.",
        scientist_1_achievement: "Escribió el primer algoritmo diseñado para ser procesado por una máquina, anticipando la era de los ordenadores más de un siglo antes de que existieran.",
        scientist_2_field: "Química y Cristalografía",
        scientist_2_bio: "Química británica cuyo trabajo fue fundamental para comprender la estructura del ADN. Experta en cristalografía de rayos X, su trabajo fue esencial pero no reconocido en vida.",
        scientist_2_achievement: "Su famosa 'Fotografía 51' fue clave para descubrir la estructura de doble hélice del ADN, uno de los descubrimientos más importantes del siglo XX.",
        scientist_3_field: "Ingeniería e Invención",
        scientist_3_bio: "Actriz e inventora austríaca-estadounidense. Además de su carrera en Hollywood, fue una brillante inventora autodidacta que desarrolló tecnología militar durante la Segunda Guerra Mundial.",
        scientist_3_achievement: "Co-inventó el 'salto de frecuencia', tecnología base del WiFi, Bluetooth y GPS que usamos hoy en día. Fue reconocida con el Premio Pioneer de la Electronic Frontier Foundation.",
        scientist_4_field: "Primatología y Conservación",
        scientist_4_bio: "Primatóloga británica, la mayor experta mundial en chimpancés. Ha dedicado más de 60 años al estudio y conservación de estos animales en Tanzania, revolucionando nuestra comprensión de los primates.",
        scientist_4_achievement: "Descubrió que los chimpancés fabrican y usan herramientas, cambiando para siempre nuestra comprensión de lo que nos diferencia como humanos.",
        scientist_5_field: "Matemáticas y Aeronáutica",
        scientist_5_bio: "Matemática afroamericana que trabajó en la NASA superando barreras raciales y de género. Sus cálculos fueron esenciales para las primeras misiones espaciales de Estados Unidos.",
        scientist_5_achievement: "Calculó las trayectorias de misiones espaciales clave y ayudó a que misiones históricas como el programa Mercury y el Apollo 11 llegaran a buen puerto.",
        scientist_6_field: "Bioquímica y Biología Molecular",
        scientist_6_bio: "Científica española, pionera de la biología molecular en España. Discípula de Severo Ochoa, dedicó su vida a la investigación del ADN y formó a generaciones de científicos españoles.",
        scientist_6_achievement: "Descubrió la ADN polimerasa del virus phi29, usada mundialmente para amplificar ADN en diagnósticos médicos, tests de paternidad y análisis forenses.",
        scientist_7_field: "Ingeniería Robótica",
        scientist_7_bio: "Ingeniera española del CSIC, pionera mundial en robótica de rehabilitación. Creó el primer exoesqueleto pediátrico del mundo para niños con enfermedades neuromusculares.",
        scientist_7_achievement: "Inventó el primer exoesqueleto biónico pediátrico que ayuda a niños con problemas musculares a caminar y rehabilitarse.",
        scientist_8_field: "Química Orgánica",
        scientist_8_bio: "Felisa Reyes Ortega es una científica española gitana, investigadora y profesora. Estudió Química con premio extraordinario, realizó investigación en el CSIC y se doctoró en 2013, rompiendo barreras para las mujeres gitanas en el mundo académico y científico.",
        scientist_8_achievement: "En 2013 se convirtió en la primera mujer gitana en doctorarse en Ciencias Naturales y Experimentales en España.",
        scientist_9_field: "Física y Meteorología",
        scientist_9_bio: "Física española y pionera en meteorología. Fue una de las primeras mujeres en doctorarse en Física en España y desarrolló parte de su carrera científica en el ámbito del estudio de la radiación solar y la atmósfera, abriendo camino a las mujeres en la ciencia.",
        scientist_9_achievement: "Fue una de las primeras mujeres científicas en trabajar en el Servicio Meteorológico Nacional, donde realizó investigaciones sobre radiación solar aplicada a la meteorología.",
        scientist_10_field: "Biotecnología y Medicina",
        scientist_10_bio: "Científica española especializada en biotecnología e investigación oncológica. Trabaja en el Centro Nacional de Investigaciones Oncológicas (CNIO) y en 2022 fue seleccionada como astronauta de reserva de la Agencia Espacial Europea (ESA).",
        scientist_10_achievement: "Fue la primera mujer española seleccionada como astronauta de la ESA (astronauta de reserva), convirtiéndose en un referente para la ciencia y el espacio en España.",
    },

    gl: {
        // Page titles
        page_title: "Memory: Mulleres na Ciencia",
        page_title_about: "Acerca de - Memory: Mulleres na Ciencia",
        page_title_scientists: "Científicas - Memory: Mulleres na Ciencia",

        // Header
        main_title: "🧬 Mulleres na Ciencia",
        subtitle: "11 de febreiro · Día Internacional da Muller e a Nena na Ciencia",

        // Stats
        stats_moves: "Movementos:",
        stats_pairs: "Parellas:",

        // Buttons
        btn_reset: "🔄 Reiniciar",
        btn_howto: "ℹ️ Como xogar",
        btn_scientists: "👩‍🔬 Científicas",
        btn_about: "📖 Acerca de",
        btn_play_now: "🎮 Xogar agora",
        btn_explore: "👩‍🔬 Ver científicas",
        btn_play_again: "🔄 Xogar de novo",

        // Scientist modal
        modal_field_label: "Campo de estudo",
        modal_bio_label: "Biografía",
        modal_achievement_label: "🏅 Logro destacado",

        // Victory modal
        victory_title: "Parabéns!",
        victory_subtitle: "Atopaches todas as parellas",
        victory_stat_label: "Movementos",
        victory_message: "🌟 Coñeciches a 10 mulleres incríbles que cambiaron o mundo coa ciencia. Ti tamén podes ser unha delas!",
        victory_explore: "🔍 Podes seguir explorando a información das científicas premendo sobre os seus retratos no taboleiro.",

        // How to play modal
        howto_title: "Mulleres na Ciencia",
        howto_subtitle: "11 de febreiro · Día Internacional da Muller e a Nena na Ciencia",
        howto_heading: "Como xogar",
        howto_steps: "<strong>1.</strong> Toca unha carta para virala e descubrir a unha científica.<br><br><strong>2.</strong> Toca outra carta para buscar a súa parella.<br><br><strong>3.</strong> Se as dúas cartas son iguais, atopaches unha parella! Aparecerá información sobre ela.<br><br><strong>4.</strong> Se non coinciden, as cartas viraranse de novo.<br><br><strong>5.</strong> Atopa as 10 parellas para gañar.",
        howto_tip_title: "💡 Consello",
        howto_tip: "Presta atención e usa a túa memoria! Cantos menos movementos fagas, mellor.",

        // Footer
        footer_made_by: 'Feito por <a href="http://manuelquiroga.com">Manu Quiroga</a> con 💜 para o <strong>Día Internacional da Muller e a Nena na Ciencia</strong>',
        footer_fsg: "Fundación Secretariado Gitano - Sede Pontevedra",

        // Back link
        back_link: "← Volver ao xogo",

        // About page
        about_title: "Acerca deste proxecto",
        about_subtitle: "Memory: Mulleres na Ciencia",
        about_game_title: "🔬 O Xogo",
        about_game_p1: '<strong>Memory: Mulleres na Ciencia</strong> é un xogo educativo interactivo creado para celebrar o <strong>Día Internacional da Muller e a Nena na Ciencia</strong> (11 de febreiro de 2026).',
        about_game_p2: "O obxectivo deste xogo é dar visibilidade a mulleres científicas que fixeron contribucións fundamentais á ciencia e á tecnoloxía, moitas delas sen o recoñecemento que merecían na súa época.",
        about_game_p3: "A través dun formato de xogo de memoria clásico, as xogadoras poden:",
        about_game_li1: "Coñecer a 10 científicas extraordinarias de diferentes épocas e campos",
        about_game_li2: "Aprender sobre os seus logros e contribucións á ciencia",
        about_game_li3: "Descubrir como estas mulleres cambiaron o mundo",
        about_game_li4: "Inspirarse para seguir os seus pasos no mundo da ciencia",
        about_author_title: "👤 O Autor",
        about_author_role: "Desenvolvedor e educador dixital",
        about_author_text: "Este proxecto foi desenvolvido dentro das actividades do Día Internacional da Nena e a Muller na Ciencia da Fundación Secretariado Gitano na súa sede de Pontevedra.",
        about_license_title: "📜 Licenza",
        about_license_name: "📄 MIT License",
        about_license_text: "Este proxecto é de código aberto e distribúese baixo a licenza MIT. Isto significa que podes usar, copiar, modificar e distribuír este software libremente, sempre que inclúas o aviso de copyright orixinal.",
        about_copyright: "Copyright © 2026 Manu Quiroga",
        about_images: "As imaxes das científicas son representacións artísticas de imaxes de dominio público ou promocionais.",

        // Scientists gallery page
        gallery_title: "As nosas Científicas",
        gallery_subtitle: "Coñece ás 10 mulleres que cambiaron o mundo coa ciencia",
        achievement_label: "🏅 Logro destacado",

        // Scientists gallery - individual data
        scientist_1_field: "Matemáticas e Informática",
        scientist_1_bio: "Matemática británica, considerada a primeira programadora da historia. Filla do poeta Lord Byron, traballou con Charles Babbage na Máquina Analítica e viu o seu potencial máis alá do cálculo numérico.",
        scientist_1_achievement: "Escribiu o primeiro algoritmo deseñado para ser procesado por unha máquina, anticipando a era dos ordenadores máis dun século antes de que existisen.",
        scientist_2_field: "Química e Cristalografía",
        scientist_2_bio: "Química británica cuxo traballo foi fundamental para comprender a estrutura do ADN. Experta en cristalografía de raios X, o seu traballo foi esencial pero non recoñecido en vida.",
        scientist_2_achievement: "A súa famosa 'Fotografía 51' foi clave para descubrir a estrutura de dobre hélice do ADN, un dos descubrimentos máis importantes do século XX.",
        scientist_3_field: "Enxeñaría e Invención",
        scientist_3_bio: "Actriz e inventora austríaca-estadounidense. Ademais da súa carreira en Hollywood, foi unha brillante inventora autodidacta que desenvolveu tecnoloxía militar durante a Segunda Guerra Mundial.",
        scientist_3_achievement: "Co-inventou o 'salto de frecuencia', tecnoloxía base do WiFi, Bluetooth e GPS que usamos hoxe en día. Foi recoñecida co Premio Pioneer da Electronic Frontier Foundation.",
        scientist_4_field: "Primatoloxía e Conservación",
        scientist_4_bio: "Primatóloga británica, a maior experta mundial en chimpancés. Dedicou máis de 60 anos ao estudo e conservación destes animais en Tanzania, revolucionando a nosa comprensión dos primates.",
        scientist_4_achievement: "Descubriu que os chimpancés fabrican e usan ferramentas, cambiando para sempre a nosa comprensión do que nos diferencia como humanos.",
        scientist_5_field: "Matemáticas e Aeronáutica",
        scientist_5_bio: "Matemática afroamericana que traballou na NASA superando barreiras raciais e de xénero. Os seus cálculos foron esenciais para as primeiras misións espaciais dos Estados Unidos.",
        scientist_5_achievement: "Calculou as traxectorias de misións espaciais clave e axudou a que misións históricas como o programa Mercury e o Apollo 11 chegasen a bo porto.",
        scientist_6_field: "Bioquímica e Bioloxía Molecular",
        scientist_6_bio: "Científica española, pioneira da bioloxía molecular en España. Discípula de Severo Ochoa, dedicou a súa vida á investigación do ADN e formou xeracións de científicos españois.",
        scientist_6_achievement: "Descubriu a ADN polimerasa do virus phi29, usada mundialmente para amplificar ADN en diagnósticos médicos, tests de paternidade e análises forenses.",
        scientist_7_field: "Enxeñaría Robótica",
        scientist_7_bio: "Enxeñeira española do CSIC, pioneira mundial en robótica de rehabilitación. Creou o primeiro exoesqueleto pediátrico do mundo para nenos con enfermidades neuromusculares.",
        scientist_7_achievement: "Inventou o primeiro exoesqueleto biónico pediátrico que axuda a nenos con problemas musculares a camiñar e rehabilitarse.",
        scientist_8_field: "Química Orgánica",
        scientist_8_bio: "Felisa Reyes Ortega é unha científica española xitana, investigadora e profesora. Estudou Química con premio extraordinario, realizou investigación no CSIC e doutorouse en 2013, rompendo barreiras para as mulleres xitanas no mundo académico e científico.",
        scientist_8_achievement: "En 2013 converteuse na primeira muller xitana en doutorarse en Ciencias Naturais e Experimentais en España.",
        scientist_9_field: "Física e Meteoroloxía",
        scientist_9_bio: "Física española e pioneira en meteoroloxía. Foi unha das primeiras mulleres en doutorarse en Física en España e desenvolveu parte da súa carreira científica no ámbito do estudo da radiación solar e a atmosfera, abrindo camiño ás mulleres na ciencia.",
        scientist_9_achievement: "Foi unha das primeiras mulleres científicas en traballar no Servizo Meteorolóxico Nacional, onde realizou investigacións sobre radiación solar aplicada á meteoroloxía.",
        scientist_10_field: "Biotecnoloxía e Medicina",
        scientist_10_bio: "Científica española especializada en biotecnoloxía e investigación oncolóxica. Traballa no Centro Nacional de Investigacións Oncolóxicas (CNIO) e en 2022 foi seleccionada como astronauta de reserva da Axencia Espacial Europea (ESA).",
        scientist_10_achievement: "Foi a primeira muller española seleccionada como astronauta da ESA (astronauta de reserva), converténdose nun referente para a ciencia e o espazo en España.",
    }
};

// ==========================================================================
// Traducciones de datos de científicas
// ==========================================================================

const scientistTranslations = {
    gl: {
        1: {
            field: "Matemáticas e Informática",
            bio: "Matemática británica, considerada a primeira programadora da historia. Filla do poeta Lord Byron, traballou con Charles Babbage na Máquina Analítica e viu o seu potencial máis alá do cálculo numérico.",
            achievement: "Escribiu o primeiro algoritmo deseñado para ser procesado por unha máquina, anticipando a era dos ordenadores máis dun século antes de que existisen."
        },
        2: {
            field: "Química e Cristalografía",
            bio: "Química británica cuxo traballo foi fundamental para comprender a estrutura do ADN. Experta en cristalografía de raios X, o seu traballo foi esencial pero non recoñecido en vida.",
            achievement: "A súa famosa 'Fotografía 51' foi clave para descubrir a estrutura de dobre hélice do ADN, un dos descubrimentos máis importantes do século XX."
        },
        3: {
            field: "Enxeñaría e Invención",
            bio: "Actriz e inventora austríaca-estadounidense. Ademais da súa carreira en Hollywood, foi unha brillante inventora autodidacta que desenvolveu tecnoloxía militar durante a Segunda Guerra Mundial.",
            achievement: "Co-inventou o 'salto de frecuencia', tecnoloxía base do WiFi, Bluetooth e GPS que usamos hoxe en día. Foi recoñecida co Premio Pioneer da Electronic Frontier Foundation."
        },
        4: {
            field: "Primatoloxía e Conservación",
            bio: "Primatóloga británica, a maior experta mundial en chimpancés. Dedicou máis de 60 anos ao estudo e conservación destes animais en Tanzania, revolucionando a nosa comprensión dos primates.",
            achievement: "Descubriu que os chimpancés fabrican e usan ferramentas, cambiando para sempre a nosa comprensión do que nos diferencia como humanos."
        },
        5: {
            field: "Matemáticas e Aeronáutica",
            bio: "Matemática afroamericana que traballou na NASA superando barreiras raciais e de xénero. Os seus cálculos foron esenciais para as primeiras misións espaciais dos Estados Unidos.",
            achievement: "Calculou as traxectorias de misións espaciais clave e axudou a que misións históricas como o programa Mercury e o Apollo 11 chegasen a bo porto."
        },
        6: {
            field: "Bioquímica e Bioloxía Molecular",
            bio: "Científica española, pioneira da bioloxía molecular en España. Discípula de Severo Ochoa, dedicou a súa vida á investigación do ADN e formou xeracións de científicos españois.",
            achievement: "Descubriu a ADN polimerasa do virus phi29, usada mundialmente para amplificar ADN en diagnósticos médicos, tests de paternidade e análises forenses."
        },
        7: {
            field: "Enxeñaría Robótica",
            bio: "Enxeñeira española do CSIC, pioneira mundial en robótica de rehabilitación. Creou o primeiro exoesqueleto pediátrico do mundo para nenos con enfermidades neuromusculares.",
            achievement: "Inventou o primeiro exoesqueleto biónico pediátrico que axuda a nenos con problemas musculares a camiñar e rehabilitarse."
        },
        8: {
            field: "Química Orgánica",
            bio: "Felisa Reyes Ortega é unha científica española xitana, investigadora e profesora. Estudou Química con premio extraordinario, realizou investigación no CSIC e doutorouse en 2013, rompendo barreiras para as mulleres xitanas no mundo académico e científico.",
            achievement: "En 2013 converteuse na primeira muller xitana en doutorarse en Ciencias Naturais e Experimentais en España."
        },
        9: {
            field: "Física e Meteoroloxía",
            bio: "Física española e pioneira en meteoroloxía. Foi unha das primeiras mulleres en doutorarse en Física en España e desenvolveu parte da súa carreira científica no ámbito do estudo da radiación solar e a atmosfera, abrindo camiño ás mulleres na ciencia.",
            achievement: "Foi unha das primeiras mulleres científicas en traballar no Servizo Meteorolóxico Nacional, onde realizou investigacións sobre radiación solar aplicada á meteoroloxía."
        },
        10: {
            field: "Biotecnoloxía e Medicina",
            bio: "Científica española especializada en biotecnoloxía e investigación oncolóxica. Traballa no Centro Nacional de Investigacións Oncolóxicas (CNIO) e en 2022 foi seleccionada como astronauta de reserva da Axencia Espacial Europea (ESA).",
            achievement: "Foi a primeira muller española seleccionada como astronauta da ESA (astronauta de reserva), converténdose nun referente para a ciencia e o espazo en España."
        }
    }
};

// ==========================================================================
// Funciones del sistema i18n
// ==========================================================================

/**
 * Obtiene el idioma actual desde localStorage
 * @returns {string} 'es' o 'gl'
 */
function getLang() {
    return localStorage.getItem('memoryLang') || 'gl';
}

/**
 * Establece el idioma y aplica las traducciones
 * @param {string} lang - 'es' o 'gl'
 */
function setLang(lang) {
    localStorage.setItem('memoryLang', lang);
    document.documentElement.lang = lang;
    applyTranslations();
    updateSwitcher();
}

/**
 * Aplica las traducciones a todos los elementos con data-i18n o data-i18n-html
 */
function applyTranslations() {
    const lang = getLang();
    const t = translations[lang];

    // Traducir título de la página
    const titleKey = document.documentElement.dataset.i18nTitle;
    if (titleKey && t[titleKey]) {
        document.title = t[titleKey];
    }

    // Traducir elementos con data-i18n (texto plano)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Traducir elementos con data-i18n-html (contenido HTML)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
}

/**
 * Devuelve los datos traducidos de una científica
 * @param {Object} scientist - Datos originales de la científica
 * @returns {Object} Datos con field, bio y achievement traducidos
 */
function getScientistData(scientist) {
    const lang = getLang();
    if (lang === 'es') return scientist;

    const t = scientistTranslations[lang] && scientistTranslations[lang][scientist.id];
    if (!t) return scientist;

    return {
        ...scientist,
        field: t.field || scientist.field,
        bio: t.bio || scientist.bio,
        achievement: t.achievement || scientist.achievement
    };
}

/**
 * Actualiza el estado visual del switcher
 */
function updateSwitcher() {
    const lang = getLang();
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

/**
 * Crea e inyecta el language switcher en la página
 */
function createLangSwitcher() {
    const container = document.querySelector('.container, .about-container, .gallery-container');
    if (!container) return;

    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.innerHTML = `
        <button class="lang-btn" data-lang="gl">GL</button>
        <span class="lang-separator">|</span>
        <button class="lang-btn" data-lang="es">ES</button>
    `;

    container.insertBefore(switcher, container.firstChild);

    switcher.addEventListener('click', (e) => {
        const btn = e.target.closest('.lang-btn');
        if (btn) {
            setLang(btn.dataset.lang);
        }
    });
}

// ==========================================================================
// Inicialización automática
// ==========================================================================

(function initI18n() {
    createLangSwitcher();
    document.documentElement.lang = getLang();
    applyTranslations();
    updateSwitcher();
})();

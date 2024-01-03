function translateText(project, language) {
    const translations = {
        moviez: {
            english: "This project, originally part of ARGENTINA PROGRAMA, has been customized with improvements and extensions. Designed with JavaScript, Bootstrap, and CSS, it uses The Movie Database (TMDb) API as its main source of movie data. It allows users to explore popular movies, top-rated ones, and upcoming releases, as well as search for movies by director or actor. Upon selecting a movie, it displays a modal with essential details like title, description, rating, and release year. This simplified interface aims to facilitate exploration and access to relevant movie information by integrating the TMDb API.",
            german: "Dieses Projekt, das ursprünglich Teil von ARGENTINA PROGRAMA war, wurde mit Verbesserungen und Erweiterungen individualisiert. Entwickelt mit JavaScript, Bootstrap und CSS, nutzt es die The Movie Database (TMDb) API als Hauptquelle für Filmdaten. Es ermöglicht Benutzern, populäre Filme, die am besten bewerteten und kommende Veröffentlichungen zu erkunden sowie nach Filmen nach Regisseur oder Schauspieler zu suchen. Nach der Auswahl eines Films zeigt es ein Modal mit wesentlichen Details wie Titel, Beschreibung, Bewertung und Erscheinungsjahr an. Diese vereinfachte Benutzeroberfläche zielt darauf ab, die Erkundung und den Zugang zu relevanten Filminformationen durch Integration der TMDb-API zu erleichtern."
        },
        diego: {
            english: "The project focuses on displaying random quotes by Diego Armando Maradona on a web page. A JavaScript function has been implemented to randomly select one of the famous phrases of the legendary Argentine footballer and dynamically display it in an HTML element. These quotes represent iconic and memorable expressions from Diego's legacy.",
            german: "Das Projekt konzentriert sich darauf, zufällige Zitate von Diego Armando Maradona auf einer Webseite anzuzeigen. Es wurde eine JavaScript-Funktion implementiert, um zufällig eine der berühmten Phrasen des legendären argentinischen Fußballers auszuwählen und dynamisch in einem HTML-Element anzuzeigen. Diese Zitate repräsentieren ikonische und unvergessliche Ausdrücke aus Diegos Vermächtnis."
        },
        clasico: {
            english: "This platform for analyzing historical encounters between Estudiantes and Gimnasia offers football fans the opportunity to explore in detail the rich history of matches between these teams. With intuitive filtering functions, users can investigate and examine past matches by date, tournament type, involved teams, and stadiums, providing an interactive experience to relive the exciting rivalry between Gimnasia and Estudiantes.",
            german: "Diese Plattform zur Analyse historischer Begegnungen zwischen Estudiantes und Gimnasia bietet Fußballfans die Möglichkeit, die reiche Geschichte der Spiele zwischen diesen Teams im Detail zu erkunden. Mit intuitiven Filterfunktionen können Benutzer vergangene Spiele nach Datum, Turniertyp, beteiligten Teams und Stadien untersuchen und untersuchen, was ein interaktives Erlebnis bietet, um die aufregende Rivalität zwischen Gimnasia und Estudiantes wiederzuerleben."
        }
        
    };

    const textElement = document.querySelector(`.proyecto-${project} p`);
    if (textElement) {
        textElement.textContent = translations[project][language];
    }
}

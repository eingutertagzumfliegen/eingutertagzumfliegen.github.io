function translateToEnglish() {
    const text = document.querySelector('.sobre-mi p');
    const translatedText = `As a full-stack developer, my experience spans PHP development using the popular Laravel framework for building robust and efficient web applications. My knowledge in JavaScript, CSS, and HTML enables me to design interactive and appealing interfaces, optimizing user experience in each project.

    My expertise in database management complements my technical ability, allowing me to create solid and scalable systems. I have worked with different types of databases, ensuring efficient and secure information storage.
    
    My comprehensive approach to web development ranges from implementing backend logic with PHP and Laravel to constructing dynamic interfaces with JavaScript, CSS, and HTML. This versatility enables me to offer complete solutions, from conceptualization to implementation and final product deployment.
    
    With a strong command of the mentioned technologies and a deep understanding of their interaction, I am equipped to tackle complex challenges and materialize innovative ideas into functional and appealing web projects for end users.`;

    text.textContent = translatedText;
}

function translateToGerman() {
    const text = document.querySelector('.sobre-mi p');
    const translatedText = `Als Full-Stack-Entwickler umfasst meine Erfahrung die PHP-Entwicklung unter Verwendung des beliebten Laravel-Frameworks zum Aufbau robuster und effizienter Webanwendungen. Mein Wissen in JavaScript, CSS und HTML ermöglicht es mir, interaktive und ansprechende Benutzeroberflächen zu gestalten und die Benutzererfahrung in jedem Projekt zu optimieren.

    Meine Expertise im Datenbankmanagement ergänzt meine technischen Fähigkeiten und ermöglicht es mir, solide und skalierbare Systeme zu erstellen. Ich habe mit verschiedenen Arten von Datenbanken gearbeitet und so eine effiziente und sichere Speicherung von Informationen gewährleistet.
    
    Mein umfassender Ansatz für die Webentwicklung reicht von der Implementierung von Backend-Logik mit PHP und Laravel bis hin zum Aufbau dynamischer Benutzeroberflächen mit JavaScript, CSS und HTML. Diese Vielseitigkeit ermöglicht es mir, vollständige Lösungen anzubieten, von der Konzeption bis zur Implementierung und Bereitstellung des Endprodukts.
    
    Mit einem fundierten Verständnis der genannten Technologien und deren Interaktion bin ich in der Lage, komplexe Herausforderungen anzugehen und innovative Ideen in funktionale und ansprechende Webprojekte für Endbenutzer umzusetzen.`;

    text.textContent = translatedText;
}


// Códigos PHP al azar
const codigosPHP = [
    `<?php
    function elevarAlCuadrado($numero) {
        return $numero * $numero;
    }
    ?>`,
    
    "<?php $variable = 10; echo $variable * 5; ?>",
    "<?php function saludar() { return '¡Hola!'; } echo saludar(); ?>"
];


let currentCodeIndex = 0;
let currentCharacterIndex = 0;
let interval;

// Función para mostrar un código PHP al azar letra por letra
function mostrarCodigoPHP() {
    const codigoPHPElement = document.getElementById("codigoPHP");
    if (codigoPHPElement) {
        currentCodeIndex = Math.floor(Math.random() * codigosPHP.length);
        const codigoAleatorio = codigosPHP[currentCodeIndex];
        codigoPHPElement.textContent = "";

        clearInterval(interval);
        currentCharacterIndex = 0;
        interval = setInterval(() => {
            if (currentCharacterIndex <= codigoAleatorio.length) {
                codigoPHPElement.textContent = codigoAleatorio.slice(0, currentCharacterIndex);
                currentCharacterIndex++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Intervalo de 100 milisegundos (cambiable)
    }
}

// Asignar la función mostrarCodigoPHP al hacer clic en el cuadrado negro
document.getElementById("codigoPHP").addEventListener("load", mostrarCodigoPHP);

// Mostrar un código PHP al azar al cargar la página
mostrarCodigoPHP();


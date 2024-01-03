const frasesMaradona = [
    "La pelota no se mancha",
    "Dios me iluminó en ese momento",
    "Si me das a elegir, yo elijo siempre a Maradona",
    "Ganarle a River es como que tu mamá te venga a despertar con un beso a la mañana",
    "Yo amo a Boca, pero ojo, que mi corazoncito ama al Tripero",
    "Enfrente hay una yunta que me tiró de los huevos para abajo y esa no se la perdono a nadie",
    "Yo sigo si el presidente sigue. Solamente las ratas huyen cuando el barco se hunde, yo rata no soy",
    "Lo único que le pido a Dios es que Macri llegue como presidente a cortar el pan dulce",
    "Pelé debutó con un pibe… Y le pegó a la jermu",
    "Si a Sampaoli le tirás la pelota, te la devuelve con la mano",
    "Bilardo es como Berisso: está detrás de La Plata",
    "Segurola y Habana 4310, séptimo piso. Y vamos a ver si me dura 30 segundos",
    "Para jugar contra Australia nos daban café veloz",
    "La Tota integró la barrera cuando me peloteaban de todos lados",
    "Pasman, vos también la tenés adentro",
    "La lista que me pidió Grondona, que yo se la di, era un tocuen. Tocuen es cuento",
    "Bush es un asesino, yo prefiero ser amigo de Fidel",
    "Ser Maradona es hermoso. Soy un tipo normal que por hacerle un gol a los ingleses, que nos mataron a los pibes en Malvinas, hoy la gente me conoce. Pero soy el tipo más normal",
    "Crecí en un barrio privado de Buenos Aires. Privado de luz, de agua, de teléfono",
    "Esto te da vida, el fútbol te da vida",
    "Voy a ser Cristinista, hasta los huevos",
    "Mi viejo fue peronista, mi vieja adoraba a Evita, y yo fui, soy, y seré siempre peronista",
   
];

function cambiarFrase() {
    const fraseElement = document.getElementById("fraseDiego");
    const indice = Math.floor(Math.random() * frasesMaradona.length);
    const fraseConComillas = `"${frasesMaradona[indice]}"`; // Agregar comillas alrededor de la frase
    fraseElement.textContent = fraseConComillas;
}

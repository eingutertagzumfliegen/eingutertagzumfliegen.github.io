const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".navlist");
const links = document.querySelectorAll(".navlist li");

menuIcon.addEventListener('click', () => {

	navLinks.classList.toggle("open");
	links.forEach(link => {
		link.classList.toggle("fade");
	});

	menuIcon.classList.toggle("toggle");
});





var clasicos = [
	{
		id: 1,
		day: 27,
		month: "Agosto",
		year: 1916,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1916",
		matchday: 19,
		teamHome: "Estudiantes",
		goalsHome: 0,
		goalsAway: 1,
		teamAway: "Gimnasia",
		score: "1-0",
		stadium: "Jorge Luis Hirschi",
		note: "",
		ganador: "Gimnasia",
		goles: "24' L. Pastor e/c (G)",
	},
	{
		id: 2,
		day: 1,
		month: "Julio",
		year: 1917,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1917",
		matchday: 14,
		teamHome: "Estudiantes",
		goalsHome: 3,
		goalsAway: 0,
		teamAway: "Gimnasia",
		score: "3-0",
		stadium: "Jorge Luis Hirschi",
		note: "",
		ganador: "Estudiantes",
	},
	{
		id: 3,
		day: 11,
		month: "Agosto",
		year: 1918,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1918",
		matchday: 16,
		teamHome: "Estudiantes",
		goalsHome: 0,
		goalsAway: 0,
		teamAway: "Gimnasia",
		score: "0-0",
		stadium: "Jorge Luis Hirschi",
		note: "",
		ganador: "",
	},

	{
		id: 4,
		day: 15,
		month: "Junio",
		year: 1924,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1924",
		matchday: 11,
		teamHome: "Estudiantes",
		goalsHome: 1,
		goalsAway: 1,
		teamAway: "Gimnasia",
		score: "1-1",
		stadium: "Jorge Luis Hirschi",
		ganador: "Empate",
		note: "",
	},

	{
		id: 5,
		day: 23,
		month: "Noviembre",
		year: 1924,
		tipoTorneo: "Copas Nacionales",
		torneo: "Copa de Competencia 1924",
		matchday: 2,
		teamHome: "Estudiantes",
		goalsHome: 2,
		goalsAway: 2,
		teamAway: "Gimnasia",
		score: "2-2",
		stadium: "Jorge Luis Hirschi",
		ganador: "Empate",
		note: "",
	},

	{
		id: 6,
		day: 30,
		month: "Noviembre",
		year: 1924,
		tipoTorneo: "Copas Nacionales",
		torneo: "Copa de Competencia 1924",
		matchday: 7,
		teamHome: "Gimnasia",
		goalsHome: "",
		goalsAway: "",
		teamAway: "Estudiantes",
		score: "Suspendido",
		stadium: "Juan Carmelo Zerillo",
		ganador: "Gimnasia",
		note: "Este encuentro debía jugarse en La Plata, pero Estudiantes de La Plata no se presentó.",
	},
	{
		id: 7,
		day: 3,
		month: "Mayo",
		year: 1925,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1925",
		matchday: 5,
		teamHome: "Estudiantes",
		goalsHome: 1,
		goalsAway: 1,
		teamAway: "Gimnasia",
		score: "1-1",
		stadium: "Jorge Luis Hirschi",
		ganador: "Empate",
		note: "",
	},
	{
		id: 8,
		day: 22,
		month: "Agosto",
		year: 1926,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1926",
		matchday: 19,
		teamHome: "Gimnasia",
		goalsHome: 1,
		goalsAway: 3,
		teamAway: "Estudiantes",
		score: "3-1",
		stadium: "Juan Carmelo Zerillo",
		ganador: "Estudiantes",
		note: "",
	},
	{
		id: 9,
		day: 18,
		month: "Diciembre",
		year: 1927,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1927",
		matchday: 28,
		teamHome: "Gimnasia",
		goalsHome: 0,
		goalsAway: 3,
		teamAway: "Estudiantes",
		score: "3-0",
		stadium: "Juan Carmelo Zerillo",
		ganador: "Estudiantes",
		note: "",
	},
	{
		id: 10,
		day: 29,
		month: "Julio",
		year: 1928,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1928",
		matchday: 10,
		teamHome: "Estudiantes",
		goalsHome: 3,
		goalsAway: 0,
		teamAway: "Gimnasia",
		score: "3-0",
		stadium: "Jorge Luis Hirschi",
		ganador: "Estudiantes",
		note: "",
	},
	{
		id: 11,
		day: 22,
		month: "Septiembre",
		year: 1929,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1929",
		matchday: 7,
		teamHome: "Gimnasia",
		goalsHome: "",
		goalsAway: "",
		teamAway: "Estudiantes",
		score: "Suspendido",
		stadium: "Juan Carmelo Zerillo",
		ganador: "Gimnasia",
		note: "El equipo de Estudiantes de La Plata no se presentó al partido y abandonó la disputa del certamen.",
	},
	{
		id: 12,
		day: 14,
		month: "Septiembre",
		year: 1930,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1930",
		matchday: 16,
		teamHome: "Estudiantes",
		goalsHome: 4,
		goalsAway: 1,
		teamAway: "Gimnasia",
		score: "4-1",
		stadium: "Jorge Luis Hirschi",
		ganador: "Estudiantes",
		note: "",
	},
	{
		id: 13,
		day: 14,
		month: "Junio",
		year: 1931,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1931",
		matchday: 4,
		teamHome: "Gimnasia",
		goalsHome: 1,
		goalsAway: 1,
		teamAway: "Estudiantes",
		score: "1-1",
		stadium: "Juan Carmelo Zerillo",
		ganador: "Empate",
		note: "",
	},
	{
		id: 14,
		day: 18,
		month: "Octubre",
		year: 1931,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1931",
		matchday: 21,
		teamHome: "Estudiantes",
		goalsHome: 2,
		goalsAway: 3,
		teamAway: "Gimnasia",
		score: "3-2",
		stadium: "Jorge Luis Hirschi",
		ganador: "Gimnasia",
		note: "",
	},
	{
		id: 15,
		day: 13,
		month: "Marzo",
		year: 1932,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1932",
		matchday: 1,
		teamHome: "Estudiantes",
		goalsHome: 6,
		goalsAway: 1,
		teamAway: "Gimnasia",
		score: "6-1",
		stadium: "Jorge Luis Hirschi",
		ganador: "Estudiantes",
		note: "",
	},
	{
		id: 16,
		day: 24,
		month: "Julio",
		year: 1932,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1932",
		matchday: 18,
		teamHome: "Gimnasia",
		goalsHome: 2,
		goalsAway: 3,
		teamAway: "Estudiantes",
		score: "3-2",
		stadium: "Juan Carmelo Zerillo",
		ganador: "Estudiantes",
		note: "",
	},
	{
		id: 17,
		day: 8,
		month: "Diciembre",
		year: 1932,
		tipoTorneo: "Copas Nacionales",
		torneo: "Copa de Honor Sr. Beccar Varela",
		matchday: 1,
		teamHome: "Gimnasia",
		goalsHome: 2,
		goalsAway: 1,
		teamAway: "Estudiantes",
		score: "2-1",
		stadium: "San Lorenzo",
		ganador: "Gimnasia",
		note: "",
	},
	{
		id: 18,
		day: 12,
		month: "Marzo",
		year: 1933,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1933",
		matchday: 1,
		teamHome: "Estudiantes",
		goalsHome: 0,
		goalsAway: 2,
		teamAway: "Gimnasia",
		score: "2-0",
		stadium: "Jorge Luis Hirschi",
		ganador: "Gimnasia",
		note: "",
	},
	{
		id: 19,
		day: 16,
		month: "Julio",
		year: 1933,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1933",
		matchday: 18,
		teamHome: "Gimnasia",
		goalsHome: 1,
		goalsAway: 0,
		teamAway: "Estudiantes",
		score: "1-0",
		stadium: "Juan Carmelo Zerillo",
		ganador: "Gimnasia",
		note: "",
	},
	{
		id: 20,
		day: 10,
		month: "Junio",
		year: 1934,
		tipoTorneo: "Primera División",
		torneo: "Campeonato 1934",
		matchday: 11,
		teamHome: "Gimnasia",
		goalsHome: 0,
		goalsAway: 1,
		teamAway: "Estudiantes",
		score: "Suspendido",
		stadium: "Juan Carmelo Zerillo",
		ganador: "Gimnasia",
		note: "El partido se le dió ganado a Gimnasia ya que por la expulsión del jugador, Dañil,. el conjunto de Estudiantes se retiró del campo de juego.",
	},
	
];


var selectId = document.getElementById("id");
for (var i = 1; i <= 20; i++) {
	var option = document.createElement("option");
	option.value = i;
	option.text = i;
	selectId.appendChild(option);
}
selectId.value = ""; // Set default value to empty

var selectDay = document.getElementById("day");
for (var i = 1; i <= 31; i++) {
	var option = document.createElement("option");
	option.value = i;
	option.text = i;
	selectDay.appendChild(option);
}
selectDay.value = ""; // Set default value to empty

var selectYear = document.getElementById("year");
for (var i = 1916; i <= 1934; i++) {
	var option = document.createElement("option");
	option.value = i;
	option.text = i;
	selectYear.appendChild(option);
}
selectYear.value = ""; // Set default value to empty

var selectMatchDay = document.getElementById("matchDay");
for (var i = 1; i <= 38; i++) {
	var option = document.createElement("option");
	option.value = i;
	option.text = i;
	selectMatchDay.appendChild(option);
}
selectMatchDay.value = ""; // Set default value to empty

function filtrar() {
	var idSeleccionado = document.getElementById("id").value;
	var daySeleccionado = document.getElementById("day").value;
	var monthSeleccionado = document.getElementById("month").value;
	var yearSeleccionado = document.getElementById("year").value;
	var tipoTorneoSeleccionado = document.getElementById("tipoTorneo").value;
	var matchDaySeleccionado = document.getElementById("matchDay").value;
	var teamHomeSeleccionado = document.getElementById("teamHome").value;
	var scoreSeleccionado = document.getElementById("score").value;
	var teamAwaySeleccionado = document.getElementById("teamAway").value;
	var stadiumSeleccionado = document.getElementById("stadium").value;
	var ganadorSeleccionado = document.getElementById("ganador").value;

	var resultadosFiltrados = clasicos.filter(function (clasico) {
		return (
			(idSeleccionado === "" || clasico.id == idSeleccionado) &&
			(daySeleccionado === "" || clasico.day == daySeleccionado) &&
			(monthSeleccionado === "" || clasico.month == monthSeleccionado) &&
			(yearSeleccionado === "" || clasico.year == yearSeleccionado) &&
			(tipoTorneoSeleccionado === "" || clasico.tipoTorneo == tipoTorneoSeleccionado) &&
			(matchDaySeleccionado === "" || clasico.matchday == matchDaySeleccionado) &&
			(teamHomeSeleccionado === "" || clasico.teamHome == teamHomeSeleccionado) &&
			(scoreSeleccionado === "" || clasico.score == scoreSeleccionado) &&
			(teamAwaySeleccionado === "" || clasico.teamAway == teamAwaySeleccionado) &&
			(stadiumSeleccionado === "" || clasico.stadium == stadiumSeleccionado) &&
			(ganadorSeleccionado === "" || clasico.ganador == ganadorSeleccionado)
		);
	});

	mostrarResultados(resultadosFiltrados);
}



function mostrarResultados(resultados) {
	var resultadoDiv = document.getElementById("resultado");
	resultadoDiv.innerHTML = "";

	if (resultados.length === 0) {
		resultadoDiv.innerHTML = "No se encontraron resultados.";
	} else {
		var resultadosContainer = document.createElement("div");
		resultadosContainer.classList.add("resultados-container");

		var contadorEmpates = 0; // Contador de empates
		var contadorVictoriasGimnasia = 0; // Contador de victorias de Gimnasia
		var contadorVictoriasEstudiantes = 0; // Contador de victorias de Estudiantes
		var totalGolesGimnasia = 0; // Total de goles de Gimnasia
		var totalGolesEstudiantes = 0; // Total de goles de Estudiantes
		var contadorPartidosJugados = resultados.length; // Contador de partidos jugados

		resultados.forEach(function (clasico) {
			var contenedorPrincipal = document.createElement("div");
			contenedorPrincipal.classList.add("contenedor-resultado-busqueda");

			var fila1 = document.createElement("div");
			fila1.classList.add("con-prin-fila-1");
			fila1.textContent = "Clásico Nº " + clasico.id;

			var fila2 = document.createElement("div");
			fila2.classList.add("con-prin-fila-2");

			// Create four columns or divs
			var fila2column1 = document.createElement("div");
			var fila2column2 = document.createElement("div");
			var fila2column3 = document.createElement("div");
			var fila2column4 = document.createElement("div");

			// Add unique classes to each columnfila2
			fila2column1.classList.add("con-prin-fila-2-column1");
			fila2column2.classList.add("con-prin-fila-2-column2");
			fila2column3.classList.add("con-prin-fila-2-column3");
			fila2column4.classList.add("con-prin-fila-2-column4");

			// Set the content for each column
			fila2column1.innerHTML = clasico.day + " de " + clasico.month + " de " + clasico.year;
			fila2column2.innerHTML = "Fecha Nº " + clasico.matchday;
			fila2column3.innerHTML = clasico.torneo;
			fila2column4.innerHTML = clasico.stadium;

			// Append the columns to fila2
			fila2.appendChild(fila2column1);
			fila2.appendChild(fila2column2);
			fila2.appendChild(fila2column3);
			fila2.appendChild(fila2column4);


			var fila3 = document.createElement("div");
			fila3.classList.add("con-prin-fila-3");

			// Create four column containers
			var fila3column1 = document.createElement("div");
			var fila3column2 = document.createElement("div");
			var fila3column3 = document.createElement("div");
			var fila3column4 = document.createElement("div");

			// Add classes to each column
			fila3column1.classList.add("con-prin-fila-3-column-1");
			fila3column2.classList.add("con-prin-fila-3-column-2");
			fila3column3.classList.add("con-prin-fila-3-column-3");
			fila3column4.classList.add("con-prin-fila-3-column-4");

			// Add content to each column
			fila3column1.innerHTML = (clasico.teamHome === "Gimnasia"
				? "<img src='../images/icono-gimnasia.png'>"
				: "<img src='../images/icono-estudiantes.png'>");
			fila3column2.textContent = clasico.goalsHome;
			fila3column3.textContent = clasico.goalsAway;
			fila3column4.innerHTML = (clasico.teamAway === "Gimnasia"
				? "<img src='../images/icono-gimnasia.png'>"
				: "<img src='../images/icono-estudiantes.png'>");

			// Append columns to fila3
			fila3.appendChild(fila3column1);
			fila3.appendChild(fila3column2);
			fila3.appendChild(fila3column3);
			fila3.appendChild(fila3column4);

			var golesDiv = document.createElement("div");
			golesDiv.classList.add("con-prin-fila-4");
			golesDiv.textContent = clasico.goles; // Suponiendo que 'clasico.goles' contiene la cantidad de goles.

			var nota = document.createElement("div");
			nota.classList.add("con-prin-fila-4");
			nota.textContent = clasico.note;

			contenedorPrincipal.appendChild(fila1);
			contenedorPrincipal.appendChild(fila2);
			contenedorPrincipal.appendChild(fila3);
			contenedorPrincipal.appendChild(golesDiv); // Agrega el div de goles aquí

			contenedorPrincipal.appendChild(nota);

			resultadosContainer.appendChild(contenedorPrincipal);

			// Comprobamos si el resultado es un empate y lo sumamos al contador
			if (
				clasico.goalsHome !== "" &&
				clasico.goalsAway !== "" &&
				clasico.goalsHome === clasico.goalsAway
			) {
				contadorEmpates++;
			}

			// Check if Gimnasia won and increment the counter for Gimnasia's victories
			if (
				(clasico.teamHome === "Gimnasia" &&
					clasico.goalsHome !== "" &&
					clasico.goalsAway !== "" &&
					parseInt(clasico.goalsHome) > parseInt(clasico.goalsAway)) ||
				(clasico.teamAway === "Gimnasia" &&
					clasico.goalsHome !== "" &&
					clasico.goalsAway !== "" &&
					parseInt(clasico.goalsAway) > parseInt(clasico.goalsHome)) ||
				clasico.ganador === "Gimnasia"
			) {
				contadorVictoriasGimnasia++;
			}

			// Check if Estudiantes won and increment the counter for Estudiantes' victories
			if (
				(clasico.teamHome === "Estudiantes" &&
					clasico.goalsHome !== "" &&
					clasico.goalsAway !== "" &&
					parseInt(clasico.goalsHome) > parseInt(clasico.goalsAway)) ||
				(clasico.teamAway === "Estudiantes" &&
					clasico.goalsHome !== "" &&
					clasico.goalsAway !== "" &&
					parseInt(clasico.goalsAway) > parseInt(clasico.goalsHome)) ||
				clasico.ganador === "Estudiantes"
			) {
				contadorVictoriasEstudiantes++;
			}

			// Check if Gimnasia scored and increment the total goals for Gimnasia
			if (clasico.teamHome === "Gimnasia") {
				if (clasico.goalsHome !== "") {
					totalGolesGimnasia += parseInt(clasico.goalsHome);
				}
			} else if (clasico.teamAway === "Gimnasia") {
				if (clasico.goalsAway !== "") {
					totalGolesGimnasia += parseInt(clasico.goalsAway);
				}
			}

			// Check if Estudiantes scored and increment the total goals for Estudiantes
			if (clasico.teamHome === "Estudiantes") {
				if (clasico.goalsHome !== "") {
					totalGolesEstudiantes += parseInt(clasico.goalsHome);
				}
			} else if (clasico.teamAway === "Estudiantes") {
				if (clasico.goalsAway !== "") {
					totalGolesEstudiantes += parseInt(clasico.goalsAway);
				}
			}
		});

		resultadoDiv.appendChild(resultadosContainer);

		// Muestra el total de partidos jugados
		var jugadosTexto = contadorPartidosJugados.toString();
		var resHistJugadosDiv = document.getElementById("res-hist-jugados");
		resHistJugadosDiv.innerHTML = jugadosTexto;

		// Muestra el total de empates
		var empatesTexto = contadorEmpates.toString();
		var resHistEmpatesDiv = document.getElementById("res-hist-empates");
		resHistEmpatesDiv.innerHTML = empatesTexto;

		// Muestra el total de victorias de Gimnasia
		var victoriasGimnasiaTexto = contadorVictoriasGimnasia.toString();
		var resHistGimnasiaDiv = document.getElementById("res-hist-gimnasia");
		resHistGimnasiaDiv.innerHTML = victoriasGimnasiaTexto;

		// Muestra el total de victorias de Estudiantes
		var victoriasEstudiantesTexto = contadorVictoriasEstudiantes.toString();
		var resHistEstudiantesDiv = document.getElementById("res-hist-estudiantes");
		resHistEstudiantesDiv.innerHTML = victoriasEstudiantesTexto;

		// Muestra el total de goles de Gimnasia
		var golesGimnasiaTexto = totalGolesGimnasia === 1 ? "1 gol" : totalGolesGimnasia.toString() + " goles";
		var golesGimnasiaDiv = document.getElementById("res-goles-gimnasia");
		golesGimnasiaDiv.innerHTML = golesGimnasiaTexto;

		// Muestra el total de goles de Estudiantes
		var golesEstudiantesTexto = totalGolesEstudiantes === 1 ? "1 gol" : totalGolesEstudiantes.toString() + " goles";
		var golesEstudiantesDiv = document.getElementById("res-goles-estudiantes");
		golesEstudiantesDiv.innerHTML = golesEstudiantesTexto;

	}
}

function limpiar() {
	location.reload();
}


filtrar();

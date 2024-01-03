let peliculas_destacadas = document.getElementById("peliculas-destacadas");
let peliculas = document.getElementById("peliculas");
let button_popular = document.getElementById("button-popular");
let button_top_rated = document.getElementById("button-top-rated");
let button_proximos_estrenos = document.getElementById("button-proximos-estrenos");
let modal_body = document.getElementById("modal-body");

const url_movies_search = "https://api.themoviedb.org/3/search/movie";
const url_movies_popular = "https://api.themoviedb.org/3/movie/popular";
const url_movies_top_rated = "https://api.themoviedb.org/3/movie/top_rated";
const url_movies_proximos_estrenos = "https://api.themoviedb.org/3/movie/upcoming";
const url_movies_detail = "https://api.themoviedb.org/3/movie";
const language = "es-MX";
const minValue = 1;
const maxValue = 10;
const randomPage = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
const page = randomPage;
const api_key = "cc9b49c1e234e1aea62d4e9787b8a557";
const spinner = `<div class="d-flex justify-content-center align-items-center spinner-modal">
  <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Cargando...</span></div>
</div>`;

if (button_popular) {
  button_popular.addEventListener("click", () =>
    cargarPeliculasPorTipo("popular")
  );
}

if (button_top_rated) {
  button_top_rated.addEventListener("click", () =>
    cargarPeliculasPorTipo("top_rated")
  );
}

if (button_proximos_estrenos) {
  button_proximos_estrenos.addEventListener("click", () =>
    cargarPeliculasPorTipo("upcoming")
  );
}

async function CargarDatosDePeliculasPorID(id) {
  try {
    modal_body.innerHTML = spinner;
    const respuesta = await fetch(
      `${url_movies_detail}/${id}?api_key=${api_key}&language=${language}`
    );
    if (respuesta.status === 200) {
      const data = await respuesta.json();

      const fechaEstreno = new Date(data.release_date);
      const añoEstreno = fechaEstreno.getFullYear();

      modal_body.innerHTML = `<div class="card mb-3 border border-0">
        <div class="row g-0">
          <div class="col-12 col-sm-6 d-flex justify-content-center">
            <img src="https://image.tmdb.org/t/p/w300${data.poster_path}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-12 col-sm-6">
            <div class="card-body">
              <h5 class="card-title">${data.title}</h5>
              <p class="card-text">${data.overview}</p>
              <p>Calificación: ${data.vote_average}</p>
              <p><class="fecha-estreno">Año de estreno: ${añoEstreno}</small></p>
            </div>
          </div>
        </div>
      </div>`;

    } else if (respuesta.status === 401) {
      console.log("Error de logueo.");
    } else {
      console.log(
        `Error al realizar la solicitud. Código de error: ${respuesta.status}`
      );
    }
  } catch (error) {
    console.log(error);
  }
}

async function cargarPeliculasPorTipo(type) {
  try {
    let url;
    let contenido_peliculas_destacadas_response = "";
    let contenido_peliculas_response = "";
    if (type === "top_rated") {
      url = url_movies_top_rated;
    } else if (type === "upcoming") {
      url = url_movies_proximos_estrenos;
    } else {
      url = url_movies_popular;
    }
    peliculas_destacadas.innerHTML = spinner;
    const respuesta = await fetch(
      `${url}?api_key=${api_key}&language=${language}&page=${page}`
    );
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      for (let i = 0; i < 4; i++) {
        contenido_peliculas_destacadas_response += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 py-15 px-15 p-sm-2">
          <div class="card pelicula-card" data-bs-toggle="modal" data-bs-target="#pelicula-modal" data-pelicula-id=${datos.results[i].id}>
          <img src="https://image.tmdb.org/t/p/w500/${datos.results[i].poster_path}" class="img-fluid" alt="...">
          <h3>${datos.results[i].title}</h3>
          </div>
        </div>`;
      }

      for (let j = 4; j < datos.results.length; j++) {
        contenido_peliculas_response += `
          <div class="col-12 col-md-6 col-lg-3 py-2 p-sm-2">
            <div class="card pelicula-card shadow" data-bs-toggle="modal" data-bs-target="#pelicula-modal" data-pelicula-id=${datos.results[j].id}>
            <img src="https://image.tmdb.org/t/p/w300/${datos.results[j].backdrop_path}" class="img-fluid" alt="...">
            </div>
            <div> <h3>${datos.results[j].title}</h3></div>
          </div>
        `;
      }

      peliculas_destacadas.innerHTML = contenido_peliculas_destacadas_response;
      peliculas.innerHTML = contenido_peliculas_response;
    } else if (respuesta.status === 401) {
      console.log("Error de logueo.");
    } else {
      console.log(
        `Error al realizar la solicitud. Código de error: ${respuesta.status}`
      );
    }
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("show.bs.modal", async (event) => {
  let id = event.relatedTarget.dataset.peliculaId;
  CargarDatosDePeliculasPorID(id);
});

async function buscarPeliculasPorDirectorOActor(query) {
  try {
    const url = `${url_movies_search}?api_key=${api_key}&language=${language}&query=${encodeURIComponent(query)}`;

    peliculas_destacadas.innerHTML = "";
    peliculas.innerHTML = spinner;

    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      let contenido_peliculas_response = "";

      data.results.forEach((movie) => {
        contenido_peliculas_response += `
          <div class="col-12 col-md-6 col-lg-3 py-2 p-sm-2">
            <div class="card pelicula-card" data-bs-toggle="modal" data-bs-target="#pelicula-modal" data-pelicula-id=${movie.id}>
            <img src="https://image.tmdb.org/t/p/w300/${movie.poster_path}" class="img-fluid" alt="...">
            </div>
            <div> <h3>${movie.title}</h3></div>
          </div>
        `;
      });

      peliculas.innerHTML = contenido_peliculas_response;
    } else {
      peliculas.innerHTML = "<p>No se encontraron resultados.</p>";
    }
  } catch (error) {
    console.log(error);
  }
}

const searchForm = document.querySelector(".d-flex");
const searchInput = searchForm.querySelector("input[type=search]");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();

  // Modifica esta línea para buscar por director o actor
  buscarPeliculasPorDirectorOActor(searchTerm);
});

cargarPeliculasPorTipo("popular");
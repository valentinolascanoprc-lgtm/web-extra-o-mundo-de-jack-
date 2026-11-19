function myFunction() {
    const x = document.getElementById("menu_bar");
    if (x.className === "barratop") {
        x.className += " responsive";
    } else {
        x.className = "barratop";
    }
}

const personajes = [
    {
        nombre: "Jack Skellington",
        imagen: "imagenes/jack.png",
        enlace: "historia.html#jack"
    },
    {
        nombre: "Oogie Boogie",
        imagen: "imagenes/oogie.png",
        enlace: "historia.html#oogie"
    },
    {
        nombre: "Sally",
        imagen: "imagenes/sally- galeria.png",
        enlace: "historia.html#sally"
    },
    {
        nombre: "Lock, Shock y Barrel",
        imagen: "imagenes/Lock, shock y Barrel. galeria.html.jpg",
        enlace: "historia.html#lock-shock-barrel"
    },
    {
        nombre: "Zero",
        imagen: "imagenes/Zero.galeria.jpg",
        enlace: "historia.html#zero"
    },
    {
        nombre: "Santa Claus",
        imagen: "imagenes/santa claus. galeria.jpg",
        enlace: "historia.html#santa-claus"
    },
    {
        nombre: "El Alcalde",
        imagen: "imagenes/El Alcalde de Ciudad de Halloween.galeria.jpg",
        enlace: "historia.html#alcalde"
    },
    {
        nombre: "Dr. Finkelstein",
        imagen: "imagenes/Dr. Finkelstein.galeria.jpg",
        enlace: "historia.html#finkelstein"
    }
];

const carruselEstado = {
    indiceActual: 1
};

function renderizarCarrusel() {
    const tarjetas = document.querySelectorAll(".carrusel-contenedor .tarjeta");
    const tituloPersonaje = document.getElementById("personaje-titulo");

    if (tarjetas.length < 3) return;

    const total = personajes.length;
    const prevIdx = (carruselEstado.indiceActual - 1 + total) % total;
    const currIdx = carruselEstado.indiceActual;
    const nextIdx = (carruselEstado.indiceActual + 1) % total;

    const visibles = [prevIdx, currIdx, nextIdx];

    tarjetas.forEach((tarjeta, posicion) => {
        const dato = personajes[visibles[posicion]];
        const link = tarjeta.querySelector("a");
        const img = tarjeta.querySelector("img");

        img.src = dato.imagen;
        img.alt = dato.nombre;
        if (link) link.href = dato.enlace;

        if (posicion === 1) {
            tarjeta.classList.add("activo");
        } else {
            tarjeta.classList.remove("activo");
        }
    });

    if (tituloPersonaje) {
        tituloPersonaje.innerText = "PERSONAJES · " + personajes[currIdx].nombre.toUpperCase();
    }
}

function siguientePersonaje() {
    carruselEstado.indiceActual = (carruselEstado.indiceActual + 1) % personajes.length;
    renderizarCarrusel();
}

function anteriorPersonaje() {
    carruselEstado.indiceActual = (carruselEstado.indiceActual - 1 + personajes.length) % personajes.length;
    renderizarCarrusel();
}

document.addEventListener("DOMContentLoaded", function () {
    const btnNext = document.getElementById("btn-next");
    const btnPrev = document.getElementById("btn-prev");

    if (btnNext) btnNext.addEventListener("click", siguientePersonaje);
    if (btnPrev) btnPrev.addEventListener("click", anteriorPersonaje);

    if (document.querySelector(".carrusel-contenedor")) {
        renderizarCarrusel();
    }

    const usuario = {
        nombre: "Valentino Lascano",
        bio: "Estudiante de Producción de Moda con interés en diseño web y el mundo del styling.",
        ciudad: "Buenos Aires",
        imagen: "imagenes/jack.png"
    };

    const elNombre = document.getElementById("nombre");
    const elBio = document.getElementById("bio");
    const elCiudad = document.getElementById("ciudad");
    const elFoto = document.getElementById("foto");
    const elTarjeta = document.getElementById("tarjeta-perfil");

    if (elNombre) {
        elNombre.innerText = usuario.nombre;
        elNombre.style.color = "#D97732";
    }
    if (elBio) elBio.innerText = usuario.bio;
    if (elCiudad) elCiudad.innerText = usuario.ciudad;
    if (elFoto) elFoto.src = usuario.imagen;
    if (elTarjeta) elTarjeta.style.border = "2px solid #800000";
});
reproductor.addEventListener('loadedmetadata', () => {
	if (reproductor.videoWidth && reproductor.videoHeight) {
		const altoMaximo = 460;
		const ratio = reproductor.videoWidth / reproductor.videoHeight;
		const altoFinal = Math.min(altoMaximo, reproductor.videoHeight);
		const anchoFinal = Math.round(altoFinal * ratio);
		reproductor.style.width = anchoFinal + 'px';
		reproductor.style.height = altoFinal + 'px';
	}
});
function myFunction() {
    const nav = document.getElementById("menu_bar");
    if (!nav) return;
    nav.classList.toggle("responsive");
}

document.addEventListener("DOMContentLoaded", function () {
    const botonesMenu = document.querySelectorAll(".menu-rojo, .icon");

    botonesMenu.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            const nav = document.getElementById("menu_bar");
            if (nav) {
                nav.classList.toggle("desplegado");
            }
        });
    });

    document.addEventListener("click", function (e) {
        const nav = document.getElementById("menu_bar");
        if (!nav) return;
        if (!e.target.closest("#menu_bar") && !e.target.closest(".menu-rojo") && !e.target.closest(".icon")) {
            nav.classList.remove("desplegado");
            nav.classList.remove("responsive");
        }
    });
});
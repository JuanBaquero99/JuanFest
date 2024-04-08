// Selecciona el elemento del título h1
const title = document.querySelector('h1');

// Función para manejar el evento de scroll
function handleScroll() {
    // Obtiene la posición vertical actual de desplazamiento
    const scrollPosition = window.scrollY;

    // Ajusta dinámicamente la posición vertical del título
    title.style.transform = `translateY(${scrollPosition * 0.5}px)`;
}

// Agrega un event listener para el evento de scroll
window.addEventListener('scroll', handleScroll);

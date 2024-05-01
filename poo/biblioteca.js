class Libro {
    constructor(titulo, autor, genero, numeropaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.numeropaginas = numeropaginas;
        this.prestado = false;
    }

    prestar() {
        if (this.prestado) {
            console.log("El libro ya está prestado, no te lo puedo dar");
        } else {
            this.prestado = true;
            console.log("El libro se ha prestado correctamente");
        }
    }

    devolver() {
        if (this.prestado) {
            this.prestado = false;
            console.log("El libro se ha devuelto correctamente");
        } else {
            console.log("El libro no está prestado, no se puede devolver");
        }
    }
}

class Biblioteca {
    constructor() {
        this.libros = [];
    }

    agregarLibro(libro) {
        this.libros.push(libro);
        console.log("El libro se ha agregado correctamente");
    }

    eliminarLibro(libro) {
        const index = this.libros.indexOf(libro);
        if (index !== -1) {
            this.libros.splice(index, 1);
            console.log("El libro se ha eliminado correctamente");
        } else {
            console.log("El libro no se ha encontrado");
        }
    }

    editarLibro(libroExis, nuevoTitulo, nuevoAutor) {
        const index = this.libros.indexOf(libroExis);
        if (index !== -1) {
            this.libros[index].titulo = nuevoTitulo;
            this.libros[index].autor = nuevoAutor;
            console.log(`El libro "${libroExis.titulo}" se ha editado.`);
        } else {
            console.log("El libro no se ha encontrado.");
        }
    }

    mostrarCatalogo() {
        console.log("Catálogo de libros");
        this.libros.forEach((libro, index) => {
            console.log(` ${index + 1} Nombre: ${libro.titulo} Autor: ${libro.autor} Género: ${libro.genero} Páginas: ${libro.numeropaginas}`);
        });
    }

    buscarLibro(criterio) {
        const resultado = this.libros.filter((libro) => {
            return (
                libro.titulo.toLowerCase().includes(criterio.toLowerCase()) ||
                libro.autor.toLowerCase().includes(criterio.toLowerCase()) ||
                libro.genero.toLowerCase().includes(criterio.toLowerCase())
            );
        });
        if (resultado.length > 0) {
            console.log("Resultados de búsqueda:");
            resultado.forEach((libro, index) => {
                console.log(` ${index + 1} Nombre: ${libro.titulo} Autor: ${libro.autor} Género: ${libro.genero} Páginas: ${libro.numeropaginas}`);
            });
        } else {
            console.log(`No se han encontrado resultados con "${criterio}"`);
        }
    }
}

const biblioteca = new Biblioteca();

const libro1 = new Libro("El Señor de los Anillos", "J.R.R. Tolkien", "Fantasía", 1000);
const libro2 = new Libro("El Hobbit", "J.R.R. Tolkien", "Fantasía", 300);
const libro3 = new Libro("Silmarillion", "J.R.R. Tolkien", "Fantasía", 500);

biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);

biblioteca.editarLibro(libro2, "El Señor de los Anillos (actualizado)", "A.A.A. ACTUA");
biblioteca.editarLibro(libro3, "Silmarillion (actualizado)", "J.R.R. Tolkien");
biblioteca.editarLibro(libro1, "El Señor de los Anillos (actualizado)", "J.J.J. Marvin");

biblioteca.mostrarCatalogo();
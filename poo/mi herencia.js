class escuelas{
    constructor(nombre, estado, grado){
        this.nombre = nombre;
        this.estado= estado;
        this.grado= grado;

       
        this.info = `Escuela: ${this.nombre} del estado de ${this.estado}
        y de grado ${this.grado}.`
    }
    mostrarInfo(){
        console.log(this.info);
    }
}

class universidades extends escuelas{
    constructor(nombre, estado, grado, carrera, edificio){
        super(nombre, estado, grado);
        this.carrera = carrera;
        this.edificio = edificio;
        

        this.info = ` Mi Escuela es  ${this.nombre}
        soy del estado de ${this.estado}. Mi grado es: ${this.grado}
        mi carrera es: ${this.carrera} y edificio: ${this.edificio}`
    }

    mostrarInfoescuelas(){
        console.log(this.info);
    }
}
const escuela1= new escuelas ("UT", "Quintanarro", "Superior universitario");
const universidad1= new universidades("UT", "Quintanarro", "Superior universitario", "Gastronomia", "H");
escuela1.mostrarInfo();
universidad1.mostrarInfoescuelas();

/*
  * class = clase -> fabrica 
  * constructor = maquinas de una fabrica 
  * parametros de construccion = atributos 
  * objetos = this 
  * this -> propiedades = parametros 
  * instancias = clase (parametros) 
*/

class pikachupc {
    constructor(gabinete,motherboard,procesador,discoduro,ram,fuente,tarjetasdevideo,precio){
this.gabinete = gabinete;
this.motherboard = motherboard;
this.procesador = procesador;
this.discoduro = discoduro;
this.ram = ram;
this.fuente = fuente;
this.tarjetasdevideo = tarjetasdevideo;
this.precio = precio;
this.info = ` gabinete; ${this.gabinete} precio: $${this.precio}
caracteristicas:
motherboard: ${this.motherboard}, procesador ${this.procesador}
disco duro: ${this.discoduro}, memoria ram :${this,ram} gb, 
fuente de poder: ${this.fuente}, tarjetadevideo: ${this.tarjetasdevideo}

`; 
    }
    mostrarinfo(){
        console.log(this.info);

    };
} 
const pc1 = new pikachupc("gamer","asus pro","ryzen 7 2600","barracuda",64,"1200w", "RTX 4090")

pc1.mostrarinfo();



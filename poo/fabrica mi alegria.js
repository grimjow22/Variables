class Micheladasybebidaslacura {
    constructor(tequila,vodka,ron,chamoy,tajin,banderillas,gomitas,hielo,cerveza,popotes,saborizantes,refresco,energizante,){
this.tequila = tequila;
this.vodka = vodka ;
this.ron = ron;
this.chamoy = chamoy;
this.tajin = tajin;
this.banderillas = banderillas;
this.gomitas = gomitas;
this.hielo = hielo;
this.cerveza = cerveza;
this.popotes = popotes;
this.saborizantes = saborizantes;
this.refresco = refresco;
this.energizante = energizante;
this.info = ` tequila; ${this.tequila} 
vodka: ${this.vodka}, ron ${this.ron}
chamoy: ${this.chamoy}, tajin:${this.tajin}, 
banderillas: ${this.banderillas}, gomitas: ${this.gomitas}, hielo: ${this.hielo}, cerveza: ${this.cerveza},
popotes : ${this.popotes}, saborizantes: ${this.saborizantes}, refresco: ${this.refresco}, energizante: ${this.energizante},



`; 
    }
    mostrarinfo(){
        console.log(this.info);

    };
} 
const bebida1 = new Micheladasybebidaslacura("no","si","no"," chamoy azul","si","si", "si", "si", "no", "si", "si", "si", "si")

bebida1.mostrarinfo();
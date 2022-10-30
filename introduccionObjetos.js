let dispositivos = {
    nombre: "gateway",
    nSerie:123456,
    valor:1500,
    direccionIpv4:[192,168,10,5],
    estado:false,
    cambiarEstado: function(){
        this.estado=!this.estado,
        console.log(`Estado cambio: ${this.estado}`)


    }

}
dispositivos.valor=2500
console.log(dispositivos)

dispositivos.cambiarEstado()
console.log(dispositivos.estado)


let numeroSerie = dispositivos.nSerie
let nombreDispositivos = dispositivos.nombre

console.log(numeroSerie,nombreDispositivos)


//Extraer informacion de un objeto 
//Destructuracion  

let {nSerie,nombre} = dispositivos

console.log(nSerie, nombre)


let Equipo = {
    nombre : "Barcelona",
    golesFavoritos: 1,
    golesEncontrados:undefined
}


let golesLocal = Equipo.golesFavoritos
let golesVisitantes = Equipo.golesEncontrados
console.log(golesLocal, golesVisitantes)


let loteria = [32,234,43,12]

console.log(loteria)
//destructuracion

let[,,ganador]=loteria
//destructuracion de arreglos 
console.log(ganador)
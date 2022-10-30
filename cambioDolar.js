let[,,p1,p2,p3]=process.argv
//console.log(p1,p2,p3)

const [,cantidad]= p1.split('=')
const [,tasa]= p2.split('=')
let [,tipo] = p3.split('=')
tipo=(tipo==="true")

//if(tipo==true){
//IF TERNARIO
let valorResultante=tipo?cantidad*tasa : cantidad/tasa

console.log(`${valorResultante} ${tipo? 'lps' : '$'}`)
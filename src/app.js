//Elimino los comentarios iniciales que sirven para inportar bootstrap y styles, ya que no forma parte del ejercicio.

//Cambio los valores let en const, porque no van a cambiar su valor.

const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon']; // añado ";" en arrays
const exten = ['.com', '.es', '.br']; // anteriormente en el array estaba la extensión '.br.com'
// lo modifico para que quede el '.br', porque ya tiene '.com

// Me doy cuenta que el código comentado es el funcional y el que no estaba comentado no funciona correctamente.
// Sería útil que indicara una funcion que englobe todos los loops que realiza, a aparte que posteriormente
// será de utilidad para establecer la relación a HTML.

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let h = 0; h < noun.length; h++) {
      for (let f = 0; f < exten.length; f++) {
        console.log(pronoun[i] + adj[j] + noun[h] + exten[f])
      }
    }
  }
}

// Elimino código que estaba sin comentar pero que no funcionaba aproximadamente en la líneas de la 23 a la 34.
// No funciona porque solo utiliza 3 arrays y faltaría el array que contiene la extensión de dominio.
// Por un momento me confundió porque la extensión de dominio se genera a traves de la variable noun cortando parte
// del noun y agregando un ".", supongo que estaba experimentando.

//En lineas generales el código funciona y solo lo he dejado más estético y he dado sugerencias
let libroDeLectura = `Novela`

switch(libroDeLectura){
    case `Novela`:
        console.log(`Elegiste leer una novela.`);
        break;
    case `Leyenda`:
        console.log(`Elegiste leer una leyenda.`);
        break;
    case `Fabula`:
        console.log(`Elegiste leer una fábula.`);
        break;
    case `cuento`:
        console.log(`Elegiste leer un cuento.`);
        break;
    default:
        console.log(`No es una elección de libro.`)
}
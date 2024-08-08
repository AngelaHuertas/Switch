let tipoDeSandwich = "Grande"

switch (tipoDeSandwich){
    case `Pequeño`:
        console.log(`Tu Sandwich vale: 5.000`);
        break;
    case `Mediano`:
        console.log(`Tu Sandwich vale: 8.000`);
        break;
    case `Grande`:
        console.log(`Tu Sandwich vale: 12.000`);
        break;
    default:
        console.log(`Tamaño no válido`);
}
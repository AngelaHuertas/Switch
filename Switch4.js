let informacion = alert("Bienvenido al centro de atención de su EPS.");
let nombre= prompt("Ingrese su nombre");
let tipo = prompt("Ingrese tipo de documento");
let datos = prompt("Ingrese su numero de identificación");
alert("Datos Verificados.");



let menu = Number(prompt(`Ingrese 1 para: Pedir citas.
Ingrese 2 para: Cancelar cita. 
Ingrese 3 para: Confirmar fecha de Resultados. 
Ingrese 4 para: Quejas y reclamos.
Ingrese 5 para: Hablar con un asesor`));


switch(menu){
    case 1 :
        let citas = Number(prompt(`¿Qué tipo de cita desea?
        Ingrese 1 para: Cita general.
        Ingrese 2 para: Cita odontologica.
        Ingrese 3 para: Cita con especialista.
        Ingrese 4 para: Cita para examen.`));
        switch(citas){
            case 1:
                let general = confirm("Hay cita disponible para el próximo martes a las 8 am ¿la quiere tomar?");
                    switch(general){
                        case true:
                            alert(`Señor/a ${nombre} de tipo de ideficación ${tipo} número ${datos} su cita a sido agendada para el próximo martes a las 8 am.`);
                            break;
                        case false:
                            alert("Se le enviara con un asesor para ver fechas disponibles.");
                            break;
                            }
                break;

            case 2:
                let odontologia = confirm("Hay cita disponible para el próximo martes a las 3 pm ¿la quiere tomar?");
                switch(odontologia){
                    case true:
                        alert(`Señor/a ${nombre} de tipo de ideficación ${tipo} número ${datos} su cita a sido agendada para el próximo martes a las 3 pm.`);
                        break;
                    case false:
                        alert("Se le enviara con un asesor para ver fechas disponibles.");
                        break;
                    }
                break;

            case 3:
                prompt("Ingrese autorización");
                alert("se le enviara con un asesor.");
                break;

            case 4:
                alert("se le enviara con un asesor.");
                break;
        }  
        break;


    case 2:
        prompt("Ingrese código de cita.");
        alert("Mantengase en linea por favor.")
        alert("Su cita a sido cancelada.");
        break;
    
    case 3:
        prompt("Ingrese código de examen");
        alert("Se esta verificando la información.");
        alert("Se le enviará la información y fecha a su correo.");
        break;

    case 4:
        prompt("Ingrese su queja");
        alert("Se le enviara un correo respondiendo su queja o inquietud.")
        break;

    case 5:
        alert("Se le enviara un asesor.");
        break;

    default:
        alert("Dato no valido");
}

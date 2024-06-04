// Definición de la función buscarPersona
function buscarPersona() {

    let idd = document.getElementById("search").value; // Obtiene el valor ingresado en el campo de búsqueda
    let result = document.getElementById("resultado");  // Obtiene el elemento donde se mostrará el resultado

    class ErrorDeId extends Error {
        constructor(message) {
            super(message)
            this.name = 'Todo esta mal'
        }
    }
    class ErrordeNombreNull extends Error {
        constructor(message) {
            super(message)
            this.name = 'Todo esta mal'
        }
    }
    class ErrorPropiedadInexistente extends Error {
        constructor(message) {
            super(message)
            this.name = 'Todo esta mal'
        }
    }
    class ErrorInexistente extends Error {
        constructor(message) {
            super(message)
            this.name = 'Todo esta mal'
        }
    }

    try {   
        // Comprobación del valor de idd y toma de acciones correspondientes 
        if (idd == "a") {
            throw new ErrorDeId("El id no es un número");
        } else if (idd == 2) {
            result.innerHTML = JSON.stringify(BaseDeDatosFalsa[1]);
        } else if (idd == 3) {
            result.innerHTML = JSON.stringify(BaseDeDatosFalsa[2]);
        } else if (idd == 4) {
            throw new ErrordeNombreNull("El nombre contiene un null");
        } else if (idd == 5) {
            result.innerHTML = JSON.stringify(BaseDeDatosFalsa[4]);
        } else if (idd == 6) {
            throw new ErrorPropiedadInexistente("La propiedad no existe");
        } else {
            throw new ErrorInexistente("El ID no existe");
        }                             
    } catch (e) {
        result.innerHTML = e.message;
    }
}

let BaseDeDatosFalsa = [
    {
        id: "a",
        nombre: "Juan",
        apellido: "Perez",
        edad: 66,
        profecion: "Ing Mecanico"
    },
    {
        id: 2,
        nombre: "Sofía",
        apellido: "Rodríguez",
        edad: 22,
        profecion: "Lic Marketing Digital"
    },
    {
        id: 3,
        nombre: "Mariana",
        apellido: "García",
        edad: 33,
        profecion: "Ing Sistemas Computacionales"
    },
    {
        id: 4,
        nombre: null,
        apellido: "Martínez",
        edad: 18,
        profecion: "Ing Industrial"
    },
    {
        id: 5,
        nombre: "Valentina",
        apellido: "Gómez",
        edad: 26,
        profecion: "Lic Derecho"
    },
    {
        id: 6,
        nombre: "Alejandro",
        apellido: "Flores",
        edad: 17,
    }
];

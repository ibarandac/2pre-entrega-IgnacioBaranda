// SEGUNDA ENTREGA DE TU PROYECTO FINAL //

// PUNTOS A EVALUAR //

/* ESTRUCTURA, VARIABLES Y OBJETIVOS:

        - OBJETIVOS GENERALES:
    - Codificar la funcionalidad inicial del simulador
    - Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el 
    usuario, procesamiento esencial del simulador y notificacion de resultados en forma de salida.
        - FORMATO:
    - Página HTML y codigo fuente en Javascript. Debe identificar el apellido del alumno en el nombre 
    de archivo comprimido por PreEntrega2-Apellido.
        - OBJETIVOS ESPECÍFICOS:
    - Capturar entradas mediante prompt().
    - Declarar variables y objetos necesarios para simular el proceso seleccionado.
    - Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenacion, división, porcentaje, etc).
    - Efectuar una saluda, que es el resultado de los datos procesados, la cual puede hacerse por alert() o console.log().
        - SUGERENCIAS:
    - Si bien, por el momento solo podemos hacer entradas con prompt() y salidas con alert() o console.log(), es suficiente
    para empezar a pensar el proceso a variables, estructuras, funciones, métodos y salidas. Verificar Rúbrica.*/

    function Jugador(nombre, equipo, nacionalidad) {
        const nombreDividido = nombre.toLowerCase().split(' ');
        for (let i = 0; i < nombreDividido.length; i++) {
          nombreDividido[i] = nombreDividido[i].charAt(0).toUpperCase() + nombreDividido[i].slice(1);
        }
        this.nombre = nombreDividido.join(' ');
        this.equipo = equipo.toUpperCase();
        this.nacionalidad = nacionalidad.toUpperCase();
      }
    // Base de datos de jugadores //
    const jugadores = [
        new Jugador("Marc-André ter Stegen", "Barcelona", "Alemania"),
        new Jugador("Gavi", "Barcelona", "España"),
        new Jugador("Pedri", "Barcelona", "España"),
        new Jugador("Raphinha", "Barcelona", "Brasil"),
        new Jugador("Joao Felix", "Barcelona", "Portugal"),
        new Jugador("Jude Bellingham", "Real Madrid", "Inglaterra"),
        new Jugador("Thibaut Courtois", "Real Madrid", "Bélgica"),
        new Jugador("Vinicius Jr", "Real Madrid", "Brasil"),
        new Jugador("Rodrygo Goes", "Real Madrid", "Brasil"),
        new Jugador("Luka Modric", "Real Madrid", "Croacia"),
        new Jugador("Ederson", "Manchester City", "Brasil"),
        new Jugador("Rodri", "Manchester City", "España"),
        new Jugador("Kevin De Bruyne", "Manchester City", "Bélgica"),
        new Jugador("Erling Haaland", "Manchester City", "Noruega"),
        new Jugador("Phil Foden", "Manchester City", "Inglaterra"),
        new Jugador("Mohamed Salah", "Liverpool", "Egipto"),
        new Jugador("Alisson Becker", "Liverpool", "Brasil"),
        new Jugador("Virgil Van Dijk", "Liverpool", "Paises Bajos"),
        new Jugador("Luis Díaz", "Liverpool", "Colombia"),
        new Jugador("Darwin Nuñez", "Liverpool", "Uruguay"),
        new Jugador("Gregor Kobel", "Borussia Dortmund", "Suiza"),
        new Jugador("Mats Hummels", "Borussia Dortmund", "Alemania"),
        new Jugador("Marco Reus", "Borussia Dortmund", "Alemania"),
        new Jugador("Karim Adeyemi", "Borussia Dortmund", "Alemania"),
        new Jugador("Felix Nmecha", "Borussia Dortmund", "Alemania"),
        new Jugador("Manuel Neuer", "Bayern Munich", "Alemania"),
        new Jugador("Mathijs De Light", "Bayern Munich", "Paises Bajos"),
        new Jugador("Harry Kane", "Bayern Munich", "Inglaterra"),
        new Jugador("Leroy Sane", "Bayern Munich", "Alemania"),
        new Jugador("Lionel Messi", "I. Miami", "Argentina"),
        new Jugador("Cristiano Ronaldo", "Al Nasr", "Portugal"),
        new Jugador("Alexis Sanchez", "Inter de Milan", "Chile"),
        new Jugador("Arturo Vidal", "Paranaense", "Chile"),
        new Jugador("Kylian Mbappe", "PSG", "Francia"),
      ];
      function buscarOAnadirJugador() {
        let equipoBuscado = prompt('Ingresa el equipo a buscar:');
        let jugadoresFiltrados = jugadores.filter(jugador => 
          jugador.equipo.toLowerCase().includes(equipoBuscado.toLowerCase())
        );
        while (jugadoresFiltrados.length === 0) {
            const confirmacion = confirm(`No se encontraron jugadores del equipo ${equipoBuscado}. ¿Deseas intentar con otro equipo?`);
        
            if (confirmacion) {
              equipoBuscado = prompt('Ingresa otro equipo a buscar:');
              jugadoresFiltrados = jugadores.filter(jugador => 
                jugador.equipo.toLowerCase().includes(equipoBuscado.toLowerCase())
              );
            } else {
              alert('No se agregó ningún jugador nuevo.');
              return;
            }
        }
        if (jugadoresFiltrados.length > 0) {
            let listaJugadores = 'Jugadores encontrados:\n';
            jugadoresFiltrados.forEach((jugador, index) => {
              listaJugadores += `${index + 1}. ${jugador.nombre}\n`;
            });

            const seleccion = prompt(`${listaJugadores}Ingresa el NÚMERO del jugador para ver más detalles o 'nuevo' para agregar un nuevo jugador:`);

            if (seleccion.toLowerCase() === 'nuevo') {
            const nombreNuevoJugador = prompt('Ingresa el nombre del nuevo jugador:');
            const nacionalidadNuevoJugador = prompt('Ingresa la nacionalidad del nuevo jugador:');
            jugadores.push(new Jugador(nombreNuevoJugador, jugadoresFiltrados[0].equipo, nacionalidadNuevoJugador));
            alert(`¡Nuevo jugador ${nombreNuevoJugador} agregado al equipo ${jugadoresFiltrados[0].equipo}!`);

            const jugadoresEquipoActualizado = jugadores.filter(jugador => jugador.equipo.toLowerCase() === jugadoresFiltrados[0].equipo.toLowerCase());
      mostrarListaJugadores(jugadoresEquipoActualizado);
    } else {
      const seleccionIndex = parseInt(seleccion) - 1;

      if (seleccionIndex >= 0 && seleccionIndex < jugadoresFiltrados.length) {
        const jugadorSeleccionado = jugadoresFiltrados[seleccionIndex];
        alert(`Detalles del jugador seleccionado:\nNombre: ${jugadorSeleccionado.nombre}\nEquipo: ${jugadorSeleccionado.equipo}\nNacionalidad: ${jugadorSeleccionado.nacionalidad}`);
      } else {
        alert('Número de jugador inválido.');
      }
    }

    const continuar = confirm('¿Desea buscar o añadir otro jugador?');
    if (continuar) {
      buscarOAnadirJugador();
    } else {
      console.table('Lista completa de jugadores:');
      jugadores.forEach(jugador => {
        console.table(`Nombre: ${jugador.nombre} | Equipo: ${jugador.equipo} | Nacionalidad: ${jugador.nacionalidad}`);
      });
      alert('Operación completada. ¡Gracias!');
    }
  }
}
function mostrarListaJugadores(jugadores) {
  const jugadoresTabla = jugadores.map(jugador => {
    return {
      'Nombre': jugador.nombre,
      'Equipo': jugador.equipo,
      'Nacionalidad': jugador.nacionalidad
    };
  });

  console.table(jugadoresTabla);
}
buscarOAnadirJugador();
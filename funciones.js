const realizarRequest = () => {
    const apiUrl = "http://192.168.1.10/sensor";
  
    console.log("Iniciando request a", apiUrl);
  
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        // Seleccionar el contenedor donde mostrar los resultados
        const resultadosDiv = document.getElementById("resultados");
  
        // Crear contenido dinámico basado en los datos obtenidos
        resultadosDiv.innerHTML = `
          <h2>Resultados del Servidor</h2>
          <p><strong>Mensaje:</strong> ${data.message}</p>
          <p><strong>Estado:</strong> ${data.status}</p>
          <p><strong>Temperatura:</strong> ${data.temperature}</p>
          <p><strong>Presion:</strong> ${data.pressure}</p>
          <p><strong>Humedad:</strong> ${data.humidity}</p>
        `;
      })
      .catch((error) => {
        console.error("Ocurrió un error al realizar la request:", error);
        alert("Error al obtener datos. Por favor, inténtalo de nuevo.");
      });
  };
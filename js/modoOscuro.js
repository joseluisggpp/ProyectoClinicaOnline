// Selecciona el botón de modo oscuro
      const darkModeToggle = document.getElementById("dark-mode-toggle");

      // Función para alternar el modo oscuro
      darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode"); // Alterna la clase 'dark-mode' en el body

        // Cambia el texto del botón dependiendo del estado
        if (document.body.classList.contains("dark-mode")) {
          darkModeToggle.textContent = "Modo Claro";
        } else {
          darkModeToggle.textContent = "Modo Oscuro";
        }
      });
const express = require("express");
const path = require("path");

const app = express();

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal para servir index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Puerto donde se ejecutará el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

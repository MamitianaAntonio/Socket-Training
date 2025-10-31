import express from "express";
import { createServer } from "http";

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || 3000;

// Route test
app.get("/", (_req, res) => {
  res.send("<h1>Serveur is running</h1>");
});

server.listen(PORT, () => {
  console.log(`🚀 Serveur démarré : http://localhost:${PORT}`);
});

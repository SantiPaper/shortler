import app from "./app.js";
import { sequelize } from "./db/db.js";
const { PORT } = process.env;

import "./models/shortUrls.js";

const port = PORT;
async function main() {
  try {
    await sequelize.sync();
    console.log("Conectado");
    app.listen(port);
    console.log(`Servidor escuchando en ${port}`);
  } catch (error) {
    console.log("Error");
  }
}

main();

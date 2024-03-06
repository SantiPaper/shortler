import app from "./app.js";
import { sequelize } from "./db/db.js";

import "./models/shortUrls.js";

const port = 3000;
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

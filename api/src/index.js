import app from "./app.js";
import { sequelize } from "./db/db.js";

const port = 3000;
async function main() {
  try {
    await sequelize.authenticate();
    console.log("Conectado");
    app.listen(port);
    console.log(`Servidor escuchando en ${port}`);
  } catch (error) {
    console.log("Error");
  }
}

main();

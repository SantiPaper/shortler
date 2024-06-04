import app from "./app.js";
import { sequelize } from "./db/db.js";
import "dotenv/config";

const port = process.env.PORT || 3000;

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection to database has been established successfully.");
    await sequelize.sync();
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
    });
  } catch (error) {
    console.error("Error en la inicialización:", error);
  }
}

main();

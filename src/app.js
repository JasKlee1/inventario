/*Importamos al framework express*/
import express from "express";
import cors from "cors"
import categoriasRoutes from "./routes/categorias.routes.js"

/* asignamos a app toda funcionalidad para mi server web  */
const app = express()

/* seterar un puerto a mi web server  */
app.set("port",5000)

app.use(cors());

/*routes*/
app.use("/api/categorias",categoriasRoutes)

/* hacemos disponible a mi server app para toda la aplicación  */
export default app;

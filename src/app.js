/*Importamos al framework express*/
import express from "express";

/* asignamos a app toda funcionalidad para mi server web  */
const app = express()

/* seterar un puerto a mi web server  */
app.set("port",5000)

/* hacemos disponible a mi server app para toda la aplicación  */
export default app;

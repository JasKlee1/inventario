import { Router } from "express";
import { methodHTTP as CategoriaController } from "../controllers/categoria.controllers.js";

/*creamos el enrutadir*/
const router = Router();

/*configuramos respuesta desde server metodo http get*/
router.get("/",CategoriaController.getCategorias)

/*hacemos disponible al router en toda la app*/
export default router;

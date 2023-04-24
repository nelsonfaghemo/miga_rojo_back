import Category from "./../../models/Category.js";

let read = async (req, res, next) => {
  //La funcion controladora debe ser asicrona para poder esperar la respuesta de mongo
  try {
    // utilizo la sintaccis de try catch para intetnar algo y catcehar los errores que puedan surgir
    let all = await Category.find(); //Utilizo el metodo find para encontrar todos los datos del modelo (Que en este caso es category)
    return res
      .status(200) // configuro la respuesta que le tengo que enviar al cliente
      .json({
        categories: all,
      });
  } catch (err) {
    console.log(error);
    return res.status(400).json({
      error: "¡Ha ocurrido un error!",
    });
  }
};

export default read;

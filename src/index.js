import express from "express";
import cors from "cors";
import validacionesHelper from './helpers/validaciones-Helper.js'

let provinces = [
    { id: 1, name: 'Buenos Aires', full_name: 'Provincia de Buenos Aires', latitude: -34.6037, longitude: -58.3816, display_order: 1 },
    { id: 2, name: 'Córdoba', full_name: 'Provincia de Córdoba', latitude: -31.4201, longitude: -64.1888, display_order: 2 },
    // Agrega más provincias si es necesario
];

const app = express();
const port = 3000; // El puerto 3000 (http://localhost:3000)
// Agrego los Middlewares
app.use(cors()); // Middleware de CORS.
app.use(express.json()); // Middleware para parsear y comprender JSON.
//
// Endpoints (todos los Routers)


 app.use("/api/province",(req,res)=>{
    res.status(200).send(provinces);

});

app.get("/api/provinces",(req,res) =>{
    const id = parseInt(req.query.id); // Convertir el ID a número
    const provinceEncontrada = provinces.find(province => province.id === id);
    if(provinceEncontrada){
        res.status(200).send(`OK. Provincia encontrada: ${JSON.stringify(provinceEncontrada)}`);
    }
    else{
        res.status(404).send("No se encontró ninguna provincia con el ID proporcionado");
    }    
})

app.post("/api/provinceP", (req, res) => {
    let nombre = validacionesHelper.getStringOrDefault(req.body.name);
    let full_name = validacionesHelper.getStringOrDefault(req.body.full_name);
    let latitude = validacionesHelper.getIntegerOrDefault(req.body.latitude);
    let longitude = validacionesHelper.getIntegerOrDefault(req.body.longitude);
    let display_order = validacionesHelper.getIntegerOrDefault(req.body.display_order);

    if (!nombre || !full_name || !latitude || !longitude || !display_order || nombre.length<3 || full_name.length<3) {
        res.status(404).send(`Faltan datos de la provincia o esta mal escrito`);
    } else {
        let nuevaProvincia = {
            id: provinces.length + 1,
            name: nombre,
            full_name: full_name,
            latitude: latitude,
            longitude: longitude,
            display_order: display_order
        };
        provinces.push(nuevaProvincia);
        res.status(200).json({ message: 'Operación exitosa'});
    }
});

app.put("/api/provincePU", (req, res) => {
    const id = req.body.id;

    let name = req.body.name;
    let Name;
    if ((province => province.name === name) != undefined ) {
        Name = validacionesHelper.getStringOrDefault(req.body.name);
    }
    else{
        Name = provinces[index].name
    }
    
    let full_name = req.body.full_name;
    let Full_name;
    if ((province => province.full_name === full_name) != undefined  ) {
        Full_name = validacionesHelper.getStringOrDefault(req.body.full_name);
    }
    else{
        Full_name = provinces[index].full_name
    }

    
    let latitude = req.body.latitude;
    let Latitude;
    if ((province => province.latitude === latitude) != undefined ) {
        Latitude = validacionesHelper.getIntegerOrDefault(req.body.latitude);
    }
    else{
        Latitude = provinces[index].latitude
    }

    let longitude = req.body.longitude;
    let Longuitude;
    if ((province => province.longitude === longitude) != undefined ) {
        Longuitude = validacionesHelper.getIntegerOrDefault(req.body.longitude);
    }
    else{
        Longuitude = provinces[index].longitude
    }

    let display_order = req.body.display_order;
    let Display_order;
    if ((province => province.display_order === display_order) != undefined ) {
        Display_order = validacionesHelper.getIntegerOrDefault(req.body.display_order);
    }
    else{
        Display_order = provinces[index].display_order
    }
    
    console.log(id)
    console.log(provinces.find(province => province.id === id))
    if (provinces.find(province => province.id === id) != undefined) {
        console.log("hola")
        const index = provinces.findIndex(province => province.id === id);
        provinces[index] = {
            id: id,
            name: Name,
            full_name: Full_name,
            latitude: Latitude,
            longitude: Longuitude,
            display_order: Display_order
        };
        res.status(201).send("Provincia actualizada exitosamente");
    }
    else{
        res.status(404).send("no existe")
    }

    
});

app.delete("/api/provinceD", (req, res) => {
    const id = validacionesHelper.getIntegerOrDefault(req.query.id);
    let idProvincia;
    idProvincia = provinces.find(province => province.id === id);
    if (idProvincia!=undefined) { 
        provinces.splice(idProvincia);
        res.status(200).send("Se elimino correctamente");
    } else {
        res.status(404).json({ message: 'Provincia no encontrada' });
    }
});



// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})





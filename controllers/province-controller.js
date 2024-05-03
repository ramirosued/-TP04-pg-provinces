import validacionesHelper from '../helpers/validaciones-Helper.js';
import provinces from '../entities/province.js';
import { Router } from "express";
import ProvinceService from '../services/province-service.js';
let router =Router()


router.get("/api/provinces",(req,res) =>{
    const id = parseInt(req.query.id); 
    const provinceEncontrada = provinces.find(province => province.id === id);
    if(provinceEncontrada){
        res.status(200).send(`OK. Provincia encontrada: ${JSON.stringify(provinceEncontrada)}`);
    }
    else{
        res.status(404).send("No se encontró ninguna provincia con el ID proporcionado");
    }    
})

router.post("/api/provinceP", (req, res) => {
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

router.put("/api/provincePU", (req, res) => {
    const id = req.body.id;

    let name = req.body.name;
    let full_name = req.body.full_name;
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;
    let display_order = req.body.display_order;
   
    if (provinces.find(province => province.id === id) != undefined)
    {
        if(name !== undefined && full_name !== undefined && latitude !== undefined && longitude !== undefined && display_order !==undefined)
        {
            if(name.length>3 && full_name.length > 3)
            {
                const index = provinces.findIndex(province => province.id === id);
                provinces[index] = 
                {
                    id: id,
                    name: name,
                    full_name: full_name,
                    latitude: latitude,
                    longitude: longitude,
                    display_order: display_order
                };
                res.status(201).send("Provincia actualizada exitosamente");
            } else  
            {
                res.status(400).send("bad request")
            }    
        }else 
        {
            res.status(400).send("bad request")
        }  
    }
    else
    {
        res.status(404).send("no existe")
    }


});

router.delete("/api/provinceD", (req, res) => {
    const id = validacionesHelper.getIntegerOrDefault(req.query.id);
    let idProvincia;
    idProvincia = porvinces.find(province => province.id === id);
    if (idProvincia!=undefined) { 
        provinces.splice(idProvincia);
        res.status(200).send("Se elimino correctamente");
    } else {
        res.status(404).json({ message: 'Provincia no encontrada' });
    }
});

export default router;
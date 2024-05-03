import pkg from 'pg'
import provinces from '../entities/province.js';

const { Client, Pool } = pkg;
export default class ProvinceRepository {
 getAllAsync = async () => {
 let returnArray = null;
    returnArray = provinces;
 return returnArray;
 }
 getByIdAsync = async (id) => {

    const provinceEncontrada = provinces.find(province => province.id === id);
    return provinceEncontrada;
 }
 createAsync = async (nombre, full_name, latitude, longitude, display_order) => {
    if (!nombre || !full_name || !latitude || !longitude || !display_order || nombre.length<3 || full_name.length<3) {
        return false;
    } else {
        let nuevaProvincia = {
            id: provinces.length + 1,
            name: nombre,
            full_name: full_name,
            latitude: latitude,
            longitude: longitude,
            display_order: display_order
        };
        return nuevaProvincia;
    }
return nuevaProvincia;
 }
 updateAsync = async (name,full_name, latitude, longitude, display_order) => {
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
               return "Provincia actualizada exitosamente";
            } else  
            {
                return "bad request";
            }    
        }else 
        {
            return "bad request";
        }  
    }
    else
    {
        return "no existe";
    }
 }

 deleteByIdAsync = async (id) => {
    let idProvincia = porvinces.find(province => province.id === id)
    return idProvincia;
 }
}
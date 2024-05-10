import ProvinceRepository from '../repositories/province-repository.js';
export default class ProvinceService {
 
 getAllAsync = async () => {
 const repo = new ProvinceRepository();
 const returnArray = await repo.getAllAsync();
 return [returnArray,200];
 }
 
 getByIdAsync = async (id) => {
    const repo = new ProvinceRepository();
    const entity = await repo.getByIdAsync(id);
    if(entity){
      return [entity,200];
  } else
    {
     return ["No se encontro la provincia",404];
    }    
}
 createAsync = async (name, full_name, latitude, longitude, display_order) => {
    const repo = new ProvinceRepository();
    const createdEntity = await repo.createAsync(name, full_name, latitude, longitude, display_order);
    if(createdEntity!=null){
      return ["Operacion exitosa",200];
    }else{
      return ["No se pudo crear la provincia", 404];

    }
 }
 updateAsync = async (entity) => {
    const repo = new ProvinceRepository();
    const updateEntity = await repo.updateAsync(entity);
    return updateEntity;
 }
 deleteByIdAsync = async (id) => {
    const repo = new ProvinceRepository();
    const deleteEntity = await repo.deleteByIdAsync(id);
    return deleteEntity;
}
}
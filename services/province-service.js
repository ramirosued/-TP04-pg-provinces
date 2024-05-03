import ProvinceRepository from '../repositories/province-repository.js';
export default class ProvinceService {
 
 getAllAsync = async () => {
 const repo = new ProvinceRepository();
 const returnArray = await repo.getAllAsync();
 return returnArray;
 }
 
 getByIdAsync = async (id) => {
    const repo = new ProvinceRepository();
    const entity = await repo.getByIdAsync(id);
    return entity;
 }
 createAsync = async (entity) => {
    const repo = new ProvinceRepository();
    const createdEntity = await repo.createAsync(entity);
    return createdEntity;
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
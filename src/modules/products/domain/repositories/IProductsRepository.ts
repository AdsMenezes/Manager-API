import Product from '../../infrastructure/typeorm/entities/Product'
import ICreateProductDTO from '../dtos/ICreateProductDTO'

export default interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<Product>
}

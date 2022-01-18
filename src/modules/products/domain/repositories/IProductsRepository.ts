import Product from '../../infrastructure/typeorm/entities/Product'
import ICreateProductDTO from '../dtos/ICreateProductDTO'

export default interface IProductsRepository {
  findById(id: string): Promise<Product | undefined>
  create(data: ICreateProductDTO): Promise<Product>
}

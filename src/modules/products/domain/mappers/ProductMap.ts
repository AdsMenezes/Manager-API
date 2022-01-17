import Product from '@modules/products/infrastructure/typeorm/entities/Product'
import IResponseProductDTO from '../dtos/IResponseProductDTO'

export default class ProductMap {
  static toDTO({
    id,
    title,
    description,
    cost,
    price,
    amount,
    image,
  }: Product): IResponseProductDTO {
    return {
      id,
      title,
      description,
      cost,
      price,
      amount,
      image,
    }
  }
}

import Purchase from '@modules/purchases/infrastructure/typeorm/entities/Purchase'
import IResponsePurchaseDTO from '../dtos/IResponsePurchaseDTO'

export default class PurchaseMap {
  static toDTO({
    id,
    amount,
    product_id,
    price_unitary,
    price_total,
  }: Purchase): IResponsePurchaseDTO {
    return {
      id,
      amount,
      product_id,
      price_unitary,
      price_total,
    }
  }
}

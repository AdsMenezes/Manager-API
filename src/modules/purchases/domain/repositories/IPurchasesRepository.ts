import Purchase from '../../infrastructure/typeorm/entities/Purchase'
import ICreatePurchaseDTO from '../dtos/ICreatePurchaseDTO'

export default interface IPurchasesRepository {
  findById(id: string): Promise<Purchase | undefined>
  create(data: ICreatePurchaseDTO): Promise<Purchase>
}

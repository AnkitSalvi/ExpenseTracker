import { createStore, createTypedHooks } from 'easy-peasy'
import transactionsModel, { TransactionsModel } from './models/transactions'

export interface StoreModel {
    transactions: TransactionsModel,
  }
  
  const storeModel: StoreModel = {
    transactions: transactionsModel
  }
  

// Create typed hooks
const typedHooks = createTypedHooks<StoreModel>()
// Export typed hooks
export const useStoreActions = typedHooks.useStoreActions
export const useStoreDispatch = typedHooks.useStoreDispatch
export const useStoreState = typedHooks.useStoreState



// Create Store
const store = createStore(storeModel)

export default store

export type TCustomerItem = {
  id: string
  name: string
  phone: string
  address: string | null
  status: boolean
  createdAt: string
  updatedAt: string
}

export type TWaitlistItem = {
  id: string
  customerId: string
  queueNumber: number
  numOfCall: number
  status: string
  createdAt: string
  updatedAt: string
  customer: TCustomerItem
}
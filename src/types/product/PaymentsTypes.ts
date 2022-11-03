export interface Payments {
  billet: PaymentItem
  creditcard: PaymentItem
  pix: PaymentItem
}

export interface PaymentItem {
  name: string
  method: string
  discount: number
  parcels: number
  total: number
  parcelPrice: number
  hasInterest: boolean
  maxInstallment: PaymentMaxInstallment
}

export interface PaymentMaxInstallment {
  markup: number
  parcel: number
  discount: number
  interest: number
  total: number
  parcelPrice: number
}

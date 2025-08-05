"use client"

import { HttpTypes } from "@medusajs/types"
import { B2BCustomer } from "@/types"
import ProductPrice from "../product-price"
import ProductVariantsTable from "../product-variants-table"

type ProductActionsProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  customer: B2BCustomer | null
}

export default function ProductActions({
  product,
  region,
  customer,
}: ProductActionsProps) {
  return (
    <>
      <div className="flex flex-col gap-y-2 w-full">
        <ProductPrice product={product} />
        <ProductVariantsTable product={product} region={region} customer={customer} />
      </div>
    </>
  )
}

import { getProductsById } from "@/lib/data/products"
import { retrieveCustomer } from "@/lib/data/customer"
import { HttpTypes } from "@medusajs/types"
import ProductActions from "@/modules/products/components/product-actions"

/**
 * Fetches real time pricing for a product and renders the product actions component.
 */
export default async function ProductActionsWrapper({
  id,
  region,
}: {
  id: string
  region: HttpTypes.StoreRegion
}) {
  const [product] = await getProductsById({
    ids: [id],
    regionId: region.id,
  })

  const customer = await retrieveCustomer().catch(() => null)

  if (!product) {
    return null
  }

  return <ProductActions product={product} region={region} customer={customer} />
}

'use client'

import { Product } from '@/interfaces/product.interface'
import useWishlist from '@/hooks/useCart'
import Image from 'next/image'
import { ButtonBase } from '@/ui/button'

const ProductView = ({ product }: { product: Product }) => {
  const { add, remove, has } = useWishlist()
  const isInWishlist = has(product.id)

  const toggleWishlist = () => {
    if (isInWishlist) {
      remove(product.id)
    } else {
      add(product)
    }
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="h-auto object-contain rounded !static"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-semibold mb-6">${product.price}</p>
          <ButtonBase
            onClick={() => toggleWishlist() }
            variant={ isInWishlist ? 'secondary' : 'primary'}
          >
            { isInWishlist ? 'Eliminar de la lista' : 'Añadir a la lista' }
          </ButtonBase>
        </div>
      </div>
    </main>
  )
}

export default ProductView
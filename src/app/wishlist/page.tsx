'use client'

import { Product } from '@/interfaces/product.interface'
import ProductCard from '@/ui/ProductCard'
import useWishlist from '@/hooks/useCart'

const Wishlist = () => {
  const { wishlist } = useWishlist()
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mis favoritos</h1>

      { wishlist.length === 0 ?
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No tiene ningun producto favorito</p>
        </div>
      : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          { wishlist.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist

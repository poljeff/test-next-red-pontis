import Image from 'next/image'
import { Product } from '@/interfaces/product.interface'
import { ButtonBase } from '@/ui/button'
import useWishlist from '@/hooks/useCart'
import Link from 'next/link'
interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { add, remove, has } = useWishlist()
  const isInWishlist = has(product.id)

  const onAddToWishlist = (product: Product) => {
    if (isInWishlist) {
      remove(product.id)
    } else {
      add(product)
    }
  }

  return (
    <div key={product.id} className="flex flex-col bg-white rounded-lg border border-gray-200 overflow-hidden hover:bg-gray-200 transition duration-300">
      <div className="relative h-48 bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* <img className="object-contain p-4 w-[100vw] md:w-[50vw] lg:w-[25vw]" src={product.image} alt={product.title} /> */}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <Link href={`/product/${product.id}`} className='font-semibold text-lg truncate'>
        <span className='hover:underline'>{product.title}</span>
          
        </Link>
        
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {product.description}
        </p>

        <div className="flex mt-auto items-center justify-center mb-2">
          <span className="text-2xl font-bold text-blue-400">
            ${product.price}
          </span>
        </div>
        <ButtonBase
            onClick={ () => onAddToWishlist(product) } 
            variant={ isInWishlist ? 'secondary' : 'primary'}
          >
            { isInWishlist ? 'Eliminar de la lista' : 'Añadir a la lista' }
          </ButtonBase>
      </div>
    </div>
  )
}

export default ProductCard
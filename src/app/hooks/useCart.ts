import useLocalStorage from '@/hooks/useLS'
import { Product } from '@/interfaces/product.interface'

const useWishlist = () => {
  const [wishlist, setWishlist] = useLocalStorage<Product[]>('wishlist', [])
  
  const add = (product: Product): void => {
    console.log(product);
    const existingItem = wishlist.find(item => item.id === product.id)
    if (!existingItem) {
      console.log(wishlist.length);
      setWishlist([...wishlist, product])
    }
  }

  const remove = (productId: number) => {
    console.log('remove');
    setWishlist(wishlist.filter(p => p.id !== productId))
  }

  const has = (productId: number) => {
    return wishlist.some(p => p.id === productId)
  }

  return {
    wishlist,
    add,
    remove,
    has
  }
}

export default useWishlist

import { create } from 'zustand'
import { Product } from '@/interfaces/product.interface'

type WishlistState = {
  items: Product[]
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: number) => void
  isInWishlist: (productId: number) => boolean
}

export const useWishlistStore = create<WishlistState>((set, get) => ({
  items: [],
  addToWishlist: (product) => {
    const current = get().items
    if (!current.find((item) => item.id === product.id)) {
      set({ items: [...current, product] })
    }
  },
  removeFromWishlist: (id ) => {
    const filtered = get().items.filter((item) => item.id !== id)
    set({ items: filtered })
  },

  isInWishlist: (id) => {
    return get().items.some((item) => item.id === id)
  },
}))

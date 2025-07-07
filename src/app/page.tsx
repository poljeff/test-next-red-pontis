'use client'

import { useState, useEffect } from 'react'

import { Product } from '@/interfaces/product.interface'
import Spinner from '@/ui/loader/Spinner'
import InputSearch from '@/ui/input/InputSearch'
import ProductCard from '@/ui/ProductCard'


const Home = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)


  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error('Error al cargar los productos')
        }
        const data: Product[] = await response.json()

        setProducts(data)
        setFilteredProducts(data)

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter((product: Product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredProducts(filtered)
    }
  }, [searchTerm, products])

  if (loading) {
    return (
      <Spinner />
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center">
        <div className="text-red-500 text-center">
          <p>{ error }</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Productos</h1>
      <div className="mb-8">
        <InputSearch 
          value={searchTerm}
          onChange={ setSearchTerm }
          placeholder="Buscar productos..."
          className="flex-1 md:mx-0"
        />
      </div>

      { filteredProducts.length === 0 ?
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No se encontraron productos</p>
        </div>
      : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          { filteredProducts.map((product: Product) => (
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

export default Home
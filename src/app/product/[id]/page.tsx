import { Product as IProduct } from '@/interfaces/product.interface'
import ProductView from './ProductView'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface ParamsProduct {
  params: Promise<{
    id: string
  }>
}

export const generateMetadata = async  (props: ParamsProduct ): Promise<Metadata> =>{
  const params = await props.params
  const id = params.id

  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  if (!response.ok) {
    notFound()
  }

  const product = await response.json()
  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  }
}

const Product = async (props: ParamsProduct ) => {
  const params = await props.params
  const id = params.id
  
  const product: IProduct = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: 'no-store',
  }).then((res) => res.json())

  return <ProductView product={product} />
}

export default Product
'use client'

import { useEffect } from 'react'

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error('Error en la página del producto:', error)
  }, [error])

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Error al cargar el producto</h1>
    </div>
  )
}

export default Error
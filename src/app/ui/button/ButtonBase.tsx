'use client'

import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

const ButtonBase = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
}: ButtonProps) => {
  const baseClasses = 'cursor-pointer hover:bg-blue-800 font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2'
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
  }
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} text-white px-4 py-2 w-full ${className}`}
    >
      {children}
    </button>
  )
}

export default ButtonBase

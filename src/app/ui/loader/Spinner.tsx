'use client'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

const Spinner = ({ size = 'md', color = 'blue-500' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className={`animate-spin rounded-full border-b-2 border-${color} ${sizeClasses[size]}`}></div>
    </div>
  )
}

export default Spinner
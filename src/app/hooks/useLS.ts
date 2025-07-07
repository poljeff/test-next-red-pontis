import { useState, useEffect } from 'react'

const useLocalStorage = <T>(key: string, initialValue: T) =>{
  const [storedValue, setStoredValue] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setStoredValue(JSON.parse(item))
      }
    } catch (error) {
      console.error(`error al cargar informacion desde LS`, error)
    }
    const handleStorage = (event: StorageEvent) => {
      if (event.key === 'wishlist-storage') {
        const newValue = event.newValue ? JSON.parse(event.newValue) : []
        setStoredValue(newValue)
      }
    }

    window.addEventListener('storage', handleStorage)

    return () => window.removeEventListener('storage', handleStorage)

  }, [key])

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(`ocurrió un error`, error)
    }
  }
  return [storedValue, setValue] as const
}

export default useLocalStorage;
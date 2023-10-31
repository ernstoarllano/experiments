import { useEffect, useState } from 'react'

/**
 * Hook to check if component is mounted
 * 
 * @returns {boolean} mounted
 */
export const useIsMounted = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted((prev) => !prev)

    return () => {
      setMounted((prev) => !prev)
    }
  }, [])

  return {
    mounted,
  }
}
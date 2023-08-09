import { useEffect, useState } from 'react'

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
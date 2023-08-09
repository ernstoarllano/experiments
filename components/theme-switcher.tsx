'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

import { useIsMounted } from '@/hooks/use-is-mounted'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const { mounted } = useIsMounted()

  const icon = {
    light: <Moon className="text-black" />,
    dark: <Sun className="dark:text-white" />,
  }

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  if (!mounted) return null

  return (
    <Button
      className="absolute top-4 right-4 p-0 bg-transparent hover:bg-transparent"
      onClick={handleThemeChange}
    >
      {theme === 'light' ? icon.light : icon.dark}
    </Button>
  )
}

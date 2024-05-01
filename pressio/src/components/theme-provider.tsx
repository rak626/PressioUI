'use client'
import { ThemeProvider, useTheme } from 'next-themes'
import React from 'react'
const Themeprovider = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme()
  return (
    <ThemeProvider
      attribute="class"
      value={{
        light: 'light',
        dark: 'dark',
      }}
    >
      {children}
    </ThemeProvider>
  )
}

export default Themeprovider

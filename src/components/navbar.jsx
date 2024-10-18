import React from 'react'
import { ModeToggle } from './theme-switcher'

export default function Navbar() {
  return (
    <header className='container top-0 sticky border-2 flex items-center justify-between p-2 z-20 bg-primary'>
        <h1 className='logo'>SHADCN-UI</h1>
        <ModeToggle/>
    </header>
  )
}

import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <h1>Renters Union Nashville</h1>
      </div>
      <ModeToggle />
    </ThemeProvider>
  )
}

export default App

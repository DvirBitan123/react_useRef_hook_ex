import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MySelect from './select'
import Card from './card'

function App() {
  const [color, setColor] = useState("red")
  
  return (
    <>
      <MySelect callback={setColor}/>
      
    </>
  )
}


export {App}


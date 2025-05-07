import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Header from './components/Header'
import WordsWindow from './components/WordsWindow'


function App() {
  const a = useState(0)
  console.log(a)

  return (
    <>
<section id="page">
<Header />
    <WordsWindow />
    <Input />
  </section>    </>
  )
}

export default App

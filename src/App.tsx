import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Header from './components/Header'
import WordsWindow from './components/WordsWindow'
// um array de palavras que é randomizado ao reiniciar
// um input que começa uma contagem de 60 segundos quando você começa a digitar, cada letra é comparada com a ordem das letras do array e fica vermelho se estiver errado
// a cada vez que pressiona espaço, pega a palavra que está no input e compara com a palavra atual do array, se não der match na palavra atual da janela, gera 1 na contagem de palavras erradas e a palavra continua vermelha ---- passa para a próxima palavra
// ao chegar no fim dos 60 segundos, pega o valor total de palavras corretas digitadas (total - erradas), pega o número de caracteres e divide pelo total de palavras e faz um cálculo com a média de caracteres por segundo como se cada palavra tivesse 4,5 letras


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

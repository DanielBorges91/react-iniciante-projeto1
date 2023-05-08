import Titulo from "./Titulo"

function App() {
  return(
    <>
      <Titulo cor="red" nome="Dimitre" paragrafo = {true}/>
      <Titulo cor = "blue"/>
      <Titulo nome= "Daniel Borges" paragrafo = {false} cor="green"/>
    </>
  )
}

export default App
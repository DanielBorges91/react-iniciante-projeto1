import { useState } from "react";

function Titulo({ cor }) {

  const [texto, setTexto] = useState("Título incicial");
  const [inputText, setInputText] = useState("");

  function clicou() {
    setTexto(inputText)
  }

  return(
    <div>
      <h1 style={{color: cor}} >{texto}</h1>
      <input value = {inputText} onChange={(e) => {setInputText(e.target.value)}} type="text" />
      <button onClick={clicou}>Mudar</button>
    </div>
  )
}

export default Titulo;

// Um exemplo de um contador de clicks.
// import { useState } from "react";

// function Titulo({ cor }) {

//   const [soma, setSoma] = useState(0);

//   return(
//     <>
//       <h1 style={{color: cor}} >Valor do contador {soma}.</h1>
//       <button onClick={() => {setSoma(soma + 1)}} >Soma + 1</button>
//     </>
//   )

// }

// export default Titulo
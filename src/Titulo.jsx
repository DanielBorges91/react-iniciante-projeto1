import { useState } from "react";

function Titulo({ cor }) {

  const [texto, setTexto] = useState("Um título do estado incicial");

  return(
    <div>
      <h1 style={{color: cor}} >{texto}</h1>
      <button onClick={() => {setTexto("Mudei via botão.")}}>Mudar</button>
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
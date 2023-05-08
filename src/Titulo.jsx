
function Titulo({cor, nome, paragrafo}) {
  return(
    <div>
      <h1 style={{color: cor}} >Oi eu sou {nome ? nome : "Fulano"}</h1>
      {paragrafo ?
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda, ratione atque facere impedit aut, ipsam ullam consequuntur explicabo ea optio veniam dolor debitis incidunt repellat repellendus id numquam alias.</p>
      :
      <p></p>
    }
      </div>
  )
}

export default Titulo;

function Titulo() {

  let nome = 'Dimitre Teixeira';
  const soma = 10 + 10;
  const urlImg = 'https://i.imgur.com/Q5SNvIb.jpeg'

  return(
    <div>
      <h1>Oi eu sou {nome}, tenho {soma} anos.</h1>
      <img width={100} src={urlImg} />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta assumenda, ratione atque facere impedit aut, ipsam ullam consequuntur explicabo ea optio veniam dolor debitis incidunt repellat repellendus id numquam alias.</p>
    </div>
  )
}

export default Titulo
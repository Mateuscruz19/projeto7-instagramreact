function StoriesLayout(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} />
      </div>
      <div class="usuario">
        {props.usuario}
      </div>
    </div>
  )
}


export default function Stories() {

  const pessoas = [
    { usuario: "9gag", imagem:"assets/img/9gag.svg"},
    { usuario: "meowed", imagem: "assets/img/meowed.svg" },
    { usuario: "barked", imagem: "assets/img/barked.svg" },
    { usuario: "nathanwpylestrangeplanet", imagem: "assets/img/nathanwpylestrangeplanet.svg" },
    { usuario: "wawawicomics", imagem: "assets/img/wawawicomics.svg" },
    { usuario: "respondeai", imagem: "assets/img/respondeai.svg" },
    { usuario: "filomoderna", imagem: "assets/img/filomoderna.svg" },
    { usuario: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg" }
  ]

  return (
    <div>
      <div class="stories">
        {pessoas.map((p) => <StoriesLayout imagem={p.imagem}
        usuario={p.usuario}/>)}
      </div>
    </div>
  )
}

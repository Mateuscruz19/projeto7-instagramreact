import React from "react"

function PostsLayout(props) {

  function darLikePost(){
    setLike("Heart")
    setCor("vermelho")
  }


  function darLike(){
    if(likeselecionado === false ){
    setLike("Heart")
    setCor("vermelho")
    setSelec(true)
    setCurtidas(parseFloat(props.curtidas) + 1)
    }
    else if(likeselecionado === true){
      setLike("Heart-outline")
      setCor("")
      setSelec(false)
      setCurtidas(parseFloat(props.curtidas))
    }
  }

  function salvarPost(){
    setSalvo("bookmark")
  }

  const [likeselecionado, setSelec] = React.useState(false)
  const [likezinho, setLike] = React.useState("Heart-outline")
  const [cor, setCor] = React.useState("")
  const [salvo, setSalvo] = React.useState("bookmark-outline")
  const [curtidas, setCurtidas] = React.useState(props.curtidas)

  return (
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imagemusuario}/>
            {props.usuario}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.imagempost} onClick={darLikePost} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon class={cor} name={likezinho} onClick={darLike}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name={salvo} onClick={salvarPost}></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={props.imagemcurtida} />
            <div class="texto">
              Curtido por <strong>{props.usuariocurtida}</strong> e <strong>outras{curtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
  )
}





export default function Posts() {

  


  const postagens = [
    {imagemusuario: "assets/img/meowed.svg", usuario: "meowed" , imagempost: "assets/img/gato-telefone.svg"  , imagemcurtida: "assets/img/respondeai.svg" ,  usuariocurtida: "respondeai" , curtidas: "101523"},
    {imagemusuario: "assets/img/barked.svg", usuario: "barked", imagempost: "assets/img/dog.svg" , imagemcurtida: "assets/img/adorable_animals.svg" ,  usuariocurtida: "adorable_animals" , curtidas: "99159" }
  ]

  return (
    <div class="posts">
    {postagens.map((p) => <PostsLayout 
    imagemusuario={p.imagemusuario}
     usuario={p.usuario}
     imagempost={p.imagempost}
     imagemcurtida={p.imagemcurtida}
     usuariocurtida={p.usuariocurtida}
     curtidas={(p.curtidas)}
     />)}
    </div>
)
}



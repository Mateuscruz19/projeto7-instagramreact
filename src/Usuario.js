function UsuarioLayout(props) {
  return (
    <div class="usuario">
          <img src={props.imagem} />
          <div class="texto">
            <strong>{props.usuariop}</strong>
            <span>
              Catana
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>
  )
}


export default function Usuario() {

  const usuarioinstagram = [{ imagem: "assets/img/catanacomics.svg", usuariop: "catanacomics"}]
    return (
        <div>
            {usuarioinstagram.map((u) => <UsuarioLayout imagem={u.imagem} usuariop={u.usuariop}/>)}
        </div>
    )
}
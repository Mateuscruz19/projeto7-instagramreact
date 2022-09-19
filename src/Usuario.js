import React from "react"

export default function Usuario() {
  const fotoOriginal = "assets/img/catanacomics.svg"

  const [nome, setNome] = React.useState("Catana")
  const [foto, setFoto] = React.useState(fotoOriginal)

  function inserirNome() {
    const nomePrompt = prompt("Qual é o se nome?")
    setNome(nomePrompt)
  }

  function inserirFoto() {
    const fotoPrompt = prompt("Insira o link de uma foto aqui!")
    setFoto(fotoPrompt)
  }

  return (
    <div class="usuario">
      <img onClick={inserirFoto} src={foto} />
      <div class="texto">
        <strong>{nome}</strong>
        <span>
          @catanacomics
          <ion-icon name="pencil" onClick={inserirNome}></ion-icon>
        </span>
      </div>
    </div>
  )
}
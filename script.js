function toggleMode() {
  const html = document.documentElement //pegando html 
  html.classList.toggle("light") //fazendo a troca das classes 

  const img = document.querySelector("#profile img") // selecionando a imagem

  if(html.classList.contains("light")) { // se estiver light mode, add imagem light
    img.setAttribute("src", "./assets/perfil light.png")
  } else {
    img.setAttribute("src", "./assets/perfil certo.png")
  }
  
}
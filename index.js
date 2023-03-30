const baralho = []
let opcoes = ""

do{

  opcoes = prompt(
    "Cartas no baralho:\n" + baralho.length +
    "\n\nEscolha uma opção:\n" + 
    "\n1. Adicionar uma carta" +
    "\n2. Puxar uma carta" +
    "\n3. Sair"
  )

  switch(opcoes){
    case "1":
      const adicionarCarta = prompt("Qual carta você deseja adicionar?")
      baralho.unshift(adicionarCarta);
      break

    case "2":
      const puxarCarta = baralho.shift()
      if(!puxarCarta){
        alert("O baralho está vazio")
      }else{
        alert("Carta puxada: " + puxarCarta)
      }
      break

    case "3":
      alert("Encerrando...")
      break
  }

}while(opcoes !== "3")
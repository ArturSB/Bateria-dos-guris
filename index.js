let numBtn = document.querySelectorAll(".btn").length;


// Evento de click do mouse

for (let i = 0; i < numBtn; i++) {

  //adicionando eventListener em todos os botoes com a classe .btn

  document.querySelectorAll(".btn")[i].addEventListener("click", function(){

    let btnText = this.innerText;
    drumPlay(btnText);

    buttonEffect(btnText);

  })
}

document.addEventListener("keydown", function(event){
  let tecla = event.key.toUpperCase();
  drumPlay(tecla);

  buttonEffect(tecla);

})

//switch para selecionar qual som toca em cada letra clicada pelo mouse

function drumPlay(btnText){

  switch (btnText) {
    case "A":
      let crash = new Audio("/sounds/crash.mp3");
      crash.play();
      break;
    case "S":
      let kick = new Audio("/sounds/kick-bass.mp3");
      kick.play();
      break;
    case "D":
      let snare = new Audio("/sounds/snare.mp3");
      snare.play();
      break;
    case "H":
      let tom1 = new Audio("/sounds/tom-1.mp3");
      tom1.play();
      break;
    case "J":
      let tom2 = new Audio("/sounds/tom-2.mp3");
      tom2.play();
      break;
    case "K":
      let tom3 = new Audio("/sounds/tom-3.mp3");
      tom3.play();
      break;
    case "L":
      let tom4 = new Audio("/sounds/tom-4.mp3");
      tom4.play();
      break;
  }
}

function buttonEffect (btn){

  let btnClass = document.querySelector("."+btn.toLowerCase());
  
  btnClass.classList.add('btnPressed')

  setTimeout(function(){
    btnClass.classList.remove('btnPressed')
  }, 125)

}
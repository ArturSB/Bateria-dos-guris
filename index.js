let numBtn = document.querySelectorAll(".btn");

for (let i = 0; i < numBtn.length; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    switch (i) {
      case 0:
        let crash = new Audio("/sounds/crash.mp3");
        crash.play();
        break;
      case 1:
        let kick = new Audio("/sounds/kick-bass.wav");
        kick.play();
        break;
      case 2:
        let snare = new Audio("/sounds/snare.mp3");
        snare.play();
        break;
      case 3:
        let tom1 = new Audio("/sounds/tom-1.mp3");
        tom1.play();
        break;
      case 4:
        let tom2 = new Audio("/sounds/tom-2.mp3");
        tom2.play();
        break;
      case 5:
        let tom3 = new Audio("/sounds/tom-3.mp3");
        tom3.play();
        break;
      case 6:
        let tom4 = new Audio("/sounds/tom-4.mp3");
        tom4.play();
        break;
    }
  });
}

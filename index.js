// Define the moveDodgerLeft function
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const currentPosition = parseInt(dodger.style.left);

    if (currentPosition > 0) {
        dodger.style.left = `${currentPosition - 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  })

  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const currentPosition = parseInt(dodger.style.left);

    if (currentPosition > 0) {
        dodger.style.left = `${currentPosition + 1}px`;
    }
}

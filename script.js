function openLetter() {
  document.getElementById("apology").scrollIntoView({ behavior: "smooth" });
}

function answerQuestion() {
  const answer = document.getElementById("answer");
  answer.classList.add("visible");

  setTimeout(() => {
    answer.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 150);
}

function revealFinal() {
  const message = document.getElementById("finalMessage");
  const button = document.querySelector(".final-btn");

  message.classList.add("visible");
  button.textContent = "♡";

  setTimeout(() => {
    message.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 250);
}

document.addEventListener("DOMContentLoaded", () => {
  const finalButton = document.querySelector(".final-btn");

  if (finalButton) {
    finalButton.addEventListener("click", () => {
      document.body.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.002)" },
          { transform: "scale(1)" }
        ],
        { duration: 500, easing: "ease-out" }
      );
    });
  }
});
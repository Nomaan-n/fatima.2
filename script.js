function openLetter() {
  document.getElementById("apology").scrollIntoView({
    behavior: "smooth"
  });
}


/* PHOTO CAPTIONS */

function showCaption(number) {
  const card = document.querySelectorAll(".photo-card")[number - 1];

  if (!card) return;

  const wasActive = card.classList.contains("active");

  document.querySelectorAll(".photo-card").forEach((item) => {
    item.classList.remove("active");
  });

  if (!wasActive) {
    card.classList.add("active");
  }
}


/* LITTLE QUESTION */

function answerQuestion() {
  const answer = document.getElementById("answer");

  answer.classList.add("visible");

  setTimeout(() => {
    answer.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 150);
}


/* FINAL REVEAL */

function revealFinal() {
  const message = document.getElementById("finalMessage");
  const button = document.querySelector(".final-btn");

  message.classList.add("visible");

  button.textContent = "♡";

  setTimeout(() => {
    message.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 250);
}


/* SMALL INTERACTION WHEN FINAL MESSAGE OPENS */

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
        {
          duration: 500,
          easing: "ease-out"
        }
      );

    });
  }

});


function checkAnswer() {
  const answer = document.getElementById("answer").value.toLowerCase();
  const message = document.getElementById("message");

  // Change this answer to your own
  if (answer == "kilikili" || answer == "kili kili" || answer == "kili-kili") {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("mainPage").classList.remove("hidden");
  } else {
    message.innerHTML = "Wrong answer baby 😭 Try again 💕";
  }
}


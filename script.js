let questions = [];

async function loadQuiz() {
  const res = await fetch("http://localhost:5000/questions");
  questions = await res.json();

  const quizDiv = document.getElementById("quiz");

  questions.forEach((q, index) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <p>${q.question}</p>
      ${q.options.map(opt => `
        <input type="radio" name="q${index}" value="${opt}"> ${opt}
      `).join("<br>")}
    `;

    quizDiv.appendChild(div);
  });
}

async function submitQuiz() {
  const answers = [];

  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name=q${index}]:checked`);
    answers.push(selected ? selected.value : "");
  });

  const res = await fetch("http://localhost:5000/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ answers })
  });

  const data = await res.json();

  localStorage.setItem("score", data.score);
  window.location.href = "result.html";
}

loadQuiz();
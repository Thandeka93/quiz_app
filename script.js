const questions = [
    {
      question: "What does CPU stand for?",
      answers: [
        { text: "Central Processing Unit", correct: true },
        { text: "Computer Personal Unit", correct: false },
        { text: "Central Performance Utility", correct: false },
        { text: "Control Power Unit", correct: false }
      ]
    },
    {
      question: "Which language is used to style web pages?",
      answers: [
        { text: "HTML", correct: false },
        { text: "CSS", correct: true },
        { text: "Java", correct: false },
        { text: "Python", correct: false }
      ]
    },
    {
      question: "What does RAM stand for?",
      answers: [
        { text: "Read And Modify", correct: false },
        { text: "Random Access Memory", correct: true },
        { text: "Run Access Memory", correct: false },
        { text: "Rapid Application Management", correct: false }
      ]
    },
    {
      question: "Which company developed JavaScript?",
      answers: [
        { text: "Microsoft", correct: false },
        { text: "Netscape", correct: true },
        { text: "Google", correct: false },
        { text: "Apple", correct: false }
      ]
    },
    {
      question: "What does API stand for?",
      answers: [
        { text: "Application Programming Interface", correct: true },
        { text: "Advanced Program Interface", correct: false },
        { text: "Applied Programming Insight", correct: false },
        { text: "Application Performance Index", correct: false }
      ]
    },
    {
      question: "Which one is a JavaScript framework?",
      answers: [
        { text: "Laravel", correct: false },
        { text: "React", correct: true },
        { text: "Django", correct: false },
        { text: "Flask", correct: false }
      ]
    }
  ];
  
  const questionElement = document.getElementById('question');
  const answersElement = document.getElementById('answers');
  const nextButton = document.getElementById('next-btn');
  
  let score = 0;
  
  function showRandomQuestion() {
    resetState();
    const currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    questionElement.innerText = currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("answer-btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answersElement.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = "none";
    while (answersElement.firstChild) {
      answersElement.removeChild(answersElement.firstChild);
    }
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
  
    if (isCorrect) {
      selectedBtn.style.background = "#16a34a"; // green
      score++;
    } else {
      selectedBtn.style.background = "#dc2626"; // red
    }
  
    Array.from(answersElement.children).forEach(button => {
      button.disabled = true;
    });
  
    nextButton.style.display = "inline-block";
  }
  
  nextButton.addEventListener("click", showRandomQuestion);
  
  showRandomQuestion();
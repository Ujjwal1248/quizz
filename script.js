const questions = [
    { question: "What is the derivative of (3x^2) with respect to (x)?", options: ["6x+2", "6x-2", "3x^2+2", "6x+1"], correctAnswer: "6x+2", score: 2 },
    { question: "Solve for (x) in the equation (2x^2 - 5x + 3 = 0).", options: ["x = 3, 1/2", "x = 1, 3", "x = 2, 3/2", "x = -1, -3"], correctAnswer: "x = 2, 3/2", "score": 2 },
    { question: "If the probability of an event A is 0.4, what is the probability of the complement of A?", options: ["0.6", "0.4", "1.4", "0.2"], correctAnswer: "0.6", score: 2 },
    { question: "If a = 2i + 3j and b = -i + 2j, what is the dot product (a · b)?", options: ["4", "-4", "10", "-10"], correctAnswer: "10", score: 2 },
    { question: "In linear programming, what does the feasible region represent?", options: ["The region where the objective function is maximized.", "The region where the objective function is minimized.", "The region where all constraints are satisfied.", "The region where no constraints are satisfied."], correctAnswer: "The region where all constraints are satisfied.", score: 2 },
    { question: "Solve the differential equation (dy/dx = 2x) with the initial condition (y(0) = 1).", options: ["y = x^2 + 1", "y = x^2", "y = x^2 - 1", "y = x^2 + 2"], correctAnswer: "y = x^2", score: 2 },
    { question: "In a series circuit with three resistors, if the resistance of each resistor is doubled, what happens to the total resistance?", options: ["It is halved", "It is doubled", "It remains the same", "It cannot be determined"], correctAnswer: "It is doubled", score: 2 },
    { question: "Which of the following is true for a concave mirror?", options: ["Always forms a virtual image", "Always forms a real image", "Forms a virtual image for objects beyond its focal point", "Forms a real image for objects within its focal point"], correctAnswer: "Forms a virtual image for objects beyond its focal point", score: 2 },
    { question: "What is the energy carried by a photon of light with a wavelength of 500 nm?", options: ["2.5 × 10^19 J", "4.0 × 10^(-19) J", "6.63 × 10^(-34) J", "3.98 × 10^(-25) J"], correctAnswer: "4.0 × 10^(-19) J", score: 2 },
    { question: "When a current-carrying wire is placed perpendicular to a magnetic field, what is the direction of the force experienced by the wire?", options: ["Parallel to the magnetic field", "Opposite to the magnetic field", "Perpendicular to both the current and magnetic field", "Along the axis of the wire"], correctAnswer: "Perpendicular to both the current and magnetic field", score: 2 },
    { question: "According to the first law of thermodynamics, the change in internal energy of a system is equal to:", options: ["Heat added to the system minus work done by the system", "Heat added to the system plus work done by the system", "Heat added to the system multiplied by work done by the system", "Heat added to the system divided by work done by the system"], correctAnswer: "Heat added to the system minus work done by the system", score: 2 },
    { question: "Which property of light is responsible for the phenomenon of polarization?", options: ["Wavelength", "Frequency", "Amplitude", "Direction of vibration"], correctAnswer: "Amplitude", score: 2 },
    { question: "What is the functional group present in an ester?", options: ["-OH", "-COOH", "-C=O", "-NH2"], correctAnswer: "-C=O", score: 2 },
    { question: "Which factor does not affect the rate of a chemical reaction?", options: ["Temperature", "Concentration of reactants", "Presence of a catalyst", "Molecular weight of the reactants"], correctAnswer: "Molecular weight of the reactants", score: 2 },
    { question: "In a galvanic cell, where does oxidation occur?", options: ["Anode", "Cathode", "Electrolyte", "Salt bridge"], correctAnswer: "Anode", score: 2 },
    { question: "What is the standard unit for measuring enthalpy change?", options: ["Joule", "Kelvin", "Pascal", "Watt"], correctAnswer: "Joule", score: 2 },
    { question: "Which of the following is an example of an amorphous solid?", options: ["Diamond", "Quartz", "Glass", "Sodium chloride"], correctAnswer: "Glass", score: 2 },
    { question: "According to Le Chatelier's principle, if the temperature is increased in a reversible endothermic reaction, what will happen to the equilibrium position?", options: ["Shift to the right", "Shift to the left", "No change", "Depends on the concentration of reactants and products"], correctAnswer: "Shift to the right", score: 2 },
    { question: "In the complex [Co(NH₃)₆]³⁺, the coordination number of cobalt is:", options: ["4", "5", "6", "3"], correctAnswer: "6", score: 2 },
    { question: "Which of the following is an example of a lyophilic colloid?", options: ["Starch in water", "Gold sol", "Ferric hydroxide sol", "Sulphur in alcohol"], correctAnswer: "Starch in water", score: 2 }      
];

let currentQuestionIndex = 0; // Keep track of the current question.
let totalScore = 0; // Store the total score.
let individualScores = new Array(questions.length).fill(0); // Initialize scores array.

const quizContainer = document.querySelector(".quiz-container");
const questionElement = document.querySelector(".question");
const answersElement = document.querySelector(".answers");

function showQuestion(index) {
    // Display the question and answer options.
    questionElement.textContent = questions[index].question;
    answersElement.innerHTML = "";

    for (const option of questions[index].options) {
        // Create answer option buttons with event listeners.
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("answer-option");
        button.addEventListener("click", () => checkAnswer(option, index));
        answersElement.appendChild(button);
    }
}

function checkAnswer(selectedOption, index) {
    // Check if the selected option is correct and update scores.
    const correctAnswer = questions[index].correctAnswer;
    individualScores[index] = selectedOption === correctAnswer ? questions[index].score : 0;
    totalScore = individualScores.reduce((a, b) => a + b, 0); // Calculate total score.
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        // Check if it's the last question, then show results.
        showResults();
    }
}

function showResults() {
    alert("Quiz Submitted");
    questionElement.textContent = "Quiz Results";
    answersElement.innerHTML = "";

    let totalMarksObtained = 0; // Initialize a variable to store the total marks obtained.

    for (let i = 0; i < questions.length; i++) {
        // Display individual question scores.
        const resultElement = document.createElement("p");
        resultElement.textContent = `Question ${i + 1}: Scored ${individualScores[i]} / ${questions[i].score}`;
        answersElement.appendChild(resultElement);
        
        totalMarksObtained += individualScores[i]; // Add the score to the total marks obtained.
    }

    const totalScoreElement = document.getElementById("score");
    totalScoreElement.textContent = `Total Marks Obtained: ${totalMarksObtained}`; // Display the total marks obtained.
    
    // Calculate and display the overall percentage.
    const totalPercentage = ((totalMarksObtained / getTotalPossibleScore()) * 100).toFixed(2);
    const totalPercentageElement = document.createElement("p");
    totalPercentageElement.textContent = `Overall Percentage: ${totalPercentage}%`;
    answersElement.appendChild(totalPercentageElement);
    
    if (totalPercentage>80){
        const glearner = document.getElementById("learner");
        glearner.textContent = 'Congrats you are a Good Learner  :-)';
    }

    if(totalPercentage<=80){
        const blearner = document.getElementById("learner");
        blearner.textContent = 'You are a slow learner but Every student learns at their own pace, and slow learners are simply those who take the scenic route to success. Remember, progress is progress, no matter how fast or slow. Keep moving forward, and you will reach your destination.';
    }
    // const homepage = document.getElementById("homepage")
    // homepage.textContent = '<a href=""><button>Hello</button></a>'
    const homeButton = document.createElement("button");
    homeButton.textContent = "Go to Home Page";
    homeButton.addEventListener("click", redirectToHomePage);
    answersElement.appendChild(homeButton);
    // Hide the buttons
    hideButtons();
}

function redirectToHomePage() {
    // Replace 'index.html' with the actual URL of your home page
    window.location.href = 'index.html';
}

function getTotalPossibleScore() {
    // Calculate the total possible score for the quiz.
    return questions.reduce((total, question) => total + question.score, 0);
}

function previousQuestion() {
    // Navigate to the previous question.
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}

function nextQuestion() {
    // Navigate to the next question.
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function hideButtons() {
    // Hide the buttons (Previous, Next, Finish).
    ["previous-question", "next-question", "finish-question"].forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.style.display = "none";
        }
    });
}

showQuestion(currentQuestionIndex);


const quizData = [
  {
    question: "The average quantity of water (in lpcd) required for domestic purposes according to IS code is ________",
    options: ["100", "120", "70", "135"],
    correctAnswer: "135"
  },
  {
    question: "The average consumption of water required in factories in lpcd is ___________",
    options: ["10-15", "20-30", "30-45", "70-80"],
    correctAnswer: "30-45"
  },
  {
    question: "In which type of water demand, minimum average consumption of water takes place?",
    options: ["Domestic water demand", "Industrial water demand", "Institutional and commercial water demand", "Fire demand"],
    correctAnswer: "Fire demand"
  },
  {
    question: "What is the minimum water pressure available at fire hydrants?",
    options: ["80-100kN/m²", "100-150kN/m²", "40-60kN/m²", "150-200kN/m²"],
    correctAnswer: "100-150kN/m²"
  },
  {
    question: "Match list 1 (calculation of fire demand) with list 2 (formulae) and select the correct answer using the codes given below.",
    options: ["A: Kuchling’s Formula, B: Freeman’s Formula, C: Buston’s Formula, D: Central Congested High Value City", "1: Q = 3182√P, 2: Q = 1136[P/5 +10], 3: Q = 5663√P, 4: Q = 4637√P[1-.01√P]"],
    correctAnswer: "A: Kuchling’s Formula, B: Freeman’s Formula, C: Buston’s Formula, D: Central Congested High Value City"
  },
  {
    question: "What is the fire demand of the city of 1 lakh population by Buston’s formula?",
    options: ["5663", "56630", "566300", "5663000"],
    correctAnswer: "56630"
  },
  {
    question: "Water lost in theft and waste contributes to how much % of total consumption?",
    options: ["5", "10", "15", "20"],
    correctAnswer: "15"
  },
  {
    question: "Which is the correct statement regarding per capita demand?",
    options: ["Daily water required by an individual", "Water required for various purposes by a person", "Water required by an individual in a year", "Annual average amount of daily water required by one person"],
    correctAnswer: "Annual average amount of daily water required by one person"
  },
  {
    question: "What are the factors affecting per capita demand?",
    options: ["Size of city", "Size of city, habit of people", "Cost of water, quality of water, size of city", "Cost of water, quality of water, size of city, habit of people"],
    correctAnswer: "Cost of water, quality of water, size of city, habit of people"
  },
  {
    question: "Which of the following statement is correct?",
    options: ["Rich class consumes less water", "Intermittent water supplies lead to less water consumption", "Loss of water is more if the pressure in the distribution system is less", "Water consumption is less in the flush system"],
    correctAnswer: "Intermittent water supplies lead to less water consumption"
  },
  {
    question: "If the annual average hourly demand of the city is 10000m3, what is the maximum hourly consumption?",
    options: ["2700 m3", "27000 m3", "270000 m3", "2700000 m3"],
    correctAnswer: "27000 m3"
  },
  {
    question: "If in a city, the maximum daily draft is 25MLD, fire draft is 35MLD, and maximum hourly draft is 40MLD, what is the coincident draft?",
    options: ["60MLD", "40MLD", "25MLD", "35MLD"],
    correctAnswer: "60MLD"
  },
  {
    question: "What is the design period for the water treatment unit?",
    options: ["10 years", "15 years", "20 years", "30 years"],
    correctAnswer: "15 years"
  },
  {
    question: "What is the design discharge for intake structures?",
    options: ["Maximum daily demand", "Maximum hourly demand", "Maximum weekly demand", "Average daily demand"],
    correctAnswer: "Maximum daily demand"
  },
  {
    question: "In which of the following units, design period is maximized?",
    options: ["Distribution system", "Demand reservoir", "Water treatment unit", "Pipe mains"],
    correctAnswer: "Demand reservoir"
  },
  {
    question: "Kor demand of the crop should be taken into account while fixing the capacity of a canal.",
    options: ["a) True", "b) False"],
    correctAnswer: "a) True"
  },
  {
    question: "What is the most important point to be considered while fixing the canal capacity?",
    options: ["a) Keenest Demand", "b) Average Demand", "c) Water Demand", "d) Demand"],
    correctAnswer: "a) Keenest Demand"
  },
  {
    question: "Let us consider in a given area the plantation of a certain crop takes 20 days, and the total water depth required by this crop is 80 cm on the field. Find the duty of irrigation water required for the crop during this period. (a) Assuming 20% losses of water in the water courses, find duty at the head of the course. (b) Find the duty of the water at the head of the distributary, assuming 10% losses from the distributary head.",
    options: ["a) 182.9 hectares/cumec, 194.4 hectares/cumec", "b) 172.8 hectares/cumec, 185.4 hectares/cumec", "c) 172.8 hectares/cumec, 194.4 hectares/cumec", "d) 185.6 hectares/cumec, 184.6 hectares/cumec"],
    correctAnswer: "c) 172.8 hectares/cumec, 194.4 hectares/cumec"
  },
  {
    question: "A pump was installed in a field to supply water to the crops. The duty for this crop is 432 hectares/cumec on the field and the efficiency of pump is 50%. The sown area of the field is 5 hectares. Determine the maximum output required (H.P) of the pump, if the highest water level is 4 meters below the highest portion of the field. Assume negligible field channel losses.",
    options: ["a) 0.77H.P", "b) 0.85H.P", "c) 0.80H.P", "d) 0.31H.P"],
    correctAnswer: "d) 0.31H.P"
  },
  {
    question: "At a certain place, the transplantation of a crop takes 15 days, and the total depth of water required by the crop is 90 cm on the field. During the plantation rain falls and about 20 cm is utilised to fulfil the demand. Now determine the duty of irrigation water required during the plantation.",
    options: ["a) 185.14hectares/cumec", "b) 186.25hectares/cumec", "c) 187.45hectares/cumec", "d) 184.89hectares/cumec"],
    correctAnswer: "a) 185.14hectares/cumec"
  },
  {
    question: "Let us take the gross commanded area of a watercourse is 2000 hectares, 80% of which is culturable irrigable. Intensities of sugarcane and paddy are 30% and 50%. The duties of the crops at the head of the watercourse are 850 hectares/cumec and 1900 hectares/cumec. Find the discharge required at the head of the watercourse?",
    options: ["a) 0.98 cumec", "b) 0.97 cumec", "c) 0.9 cumec", "d) 0.986 cumec"],
    correctAnswer: "d) 0.986 cumec"
  },
  {
    question: "We can find out monthly or fortnightly water requirements of various crops using intervals.",
    options: ["a) True", "b) False"],
    correctAnswer: "a) True"
  },
  {
    question: "By how much percentage canal capacity is increased to meet peak demands?",
    options: ["a) 30 to 35%", "b) 20 to 25%", "c) 15 to 20%", "d) 20 to 30%"],
    correctAnswer: "b) 20 to 25%"
  },
  {
    question: "Suppose the culturable commanded for a distributary is 8000 hectares, and the intensity of irrigation for Kharif season is 60% and that of rabi season is 30%. The average duty at the head of a distributary is 4000 hectares/cumec for Kharif season and for Rabi season it is 1800 hectares/cumec, find out discharge required at the head of the distributary?",
    options: ["a) 1.35 cumec", "b) 1.32 cumec", "c) 1.33 cumec", "d) 1.3 cumec"],
    correctAnswer: "c) 1.33 cumec"
  },
  {
    question: "Determine the discharge required at the head of the distributary in a canal where Kharif area to be irrigated is 2400 hectares and Rabi area to be irrigated is 1800 hectares, for fulfilling maximum crop requirement. Assume suitable values for kor depth and kor period.",
    options: ["a) 2.08 cumec", "b) 2 cumec", "c) 2.1 cumec", "d) 2.2 cumec"],
    correctAnswer: "a) 2.08 cumec"
  },
  {
    question: "Determine the discharge required at the head of the distributary in a canal where Kharif area to be irrigated is 2400 hectares and Rabi area to be irrigated is 1800 hectares, for fulfilling maximum crop requirement. Assume suitable values for kor depth and kor period.",
    options: ["a) 2.08 cumec", "b) 2 cumec", "c) 2.1 cumec", "d) 2.2 cumec"],
    correctAnswer: "a) 2.08 cumec"
  },
  {
    question: "Consider a canal with an average duty at the head of 500 hectares/cumec for Kharif season and 800 hectares/cumec for Rabi season. The areas to be irrigated for Kharif and Rabi are 2000 hectares and 1500 hectares, respectively. Find the discharge required at the head of the canal to meet crop demands.",
    options: ["a) 2 cumec", "b) 2.4 cumec", "c) 2.5 cumec", "d) 2.8 cumec"],
    correctAnswer: "b) 2.4 cumec"
  },
  {
    question: "The gross commanded area of a watercourse is 3000 hectares, out of which 70% is culturable commanded area. The intensity of irrigation for Kharif and Rabi are 40% and 50%, respectively. The duties at the head of the watercourse for Kharif and Rabi are 900 hectares/cumec and 1200 hectares/cumec, respectively. Calculate the discharge required at the head of the watercourse.",
    options: ["a) 1.6 cumec", "b) 1.8 cumec", "c) 1.9 cumec", "d) 2 cumec"],
    correctAnswer: "c) 1.9 cumec"
  },
  {
    question: "For a particular crop, the duty of irrigation water required is 600 hectares/cumec on the field. If the total area to be irrigated is 2000 hectares, calculate the discharge required at the head of the distributary.",
    options: ["a) 0.5 cumec", "b) 0.6 cumec", "c) 0.7 cumec", "d) 0.8 cumec"],
    correctAnswer: "b) 0.6 cumec"
  },
  {
    question: "A water pump is installed in a field with a duty of irrigation water at 450 hectares/cumec. The pump's efficiency is 60%, and the total area of the field is 10 hectares. Calculate the maximum output required (H.P) of the pump if the highest water level is 6 meters below the highest portion of the field.",
    options: ["a) 1.8 H.P", "b) 2 H.P", "c) 2.2 H.P", "d) 2.5 H.P"],
    correctAnswer: "a) 1.8 H.P"
  },
];


function displayQuiz() {
  const quizContainer = document.getElementById("quizContainer");

  quizData.forEach((questionObj, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.innerHTML = `
          <p>${index + 1}. ${questionObj.question}</p>
          ${questionObj.options.map((option, optionIndex) => `
              <label>
                  <input type="radio" name="question${index}" value="${option}">
                  ${option}
              </label><br>
          `).join("")}
          <button onclick="toggleAnswer(${index})">See Answer</button>
          <p id="answer${index}" style="display: none">Correct Answer: ${questionObj.correctAnswer}</p>
          <br>
      `;

      quizContainer.appendChild(questionDiv);
  });
}

function toggleAnswer(questionIndex) {
  const answerDiv = document.getElementById(`answer${questionIndex}`);
  answerDiv.style.display = answerDiv.style.display === "none" ? "block" : "none";
}

// Display the quiz when the page loads
window.onload = displayQuiz;

function displayQuiz() {
  const quizContainer = document.getElementById("quizContainer");

  quizData.forEach((questionObj, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.innerHTML = `
          <p>${index + 1}. ${questionObj.question}</p>
          ${questionObj.options.map((option, optionIndex) => `
              <label>
                  <input type="radio" name="question${index}" value="${option}">
                  ${option}
              </label><br>
          `).join("")}
          <button onclick="toggleAnswer(${index})">See Answer</button>
          <p id="answer${index}" style="display: none">Correct Answer: ${questionObj.correctAnswer}</p>
          <br>
      `;

      quizContainer.appendChild(questionDiv);
  });
}

function toggleAnswer(questionIndex) {
  const answerDiv = document.getElementById(`answer${questionIndex}`);
  answerDiv.style.display = answerDiv.style.display === "none" ? "block" : "none";
}

// Display the quiz when the page loads
window.onload = displayQuiz;
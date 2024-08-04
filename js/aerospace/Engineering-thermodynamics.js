const quizData = [
    {
        "question": "In thermodynamics, a system refers to:",
        "options": [
          "The surroundings where the process occurs",
          "The matter and energy under study",
          "The temperature of the environment",
          "The heat transferred between objects"
        ],
        "correctAnswer": "b"
      },
      {
        "question": "What is the lowest temperature on the Kelvin scale?",
        "options": [
          "0 Kelvin",
          "0 degrees Celsius",
          "0 degrees Fahrenheit",
          "Absolute zero"
        ],
        "correctAnswer": "a"
      },
      {
        "question": "Which of the following is a state function in thermodynamics?",
        "options": [
          "Work",
          "Heat",
          "Enthalpy",
          "Heat transfer"
        ],
        "correctAnswer": "c"
      },
      {
        "question": "The zeroth law of thermodynamics deals with:",
        "options": [
          "Conservation of energy",
          "Heat transfer",
          "Thermal equilibrium",
          "Ideal gas behavior"
        ],
        "correctAnswer": "c"
      },
      {
        "question": "The Ideal Gas Law is expressed as:",
        "options": [
          "PV = nRT",
          "PV = RT",
          "PV = nR/T",
          "PV = nR * T"
        ],
        "correctAnswer": "a"
      },
      {
        "question": "The characteristic gas constant is specific to:",
        "options": [
          "Any gas",
          "Ideal gas",
          "Real gas",
          "Perfect gas"
        ],
        "correctAnswer": "b"
      },
      {
        "question": "What is the specific volume of a substance?",
        "options": [
          "Mass per unit volume",
          "Volume per unit mass",
          "Pressure per unit area",
          "Temperature per unit volume"
        ],
        "correctAnswer": "b"
      },
      {
        "question": "A two-phase system consists of:",
        "options": [
          "Two substances in gaseous state",
          "Two substances in liquid state",
          "Two substances in solid state",
          "Two co-existing phases"
        ],
        "correctAnswer": "d"
      },
      {
        "question": "The quality of a two-phase mixture is defined as:",
        "options": [
          "The amount of water vapor present",
          "The ratio of liquid to gas",
          "The mass of the mixture",
          "The percentage of the mixture in gas phase"
        ],
        "correctAnswer": "d"
      },
      {
        "question": "What are property charts and tables used for in thermodynamics?",
        "options": [
          "To calculate ideal gas behavior",
          "To determine state functions",
          "To analyze equilibrium conditions",
          "To obtain thermodynamic properties at various conditions"
        ],
        "correctAnswer": "d"
      },
      {
        "question": "The 1st Law of thermodynamics is also known as:",
        "options": [
          "The Law of Conservation of Mass",
          "The Law of Energy Conservation",
          "The Law of Entropy",
          "The Law of Equilibrium"
        ],
        "correctAnswer": "b"
      },
      {
        "question": "Internal energy is the:",
        "options": [
          "Energy associated with the motion of an object",
          "Energy associated with the position of an object",
          "Total kinetic and potential energy of a system",
          "Total energy contained within a system excluding kinetic and potential energy"
        ],
        "correctAnswer": "d"
      },
      {
        "question": "Enthalpy is defined as:",
        "options": [
          "The energy contained within a system",
          "The energy transferred as heat in a process",
          "The sum of internal energy and pressure-volume work",
          "The energy stored in a moving object"
        ],
        "correctAnswer": "c"
      },
      {
        "question": "Specific heat is a property that relates:",
        "options": [
          "Heat transfer and internal energy",
          "Pressure and volume",
          "Temperature and heat transfer",
          "Mass and volume"
        ],
        "correctAnswer": "c"
      },
      {
        "question": "In an isothermal process, the temperature of the system:",
        "options": [
          "Remains constant",
          "Increases",
          "Decreases",
          "Varies randomly"
        ],
        "correctAnswer": "a"
      },
      {
        "question": "An isobaric process is characterized by:",
        "options": [
          "Constant pressure",
          "Constant volume",
          "Constant temperature",
          "No change in the system"
        ],
        "correctAnswer": "a"
      },
      {
        "question": "In an adiabatic process, there is no:",
        "options": [
          "Temperature change",
          "Heat transfer",
          "Pressure change",
          "Work transfer"
        ],
        "correctAnswer": "b"
      },
      {
        "question": "A polytropic process is described by the equation:",
        "options": [
          "PV = constant",
          "TV^n = constant",
          "P/T = constant",
          "P/V^n = constant"
        ],
        "correctAnswer": "d"
      },
      {
        "question": "Steady state work is characterized by:",
        "options": [
          "A changing system",
          "Continuous energy input",
          "A constant temperature",
          "No change in system properties over time"
        ],
        "correctAnswer": "d"
      },
      {
        "question": "The Kelvin-Planck statement of the 2nd Law of thermodynamics states that:",
        "options": [
          "Energy cannot be created or destroyed",
          "No heat engine can have 100% efficiency",
          "Heat cannot flow from a cold body to a hot body",
          "The entropy of an isolated system always increases"
        ],
        "correctAnswer": "b"
      },
      {
        "question": "The Clausius statement of the 2nd Law of thermodynamics states that:",
        "options": [
          "Energy cannot be created or destroyed",
          "Heat cannot flow from a cold body to a hot body",
          "The entropy of an isolated system always increases",
          "All processes are reversible"
        ],
        "correctAnswer": "b"
      },
      {
        "question": "Entropy is a measure of:",
        "options": [
          "Internal energy",
          "Temperature",
          "Disorder or randomness",
          "Pressure"
        ],
        "correctAnswer": "c"
      },
      {
        "question": "Isentropic process is characterized by:",
        "options": [
          "Constant pressure",
          "Constant volume",
          "Constant temperature",
          "Constant entropy"
        ],
        "correctAnswer": "d"
      },
      {
        "question": "The efficiency of a heat engine is defined as:",
        "options": [
          "Work output divided by heat input",
          "Heat input divided by work output",
          "Work input divided by work output",
          "Heat output divided by heat input"
        ],
        "correctAnswer": "a"
      },
      {
        "question": "In a reversible process, the system and its surroundings:",
        "options": [
          "Both experience a net increase in entropy",
          "Both experience a net decrease in entropy",
          "Experience no change in entropy",
          "Experience a net increase in entropy for the system and a net decrease in entropy for the surroundings"
        ],
        "correctAnswer": "c"
      },
      {
        "question": "A heat engine operates between two reservoirs at temperatures Th and Tc. The maximum efficiency is given by:",
        "options": [
          "100%",
          "Th / Tc",
          "(Th - Tc) / Th",
          "1 - (Tc / Th)"
        ],
        "correctAnswer": "d"
      },
      {
        "question": "A heat pump is a device that:",
        "options": [
          "Converts heat into mechanical work",
          "Converts mechanical work into heat",
          "Transfers heat from a cold body to a hot body",
          "Transfers heat from a hot body to a cold body"
        ],
        "correctAnswer": "d"
      },
      {
        "question": "The coefficient of performance (COP) of a refrigerator is defined as:",
        "options": [
          "Heat extracted from the refrigerator divided by the work input",
          "Work input divided by heat extracted from the refrigerator",
          "Heat extracted from the refrigerator divided by the heat input",
          "Heat input divided by heat extracted from the refrigerator"
        ],
        "correctAnswer": "a"
      },
      {
        "question": "The efficiency of a Carnot cycle is dependent on:",
        "options": [
          "The nature of the working fluid",
          "The volume of the system",
          "The temperature of the hot and cold reservoirs",
          "The pressure of the system"
        ],
        "correctAnswer": "c"
      },
      {
        "question": "In a spark ignition engine, the ignition of the air-fuel mixture is initiated by:",
        "options": [
          "Compression of the mixture",
          "A spark plug",
          "Fuel injection",
          "An exhaust valve"
        ],
        "correctAnswer": "Compression of the mixture"
      },
      {
        "question": "In a compression ignition engine, the ignition of the air-fuel mixture is initiated by:",
        "options": [
          "Compression of the mixture",
          "A spark plug",
          "Fuel injection",
          "An exhaust valve"
        ],
        "correctAnswer": "Compression of the mixture"
      },
      {
        "question": "The major components of an internal combustion engine include:",
        "options": [
          "Piston, spark plug, and radiator",
          "Crankshaft, camshaft, and carburetor",
          "Intake valve, exhaust valve, and oil pump",
          "Cylinder, cylinder head, and connecting rod"
        ],
        "correctAnswer": "Cylinder, cylinder head, and connecting rod"
      },
      {
        "question": "The function of the piston in an internal combustion engine is to:",
        "options": [
          "Ignite the air-fuel mixture",
          "Control the flow of air and fuel",
          "Convert linear motion to rotational motion",
          "Seal the combustion chamber"
        ],
        "correctAnswer": "Seal the combustion chamber"
      },
      {
        "question": "The cycle of operation in a four-stroke engine includes:",
        "options": [
          "Intake, compression, ignition, and exhaust",
          "Intake, power, compression, and exhaust",
          "Intake, ignition, power, and exhaust",
          "Ignition, compression, power, and exhaust"
        ],
        "correctAnswer": "Intake, compression, ignition, and exhaust"
      },
      {
        "question": "The cycle of operation in a two-stroke engine includes:",
        "options": [
          "Intake and exhaust",
          "Compression and power",
          "Intake, compression, power, and exhaust",
          "Ignition and exhaust"
        ],
        "correctAnswer": "Intake, compression, power, and exhaust"
      },
      {
        "question": "The intake stroke in an internal combustion engine involves:",
        "options": [
          "Expelling exhaust gases",
          "Compressing the air-fuel mixture",
          "Drawing in air-fuel mixture",
          "Igniting the air-fuel mixture"
        ],
        "correctAnswer": "Drawing in air-fuel mixture"
      },
      {
        "question": "The compression stroke in an internal combustion engine involves:",
        "options": [
          "Expelling exhaust gases",
          "Compressing the air-fuel mixture",
          "Drawing in air-fuel mixture",
          "Igniting the air-fuel mixture"
        ],
        "correctAnswer": "Compressing the air-fuel mixture"
      },
      {
        "question": "The power stroke in an internal combustion engine involves:",
        "options": [
          "Expelling exhaust gases",
          "Compressing the air-fuel mixture",
          "Drawing in air-fuel mixture",
          "Igniting the air-fuel mixture"
        ],
        "correctAnswer": "Igniting the air-fuel mixture"
      },
      {
        "question": "The exhaust stroke in an internal combustion engine involves:",
        "options": [
          "Expelling exhaust gases",
          "Compressing the air-fuel mixture",
          "Drawing in air-fuel mixture",
          "Igniting the air-fuel mixture"
        ],
        "correctAnswer": "Expelling exhaust gases"
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
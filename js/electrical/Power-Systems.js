const quizData = [
    {
        "question": "What is the primary purpose of an electrical power system?",
        "options": [
          "To generate energy for industrial processes.",
          "To provide backup power during outages.",
          "To convert mechanical energy into electrical energy.",
          "To supply electrical energy to consumers for various applications."
        ],
        "correctAnswer": "To supply electrical energy to consumers for various applications."
      },
      {
        "question": "Which of the following is not a basic structure of a power system?",
        "options": [
          "Generation",
          "Transmission",
          "Distribution",
          "Refining"
        ],
        "correctAnswer": "Refining"
      },
      {
        "question": "Which type of power plant generates electricity by harnessing the kinetic energy of flowing water?",
        "options": [
          "Thermal power plant",
          "Nuclear power plant",
          "Hydro power plant",
          "Solar photovoltaic system"
        ],
        "correctAnswer": "Hydro power plant"
      },
      {
        "question": "What is the primary source of energy in a nuclear power plant?",
        "options": [
          "Fossil fuels",
          "Water",
          "Sunlight",
          "Nuclear reactions"
        ],
        "correctAnswer": "Nuclear reactions"
      },
      {
        "question": "Which renewable energy source converts sunlight directly into electricity?",
        "options": [
          "Wind energy",
          "Tidal power",
          "Geothermal energy",
          "Solar photovoltaic system"
        ],
        "correctAnswer": "Solar photovoltaic system"
      },
      {
        "question": "Which energy conversion system utilizes the motion of air to generate electricity?",
        "options": [
          "Hydro power plant",
          "Wind energy conversion system",
          "Geothermal power plant",
          "Nuclear power plant"
        ],
        "correctAnswer": "Wind energy conversion system"
      },
      {
        "question": "Tidal power plants generate electricity by harnessing the energy of:",
        "options": [
          "Sunlight",
          "Water waves",
          "Ocean currents",
          "Earth's magnetic field"
        ],
        "correctAnswer": "Ocean currents"
      },
      {
        "question": "Which power plants utilize the heat from the Earth's interior to generate electricity?",
        "options": [
          "Nuclear power plants",
          "Solar photovoltaic systems",
          "Geothermal power plants",
          "Hydro power plants"
        ],
        "correctAnswer": "Geothermal power plants"
      },
      {
        "question": "Fuel cells generate electricity through:",
        "options": [
          "Burning fossil fuels",
          "Chemical reactions",
          "Wind turbines",
          "Tidal power"
        ],
        "correctAnswer": "Chemical reactions"
      },
      {
        "question": "Energy storage systems play a crucial role in:",
        "options": [
          "Generating electricity",
          "Minimizing transmission losses",
          "Balancing energy supply and demand",
          "Converting mechanical energy to electrical energy"
        ],
        "correctAnswer": "Balancing energy supply and demand"
      },
      {
        "question": "What is the primary purpose of an electric supply system?",
        "options": [
          "To generate electricity for industrial processes.",
          "To distribute electricity to consumers.",
          "To convert mechanical energy into electrical energy.",
          "To provide backup power during outages."
        ],
        "correctAnswer": "To distribute electricity to consumers."
      },
      {
        "question": "Which of the following is NOT a system of power transmission?",
        "options": [
          "AC (Alternating Current) transmission",
          "DC (Direct Current) transmission",
          "Single-phase transmission",
          "Polyphase transmission"
        ],
        "correctAnswer": "Single-phase transmission"
      },
      {
        "question": "What is the economic choice of conductor size in power transmission?",
        "options": [
          "Smaller conductor size",
          "Larger conductor size",
          "Medium conductor size",
          "Random conductor size"
        ],
        "correctAnswer": "Larger conductor size"
      },
      {
        "question": "What is the economic choice of transmission voltage?",
        "options": [
          "Higher transmission voltage",
          "Lower transmission voltage",
          "Medium transmission voltage",
          "Constant transmission voltage"
        ],
        "correctAnswer": "Higher transmission voltage"
      },
      {
        "question": "Which of the following is NOT a factor in the mechanical design of overhead lines?",
        "options": [
          "Conductor materials",
          "Line supports",
          "Insulators",
          "Gears and pulleys"
        ],
        "correctAnswer": "Gears and pulleys"
      },
      {
        "question": "What is the primary purpose of insulators in overhead power lines?",
        "options": [
          "To generate electricity",
          "To reduce line losses",
          "To support the transmission towers",
          "To prevent current leakage to the ground"
        ],
        "correctAnswer": "To prevent current leakage to the ground"
      },
      {
        "question": "What phenomenon is associated with the hissing sound and violet glow around high-voltage transmission lines?",
        "options": [
          "Resonance",
          "Insulation breakdown",
          "Corona discharge",
          "Arcing fault"
        ],
        "correctAnswer": "Corona discharge"
      },
      {
        "question": "What is the 'right of way' in power transmission?",
        "options": [
          "The right to charge high transmission tariffs",
          "The legal right to transmit power across private properties",
          "The right to choose transmission conductor materials",
          "The right to control power distribution"
        ],
        "correctAnswer": "The legal right to transmit power across private properties"
      },
      {
        "question": "What is the purpose of load curves and load duration curves?",
        "options": [
          "To predict future transmission losses",
          "To estimate the cost of power generation",
          "To analyze power generation efficiency",
          "To study power demand patterns"
        ],
        "correctAnswer": "To study power demand patterns"
      },
      {
        "question": "What does the load factor of a distribution system represent?",
        "options": [
          "The ratio of peak load to average load",
          "The ratio of power generation to power consumption",
          "The ratio of power factor to demand factor",
          "The ratio of transmission voltage to transmission current"
        ],
        "correctAnswer": "The ratio of peak load to average load"
      },
      {
        "question": "What is the primary purpose of power system protection?",
        "options": [
          "To generate electricity",
          "To regulate voltage levels",
          "To maintain system stability",
          "To isolate faults and ensure safety"
        ],
        "correctAnswer": "To isolate faults and ensure safety"
      },
      {
        "question": "What is the function of a fuse in an electrical circuit?",
        "options": [
          "To regulate current flow",
          "To provide voltage stabilization",
          "To interrupt current in case of overcurrent",
          "To convert AC to DC"
        ],
        "correctAnswer": "To interrupt current in case of overcurrent"
      },
      {
        "question": "What is the primary operation of a Miniature Circuit Breaker (MCB)?",
        "options": [
          "Voltage regulation",
          "Frequency stabilization",
          "Current interruption in case of overload or short circuit",
          "Power factor correction"
        ],
        "correctAnswer": "Current interruption in case of overload or short circuit"
      },
      {
        "question": "Power circuit breakers are primarily used to:",
        "options": [
          "Control the power factor of the system",
          "Regulate the voltage in the transmission lines",
          "Protect against overvoltage conditions",
          "Interrupt high fault currents"
        ],
        "correctAnswer": "Interrupt high fault currents"
      },
      {
        "question": "What are relays used for in power systems?",
        "options": [
          "To generate electricity",
          "To regulate reactive power",
          "To monitor power consumption",
          "To detect abnormal conditions and initiate protective actions"
        ],
        "correctAnswer": "To detect abnormal conditions and initiate protective actions"
      },
      {
        "question": "Which protection scheme is used to safeguard generators, transformers, and transmission lines?",
        "options": [
          "Fuse protection",
          "Thermal protection",
          "Overcurrent protection",
          "Electrostatic protection"
        ],
        "correctAnswer": "Overcurrent protection"
      },
      {
        "question": "What is the purpose of earthing in an electrical system?",
        "options": [
          "To increase power generation",
          "To reduce system losses",
          "To provide a path for fault currents to flow to the ground",
          "To stabilize voltage levels"
        ],
        "correctAnswer": "To provide a path for fault currents to flow to the ground"
      },
      {
        "question": "What is the function of a surge protection device?",
        "options": [
          "To increase power generation efficiency",
          "To regulate frequency",
          "To protect against voltage surges and transient overvoltages",
          "To control reactive power flow"
        ],
        "correctAnswer": "To protect against voltage surges and transient overvoltages"
      },
      {
        "question": "What is the purpose of Supervisory Control and Data Acquisition (SCADA) systems?",
        "options": [
          "To generate electricity",
          "To monitor and control power systems remotely",
          "To reduce transmission losses",
          "To regulate power factor"
        ],
        "correctAnswer": "To monitor and control power systems remotely"
      },
      {
        "question": "What is the main objective of a Smart Grid?",
        "options": [
          "To eliminate the need for power generation",
          "To increase power consumption",
          "To improve power system efficiency, reliability, and sustainability",
          "To reduce the number of transmission lines"
        ],
        "correctAnswer": "To improve power system efficiency, reliability, and sustainability"
      },
      {
        "question": "What is the purpose of service mains in residential and industrial electrification?",
        "options": [
          "To distribute water supply",
          "To provide data connectivity",
          "To connect electrical appliances to the grid",
          "To regulate indoor temperature"
        ],
        "correctAnswer": "To connect electrical appliances to the grid"
      },
      {
        "question": "What is the purpose of a distribution system in buildings?",
        "options": [
          "To distribute fresh air",
          "To distribute water supply",
          "To distribute electrical power to various points",
          "To distribute heating and cooling"
        ],
        "correctAnswer": "To distribute electrical power to various points"
      },
      {
        "question": "Which type of electrical wiring is commonly used for residential buildings?",
        "options": [
          "High-voltage wiring",
          "Underground wiring",
          "Low-voltage wiring",
          "Extra-high-voltage wiring"
        ],
        "correctAnswer": "Low-voltage wiring"
      },
      {
        "question": "What is the purpose of an electrical layout drawing?",
        "options": [
          "To showcase interior decoration",
          "To plan water distribution",
          "To provide structural details",
          "To show the arrangement of electrical devices and wiring"
        ],
        "correctAnswer": "To show the arrangement of electrical devices and wiring"
      },
      {
        "question": "What is load estimation in electrical systems?",
        "options": [
          "Estimating the weight of electrical equipment",
          "Estimating the cost of electrical installation",
          "Estimating the energy consumption of electrical devices",
          "Estimating the number of electrical outlets"
        ],
        "correctAnswer": "Estimating the energy consumption of electrical devices"
      },
      {
        "question": "What is the purpose of a distribution board in a residential building?",
        "options": [
          "To distribute food items",
          "To distribute water supply",
          "To distribute electrical power to different rooms and appliances",
          "To distribute heating and cooling"
        ],
        "correctAnswer": "To distribute electrical power to different rooms and appliances"
      },
      {
        "question": "What types of loads are commonly found in industrial settings?",
        "options": [
          "Residential lighting loads",
          "Commercial air conditioning loads",
          "Industrial machinery loads",
          "Hospital electrical loads"
        ],
        "correctAnswer": "Industrial machinery loads"
      },
      {
        "question": "What is the primary purpose of electrical energy conservation in buildings and industries?",
        "options": [
          "To increase energy consumption",
          "To reduce energy consumption and minimize costs",
          "To encourage higher power consumption",
          "To provide stable power supply"
        ],
        "correctAnswer": "To reduce energy consumption and minimize costs"
      },
      {
        "question": "What does the term 'tariffs' refer to in electrical systems?",
        "options": [
          "Types of electrical appliances",
          "Energy consumption patterns",
          "Cost structure of electricity consumption",
          "Types of electrical wiring"
        ],
        "correctAnswer": "Cost structure of electricity consumption"
      },
      {
        "question": "Which type of power supply is typically required for industrial loads?",
        "options": [
          "Single-phase power supply",
          "DC power supply",
          "Uninterrupted power supply (UPS)",
          "Three-phase power supply"
        ],
        "correctAnswer": "Three-phase power supply"
      },
      {
        "question": "What is the primary function of a thyristor in power electronics?",
        "options": [
          "To control voltage",
          "To convert DC to AC",
          "To regulate current",
          "To switch high currents on and off"
        ],
        "correctAnswer": "To switch high currents on and off"
      },
      {
        "question": "What is the full form of SCR in power electronics?",
        "options": [
          "Silicon Converter Rectifier",
          "Switching Control Regulator",
          "Silicon Controller Rectifier",
          "Single Cycle Rectifier"
        ],
        "correctAnswer": "Silicon Controller Rectifier"
      },
      {
        "question": "What is the primary purpose of a Diac in power electronics?",
        "options": [
          "To convert AC to DC",
          "To regulate voltage",
          "To provide high current capacity",
          "To trigger thyristors"
        ],
        "correctAnswer": "To trigger thyristors"
      },
      {
        "question": "What is a triac used for in power electronics?",
        "options": [
          "Regulating voltage",
          "Converting DC to AC",
          "Controlling current",
          "Switching both AC and DC loads"
        ],
        "correctAnswer": "Switching both AC and DC loads"
      },
      {
        "question": "What is the primary purpose of an Uninterrupted Power Supply (UPS)?",
        "options": [
          "To regulate frequency",
          "To convert AC to DC",
          "To provide a steady DC output",
          "To provide backup power during outages"
        ],
        "correctAnswer": "To provide backup power during outages"
      },
      {
        "question": "What is the main advantage of a Switched Mode Power Supply (SMPS) over linear power supplies?",
        "options": [
          "Higher efficiency",
          "Lower cost",
          "Simpler design",
          "Higher voltage output"
        ],
        "correctAnswer": "Higher efficiency"
      },
      {
        "question": "What is the purpose of a DC-DC converter in power electronics?",
        "options": [
          "To convert AC to DC",
          "To regulate voltage",
          "To convert one DC voltage to another DC voltage",
          "To provide backup power"
        ],
        "correctAnswer": "To convert one DC voltage to another DC voltage"
      },
      {
        "question": "What does an inverter do in power electronics?",
        "options": [
          "Converts AC to DC",
          "Converts DC to AC",
          "Regulates current",
          "Amplifies voltage"
        ],
        "correctAnswer": "Converts DC to AC"
      },
      {
        "question": "Which component is used to trigger a thyristor or triac?",
        "options": [
          "Diac",
          "Transistor",
          "Op-amp",
          "Gate pulse"
        ],
        "correctAnswer": "Gate pulse"
      },
      {
        "question": "What is the primary function of a Silicon Controller Rectifier (SCR)?",
        "options": [
          "To regulate frequency",
          "To provide backup power",
          "To switch high currents on and off",
          "To convert DC to AC"
        ],
        "correctAnswer": "To switch high currents on and off"
      },
      {
        "question": "What is the primary goal of fault analysis in power systems?",
        "options": [
          "To identify power system stability",
          "To determine load flow distribution",
          "To locate and analyze faults for system protection",
          "To optimize power generation"
        ],
        "correctAnswer": "To locate and analyze faults for system protection"
      },
      {
        "question": "What is load flow analysis in power systems?",
        "options": [
          "Analysis of fault currents",
          "Analysis of power factor correction",
          "Analysis of power generation",
          "Analysis of voltage and current distribution in a network"
        ],
        "correctAnswer": "Analysis of voltage and current distribution in a network"
      },
      {
        "question": "What does power system stability refer to?",
        "options": [
          "Efficient power generation",
          "Steady-state analysis",
          "Maintaining voltage stability",
          "Maintaining steady operation despite disturbances"
        ],
        "correctAnswer": "Maintaining steady operation despite disturbances"
      },
      {
        "question": "What is the purpose of fault analysis in power systems?",
        "options": [
          "To analyze load flow distribution",
          "To optimize power generation",
          "To ensure power factor correction",
          "To identify and mitigate faults for reliable operation"
        ],
        "correctAnswer": "To identify and mitigate faults for reliable operation"
      },
      {
        "question": "What is the main objective of load flow analysis?",
        "options": [
          "To analyze fault currents",
          "To calculate voltage stability",
          "To optimize power generation",
          "To determine the voltage and current levels in a power system"
        ],
        "correctAnswer": "To determine the voltage and current levels in a power system"
      },
      {
        "question": "Why is power system stability important?",
        "options": [
          "To reduce power generation",
          "To improve voltage stability",
          "To maintain a constant load flow",
          "To prevent system failures and blackouts"
        ],
        "correctAnswer": "To prevent system failures and blackouts"
      },
      {
        "question": "What is the primary purpose of load flow analysis?",
        "options": [
          "To determine the optimal generator settings",
          "To analyze fault currents",
          "To optimize transmission line configurations",
          "To ensure proper voltage and current distribution"
        ],
        "correctAnswer": "To ensure proper voltage and current distribution"
      },
      {
        "question": "What does transient stability analysis assess?",
        "options": [
          "Steady-state voltage levels",
          "Long-term power generation trends",
          "System response to disturbances over time",
          "Generator fault currents"
        ],
        "correctAnswer": "System response to disturbances over time"
      },
      {
        "question": "In power systems, what are fault currents?",
        "options": [
          "Normal operating currents",
          "Currents caused by power generation",
          "Currents flowing through transmission lines",
          "Currents resulting from short-circuits or faults"
        ],
        "correctAnswer": "Currents resulting from short-circuits or faults"
      },
      {
        "question": "What is the primary purpose of power system stability analysis?",
        "options": [
          "To analyze power factor correction",
          "To optimize power generation",
          "To maintain voltage stability",
          "To ensure secure and reliable operation of the system"
        ],
        "correctAnswer": "To ensure secure and reliable operation of the system"
      }
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
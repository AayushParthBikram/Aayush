const quizData = [
    {
        "question": "What is a static error in measurement?",
        "options": [
          "An error that occurs when the measurement is taken too quickly.",
          "An error that remains constant and does not change over time.",
          "An error caused by changes in the measuring instrument.",
          "An error that occurs due to variations in the measurement process."
        ],
        "correctAnswer": "An error that remains constant and does not change over time."
      },
      {
        "question": "What is a dynamic error in measurement?",
        "options": [
          "An error that occurs when the measurement is taken too slowly.",
          "An error that changes over time and can be affected by external factors.",
          "An error that only occurs in electronic measurements.",
          "An error that occurs due to changes in the measurement unit."
        ],
        "correctAnswer": "An error that changes over time and can be affected by external factors."
      },
      {
        "question": "What is a Maxwell Bridge?",
        "options": [
          "A bridge used for measuring the magnetic properties of materials.",
          "A bridge used for measuring temperature.",
          "A bridge used for measuring voltage and current.",
          "A bridge circuit used for measuring inductance and capacitance."
        ],
        "correctAnswer": "A bridge circuit used for measuring inductance and capacitance."
      },
      {
        "question": "What is the main principle behind the Maxwell Bridge?",
        "options": [
          "Balancing the ratio of resistances.",
          "Measuring the phase difference between voltage and current.",
          "Using feedback to control measurement accuracy.",
          "Measuring the resonance frequency of a circuit."
        ],
        "correctAnswer": "Balancing the ratio of resistances."
      },
      {
        "question": "What is a Schering Bridge?",
        "options": [
          "A bridge used for measuring strain in materials.",
          "A bridge used for measuring fluid pressure.",
          "A bridge used for measuring impedance and admittance.",
          "A bridge used for measuring mechanical vibrations."
        ],
        "correctAnswer": "A bridge used for measuring impedance and admittance."
      },
      {
        "question": "What is the key concept of the Schering Bridge?",
        "options": [
          "Using feedback to control measurement accuracy.",
          "Measuring the phase difference between voltage and current.",
          "Balancing the ratio of resistances.",
          "Measuring the dielectric properties of materials."
        ],
        "correctAnswer": "Measuring the dielectric properties of materials."
      },
      {
        "question": "What is a Wien Bridge?",
        "options": [
          "A bridge used for measuring weight and mass.",
          "A bridge used for measuring fluid flow.",
          "A bridge used for measuring frequency and phase.",
          "A bridge used for measuring light intensity."
        ],
        "correctAnswer": "A bridge used for measuring frequency and phase."
      },
      {
        "question": "How does the Wien Bridge measure frequency and phase?",
        "options": [
          "By comparing the output to a reference voltage.",
          "By measuring the resonance frequency of a circuit.",
          "By balancing the ratio of resistances.",
          "By using feedback to control measurement accuracy."
        ],
        "correctAnswer": "By measuring the resonance frequency of a circuit."
      },
      {
        "question": "What is a transducer in the context of engineering?",
        "options": [
          "A device used to convert energy from one form to another.",
          "A device that generates electricity from sunlight.",
          "A type of resistor used in electrical circuits.",
          "A device used to transmit wireless signals."
        ],
        "correctAnswer": "A device used to convert energy from one form to another."
      },
      {
        "question": "How are transducers classified?",
        "options": [
          "Based on their color.",
          "Based on their size.",
          "Based on their voltage output.",
          "Based on the type of energy conversion they perform."
        ],
        "correctAnswer": "Based on the type of energy conversion they perform."
      },
      {
        "question": "What are some factors to consider when selecting a transducer?",
        "options": [
          "The color of the transducer.",
          "The material used in the transducer.",
          "The location of the transducer.",
          "The accuracy, range, and sensitivity requirements."
        ],
        "correctAnswer": "The accuracy, range, and sensitivity requirements."
      },
      {
        "question": "Why is the accuracy of a transducer important in its selection?",
        "options": [
          "Accuracy has no impact on transducer performance.",
          "Accuracy determines the size of the transducer.",
          "Accuracy affects the reliability and quality of measurements.",
          "Accuracy is only important in high-temperature applications."
        ],
        "correctAnswer": "Accuracy affects the reliability and quality of measurements."
      },
      {
        "question": "What is a resistive transducer?",
        "options": [
          "A transducer that measures resistance.",
          "A transducer that changes resistance in response to a physical change.",
          "A transducer that generates electrical resistance.",
          "A transducer that uses capacitors for measurement."
        ],
        "correctAnswer": "A transducer that changes resistance in response to a physical change."
      },
      {
        "question": "What is a capacitive transducer?",
        "options": [
          "A transducer that measures capacitance.",
          "A transducer that changes capacitance in response to a physical change.",
          "A transducer that generates electrical capacitance.",
          "A transducer that uses resistors for measurement."
        ],
        "correctAnswer": "A transducer that changes capacitance in response to a physical change."
      },
      {
        "question": "What is an LVDT (Linear Variable Differential Transformer)?",
        "options": [
          "A transducer that measures linear motion.",
          "A type of capacitor used for voltage measurement.",
          "A device used to measure differential voltage.",
          "A type of pressure sensor."
        ],
        "correctAnswer": "A transducer that measures linear motion."
      },
      {
        "question": "What are position and proximity sensors used for?",
        "options": [
          "To measure the distance between two points.",
          "To measure the temperature of an object.",
          "To measure the flow rate of fluids.",
          "To measure the amount of light in an environment."
        ],
        "correctAnswer": "To measure the distance between two points."
      },
      {
        "question": "What do pressure sensors measure?",
        "options": [
          "The level of fluid in a container.",
          "The amount of force applied to an object.",
          "The temperature of an object.",
          "The pressure of gases or liquids."
        ],
        "correctAnswer": "The pressure of gases or liquids."
      },
      {
        "question": "What do level sensors measure?",
        "options": [
          "The height of a building.",
          "The amount of light in an environment.",
          "The speed of an object.",
          "The level of fluid in a container."
        ],
        "correctAnswer": "The level of fluid in a container."
      },
      {
        "question": "What is a strain gauge?",
        "options": [
          "A device used to measure temperature.",
          "A device that measures strain or deformation in an object.",
          "A type of resistor used in electrical circuits.",
          "A device used to measure fluid flow rate."
        ],
        "correctAnswer": "A device that measures strain or deformation in an object."
      },
      {
        "question": "What are temperature sensors used for?",
        "options": [
          "To measure the humidity of an environment.",
          "To measure the pressure of gases.",
          "To measure the flow rate of fluids.",
          "To measure the temperature of objects or environments."
        ],
        "correctAnswer": "To measure the temperature of objects or environments."
      },
      {
        "question": "What is a piezoelectric transducer?",
        "options": [
          "A transducer that measures pressure.",
          "A transducer that generates electricity from light.",
          "A transducer that converts mechanical pressure into electrical voltage.",
          "A transducer that measures position."
        ],
        "correctAnswer": "A transducer that converts mechanical pressure into electrical voltage."
      },
      {
        "question": "What is a photoelectric cell?",
        "options": [
          "A transducer that generates electricity from light.",
          "A transducer that measures fluid flow rate.",
          "A device used to measure humidity.",
          "A type of pressure sensor."
        ],
        "correctAnswer": "A transducer that generates electricity from light."
      },
      {
        "question": "What is linearization in the context of transducers?",
        "options": [
          "A process to make transducers non-functional.",
          "A process to convert digital signals to analog.",
          "A process to improve the linearity of a transducer's output.",
          "A process to measure transducer dimensions."
        ],
        "correctAnswer": "A process to improve the linearity of a transducer's output."
      },
      {
        "question": "What is signal conversion in transducers?",
        "options": [
          "A process to convert electrical signals to mechanical signals.",
          "A process to convert analog signals to digital signals.",
          "A process to measure signal strength.",
          "A process to generate random signals."
        ],
        "correctAnswer": "A process to convert analog signals to digital signals."
      },
      {
        "question": "What is a DAC (Digital-to-Analog Converter)?",
        "options": [
          "A device used to convert digital signals to analog signals.",
          "A device used to convert analog signals to digital signals.",
          "A device used to convert mechanical signals to electrical signals.",
          "A device used to amplify signals."
        ],
        "correctAnswer": "A device used to convert digital signals to analog signals."
      },
      {
        "question": "What is an ADC (Analog-to-Digital Converter)?",
        "options": [
          "A device used to convert digital signals to analog signals.",
          "A device used to convert analog signals to digital signals.",
          "A device used to convert mechanical signals to electrical signals.",
          "A device used to amplify signals."
        ],
        "correctAnswer": "A device used to convert analog signals to digital signals."
      },
      {
        "question": "What is the purpose of an ADC in signal conditioning?",
        "options": [
          "To convert analog signals to mechanical signals.",
          "To filter out noise from signals.",
          "To linearize the output of a transducer.",
          "To convert analog signals to digital signals for processing."
        ],
        "correctAnswer": "To convert analog signals to digital signals for processing."
      },
      {
        "question": "What are the essential requirements of an instrument?",
        "options": [
          "Deflection system and accuracy.",
          "Damping system and sensitivity.",
          "Deflection system, controlling system, and damping system.",
          "Accuracy, sensitivity, and damping system."
        ],
        "correctAnswer": "Deflection system, controlling system, and damping system."
      },
      {
        "question": "What does a PMMC instrument measure?",
        "options": [
          "Pressure.",
          "Temperature.",
          "Humidity.",
          "Current and voltage."
        ],
        "correctAnswer": "Current and voltage."
      },
      {
        "question": "What is the working principle of a voltmeter?",
        "options": [
          "It measures the current flowing through a circuit.",
          "It measures the resistance of a circuit.",
          "It measures the voltage drop across a circuit element.",
          "It measures the power dissipation in a circuit."
        ],
        "correctAnswer": "It measures the voltage drop across a circuit element."
      },
      {
        "question": "What is the working principle of an ammeter?",
        "options": [
          "It measures the voltage drop across a circuit element.",
          "It measures the resistance of a circuit.",
          "It measures the power dissipation in a circuit.",
          "It measures the current flowing through a circuit."
        ],
        "correctAnswer": "It measures the current flowing through a circuit."
      },
      {
        "question": "What is the working principle of an ohmmeter?",
        "options": [
          "It measures the resistance of a circuit.",
          "It measures the voltage drop across a circuit element.",
          "It measures the current flowing through a circuit.",
          "It measures the power dissipation in a circuit."
        ],
        "correctAnswer": "It measures the resistance of a circuit."
      },
      {
        "question": "What is the working principle of a clamp-meter?",
        "options": [
          "It measures the voltage drop across a circuit element.",
          "It measures the resistance of a circuit.",
          "It measures the current flowing through a circuit.",
          "It measures the power dissipation in a circuit."
        ],
        "correctAnswer": "It measures the current flowing through a circuit."
      },
      {
        "question": "What is the purpose of a multi-meter?",
        "options": [
          "To measure only voltage.",
          "To measure only current.",
          "To measure voltage, current, and resistance.",
          "To measure power dissipation."
        ],
        "correctAnswer": "To measure voltage, current, and resistance."
      },
      {
        "question": "What is the working principle of a wattmeter?",
        "options": [
          "It measures the current flowing through a circuit.",
          "It measures the voltage drop across a circuit element.",
          "It measures the power dissipation in a circuit.",
          "It measures the power consumed by a load."
        ],
        "correctAnswer": "It measures the power consumed by a load."
      },
      {
        "question": "What does an energy meter measure?",
        "options": [
          "Voltage.",
          "Current.",
          "Power factor.",
          "Energy consumed by a load."
        ],
        "correctAnswer": "Energy consumed by a load."
      },
      {
        "question": "What is the purpose of a time of day meter?",
        "options": [
          "To measure the time.",
          "To measure the power factor.",
          "To measure the energy consumed by a load at different times of the day.",
          "To measure the resistance of a circuit."
        ],
        "correctAnswer": "To measure the energy consumed by a load at different times of the day."
      },
      {
        "question": "What does a power factor meter measure?",
        "options": [
          "Voltage.",
          "Current.",
          "Power factor.",
          "Energy consumed by a load."
        ],
        "correctAnswer": "Power factor."
      },
      {
        "question": "What does a frequency meter measure?",
        "options": [
          "Voltage.",
          "Current.",
          "Power factor.",
          "Frequency of an AC signal."
        ],
        "correctAnswer": "Frequency of an AC signal."
      },
      {
        "question": "What does a phase meter measure?",
        "options": [
          "Voltage.",
          "Current.",
          "Power factor.",
          "Phase difference between two AC signals."
        ],
        "correctAnswer": "Phase difference between two AC signals."
      },
      {
        "question": "What is the purpose of instrument transformers?",
        "options": [
          "To amplify the measurement signals.",
          "To convert AC signals to DC signals.",
          "To measure resistance.",
          "To provide a safe means of measuring high currents and voltages."
        ],
        "correctAnswer": "To provide a safe means of measuring high currents and voltages."
      },
      {
        "question": "What is the purpose of a Megger?",
        "options": [
          "To measure the resistance of a circuit.",
          "To measure voltage.",
          "To measure current.",
          "To measure power factor."
        ],
        "correctAnswer": "To measure the resistance of a circuit."
      },
      {
        "question": "What does a tachometer measure?",
        "options": [
          "Temperature.",
          "Pressure.",
          "Voltage.",
          "Rotational speed or velocity of a machine."
        ],
        "correctAnswer": "Rotational speed or velocity of a machine."
      },
      {
        "question": "What is a control system?",
        "options": [
          "A system that controls mechanical devices only.",
          "A system that regulates temperature in an environment.",
          "A system that manages communication networks.",
          "A system that manages the behavior of dynamic processes."
        ],
        "correctAnswer": "A system that manages the behavior of dynamic processes."
      },
      {
        "question": "How are control systems classified?",
        "options": [
          "Based on their size.",
          "Based on their color.",
          "Based on their location.",
          "Based on their function and behavior."
        ],
        "correctAnswer": "Based on their function and behavior."
      },
      {
        "question": "What is the main difference between open-loop and closed-loop systems?",
        "options": [
          "Open-loop systems have feedback, while closed-loop systems do not.",
          "Open-loop systems have no input, while closed-loop systems have inputs.",
          "Open-loop systems have no output, while closed-loop systems have outputs.",
          "Open-loop systems use sensors, while closed-loop systems do not."
        ],
        "correctAnswer": "Open-loop systems have no feedback, while closed-loop systems have feedback."
      },
      {
        "question": "Which type of system modeling involves representing mechanical components and their interactions?",
        "options": [
          "Electrical system modeling.",
          "Thermal system modeling.",
          "Mechanical system modeling.",
          "Liquid level system modeling."
        ],
        "correctAnswer": "Mechanical system modeling."
      },
      {
        "question": "What does the transfer function represent in system modeling?",
        "options": [
          "The number of inputs and outputs in a system.",
          "The relationship between the input and output signals.",
          "The time delay in a system.",
          "The efficiency of the system's components."
        ],
        "correctAnswer": "The relationship between the input and output signals."
      },
      {
        "question": "What does modeling of liquid level systems involve?",
        "options": [
          "Modeling the flow of electricity in a circuit.",
          "Modeling the movement of mechanical gears.",
          "Modeling the behavior of liquid levels in tanks or containers.",
          "Modeling the behavior of thermal systems."
        ],
        "correctAnswer": "Modeling the behavior of liquid levels in tanks or containers."
      },
      {
        "question": "What is Force-Voltage Analogous system modeling?",
        "options": [
          "A method to model the behavior of electrical circuits.",
          "A method to model the behavior of thermal systems.",
          "A method to model the behavior of mechanical systems.",
          "A method to model the behavior of mixed systems."
        ],
        "correctAnswer": "A method to model the behavior of mechanical systems."
      },
      {
        "question": "What does modeling of sensors and encoders involve?",
        "options": [
          "Modeling the behavior of electrical circuits.",
          "Modeling the behavior of mechanical systems.",
          "Modeling the behavior of thermal systems.",
          "Modeling the behavior of feedback loops."
        ],
        "correctAnswer": "Modeling the behavior of electrical circuits."
      },
      {
        "question": "What does modeling of electromechanical systems involve?",
        "options": [
          "Modeling the behavior of electrical circuits.",
          "Modeling the behavior of thermal systems.",
          "Modeling the behavior of mechanical systems.",
          "Modeling the behavior of mixed systems."
        ],
        "correctAnswer": "Modeling the behavior of mixed systems."
      },
      {
        "question": "What is the purpose of modeling mixed systems?",
        "options": [
          "To simulate the behavior of systems involving both mechanical and electrical components.",
          "To model the behavior of systems involving only electrical components.",
          "To model the behavior of systems involving only mechanical components.",
          "To simulate the behavior of systems involving only thermal components."
        ],
        "correctAnswer": "To simulate the behavior of systems involving both mechanical and electrical components."
      },
      {
        "question": "What are the rules for block diagram reduction?",
        "options": [
          "Only add blocks in series.",
          "Only add blocks in parallel.",
          "Add blocks in series and parallel, and remove loops.",
          "Add blocks in series and parallel, but avoid removing loops."
        ],
        "correctAnswer": "Add blocks in series and parallel, and remove loops."
      },
      {
        "question": "What do block diagram reduction examples demonstrate?",
        "options": [
          "The importance of loops in control systems.",
          "The rules for constructing signal flow graphs.",
          "The process of simplifying complex control systems.",
          "The application of resistors in electrical circuits."
        ],
        "correctAnswer": "The process of simplifying complex control systems."
      },
      {
        "question": "What is a Signal Flow Graph (SFG)?",
        "options": [
          "A graphical representation of electronic circuits.",
          "A representation of block diagrams using flowcharts.",
          "A graphical representation of dynamic systems using nodes and branches.",
          "A graphical representation of mechanical systems."
        ],
        "correctAnswer": "A graphical representation of dynamic systems using nodes and branches."
      },
      {
        "question": "What are the rules for constructing a Signal Flow Graph?",
        "options": [
          "Only use nodes, no branches.",
          "Only use branches, no nodes.",
          "Use nodes and branches, and consider direction of signal flow.",
          "Use nodes and branches, but avoid considering direction of signal flow."
        ],
        "correctAnswer": "Use nodes and branches, and consider direction of signal flow."
      },
      {
        "question": "How can a block diagram be converted to a Signal Flow Graph?",
        "options": [
          "By removing all nodes and branches.",
          "By reversing the direction of signal flow.",
          "By adding more loops.",
          "By identifying nodes and branches and assigning signal flow directions."
        ],
        "correctAnswer": "By identifying nodes and branches and assigning signal flow directions."
      },
      {
        "question": "How can a Signal Flow Graph be converted back to a block diagram?",
        "options": [
          "By removing all nodes and branches.",
          "By reversing the direction of signal flow.",
          "By adding more loops.",
          "By identifying nodes and branches and reversing signal flow directions."
        ],
        "correctAnswer": "By identifying nodes and branches and reversing signal flow directions."
      },
      {
        "question": "What is a mixed system in the context of control systems?",
        "options": [
          "A system that combines mechanical and thermal components only.",
          "A system that combines electrical and mechanical components only.",
          "A system that combines electrical, mechanical, and thermal components.",
          "A system that only contains electrical components."
        ],
        "correctAnswer": "A system that combines electrical, mechanical, and thermal components."
      },
      {
        "question": "How does a mixed system affect block diagrams and signal flow graphs?",
        "options": [
          "It has no effect on block diagrams or signal flow graphs.",
          "It simplifies the construction of block diagrams and signal flow graphs.",
          "It makes the construction of block diagrams and signal flow graphs more complex.",
          "It eliminates the need for loops in control systems."
        ],
        "correctAnswer": "It makes the construction of block diagrams and signal flow graphs more complex."
      },
      {
        "question": "What does the response of a first-order system to test signals indicate?",
        "options": [
          "The sensitivity of the system to external disturbances.",
          "The stability of the system.",
          "The time it takes for the system to respond to changes.",
          "The frequency of the system's oscillations."
        ],
        "correctAnswer": "The time it takes for the system to respond to changes."
      },
      {
        "question": "What does the response of a second-order system to test signals indicate?",
        "options": [
          "The sensitivity of the system to external disturbances.",
          "The stability of the system.",
          "The time it takes for the system to respond to changes.",
          "The frequency of the system's oscillations."
        ],
        "correctAnswer": "The frequency of the system's oscillations."
      },
      {
        "question": "What is the definition of stability in control systems?",
        "options": [
          "The ability of a system to respond quickly to changes.",
          "The tendency of a system to produce oscillations.",
          "The ability of a system to resist external disturbances.",
          "The condition where the output of a system remains bounded over time."
        ],
        "correctAnswer": "The condition where the output of a system remains bounded over time."
      },
      {
        "question": "What is a stable system?",
        "options": [
          "A system that produces oscillations.",
          "A system that is highly sensitive to disturbances.",
          "A system that can respond quickly to changes.",
          "A system that has a bounded output for bounded input."
        ],
        "correctAnswer": "A system that has a bounded output for bounded input."
      },
      {
        "question": "What is the Routh-Hurwitz criterion used for?",
        "options": [
          "To design control systems.",
          "To analyze the stability of systems using the coefficients of their characteristic equations.",
          "To measure the frequency response of systems.",
          "To construct root locus plots."
        ],
        "correctAnswer": "To analyze the stability of systems using the coefficients of their characteristic equations."
      },
      {
        "question": "What is the purpose of a Root Locus plot?",
        "options": [
          "To analyze the frequency response of a system.",
          "To determine the stability of a system.",
          "To design control systems.",
          "To measure the damping ratio of a system."
        ],
        "correctAnswer": "To determine the stability of a system."
      },
      {
        "question": "What are the rules for constructing a Root Locus plot?",
        "options": [
          "Only add poles, no zeros.",
          "Only add zeros, no poles.",
          "Add poles and zeros, and follow the path of the poles.",
          "Add poles and zeros, and follow the path of the zeros."
        ],
        "correctAnswer": "Add poles and zeros, and follow the path of the poles."
      },
      {
        "question": "What is a Bode plot used for?",
        "options": [
          "To analyze the frequency response of a system.",
          "To determine the stability of a system.",
          "To design control systems.",
          "To measure the damping ratio of a system."
        ],
        "correctAnswer": "To analyze the frequency response of a system."
      },
      {
        "question": "What does the Bode plot show?",
        "options": [
          "The time response of a system.",
          "The step response of a system.",
          "The amplitude and phase response of a system to sinusoidal inputs at different frequencies.",
          "The transient response of a system."
        ],
        "correctAnswer": "The amplitude and phase response of a system to sinusoidal inputs at different frequencies."
      },
      {
        "question": "What is the stability criterion for a Bode plot?",
        "options": [
          "The gain margin of the system.",
          "The phase margin of the system.",
          "The resonant frequency of the system.",
          "The time constant of the system."
        ],
        "correctAnswer": "The phase margin of the system."
      },
      {
        "question": "What is the purpose of a Polar plot?",
        "options": [
          "To analyze the frequency response of a system.",
          "To determine the stability of a system.",
          "To design control systems.",
          "To measure the damping ratio of a system."
        ],
        "correctAnswer": "To determine the stability of a system."
      },
      {
        "question": "What is Nyquist's stability criterion used for?",
        "options": [
          "To analyze the frequency response of a system.",
          "To determine the stability of a system.",
          "To design control systems.",
          "To measure the damping ratio of a system."
        ],
        "correctAnswer": "To determine the stability of a system."
      },
      {
        "question": "What do stability margins indicate?",
        "options": [
          "How quickly a system responds to changes.",
          "The robustness of a control system.",
          "The frequency of oscillations in a system.",
          "The time constant of a system."
        ],
        "correctAnswer": "The robustness of a control system."
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
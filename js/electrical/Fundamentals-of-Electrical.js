const quizData = [
    {
        "question": "What is Ohm's law?",
        "options": [
          "A law of thermodynamics.",
          "A law of motion.",
          "A law governing electrical resistance.",
          "A law of gravity."
        ],
        "correctAnswer": "A law governing electrical resistance."
      },
      {
        "question": "What does Ohm's law state?",
        "options": [
          "Voltage is directly proportional to current.",
          "Power is directly proportional to voltage.",
          "Energy is directly proportional to resistance.",
          "Current is directly proportional to resistance."
        ],
        "correctAnswer": "Voltage is directly proportional to current."
      },
      {
        "question": "What is electric voltage?",
        "options": [
          "The rate of flow of electrons.",
          "The amount of energy consumed by a device.",
          "The force that drives electric current.",
          "The temperature of an electric circuit."
        ],
        "correctAnswer": "The force that drives electric current."
      },
      {
        "question": "What is electric current?",
        "options": [
          "The amount of energy consumed by a device.",
          "The flow of electrons through a conductor.",
          "The force that drives electric voltage.",
          "The temperature of an electric circuit."
        ],
        "correctAnswer": "The flow of electrons through a conductor."
      },
      {
        "question": "What is electric power?",
        "options": [
          "The flow of electrons through a conductor.",
          "The rate of flow of electrons.",
          "The amount of energy consumed by a device.",
          "The force that drives electric voltage."
        ],
        "correctAnswer": "The amount of energy consumed by a device."
      },
      {
        "question": "What is electric energy?",
        "options": [
          "The force that drives electric current.",
          "The rate of flow of electrons.",
          "The amount of energy consumed by a device.",
          "The temperature of an electric circuit."
        ],
        "correctAnswer": "The amount of energy consumed by a device."
      },
      {
        "question": "What are conducting materials?",
        "options": [
          "Materials that do not allow the flow of electric current.",
          "Materials that store electric energy.",
          "Materials that amplify electric voltage.",
          "Materials that allow the flow of electric current."
        ],
        "correctAnswer": "Materials that allow the flow of electric current."
      },
      {
        "question": "What are insulating materials?",
        "options": [
          "Materials that do not allow the flow of electric current.",
          "Materials that conduct electricity very well.",
          "Materials that amplify electric voltage.",
          "Materials that allow the flow of electric current."
        ],
        "correctAnswer": "Materials that do not allow the flow of electric current."
      },
      {
        "question": "What is a series electric circuit?",
        "options": [
          "A circuit where all components are connected in parallel.",
          "A circuit where components are connected end-to-end, forming a single path for current.",
          "A circuit where all components are connected in series.",
          "A circuit where components are connected at random."
        ],
        "correctAnswer": "A circuit where components are connected end-to-end, forming a single path for current."
      },
      {
        "question": "What is a parallel electric circuit?",
        "options": [
          "A circuit where all components are connected in series.",
          "A circuit where components are connected end-to-end, forming a single path for current.",
          "A circuit where all components are connected in parallel.",
          "A circuit where components are connected at random."
        ],
        "correctAnswer": "A circuit where all components are connected in parallel."
      },
      {
        "question": "What is star-delta conversion?",
        "options": [
          "A process to convert electric power into mechanical power.",
          "A process to convert energy from delta circuits to star circuits.",
          "A process to convert energy from star circuits to delta circuits.",
          "A process to convert between star and delta configurations in three-phase circuits."
        ],
        "correctAnswer": "A process to convert between star and delta configurations in three-phase circuits."
      },
      {
        "question": "Why is star-delta conversion used?",
        "options": [
          "It's only used for artistic purposes.",
          "It helps in creating energy-efficient circuits.",
          "It's not important; circuits work the same in both configurations.",
          "It's used to balance load distribution and optimize performance in three-phase systems."
        ],
        "correctAnswer": "It's used to balance load distribution and optimize performance in three-phase systems."
      },
      {
        "question": "What is Kirchhoff's law?",
        "options": [
          "A law governing the behavior of magnetism.",
          "A law governing the behavior of fluids.",
          "A law governing the behavior of electric circuits.",
          "A law governing the behavior of light."
        ],
        "correctAnswer": "A law governing the behavior of electric circuits."
      },
      {
        "question": "What does Kirchhoff's law state?",
        "options": [
          "Voltage is directly proportional to current.",
          "Power is directly proportional to voltage.",
          "Energy is directly proportional to resistance.",
          "The sum of currents entering a junction is equal to the sum of currents leaving the junction."
        ],
        "correctAnswer": "The sum of currents entering a junction is equal to the sum of currents leaving the junction."
      },
      {
        "question": "What is a linear circuit?",
        "options": [
          "A circuit that only uses linear components.",
          "A circuit that operates at high voltages.",
          "A circuit that has no current flow.",
          "A circuit where the output is directly proportional to the input."
        ],
        "correctAnswer": "A circuit where the output is directly proportional to the input."
      },
      {
        "question": "What is a non-linear circuit?",
        "options": [
          "A circuit that has no current flow.",
          "A circuit where the output is directly proportional to the input.",
          "A circuit that only uses linear components.",
          "A circuit that operates at high voltages."
        ],
        "correctAnswer": "A circuit where the output is directly proportional to the input."
      },
      {
        "question": "What is a bilateral circuit?",
        "options": [
          "A circuit that operates in two different voltage ranges.",
          "A circuit that conducts current in one direction only.",
          "A circuit that conducts current in both directions.",
          "A circuit that has no current flow."
        ],
        "correctAnswer": "A circuit that conducts current in both directions."
      },
      {
        "question": "What is a unilateral circuit?",
        "options": [
          "A circuit that has no current flow.",
          "A circuit that operates in two different voltage ranges.",
          "A circuit that conducts current in both directions.",
          "A circuit that conducts current in one direction only."
        ],
        "correctAnswer": "A circuit that conducts current in one direction only."
      },
      {
        "question": "What is an active circuit?",
        "options": [
          "A circuit that requires external power to operate.",
          "A circuit that has no current flow.",
          "A circuit that operates in two different voltage ranges.",
          "A circuit that generates its own energy."
        ],
        "correctAnswer": "A circuit that requires external power to operate."
      },
      {
        "question": "What is a passive circuit?",
        "options": [
          "A circuit that requires external power to operate.",
          "A circuit that has no current flow.",
          "A circuit that operates in two different voltage ranges.",
          "A circuit that generates its own energy."
        ],
        "correctAnswer": "A circuit that operates in two different voltage ranges."
      },
      {
        "question": "What is the superposition theorem?",
        "options": [
          "A theorem in geometry.",
          "A theorem that deals with sound propagation.",
          "A theorem that simplifies complex circuits using linear equations.",
          "A theorem that relates electric current and voltage."
        ],
        "correctAnswer": "A theorem that simplifies complex circuits using linear equations."
      },
      {
        "question": "How does the superposition theorem work?",
        "options": [
          "It only works for DC circuits.",
          "It only works for non-linear circuits.",
          "It analyzes the effects of individual sources one at a time while keeping others turned off.",
          "It combines all sources together to find the total effect."
        ],
        "correctAnswer": "It analyzes the effects of individual sources one at a time while keeping others turned off."
      },
      {
        "question": "What is Thevenin's theorem?",
        "options": [
          "A theorem that deals with heat transfer.",
          "A theorem that simplifies complex circuits into an equivalent voltage source and series resistance.",
          "A theorem that explains electromagnetic radiation.",
          "A theorem that relates current and voltage in capacitors."
        ],
        "correctAnswer": "A theorem that simplifies complex circuits into an equivalent voltage source and series resistance."
      },
      {
        "question": "What is the advantage of using Thevenin's theorem?",
        "options": [
          "It only applies to DC circuits.",
          "It reduces the complexity of circuit analysis.",
          "It only works for circuits with resistors.",
          "It increases circuit complexity."
        ],
        "correctAnswer": "It reduces the complexity of circuit analysis."
      },
      {
        "question": "What is Norton's theorem?",
        "options": [
          "A theorem that deals with magnetism.",
          "A theorem that simplifies complex circuits into an equivalent current source and parallel conductance.",
          "A theorem that explains light propagation.",
          "A theorem that relates current and voltage in inductors."
        ],
        "correctAnswer": "A theorem that simplifies complex circuits into an equivalent current source and parallel conductance."
      },
      {
        "question": "How does Norton's theorem simplify circuit analysis?",
        "options": [
          "It only applies to circuits with capacitors.",
          "It reduces the need for Kirchhoff's laws.",
          "It increases circuit complexity.",
          "It only works for AC circuits."
        ],
        "correctAnswer": "It reduces the need for Kirchhoff's laws."
      },
      {
        "question": "What is the maximum power transfer theorem?",
        "options": [
          "A theorem that deals with sound waves.",
          "A theorem that determines the maximum voltage in a circuit.",
          "A theorem that explains how to transfer maximum energy from a source to a load.",
          "A theorem that relates current and voltage in resistors."
        ],
        "correctAnswer": "A theorem that explains how to transfer maximum energy from a source to a load."
      },
      {
        "question": "Why is the maximum power transfer theorem important?",
        "options": [
          "It only applies to AC circuits.",
          "It's not important; maximum power transfer is always achieved.",
          "It helps optimize power transmission by matching source and load impedance.",
          "It only works for circuits with capacitors."
        ],
        "correctAnswer": "It helps optimize power transmission by matching source and load impedance."
      },
      {
        "question": "What are R-L circuits?",
        "options": [
          "Circuits with resistors and capacitors.",
          "Circuits with resistors and inductors.",
          "Circuits with resistors and diodes.",
          "Circuits with resistors and transformers."
        ],
        "correctAnswer": "Circuits with resistors and inductors."
      },
      {
        "question": "What is the behavior of R-L circuits?",
        "options": [
          "They have no current flow.",
          "They only work in DC circuits.",
          "They resist changes in current flow.",
          "They amplify voltage."
        ],
        "correctAnswer": "They resist changes in current flow."
      },
      {
        "question": "What are R-C circuits?",
        "options": [
          "Circuits with resistors and capacitors.",
          "Circuits with resistors and inductors.",
          "Circuits with resistors and diodes.",
          "Circuits with resistors and transformers."
        ],
        "correctAnswer": "Circuits with resistors and capacitors."
      },
      {
        "question": "What is the behavior of R-C circuits?",
        "options": [
          "They have no current flow.",
          "They only work in DC circuits.",
          "They store and release energy in the form of electric charge.",
          "They amplify voltage."
        ],
        "correctAnswer": "They store and release energy in the form of electric charge."
      },
      {
        "question": "What is steady-state analysis in electric circuits?",
        "options": [
          "Analyzing circuits without power sources.",
          "Analyzing circuits with constant voltages and currents.",
          "Analyzing circuits with varying voltages and currents.",
          "Analyzing circuits using Kirchhoff's law only."
        ],
        "correctAnswer": "Analyzing circuits with constant voltages and currents."
      },
      {
        "question": "What is transient analysis in electric circuits?",
        "options": [
          "Analyzing circuits without power sources.",
          "Analyzing circuits with constant voltages and currents.",
          "Analyzing circuits with varying voltages and currents.",
          "Analyzing circuits using Ohm's law only."
        ],
        "correctAnswer": "Analyzing circuits with varying voltages and currents."
      },
      {
        "question": "What are transfer functions in electric circuits?",
        "options": [
          "Functions that determine the transfer of energy from one component to another.",
          "Functions that relate current and voltage in capacitors.",
          "Functions that relate resistance and inductance.",
          "Functions that describe the relationship between input and output signals in a system."
        ],
        "correctAnswer": "Functions that describe the relationship between input and output signals in a system."
      },
      {
        "question": "Why are transfer functions important?",
        "options": [
          "They're only important for theoretical purposes.",
          "They have no impact on circuit analysis.",
          "They provide insights into system behavior and response to different inputs.",
          "They only work in DC circuits."
        ],
        "correctAnswer": "They provide insights into system behavior and response to different inputs."
      },
      {
        "question": "What are poles and zeros of networks?",
        "options": [
          "Points where circuits break down.",
          "Points where energy is lost in circuits.",
          "Frequency points where impedance is infinite or zero.",
          "Points where circuits generate power."
        ],
        "correctAnswer": "Frequency points where impedance is infinite or zero."
      },
      {
        "question": "What's the relationship between poles/zeros locations and system response?",
        "options": [
          "There's no relationship.",
          "Poles and zeros have no impact on system behavior.",
          "Poles and zeros affect the transient behavior of systems.",
          "Poles and zeros only affect steady-state behavior."
        ],
        "correctAnswer": "Poles and zeros affect the transient behavior of systems."
      },
      {
        "question": "What are one-port passive circuits?",
        "options": [
          "Circuits with one resistor.",
          "Circuits with one capacitor.",
          "Circuits with one power source.",
          "Circuits that cannot generate energy."
        ],
        "correctAnswer": "Circuits that cannot generate energy."
      },
      {
        "question": "What are impedance and admittance functions?",
        "options": [
          "Functions that determine energy storage.",
          "Functions that relate voltage and current.",
          "Functions that relate resistance and inductance.",
          "Functions that describe the efficiency of a circuit."
        ],
        "correctAnswer": "Functions that relate voltage and current."
      },
      {
        "question": "What are two-port parameters of networks?",
        "options": [
          "Parameters related to power transmission.",
          "Parameters that describe the complexity of circuits.",
          "Parameters used for system identification.",
          "Parameters that describe circuit behavior using four variables."
        ],
        "correctAnswer": "Parameters that describe circuit behavior using four variables."
      },
      {
        "question": "What are short circuit admittance parameters?",
        "options": [
          "Parameters that describe circuit behavior when short-circuited.",
          "Parameters that describe power loss in circuits.",
          "Parameters that relate current and voltage.",
          "Parameters that only work for DC circuits."
        ],
        "correctAnswer": "Parameters that describe circuit behavior when short-circuited."
      },
      {
        "question": "What are open circuit impedance parameters?",
        "options": [
          "Parameters that describe circuit behavior when open-circuited.",
          "Parameters that describe power generation in circuits.",
          "Parameters that relate current and voltage.",
          "Parameters that describe energy storage in circuits."
        ],
        "correctAnswer": "Parameters that describe circuit behavior when open-circuited."
      },
      {
        "question": "What are transmission parameters?",
        "options": [
          "Parameters that describe energy transfer between components.",
          "Parameters that describe power loss in circuits.",
          "Parameters that relate current and voltage.",
          "Parameters that describe circuit behavior using ratios of variables."
        ],
        "correctAnswer": "Parameters that describe circuit behavior using ratios of variables."
      },
      {
        "question": "What are hybrid parameters?",
        "options": [
          "Parameters used for hybrid circuits only.",
          "Parameters that relate current and voltage.",
          "Parameters that describe power transmission.",
          "Parameters that describe circuit behavior using mixed variables."
        ],
        "correctAnswer": "Parameters that describe circuit behavior using mixed variables."
      },
      {
        "question": "What's the inter-relationship between parameters of two-port networks?",
        "options": [
          "There's no relationship between parameters.",
          "Different parameters are independent of each other.",
          "Parameters can be derived from each other using mathematical relationships.",
          "Parameters only apply to DC circuits."
        ],
        "correctAnswer": "Parameters can be derived from each other using mathematical relationships."
      },
      {
        "question": "What are series, parallel, and cascade networks?",
        "options": [
          "Terms related to musical instruments.",
          "Terms used in software engineering.",
          "Different types of voltage sources.",
          "Different ways of connecting components in a circuit."
        ],
        "correctAnswer": "Different ways of connecting components in a circuit."
      },
      {
        "question": "Why is understanding these network configurations important?",
        "options": [
          "They only affect the appearance of circuits.",
          "They have no impact on circuit analysis.",
          "They help in simplifying circuit analysis and design.",
          "They only apply to AC circuits."
        ],
        "correctAnswer": "They help in simplifying circuit analysis and design."
      },
      {
        "question": "What is synthesis of networks?",
        "options": [
          "A process of analyzing existing networks.",
          "A process of designing new networks with specific properties.",
          "A process of optimizing network efficiency.",
          "A process of troubleshooting network issues."
        ],
        "correctAnswer": "A process of designing new networks with specific properties."
      },
      {
        "question": "What are Hurwitz polynomials?",
        "options": [
          "Polynomials that relate current and voltage in circuits.",
          "Polynomials used in quantum mechanics.",
          "Polynomials used in network analysis.",
          "Polynomials used in food science."
        ],
        "correctAnswer": "Polynomials used in network analysis."
      },
      {
        "question": "What are positive real functions?",
        "options": [
          "Functions that describe negative values in circuits.",
          "Functions that describe power loss in circuits.",
          "Functions that relate resistance and inductance.",
          "Functions that have only positive values for all real frequencies."
        ],
        "correctAnswer": "Functions that have only positive values for all real frequencies."
      },
      {
        "question": "Why are positive real functions important?",
        "options": [
          "They only apply to DC circuits.",
          "They have no impact on network analysis.",
          "They provide insights into network stability and behavior.",
          "They only work for passive circuits."
        ],
        "correctAnswer": "They provide insights into network stability and behavior."
      },
      {
        "question": "What are Foster and Cauer forms?",
        "options": [
          "Forms of network representation.",
          "Forms of mathematical equations.",
          "Forms of musical compositions.",
          "Forms of energy storage."
        ],
        "correctAnswer": "Forms of network representation."
      },
      {
        "question": "How do Foster and Cauer forms contribute to network synthesis?",
        "options": [
          "They simplify network equations.",
          "They are only applicable to digital networks.",
          "They increase network complexity.",
          "They have no impact on network design."
        ],
        "correctAnswer": "They simplify network equations."
      },
      {
        "question": "What is synthesis of RL, RC, and LC networks?",
        "options": [
          "A process of analyzing existing networks.",
          "A process of designing new networks with specific properties.",
          "A process of optimizing network efficiency.",
          "A process of troubleshooting network issues."
        ],
        "correctAnswer": "A process of designing new networks with specific properties."
      },
      {
        "question": "Why is synthesis of RL, RC, and LC networks important?",
        "options": [
          "It's only important for AC circuits.",
          "It's not important; all networks behave the same way.",
          "It helps in designing circuits with desired response characteristics.",
          "It only works for digital networks."
        ],
        "correctAnswer": "It helps in designing circuits with desired response characteristics."
      },
      {
        "question": "What is synthesis of resistively terminated two-ports?",
        "options": [
          "A process of analyzing existing networks.",
          "A process of designing new networks with specific properties.",
          "A process of optimizing network efficiency.",
          "A process of troubleshooting network issues."
        ],
        "correctAnswer": "A process of designing new networks with specific properties."
      },
      {
        "question": "Why is synthesis of resistively terminated two-ports important?",
        "options": [
          "It's only important for passive networks.",
          "It's not important; all networks behave the same way.",
          "It helps in designing circuits with desired termination characteristics.",
          "It only works for digital networks."
        ],
        "correctAnswer": "It helps in designing circuits with desired termination characteristics."
      },
      {
        "question": "What are ladder networks?",
        "options": [
          "Networks that resemble ladders in shape.",
          "Networks with only resistors.",
          "Networks with only capacitors.",
          "Networks with interconnected reactive and resistive elements."
        ],
        "correctAnswer": "Networks with interconnected reactive and resistive elements."
      },
      {
        "question": "Why are ladder networks used?",
        "options": [
          "They only apply to audio systems.",
          "They have no impact on network analysis.",
          "They provide a way to model complex networks.",
          "They only work for digital networks."
        ],
        "correctAnswer": "They provide a way to model complex networks."
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
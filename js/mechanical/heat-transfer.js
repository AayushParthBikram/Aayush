const quizData = [
    {
        "question": "What is conduction in heat transfer?",
        "options": [
          "The transfer of heat by electromagnetic waves.",
          "The transfer of heat by the movement of fluids.",
          "The transfer of heat through a solid material without any movement of the material itself.",
          "The transfer of heat through transparent materials."
        ],
        "correctAnswer": "The transfer of heat through a solid material without any movement of the material itself."
      },
      {
        "question": "Why is conduction important in heat transfer?",
        "options": [
          "It increases heat loss.",
          "It only impacts transparent materials.",
          "It helps in cooling electronic devices.",
          "It's the primary mode of heat transfer in solids and plays a role in energy conservation."
        ],
        "correctAnswer": "It's the primary mode of heat transfer in solids and plays a role in energy conservation."
      },
      {
        "question": "What is convection in heat transfer?",
        "options": [
          "The transfer of heat by electromagnetic waves.",
          "The transfer of heat through transparent materials.",
          "The transfer of heat by the movement of fluids.",
          "The transfer of heat through a solid material."
        ],
        "correctAnswer": "The transfer of heat by the movement of fluids."
      },
      {
        "question": "Why is convection important in heat transfer?",
        "options": [
          "It increases heat loss.",
          "It's not important; convection has no impact.",
          "It's only important for space travel.",
          "It plays a key role in heat distribution and energy exchange in fluids and gases."
        ],
        "correctAnswer": "It plays a key role in heat distribution and energy exchange in fluids and gases."
      },
      {
        "question": "What is the electromagnetic spectrum in heat transfer?",
        "options": [
          "A spectrum of colors in heat transfer.",
          "A range of electromagnetic waves in heat transfer.",
          "A measurement of heat intensity.",
          "A measurement of heat resistance."
        ],
        "correctAnswer": "A range of electromagnetic waves in heat transfer."
      },
      {
        "question": "Why is understanding the electromagnetic spectrum important in heat transfer?",
        "options": [
          "It's not important; electromagnetic waves have no impact on heat transfer.",
          "It's only important for artistic purposes.",
          "It helps in predicting the color of heated objects.",
          "It explains how energy is radiated in the form of electromagnetic waves."
        ],
        "correctAnswer": "It explains how energy is radiated in the form of electromagnetic waves."
      },
      {
        "question": "How does heat transfer occur in a plane wall?",
        "options": [
          "Only through conduction.",
          "Only through convection.",
          "Only through radiation.",
          "Through a combination of conduction, convection, and radiation."
        ],
        "correctAnswer": "Through a combination of conduction, convection, and radiation."
      },
      {
        "question": "Why is understanding heat transfer in different shapes important?",
        "options": [
          "It increases confusion.",
          "It's only important for artistic designs.",
          "It helps in understanding how different shapes affect heat transfer mechanisms.",
          "It doesn't impact heat transfer calculations."
        ],
        "correctAnswer": "It helps in understanding how different shapes affect heat transfer mechanisms."
      },
      {
        "question": "What is Stefan's Boltzmann law?",
        "options": [
          "A law that governs the movement of fluids.",
          "A law that explains the behavior of conduction.",
          "A law that describes the distribution of heat in transparent materials.",
          "A law that relates the intensity of radiation to the temperature and emissivity of a surface."
        ],
        "correctAnswer": "A law that relates the intensity of radiation to the temperature and emissivity of a surface."
      },
      {
        "question": "Why is Stefan's Boltzmann law significant in heat transfer?",
        "options": [
          "It only impacts transparent materials.",
          "It's not important; it's just a mathematical formula.",
          "It helps in calculating the speed of light.",
          "It provides a fundamental understanding of how radiation heat transfer works."
        ],
        "correctAnswer": "It provides a fundamental understanding of how radiation heat transfer works."
      },
      {
        "question": "What are reflectivity, transmissivity, and absorptivity in heat transfer?",
        "options": [
          "Different colors in heat transfer.",
          "Properties of solid materials only.",
          "Properties of transparent materials only.",
          "Properties that describe how surfaces interact with radiation, absorbing, reflecting, and transmitting energy."
        ],
        "correctAnswer": "Properties that describe how surfaces interact with radiation, absorbing, reflecting, and transmitting energy."
      },
      {
        "question": "Why are these properties important in heat transfer analysis?",
        "options": [
          "They only affect aesthetics.",
          "They increase confusion.",
          "They help in calculating the speed of light.",
          "They play a vital role in understanding energy exchange between surfaces and radiation."
        ],
        "correctAnswer": "They play a vital role in understanding energy exchange between surfaces and radiation."
      },
      {
        "question": "What is the overall heat transfer coefficient?",
        "options": [
          "A coefficient that measures the speed of light.",
          "A coefficient used to calculate the temperature of a fluid.",
          "A coefficient used to describe heat transfer in transparent materials.",
          "A coefficient that combines the effects of conduction, convection, and radiation in a heat transfer process."
        ],
        "correctAnswer": "A coefficient that combines the effects of conduction, convection, and radiation in a heat transfer process."
      },
      {
        "question": "Why is the overall heat transfer coefficient significant?",
        "options": [
          "It only applies to transparent materials.",
          "It increases confusion.",
          "It helps in calculating the efficiency of engines.",
          "It's a key parameter in analyzing heat transfer processes and designing efficient heat exchange systems."
        ],
        "correctAnswer": "It's a key parameter in analyzing heat transfer processes and designing efficient heat exchange systems."
      },
      {
        "question": "What is free convection?",
        "options": [
          "Convection that is free of charge.",
          "Convection that involves the use of fans.",
          "Convection that occurs without any external influence.",
          "Convection that requires payment."
        ],
        "correctAnswer": "Convection that occurs without any external influence."
      },
      {
        "question": "Why is understanding free and forced convection important?",
        "options": [
          "It's only important for marketing purposes.",
          "It helps in making convection more expensive.",
          "It helps in optimizing heat transfer in different scenarios, considering natural and forced airflow.",
          "It only impacts conduction processes."
        ],
        "correctAnswer": "It helps in optimizing heat transfer in different scenarios, considering natural and forced airflow."
      },
      {
        "question": "What are fins in heat transfer?",
        "options": [
          "Finger-shaped structures used in heat transfer.",
          "Devices used to generate heat.",
          "Extensions on surfaces that increase heat transfer area.",
          "A type of radiation heat transfer."
        ],
        "correctAnswer": "Extensions on surfaces that increase heat transfer area."
      },
      {
        "question": "Why are fins important in heat transfer?",
        "options": [
          "They only increase confusion.",
          "They help in making surfaces smoother.",
          "They have no impact on heat transfer efficiency.",
          "They enhance heat transfer rates and can improve the performance of heat exchangers."
        ],
        "correctAnswer": "They enhance heat transfer rates and can improve the performance of heat exchangers."
      },
      {
        "question": "What are heat exchangers?",
        "options": [
          "Devices that generate heat.",
          "Devices that convert heat into electricity.",
          "Devices that exchange cold air for hot air.",
          "Devices that transfer heat between fluids without mixing them."
        ],
        "correctAnswer": "Devices that transfer heat between fluids without mixing them."
      },
      {
        "question": "Why are heat exchangers important in heat transfer?",
        "options": [
          "They increase confusion.",
          "They only work in theory.",
          "They are not important; heat transfer happens naturally.",
          "They play a crucial role in various industries by efficiently transferring heat between fluids, maintaining temperature control, and conserving energy."
        ],
        "correctAnswer": "They play a crucial role in various industries by efficiently transferring heat between fluids, maintaining temperature control, and conserving energy."
      },
      {
        "question": "What are conventional energy resources?",
        "options": [
          "Energy resources that are rare and difficult to find.",
          "Energy resources that are abundant and widely used.",
          "Energy resources that are not suitable for generating electricity.",
          "Energy resources that only exist in certain regions."
        ],
        "correctAnswer": "Energy resources that are abundant and widely used."
      },
      {
        "question": "Why are conventional energy resources considered important?",
        "options": [
          "They have no impact on the environment.",
          "They are not important; unconventional resources are better.",
          "They are the primary sources of energy for industries and daily life.",
          "They are only important for research purposes."
        ],
        "correctAnswer": "They are the primary sources of energy for industries and daily life."
      },
      {
        "question": "What are the properties of coal, oil, and natural gas?",
        "options": [
          "They are all liquids.",
          "They are all solids.",
          "They are all gases.",
          "They exist in different physical states and have different combustion properties."
        ],
        "correctAnswer": "They exist in different physical states and have different combustion properties."
      },
      {
        "question": "Why is understanding the properties of these resources important?",
        "options": [
          "It's not important; properties have no impact.",
          "It helps in creating artistic designs.",
          "It's only important for cooking.",
          "It's essential for efficient and safe utilization of these resources in energy production."
        ],
        "correctAnswer": "It's essential for efficient and safe utilization of these resources in energy production."
      },
      {
        "question": "What are some examples of non-conventional energy resources?",
        "options": [
          "Coal and oil.",
          "Sunlight, wind, biomass, and small hydro.",
          "Natural gas and nuclear energy.",
          "Only fossil fuels."
        ],
        "correctAnswer": "Sunlight, wind, biomass, and small hydro."
      },
      {
        "question": "Why are non-conventional energy resources gaining importance?",
        "options": [
          "They are not gaining importance.",
          "They are only important for research purposes.",
          "They have no impact on the environment.",
          "They offer sustainable and environmentally friendly alternatives to conventional energy resources."
        ],
        "correctAnswer": "They offer sustainable and environmentally friendly alternatives to conventional energy resources."
      },
      {
        "question": "What is nuclear energy?",
        "options": [
          "Energy derived from solar panels.",
          "Energy generated by burning coal.",
          "Energy obtained from the combustion of biomass.",
          "Energy released from nuclear reactions in atoms."
        ],
        "correctAnswer": "Energy released from nuclear reactions in atoms."
      },
      {
        "question": "Why is nuclear energy a topic of interest?",
        "options": [
          "It's not important; nuclear energy is unsafe.",
          "It's only important for scientific experiments.",
          "It offers a high-energy output with low greenhouse gas emissions, but also poses concerns about safety and waste management.",
          "It's only important for military purposes."
        ],
        "correctAnswer": "It offers a high-energy output with low greenhouse gas emissions, but also poses concerns about safety and waste management."
      },
      {
        "question": "What are fuel cells and hydrogen fuel systems?",
        "options": [
          "Devices that convert water into oil.",
          "Devices that generate wind energy.",
          "Devices that store solar energy.",
          "Devices that produce electricity through chemical reactions, with hydrogen as a primary fuel."
        ],
        "correctAnswer": "Devices that produce electricity through chemical reactions, with hydrogen as a primary fuel."
      },
      {
        "question": "Why are fuel cells and hydrogen fuel systems important?",
        "options": [
          "They increase confusion.",
          "They are not important; traditional energy sources are better.",
          "They have no impact on energy generation.",
          "They offer clean and efficient energy generation, with hydrogen as a versatile and clean fuel."
        ],
        "correctAnswer": "They offer clean and efficient energy generation, with hydrogen as a versatile and clean fuel."
      },
      {
        "question": "What is the combustion process?",
        "options": [
          "A process of turning solids into liquids.",
          "A process of converting energy into matter.",
          "A chemical reaction between fuel and oxygen that releases energy in the form of heat and light.",
          "A process of creating energy from solar panels."
        ],
        "correctAnswer": "A chemical reaction between fuel and oxygen that releases energy in the form of heat and light."
      },
      {
        "question": "Why is understanding the combustion process important?",
        "options": [
          "It increases confusion.",
          "It's only important for cooking.",
          "It helps in creating artistic designs.",
          "It's essential for energy production and understanding its impact on the environment."
        ],
        "correctAnswer": "It's essential for energy production and understanding its impact on the environment."
      },
      {
        "question": "What are the conditions necessary for combustion to occur?",
        "options": [
          "Only oxygen is needed.",
          "Only fuel is needed.",
          "Both fuel and oxygen are needed, along with an ignition source.",
          "Combustion can occur without any specific conditions."
        ],
        "correctAnswer": "Both fuel and oxygen are needed, along with an ignition source."
      },
      {
        "question": "Why are these conditions important to know?",
        "options": [
          "They have no impact on energy generation.",
          "They increase confusion.",
          "They're only relevant for artistic purposes.",
          "They ensure controlled and efficient energy release during combustion processes."
        ],
        "correctAnswer": "They ensure controlled and efficient energy release during combustion processes."
      },
      {
        "question": "What are the phases of combustion?",
        "options": [
          "Solid, liquid, and gas phases.",
          "Initial, middle, and final phases.",
          "Gas, plasma, and liquid phases.",
          "Ignition, flame propagation, and combustion completion phases."
        ],
        "correctAnswer": "Ignition, flame propagation, and combustion completion phases."
      },
      {
        "question": "Why is understanding the phases of combustion important?",
        "options": [
          "It has no impact on energy generation.",
          "It's only important for artistic designs.",
          "It increases confusion.",
          "It helps in predicting and controlling the behavior of combustion processes."
        ],
        "correctAnswer": "It helps in predicting and controlling the behavior of combustion processes."
      },
      {
        "question": "What are methods of controlling fire?",
        "options": [
          "Adding more fuel.",
          "Blowing air onto the fire.",
          "Using water or fire-extinguishing agents.",
          "Increasing the temperature."
        ],
        "correctAnswer": "Using water or fire-extinguishing agents."
      },
      {
        "question": "Why is understanding methods of controlling fire important?",
        "options": [
          "It's only important for camping trips.",
          "It increases confusion.",
          "It has no impact on fire safety.",
          "It's crucial for preventing and mitigating fire-related accidents."
        ],
        "correctAnswer": "It's crucial for preventing and mitigating fire-related accidents."
      },
      {
        "question": "What are the harmful effects of combustion products?",
        "options": [
          "There are no harmful effects.",
          "Combustion products have a pleasant smell.",
          "Combustion products have no impact on health.",
          "Emission of pollutants and gases that can contribute to air pollution and health problems."
        ],
        "correctAnswer": "Emission of pollutants and gases that can contribute to air pollution and health problems."
      },
      {
        "question": "Why is understanding these effects important?",
        "options": [
          "It's not important; combustion is harmless.",
          "It's only important for artistic purposes.",
          "It's only important for large industries.",
          "It's vital for environmental protection and public health."
        ],
        "correctAnswer": "It's vital for environmental protection and public health."
      },
      {
        "question": "What are engine emissions?",
        "options": [
          "Engine sounds.",
          "Particles released from engines.",
          "The colors emitted by engines.",
          "Gases and particulate matter released from engines during combustion."
        ],
        "correctAnswer": "Gases and particulate matter released from engines during combustion."
      },
      {
        "question": "Why are engine emissions a concern?",
        "options": [
          "They have no impact on the environment.",
          "They only affect the appearance of engines.",
          "They are not a concern; engine emissions are harmless.",
          "They can contribute to air pollution, smog formation, and adverse health effects."
        ],
        "correctAnswer": "They can contribute to air pollution, smog formation, and adverse health effects."
      },
      {
        "question": "What is the chemical structure of petroleum?",
        "options": [
          "A single compound structure.",
          "A mixture of organic compounds.",
          "A mixture of inorganic compounds.",
          "A simple elemental structure."
        ],
        "correctAnswer": "A mixture of organic compounds."
      },
      {
        "question": "Why is understanding the chemical structure of petroleum important?",
        "options": [
          "It's not important; petroleum is a simple compound.",
          "It's only important for artistic purposes.",
          "It helps in refining and utilizing petroleum as a fuel source.",
          "It has no impact on engine performance."
        ],
        "correctAnswer": "It helps in refining and utilizing petroleum as a fuel source."
      },
      {
        "question": "What is the rating of engine fuels?",
        "options": [
          "Rating based on their price.",
          "Rating based on their color.",
          "Rating based on their viscosity.",
          "Rating based on their octane or cetane number."
        ],
        "correctAnswer": "Rating based on their octane or cetane number."
      },
      {
        "question": "Why is the rating of engine fuels important?",
        "options": [
          "It has no impact on engine performance.",
          "It's only important for marketing purposes.",
          "It helps in determining the fuel's color.",
          "It indicates the fuel's quality, combustion characteristics, and performance in engines."
        ],
        "correctAnswer": "It indicates the fuel's quality, combustion characteristics, and performance in engines."
      },
      {
        "question": "What is the fuel supply system in engines?",
        "options": [
          "A system that supplies water to engines.",
          "A system that supplies oil to engines.",
          "A system that supplies fuel to engines.",
          "A system that generates electricity for engines."
        ],
        "correctAnswer": "A system that supplies fuel to engines."
      },
      {
        "question": "Why is the fuel supply system important in engines?",
        "options": [
          "Engines can run without fuel.",
          "It's not important; engines can function without fuel.",
          "It only affects engine aesthetics.",
          "It's essential for delivering the right amount of fuel for efficient combustion and engine performance."
        ],
        "correctAnswer": "It's essential for delivering the right amount of fuel for efficient combustion and engine performance."
      },
      {
        "question": "What is the fuel injection system in engines?",
        "options": [
          "A system that injects water into engines.",
          "A system that injects oil into engines.",
          "A system that injects fuel into engines.",
          "A system that generates exhaust gases."
        ],
        "correctAnswer": "A system that injects fuel into engines."
      },
      {
        "question": "Why is the fuel injection system important in engines?",
        "options": [
          "Engines can function without fuel injection.",
          "It's not important; engines can run without fuel injection.",
          "It only affects engine aesthetics.",
          "It plays a crucial role in delivering fuel accurately, controlling combustion, and optimizing engine performance."
        ],
        "correctAnswer": "It plays a crucial role in delivering fuel accurately, controlling combustion, and optimizing engine performance."
      },
      {
        "question": "What is the lubrication system in engines?",
        "options": [
          "A system that supplies fuel to engines.",
          "A system that supplies water to engines.",
          "A system that reduces friction and wear by supplying oil to engine components.",
          "A system that generates electricity for engines."
        ],
        "correctAnswer": "A system that reduces friction and wear by supplying oil to engine components."
      },
      {
        "question": "Why is the lubrication system important in engines?",
        "options": [
          "Engines can run without lubrication.",
          "It's not important; lubrication has no impact.",
          "It only affects engine aesthetics.",
          "It's essential for ensuring smooth operation, reducing wear and tear, and prolonging engine life."
        ],
        "correctAnswer": "It's essential for ensuring smooth operation, reducing wear and tear, and prolonging engine life."
      },
      {
        "question": "What is the grading of lubrications?",
        "options": [
          "A grading based on color.",
          "A grading based on smell.",
          "A grading based on density.",
          "A grading based on viscosity."
        ],
        "correctAnswer": "A grading based on viscosity."
      },
      {
        "question": "Why is the grading of lubrications important?",
        "options": [
          "It's only important for artistic purposes.",
          "It has no impact on engine performance.",
          "It helps in determining the lubricant's taste.",
          "It indicates the lubricant's ability to provide proper lubrication under different operating conditions."
        ],
        "correctAnswer": "It indicates the lubricant's ability to provide proper lubrication under different operating conditions."
      },
      {
        "question": "What is specific fuel consumption?",
        "options": [
          "The consumption of fuel with specific additives.",
          "The amount of fuel consumed by engines per unit of power produced.",
          "The amount of fuel consumed only during idling.",
          "The consumption of fuel during startup."
        ],
        "correctAnswer": "The amount of fuel consumed by engines per unit of power produced."
      },
      {
        "question": "Why is specific fuel consumption important in engines?",
        "options": [
          "It has no impact on engine efficiency.",
          "It only affects engine aesthetics.",
          "It's not important; engines will consume fuel regardless.",
          "It's a key parameter for evaluating engine efficiency, performance, and overall fuel economy."
        ],
        "correctAnswer": "It's a key parameter for evaluating engine efficiency, performance, and overall fuel economy."
      },
      {
        "question": "What are conversion, air pollution, water pollution, noise pollution, and solid waste?",
        "options": [
          "Types of energy resources.",
          "Terms related to climate change.",
          "Environmental impacts of engines.",
          "Types of lubricants."
        ],
        "correctAnswer": "Environmental impacts of engines."
      },
      {
        "question": "Why are understanding these impacts important?",
        "options": [
          "They only affect the appearance of engines.",
          "They have no impact on engine performance.",
          "It's not important; engines will always cause pollution.",
          "They are crucial for assessing and mitigating the environmental consequences of engine operation."
        ],
        "correctAnswer": "They are crucial for assessing and mitigating the environmental consequences of engine operation."
      },
      {
        "question": "What is air quality, pollution dispersion, global issues, and national issues?",
        "options": [
          "Engine maintenance terms.",
          "Technical jargon with no real-world impact.",
          "Concepts related to sustainable development.",
          "Aspects related to the quality of air, dispersion of pollutants, global environmental concerns, and local environmental challenges."
        ],
        "correctAnswer": "Aspects related to the quality of air, dispersion of pollutants, global environmental concerns, and local environmental challenges."
      },
      {
        "question": "Why are understanding these concepts important?",
        "options": [
          "They only affect researchers.",
          "They have no impact on real-world problems.",
          "It's not important; environmental issues are beyond our control.",
          "They are vital for addressing and managing air pollution and its consequences on a local and global scale."
        ],
        "correctAnswer": "They are vital for addressing and managing air pollution and its consequences on a local and global scale."
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
const quizData = [
    {
        "question": "What is the importance of transformers in electrical systems?",
        "options": [
          "Transformers convert mechanical energy into electrical energy.",
          "Transformers provide electrical energy to mechanical systems.",
          "Transformers allow for efficient transmission and distribution of electrical energy.",
          "Transformers generate renewable energy from solar panels."
        ],
        "correctAnswer": "Transformers allow for efficient transmission and distribution of electrical energy."
      },
      {
        "question": "Which of the following is an application of transformers?",
        "options": [
          "Cooking food in a microwave oven.",
          "Generating nuclear energy.",
          "Lighting candles.",
          "Stepping up or stepping down voltage in power distribution."
        ],
        "correctAnswer": "Stepping up or stepping down voltage in power distribution."
      },
      {
        "question": "What are the main types of transformers based on their construction?",
        "options": [
          "Mechanical transformers and electrical transformers.",
          "Single-phase transformers and three-phase transformers.",
          "Core transformers and shell transformers.",
          "Step-up transformers and step-down transformers."
        ],
        "correctAnswer": "Core transformers and shell transformers."
      },
      {
        "question": "What is the purpose of a single-phase transformer?",
        "options": [
          "To convert mechanical energy into electrical energy.",
          "To provide backup power during outages.",
          "To step up or step down voltage in single-phase systems.",
          "To regulate electrical current in power plants."
        ],
        "correctAnswer": "To step up or step down voltage in single-phase systems."
      },
      {
        "question": "What does the EMF equation of a transformer describe?",
        "options": [
          "The magnetic field strength of the transformer.",
          "The electric field strength of the transformer.",
          "The relationship between voltage and current in the primary and secondary coils.",
          "The efficiency of the transformer."
        ],
        "correctAnswer": "The relationship between voltage and current in the primary and secondary coils."
      },
      {
        "question": "What does the vector diagram of a transformer represent?",
        "options": [
          "The mechanical motion of the transformer's parts.",
          "The phase relationship between the primary and secondary currents.",
          "The direction of electrical current in the transformer.",
          "The color codes of the transformer's coils."
        ],
        "correctAnswer": "The phase relationship between the primary and secondary currents."
      },
      {
        "question": "What are the no-load characteristics of a transformer?",
        "options": [
          "Characteristics when the transformer is operating at full load.",
          "Characteristics when the transformer is disconnected from the power source.",
          "Characteristics when the transformer is short-circuited.",
          "Characteristics when the transformer is operating without any load on the secondary side."
        ],
        "correctAnswer": "Characteristics when the transformer is operating without any load on the secondary side."
      },
      {
        "question": "What is voltage regulation in a transformer?",
        "options": [
          "The process of adjusting the primary voltage to achieve a desired output voltage.",
          "The process of keeping the transformer's voltage constant.",
          "The change in secondary voltage when the load changes from no-load to full load.",
          "The process of converting voltage to current in the transformer."
        ],
        "correctAnswer": "The change in secondary voltage when the load changes from no-load to full load."
      },
      {
        "question": "What are the losses and efficiency in a transformer?",
        "options": [
          "The losses of mechanical energy due to friction.",
          "The losses of electrical energy due to high voltage.",
          "The losses of electrical energy due to resistance and magnetic effects.",
          "The losses of thermal energy due to radiation."
        ],
        "correctAnswer": "The losses of electrical energy due to resistance and magnetic effects."
      },
      {
        "question": "What is the equivalent circuit of a transformer used for?",
        "options": [
          "To simulate the mechanical behavior of the transformer.",
          "To test the insulation of the transformer's coils.",
          "To measure the magnetic field strength of the transformer.",
          "To analyze the electrical behavior of the transformer under different conditions."
        ],
        "correctAnswer": "To analyze the electrical behavior of the transformer under different conditions."
      },
      {
        "question": "What are the main types of connections in three-phase transformers?",
        "options": [
          "Delta and Star connections.",
          "Positive and negative connections.",
          "Primary and secondary connections.",
          "Step-up and step-down connections."
        ],
        "correctAnswer": "Delta and Star connections."
      },
      {
        "question": "What is the purpose of a pulse transformer?",
        "options": [
          "To generate high-frequency pulses of electrical energy.",
          "To regulate the voltage in power distribution systems.",
          "To measure the temperature of electrical components.",
          "To convert electrical energy to mechanical energy."
        ],
        "correctAnswer": "To generate high-frequency pulses of electrical energy."
      },
      {
        "question": "What is an autotransformer?",
        "options": [
          "A transformer used in automobiles to charge batteries.",
          "A transformer that automatically adjusts its voltage based on load conditions.",
          "A transformer with only one winding that serves as both primary and secondary.",
          "A transformer used in aerospace applications."
        ],
        "correctAnswer": "A transformer with only one winding that serves as both primary and secondary."
      },
      {
        "question": "What are the fundamental principles of a DC generator?",
        "options": [
          "Mechanical rotation creates magnetic fields.",
          "Magnetic fields induce electrical current.",
          "Electrical current generates mechanical rotation.",
          "Pressure difference generates electrical energy."
        ],
        "correctAnswer": "Magnetic fields induce electrical current."
      },
      {
        "question": "What is the main purpose of a DC generator?",
        "options": [
          "To convert mechanical energy into electrical energy.",
          "To convert electrical energy into mechanical energy.",
          "To generate nuclear energy.",
          "To regulate electrical voltage in power distribution."
        ],
        "correctAnswer": "To convert mechanical energy into electrical energy."
      },
      {
        "question": "What is the construction of a DC generator?",
        "options": [
          "A device with two rotating magnets.",
          "A device with rotating coils and stationary magnets.",
          "A device with stationary coils and rotating magnets.",
          "A device with rotating coils and rotating magnets."
        ],
        "correctAnswer": "A device with rotating coils and stationary magnets."
      },
      {
        "question": "What is the winding in a DC generator?",
        "options": [
          "The process of rotating the magnets.",
          "The process of winding copper wire around the coils.",
          "The process of connecting multiple generators in parallel.",
          "The process of generating electrical voltage."
        ],
        "correctAnswer": "The process of winding copper wire around the coils."
      },
      {
        "question": "What are the main types of DC generators?",
        "options": [
          "High-voltage generators and low-voltage generators.",
          "Single-phase generators and three-phase generators.",
          "Series-wound generators and shunt-wound generators.",
          "AC generators and DC generators."
        ],
        "correctAnswer": "Series-wound generators and shunt-wound generators."
      },
      {
        "question": "What are losses and efficiency in a DC generator?",
        "options": [
          "The loss of mechanical energy due to friction.",
          "The loss of electrical energy due to voltage fluctuations.",
          "The loss of electrical energy due to resistance and magnetic effects.",
          "The loss of thermal energy due to radiation."
        ],
        "correctAnswer": "The loss of electrical energy due to resistance and magnetic effects."
      },
      {
        "question": "What are no-load characteristics of a DC generator?",
        "options": [
          "Characteristics when the generator is operating at full load.",
          "Characteristics when the generator is disconnected from the power source.",
          "Characteristics when the generator is short-circuited.",
          "Characteristics when the generator is operating without any load."
        ],
        "correctAnswer": "Characteristics when the generator is operating without any load."
      },
      {
        "question": "What is armature reaction in a DC generator?",
        "options": [
          "The mechanical rotation of the generator's parts.",
          "The interaction between the armature and the field winding.",
          "The loss of energy due to armature friction.",
          "The loss of energy due to armature resistance."
        ],
        "correctAnswer": "The interaction between the armature and the field winding."
      },
      {
        "question": "What is commutation in a DC generator?",
        "options": [
          "The process of rotating the magnets.",
          "The process of converting mechanical energy to electrical energy.",
          "The process of switching the direction of electrical current in the armature coils.",
          "The process of regulating voltage in the generator."
        ],
        "correctAnswer": "The process of switching the direction of electrical current in the armature coils."
      },
      {
        "question": "What is the purpose of parallel operation of generators?",
        "options": [
          "To increase the voltage of a single generator.",
          "To reduce the voltage of a single generator.",
          "To generate AC power instead of DC power.",
          "To increase the overall power output and reliability of the system."
        ],
        "correctAnswer": "To increase the overall power output and reliability of the system."
      },
      {
        "question": "What are the induced voltage and torque equations of a DC generator?",
        "options": [
          "E = IR and T = Fd.",
          "E = BLv and T = Fd.",
          "E = NΦv and T = Fd.",
          "E = V/R and T = Fd."
        ],
        "correctAnswer": "E = NΦv and T = Fd."
      },
      {
        "question": "What is the equivalent circuit of a DC generator used for?",
        "options": [
          "To simulate the mechanical behavior of the generator.",
          "To test the insulation of the generator's coils.",
          "To measure the magnetic field strength of the generator.",
          "To analyze the electrical behavior of the generator under different conditions."
        ],
        "correctAnswer": "To analyze the electrical behavior of the generator under different conditions."
      },
      {
        "question": "What is the magnetization curve of a DC generator?",
        "options": [
          "A curve showing the relationship between voltage and current in the generator.",
          "A curve showing the relationship between magnetic field strength and voltage in the generator.",
          "A curve showing the mechanical rotation speed of the generator.",
          "A curve showing the efficiency of the generator."
        ],
        "correctAnswer": "A curve showing the relationship between magnetic field strength and voltage in the generator."
      },
      {
        "question": "What are the fundamental principles of a DC motor?",
        "options": [
          "Magnetic fields induce electrical current.",
          "Mechanical rotation generates electrical energy.",
          "Electrical current generates mechanical rotation.",
          "Pressure difference generates mechanical motion."
        ],
        "correctAnswer": "Electrical current generates mechanical rotation."
      },
      {
        "question": "What is the main purpose of a DC motor?",
        "options": [
          "To convert mechanical energy into electrical energy.",
          "To convert electrical energy into mechanical energy.",
          "To generate nuclear energy.",
          "To regulate electrical voltage in power distribution."
        ],
        "correctAnswer": "To convert electrical energy into mechanical energy."
      },
      {
        "question": "What are the main types of DC motors?",
        "options": [
          "High-speed motors and low-speed motors.",
          "Single-phase motors and three-phase motors.",
          "Series-wound motors and shunt-wound motors.",
          "AC motors and DC motors."
        ],
        "correctAnswer": "Series-wound motors and shunt-wound motors."
      },
      {
        "question": "What is the construction of a DC motor?",
        "options": [
          "A device with two rotating magnets.",
          "A device with rotating coils and stationary magnets.",
          "A device with stationary coils and rotating magnets.",
          "A device with rotating coils and rotating magnets."
        ],
        "correctAnswer": "A device with stationary coils and rotating magnets."
      },
      {
        "question": "What are the output characteristics of a DC motor?",
        "options": [
          "The characteristics when the motor is disconnected from the power source.",
          "The characteristics when the motor is operating at full load.",
          "The characteristics when the motor is operating without any load.",
          "The characteristics when the motor is short-circuited."
        ],
        "correctAnswer": "The characteristics when the motor is operating without any load."
      },
      {
        "question": "How is the speed of a DC motor controlled?",
        "options": [
          "By adjusting the magnetic field strength.",
          "By changing the voltage across the armature.",
          "By changing the number of windings in the motor.",
          "By changing the rotational direction of the motor."
        ],
        "correctAnswer": "By changing the voltage across the armature."
      },
      {
        "question": "What is the process of starting a DC motor called?",
        "options": [
          "Acceleration.",
          "Deceleration.",
          "Regeneration.",
          "Motor Starting."
        ],
        "correctAnswer": "Motor Starting."
      },
      {
        "question": "What are the losses and efficiency in a DC motor?",
        "options": [
          "The loss of mechanical energy due to friction.",
          "The loss of electrical energy due to voltage fluctuations.",
          "The loss of electrical energy due to resistance and magnetic effects.",
          "The loss of thermal energy due to radiation."
        ],
        "correctAnswer": "The loss of electrical energy due to resistance and magnetic effects."
      },
      {
        "question": "What is the purpose of reversing a DC motor?",
        "options": [
          "To increase the speed of the motor.",
          "To decrease the speed of the motor.",
          "To change the rotational direction of the motor.",
          "To increase the voltage of the motor."
        ],
        "correctAnswer": "To change the rotational direction of the motor."
      },
      {
        "question": "What is the purpose of braking a DC motor?",
        "options": [
          "To accelerate the motor.",
          "To reduce the speed of the motor.",
          "To increase the voltage of the motor.",
          "To change the rotational direction of the motor."
        ],
        "correctAnswer": "To reduce the speed of the motor."
      },
      {
        "question": "What is the concept of brushless DC motors?",
        "options": [
          "DC motors without brushes.",
          "DC motors without armature windings.",
          "DC motors with reversible rotation.",
          "DC motors with higher efficiency."
        ],
        "correctAnswer": "DC motors without brushes."
      },
      {
        "question": "What is the purpose of testing DC machines?",
        "options": [
          "To measure the resistance of the armature.",
          "To test the insulation of the coils.",
          "To calculate the efficiency of the motor.",
          "To determine the type of winding used."
        ],
        "correctAnswer": "To test the insulation of the coils."
      },
      {
        "question": "What is the significance of losses and efficiency in a DC motor?",
        "options": [
          "Losses indicate the efficiency of the motor.",
          "Losses increase the output power of the motor.",
          "Efficiency measures the losses in the motor.",
          "Efficiency indicates the mechanical power of the motor."
        ],
        "correctAnswer": "Efficiency indicates the mechanical power of the motor."
      },
      {
        "question": "What is the principle of operation of an induction motor?",
        "options": [
          "Mechanical rotation generates electrical energy.",
          "Electrical current generates mechanical rotation.",
          "Magnetic fields induce electrical current.",
          "Pressure difference generates mechanical motion."
        ],
        "correctAnswer": "Magnetic fields induce electrical current."
      },
      {
        "question": "What are the two main types of construction for induction motor rotors?",
        "options": [
          "High-speed rotor and low-speed rotor.",
          "Squirrel cage rotor and wound rotor.",
          "Single-phase rotor and three-phase rotor.",
          "AC rotor and DC rotor."
        ],
        "correctAnswer": "Squirrel cage rotor and wound rotor."
      },
      {
        "question": "What is the equivalent circuit used for in induction motors?",
        "options": [
          "To measure the resistance of the rotor.",
          "To calculate the efficiency of the motor.",
          "To simulate the mechanical behavior of the motor.",
          "To analyze the electrical behavior of the motor under different conditions."
        ],
        "correctAnswer": "To analyze the electrical behavior of the motor under different conditions."
      },
      {
        "question": "What is the synchronous speed of an induction motor?",
        "options": [
          "The actual speed of the motor under load.",
          "The speed at which the rotor is stationary.",
          "The speed at which the rotor is rotating backwards.",
          "The speed of the rotating magnetic field."
        ],
        "correctAnswer": "The speed of the rotating magnetic field."
      },
      {
        "question": "What is slip in an induction motor?",
        "options": [
          "The difference between synchronous speed and actual speed.",
          "The speed at which the rotor is stationary.",
          "The speed at which the rotor is rotating backwards.",
          "The speed of the rotating magnetic field."
        ],
        "correctAnswer": "The difference between synchronous speed and actual speed."
      },
      {
        "question": "How does slip affect rotor frequency and voltage in an induction motor?",
        "options": [
          "Slip increases rotor frequency and voltage.",
          "Slip decreases rotor frequency and voltage.",
          "Slip has no effect on rotor frequency and voltage.",
          "Slip reverses the direction of rotor rotation."
        ],
        "correctAnswer": "Slip increases rotor frequency and voltage."
      },
      {
        "question": "What is the purpose of losses and efficiency in an induction motor?",
        "options": [
          "Losses indicate the efficiency of the motor.",
          "Losses increase the output power of the motor.",
          "Efficiency measures the losses in the motor.",
          "Efficiency indicates the mechanical power of the motor."
        ],
        "correctAnswer": "Efficiency indicates the mechanical power of the motor."
      },
      {
        "question": "What are the torque-speed characteristics of an induction motor?",
        "options": [
          "The characteristics when the motor is disconnected from the power source.",
          "The characteristics when the motor is operating at full load.",
          "The characteristics when the motor is operating without any load.",
          "The relationship between torque and speed at different operating points."
        ],
        "correctAnswer": "The relationship between torque and speed at different operating points."
      },
      {
        "question": "What are the methods of starting and speed control in induction motors?",
        "options": [
          "Loss of power and efficiency control.",
          "Speed and torque control.",
          "Stator winding control and rotor control.",
          "Direct-on-line starting and variable frequency drive control."
        ],
        "correctAnswer": "Direct-on-line starting and variable frequency drive control."
      },
      {
        "question": "What is an induction generator used for?",
        "options": [
          "To convert mechanical energy into electrical energy.",
          "To convert electrical energy into mechanical energy.",
          "To generate nuclear energy.",
          "To regulate electrical voltage in power distribution."
        ],
        "correctAnswer": "To convert mechanical energy into electrical energy."
      },
      {
        "question": "What are the torque-speed characteristics of single-phase induction motors?",
        "options": [
          "The characteristics when the motor is disconnected from the power source.",
          "The characteristics when the motor is operating at full load.",
          "The characteristics when the motor is operating without any load.",
          "The relationship between torque and speed at different operating points."
        ],
        "correctAnswer": "The relationship between torque and speed at different operating points."
      },
      {
        "question": "What is the application of a split-phase induction motor?",
        "options": [
          "High-speed industrial applications.",
          "High-power generator applications.",
          "Refrigeration and air conditioning systems.",
          "Automotive applications."
        ],
        "correctAnswer": "Refrigeration and air conditioning systems."
      },
      {
        "question": "What is the purpose of a capacitor start in a single-phase induction motor?",
        "options": [
          "To increase the speed of the motor.",
          "To reduce the voltage of the motor.",
          "To improve the efficiency of the motor.",
          "To provide extra starting torque."
        ],
        "correctAnswer": "To provide extra starting torque."
      },
      {
        "question": "What is a synchronous generator?",
        "options": [
          "A generator that produces DC power.",
          "A generator that produces AC power with a constant frequency.",
          "A generator that operates without any winding.",
          "A generator that generates electricity using sunlight."
        ],
        "correctAnswer": "A generator that produces AC power with a constant frequency."
      },
      {
        "question": "What is the construction of a synchronous generator?",
        "options": [
          "A device with two rotating magnets.",
          "A device with rotating coils and stationary magnets.",
          "A device with stationary coils and rotating magnets.",
          "A device with rotating coils and rotating magnets."
        ],
        "correctAnswer": "A device with rotating coils and rotating magnets."
      },
      {
        "question": "What does the winding diagram of a synchronous generator depict?",
        "options": [
          "The arrangement of the stator coils.",
          "The arrangement of the rotor coils.",
          "The arrangement of the stationary magnets.",
          "The arrangement of the cooling fans."
        ],
        "correctAnswer": "The arrangement of the stator coils."
      },
      {
        "question": "What are the power and torque characteristics of a synchronous generator?",
        "options": [
          "The characteristics when the generator is disconnected from the power source.",
          "The characteristics when the generator is operating at full load.",
          "The characteristics when the generator is operating without any load.",
          "The relationship between power and torque at different operating points."
        ],
        "correctAnswer": "The relationship between power and torque at different operating points."
      },
      {
        "question": "How is the speed and frequency of a synchronous generator related?",
        "options": [
          "Speed and frequency are inversely proportional.",
          "Speed and frequency are directly proportional.",
          "Speed affects frequency, but frequency doesn't affect speed.",
          "Speed and frequency are unrelated."
        ],
        "correctAnswer": "Speed and frequency are directly proportional."
      },
      {
        "question": "What is the EMF equation of a synchronous generator?",
        "options": [
          "E = IR.",
          "E = BLv.",
          "E = NΦv.",
          "E = V/R."
        ],
        "correctAnswer": "E = NΦv."
      },
      {
        "question": "What is voltage regulation in a synchronous generator?",
        "options": [
          "The process of adjusting the speed of the generator.",
          "The process of adjusting the frequency of the generator.",
          "The process of controlling the voltage output of the generator.",
          "The process of reducing the losses in the generator."
        ],
        "correctAnswer": "The process of controlling the voltage output of the generator."
      },
      {
        "question": "What is the equivalent circuit of a synchronous generator used for?",
        "options": [
          "To simulate the mechanical behavior of the generator.",
          "To test the insulation of the generator's coils.",
          "To measure the magnetic field strength of the generator.",
          "To analyze the electrical behavior of the generator under different conditions."
        ],
        "correctAnswer": "To analyze the electrical behavior of the generator under different conditions."
      },
      {
        "question": "What is generator synchronization?",
        "options": [
          "The process of matching the generator's frequency and voltage to the grid.",
          "The process of reducing the generator's speed.",
          "The process of disconnecting the generator from the grid.",
          "The process of regulating the generator's torque."
        ],
        "correctAnswer": "The process of matching the generator's frequency and voltage to the grid."
      },
      {
        "question": "What is a permanent magnet synchronous generator (PMSG)?",
        "options": [
          "A generator that uses permanent magnets as the rotor.",
          "A generator that generates AC power with varying frequency.",
          "A generator that generates DC power.",
          "A generator that operates without a winding."
        ],
        "correctAnswer": "A generator that uses permanent magnets as the rotor."
      },
      {
        "question": "What is the application of a permanent magnet synchronous generator?",
        "options": [
          "Industrial automation.",
          "Household lighting.",
          "Electric vehicles.",
          "Space exploration."
        ],
        "correctAnswer": "Electric vehicles."
      },
      {
        "question": "What is the principle of operation of a synchronous motor?",
        "options": [
          "Mechanical rotation generates electrical energy.",
          "Electrical current generates mechanical rotation.",
          "Magnetic fields induce electrical current.",
          "Pressure difference generates mechanical motion."
        ],
        "correctAnswer": "Magnetic fields induce electrical current."
      },
      {
        "question": "What are the torque-angle characteristics of a synchronous motor?",
        "options": [
          "The characteristics when the motor is disconnected from the power source.",
          "The characteristics when the motor is operating at full load.",
          "The characteristics when the motor is operating without any load.",
          "The relationship between torque and rotor angle at different operating points."
        ],
        "correctAnswer": "The relationship between torque and rotor angle at different operating points."
      },
      {
        "question": "What is the method of starting a synchronous motor?",
        "options": [
          "Direct-on-line starting.",
          "Variable frequency drive starting.",
          "Rotor resistance starting.",
          "Synchronous motors cannot be started."
        ],
        "correctAnswer": "Rotor resistance starting."
      },
      {
        "question": "What is counter voltage (CEMF) in a synchronous motor?",
        "options": [
          "The voltage across the stator winding.",
          "The voltage across the rotor winding.",
          "The voltage induced in the armature winding.",
          "The voltage that opposes the applied voltage."
        ],
        "correctAnswer": "The voltage that opposes the applied voltage."
      },
      {
        "question": "What is armature reaction voltage in a synchronous motor?",
        "options": [
          "The voltage across the stator winding.",
          "The voltage across the rotor winding.",
          "The voltage induced in the armature winding.",
          "The voltage that opposes the applied voltage."
        ],
        "correctAnswer": "The voltage induced in the armature winding."
      },
      {
        "question": "What is the excitation method used in synchronous motors?",
        "options": [
          "Mechanical excitation.",
          "Thermal excitation.",
          "Electromagnetic excitation.",
          "Piezoelectric excitation."
        ],
        "correctAnswer": "Electromagnetic excitation."
      },
      {
        "question": "What is the purpose of power factor improvement in synchronous motors?",
        "options": [
          "To increase the mechanical power output.",
          "To reduce the mechanical losses.",
          "To improve the efficiency of the motor.",
          "To improve the overall power factor of the system."
        ],
        "correctAnswer": "To improve the overall power factor of the system."
      },
      {
        "question": "What are the methods of speed control in synchronous motors?",
        "options": [
          "Changing the number of stator windings.",
          "Changing the frequency of the power supply.",
          "Changing the rotor resistance.",
          "Speed control is not possible in synchronous motors."
        ],
        "correctAnswer": "Changing the frequency of the power supply."
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
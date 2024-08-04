const quizData = [
    {
        "question": "What is an electronic device?",
        "options": [
          "A device that uses mechanical principles for operation.",
          "A device that converts electrical energy into mechanical energy.",
          "A device that controls the flow of electric current for various applications.",
          "A device that generates light."
        ],
        "correctAnswer": "A device that controls the flow of electric current for various applications."
      },
      {
        "question": "What is a semiconductor diode?",
        "options": [
          "A diode made of metal.",
          "A diode made of insulating material.",
          "A diode made of semiconductor material.",
          "A diode made of magnetic material."
        ],
        "correctAnswer": "A diode made of semiconductor material."
      },
      {
        "question": "What is a PN junction?",
        "options": [
          "A junction between two insulating materials.",
          "A junction between two conducting materials.",
          "A junction between a P-type and N-type semiconductor material.",
          "A junction between two magnetic materials."
        ],
        "correctAnswer": "A junction between a P-type and N-type semiconductor material."
      },
      {
        "question": "What are the characteristics of a PN junction?",
        "options": [
          "It only allows current flow in one direction.",
          "It has a linear voltage-current relationship.",
          "It only works in high-frequency circuits.",
          "It generates magnetic fields."
        ],
        "correctAnswer": "It only allows current flow in one direction."
      },
      {
        "question": "What is an ideal diode?",
        "options": [
          "A diode with perfect conductivity.",
          "A diode with no voltage drop.",
          "A diode with no current flow.",
          "A diode with no temperature dependency."
        ],
        "correctAnswer": "A diode with no voltage drop."
      },
      {
        "question": "What is a practical diode?",
        "options": [
          "A diode with perfect conductivity.",
          "A diode with no voltage drop.",
          "A diode with voltage drop and other non-ideal characteristics.",
          "A diode with no temperature dependency."
        ],
        "correctAnswer": "A diode with voltage drop and other non-ideal characteristics."
      },
      {
        "question": "What are I-V characteristics of a diode?",
        "options": [
          "Voltage-current characteristics.",
          "Temperature-current characteristics.",
          "Inductance-voltage characteristics.",
          "Magnetic field-current characteristics."
        ],
        "correctAnswer": "Voltage-current characteristics."
      },
      {
        "question": "How do the I-V characteristics of a diode differ in forward and reverse bias?",
        "options": [
          "They are the same in both directions.",
          "They are linear in both directions.",
          "They are exponential in forward bias and almost constant in reverse bias.",
          "They are exponential in both directions."
        ],
        "correctAnswer": "They are exponential in forward bias and almost constant in reverse bias."
      },
      {
        "question": "What are diode configurations?",
        "options": [
          "Different ways of connecting diodes in circuits.",
          "Different ways of controlling diode voltage.",
          "Different ways of cooling diodes.",
          "Different ways of packaging diodes."
        ],
        "correctAnswer": "Different ways of connecting diodes in circuits."
      },
      {
        "question": "What is a hybrid diode configuration?",
        "options": [
          "A configuration that combines different diode types.",
          "A configuration that combines series and parallel diodes.",
          "A configuration that combines diodes and resistors.",
          "A configuration that combines diodes and capacitors."
        ],
        "correctAnswer": "A configuration that combines series and parallel diodes."
      },
      {
        "question": "What is the large signal model of a diode?",
        "options": [
          "A model that describes diode behavior under large currents.",
          "A model that describes diode behavior under large voltages.",
          "A simplified model that neglects small variations in diode characteristics.",
          "A model that considers diode behavior in both large and small circuits."
        ],
        "correctAnswer": "A simplified model that neglects small variations in diode characteristics."
      },
      {
        "question": "What is the small signal model of a diode?",
        "options": [
          "A model that describes diode behavior under large currents.",
          "A model that describes diode behavior under large voltages.",
          "A simplified model that considers small variations in diode characteristics around a bias point.",
          "A model that considers diode behavior in both large and small circuits."
        ],
        "correctAnswer": "A simplified model that considers small variations in diode characteristics around a bias point."
      },
      {
        "question": "What is a Field Effect Transistor (FET)?",
        "options": [
          "A transistor used in audio amplification.",
          "A transistor that relies on the movement of electric charges.",
          "A transistor with a gate terminal.",
          "A transistor that only works with digital signals."
        ],
        "correctAnswer": "A transistor that relies on the movement of electric charges."
      },
      {
        "question": "What is the gate terminal in a FET?",
        "options": [
          "The terminal for providing power.",
          "The terminal for controlling the flow of current.",
          "The terminal for grounding the transistor.",
          "The terminal for temperature control."
        ],
        "correctAnswer": "The terminal for controlling the flow of current."
      },
      {
        "question": "What is a Junction Field Effect Transistor (JFET)?",
        "options": [
          "A FET with a P-N junction.",
          "A FET with a resistor.",
          "A FET with a capacitor.",
          "A FET with a coil."
        ],
        "correctAnswer": "A FET with a P-N junction."
      },
      {
        "question": "How does a JFET work?",
        "options": [
          "By controlling the flow of current with a gate terminal.",
          "By amplifying audio signals.",
          "By converting electrical energy into mechanical energy.",
          "By emitting light."
        ],
        "correctAnswer": "By controlling the flow of current with a gate terminal."
      },
      {
        "question": "What is a Metal Oxide Semiconductor Field Effect Transistor (MOSFET)?",
        "options": [
          "A FET with metal oxide coating.",
          "A FET with a silicon layer.",
          "A FET with enhanced power capabilities.",
          "A FET with a gate insulated by oxide layer."
        ],
        "correctAnswer": "A FET with a gate insulated by oxide layer."
      },
      {
        "question": "What are the types of MOSFET?",
        "options": [
          "Only N-type MOSFET.",
          "Only P-type MOSFET.",
          "N-type and P-type MOSFET.",
          "Only hybrid MOSFET."
        ],
        "correctAnswer": "N-type and P-type MOSFET."
      },
      {
        "question": "What is the current-voltage characteristic of a MOSFET?",
        "options": [
          "A linear relationship between current and voltage.",
          "An exponential relationship between current and voltage.",
          "A direct relationship between power and voltage.",
          "A linear relationship between power and current."
        ],
        "correctAnswer": "An exponential relationship between current and voltage."
      },
      {
        "question": "How does a MOSFET act as an amplifier?",
        "options": [
          "By switching between on and off states.",
          "By using external amplification circuits.",
          "By modulating the gate voltage to control the drain current.",
          "By using magnetic fields."
        ],
        "correctAnswer": "By modulating the gate voltage to control the drain current."
      },
      {
        "question": "What is biasing in a MOSFET amplifier?",
        "options": [
          "Controlling the temperature of the amplifier.",
          "Controlling the input voltage.",
          "Applying a DC voltage to set the operating point of the transistor.",
          "Switching between different amplification modes."
        ],
        "correctAnswer": "Applying a DC voltage to set the operating point of the transistor."
      },
      {
        "question": "Why is biasing important in MOSFET amplifiers?",
        "options": [
          "It ensures the amplifier works only with digital signals.",
          "It prevents power losses in the amplifier.",
          "It stabilizes the operating point of the transistor for proper amplification.",
          "It increases the gain of the amplifier."
        ],
        "correctAnswer": "It stabilizes the operating point of the transistor for proper amplification."
      },
      {
        "question": "What is CMOS?",
        "options": [
          "A type of digital clock.",
          "A type of transistor.",
          "A type of voltage source.",
          "Complementary Metal Oxide Semiconductor technology."
        ],
        "correctAnswer": "Complementary Metal Oxide Semiconductor technology."
      },
      {
        "question": "How does CMOS work?",
        "options": [
          "By using only N-type transistors.",
          "By using only P-type transistors.",
          "By using a combination of N-type and P-type transistors to reduce power consumption.",
          "By using electromagnetic fields."
        ],
        "correctAnswer": "By using a combination of N-type and P-type transistors to reduce power consumption."
      },
      {
        "question": "What are applications of MOSFET?",
        "options": [
          "Only audio amplification.",
          "Only power generation.",
          "Switching, amplification, and signal processing.",
          "Only digital clock generation."
        ],
        "correctAnswer": "Switching, amplification, and signal processing."
      },
      {
        "question": "How are MOSFET and CMOS used in digital circuits?",
        "options": [
          "As decorative elements.",
          "To generate heat.",
          "To reduce power consumption and enable complex digital systems.",
          "To generate electromagnetic waves."
        ],
        "correctAnswer": "To reduce power consumption and enable complex digital systems."
      },
      {
        "question": "What is amplification?",
        "options": [
          "The process of converting digital signals to analog signals.",
          "The process of increasing the amplitude of a signal.",
          "The process of reducing the frequency of a signal.",
          "The process of generating new signals."
        ],
        "correctAnswer": "The process of increasing the amplitude of a signal."
      },
      {
        "question": "What is gain in an amplifier?",
        "options": [
          "The reduction in signal amplitude.",
          "The increase in signal frequency.",
          "The process of reducing distortion in signals.",
          "The ratio of output signal amplitude to input signal amplitude."
        ],
        "correctAnswer": "The ratio of output signal amplitude to input signal amplitude."
      },
      {
        "question": "What is an amplifier?",
        "options": [
          "A device that generates electromagnetic waves.",
          "A device that converts mechanical energy into electrical energy.",
          "A device that increases the amplitude of an input signal.",
          "A device that reduces the amplitude of an input signal."
        ],
        "correctAnswer": "A device that increases the amplitude of an input signal."
      },
      {
        "question": "What are the different types of amplifiers?",
        "options": [
          "Voltage amplifiers only.",
          "Current amplifiers only.",
          "Voltage amplifiers and current amplifiers.",
          "Frequency amplifiers only."
        ],
        "correctAnswer": "Voltage amplifiers and current amplifiers."
      },
      {
        "question": "What is the design procedure of a low-frequency amplifier?",
        "options": [
          "Only calculating gain.",
          "Only selecting components.",
          "Calculating gain, selecting components, and ensuring biasing.",
          "Selecting components and ensuring high-frequency operation."
        ],
        "correctAnswer": "Calculating gain, selecting components, and ensuring biasing."
      },
      {
        "question": "What is biasing in amplifier design?",
        "options": [
          "Controlling the gain of the amplifier.",
          "Setting the operating point of the transistor.",
          "Controlling the frequency of the amplifier.",
          "Reducing distortion in the amplifier."
        ],
        "correctAnswer": "Setting the operating point of the transistor."
      },
      {
        "question": "What is negative feedback in amplifiers?",
        "options": [
          "A process that amplifies the output signal.",
          "A process that reduces the output signal.",
          "A process that increases distortion in the output signal.",
          "A process that stabilizes and improves the characteristics of the amplifier."
        ],
        "correctAnswer": "A process that stabilizes and improves the characteristics of the amplifier."
      },
      {
        "question": "How does negative feedback affect amplifier performance?",
        "options": [
          "It increases distortion.",
          "It reduces gain.",
          "It improves stability, linearity, and reduces distortion.",
          "It only affects the input signal."
        ],
        "correctAnswer": "It improves stability, linearity, and reduces distortion."
      },
      {
        "question": "What are power amplifiers used for?",
        "options": [
          "To generate random signals.",
          "To amplify weak signals.",
          "To provide energy to electronic devices.",
          "To amplify signals to high power levels."
        ],
        "correctAnswer": "To amplify signals to high power levels."
      },
      {
        "question": "What is Class AB amplifier?",
        "options": [
          "An amplifier that operates in the AB frequency band.",
          "An amplifier that operates in both analog and binary modes.",
          "An amplifier that combines the characteristics of Class A and Class B amplifiers.",
          "An amplifier that only works with binary signals."
        ],
        "correctAnswer": "An amplifier that combines the characteristics of Class A and Class B amplifiers."
      },
      {
        "question": "What is an oscillator?",
        "options": [
          "A device that converts electrical energy to mechanical energy.",
          "A device that generates high-frequency electromagnetic waves.",
          "A device that converts mechanical energy to electrical energy.",
          "A device that amplifies signals."
        ],
        "correctAnswer": "A device that generates high-frequency electromagnetic waves."
      },
      {
        "question": "What is positive feedback in oscillators?",
        "options": [
          "A process that stabilizes oscillations.",
          "A process that reduces oscillations.",
          "A process that amplifies the output signal.",
          "A process that increases the input signal."
        ],
        "correctAnswer": "A process that amplifies the output signal."
      },
      {
        "question": "What are RC, LC, and Crystal oscillators?",
        "options": [
          "Different types of mechanical devices.",
          "Different types of energy sources.",
          "Different types of passive electronic circuits used for generating oscillations.",
          "Different types of digital clock circuits."
        ],
        "correctAnswer": "Different types of passive electronic circuits used for generating oscillations."
      },
      {
        "question": "How do RC oscillators work?",
        "options": [
          "By using reactive components only.",
          "By using resonant circuits.",
          "By using feedback to sustain oscillations.",
          "By using power sources."
        ],
        "correctAnswer": "By using feedback to sustain oscillations."
      },
      {
        "question": "What are waveform generators?",
        "options": [
          "Devices that generate random waveforms.",
          "Devices that convert mechanical energy to electrical energy.",
          "Devices that generate specific types of electrical waveforms.",
          "Devices that amplify signals."
        ],
        "correctAnswer": "Devices that generate specific types of electrical waveforms."
      },
      {
        "question": "What is a square wave generator?",
        "options": [
          "A generator that generates only square-shaped waves.",
          "A generator that generates random waves.",
          "A generator that generates sine waves.",
          "A generator that generates square-shaped electrical waveforms."
        ],
        "correctAnswer": "A generator that generates square-shaped electrical waveforms."
      },
      {
        "question": "What is a differential amplifier?",
        "options": [
          "An amplifier that works only with digital signals.",
          "An amplifier that amplifies the difference between two input voltages.",
          "An amplifier that amplifies the sum of two input voltages.",
          "An amplifier that generates random signals."
        ],
        "correctAnswer": "An amplifier that amplifies the difference between two input voltages."
      },
      {
        "question": "Why is a differential amplifier important?",
        "options": [
          "It only amplifies single input voltages.",
          "It is only used for low-frequency applications.",
          "It is not important in amplifier design.",
          "It is commonly used in measuring and amplifying small voltage differences."
        ],
        "correctAnswer": "It is commonly used in measuring and amplifying small voltage differences."
      },
      {
        "question": "What are the basic parameters of an ideal operational amplifier (Op. Amp)?",
        "options": [
          "High gain, low input impedance, high output impedance.",
          "Low gain, high input impedance, low output impedance.",
          "High gain, high input impedance, low output impedance.",
          "Low gain, low input impedance, high output impedance."
        ],
        "correctAnswer": "High gain, infinite input impedance, zero output impedance."
      },
      {
        "question": "Why are high gain, high input impedance, and low output impedance important in an ideal Op. Amp?",
        "options": [
          "To amplify signals effectively.",
          "To reduce noise in signals.",
          "To maintain low power consumption.",
          "To only work with high-frequency signals."
        ],
        "correctAnswer": "To amplify signals effectively."
      },
      {
        "question": "What is the difference between ideal and practical characteristics of an Op. Amp?",
        "options": [
          "There is no difference; they are the same.",
          "Ideal Op. Amps have no limitations, while practical Op. Amps have limitations.",
          "Practical Op. Amps have no limitations, while ideal Op. Amps have limitations.",
          "They only differ in their color."
        ],
        "correctAnswer": "Ideal Op. Amps have no limitations, while practical Op. Amps have limitations."
      },
      {
        "question": "Why is it important to consider practical characteristics in amplifier design?",
        "options": [
          "Practical characteristics have no impact on amplifier performance.",
          "Practical characteristics ensure amplifiers are ideal in all situations.",
          "Practical characteristics affect real-world amplifier behavior and performance.",
          "Practical characteristics are only relevant in digital amplifiers."
        ],
        "correctAnswer": "Practical characteristics affect real-world amplifier behavior and performance."
      },
      {
        "question": "How is the gain of an inverting amplifier calculated?",
        "options": [
          "By subtracting the input voltage from the output voltage.",
          "By dividing the output voltage by the input voltage.",
          "By multiplying the input voltage by the input resistance.",
          "By dividing the output voltage by the feedback resistance."
        ],
        "correctAnswer": "By dividing the output voltage by the input voltage."
      },
      {
        "question": "How is the gain of a non-inverting amplifier calculated?",
        "options": [
          "By subtracting the input voltage from the output voltage.",
          "By dividing the output voltage by the input voltage.",
          "By multiplying the input voltage by the input resistance.",
          "By dividing the output voltage by the feedback resistance."
        ],
        "correctAnswer": "By dividing the output voltage by the input voltage."
      },
      {
        "question": "What is a voltage follower?",
        "options": [
          "An amplifier with low input impedance.",
          "An amplifier that outputs a voltage greater than the input voltage.",
          "An amplifier that mirrors the input voltage with unity gain.",
          "An amplifier that inverts the input voltage."
        ],
        "correctAnswer": "An amplifier that mirrors the input voltage with unity gain."
      },
      {
        "question": "What is negative ground in amplifier circuits?",
        "options": [
          "Connecting the amplifier to the ground in reverse polarity.",
          "Connecting the amplifier to a floating ground.",
          "Connecting the amplifier to the ground with positive voltage.",
          "Connecting the amplifier to the ground with negative voltage."
        ],
        "correctAnswer": "Connecting the amplifier to the ground with negative voltage."
      },
      {
        "question": "What are the applications of Op. Amps?",
        "options": [
          "Only audio amplification.",
          "Only power generation.",
          "Signal processing, filtering, amplification, and mathematical operations.",
          "Only mechanical motion control."
        ],
        "correctAnswer": "Signal processing, filtering, amplification, and mathematical operations."
      },
      {
        "question": "What is the purpose of an Op. Amp as an integrator?",
        "options": [
          "To amplify signals.",
          "To differentiate signals.",
          "To add signals.",
          "To perform mathematical integration of input signals."
        ],
        "correctAnswer": "To perform mathematical integration of input signals."
      },
      {
        "question": "What is a logarithmic amplifier?",
        "options": [
          "An amplifier that generates exponential signals.",
          "An amplifier that amplifies logarithmic signals.",
          "An amplifier that converts logarithmic input to linear output.",
          "An amplifier that only works with digital signals."
        ],
        "correctAnswer": "An amplifier that converts logarithmic input to linear output."
      },
      {
        "question": "What is the purpose of an exponential amplifier?",
        "options": [
          "To amplify exponential signals.",
          "To amplify linear signals.",
          "To convert exponential input to linear output.",
          "To generate random signals."
        ],
        "correctAnswer": "To convert exponential input to linear output."
      },
      {
        "question": "What is a logarithmic multiplier?",
        "options": [
          "A device that multiplies logarithmic signals.",
          "A device that converts multiplication into addition.",
          "A device that multiplies linear signals.",
          "A device that generates random signals."
        ],
        "correctAnswer": "A device that multiplies linear signals."
      },
      {
        "question": "How does a logarithmic multiplier work?",
        "options": [
          "By using exponential amplifiers.",
          "By using logarithmic amplifiers.",
          "By converting multiplication into addition using logarithmic conversion.",
          "By generating exponential signals."
        ],
        "correctAnswer": "By converting multiplication into addition using logarithmic conversion."
      },
      {
        "question": "What is a Phase Locked Loop (PLL)?",
        "options": [
          "A device that generates phase-shifted signals.",
          "A device that locks the phase of two signals together.",
          "A device that generates random phase shifts.",
          "A device that amplifies phase differences."
        ],
        "correctAnswer": "A device that locks the phase of two signals together."
      },
      {
        "question": "What are the applications of a Phase Locked Loop?",
        "options": [
          "Only generating random signals.",
          "Only generating audio signals.",
          "Generating synchronized signals, frequency synthesis, and demodulation.",
          "Generating high-frequency signals."
        ],
        "correctAnswer": "Generating synchronized signals, frequency synthesis, and demodulation."
      },
      {
        "question": "What is voltage-to-frequency conversion?",
        "options": [
          "A process of converting voltage signals to frequency signals.",
          "A process of amplifying voltage signals.",
          "A process of converting voltage signals to digital signals.",
          "A process of generating random voltages."
        ],
        "correctAnswer": "A process of converting voltage signals to frequency signals."
      },
      {
        "question": "What is frequency-to-voltage conversion?",
        "options": [
          "A process of converting frequency signals to voltage signals.",
          "A process of amplifying frequency signals.",
          "A process of converting frequency signals to digital signals.",
          "A process of generating random frequencies."
        ],
        "correctAnswer": "A process of converting frequency signals to voltage signals."
      },
      {
        "question": "What are active filters?",
        "options": [
          "Filters that work only with digital signals.",
          "Filters that use passive components only.",
          "Filters that use active components like amplifiers.",
          "Filters that generate random signals."
        ],
        "correctAnswer": "Filters that use active components like amplifiers."
      },
      {
        "question": "What is the characteristic of an active filter?",
        "options": [
          "It has low gain.",
          "It has a fixed cutoff frequency.",
          "It can provide amplification and filtering simultaneously.",
          "It only works with high-frequency signals."
        ],
        "correctAnswer": "It can provide amplification and filtering simultaneously."
      },
      {
        "question": "What is an advantage of using active filters?",
        "options": [
          "They have no distortion.",
          "They have a higher bandwidth.",
          "They have no cutoff frequency.",
          "They are more efficient than passive filters."
        ],
        "correctAnswer": "They have a higher bandwidth."
      },
      {
        "question": "Why are active filters preferred over passive filters in some applications?",
        "options": [
          "Active filters are always cheaper.",
          "Active filters have lower power consumption.",
          "Active filters provide amplification and have wider frequency ranges.",
          "Passive filters are never effective."
        ],
        "correctAnswer": "Active filters provide amplification and have wider frequency ranges."
      },
      {
        "question": "What is an active first-order filter?",
        "options": [
          "A filter with a single frequency response.",
          "A filter that works only in the first octave.",
          "A filter with a single pole in its transfer function.",
          "A filter that generates random frequencies."
        ],
        "correctAnswer": "A filter with a single pole in its transfer function."
      },
      {
        "question": "What are high-pass and low-pass filters?",
        "options": [
          "Filters that work only with high-frequency signals.",
          "Filters that work only with low-frequency signals.",
          "Filters that allow high-frequency signals to pass and block low-frequency signals, and vice versa.",
          "Filters that allow all frequencies to pass."
        ],
        "correctAnswer": "Filters that allow high-frequency signals to pass and block low-frequency signals, and vice versa."
      },
      {
        "question": "What is the evolution of logic families?",
        "options": [
          "Progression from analog to digital devices.",
          "Progression from high-power to low-power devices.",
          "Advancement from early vacuum tubes to modern integrated circuits.",
          "Advancement from analog computers to digital computers."
        ],
        "correctAnswer": "Advancement from early vacuum tubes to modern integrated circuits."
      },
      {
        "question": "Why did the evolution of logic families occur?",
        "options": [
          "To maintain compatibility with analog devices.",
          "To reduce power consumption in digital devices.",
          "To improve the accuracy of analog devices.",
          "To increase the speed and reliability of digital devices."
        ],
        "correctAnswer": "To increase the speed and reliability of digital devices."
      },
      {
        "question": "What are the characteristics of logic families?",
        "options": [
          "They determine the color of logic gates.",
          "They specify the size of logic gates.",
          "They define the logic behavior, power consumption, and speed of logic gates.",
          "They only relate to the physical appearance of logic gates."
        ],
        "correctAnswer": "They define the logic behavior, power consumption, and speed of logic gates."
      },
      {
        "question": "Why are characteristics of logic families important in digital design?",
        "options": [
          "They determine the color of logic gates.",
          "They define the logic behavior, power consumption, and speed of logic gates.",
          "They only relate to the physical appearance of logic gates.",
          "They have no impact on digital design."
        ],
        "correctAnswer": "They define the logic behavior, power consumption, and speed of logic gates."
      },
      {
        "question": "How are logic families classified?",
        "options": [
          "By the number of logic gates they contain.",
          "By their physical size.",
          "By their color.",
          "By their logic behavior and circuitry characteristics."
        ],
        "correctAnswer": "By their logic behavior and circuitry characteristics."
      },
      {
        "question": "Why is the classification of logic families based on logic behavior important?",
        "options": [
          "It determines the physical size of logic gates.",
          "It ensures compatibility with analog devices.",
          "It helps in selecting the appropriate logic family for specific applications.",
          "It only relates to the color of logic gates."
        ],
        "correctAnswer": "It helps in selecting the appropriate logic family for specific applications."
      },
      {
        "question": "What are DTL, RTL, and TTL?",
        "options": [
          "Different types of lasers.",
          "Different types of analog devices.",
          "Different types of logic families.",
          "Different types of digital computers."
        ],
        "correctAnswer": "Different types of logic families."
      },
      {
        "question": "What do DTL, RTL, and TTL stand for?",
        "options": [
          "Direct Transfer Logic, Random Transfer Logic, True Transfer Logic.",
          "Digital Time Logic, Real Time Logic, Time Transfer Logic.",
          "Diode-Transistor Logic, Resistor-Transistor Logic, Transistor-Transistor Logic.",
          "Digital Timing Language, Real Time Language, Time Transfer Language."
        ],
        "correctAnswer": "Diode-Transistor Logic, Resistor-Transistor Logic, Transistor-Transistor Logic."
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
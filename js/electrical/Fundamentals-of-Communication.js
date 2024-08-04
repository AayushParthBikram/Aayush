const quizData = [
    {
        "question": "What does the block diagram of a communication system illustrate?",
        "options": [
          "The process of transmitting signals.",
          "The interaction between the transmitter and receiver.",
          "The flow of information in a communication system.",
          "The internal components of a communication device."
        ],
        "correctAnswer": "The flow of information in a communication system."
      },
      {
        "question": "What is the fundamental difference between analog and digital communication systems?",
        "options": [
          "Analog systems use continuous signals, while digital systems use discrete signals.",
          "Analog systems are more complex than digital systems.",
          "Digital systems are more susceptible to noise than analog systems.",
          "Analog systems have higher data rates than digital systems."
        ],
        "correctAnswer": "Analog systems use continuous signals, while digital systems use discrete signals."
      },
      {
        "question": "What is the purpose of baseband and band-pass systems in communication?",
        "options": [
          "To convert digital signals to analog signals.",
          "To modulate the signals for transmission.",
          "To amplify the received signals.",
          "To filter out noise from the signals."
        ],
        "correctAnswer": "To modulate the signals for transmission."
      },
      {
        "question": "What is the definition of noise in a communication system?",
        "options": [
          "Unwanted disturbances in the transmission medium.",
          "The main signal being transmitted.",
          "The quality of the received signal.",
          "The measure of signal strength."
        ],
        "correctAnswer": "Unwanted disturbances in the transmission medium."
      },
      {
        "question": "What does Signal-to-Noise Ratio (SNR) measure?",
        "options": [
          "The strength of the main signal.",
          "The amount of noise present in the signal.",
          "The ratio of the signal power to the noise power.",
          "The frequency of the signal."
        ],
        "correctAnswer": "The ratio of the signal power to the noise power."
      },
      {
        "question": "What is Bit Error Ratio (BER) or Bit Error Rate (BER)?",
        "options": [
          "The number of bits in a signal.",
          "The ratio of incorrect bits to the total number of bits transmitted.",
          "The frequency of bit transmission.",
          "The amount of noise in a bit."
        ],
        "correctAnswer": "The ratio of incorrect bits to the total number of bits transmitted."
      },
      {
        "question": "What is Equivalent Noise Bandwidth?",
        "options": [
          "The bandwidth of the transmitted signal.",
          "The frequency at which noise is most prominent.",
          "The effective bandwidth of the noise in a communication system.",
          "The bandwidth of the receiver."
        ],
        "correctAnswer": "The effective bandwidth of the noise in a communication system."
      },
      {
        "question": "What is White Gaussian Noise in a communication channel?",
        "options": [
          "Noise with a flat frequency response.",
          "Noise with a Gaussian-shaped frequency response.",
          "Noise with varying frequency components.",
          "Noise with a constant amplitude."
        ],
        "correctAnswer": "Noise with a flat frequency response."
      },
      {
        "question": "How does noise impact a communication system?",
        "options": [
          "Noise increases the signal quality.",
          "Noise has no impact on a communication system.",
          "Noise introduces errors and reduces the quality of the received signal.",
          "Noise only affects the transmitter."
        ],
        "correctAnswer": "Noise introduces errors and reduces the quality of the received signal."
      },
      {
        "question": "What is the Figure of Merit in communication systems?",
        "options": [
          "A measure of signal power.",
          "A measure of noise power.",
          "A measure of overall system performance.",
          "A measure of modulation frequency."
        ],
        "correctAnswer": "A measure of overall system performance."
      },
      {
        "question": "What type of noise is typically present in an Additive White Gaussian Noise (AWGN) channel?",
        "options": [
          "Random noise with varying amplitudes.",
          "Constant noise with uniform frequency components.",
          "Interference from other communication systems.",
          "Impulse noise."
        ],
        "correctAnswer": "Constant noise with uniform frequency components."
      },
      {
        "question": "What is the primary effect of noise on a communication system?",
        "options": [
          "Noise enhances the signal quality.",
          "Noise reduces the bandwidth of the signal.",
          "Noise increases the data rate.",
          "Noise degrades the quality of the received signal."
        ],
        "correctAnswer": "Noise degrades the quality of the received signal."
      },
      {
        "question": "What is the primary goal of modulation in communication systems?",
        "options": [
          "To amplify the signal.",
          "To remove noise from the signal.",
          "To convert analog signals to digital signals.",
          "To transfer information from a low-frequency signal to a higher-frequency carrier signal."
        ],
        "correctAnswer": "To transfer information from a low-frequency signal to a higher-frequency carrier signal."
      },
      {
        "question": "What is the role of a channel in a communication system?",
        "options": [
          "To amplify the signal.",
          "To convert analog signals to digital signals.",
          "To remove noise from the signal.",
          "To carry the signal from the transmitter to the receiver."
        ],
        "correctAnswer": "To carry the signal from the transmitter to the receiver."
      },
      {
        "question": "What is the purpose of encoding and modulation in digital communication systems?",
        "options": [
          "To remove noise from the signal.",
          "To convert digital signals to analog signals.",
          "To increase the data rate of the signal.",
          "To enhance the signal quality."
        ],
        "correctAnswer": "To convert digital signals to analog signals."
      },
      {
        "question": "What is the primary advantage of digital communication over analog communication?",
        "options": [
          "Digital communication is more immune to noise.",
          "Analog communication has higher data rates.",
          "Digital communication requires less bandwidth.",
          "Digital communication requires less power."
        ],
        "correctAnswer": "Digital communication is more immune to noise."
      },
      {
        "question": "What is the main drawback of analog communication systems?",
        "options": [
          "Analog systems have lower data rates.",
          "Analog systems are more susceptible to noise.",
          "Analog systems are more complex.",
          "Analog systems have limited frequency range."
        ],
        "correctAnswer": "Analog systems are more susceptible to noise."
      },
      {
        "question": "What is the primary advantage of using Band Pass systems in communication?",
        "options": [
          "Band Pass systems have lower data rates.",
          "Band Pass systems are more immune to noise.",
          "Band Pass systems have a larger frequency range.",
          "Band Pass systems are simpler to design."
        ],
        "correctAnswer": "Band Pass systems are more immune to noise."
      },
      {
        "question": "What is the main role of the receiver in a communication system?",
        "options": [
          "To generate the carrier signal.",
          "To amplify the received signal.",
          "To generate the original message signal.",
          "To convert the received signal back to the original message signal."
        ],
        "correctAnswer": "To convert the received signal back to the original message signal."
      },
      {
        "question": "What does a higher Signal-to-Noise Ratio (SNR) indicate in a communication system?",
        "options": [
          "A stronger signal.",
          "A higher data rate.",
          "A better signal quality.",
          "A larger bandwidth."
        ],
        "correctAnswer": "A better signal quality."
      },
      {
        "question": "What is the primary role of error correction coding in digital communication systems?",
        "options": [
          "To increase the signal strength.",
          "To increase the data rate.",
          "To reduce the bandwidth.",
          "To detect and correct errors in the received signal."
        ],
        "correctAnswer": "To detect and correct errors in the received signal."
      },
      {
        "question": "What is the purpose of modulation in communication?",
        "options": [
          "To amplify the signal.",
          "To remove noise from the signal.",
          "To convert analog signals to digital signals.",
          "To transfer information from a low-frequency signal to a higher-frequency carrier signal."
        ],
        "correctAnswer": "To transfer information from a low-frequency signal to a higher-frequency carrier signal."
      },
      {
        "question": "Which type of modulation is used to carry the message signal as variations in the amplitude of the carrier signal?",
        "options": [
          "Frequency Modulation (FM)",
          "Phase Modulation (PM)",
          "Amplitude Modulation (AM)",
          "Pulse Modulation (PM)"
        ],
        "correctAnswer": "Amplitude Modulation (AM)"
      },
      {
        "question": "What is Double Sideband Suppressed-Carrier (DSB-SC) modulation?",
        "options": [
          "A modulation technique where both sidebands are transmitted, but the carrier is removed.",
          "A modulation technique where only one sideband is transmitted.",
          "A modulation technique where both sidebands and the carrier are transmitted.",
          "A modulation technique where only the carrier is transmitted."
        ],
        "correctAnswer": "A modulation technique where both sidebands are transmitted, but the carrier is removed."
      },
      {
        "question": "Which demodulation technique involves squaring the modulated signal and passing it through a low-pass filter?",
        "options": [
          "Square law demodulation",
          "Synchronous demodulation",
          "Envelope detection",
          "Frequency discrimination"
        ],
        "correctAnswer": "Square law demodulation"
      },
      {
        "question": "What is the primary purpose of carrier recovery techniques in demodulation?",
        "options": [
          "To amplify the carrier signal.",
          "To suppress the carrier signal.",
          "To remove noise from the signal.",
          "To reconstruct the carrier signal for demodulation."
        ],
        "correctAnswer": "To reconstruct the carrier signal for demodulation."
      },
      {
        "question": "Which type of modulation suppresses the carrier and transmits only one sideband?",
        "options": [
          "Single Sideband Suppressed Carrier (SSB-SC) modulation",
          "Double Sideband Suppressed Carrier (DSB-SC) modulation",
          "Vestigial Sideband (VSB) modulation",
          "Frequency Modulation (FM)"
        ],
        "correctAnswer": "Single Sideband Suppressed Carrier (SSB-SC) modulation"
      },
      {
        "question": "What is Vestigial Sideband (VSB) modulation?",
        "options": [
          "A modulation technique that transmits the carrier and one sideband.",
          "A modulation technique that transmits both sidebands.",
          "A modulation technique that transmits one sideband and a portion of the other sideband.",
          "A modulation technique that transmits only the carrier."
        ],
        "correctAnswer": "A modulation technique that transmits one sideband and a portion of the other sideband."
      },
      {
        "question": "What type of modulation involves varying the frequency of the carrier signal according to the message signal?",
        "options": [
          "Amplitude Modulation (AM)",
          "Phase Modulation (PM)",
          "Frequency Modulation (FM)",
          "Pulse Modulation (PM)"
        ],
        "correctAnswer": "Frequency Modulation (FM)"
      },
      {
        "question": "What is the purpose of pre-emphasis and de-emphasis in angle-modulated systems?",
        "options": [
          "To amplify the carrier signal.",
          "To remove noise from the signal.",
          "To suppress the sidebands.",
          "To compensate for high-frequency loss in transmission and reception."
        ],
        "correctAnswer": "To compensate for high-frequency loss in transmission and reception."
      },
      {
        "question": "Which type of modulation is used for transmitting digital signals over analog channels?",
        "options": [
          "Amplitude Modulation (AM)",
          "Frequency Modulation (FM)",
          "Phase Modulation (PM)",
          "Pulse Amplitude Modulation (PAM)"
        ],
        "correctAnswer": "Pulse Amplitude Modulation (PAM)"
      },
      {
        "question": "What is the main principle behind digital modulation?",
        "options": [
          "Varying the amplitude of the carrier signal.",
          "Varying the phase of the carrier signal.",
          "Varying the frequency of the carrier signal.",
          "Varying the duration of the carrier signal."
        ],
        "correctAnswer": "Varying the parameters of the carrier signal to represent digital data."
      },
      {
        "question": "Which digital modulation technique involves varying the amplitude of the carrier signal to represent binary data?",
        "options": [
          "Binary Phase Shift Keying (BPSK)",
          "Binary Frequency Shift Keying (BFSK)",
          "Binary Amplitude Shift Keying (BASK)",
          "Quadrature Amplitude Modulation (QAM)"
        ],
        "correctAnswer": "Binary Amplitude Shift Keying (BASK)"
      },
      {
        "question": "In Binary Frequency Shift Keying (BFSK), how are the two binary symbols represented?",
        "options": [
          "By varying the phase of the carrier signal.",
          "By varying the frequency of the carrier signal.",
          "By varying the amplitude of the carrier signal.",
          "By varying the duration of the carrier signal."
        ],
        "correctAnswer": "By varying the frequency of the carrier signal."
      },
      {
        "question": "Which digital modulation technique involves varying the phase of the carrier signal to represent binary data?",
        "options": [
          "Binary Amplitude Shift Keying (BASK)",
          "Binary Frequency Shift Keying (BFSK)",
          "Binary Phase Shift Keying (BPSK)",
          "Quadrature Phase Shift Keying (QPSK)"
        ],
        "correctAnswer": "Binary Phase Shift Keying (BPSK)"
      },
      {
        "question": "What is the key advantage of M-ary modulation techniques?",
        "options": [
          "Higher data rate compared to binary modulation.",
          "Simpler demodulation process.",
          "Reduced susceptibility to noise.",
          "Lower bandwidth requirement."
        ],
        "correctAnswer": "Higher data rate compared to binary modulation."
      },
      {
        "question": "Quadrature Phase Shift Keying (QPSK) is an example of:",
        "options": [
          "Binary modulation.",
          "M-ary modulation.",
          "Analog modulation.",
          "Pulse modulation."
        ],
        "correctAnswer": "M-ary modulation."
      },
      {
        "question": "Which modulation technique allows both amplitude and phase variations to represent digital data?",
        "options": [
          "Binary Amplitude Shift Keying (BASK)",
          "Binary Frequency Shift Keying (BFSK)",
          "Quadrature Amplitude Modulation (QAM)",
          "Binary Phase Shift Keying (BPSK)"
        ],
        "correctAnswer": "Quadrature Amplitude Modulation (QAM)"
      },
      {
        "question": "What is the main purpose of a matched filter in digital communication systems?",
        "options": [
          "To reduce noise in the received signal.",
          "To increase the data rate.",
          "To encode the transmitted signal.",
          "To maximize the signal-to-noise ratio (SNR) at the receiver."
        ],
        "correctAnswer": "To maximize the signal-to-noise ratio (SNR) at the receiver."
      },
      {
        "question": "What does PCM stand for in the context of digital communication?",
        "options": [
          "Pulse Code Modulation",
          "Phase Code Modulation",
          "Phase Continuous Modulation",
          "Pulse Carrier Modulation"
        ],
        "correctAnswer": "Pulse Code Modulation"
      },
      {
        "question": "According to Shannon Hartley Channel Capacity theorem, what is the maximum data rate a channel can reliably transmit?",
        "options": [
          "The signal-to-noise ratio (SNR) of the channel.",
          "The bandwidth of the channel.",
          "The power of the transmitted signal.",
          "The product of the bandwidth and the logarithm of the signal-to-noise ratio (SNR)."
        ],
        "correctAnswer": "The product of the bandwidth and the logarithm of the signal-to-noise ratio (SNR)."
      },
      {
        "question": "In Pulse Amplitude Modulation (PAM), what does the amplitude of the pulse represent?",
        "options": [
          "The phase of the carrier signal.",
          "The frequency of the carrier signal.",
          "The amplitude of the carrier signal.",
          "The value of the message signal."
        ],
        "correctAnswer": "The value of the message signal."
      },
      {
        "question": "Pulse Amplitude Modulation (PAM) requires a higher bandwidth compared to which modulation technique?",
        "options": [
          "Frequency Modulation (FM)",
          "Amplitude Modulation (AM)",
          "Phase Modulation (PM)",
          "Pulse Code Modulation (PCM)"
        ],
        "correctAnswer": "Amplitude Modulation (AM)"
      },
      {
        "question": "What does PCM stand for in the context of Pulse Code Modulation?",
        "options": [
          "Pulse Continuous Modulation",
          "Pulse Code Modulation",
          "Phase Code Modulation",
          "Pulse Carrier Modulation"
        ],
        "correctAnswer": "Pulse Code Modulation"
      },
      {
        "question": "What is the purpose of quantization in Pulse Code Modulation (PCM)?",
        "options": [
          "To convert analog signals to digital signals.",
          "To encode the message signal.",
          "To compress the signal.",
          "To approximate the continuous signal with discrete levels."
        ],
        "correctAnswer": "To approximate the continuous signal with discrete levels."
      },
      {
        "question": "What is quantization error in Pulse Code Modulation (PCM)?",
        "options": [
          "The difference between the original message signal and the quantized signal.",
          "The noise added during modulation.",
          "The difference between the encoded signal and the decoded signal.",
          "The error introduced during pulse modulation."
        ],
        "correctAnswer": "The difference between the original message signal and the quantized signal."
      },
      {
        "question": "What is the main purpose of companders in PCM systems?",
        "options": [
          "To increase the data rate.",
          "To reduce the quantization error.",
          "To expand the dynamic range of the signal.",
          "To increase the modulation depth."
        ],
        "correctAnswer": "To reduce the quantization error."
      },
      {
        "question": "What is the key advantage of Differential PCM (DPCM) compared to regular PCM?",
        "options": [
          "Higher data rate.",
          "Lower quantization error.",
          "Simpler encoding process.",
          "Reduced bandwidth requirement."
        ],
        "correctAnswer": "Reduced bandwidth requirement."
      },
      {
        "question": "What is the primary characteristic of Delta Modulation (DM)?",
        "options": [
          "It uses continuous pulse modulation.",
          "It uses a continuous carrier signal.",
          "It has uniform quantization levels.",
          "It approximates the slope of the message signal."
        ],
        "correctAnswer": "It approximates the slope of the message signal."
      },
      {
        "question": "What is Adaptive Delta Modulation (ADM) used for?",
        "options": [
          "To increase the data rate.",
          "To improve the signal-to-noise ratio.",
          "To adaptively adjust the step size in delta modulation.",
          "To reduce the quantization error in PCM."
        ],
        "correctAnswer": "To adaptively adjust the step size in delta modulation."
      },
      {
        "question": "What is the purpose of Sigma-Delta Modulation?",
        "options": [
          "To increase the modulation depth.",
          "To reduce the quantization error.",
          "To increase the data rate.",
          "To improve the signal-to-noise ratio."
        ],
        "correctAnswer": "To improve the signal-to-noise ratio."
      },
      {
        "question": "What is the main purpose of error control coding in communication systems?",
        "options": [
          "To increase the data rate.",
          "To reduce the bandwidth requirement.",
          "To detect and correct errors in transmitted data.",
          "To improve the modulation depth."
        ],
        "correctAnswer": "To detect and correct errors in transmitted data."
      },
      {
        "question": "In the context of error control coding, what does the term 'Hamming distance' refer to?",
        "options": [
          "The distance between two data points in the constellation diagram.",
          "The distance between two adjacent symbols in the modulation scheme.",
          "The minimum number of bit flips needed to transform one code word into another.",
          "The time interval between successive symbols in the transmitted signal."
        ],
        "correctAnswer": "The minimum number of bit flips needed to transform one code word into another."
      },
      {
        "question": "What is the purpose of parity coding?",
        "options": [
          "To improve the signal-to-noise ratio.",
          "To increase the data rate.",
          "To reduce the bandwidth requirement.",
          "To detect errors in transmitted data."
        ],
        "correctAnswer": "To detect errors in transmitted data."
      },
      {
        "question": "Which type of code organizes data into fixed-size blocks for error control?",
        "options": [
          "Convolution code",
          "Cyclic code",
          "Parity code",
          "Linear block code"
        ],
        "correctAnswer": "Block code"
      },
      {
        "question": "What is a Linear Block Code?",
        "options": [
          "A code that uses linear feedback shift registers.",
          "A code that organizes data into blocks of varying sizes.",
          "A code that uses non-linear encoding and decoding techniques.",
          "A code that uses linear combinations of the input data to generate code words."
        ],
        "correctAnswer": "A code that uses linear combinations of the input data to generate code words."
      },
      {
        "question": "What is the key feature of Systematic Linear Block Coding?",
        "options": [
          "It has a fixed block size.",
          "It uses non-linear encoding.",
          "The original data is included in the transmitted code word.",
          "It only corrects errors without detecting them."
        ],
        "correctAnswer": "The original data is included in the transmitted code word."
      },
      {
        "question": "Cyclic codes are a type of error control code that has the property of:",
        "options": [
          "Detecting errors with high accuracy.",
          "Correcting errors with high accuracy.",
          "Generating code words using linear combinations.",
          "Looping back to the original code word after a certain number of shifts."
        ],
        "correctAnswer": "Looping back to the original code word after a certain number of shifts."
      },
      {
        "question": "Convolution codes are commonly used in communication systems that require:",
        "options": [
          "High data rates.",
          "Low complexity encoding and decoding.",
          "Short block lengths.",
          "Perfect error detection."
        ],
        "correctAnswer": "High data rates."
      },
      {
        "question": "What does the term 'trellis' refer to in the context of convolution coding?",
        "options": [
          "A graphical representation of code words.",
          "A table used for encoding.",
          "A type of parity check matrix.",
          "A graphical representation of all possible paths in the decoding process."
        ],
        "correctAnswer": "A graphical representation of all possible paths in the decoding process."
      },
      {
        "question": "In error control coding, the main goal of decoding is to:",
        "options": [
          "Increase the modulation depth.",
          "Improve the signal-to-noise ratio.",
          "Correct or detect errors in the received data.",
          "Reduce the bandwidth requirement."
        ],
        "correctAnswer": "Correct or detect errors in the received data."
      },
      {
        "question": "What is the main purpose of data communication?",
        "options": [
          "To increase the data rate.",
          "To reduce the bandwidth requirement.",
          "To establish physical connections between devices.",
          "To exchange information between devices over a distance."
        ],
        "correctAnswer": "To exchange information between devices over a distance."
      },
      {
        "question": "What is the advantage of serial communication over parallel communication?",
        "options": [
          "Higher data rates.",
          "Lower cost of implementation.",
          "Simpler synchronization.",
          "Reduced susceptibility to noise."
        ],
        "correctAnswer": "Reduced susceptibility to noise."
      },
      {
        "question": "What is multiplexing in the context of data communication?",
        "options": [
          "The process of converting analog signals to digital signals.",
          "The process of combining multiple signals into a single transmission medium.",
          "The process of error detection and correction.",
          "The process of encoding data for security."
        ],
        "correctAnswer": "The process of combining multiple signals into a single transmission medium."
      },
      {
        "question": "Frequency Division Multiplexing (FDM) involves:",
        "options": [
          "Dividing the available bandwidth into time slots.",
          "Dividing the available bandwidth into frequency ranges.",
          "Dividing the data into packets for transmission.",
          "Dividing the data into parallel streams."
        ],
        "correctAnswer": "Dividing the available bandwidth into frequency ranges."
      },
      {
        "question": "Time Division Multiplexing (TDM) involves:",
        "options": [
          "Dividing the available bandwidth into frequency ranges.",
          "Dividing the data into parallel streams.",
          "Dividing the available bandwidth into time slots.",
          "Dividing the data into packets for transmission."
        ],
        "correctAnswer": "Dividing the available bandwidth into time slots."
      },
      {
        "question": "Wavelength Division Multiplexing (WDM) is commonly used in which type of networks?",
        "options": [
          "Wired LANs",
          "Wireless networks",
          "Satellite communication",
          "Optical fiber communication"
        ],
        "correctAnswer": "Optical fiber communication"
      },
      {
        "question": "Which of the following describes the arrangement of devices and connections in a network?",
        "options": [
          "Network architecture",
          "Network topology",
          "Network protocol",
          "Network protocol stack"
        ],
        "correctAnswer": "Network topology"
      },
      {
        "question": "Which model divides the networking tasks into seven layers?",
        "options": [
          "TCP/IP model",
          "Ethernet model",
          "OSI model",
          "UDP model"
        ],
        "correctAnswer": "OSI model"
      },
      {
        "question": "In the OSI model, which layer is responsible for establishing, maintaining, and terminating connections?",
        "options": [
          "Physical layer",
          "Data Link layer",
          "Transport layer",
          "Network layer"
        ],
        "correctAnswer": "Transport layer"
      },
      {
        "question": "The TCP/IP model combines multiple layers of the OSI model into fewer layers. How many layers does the TCP/IP model have?",
        "options": [
          "4 layers",
          "5 layers",
          "6 layers",
          "7 layers"
        ],
        "correctAnswer": "4 layers"
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
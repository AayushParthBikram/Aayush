const quizData = [
    {
        "question": "What is the classification of signals based on time?",
        "options": [
          "Continuous time and discrete time signals.",
          "Analog signals and digital signals.",
          "Periodic signals and aperiodic signals.",
          "Sinusoidal signals and square wave signals."
        ],
        "correctAnswer": "Continuous time and discrete time signals."
      },
      {
        "question": "What are periodic signals?",
        "options": [
          "Signals that have a repeating pattern over time.",
          "Signals that only occur at specific instances.",
          "Signals that vary continuously over time.",
          "Signals that have a constant value."
        ],
        "correctAnswer": "Signals that have a repeating pattern over time."
      },
      {
        "question": "What is the difference between energy and power signals?",
        "options": [
          "Energy signals have constant amplitude, while power signals have varying amplitude.",
          "Energy signals have finite energy over time, while power signals have infinite energy.",
          "Energy signals have infinite energy, while power signals have finite energy over time.",
          "Energy signals and power signals are the same."
        ],
        "correctAnswer": "Energy signals have finite energy over time, while power signals have infinite energy."
      },
      {
        "question": "What is an even signal?",
        "options": [
          "A signal that is symmetric about the y-axis.",
          "A signal that has even values at all time points.",
          "A signal that is symmetric about the x-axis.",
          "A signal that has odd values at all time points."
        ],
        "correctAnswer": "A signal that is symmetric about the y-axis."
      },
      {
        "question": "What are orthogonal signals?",
        "options": [
          "Signals that are perpendicular to each other.",
          "Signals that have the same amplitude.",
          "Signals that have the same frequency.",
          "Signals that are in phase with each other."
        ],
        "correctAnswer": "Signals that are perpendicular to each other."
      },
      {
        "question": "What is a casual signal?",
        "options": [
          "A signal that depends only on past values.",
          "A signal that depends only on future values.",
          "A signal that depends on both past and future values.",
          "A signal that does not depend on any values."
        ],
        "correctAnswer": "A signal that depends only on past values."
      },
      {
        "question": "What is the transformation of signals called when they are shifted in time?",
        "options": [
          "Time scaling.",
          "Time reversal.",
          "Time shifting.",
          "Time convolution."
        ],
        "correctAnswer": "Time shifting."
      },
      {
        "question": "What is the transformation of signals called when their time scale is compressed or expanded?",
        "options": [
          "Time scaling.",
          "Time reversal.",
          "Time shifting.",
          "Time convolution."
        ],
        "correctAnswer": "Time scaling."
      },
      {
        "question": "What is the unit impulse signal?",
        "options": [
          "A signal that has constant amplitude.",
          "A signal that has a single non-zero value at time zero.",
          "A signal that has a constant frequency.",
          "A signal that has infinite energy."
        ],
        "correctAnswer": "A signal that has a single non-zero value at time zero."
      },
      {
        "question": "What is convolution in the context of signals and systems?",
        "options": [
          "A mathematical operation that combines two signals to produce a third signal.",
          "The process of finding the inverse of a signal.",
          "A method of time scaling.",
          "A method of time shifting."
        ],
        "correctAnswer": "A mathematical operation that combines two signals to produce a third signal."
      },
      {
        "question": "What is the Laplace transform?",
        "options": [
          "A mathematical operation that transforms a signal from the time domain to the frequency domain.",
          "A method for solving differential equations without using calculus.",
          "A technique for finding the derivative of a function.",
          "A way to simplify algebraic expressions."
        ],
        "correctAnswer": "A mathematical operation that transforms a signal from the time domain to the frequency domain."
      },
      {
        "question": "What are the properties of Laplace transforms?",
        "options": [
          "Linearity, time scaling, time shifting, and frequency scaling.",
          "Linearity, time reversal, time shifting, and frequency shifting.",
          "Linearity, time scaling, time shifting, and frequency shifting.",
          "Linearity, time scaling, frequency scaling, and differentiation."
        ],
        "correctAnswer": "Linearity, time scaling, time shifting, and frequency shifting."
      },
      {
        "question": "What is the Laplace transform of a constant function?",
        "options": [
          "1/s.",
          "s.",
          "e^(-st).",
          "δ(t)."
        ],
        "correctAnswer": "1/s."
      },
      {
        "question": "What is the inverse Laplace transform?",
        "options": [
          "A method for converting a signal from the frequency domain to the time domain.",
          "A technique for solving algebraic equations.",
          "A way to differentiate a function.",
          "A mathematical operation that transforms a signal into a complex exponential."
        ],
        "correctAnswer": "A method for converting a signal from the frequency domain to the time domain."
      },
      {
        "question": "What is partial fraction expansion in Laplace transforms?",
        "options": [
          "A method for expanding a polynomial.",
          "A technique for solving algebraic equations.",
          "A method for expanding a complex exponential.",
          "A technique for expressing a rational function as a sum of simpler fractions."
        ],
        "correctAnswer": "A technique for expressing a rational function as a sum of simpler fractions."
      },
      {
        "question": "What is Heaviside’s expansion theorem?",
        "options": [
          "A theorem that explains the properties of complex exponentials.",
          "A theorem that explains the properties of impulse signals.",
          "A theorem that relates Laplace and Fourier transforms.",
          "A theorem that relates time-domain and frequency-domain functions."
        ],
        "correctAnswer": "A theorem that relates time-domain and frequency-domain functions."
      },
      {
        "question": "How is the Laplace transform used in solving differential equations?",
        "options": [
          "It transforms differential equations into algebraic equations.",
          "It transforms algebraic equations into differential equations.",
          "It differentiates differential equations.",
          "It integrates differential equations."
        ],
        "correctAnswer": "It transforms differential equations into algebraic equations."
      },
      {
        "question": "What is the transfer function in the context of Laplace transforms?",
        "options": [
          "A function that describes the transfer of energy from one domain to another.",
          "A function that relates the input and output of a linear time-invariant system.",
          "A function that transforms complex exponentials.",
          "A function that describes the properties of impulse signals."
        ],
        "correctAnswer": "A function that relates the input and output of a linear time-invariant system."
      },
      {
        "question": "What does the frequency response describe?",
        "options": [
          "The time-domain behavior of a system.",
          "The transformation of signals from time to frequency domain.",
          "The relationship between input and output in the time domain.",
          "The behavior of a system as a function of frequency."
        ],
        "correctAnswer": "The behavior of a system as a function of frequency."
      },
      {
        "question": "What is the purpose of the Fourier series?",
        "options": [
          "To represent a periodic signal in the frequency domain.",
          "To represent a non-periodic signal in the time domain.",
          "To transform signals from the frequency domain to the time domain.",
          "To transform signals from the time domain to the frequency domain."
        ],
        "correctAnswer": "To represent a periodic signal in the frequency domain."
      },
      {
        "question": "What is the Fourier integral used for?",
        "options": [
          "To represent periodic signals.",
          "To represent non-periodic signals.",
          "To transform signals to the time domain.",
          "To transform signals to the frequency domain."
        ],
        "correctAnswer": "To represent non-periodic signals."
      },
      {
        "question": "What is the reverse/inverse Fourier transform?",
        "options": [
          "A transformation from the frequency domain to the time domain.",
          "A transformation from the time domain to the frequency domain.",
          "A transformation that scales the frequency of a signal.",
          "A transformation that scales the amplitude of a signal."
        ],
        "correctAnswer": "A transformation from the frequency domain to the time domain."
      },
      {
        "question": "What are the properties of Fourier transforms?",
        "options": [
          "Linearity, time scaling, time shifting, and frequency shifting.",
          "Linearity, time reversal, time shifting, and frequency scaling.",
          "Linearity, time scaling, time shifting, and frequency scaling.",
          "Linearity, time scaling, frequency scaling, and differentiation."
        ],
        "correctAnswer": "Linearity, time scaling, time shifting, and frequency shifting."
      },
      {
        "question": "What does Parseval's theorem state?",
        "options": [
          "The energy of a signal in the time domain is equal to its energy in the frequency domain.",
          "The amplitude of a signal in the time domain is equal to its amplitude in the frequency domain.",
          "The energy of a signal in the frequency domain is equal to its energy in the time domain.",
          "The amplitude of a signal in the frequency domain is equal to its amplitude in the time domain."
        ],
        "correctAnswer": "The energy of a signal in the time domain is equal to its energy in the frequency domain."
      },
      {
        "question": "What is the purpose of discrete time Fourier series?",
        "options": [
          "To represent a continuous signal in the frequency domain.",
          "To represent a continuous signal in the time domain.",
          "To represent a periodic signal in the frequency domain.",
          "To represent a periodic signal in the time domain."
        ],
        "correctAnswer": "To represent a periodic signal in the frequency domain."
      },
      {
        "question": "What is the discrete time Fourier transform (DTFT) used for?",
        "options": [
          "To represent continuous signals.",
          "To represent discrete signals.",
          "To transform signals to the time domain.",
          "To transform signals to the frequency domain."
        ],
        "correctAnswer": "To represent aperiodic signals."
      },
      {
        "question": "What is the reverse/inverse DTFT?",
        "options": [
          "A transformation from the frequency domain to the time domain.",
          "A transformation from the time domain to the frequency domain.",
          "A transformation that scales the frequency of a signal.",
          "A transformation that scales the amplitude of a signal."
        ],
        "correctAnswer": "A transformation from the frequency domain to the time domain."
      },
      {
        "question": "What are the properties of DTFT?",
        "options": [
          "Linearity, time scaling, time shifting, and frequency shifting.",
          "Linearity, time reversal, time shifting, and frequency scaling.",
          "Linearity, time scaling, time shifting, and frequency scaling.",
          "Linearity, time scaling, frequency scaling, and differentiation."
        ],
        "correctAnswer": "Linearity, time scaling, time shifting, and frequency shifting."
      },
      {
        "question": "What is the purpose of the sampling theorem?",
        "options": [
          "To determine the frequency of a signal.",
          "To determine the amplitude of a signal.",
          "To convert continuous-time signals to discrete-time signals.",
          "To convert discrete-time signals to continuous-time signals."
        ],
        "correctAnswer": "To convert continuous-time signals to discrete-time signals."
      },
      {
        "question": "What is aliasing?",
        "options": [
          "A process that increases the frequency of a signal.",
          "A process that decreases the amplitude of a signal.",
          "A process that leads to distortion and loss of information in sampled signals.",
          "A process that enhances the accuracy of the sampled signal."
        ],
        "correctAnswer": "A process that leads to distortion and loss of information in sampled signals."
      },
      {
        "question": "What is the z-transform?",
        "options": [
          "A mathematical operation that converts discrete-time signals to continuous-time signals.",
          "A mathematical operation that converts continuous-time signals to discrete-time signals.",
          "A technique for filtering continuous-time signals.",
          "A technique for converting sinusoidal signals to exponential signals."
        ],
        "correctAnswer": "A mathematical operation that converts discrete-time signals to continuous-time signals."
      },
      {
        "question": "What are the properties of the z-transform?",
        "options": [
          "Linearity, shifting, convolution, scaling.",
          "Linearity, time reversal, time shifting, frequency scaling.",
          "Linearity, time scaling, time shifting, frequency shifting.",
          "Linearity, time scaling, frequency scaling, differentiation."
        ],
        "correctAnswer": "Linearity, shifting, convolution, scaling."
      },
      {
        "question": "What is the relation between the z-transform and the Fourier transform?",
        "options": [
          "They are two different operations with no relation.",
          "The z-transform is the continuous-time version of the Fourier transform.",
          "The z-transform is the discrete-time version of the Fourier transform.",
          "The z-transform is the inverse operation of the Fourier transform."
        ],
        "correctAnswer": "The z-transform is the discrete-time version of the Fourier transform."
      },
      {
        "question": "How is the inverse z-transform computed?",
        "options": [
          "By partial fraction expansions.",
          "By differentiation of the z-transform.",
          "By integration of the z-transform.",
          "By applying convolution to the z-transform."
        ],
        "correctAnswer": "By partial fraction expansions."
      },
      {
        "question": "What is the transfer function H(z) in digital systems?",
        "options": [
          "The frequency response of the system.",
          "The time response of the system.",
          "The amplitude response of the system.",
          "The relationship between input and output signals."
        ],
        "correctAnswer": "The relationship between input and output signals."
      },
      {
        "question": "What is the purpose of the Fast Fourier Transform (FFT)?",
        "options": [
          "To convert continuous-time signals to discrete-time signals.",
          "To convert discrete-time signals to continuous-time signals.",
          "To efficiently compute the discrete Fourier transform of a sequence.",
          "To enhance the accuracy of the z-transform."
        ],
        "correctAnswer": "To efficiently compute the discrete Fourier transform of a sequence."
      },
      {
        "question": "How is the stability of a discrete-time system tested?",
        "options": [
          "By analyzing the frequency response.",
          "By checking the amplitude of the output signal.",
          "By examining the properties of the z-transform.",
          "By analyzing the locations of poles in the z-plane."
        ],
        "correctAnswer": "By analyzing the locations of poles in the z-plane."
      },
      {
        "question": "What is the primary purpose of stability analysis in frequency domain?",
        "options": [
          "To determine the amplitude of a signal.",
          "To assess the transient behavior of a system.",
          "To analyze the phase shift of a signal.",
          "To ensure the stability of a system by examining the locations of poles in the frequency domain."
        ],
        "correctAnswer": "To ensure the stability of a system by examining the locations of poles in the frequency domain."
      },
      {
        "question": "What is spectral analysis used for?",
        "options": [
          "To determine the frequency components of a signal.",
          "To analyze the transient behavior of a system.",
          "To assess the amplitude shift of a signal.",
          "To ensure the stability of a system by examining its time response."
        ],
        "correctAnswer": "To determine the frequency components of a signal."
      },
      {
        "question": "What is the purpose of spectrum sensing?",
        "options": [
          "To detect the presence of a signal in the frequency domain.",
          "To measure the amplitude of a signal in the time domain.",
          "To analyze the phase shift of a signal.",
          "To determine the impulse response of a system."
        ],
        "correctAnswer": "To detect the presence of a signal in the frequency domain."
      },
      {
        "question": "What does correlation measure in frequency domain analysis?",
        "options": [
          "The time delay between two signals.",
          "The frequency shift between two signals.",
          "The amplitude ratio between two signals.",
          "The phase difference between two signals."
        ],
        "correctAnswer": "The time delay between two signals."
      },
      {
        "question": "How is frequency domain analysis applied to system design?",
        "options": [
          "By analyzing the transient behavior of a system.",
          "By examining the stability of a system using pole-zero analysis.",
          "By measuring the amplitude and frequency of signals.",
          "By assessing the phase shift of signals."
        ],
        "correctAnswer": "By examining the stability of a system using pole-zero analysis."
      },
      {
        "question": "What is the primary purpose of filters?",
        "options": [
          "To amplify signals.",
          "To remove noise from signals.",
          "To increase the frequency of signals.",
          "To convert analog signals to digital signals."
        ],
        "correctAnswer": "To remove noise from signals."
      },
      {
        "question": "What is the difference between ideal and practical filters?",
        "options": [
          "Ideal filters have unlimited bandwidth, while practical filters have limited bandwidth.",
          "Ideal filters can remove all noise from signals, while practical filters have limitations in noise reduction.",
          "Ideal filters are only used in digital systems, while practical filters are used in analog systems.",
          "Ideal filters are passive, while practical filters are active."
        ],
        "correctAnswer": "Ideal filters can remove all noise from signals, while practical filters have limitations in noise reduction."
      },
      {
        "question": "What are active filters?",
        "options": [
          "Filters that use passive components such as resistors and capacitors.",
          "Filters that use only inductors for signal processing.",
          "Filters that use operational amplifiers to achieve signal processing.",
          "Filters that use mechanical components for signal filtering."
        ],
        "correctAnswer": "Filters that use operational amplifiers to achieve signal processing."
      },
      {
        "question": "What is the frequency response of a filter?",
        "options": [
          "A measure of how fast a filter responds to changes in frequency.",
          "A measure of how the amplitude of a signal changes with frequency.",
          "A measure of the phase shift of a signal.",
          "A measure of the time delay introduced by the filter."
        ],
        "correctAnswer": "A measure of how the amplitude of a signal changes with frequency."
      },
      {
        "question": "What are Butterworth and Chebyshev filters?",
        "options": [
          "Types of digital filters.",
          "Types of passive filters.",
          "Types of active filters.",
          "Types of analog filters with specific frequency response characteristics."
        ],
        "correctAnswer": "Types of analog filters with specific frequency response characteristics."
      },
      {
        "question": "What is the basic difference between FIR and IIR filters?",
        "options": [
          "FIR filters are passive, while IIR filters are active.",
          "FIR filters have a finite impulse response, while IIR filters have an infinite impulse response.",
          "FIR filters are only used in digital systems, while IIR filters are used in analog systems.",
          "FIR filters are ideal, while IIR filters are practical."
        ],
        "correctAnswer": "FIR filters have a finite impulse response, while IIR filters have an infinite impulse response."
      },
      {
        "question": "What is the primary goal of a low-pass filter?",
        "options": [
          "To allow low-frequency signals to pass through and attenuate high-frequency signals.",
          "To allow high-frequency signals to pass through and attenuate low-frequency signals.",
          "To amplify both low-frequency and high-frequency signals.",
          "To remove all frequencies from the signal."
        ],
        "correctAnswer": "To allow low-frequency signals to pass through and attenuate high-frequency signals."
      },
      {
        "question": "What is the main application of a band-pass filter?",
        "options": [
          "To amplify all frequencies in a signal.",
          "To attenuate all frequencies in a signal.",
          "To pass a specific range of frequencies while attenuating others.",
          "To invert the phase of a signal."
        ],
        "correctAnswer": "To pass a specific range of frequencies while attenuating others."
      },
      {
        "question": "Which type of filter has a ripple in its frequency response?",
        "options": [
          "Low-pass filter.",
          "High-pass filter.",
          "Band-pass filter.",
          "All of the above."
        ],
        "correctAnswer": "All of the above."
      },
      {
        "question": "What is the role of a digital filter in signal processing?",
        "options": [
          "To convert analog signals to digital signals.",
          "To convert digital signals to analog signals.",
          "To remove noise from digital signals.",
          "To convert binary signals to analog signals."
        ],
        "correctAnswer": "To remove noise from digital signals."
      },
      {
        "question": "Which type of filter has a flat frequency response in its passband?",
        "options": [
          "Butterworth filter.",
          "Chebyshev filter.",
          "Elliptic filter.",
          "Bessel filter."
        ],
        "correctAnswer": "Bessel filter."
      },
      {
        "question": "What is the purpose of a notch filter?",
        "options": [
          "To attenuate all frequencies in a signal.",
          "To amplify all frequencies in a signal.",
          "To pass a specific frequency range while attenuating others.",
          "To attenuate a specific frequency while allowing others to pass."
        ],
        "correctAnswer": "To attenuate a specific frequency while allowing others to pass."
      },
      {
        "question": "What is the distinguishing feature of an elliptic filter?",
        "options": [
          "It has a flat frequency response in the passband.",
          "It has a very sharp transition between the passband and stopband.",
          "It has the least amount of ripple in the passband.",
          "It has a maximally flat group delay."
        ],
        "correctAnswer": "It has a very sharp transition between the passband and stopband."
      },
      {
        "question": "Which type of filter is used when both the amplitude and phase response need to be preserved?",
        "options": [
          "Low-pass filter.",
          "High-pass filter.",
          "Band-pass filter.",
          "All-pass filter."
        ],
        "correctAnswer": "All-pass filter."
      },
      {
        "question": "What is the difference between active and passive filters?",
        "options": [
          "Active filters use passive components, while passive filters use active components.",
          "Active filters are more efficient than passive filters.",
          "Passive filters do not require power supply, while active filters do.",
          "Active filters are only used in digital systems."
        ],
        "correctAnswer": "Active filters use passive components, while passive filters use active components."
      },
      {
        "question": "What is the role of a filter in signal processing?",
        "options": [
          "To convert analog signals to digital signals.",
          "To amplify signals.",
          "To remove unwanted frequencies from signals.",
          "To convert digital signals to analog signals."
        ],
        "correctAnswer": "To remove unwanted frequencies from signals."
      },
      {
        "question": "Which filter type offers a trade-off between ripple and steepness of transition?",
        "options": [
          "Bessel filter.",
          "Chebyshev filter.",
          "Butterworth filter.",
          "Elliptic filter."
        ],
        "correctAnswer": "Chebyshev filter."
      },
      {
        "question": "What is the purpose of a digital filter's transfer function?",
        "options": [
          "To determine the stability of the filter.",
          "To define the relationship between the input and output signals.",
          "To determine the frequency response of the filter.",
          "To define the order of the filter."
        ],
        "correctAnswer": "To define the relationship between the input and output signals."
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
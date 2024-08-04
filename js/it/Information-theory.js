const quizData = [
    {
        "question": "Self information should be",
        "options": [
          "Positive",
          "Negative",
          "Positive & Negative",
          "None of the mentioned"
        ],
        "correctAnswer": "Positive",
        "explanation": "Self information is always non negative."
      },
      {
        "question": "The unit of average mutual information is",
        "options": [
          "Bits",
          "Bytes",
          "Bits per symbol",
          "Bytes per symbol"
        ],
        "correctAnswer": "Bits",
        "explanation": "The unit of average mutual information is bits."
      },
      {
        "question": "When probability of error during transmission is 0.5, it indicates that",
        "options": [
          "Channel is very noisy",
          "No information is received",
          "Channel is very noisy & No information is received",
          "None of the mentioned"
        ],
        "correctAnswer": "Channel is very noisy & No information is received",
        "explanation": "When probability of error during transmission is 0.5 then the channel is very noisy and thus no information is received."
      },
      {
        "question": "Binary Huffman coding is a",
        "options": [
          "Prefix condition code",
          "Suffix condition code",
          "Prefix & Suffix condition code",
          "None of the mentioned"
        ],
        "correctAnswer": "Prefix condition code",
        "explanation": "Binary Huffman coding is a prefix condition code."
      },
      {
        "question": "The event with minimum probability has least number of bits.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False",
        "explanation": "In binary Huffman coding the event with maximum probability has least number of bits."
      },
      {
        "question": "The method of converting a word to stream of bits is called as",
        "options": [
          "Binary coding",
          "Source coding",
          "Bit coding",
          "Cipher coding"
        ],
        "correctAnswer": "Source coding",
        "explanation": "Source coding is the method of converting a word to stream of bits that is 0’s and 1’s."
      },
      {
        "question": "When the base of the logarithm is 2, then the unit of measure of information is",
        "options": [
          "Bits",
          "Bytes",
          "Nats",
          "None of the mentioned"
        ],
        "correctAnswer": "Bits",
        "explanation": "When the base of the logarithm is 2 then the unit of measure of information is bits."
      },
      {
        "question": "When X and Y are statistically independent, then I (x,y) is",
        "options": [
          "1",
          "0",
          "Ln 2",
          "Cannot be determined"
        ],
        "correctAnswer": "0",
        "explanation": "When X and Y are statistically independent the measure of information I (x,y) is 0."
      },
      {
        "question": "The self information of random variable is",
        "options": [
          "0",
          "1",
          "Infinite",
          "Cannot be determined"
        ],
        "correctAnswer": "Infinite",
        "explanation": "The self information of a random variable is infinity."
      },
      {
        "question": "Entropy of a random variable is",
        "options": [
          "0",
          "1",
          "Infinite",
          "Cannot be determined"
        ],
        "correctAnswer": "Infinite",
        "explanation": "Entropy of a random variable is also infinity."
      },
      {
        "question": "Which is more efficient method?",
        "options": [
          "Encoding each symbol of a block",
          "Encoding block of symbols",
          "Encoding each symbol of a block & Encoding block of symbols",
          "None of the mentioned"
        ],
        "correctAnswer": "Encoding block of symbols",
        "explanation": "Encoding block of symbols is more efficient than encoding each symbol of a block."
      },
      {
        "question": "Lempel-Ziv algorithm is",
        "options": [
          "Variable to fixed length algorithm",
          "Fixed to variable length algorithm",
          "Fixed to fixed length algorithm",
          "Variable to variable length algorithm"
        ],
        "correctAnswer": "Variable to fixed length algorithm",
        "explanation": "Lempel-Ziv algorithm is a variable to fixed length algorithm."
      },
      {
        "question": "Which of the following is an example of amplitude scaling?",
        "options": [
          "Electronic amplifier",
          "Electronic attenuator",
          "Both amplifier and attenuator",
          "Adder"
        ],
        "correctAnswer": "Both amplifier and attenuator",
        "explanation": "Amplitude scaling refers to multiplication of a constant with the given signal."
      },
      {
        "question": "Resistor performs amplitude scaling when x (t) is voltage, a is resistance and y (t) is output current.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False",
        "explanation": "The given statement is not true. The relation between voltage, current and resistance is given by V = IR. Comparing with equation y (t) = a x (t), we can see that y (t) is the output voltage for given current x (t) with resistance R."
      },
      {
        "question": "Which of the following is an example of physical device which adds the signals?",
        "options": [
          "Radio",
          "Audio mixer",
          "Frequency divider",
          "Subtractor"
        ],
        "correctAnswer": "Audio mixer",
        "explanation": "Audio mixer is a device which combines music and voice signals. It is given by Y (t) = x1 (t) + x2 (t)."
      },
      {
        "question": "AM radio signal is an example for __________",
        "options": [
          "y (t) = a x (t)",
          "y (t) = x1 (t) + x2 (t)",
          "y (t) = x1 (t) * x2 (t)",
          "y (t) = -x(t)"
        ],
        "correctAnswer": "y (t) = x1 (t) * x2 (t)",
        "explanation": "AM radio signal is an example for y (t) = x1 (t) * x2 (t) where, x1 (t) consists of an audio signal plus a dc component and x2 (t) is a sinusoidal signal called carrier wave."
      },
      {
        "question": "Which of the passive component performs differentiation operation?",
        "options": [
          "Resistor",
          "Capacitor",
          "Inductor",
          "Amplifier"
        ],
        "correctAnswer": "Inductor",
        "explanation": "Inductor performs differentiation. It is given by y (t) = L d/dt i(t) where, I (t) denotes current flowing through an inductor of inductance L."
      },
      {
        "question": "Which of the component performs integration operation?",
        "options": [
          "Resistor",
          "Diode",
          "Capacitor",
          "Inductor"
        ],
        "correctAnswer": "Capacitor",
        "explanation": "Capacitor performs integration. V (t) developed across capacitor is given by v (t) = (1/C)* ∫t-∞ i (∂).d∂, I (t) is the current flowing through a capacitor of capacitance C."
      },
      {
        "question": "Time scaling is an operation performed on _______",
        "options": [
          "Dependent variable",
          "Independent variable",
          "Both dependent and independent variable",
          "Neither dependent nor independent variable"
        ],
        "correctAnswer": "Independent variable",
        "explanation": "Time scaling is an example for operations performed on independent variable time."
      },
      {
        "question": "Y (t) = x (2t) is ________",
        "options": [
          "Compressed signal",
          "Expanded signal",
          "Shifted signal",
          "Amplitude scaled signal by a factor of 2"
        ],
        "correctAnswer": "Compressed signal",
        "explanation": "By comparing the given equation with y (t) = x (at) we get a=2. If a>1 then it is compressed version of x (t)."
      },
      {
        "question": "Y (t) = x (t/5) is _______",
        "options": [
          "Compressed signal",
          "Expanded signal",
          "Time shifted signal",
          "Amplitude scaled signal by factor 1/5"
        ],
        "correctAnswer": "Expanded signal",
        "explanation": "y (t) = x (at), comparing this with the given expression we get a = 1/5. If 0<a<1 then it is expanded (stretched) version of x (t)."
      },
      {
        "question": "The process of using a pulse signal to represent information is called _______",
        "options": [
          "Pulse modulation",
          "Frequency modulation",
          "Amplitude modulation",
          "Phase modulation"
        ],
        "correctAnswer": "Pulse modulation",
        "explanation": "In pulse modulation, the information to be transmitted is represented by a series of binary pulses. Since the pulse information is binary in nature analog signal shave to be converted to digital before transmitting."
      },
      {
        "question": "Which of the following is false with respect to pulse modulation?",
        "options": [
          "Less power consumption",
          "Low noise",
          "Degraded signal can be regenerated",
          "Can transmit analog as well as digital waves"
        ],
        "correctAnswer": "Can transmit analog as well as digital waves",
        "explanation": "Analog values cannot be transmitted as such by pulse modulation since it can only transmit binary data. However, the analog signal can be converted into digital using an ADC and then transmitted via pulse modulation."
      },
      {
        "question": "Which of the following is not a form of pulse modulation?",
        "options": [
          "Pulse amplitude modulation",
          "Pulse width modulation",
          "Pulse position modulation",
          "Pulse frequency modulation"
        ],
        "correctAnswer": "Pulse frequency modulation",
        "explanation": "There are four basic forms of pulse modulation. They are: pulse amplitude modulation, pulse width modulation, pulse position modulation pulse code modulation. In any form of pulse modulation, the frequency of the signal is not changed."
      },
      {
        "question": "How many voltage levels are present in a PWM signal?",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctAnswer": "2",
        "explanation": "The amplitude of PWM is binary in nature meaning that it has only two levels. The amplitude of the modulating signals varies the width of the pulses generated."
      },
      {
        "question": "Power consumption is low in pulse modulation.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "In pulse modulation, the carrier is not transmitted continuously but in pulses whose width is determined by the amplitude of the modulating signal. The duty cycle is made in such a way that the carrier is off for a longer time than it bursts hence the average power consumption is low."
      },
      {
        "question": "Which pulse modulation technique is least expensive?",
        "options": [
          "Pulse amplitude modulation",
          "Pulse width modulation",
          "Pulse position modulation",
          "Pulse code modulation"
        ],
        "correctAnswer": "Pulse amplitude modulation",
        "explanation": "Out of all the pulse modulation techniques, Pulse amplitude modulation is the least expensive and simplest to implement. In pulse amplitude modulation, the amplitude of the pulse varies with the amplitude of the modulating signal."
      },
      {
        "question": "Which of the following is false with respect to pulse position modulation?",
        "options": [
          "Can be transmitted in broadband",
          "Modulates a high frequency carrier",
          "Pulse is narrow",
          "Pulse width changes in accordance with the amplitude of modulating signal"
        ],
        "correctAnswer": "Pulse width changes in accordance with the amplitude of modulating signal",
        "explanation": "In PPM, the pulses change position according to the amplitude of the analog signal. The pulses are very narrow. These pulse signals may be transmitted in a baseband form, but in most applications, they modulate a high-frequency radio carrier."
      },
      {
        "question": "Pulse modulation is not used in which of the following?",
        "options": [
          "Telemetry systems",
          "Remote control models",
          "Switch power modes",
          "Communication of airplane with ATC"
        ],
        "correctAnswer": "Communication of airplane with ATC",
        "explanation": "Pulse modulation is used in telemetry systems to monitor spacecraft or missile, RC models, for switching power supplies like regulators and also as audio switching power amplifiers. Communication of airplane with ATC is amplitude modulated waves."
      },
      {
        "question": "The process of signal compression and expansion used to reduce distortion and noise is called _____",
        "options": [
          "Amplification",
          "Companding",
          "Compressing",
          "Modulating"
        ],
        "correctAnswer": "Companding",
        "explanation": "To reduce the effects of noise and distortion in pulse modulation, a process called companding is done. Companding is a process of signal compression and expansion."
      },
      {
        "question": "What type of digital modulation is widely used for digital data transmission?",
        "options": [
          "Pulse amplitude modulation",
          "Pulse width modulation",
          "Pulse position modulation",
          "Pulse code modulation"
        ],
        "correctAnswer": "Pulse code modulation",
        "explanation": "The most widely used technique for digitizing information signals for electronic data transmission is pulse code modulation. It has uniform transmission quality and also can be used when the signal traffic is high."
      },
      {
        "question": "What is the output voltage if the input voltage of a compander with a maximum voltage range of 1 V and a μ of 255 is 0.25?",
        "options": [
          "0V",
          "0.25V",
          "0.5V",
          "0.75V"
        ],
        "correctAnswer": "0.75V",
        "explanation": "The output voltage with maximum voltage range of 1 V & μ of 255 = 0.25 is 0.75V"
      },
      {
        "question": "What is the output voltage if the input voltage of a compander with a maximum voltage range of 1 V and a μ of 255 is 0.8V0?",
        "options": [
          "0.08V",
          "0.458V",
          "1.02V",
          "1.54V"
        ],
        "correctAnswer": "1.02V",
        "explanation": "The output voltage with maximum voltage range of 1 V & μ of 255 = 0.8 is 1.02V"
      },
      {
        "question": "Any digital computer can be used for DSP.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "DSP is the use of a fast digital computer or digital circuitry to perform processing on digital signals. Any digital computer with sufficient speed and memory can be used for DSP."
      },
      {
        "question": "What happens after the signal is passed through the analog to digital converter in a DSP?",
        "options": [
          "Changed back to analog",
          "Stored in a RAM",
          "Amplified",
          "Attenuated"
        ],
        "correctAnswer": "Stored in a RAM",
        "explanation": "When the signal is converted from analog to digital it is a sequence of binary numbers which is stored in the RAM. A user defined code that is usually stored in the ROM performs mathematical and other manipulations after which it is converted back into analog signals."
      },
      {
        "question": "Who is credited with creating the stored program concept?",
        "options": [
          "John Von Neumann",
          "Larry Page",
          "Alan Turing",
          "Ken Thompson"
        ],
        "correctAnswer": "John Von Neumann",
        "explanation": "Physicist John Von Neumann is generally credited with creating the stored program concept that is the basis of operation of all digital computers. Binary words representing computer instructions are stored sequentially in a memory to form a program. The instructions are fetched and executed one at a time at high speed."
      },
      {
        "question": "What is the accessibility limitation of only one data or instruction set at a time from the memory called?",
        "options": [
          "Von Neumann limitation",
          "Von Neumann limit",
          "Von Neumann speed",
          "Von Neumann bottleneck"
        ],
        "correctAnswer": "Von Neumann bottleneck",
        "explanation": "The accessibility limitation of only one data or instruction set at a time from the memory is called as Von Neumann bottleneck. This has the effect of greatly limiting the execution speed."
      },
      {
        "question": "Which type of architecture uses different storage space for program code and the data?",
        "options": [
          "Von Neumann architecture",
          "Harvard architecture",
          "Fragmented architecture",
          "Split cell architecture"
        ],
        "correctAnswer": "Harvard architecture",
        "explanation": "In a Harvard architecture microprocessor, there are two memories, a program or instruction memory, usually a ROM, and a data memory, which is a RAM. Also, there are two data paths into and out of the CPU between the memories. Because both instructions and data can be accessed simultaneously, very high-speed operation is possible."
      },
      {
        "question": "What is the reason for the need of high speed DSP?",
        "options": [
          "Less power consumption at higher speeds",
          "Better processing capabilities",
          "High sampling frequency",
          "Easily programmable"
        ],
        "correctAnswer": "High sampling frequency",
        "explanation": "The time taken for input/output and the processing time together must be smaller than the sampling period to ensure the continuous flow of data. Since high sampling frequencies are needed for accurately converting the analog signal to digital, high speed DSP is a must."
      },
      {
        "question": "Selectivity in a DSP is better than its analog equivalent.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "With DSP, the filters can have characteristics far superior to those of equivalent analog filters. Selectivity can be better because of the ease of controlling binary numbers, and the passband or reject band can be customized to the application."
      },
      {
        "question": "Reduction in the number of binary words required to represent an analog signal is called ________",
        "options": [
          "Undersampling",
          "Oversampling",
          "Data compression",
          "Data minimization"
        ],
        "correctAnswer": "Data compression",
        "explanation": "Data compression is a process that reduces the number of binary words needed to represent a given analog signal. Since analog to digital conversion produces a huge amount of data, for transmission it is a necessity that data is compressed."
      },
      {
        "question": "What is the process of examining the frequency content of a signal?",
        "options": [
          "Signal decoding",
          "Spectrum analysis",
          "Signal analysis",
          "Data analysis"
        ],
        "correctAnswer": "Spectrum analysis",
        "explanation": "Spectrum analysis is the process of examining a signal to determine its frequency content. Algorithms such as discrete Fourier transform (DFT) and FPGA is used to analyze the frequency content of an input signal."
      },
      {
        "question": "The transmission of data by dots and dashes is an example of ___________",
        "options": [
          "Amplitude modulation",
          "Frequency modulation",
          "Continuous wave transmission",
          "Discrete signal transmission"
        ],
        "correctAnswer": "Continuous wave transmission",
        "explanation": "The oscillator generates the carrier and can be switched off and on by a telegraph key to produce the dots and dashes of the International Morse code. Information transmitted in this way is referred to as continuous-wave (CW) transmission. Such a transmitter is rarely used today."
      },
      {
        "question": "What device is used to prevent power from the transmitter from going to the receiver side?",
        "options": [
          "Multiplexer",
          "Duplexer",
          "Monoplexer",
          "Filter"
        ],
        "correctAnswer": "Duplexer",
        "explanation": "A duplexer is a device that is placed just before the antenna in a transducer system. It is basically a switch which allows both transmission and reception but only one at a time."
      },
      {
        "question": "What generates the final carrier frequency?",
        "options": [
          "Oscillator",
          "Modulator",
          "Antenna",
          "Power source"
        ],
        "correctAnswer": "Oscillator",
        "explanation": "An oscillator, in most applications a crystal oscillator, generates the final carrier frequency. A modulator simply adds the information signal and an antenna transmits the signal."
      },
      {
        "question": "Frequency multiplier multiplies the frequency deviation produced by the modulator.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "The frequency multiplier increase the carrier frequency to the desired output frequency, but also it multiplies the frequency deviation produced by the modulator. The design of the transmitter must be such that the frequency multipliers will provide the correct amount of multiplication not only for the carrier frequency but also for the modulation deviation."
      },
      {
        "question": "______ is used to provide continuous tuning over the desired range?",
        "options": [
          "Variable frequency oscillator",
          "Frequency synthesizer",
          "Variable Frequency producer",
          "Frequency multiplier"
        ],
        "correctAnswer": "Variable frequency oscillator",
        "explanation": "A variable frequency oscillator (VFO) is used to provide continuous tuning over a desired range. Using VFO different carrier frequencies can be generated."
      },
      {
        "question": "What is the only oscillator capable of meeting the precision and stability demanded by the FCC?",
        "options": [
          "Armstrong Oscillator",
          "Crystal Oscillator",
          "Hartley oscillator",
          "RC Phase Shift Oscillator"
        ],
        "correctAnswer": "Crystal Oscillator",
        "explanation": "The transmitter must remain on the assigned frequency. It must not drift off or wander from its assigned value despite the many operating conditions, such as wide temperature variations and changes in power supply voltage, that affect frequency. The only oscillator capable of meeting the precision and stability demanded by the FCC is a crystal oscillator."
      },
      {
        "question": "The device that maintains controlled temperature for crystal oscillators are called __________",
        "options": [
          "Crystal stove",
          "Crystal ovens",
          "Crystal chamber",
          "Temperature chamber"
        ],
        "correctAnswer": "Crystal ovens",
        "explanation": "Greater stability of crystal frequency can be achieved by mounting the crystal in sealed, temperature-controlled chambers known as crystal ovens. These devices maintain an absolute constant temperature, ensuring a stable output frequency."
      },
      {
        "question": "What is the maximum frequency of a 16-MHz crystal with a stability of 200 ppm?",
        "options": [
          "1,60,03,200Hz",
          "2,14,65,400Hz",
          "1,36,12,500Hz",
          "4,56,42,863Hz"
        ],
        "correctAnswer": "1,60,03,200Hz",
        "explanation": "The frequency can vary as much as 200 Hz for every 1 MHz of frequency or 200×16=3200Hz. The maximum frequency is 1,60,00,000 + 3200 = 1,60,03,200 Hz."
      },
      {
        "question": "Calculate the transmitter output frequency if the transmitter uses a crystal oscillator with a frequency of 14.9 MHz and a frequency multiplier chain with factors of 2, 3, and 3.",
        "options": [
          "1.564MHz",
          "268.2MHz",
          "264.3MHz",
          "265.6MHz"
        ],
        "correctAnswer": "268.2MHz",
        "explanation": "Total frequency multiplication factor 2 x 3 x 3 = 18. Transmitter output frequency = 14.9 MHz x 18 = 268.2 MHz."
      },
      {
        "question": "Which of the following are the two main characteristics of receivers?",
        "options": [
          "Selectivity and sensitivity",
          "Gain and attenuation",
          "Modulation and demodulation",
          "Multiplexing and demultiplexing"
        ],
        "correctAnswer": "Selectivity and sensitivity",
        "explanation": "A communication receiver must be able to identify and select the desired signal from thousands of others present in the frequency spectrum (selectivity) and to provide sufficient amplification to recover the modulating signal (sensitivity). A receiver with good selectivity will isolate the desired signal in the RF spectrum and eliminate or at least greatly attenuate all other signals."
      },
      {
        "question": "What circuit provides the initial selectivity in a receiver?",
        "options": [
          "Amplifier",
          "Attenuator",
          "Multiplexer",
          "LC tuned circuits"
        ],
        "correctAnswer": "LC tuned circuits",
        "explanation": "Initial selectivity in a receiver is normally obtained by using LC tuned circuits. By carefully controlling the Q of the resonant circuit, we can set the desired selectivity."
      },
      {
        "question": "The ability to pick up week signals by a receiver is called _________",
        "options": [
          "Gain",
          "Amplification",
          "Sensitivity",
          "Selectivity"
        ],
        "correctAnswer": "Sensitivity",
        "explanation": "A communication receiver’s sensitivity, or ability to pick up weak signals, is mainly a function of overall gain, the factor by which an input signal is multiplied to produce the output signal. In general, the higher the gain of a receiver, the better its sensitivity."
      },
      {
        "question": "What is the input signal level that is approximately equal to the average internally generated noise value called?",
        "options": [
          "MDS",
          "MBS",
          "MMD",
          "MSD"
        ],
        "correctAnswer": "MDS",
        "explanation": "The MDS or Minimum Discernible Signal is the input signal level that is approximately equal to the average internally generated noise value. This noise value is called the noise floor of the receiver. MDS is the amount of signal that would produce the same audio power output as the noise floor signal. The MDS is usually expressed in dBm."
      },
      {
        "question": "Analog signals : Signal to noise ratio:: Digital signals _________",
        "options": [
          "Signal Attenuation",
          "Bit error rate",
          "Error rate",
          "Digital noise ratio"
        ],
        "correctAnswer": "Bit error rate",
        "explanation": "For analog signals, the signal-to-noise ratio is the main consideration in analog signals. For digital signal transmission, the bit error rate (BER) is the main consideration. BER is the number of errors made in the transmission of many serial data bits."
      },
      {
        "question": "A sensitive and selective receiver can be made using only amplifiers, selective filters, and a demodulator.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A sensitive and selective receiver can be made using only amplifiers, selective filters and a demodulator. This is called a tuned radio frequency or TRF receiver. Early radios used this design. However, such a receiver does not usually deliver the kind of performance expected in modern communications applications."
      },
      {
        "question": "What type of receivers converts all incoming frequency into a lower frequency for better selectivity and sensitivity?",
        "options": [
          "Analogous receivers",
          "Superheterodyne receivers",
          "Digital receiver",
          "Crystal receiver"
        ],
        "correctAnswer": "Superheterodyne receivers",
        "explanation": "Superheterodyne receivers convert all incoming signals to a lower frequency, known as the intermediate frequency (IF), at which a single set of amplifiers and filters is used to provide a fixed level of sensitivity and selectivity. Most of the gain and selectivity in a superheterodyne receiver are obtained in the IF amplifiers."
      },
      {
        "question": "What is the output of a mixer circuit?",
        "options": [
          "Sum of frequencies",
          "Difference of frequencies",
          "Sum and difference of frequencies",
          "Multiplication of frequencies"
        ],
        "correctAnswer": "Sum and difference of frequencies",
        "explanation": "The key circuit is the mixer, which acts as a simple amplitude modulator to produce sum and difference frequencies. The incoming signal is mixed with a local oscillator signal to produce this conversion."
      },
      {
        "question": "What is connected between the antenna and the mixer to avoid oscillator radiation?",
        "options": [
          "LNA",
          "Attenuator",
          "Duplexer",
          "Power amplifier"
        ],
        "correctAnswer": "LNA",
        "explanation": "LNA or low noise amplifier is placed in between the antenna and the mixer. The oscillator signal is relatively strong and some of it can leak through and appear at the input of the mixer. The RF amplifier between the mixer and the antenna isolates the two, significantly reducing any local oscillator radiation."
      },
      {
        "question": "Multiplexing increases the number of communication channels for transmission.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Multiplexing is the process of simultaneously transmitting two or more individual signals over a single communication channel, cable or wireless. In effect, it increases the number of communication channels so that more information can be transmitted."
      },
      {
        "question": "In which of the following systems multiplexing is not necessary?",
        "options": [
          "Telemetry",
          "TV broadcasting",
          "Satellites",
          "Continuous wave transmission"
        ],
        "correctAnswer": "Continuous wave transmission",
        "explanation": "Continuous wave transmission such as morse code, multiplexing is not necessary since only two voltage levels are present and each bit is sent one by one. Also, only one information signal is transmitted whereas in telemetry, TV and satellite communications numerous information is transmitted hence multiplexing is required."
      },
      {
        "question": "Time division multiplexing: Digital signal:: Frequency division multiplexing:?",
        "options": [
          "Pulse code modulated signal",
          "Continuous wave signals",
          "Analog signal",
          "Pulse position modulated signal"
        ],
        "correctAnswer": "Analog signal",
        "explanation": "The two most common types of multiplexing are frequency-division multiplexing (FDM) and time-division multiplexing (TDM). Two variations of these basic methods are frequency-division multiple access (FDMA) and time-division multiple access (TDMA). In general, FDM systems are used for analog information and TDM systems are used for digital information."
      },
      {
        "question": "What type of multiplexing is widely used in cellphones?",
        "options": [
          "Time division multiplexing",
          "Frequency division multiplexing",
          "Code division multiplexing",
          "Spatial multiplexing"
        ],
        "correctAnswer": "Code division multiplexing",
        "explanation": "Another form of multiple accesses is known as code-division multiple access (CDMA). It is widely used in cell phone systems to allow many cell phone subscribers to use a common bandwidth at the same time. This system uses special codes assigned to each user that can be identified. CDMA uses a technique called spread spectrum to make this type of multiplexing possible."
      },
      {
        "question": "The transmission of multiple signals in a common frequency without interference is called _______",
        "options": [
          "Time division multiplexing",
          "Frequency division multiplexing",
          "Code division multiplexing",
          "Spatial multiplexing"
        ],
        "correctAnswer": "Spatial multiplexing",
        "explanation": "Spatial multiplexing is the term used to describe the transmission of multiple wireless signals on a common frequency in such a way that they do not interfere with one another. One way of doing this is to use low-power transmissions so that the signals do not interfere with one another. When very low power is used, the signals do not travel very far. The transmission distance is a function of the power level, frequency, and antenna height."
      },
      {
        "question": "For frequency division multiplexing who defines the channel bandwidth?",
        "options": [
          "FCC",
          "ARNIC",
          "FAA",
          "CCA"
        ],
        "correctAnswer": "FCC",
        "explanation": "The bandwidths of radio channels vary, and are usually determined by FCC regulations and the type of radio service involved. Regardless of the type of channel, a wide bandwidth can be shared for the purpose of transmitting many signals at the same time."
      },
      {
        "question": "What is the individual carrier frequency of each signal called?",
        "options": [
          "Subcarrier",
          "Frequency carrier",
          "Modulated carrier",
          "Coded carrier"
        ],
        "correctAnswer": "Subcarrier",
        "explanation": "Each signal to be transmitted feeds a modulator circuit. The carrier for each modulator (fc) is on a different frequency. The carrier frequencies are usually equally spaced from one another over a specific frequency range. These carriers are referred to as subcarriers."
      },
      {
        "question": "Which circuit does the actual multiplexing process in frequency division multiplexing?",
        "options": [
          "Linear mixer",
          "Oscillator",
          "RF amplifier",
          "Duplexer"
        ],
        "correctAnswer": "Linear mixer",
        "explanation": "The modulator outputs containing the sideband information are added algebraically in a linear mixer; no modulation or generation of sidebands takes place. The resulting output signal is a composite of all the modulated subcarriers. This signal can be used to modulate a radio transmitter or can itself be transmitted over the single communication channel. Alternatively, the composite signal can become one input to another multiplexed system."
      },
      {
        "question": "Which of the following device is used to demultiplex the received signal?",
        "options": [
          "Allpass filters",
          "Bandpass filters",
          "Bandstop filters",
          "Differential filters"
        ],
        "correctAnswer": "Bandpass filters",
        "explanation": "A receiver picks up the signal and demodulates it, recovering the composite signal. This is sent to a group of bandpass filters, each centered on one of the carrier frequencies. Each filter passes only its channel and rejects all others. A channel demodulator then recovers each original input signal."
      },
      {
        "question": "Which of the following system uses FM for the subcarriers?",
        "options": [
          "FM II system",
          "FM/FM system",
          "FM/AM system",
          "2 stage FM system"
        ],
        "correctAnswer": "FM/FM system",
        "explanation": "Generally, the individual signals which require multiplexing are frequency modulated. These signals are then added up by the mixer and the resulting output signal is again frequency modulated before transmission."
      },
      {
        "question": "A cable TV service uses a single coaxial cable with a bandwidth of 860 MHz to transmit multiple TV signals to subscribers. Each TV signal is 6 MHz wide. How many channels can be carried?",
        "options": [
          "143",
          "123",
          "100",
          "150"
        ],
        "correctAnswer": "143",
        "explanation": "Total channels = 860/6 = 143.33 or 143."
      },
      {
        "question": "Reset is a signal that is used for the initialization of the hardware.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Hardware is not capable of doing the initialization on its own, so reset is used to initialize the hardware in the beginning. Reset clears any pending event or errors in the system and brings it back to its initial state."
      },
      {
        "question": "How many types of resets are there in hardware design?",
        "options": [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        "correctAnswer": "Two",
        "explanation": "There are two types of resets in hardware designs: Asynchronous reset and synchronous reset. Asynchronous reset works independently of the clock while synchronous reset works with respect to the clock."
      },
      {
        "question": "In synchronous reset, reset is sampled with respect to _______",
        "options": [
          "Enable signal",
          "Data input signal",
          "Clock signal",
          "Output signal"
        ],
        "correctAnswer": "Clock signal",
        "explanation": "In synchronous reset, the reset signal is sampled with respect to the clock signal. After the reset signal is enabled, it won’t change until the next active clock edge. The output will change only with the positive edge of the clock."
      },
      {
        "question": "Which of the following is an advantage of a synchronous reset?",
        "options": [
          "It is slow",
          "It requires a clock signal to reset the circuit",
          "It filters the reset signal",
          "It needs a stretched reset"
        ],
        "correctAnswer": "It filters the reset signal",
        "explanation": "Synchronous reset filters the reset signal. It prevents the circuit from glitches and results in smooth functioning. Glitches don’t happen in synchronous reset because it is in synchronization with the clock signal."
      },
      {
        "question": "In asynchronous reset, reset is sampled independently of the _______",
        "options": [
          "Enable signal",
          "Data input signal",
          "Clock signal",
          "Output signal"
        ],
        "correctAnswer": "Clock signal",
        "explanation": "In asynchronous reset, reset is sampled independently of the clock signal. It means, after the reset signal is enabled, it will start effective immediately and it will not wait or check for the clock edges."
      },
      {
        "question": "Synchronous reset is a fast reset.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False",
        "explanation": "Synchronous reset is slow as it requires clock signal due to which it experience clock cycle related latency. Asynchronous reset is a fast reset since it can be reset without a clock signal and hence high speeds can be achieved."
      },
      {
        "question": "Which of the following is NOT an advantage of asynchronous reset?",
        "options": [
          "It is fast",
          "It doesn’t require a clock signal to reset the circuit",
          "Reset gets the highest priority",
          "It may cause metastability"
        ],
        "correctAnswer": "It may cause metastability",
        "explanation": "Asynchronous reset doesn’t require an active clock signal to get flip-flops to a known state, it also has a lower latency as compared to synchronous reset due to which flip-flops behave in a non-predictive manner. The reset signal must be synchronized with the clock, when it is not, it causes metastability issues."
      },
      {
        "question": "Asynchronous circuit is also called ________ circuit.",
        "options": [
          "Combinational",
          "Self-timed",
          "Clock circuit",
          "Delayed"
        ],
        "correctAnswer": "Self-timed",
        "explanation": "Asynchronous circuit is also called self-timed circuit because it is not governed by a global clock signal, it mostly uses signals which show completion of operations and instructions, defined by simple data transfer protocols."
      },
      {
        "question": "Designation used by a flip-flop for the reset is ________",
        "options": [
          "PRE",
          "CLR",
          "D",
          "Q"
        ],
        "correctAnswer": "CLR",
        "explanation": "The flip-flop is SET when the preset (PRE) input is activated without considering the synchronous inputs or the clock. The flip-flop is RESET when the clear (CLR) input is activated without considering the synchronous inputs or the clock."
      },
      {
        "question": "Preset and clear are asynchronous inputs.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Preset (PRE) and clear (CLR) are asynchronous inputs as they work regardless of the clock input signal. They can set or reset the flip-flop without concerning about the status of the clock."
      },
      {
        "question": "The transmission of data by dots and dashes is an example of ___________",
        "options": [
          "Amplitude modulation",
          "Frequency modulation",
          "Continuous wave transmission",
          "Discrete signal transmission"
        ],
        "correctAnswer": "Continuous wave transmission",
        "explanation": "The oscillator generates the carrier and can be switched off and on by a telegraph key to produce the dots and dashes of the International Morse code. Information transmitted in this way is referred to as continuous-wave (CW) transmission. Such a transmitter is rarely used today."
      },
      {
        "question": "What device is used to prevent power from the transmitter from going to the receiver side?",
        "options": [
          "Multiplexer",
          "Duplexer",
          "Monoplexer",
          "Filter"
        ],
        "correctAnswer": "Duplexer",
        "explanation": "A duplexer is a device that is placed just before the antenna in a transducer system. It is basically a switch which allows both transmission and reception but only one at a time."
      },
      {
        "question": "What generates the final carrier frequency?",
        "options": [
          "Oscillator",
          "Modulator",
          "Antenna",
          "Power source"
        ],
        "correctAnswer": "Oscillator",
        "explanation": "An oscillator, in most applications a crystal oscillator, generates the final carrier frequency. A modulator simply adds the information signal and an antenna transmits the signal."
      },
      {
        "question": "Frequency multiplier multiplies the frequency deviation produced by the modulator.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "The frequency multiplier increase the carrier frequency to the desired output frequency, but also it multiplies the frequency deviation produced by the modulator. The design of the transmitter must be such that the frequency multipliers will provide the correct amount of multiplication not only for the carrier frequency but also for the modulation deviation."
      },
      {
        "question": "______ is used to provide continuous tuning over the desired range?",
        "options": [
          "Variable frequency oscillator",
          "Frequency synthesizer",
          "Variable Frequency producer",
          "Frequency multiplier"
        ],
        "correctAnswer": "Variable frequency oscillator",
        "explanation": "A variable frequency oscillator (VFO) is used to provide continuous tuning over a desired range. Using VFO different carrier frequencies can be generated."
      },
      {
        "question": "What is the only oscillator capable of meeting the precision and stability demanded by the FCC?",
        "options": [
          "Armstrong Oscillator",
          "Crystal Oscillator",
          "Hartley oscillator",
          "RC Phase Shift Oscillator"
        ],
        "correctAnswer": "Crystal Oscillator",
        "explanation": "The transmitter must remain on the assigned frequency. It must not drift off or wander from its assigned value despite the many operating conditions, such as wide temperature variations and changes in power supply voltage, that affect frequency. The only oscillator capable of meeting the precision and stability demanded by the FCC is a crystal oscillator."
      },
      {
        "question": "The device that maintains controlled temperature for crystal oscillators are called ________",
        "options": [
          "Crystal stove",
          "Crystal ovens",
          "Crystal chamber",
          "Temperature chamber"
        ],
        "correctAnswer": "Crystal ovens",
        "explanation": "Greater stability of crystal frequency can be achieved by mounting the crystal in sealed, temperature-controlled chambers known as crystal ovens. These devices maintain an absolute constant temperature, ensuring a stable output frequency."
      },
      {
        "question": "What is the maximum frequency of a 16-MHz crystal with a stability of 200 ppm?",
        "options": [
          "1,60,03,200Hz",
          "2,14,65,400Hz",
          "1,36,12,500Hz",
          "4,56,42,863Hz"
        ],
        "correctAnswer": "1,60,03,200Hz",
        "explanation": "The frequency can vary as much as 200 Hz for every 1 MHz of frequency or 200×16=3200Hz. The maximum frequency is 1,60,00,000 + 3200 = 1,60,03,200 Hz."
      },
      {
        "question": "Calculate the transmitter output frequency if the transmitter uses a crystal oscillator with a frequency of 14.9 MHz and a frequency multiplier chain with factors of 2, 3, and 3.",
        "options": [
          "1.564MHz",
          "268.2MHz",
          "264.3MHz",
          "265.6MHz"
        ],
        "correctAnswer": "268.2MHz",
        "explanation": "Total frequency multiplication factor 2 x 3 x 3 = 18\nTransmitter output frequency = 14.9 MHz x 18 = 268.2 MHz."
      },
      {
        "question": "Calculate the frequency for maximum drift of crystal if The crystal has a stability of 6300 ppm and an output frequency of 268.2MHz and frequency multiplier chain with factors of 2, 3, and 3.",
        "options": [
          "123.5MHz",
          "423.2MHz",
          "269.65MHz",
          "235.1MHz"
        ],
        "correctAnswer": "269.65MHz",
        "explanation": "Variation = 300ppm = 0.03%\nThis variation is multiplied by the frequency multiplier chain, yielding\n0.03 percent x 18 =60.54 percent. Now, 268.2 MHz x 0.0054 = 1.45 MHz.\nThus, the frequency of the transmitter output is 268.2 + 1.45 MHz. The maximum frequency is\n268.2 + 1.45 = 269.65 MHz."
      },
      {
        "question": "What is the minimum frequency of a 16-MHz crystal with a stability of 200 ppm?",
        "options": [
          "1,60,03,200Hz",
          "2,14,65,400Hz",
          "1,59,96,800Hz",
          "4,56,42,863Hz"
        ],
        "correctAnswer": "1,59,96,800Hz",
        "explanation": "The frequency can vary as much as 200 Hz for every 1 MHz of frequency or 200×16=3200Hz. The maximum frequency is 16,000,000 – 3200 = 1,59,96,800 Hz."
      },
      {
        "question": "Which of the following are the two main characteristics of receivers?",
        "options": [
          "Selectivity and sensitivity",
          "Gain and attenuation",
          "Modulation and demodulation",
          "Multiplexing and demultiplexing"
        ],
        "correctAnswer": "Selectivity and sensitivity",
        "explanation": "A communication receiver must be able to identify and select the desired signal from thousands of others present in the frequency spectrum (selectivity) and to provide sufficient amplification to recover the modulating signal (sensitivity). A receiver with good selectivity will isolate the desired signal in the RF spectrum and eliminate or at least greatly attenuate all other signals."
      },
      {
        "question": "What circuit provides the initial selectivity in a receiver?",
        "options": [
          "Amplifier",
          "Attenuator",
          "Multiplexer",
          "LC tuned circuits"
        ],
        "correctAnswer": "LC tuned circuits",
        "explanation": "Initial selectivity in a receiver is normally obtained by using LC tuned circuits. By carefully controlling the Q of the resonant circuit, we can set the desired selectivity."
      },
      {
        "question": "The ability to pick up weak signals by a receiver is called _________",
        "options": [
          "Gain",
          "Amplification",
          "Sensitivity",
          "Selectivity"
        ],
        "correctAnswer": "Sensitivity",
        "explanation": "A communication receiver’s sensitivity, or ability to pick up weak signals, is mainly a function of overall gain, the factor by which an input signal is multiplied to produce the output signal. In general, the higher the gain of a receiver, the better its sensitivity."
      },
      {
        "question": "What is the input signal level that is approximately equal to the average internally generated noise value called?",
        "options": [
          "MDS",
          "MBS",
          "MMD",
          "MSD"
        ],
        "correctAnswer": "MDS",
        "explanation": "The MDS or Minimum Discernible Signal is the input signal level that is approximately equal to the average internally generated noise value. This noise value is called the noise floor of the receiver. MDS is the amount of signal that would produce the same audio power output as the noise floor signal. The MDS is usually expressed in dBm."
      },
      {
        "question": "Analog signals : Signal to noise ratio:: Digital signals _________",
        "options": [
          "Signal Attenuation",
          "Bit error rate",
          "Error rate",
          "Digital noise ratio"
        ],
        "correctAnswer": "Bit error rate",
        "explanation": "For analog signals, the signal-to-noise ratio is the main consideration in analog signals. For digital signal transmission, the bit error rate (BER) is the main consideration. BER is the number of errors made in the transmission of many serial data bits."
      },
      {
        "question": "A sensitive and selective receiver can be made using only amplifiers, selective filters, and a demodulator.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "A sensitive and selective receiver can be made using only amplifiers, selective filters and a demodulator. This is called a tuned radio frequency or TRF receiver. Early radios used this design. However, such a receiver does not usually deliver the kind of performance expected in modern communications applications."
      },
      {
        "question": "What type of receivers converts all incoming frequency into a lower frequency for better selectivity and sensitivity?",
        "options": [
          "Analogous receivers",
          "Superheterodyne receivers",
          "Digital receiver",
          "Crystal receiver"
        ],
        "correctAnswer": "Superheterodyne receivers",
        "explanation": "Superheterodyne receivers convert all incoming signals to a lower frequency, known as the intermediate frequency (IF), at which a single set of amplifiers and filters is used to provide a fixed level of sensitivity and selectivity. Most of the gain and selectivity in a superheterodyne receiver are obtained in the IF amplifiers."
      },
      {
        "question": "What is the output of a mixer circuit?",
        "options": [
          "Sum of frequencies",
          "Difference of frequencies",
          "Sum and difference of frequencies",
          "Multiplication of frequencies"
        ],
        "correctAnswer": "Sum and difference of frequencies",
        "explanation": "The key circuit is the mixer, which acts as a simple amplitude modulator to produce sum and difference frequencies. The incoming signal is mixed with a local oscillator signal to produce this conversion."
      },
      {
        "question": "What is connected between the antenna and the mixer to avoid oscillator radiation?",
        "options": [
          "LNA",
          "Attenuator",
          "Duplexer",
          "Power amplifier"
        ],
        "correctAnswer": "LNA",
        "explanation": "LNA or low noise amplifier is placed in between the antenna and the mixer. The oscillator signal is relatively strong and some of it can leak through and appear at the input of the mixer. The RF amplifier between the mixer and the antenna isolates the two, significantly reducing any local oscillator radiation."
      },
      {
        "question": "Which of the following is not an advantage of using RF amplifiers in the initial stage of signal selection?",
        "options": [
          "Low noise",
          "Reduced oscillator radiation",
          "Better selectivity",
          "Less power consumption"
        ],
        "correctAnswer": "Less power consumption",
        "explanation": "The use of RF amplifiers in the initial stage of signal selection reduces the effect of noise.RF amplifiers improve sensitivity, because of the extra gain; improve selectivity, because of the added tuned circuits; and improve the S/N ratio. Further, spurious signals are more effectively rejected, minimizing unwanted signal generation in the mixer."
      },
      {
        "question": "The LNA of a transducer has failed during the transmission of a signal. Which component’s failure has caused this?",
        "options": [
          "Duplexer",
          "RF amplifier",
          "Antenna",
          "Mixer"
        ],
        "correctAnswer": "Duplexer",
        "explanation": "A duplexer is a device which acts as a switch and stops the high power transmission signals from entering into the receiver, which is tuned to handle very low power for better sensitivity. When the duplexer fails, the high power signals enter the receiver where the Low noise amplifier is damaged."
      },
      {
        "question": "What type of oscillators are used to input a wide range of frequencies to the IF amplifier?",
        "options": [
          "LC oscillators",
          "Crystal oscillators",
          "Variable frequency oscillators",
          "Diode oscillators"
        ],
        "correctAnswer": "Variable frequency oscillators",
        "explanation": "The local oscillator is usually a variable frequency oscillator or a frequency synthesizer so that its frequency can be adjusted over a relatively wide range. As the local-oscillator frequency is changed, the mixer translates a wide range of input frequencies to the fixed IF."
      },
      {
        "question": "Reset is a signal that is used for the initialization of the hardware.\na) True\nb) False",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Hardware is not capable of doing the initialization on its own, so reset is used to initialize the hardware in the beginning. Reset clears any pending event or errors in the system and brings it back to its initial state."
      },
      {
        "question": "How many types of resets are there in hardware design?\na) One\nb) Two\nc) Three\nd) Four",
        "options": [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        "correctAnswer": "Two",
        "explanation": "There are two types of resets in hardware designs: Asynchronous reset and synchronous reset. Asynchronous reset works independently of the clock while synchronous reset works with respect to the clock."
      },
      {
        "question": "In synchronous reset, reset is sampled with respect to _______\na) Enable signal\nb) Data input signal\nc) Clock signal\nd) Output signal",
        "options": [
          "Enable signal",
          "Data input signal",
          "Clock signal",
          "Output signal"
        ],
        "correctAnswer": "Clock signal",
        "explanation": "In synchronous reset, the reset signal is sampled with respect to the clock signal. After the reset signal is enabled, it won’t change until the next active clock edge. The output will change only with the positive edge of the clock."
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
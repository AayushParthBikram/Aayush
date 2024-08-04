const quizData = [
  {
    "question": "What is a binary number system?",
    "options": [
      "A system that only uses odd numbers.",
      "A system that only uses even numbers.",
      "A system that uses two symbols, 0 and 1, to represent numbers.",
      "A system that uses ten symbols, 0-9, to represent numbers."
    ],
    "correctAnswer": "A system that uses two symbols, 0 and 1, to represent numbers."
  },
  {
    "question": "What is the decimal equivalent of the binary number 101?",
    "options": [
      "1",
      "3",
      "5",
      "7"
    ],
    "correctAnswer": "5"
  },
  {
    "question": "What are logic levels in digital circuits?",
    "options": [
      "Different voltage levels that represent binary numbers.",
      "Different current levels that represent analog values.",
      "Different frequency levels that represent digital values.",
      "Different temperature levels that represent logic states."
    ],
    "correctAnswer": "Different voltage levels that represent binary numbers."
  },
  {
    "question": "What does 'high' logic level typically represent in digital circuits?",
    "options": [
      "Binary value 0.",
      "Binary value 1.",
      "Undefined logic state.",
      "Analog value 5V."
    ],
    "correctAnswer": "Binary value 1."
  },
  {
    "question": "What are logic gates?",
    "options": [
      "Physical barriers in digital circuits.",
      "Components that perform mathematical calculations.",
      "Devices that amplify digital signals.",
      "Devices that perform logical operations based on input signals."
    ],
    "correctAnswer": "Devices that perform logical operations based on input signals."
  },
  {
    "question": "What is the NOT gate's behavior?",
    "options": [
      "It outputs the inverse of the input.",
      "It adds two binary numbers.",
      "It multiplies two binary numbers.",
      "It performs logical OR operation."
    ],
    "correctAnswer": "It outputs the inverse of the input."
  },
  {
    "question": "What is Boolean algebra?",
    "options": [
      "A branch of mathematics that studies complex numbers.",
      "A branch of algebra dealing with logic and binary values.",
      "A method of performing addition and subtraction of binary numbers.",
      "A technique used in quantum physics."
    ],
    "correctAnswer": "A branch of algebra dealing with logic and binary values."
  },
  {
    "question": "What is the basic operation of Boolean algebra?",
    "options": [
      "Multiplication",
      "Division",
      "Addition",
      "Subtraction"
    ],
    "correctAnswer": "Addition"
  },
  {
    "question": "What is the Sum-of-Products (SOP) method?",
    "options": [
      "A method of multiplying binary numbers.",
      "A method of representing binary numbers in decimal form.",
      "A method of simplifying Boolean expressions using AND and OR operations.",
      "A method of performing binary addition."
    ],
    "correctAnswer": "A method of simplifying Boolean expressions using AND and OR operations."
  },
  {
    "question": "How is the SOP form represented?",
    "options": [
      "As a single product term.",
      "As a single sum term.",
      "As a combination of product terms.",
      "As a combination of sum terms."
    ],
    "correctAnswer": "As a combination of product terms."
  },
  {
    "question": "What is a multiplexer (MUX)?",
    "options": [
      "A device that performs arithmetic operations.",
      "A device that generates random numbers.",
      "A device that selects one of several input lines and forwards it to the output.",
      "A device that converts analog signals to digital signals."
    ],
    "correctAnswer": "A device that selects one of several input lines and forwards it to the output."
  },
  {
    "question": "What is the primary purpose of a multiplexer?",
    "options": [
      "To generate random signals.",
      "To perform logical operations.",
      "To select and forward one of multiple input signals to the output.",
      "To amplify input signals."
    ],
    "correctAnswer": "To select and forward one of multiple input signals to the output."
  },
  {
    "question": "What is a demultiplexer (DEMUX)?",
    "options": [
      "A device that generates random numbers.",
      "A device that performs arithmetic operations.",
      "A device that reverses the operation of a multiplexer, distributing input to multiple outputs.",
      "A device that amplifies input signals."
    ],
    "correctAnswer": "A device that reverses the operation of a multiplexer, distributing input to multiple outputs."
  },
  {
    "question": "What is the main purpose of a demultiplexer?",
    "options": [
      "To perform logical operations.",
      "To generate random signals.",
      "To reverse the operation of a multiplexer and distribute input signals to multiple outputs.",
      "To amplify input signals."
    ],
    "correctAnswer": "To reverse the operation of a multiplexer and distribute input signals to multiple outputs."
  },
  {
    "question": "What is a decoder?",
    "options": [
      "A device that converts digital signals to analog signals.",
      "A device that generates random numbers.",
      "A device that performs arithmetic operations.",
      "A device that converts a binary input into a corresponding output code."
    ],
    "correctAnswer": "A device that converts a binary input into a corresponding output code."
  },
  {
    "question": "What is the primary use of a decoder?",
    "options": [
      "To generate random codes.",
      "To perform logical operations.",
      "To convert a binary input code into a corresponding output code.",
      "To amplify signals."
    ],
    "correctAnswer": "To convert a binary input code into a corresponding output code."
  },
  {
    "question": "What is an encoder?",
    "options": [
      "A device that converts analog signals to digital signals.",
      "A device that performs arithmetic operations.",
      "A device that generates random numbers.",
      "A device that converts an input code into a binary output code."
    ],
    "correctAnswer": "A device that converts an input code into a binary output code."
  },
  {
    "question": "What is the primary function of an encoder?",
    "options": [
      "To generate random codes.",
      "To perform logical operations.",
      "To convert an input code into a binary output code.",
      "To amplify signals."
    ],
    "correctAnswer": "To convert an input code into a binary output code."
  },
  {
    "question": "What is binary addition?",
    "options": [
      "A method of subtracting binary numbers.",
      "A method of performing arithmetic operations on decimal numbers.",
      "A method of converting decimal numbers to binary.",
      "A method of adding binary numbers."
    ],
    "correctAnswer": "A method of adding binary numbers."
  },
  {
    "question": "What is binary subtraction?",
    "options": [
      "A method of adding binary numbers.",
      "A method of performing arithmetic operations on decimal numbers.",
      "A method of converting decimal numbers to binary.",
      "A method of subtracting binary numbers."
    ],
    "correctAnswer": "A method of subtracting binary numbers."
  },
  {
    "question": "What are unsigned binary numbers?",
    "options": [
      "Binary numbers without a sign bit.",
      "Binary numbers with a sign bit.",
      "Decimal numbers without a sign.",
      "Decimal numbers with a sign."
    ],
    "correctAnswer": "Binary numbers without a sign bit."
  },
  {
    "question": "What is the purpose of signed binary numbers?",
    "options": [
      "To perform logical operations.",
      "To represent positive and negative values using binary representation.",
      "To perform arithmetic operations only on positive values.",
      "To generate random binary numbers."
    ],
    "correctAnswer": "To represent positive and negative values using binary representation."
  },
  {
    "question": "What is an RS flip-flop?",
    "options": [
      "A flip-flop that performs random state transitions.",
      "A flip-flop that stores a single bit of data.",
      "A flip-flop that performs arithmetic operations.",
      "A flip-flop that has Reset and Set inputs for state control."
    ],
    "correctAnswer": "A flip-flop that has Reset and Set inputs for state control."
  },
  {
    "question": "What are the two stable states of an RS flip-flop?",
    "options": [
      "Reset and Set",
      "0 and 1",
      "True and False",
      "On and Off"
    ],
    "correctAnswer": "0 and 1"
  },
  {
    "question": "What are gated flip-flops?",
    "options": [
      "Flip-flops used in electronic gates.",
      "Flip-flops that can only store one bit of data.",
      "Flip-flops with additional control inputs that enable or disable the clock signal.",
      "Flip-flops that use gates as input."
    ],
    "correctAnswer": "Flip-flops with additional control inputs that enable or disable the clock signal."
  },
  {
    "question": "What is the purpose of gating the clock signal in flip-flops?",
    "options": [
      "To generate random clock signals.",
      "To save power by reducing clock frequency.",
      "To control when the flip-flop state can be updated.",
      "To generate clock signals of higher frequency."
    ],
    "correctAnswer": "To control when the flip-flop state can be updated."
  },
  {
    "question": "What is an edge-triggered flip-flop?",
    "options": [
      "A flip-flop that triggers on both edges of the clock signal.",
      "A flip-flop that triggers on the falling edge of the clock signal.",
      "A flip-flop that triggers on the rising edge of the clock signal.",
      "A flip-flop that triggers on random edges of the clock signal."
    ],
    "correctAnswer": "A flip-flop that triggers on either the rising or falling edge of the clock signal."
  },
  {
    "question": "What is the advantage of using edge-triggered flip-flops?",
    "options": [
      "They consume less power.",
      "They trigger on every clock cycle.",
      "They generate random clock signals.",
      "They eliminate the need for clock signals."
    ],
    "correctAnswer": "They consume less power."
  },
  {
    "question": "What are master-slave flip-flops?",
    "options": [
      "Flip-flops used in digital watches.",
      "Flip-flops that consist of two separate flip-flops connected in series.",
      "Flip-flops with extra gates for data manipulation.",
      "Flip-flops that use master and slave clocks."
    ],
    "correctAnswer": "Flip-flops that consist of two separate flip-flops connected in series."
  },
  {
    "question": "What is the purpose of using master-slave flip-flops?",
    "options": [
      "To save power.",
      "To double the clock frequency.",
      "To increase the storage capacity of flip-flops.",
      "To improve noise immunity and stability."
    ],
    "correctAnswer": "To improve noise immunity and stability."
  },
  {
    "question": "What are registers in digital circuits?",
    "options": [
      "Devices that perform logical operations.",
      "Devices that store and manipulate data temporarily.",
      "Devices that generate clock signals.",
      "Devices that generate random signals."
    ],
    "correctAnswer": "Devices that store and manipulate data temporarily."
  },
  {
    "question": "What types of data can registers store?",
    "options": [
      "Only binary data.",
      "Binary and decimal data.",
      "Binary and analog data.",
      "Analog and digital data."
    ],
    "correctAnswer": "Only binary data."
  },
  {
    "question": "What are shift registers used for?",
    "options": [
      "To generate random signals.",
      "To perform arithmetic operations.",
      "To store large amounts of data.",
      "To shift data serially from one stage to another."
    ],
    "correctAnswer": "To shift data serially from one stage to another."
  },
  {
    "question": "What is a common application of shift registers?",
    "options": [
      "Memory storage in microcontrollers.",
      "Generating clock signals.",
      "Generating random numbers.",
      "Audio signal processing."
    ],
    "correctAnswer": "Memory storage in microcontrollers."
  },
  {
    "question": "What are asynchronous counters?",
    "options": [
      "Counters that count up and down simultaneously.",
      "Counters that are slower than synchronous counters.",
      "Counters that count based on external clock signals.",
      "Counters that don't rely on clock signals for state transition."
    ],
    "correctAnswer": "Counters that don't rely on clock signals for state transition."
  },
  {
    "question": "What is the advantage of using asynchronous counters?",
    "options": [
      "They are faster than synchronous counters.",
      "They are simpler in design.",
      "They have higher noise immunity.",
      "They generate random numbers."
    ],
    "correctAnswer": "They have higher noise immunity."
  },
  {
    "question": "What are synchronous counters?",
    "options": [
      "Counters that rely on clock signals for state transition.",
      "Counters that count only even numbers.",
      "Counters that count faster than asynchronous counters.",
      "Counters that count both up and down."
    ],
    "correctAnswer": "Counters that rely on clock signals for state transition."
  },
  {
    "question": "What is the main advantage of using synchronous counters?",
    "options": [
      "They can count faster than asynchronous counters.",
      "They have simpler design.",
      "They generate random numbers.",
      "They can be cascaded more easily for higher count ranges."
    ],
    "correctAnswer": "They can be cascaded more easily for higher count ranges."
  },
  {
    "question": "What is the internal architecture of a microprocessor?",
    "options": [
      "The physical size of the microprocessor.",
      "The arrangement of input and output ports.",
      "The organization of memory units.",
      "The layout and design of various functional units within the microprocessor."
    ],
    "correctAnswer": "The layout and design of various functional units within the microprocessor."
  },
  {
    "question": "Which component in the microprocessor is responsible for executing arithmetic and logic operations?",
    "options": [
      "Control Unit",
      "ALU (Arithmetic Logic Unit)",
      "Memory Unit",
      "I/O Unit"
    ],
    "correctAnswer": "ALU (Arithmetic Logic Unit)"
  },
  {
    "question": "What are the features of a microprocessor?",
    "options": [
      "The physical dimensions of the microprocessor.",
      "The number of input/output ports.",
      "The clock speed and memory size.",
      "The instruction set, data processing capabilities, and control mechanisms."
    ],
    "correctAnswer": "The instruction set, data processing capabilities, and control mechanisms."
  },
  {
    "question": "Which feature of a microprocessor determines how many instructions it can execute in a given time?",
    "options": [
      "Clock speed",
      "Memory size",
      "Number of input/output ports",
      "Instruction set"
    ],
    "correctAnswer": "Clock speed"
  },
  {
    "question": "What is assembly language programming?",
    "options": [
      "Programming using high-level languages like C++ and Java.",
      "Programming using binary machine code.",
      "Programming using symbolic instructions that represent machine code.",
      "Programming using graphical user interfaces."
    ],
    "correctAnswer": "Programming using symbolic instructions that represent machine code."
  },
  {
    "question": "Why is assembly language programming used?",
    "options": [
      "To create complex graphics.",
      "To develop web applications.",
      "To write efficient and optimized code for microprocessors.",
      "To design hardware components."
    ],
    "correctAnswer": "To write efficient and optimized code for microprocessors."
  },
  {
    "question": "What is the memory hierarchy in microprocessor systems?",
    "options": [
      "The physical arrangement of memory chips on a circuit board.",
      "The organization of input/output devices.",
      "The classification of memory devices based on speed and capacity.",
      "The sequence of instructions executed by the microprocessor."
    ],
    "correctAnswer": "The classification of memory devices based on speed and capacity."
  },
  {
    "question": "Which type of memory in the hierarchy is the fastest and closest to the microprocessor?",
    "options": [
      "Secondary memory",
      "Cache memory",
      "Main memory (RAM)",
      "Virtual memory"
    ],
    "correctAnswer": "Cache memory"
  },
  {
    "question": "What is interfacing in microprocessor systems?",
    "options": [
      "Connecting microprocessors to the internet.",
      "Creating graphical user interfaces.",
      "Connecting microprocessors to external devices or memory.",
      "Managing memory allocation in microprocessors."
    ],
    "correctAnswer": "Connecting microprocessors to external devices or memory."
  },
  {
    "question": "What is the purpose of interfacing I/O and memory in microprocessor systems?",
    "options": [
      "To create user-friendly applications.",
      "To make the microprocessor run faster.",
      "To allow data transfer between the microprocessor and external devices or memory.",
      "To reduce power consumption of the microprocessor."
    ],
    "correctAnswer": "To allow data transfer between the microprocessor and external devices or memory."
  },
  {
    "question": "What is a Programmable Peripheral Interface (PPI)?",
    "options": [
      "A type of memory chip.",
      "A device that interfaces microprocessors with printers.",
      "A versatile integrated circuit used for parallel data transfer between microprocessors and external devices.",
      "A type of input device."
    ],
    "correctAnswer": "A versatile integrated circuit used for parallel data transfer between microprocessors and external devices."
  },
  {
    "question": "What is the main advantage of using a PPI in microprocessor systems?",
    "options": [
      "It provides wireless communication.",
      "It eliminates the need for microprocessors.",
      "It simplifies the interfacing process by providing programmable I/O ports.",
      "It reduces the clock speed of microprocessors."
    ],
    "correctAnswer": "It simplifies the interfacing process by providing programmable I/O ports."
  },
  {
    "question": "What is serial interface transmission?",
    "options": [
      "A method of transferring data between parallel memory chips.",
      "A method of transferring data in a single stream of bits over a single communication line.",
      "A method of transferring data using multiple communication lines.",
      "A method of transferring data using wireless communication."
    ],
    "correctAnswer": "A method of transferring data in a single stream of bits over a single communication line."
  },
  {
    "question": "What is the key difference between serial and parallel interface transmission?",
    "options": [
      "Serial transmission is slower than parallel transmission.",
      "Serial transmission uses fewer communication lines.",
      "Parallel transmission is wireless, while serial transmission uses wires.",
      "Parallel transmission uses fewer communication lines."
    ],
    "correctAnswer": "Serial transmission uses fewer communication lines."
  },
  {
    "question": "What are some common serial interface standards?",
    "options": [
      "USB, HDMI, VGA",
      "Ethernet, Bluetooth, Wi-Fi",
      "RS232, RS423, RS422, USB",
      "PCI, PCIe, SATA"
    ],
    "correctAnswer": "RS232, RS423, RS422, USB"
  },
  {
    "question": "Which serial interface standard is commonly used for short-distance communication between computers and peripherals?",
    "options": [
      "USB",
      "RS232",
      "RS422",
      "Ethernet"
    ],
    "correctAnswer": "USB"
  },
  {
    "question": "What is a USART?",
    "options": [
      "A type of microprocessor.",
      "A type of memory chip.",
      "A device used for parallel data transfer.",
      "A device used for serial communication that combines UART and synchronous communication."
    ],
    "correctAnswer": "A device used for serial communication that combines UART and synchronous communication."
  },
  {
    "question": "What is Direct Memory Access (DMA) in microprocessor systems?",
    "options": [
      "A type of memory chip.",
      "A method of transferring data between parallel memory chips.",
      "A method of transferring data using multiple communication lines.",
      "A technique that allows peripherals to access memory directly without involving the microprocessor."
    ],
    "correctAnswer": "A technique that allows peripherals to access memory directly without involving the microprocessor."
  },
  {
    "question": "What is the Central Processing Unit (CPU) in a computer?",
    "options": [
      "The part of the computer that displays output on the screen.",
      "The main memory of the computer.",
      "A device used for data storage.",
      "The component that performs the actual processing and execution of instructions."
    ],
    "correctAnswer": "The component that performs the actual processing and execution of instructions."
  },
  {
    "question": "What is the function of the Control Unit in the CPU?",
    "options": [
      "To perform arithmetic operations.",
      "To store data temporarily.",
      "To manage input and output devices.",
      "To fetch and decode instructions, and control the execution of instructions."
    ],
    "correctAnswer": "To fetch and decode instructions, and control the execution of instructions."
  },
  {
    "question": "What is Control Memory in computer organization?",
    "options": [
      "Memory used for storing data.",
      "Memory used for temporary storage.",
      "Memory used for executing instructions.",
      "Memory used for storing microinstructions to control the CPU."
    ],
    "correctAnswer": "Memory used for storing microinstructions to control the CPU."
  },
  {
    "question": "What is Address Sequencing in computer organization?",
    "options": [
      "A technique to prevent memory leaks.",
      "A method to arrange memory chips in a sequence.",
      "A process to fetch and execute instructions in a specific order.",
      "A method to address memory locations for data storage."
    ],
    "correctAnswer": "A process to fetch and execute instructions in a specific order."
  },
  {
    "question": "What is Computer Configuration?",
    "options": [
      "The arrangement of peripherals in a computer.",
      "The speed of the CPU.",
      "The total amount of memory in a computer.",
      "The combination of hardware components in a computer system."
    ],
    "correctAnswer": "The combination of hardware components in a computer system."
  },
  {
    "question": "Why is Computer Configuration important?",
    "options": [
      "It determines the color scheme of the computer.",
      "It determines the power consumption of the computer.",
      "It affects the overall performance and capabilities of the computer.",
      "It affects the number of software applications the computer can run."
    ],
    "correctAnswer": "It affects the overall performance and capabilities of the computer."
  },
  {
    "question": "What is a microinstruction in computer organization?",
    "options": [
      "A small instruction used for simple tasks.",
      "A type of high-level programming language.",
      "A control signal used to operate the CPU.",
      "A low-level instruction used to control the internal operations of the CPU."
    ],
    "correctAnswer": "A low-level instruction used to control the internal operations of the CPU."
  },
  {
    "question": "What is the role of the Control Unit in a computer's CPU?",
    "options": [
      "To perform arithmetic calculations.",
      "To store data for later use.",
      "To manage peripheral devices.",
      "To generate control signals to execute microinstructions."
    ],
    "correctAnswer": "To generate control signals to execute microinstructions."
  },
  {
    "question": "What is the structure of the CPU?",
    "options": [
      "A single unit with only the Control Unit.",
      "A combination of the Control Unit and the ALU.",
      "A combination of RAM and storage devices.",
      "A network of interconnected peripheral devices."
    ],
    "correctAnswer": "A combination of the Control Unit and the ALU."
  },
  {
    "question": "What is the function of the Arithmetic Logic Unit (ALU) in the CPU?",
    "options": [
      "To store data temporarily.",
      "To manage peripheral devices.",
      "To execute microinstructions.",
      "To perform arithmetic and logical operations on data."
    ],
    "correctAnswer": "To perform arithmetic and logical operations on data."
  },
  {
    "question": "What are instruction formats in computer organization?",
    "options": [
      "A list of common errors in software code.",
      "Templates for writing microinstructions.",
      "Patterns used in assembly language programming.",
      "The structure of machine instructions used by the CPU."
    ],
    "correctAnswer": "The structure of machine instructions used by the CPU."
  },
  {
    "question": "What are Addressing Modes in computer organization?",
    "options": [
      "Techniques to improve the speed of memory access.",
      "Methods to format memory addresses.",
      "Ways to identify memory leaks.",
      "Modes used to specify the operand's address in an instruction."
    ],
    "correctAnswer": "Modes used to specify the operand's address in an instruction."
  },
  {
    "question": "What are Data Transfer and Manipulation instructions?",
    "options": [
      "Instructions for transferring data between different types of computers.",
      "Instructions used for file management.",
      "Instructions that manipulate only numeric data.",
      "Instructions used to move data between registers and memory, and perform calculations."
    ],
    "correctAnswer": "Instructions used to move data between registers and memory, and perform calculations."
  },
  {
    "question": "What is the difference between RISC and CISC architectures?",
    "options": [
      "RISC architecture uses complex instructions, while CISC uses simple instructions.",
      "RISC architecture has a smaller instruction set, while CISC has a larger instruction set.",
      "RISC architecture is used in mainframe computers, while CISC is used in personal computers.",
      "RISC architecture has more memory units compared to CISC."
    ],
    "correctAnswer": "RISC architecture has a smaller instruction set, while CISC has a larger instruction set."
  },
  {
    "question": "What is Pipelining in computer organization?",
    "options": [
      "A method to connect multiple computers together.",
      "A technique to improve the speed of data transfer.",
      "A process to split instruction execution into multiple stages to increase throughput.",
      "A method to connect the CPU to peripherals."
    ],
    "correctAnswer": "A process to split instruction execution into multiple stages to increase throughput."
  },
  {
    "question": "What is Parallel Processing in computer organization?",
    "options": [
      "A method to improve memory access speed.",
      "A technique to perform multiple tasks simultaneously.",
      "A way to reduce the power consumption of CPUs.",
      "A method to improve the graphics performance of computers."
    ],
    "correctAnswer": "A technique to perform multiple tasks simultaneously."
  },
    {
        question: "What is Digital Electronics?",
        options: [
          "Field of electronics involving the study of digital signal",
          "Engineering of devices that digital signal",
          "Engineering of devices that produce digital signal",
          "All of the mentioned"
        ],
        correctAnswer: "All of the mentioned"
      },
      {
        question: "Which of the following is correct for Digital Circuits?",
        options: [
          "Less susceptible to noise or degradation in quality",
          "Use transistors to create logic gates to perform Boolean logic",
          "Easier to perform error detection and correction with digital signal",
          "All of the mentioned"
        ],
        correctAnswer: "All of the mentioned"
      },
      {
        question: "What is a Circuit?",
        options: [
          "Open-loop through which electrons can pass",
          "Closed-loop through which electrons can pass",
          "Closed-loop through which Neutrons can pass",
          "None of the mentioned"
        ],
        correctAnswer: "Closed-loop through which electrons can pass"
      },
      {
        question: "Which of the following is an example of a digital Electronic?",
        options: [
          "Computers",
          "Information appliances",
          "Digital cameras",
          "All of the mentioned"
        ],
        correctAnswer: "All of the mentioned"
      },
      {
        question: "Which of the following is a type of digital logic circuit?",
        options: [
          "Combinational logic circuits",
          "Sequential logic circuits",
          "Both Combinational & Sequential logic circuits",
          "None of the mentioned"
        ],
        correctAnswer: "Both Combinational & Sequential logic circuits"
      },
      {
        question: "Which of the following options comes under the non – saturated logic family in Digital Electronics?",
        options: [
          "Emitter – coupled Logic",
          "High-Threshold Logic",
          "Integrated – injection Logic",
          "Diode – Transistor Logic"
        ],
        correctAnswer: "Emitter – coupled Logic"
      },
      {
        question: "What is a switching function that has more than one output called in Digital Electronics?",
        options: [
          "Multi-gate function",
          "Multi-output function",
          "Multiple-gate function",
          "Multiple-output function"
        ],
        correctAnswer: "Multi-output function"
      },
      {
        question: "Which characteristic of IC in Digital Circuits represents a function of the switching time of a particular transistor?",
        options: [
          "Fan – out",
          "Fan – in",
          "Power dissipation",
          "Propagation delay"
        ],
        correctAnswer: "Propagation delay"
      },
      {
        question: "When can one logic gate drive many other logic gates in Digital Electronics?",
        options: [
          "When its output impedance is low and the input impedance is low",
          "When its output impedance is high and the input impedance is high",
          "When its output impedance is high and the input impedance is low",
          "When its output impedance is low and the input impedance is high"
        ],
        correctAnswer: "When its output impedance is low and the input impedance is high"
      },
      {
        question: "Which of the following digital logic circuits can be used to add more than 1 – bit simultaneously?",
        options: [
          "Full – adder",
          "Ripple – carry adder",
          "Half – adder",
          "Serial adder"
        ],
        correctAnswer: "Ripple – carry adder"
      },
      {
        question: "Which gates in Digital Circuits are required to convert a NOR-based SR latch to an SR flip-flop?",
        options: [
          "Two 2 input AND gates",
          "Two 3 input AND gates",
          "Two 2 input OR gates",
          "Two 3 input OR gates"
        ],
        correctAnswer: "Two 2 input AND gates"
      },
      {
        question: "When does a negative level triggered flip-flop in Digital Electronics changes its state?",
        options: [
          "When the clock is negative",
          "When the clock is positive",
          "When the inputs are all zero",
          "When the inputs are all one"
        ],
        correctAnswer: "When the clock is negative"
      },
      {
        question: "Which of the following options represent the synchronous control inputs in an S – R flip flop?",
        options: [
          "S",
          "R",
          "Clock",
          "Both S and R"
        ],
        correctAnswer: "Both S and R"
      },
      {
        question: "What must be used along with synchronous control inputs to trigger a change in the flip flop?",
        options: [
          "0",
          "1",
          "Clock",
          "Previous output"
        ],
        correctAnswer: "Clock"
      },
      {
        question: "Which of the following majorly determines the number of emitters in a TTL digital circuit?",
        options: [
          "Fan – in",
          "Fan – out",
          "Propagation delay",
          "Noise immunity"
        ],
        correctAnswer: "Fan – in"
      },
      {
        question: "What will be the output from a D flip – flop if the clock is low and D = 0?",
        options: [
          "0",
          "1",
          "No change",
          "Toggle between 0 and 1"
        ],
        correctAnswer: "No change"
      },
      {
        question: "What are the basic gates in MOS logic family?",
        options: [
          "NAND and NOR",
          "AND and OR",
          "NAND and OR",
          "AND and NOR"
        ],
        correctAnswer: "NAND and NOR"
      },
      {
        question: "How must the output of a gate in a TTL digital circuit act when it is HIGH?",
        options: [
          "Acts as a voltage source",
          "Acts as a current sink",
          "Acts as a current source",
          "Acts as a voltage sink"
        ],
        correctAnswer: "Acts as a current source"
      },
      {
        question: "What is the minimum distance required for single error detection according to Hamming’s analysis in Digital Electronics?",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        correctAnswer: "2"
      },
      {
        question: "Which of these error-detecting codes enables to find double errors in Digital Electronic devices?",
        options: [
          "Parity method",
          "Check sum method",
          "Bit generation method",
          "Odd-Even method"
        ],
        correctAnswer: "Check sum method"
      },
      {
        question: "What will be the output from a D flip-flop if D = 1 and the clock is low?",
        options: [
          "No change",
          "Toggle between 0 and 1",
          "0",
          "1"
        ],
        correctAnswer: "No change"
      },
      {
        question: "What characteristic will a TTL digital circuit possess due to its multi-emitter transistor?",
        options: [
          "Low capacitance",
          "High capacitance",
          "Low inductance",
          "High inductance"
        ],
        correctAnswer: "Low capacitance"
      },
      {
        question: "3 bits full adder contains ________",
        options: [
          "3 combinational inputs",
          "4 combinational inputs",
          "6 combinational inputs",
          "8 combinational inputs"
        ],
        correctAnswer: "4 combinational inputs"
      },
      {
        question: "The carry propagation can be expressed as ________",
        options: [
          "Cp = AB",
          "Cp = A + B",
          "All but Y0 are LOW",
          "All but Y0 are HIGH"
        ],
        correctAnswer: "Cp = A + B"
      },
      {
        question: "What is the indication of a short to ground in the output of a driving gate?",
        options: [
          "Only the output of the defective gate is affected",
          "There is a signal loss to all load gates",
          "The node may be stuck in either the HIGH or the LOW state",
          "The affected node will be stuck in the HIGH state"
        ],
        correctAnswer: "There is a signal loss to all load gates"
      },
      {
        question: "Which of the following combinations of logic gates can decode binary 1101?",
        options: [
          "One 4-input AND gate",
          "One 4-input AND gate, one inverter",
          "One 4-input AND gate, one OR gate",
          "One 4-input NAND gate, one inverter"
        ],
        correctAnswer: "One 4-input AND gate, one inverter"
      },
      {
        question: "What is a multiplexer?",
        options: [
          "It is a type of decoder which decodes several inputs and gives one output",
          "A multiplexer is a device which converts many signals into one",
          "It takes one input and results into many output",
          "It is a type of encoder which decodes several inputs and gives one output"
        ],
        correctAnswer: "A multiplexer is a device which converts many signals into one"
      },
      {
        question: "Which combinational circuit is renowned for selecting a single input from multiple inputs & directing the binary information to the output line?",
        options: [
          "Data Selector",
          "Data distributor",
          "Both data selector and data distributor",
          "DeMultiplexer"
        ],
        correctAnswer: "Data Selector"
      },
      {
        question: "It is possible for an enable or strobe input to undergo an expansion of two or more MUX ICs to the digital multiplexer with the proficiency of a large number of ___________",
        options: [
          "Inputs",
          "Outputs",
          "Selection lines",
          "Enable lines"
        ],
        correctAnswer: "Inputs"
      },
      {
        question: "Which is the major functioning responsibility of the multiplexing combinational circuit?",
        options: [
          "Decoding the binary information",
          "Generation of all minterms in an output function with OR-gate",
          "Generation of selected path between multiple sources and a single destination",
          "Encoding of binary information"
        ],
        correctAnswer: "Generation of selected path between multiple sources and a single destination"
      },
      {
        question: "What is the function of an enable input on a multiplexer chip?",
        options: [
          "To apply Vcc",
          "To connect ground",
          "To activate the entire chip",
          "To activate one half of the chip"
        ],
        correctAnswer: "To activate the entire chip"
      },
      {
        question: "One multiplexer can take the place of _________",
        options: [
          "Several SSI logic gates",
          "Combinational logic circuits",
          "Several Ex-NOR gates",
          "Several SSI logic gates or combinational logic circuits"
        ],
        correctAnswer: "Several SSI logic gates or combinational logic circuits"
      },
      {
        question: "A digital multiplexer is a combinational circuit that selects ___________",
        options: [
          "One digital information from several sources and transmits the selected one",
          "Many digital information and converts them into one",
          "Many decimal inputs and transmits the selected information",
          "Many decimal outputs and accepts the selected information"
        ],
        correctAnswer: "One digital information from several sources and transmits the selected one"
      },
      {
        question: "In a multiplexer, the selection of a particular input line is controlled by ___________",
        options: [
          "Data controller",
          "Selected lines",
          "Logic gates",
          "Both data controller and selected lines"
        ],
        correctAnswer: "Selected lines"
      },
      {
        question: "If the number of n selected input lines is equal to 2^m, then it requires _____ select lines.",
        options: [
          "2",
          "m",
          "n",
          "2n"
        ],
        correctAnswer: "m"
      },
      {
        question: "How many select lines would be required for an 8-line-to-1-line multiplexer?",
        options: [
          "2",
          "4",
          "8",
          "3"
        ],
        correctAnswer: "3"
      },
      {
        question: "A basic multiplexer principle can be demonstrated through the use of a ___________",
        options: [
          "Single-pole relay",
          "DPDT switch",
          "Rotary switch",
          "Linear stepper"
        ],
        correctAnswer: "Rotary switch"
      },
      {
        question: "How many NOT gates are required for the construction of a 4-to-1 multiplexer?",
        options: [
          "3",
          "4",
          "2",
          "5"
        ],
        correctAnswer: "2"
      },
      {
        question: "The enable input is also known as ___________",
        options: [
          "Select input",
          "Decoded input",
          "Strobe",
          "Sink"
        ],
        correctAnswer: "Strobe"
      },
      {
        question: "4 to 1 MUX would have ____________",
        options: [
          "2 inputs",
          "3 inputs",
          "4 inputs",
          "5 inputs"
        ],
        correctAnswer: "4 inputs"
      },
      {
        question: "The two-input MUX would have ____________",
        options: [
          "1 select line",
          "2 select lines",
          "4 select lines",
          "3 select lines"
        ],
        correctAnswer: "1 select line"
      },
      {
        question: "A combinational circuit that selects one from many inputs is ____________",
        options: [
          "Encoder",
          "Decoder",
          "Demultiplexer",
          "Multiplexer"
        ],
        correctAnswer: "Multiplexer"
      },
      {
        question: "4 to 1 MUX would have ____________",
        options: [
          "1 output",
          "2 outputs",
          "3 outputs",
          "4 outputs"
        ],
        correctAnswer: "1 output"
      },
      {
        question: "Which of the following circuit can be used as a parallel-to-serial converter?",
        options: [
          "Multiplexer",
          "Demultiplexer",
          "Decoder",
          "Digital counter"
        ],
        correctAnswer: "Multiplexer"
      },
      {
        question: "A combinational circuit is one in which the output depends on the ____________",
        options: [
          "Input combination at the time",
          "Input combination and the previous output",
          "Input combination at that time and the previous input combination",
          "Present output and the previous output"
        ],
        correctAnswer: "Input combination at the time"
      },
      {
        question: "Without any additional circuitry, an 8:1 MUX can be used to obtain ____________",
        options: [
          "Some but not all Boolean functions of 3 variables",
          "All functions of 3 variables but none of 4 variables",
          "All functions of 3 variables and some but not all of 4 variables",
          "All functions of 4 variables"
        ],
        correctAnswer: "All functions of 4 variables"
      },
      {
        question: "A basic multiplexer principle can be demonstrated through the use of a ____________",
        options: [
          "Single-pole relay",
          "DPDT switch",
          "Rotary switch",
          "Linear stepper"
        ],
        correctAnswer: "Rotary switch"
      },
      {
        question: "One multiplexer can take the place of ____________",
        options: [
          "Several SSI logic gates",
          "Combinational logic circuits",
          "Several Ex-NOR gates",
          "Several SSI logic gates or combinational logic circuits"
        ],
        correctAnswer: "Several SSI logic gates or combinational logic circuits"
      },
      {
        question: "The inputs/outputs of an analog multiplexer/demultiplexer are ____________",
        options: [
          "Bidirectional",
          "Unidirectional",
          "Even parity",
          "Binary-coded decimal"
        ],
        correctAnswer: "Bidirectional"
      },
      {
        question: "If the enable input is high, then the multiplexer is ____________",
        options: [
          "Enable",
          "Disable",
          "Saturation",
          "High Impedance"
        ],
        correctAnswer: "Disable"
      },
      {
        question: "What is data routing in a multiplexer?",
        options: [
          "It spreads the information to the control unit",
          "It can be used to route data from one of several sources to a destination",
          "It is an application of multiplexer",
          "It can be used to route data and it is an application of multiplexer"
        ],
        correctAnswer: "It can be used to route data and it is an application of multiplexer"
      },
      {
        question: "The word demultiplex means ___________",
        options: [
          "One into many",
          "Many into one",
          "Distributor",
          "One into many as well as Distributor"
        ],
        correctAnswer: "One into many as well as Distributor"
      },
      {
        question: "Why is a demultiplexer called a data distributor?",
        options: [
          "The input will be distributed to one of the outputs",
          "One of the inputs will be selected for the output",
          "The output will be distributed to one of the inputs",
          "Single input to Single Output"
        ],
        correctAnswer: "The input will be distributed to one of the outputs"
      },
      {
        question: "Most demultiplexers facilitate which type of conversion?",
        options: [
          "Decimal-to-hexadecimal",
          "Single input, multiple outputs",
          "AC to DC",
          "Odd parity to even parity"
        ],
        correctAnswer: "Single input, multiple outputs"
      },
      {
        question: "In 1-to-4 demultiplexer, how many select lines are required?",
        options: [
          "2",
          "3",
          "4",
          "5"
        ],
        correctAnswer: "2"
      },
      {
        question: "In a multiplexer, the output depends on its ___________",
        options: [
          "Data inputs",
          "Select inputs",
          "Select outputs",
          "Enable pin"
        ],
        correctAnswer: "Select inputs"
      },
      {
        question: "In 1-to-4 multiplexer, if C1 = 0 & C2 = 1, then the output will be ___________",
        options: [
          "Y0",
          "Y1",
          "Y2",
          "Y3"
        ],
        correctAnswer: "Y1"
      },
      {
        question: "In 1-to-4 multiplexer, if C1 = 1 & C2 = 1, then the output will be ___________",
        options: [
          "Y0",
          "Y1",
          "Y2",
          "Y3"
        ],
        correctAnswer: "Y3"
      },
      {
        question: "How many select lines are required for a 1-to-8 demultiplexer?",
        options: [
          "2",
          "3",
          "4",
          "5"
        ],
        correctAnswer: "3"
      },
      {
        question: "How many AND gates are required for a 1-to-8 multiplexer?",
        options: [
          "2",
          "6",
          "8",
          "5"
        ],
        correctAnswer: "8"
      },
      {
        question: "__________________ is a straightforward method of representing positive and negative numbers.",
        options: [
          "Radix",
          "Complement",
          "Sign Magnitude",
          "Encode"
        ],
        correctAnswer: "Sign Magnitude"
      },
      {
        question: "The additive inverse of a number is the number which when added to the original number gives 1 as a result.",
        options: [
          "True",
          "False"
        ],
        correctAnswer: "False"
      },
      {
        question: "The 1’s complement of 1 in 4 bits is __________",
        options: [
          "0001",
          "0",
          "1001",
          "1110"
        ],
        correctAnswer: "1110"
      },
      {
        question: "The binary number 111 in its 2’s complement form is ____________",
        options: [
          "010",
          "001",
          "000",
          "111"
        ],
        correctAnswer: "001"
      },
      {
        question: "The sign magnitude representation of -9 is ___________",
        options: [
          "00001001",
          "11111001",
          "10001001",
          "11001"
        ],
        correctAnswer: "10001001"
      },
      {
        question: "If you are given a word of size n bits, the range of 2’s complement of binary numbers is ________",
        options: [
          "-2n+1 to +2n+1",
          "-2n-1 to +2n-1",
          "-2n-1 to +2n+1",
          "-2n-1 to +2n-1-1"
        ],
        correctAnswer: "-2n-1 to +2n-1-1"
      },
      {
        question: "In both signed magnitude and 2’s complement , positive and negative numbers are separated using ______________",
        options: [
          "LSB",
          "MSB",
          "0",
          "1"
        ],
        correctAnswer: "MSB"
      },
      {
        question: "Single Precision format comprises of _________ bits.",
        options: [
          "4",
          "8",
          "16",
          "32"
        ],
        correctAnswer: "32"
      },
      {
        question: "If m is the 2’s complement and n is the binary number, then ______________",
        options: [
          "m=n’",
          "m=n’+1",
          "m=n’-1",
          "m=n"
        ],
        correctAnswer: "m=n’+1"
      },
      {
        question: "The possible number of bit patterns with 8 bits ________________",
        options: [
          "128",
          "8",
          "24",
          "256"
        ],
        correctAnswer: "256"
      },
      {
        question: "In Sequential circuits the output states depend upon",
        options: [
          "Past input states",
          "Present input states",
          "Present as well as past input",
          "None of the above"
        ],
        correctAnswer: "Present as well as past input"
      },
      {
        question: "Sequential circuit contains",
        options: [
          "No memory element",
          "Atleast one memory element",
          "All inputs applied simultaneously",
          "None of the above"
        ],
        correctAnswer: "Atleast one memory element"
      },
      {
        question: "Following flip flop used as latch",
        options: [
          "J-K flip flop",
          "Master slave J-K flip flop",
          "T flip flop",
          "D flip flop"
        ],
        correctAnswer: "D flip flop"
      },
      {
        question: "Schmitt trigger can be used as",
        options: [
          "Square wave generator",
          "Comparator",
          "Square Wave generator as well as comparator",
          "None of the above"
        ],
        correctAnswer: "Square Wave generator as well as comparator"
      },
      {
        question: "For a sinusoidal input ,Schmitt trigger gives output as",
        options: [
          "Sinusoidal",
          "Saw tooth wave",
          "Square Wave",
          "None of the above"
        ],
        correctAnswer: "Square Wave"
      },
      {
        question: "Schmitt trigger is used as",
        options: [
          "Voltage to frequency converter",
          "Frequency to voltage converter",
          "Square wave generator",
          "None of the above"
        ],
        correctAnswer: "Square wave generator"
      },
      {
        question: "D flip flop is used as",
        options: [
          "Differentiator",
          "Divider circuit",
          "Delay switch",
          "All of these"
        ],
        correctAnswer: "Delay switch"
      },
      {
        question: "T Flip flop is used as",
        options: [
          "Transfer data circuit",
          "Toggle switch",
          "Time delay switch",
          "None of the above"
        ],
        correctAnswer: "Toggle switch"
      },
      {
        question: "An astable Multivibrator has",
        options: [
          "One stable state",
          "One Quasi stable state",
          "Two Quasi-stable state",
          "Two stable state"
        ],
        correctAnswer: "Two Quasi-stable state"
      },
      {
        question: "A mono-stable Multivibrator has",
        options: [
          "No stable state",
          "One stable state",
          "Two stable state",
          "None of the above"
        ],
        correctAnswer: "One stable state"
      },
      {
        question: "Race condition occurs in",
        options: [
          "Synchronous circuit",
          "Asyncronous circuit",
          "Combinational circuit",
          "All of the digital circuit"
        ],
        correctAnswer: "Asyncronous circuit"
      },
      {
        question: "In T flip flop the out put frequency is",
        options: [
          "Same as the input frequency",
          "One half it input frequency",
          "Double of its input frequency",
          "None of the above"
        ],
        correctAnswer: "One half it input frequency"
      },
      {
        question: "Bi-stable Multivibrator is also known as",
        options: [
          "Binary",
          "Flip flop",
          "Eccless Jordan circuit",
          "All of the above"
        ],
        correctAnswer: "All of the above"
      },
      {
        question: "Astable Multivibrator is also known as",
        options: [
          "One shot Multivibrator",
          "Schmitt Trigger",
          "Free running Multivibrator",
          "Gating circuit"
        ],
        correctAnswer: "Free running Multivibrator"
      },
      {
        question: "The gate with mono stable Multivibrator is given by",
        options: [
          "T=1.1RC",
          "T=0.693",
          "None",
          "T=0.001"
        ],
        correctAnswer: "T=0.693"
      },
      {
        question: "Following flip flop is used to eliminate race around problem",
        options: [
          "R-S flip flop",
          "Master slave J-K flip flop",
          "J-K flip flop",
          "None of the above"
        ],
        correctAnswer: "Master slave J-K flip flop"
      },
      {
        question: "The minimum number of flip flops required to construct a mod 64( divide by 64) ripple counter are",
        options: [
          "4 flip flops",
          "6 flip flops",
          "16 flip flops",
          "64 flip flops"
        ],
        correctAnswer: "64 flip flops"
      },
      {
        question: "The maximum frequency to which Mod 16 ripple counter using 4 J-K flip flop with propagation delay time of 50 Nano second is",
        options: [
          "4 megahertz",
          "5 megahertz",
          "3.2 megahertz",
          "320 megahertz"
        ],
        correctAnswer: "5 megahertz"
      },
      {
        question: "The type of register in which data is entered into it only one bit at a time, but has all data bits available as output, is",
        options: [
          "serial in serial out register",
          "parallel in serial out register",
          "serial in parallel out register",
          "parallel in parallel out register"
        ],
        correctAnswer: "serial in parallel out register"
      },
      {
        question: "The type of register, in which we have access only to left most and right most flip flop is",
        options: [
          "shift left and shift right registers",
          "serial in serial out register",
          "parallel in serial out register",
          "serial in parallel out register"
        ],
        correctAnswer: "serial in serial out register"
      },
      {
        question: "The counter which requires maximum number of flip flop for a given Mod number is",
        options: [
          "ripple counter",
          "BCD counter",
          "ring counter",
          "Programmable counter"
        ],
        correctAnswer: "ring counter"
      },
      {
        question: "Shifting a binary data to the left by 1 bit position using shift left register, amount 2",
        options: [
          "addition of two",
          "subtraction of two",
          "multiplication by 2",
          "division by 2"
        ],
        correctAnswer: "multiplication by 2"
      },
      {
        question: "If a counter is connected using 6 flip flop then the maximum number of states that the counter can count are",
        options: [
          "6",
          "8",
          "256",
          "64"
        ],
        correctAnswer: "64"
      },
      {
        question: "The minimum number of flip flop required for a mod 10 ripple counter are",
        options: [
          "4",
          "2",
          "10",
          "5"
        ],
        correctAnswer: "4"
      },
      {
        question: "The maximum modulo number that can be obtained by ripple counter using 5 flip flops is",
        options: [
          "16",
          "32",
          "5",
          "31"
        ],
        correctAnswer: "32"
      },
      {
        question: "Mod 5 synchronous counter is designed using J-K flip flops, the number of count skipped by it will be",
        options: [
          "2",
          "3",
          "5",
          "0"
        ],
        correctAnswer: "3"
      },
      {
        question: "The number of flip flops required for a mod 16 ring counter are",
        options: [
          "4 flip flops",
          "8 flip flops",
          "10 flip flops",
          "16 flip flops"
        ],
        correctAnswer: "16 flip flops"
      },
      {
        question: "ABCD counter has",
        options: [
          "three distinct States",
          "8 distinct States",
          "10 distinct States",
          "16 distinct States"
        ],
        correctAnswer: "10 distinct States"
      },
      {
        question: "Output frequency of decade counter, which is Clocked from 50 kilohertz signal is",
        options: [
          "5 KhZ",
          "50 khz",
          "500 khz",
          "5000 khz"
        ],
        correctAnswer: "5 KhZ"
      },
      {
        question: "The output frequency of a Mod 16 counter, checked from a 10k Hz clock input signal is",
        options: [
          "10 khz",
          "26khz",
          "160khz",
          "625khz"
        ],
        correctAnswer: "625khz"
      },
      {
        question: "The table which shows the necessary levels at J and K input to produce every possible flip flop state transition is called",
        options: [
          "truth table of JK flip flop",
          "excitation table of JK flip flop",
          "excitation table of Mod n Counter using JK flip flop",
          "none of these"
        ],
        correctAnswer: "excitation table of Mod n Counter using JK flip flop"
      },
      {
        question: "What is Microprocessor?",
        options: [
          "A multipurpose PLD that accepts binary data as input",
          "A multipurpose PLD that accepts an integer as input",
          "A multipurpose PLD that accepts whole numbers as input",
          "A multipurpose PLD that accepts prime numbers as input"
        ],
        correctAnswer: "A multipurpose PLD that accepts binary data as input"
      },
      {
        question: "Which of the following is correct about 8086 microprocessor?",
        options: [
          "Intel’s first x86 processor",
          "Motrola’s first x86 processor",
          "STMICROELECTRONICS’s first x86 processor",
          "NanoXplore x86 processor"
        ],
        correctAnswer: "Intel’s first x86 processor"
      },
      {
        question: "Which of the following is a type of microprocessor?",
        options: [
          "CISC",
          "RISC",
          "EPIC",
          "All of the mentioned"
        ],
        correctAnswer: "All of the mentioned"
      },
      {
        question: "The microprocessor of a computer can operate on any information if it is present in ______________ only.",
        options: [
          "Program Counter",
          "Flag",
          "Main Memory",
          "Secondary Memory"
        ],
        correctAnswer: "Main Memory"
      },
      {
        question: "Which of the following technology was used by Intel to design its first 8-bit microprocessor?",
        options: [
          "NMOS",
          "HMOS",
          "PMOS",
          "TTL"
        ],
        correctAnswer: "PMOS"
      },
      {
        question: "Which of the following addressing method does the instruction, MOV AX,[BX] represent?",
        options: [
          "register indirect addressing mode",
          "direct addressing mode",
          "register addressing mode",
          "register relative addressing mode"
        ],
        correctAnswer: "register indirect addressing mode"
      },
      {
        question: "What is the word length of an 8-bit microprocessor?",
        options: [
          "8-bits – 64 bits",
          "4-bits – 32 bits",
          "8-bits – 16 bits",
          "8-bits – 32 bits"
        ],
        correctAnswer: "8-bits – 64 bits"
      },
      {
        question: "In 8-bit microprocessor, how many opcodes are present?",
        options: [
          "246",
          "278",
          "250",
          "256"
        ],
        correctAnswer: "246"
      },
      {
        question: "Which of the following is not true about the address bus?",
        options: [
          "It consists of control PIN 21 to 28",
          "It is a bidirectional bus",
          "It is 16 bits in length",
          "Lower address bus lines (AD0 – AD7) are called “Line number”"
        ],
        correctAnswer: "It is a bidirectional bus"
      },
      {
        question: "Which of the following is true about microprocessors?",
        options: [
          "It has an internal memory",
          "It has interfacing circuits",
          "It contains ALU, CU, and registers",
          "It uses Harvard architecture"
        ],
        correctAnswer: "It contains ALU, CU, and registers"
      },
      {
        question: "Which of the following is the correct sequence of operations in a microprocessor?",
        options: [
          "Opcode fetch, memory read, memory write, I/O read, I/O write",
          "Opcode fetch, memory write, memory read, I/O read, I/O write",
          "I/O read, opcode fetch, memory read, memory write, I/O write",
          "I/O read, opcode fetch, memory write, memory read, I/O write"
        ],
        correctAnswer: "Opcode fetch, memory read, memory write, I/O read, I/O write"
      },
      {
        question: "The ________ directive instructs the assembler to begin memory allocation for a segment/block/code from the stated address.",
        options: [
          "GROUP",
          "OFFSET",
          "ORG",
          "LABEL"
        ],
        correctAnswer: "ORG"
      },
      {
        question: "Which of the following is not a microprocessor?",
        options: [
          "Z8000",
          "Motorola 6809",
          "Zilog Z8",
          "PIC1x"
        ],
        correctAnswer: "PIC1x"
      },
      {
        question: "Which of the following is not a property of TRAP interrupt in microprocessor?",
        options: [
          "It is a non-maskable interrupt",
          "It is of highest priority",
          "It uses edge-triggered signal",
          "It is a vectored interrupt"
        ],
        correctAnswer: "It uses edge-triggered signal"
      },
      {
        question: "Which of the following is a property of RST 7.5 interrupt?",
        options: [
          "It is a non-maskable interrupt",
          "It has 3rd highest priority",
          "It uses level-triggered signal",
          "Its vectored address is 003C H"
        ],
        correctAnswer: "Its vectored address is 003C H"
      },
      {
        question: "Which of the following flag is used to mask INTR interrupt?",
        options: [
          "zero flag",
          "auxiliary carry flag flag",
          "interrupt flag",
          "sign flag"
        ],
        correctAnswer: "interrupt flag"
      },
      {
        question: "Which of the following is a special-purpose register of microprocessor?",
        options: [
          "Program counter",
          "Instruction register",
          "Accumulator",
          "Temporary register"
        ],
        correctAnswer: "Program counter"
      },
      {
        question: "Which of the following circuit is used as a special signal to demultiplex the address bus and data bus?",
        options: [
          "Priority Encoder",
          "Decoder",
          "Address Latch Enable",
          "Demultiplexer"
        ],
        correctAnswer: "Address Latch Enable"
      },
      {
        question: "How many flip-flops are there in a flag register of 8085 microprocessor?",
        options: [
          "4",
          "5",
          "7",
          "10"
        ],
        correctAnswer: "5"
      },
      {
        question: "Which of the following flag condition is used for BCD arithmetic operations in microprocessor?",
        options: [
          "Sign flag",
          "Auxiliary carry flag",
          "Parity flag",
          "Zero flag"
        ],
        correctAnswer: "Auxiliary carry flag"
      },
      {
        question: "Whenever a non-maskable interrupt occurs in 8085 microprocessor, which of the following data line contains the data?",
        options: [
          "2C H",
          "3C H",
          "36 H",
          "24 H"
        ],
        correctAnswer: "24 H"
      },
      {
        question: "What does a microprocessor understand after decoding opcode?",
        options: [
          "Perform ALU operation",
          "Go to memory",
          "Length of the instruction and number of operations",
          "Go to the output device"
        ],
        correctAnswer: "Length of the instruction and number of operations"
      },
      {
        question: "How many address lines are present in 8086 microprocessor?",
        options: [
          "16",
          "20",
          "32",
          "40"
        ],
        correctAnswer: "20"
      },
      {
        question: "Which of the following is not a status flag in microprocessor?",
        options: [
          "Overflow flag",
          "Direction flag",
          "Interrupt flag",
          "Index flag"
        ],
        correctAnswer: "Index flag"
      },
      {
        question: "Which of the following is not a condition flag?",
        options: [
          "Trap flag",
          "Auxiliary carry flag",
          "Parity flag",
          "Zero flag"
        ],
        correctAnswer: "Trap flag"
      },
      {
        question: "Which of the following register is not used in opcode fetch operations?",
        options: [
          "Program counter",
          "Memory address register",
          "Memory data register",
          "Flag register"
        ],
        correctAnswer: "Flag register"
      },
      {
        question: "A memory connected to a microprocessor has 20 address lines and 16 data lines. What will be the memory capacity?",
        options: [
          "8 KB",
          "2 MB",
          "16 MB",
          "64 KB"
        ],
        correctAnswer: "2 MB"
      },
      {
        question: "What is the word length of the Pentium-II microprocessor?",
        options: [
          "8-bit",
          "32-bit",
          "64-bit",
          "16-bit"
        ],
        correctAnswer: "64-bit"
      },
      {
        question: "Which of the following is not true about 8085 microprocessor?",
        options: [
          "It is an 8-bit microprocessor",
          "It is a 40 pin DIP chip",
          "It is manufactured using PMOS technology",
          "It has 16 address lines"
        ],
        correctAnswer: "It is manufactured using PMOS technology"
      },
      {
        question: "Which of the following is a non-vectored input?",
        options: [
          "TRAP",
          "RST-7.5",
          "RST-6.5",
          "INTR"
        ],
        correctAnswer: "INTR"
      },
      {
        question: "Which of the following is true?",
        options: [
          "Every instruction has two parts i.e. opcode and operands",
          "MOV B, C is a two-byte instruction",
          "MVI A, 90H is a three-byte instruction",
          "Maximum number of T-states possible for the execution of an instruction is 16"
        ],
        correctAnswer: "Every instruction has two parts i.e. opcode and operands"
      },
      {
        question: "Which of the following addressing mode is used by 8085 microprocessor for array and list operations?",
        options: [
          "Base-Register",
          "Direst",
          "Indexed",
          "Immediate"
        ],
        correctAnswer: "Indexed"
      },
      {
        question: "What is stored in the H & L general-purpose register?",
        options: [
          "Opcode",
          "Address of memory",
          "Address of next instruction",
          "Temporary data"
        ],
        correctAnswer: "Address of memory"
      },
      {
        question: "If a 90 GB memory has to be connected to a microprocessor, minimum how many address lines are required?",
        options: [
          "36",
          "39",
          "32",
          "37"
        ],
        correctAnswer: "37"
      },
      {
        question: "Which of the following is a software interrupt?",
        options: [
          "TRAP",
          "INTR",
          "RST-6.5",
          "RST-5"
        ],
        correctAnswer: "RST-5"
      },
      {
        question: "What is the vectored address of RST-5?",
        options: [
          "0010 H",
          "0032 H",
          "0028 H",
          "0030 H"
        ],
        correctAnswer: "0028 H"
      },
      {
        question: "Which of the following is true about stack pointer?",
        options: [
          "Stack pointer contains the address of the top of the stack memory",
          "Stack pointer is an 8-bit register",
          "Stack pointer stores data permanently",
          "Stack pointer is initialized after stack operation"
        ],
        correctAnswer: "Stack pointer contains the address of the top of the stack memory"
      },
      {
        question: "How many address lines are required to connect a 4 KB RAM to a microprocessor?",
        options: [
          "10",
          "16",
          "12",
          "20"
        ],
        correctAnswer: "12"
      },
      {
        question: "Which of the following is true about MOV A, B instruction?",
        options: [
          "It means move the content of register A to register B",
          "It uses immediate addressing mode",
          "It doesn’t affect the flag register",
          "It is a 2-byte instruction"
        ],
        correctAnswer: "It means move the content of register A to register B"
      },
      {
        question: "Which of the following is false about LDA instruction?",
        options: [
          "It is a 3-byte instruction",
          "It uses indirect addressing mode",
          "It has 13 T-states",
          "It doesn’t affect any flags"
        ],
        correctAnswer: "It uses indirect addressing mode"
      },
      {
        question: "Which is of the following is true about HLT instruction?",
        options: [
          "It is a machine control instruction",
          "It is used to start the execution of the program",
          "PC is disconnected from the address bus",
          "A reset interrupt is required to come out of halt state"
        ],
        correctAnswer: "It is a machine control instruction"
      },
      {
        question: "Conditional instructions are independent of which of the following flag?",
        options: [
          "Z",
          "AC",
          "CY",
          "P"
        ],
        correctAnswer: "AC"
      },
      {
        question: "Which of the following interfacing IC is a DMA controller?",
        options: [
          "8257/37",
          "8155",
          "8253/54",
          "8279"
        ],
        correctAnswer: "8257/37"
      },
      {
        question: "Which of the following is a 2-word instruction set?",
        options: [
          "LDA 2500H",
          "MOV A, B",
          "IN 01H",
          "JMP 2085H"
        ],
        correctAnswer: "IN 01H"
      },
      {
        question: "Which of the following is a register-indirect addressing mode instruction set?",
        options: [
          "LDA 2700H",
          "ADI 36H",
          "DAA",
          "LDAX B"
        ],
        correctAnswer: "LDAX B"
      },
      {
        question: "Which is of the following is true about SPHL instruction?",
        options: [
          "It uses indexed addressing mode",
          "It is a 3-byte instruction",
          "It requires three T-states",
          "Contents of HL pair is moved to SP"
        ],
        correctAnswer: "Contents of HL pair is moved to SP"
      },
      {
        question: "Which of the following interfacing IC is a DMA controller?",
        options: [
          "8257/37",
          "8155",
          "8253/54",
          "8279"
        ],
        correctAnswer: "8257/37"
      },
      {
        question: "Which of the following is a 2-word instruction set?",
        options: [
          "LDA 2500H",
          "MOV A, B",
          "IN 01H",
          "JMP 2085H"
        ],
        correctAnswer: "IN 01H"
      },
      {
        question: "Which of the following is a register-indirect addressing mode instruction set?",
        options: [
          "LDA 2700H",
          "ADI 36H",
          "DAA",
          "LDAX B"
        ],
        correctAnswer: "LDAX B"
      },
      {
        question: "Which is of the following is true about SPHL instruction?",
        options: [
          "It uses indexed addressing mode",
          "It is a 3-byte instruction",
          "It requires three T-states",
          "Contents of HL pair is moved to SP"
        ],
        correctAnswer: "Contents of HL pair is moved to SP"
      },
      {
        question: "While CPU is executing a program, an interrupt exists then it",
        options: [
          "follows the next instruction in the program",
          "jumps to instruction in other registers",
          "breaks the normal sequence of execution of instructions",
          "stops executing the program"
        ],
        correctAnswer: "breaks the normal sequence of execution of instructions"
      },
      {
        question: "An interrupt breaks the execution of instructions and diverts its execution to",
        options: [
          "Interrupt service routine",
          "Counter word register",
          "Execution unit",
          "control unit"
        ],
        correctAnswer: "Interrupt service routine"
      },
      {
        question: "While executing the main program, if two or more interrupts occur, then the sequence of appearance of interrupts is called",
        options: [
          "multi-interrupt",
          "nested interrupt",
          "interrupt within interrupt",
          "nested interrupt and interrupt within interrupt"
        ],
        correctAnswer: "nested interrupt and interrupt within interrupt"
      },
      {
        question: "Whenever a number of devices interrupt a CPU at a time, and if the processor is able to handle them properly, it is said to have",
        options: [
          "interrupt handling ability",
          "interrupt processing ability",
          "multiple interrupt processing ability",
          "multiple interrupt executing ability"
        ],
        correctAnswer: "multiple interrupt processing ability"
      },
      {
        question: "NMI stands for",
        options: [
          "nonmaskable interrupt",
          "nonmultiple interrupt",
          "nonmovable interrupt",
          "none of the mentioned"
        ],
        correctAnswer: "nonmaskable interrupt"
      },
      {
        question: "If any interrupt request given to an input pin cannot be disabled by any means then the input pin is called",
        options: [
          "maskable interrupt",
          "nonmaskable interrupt",
          "maskable interrupt and nonmaskable interrupt",
          "none of the mentioned"
        ],
        correctAnswer: "nonmaskable interrupt"
      },
      {
        question: "The INTR interrupt may be",
        options: [
          "maskable",
          "nonmaskable",
          "maskable and nonmaskable",
          "none of the mentioned"
        ],
        correctAnswer: "maskable"
      },
      {
        question: "The Programmable interrupt controller is required to",
        options: [
          "handle one interrupt request",
          "handle one or more interrupt requests at a time",
          "handle one or more interrupt requests with a delay",
          "handle no interrupt request"
        ],
        correctAnswer: "handle one or more interrupt requests at a time"
      },
      {
        question: "The INTR interrupt may be masked using the flag",
        options: [
          "direction flag",
          "overflow flag",
          "interrupt flag",
          "sign flag"
        ],
        correctAnswer: "interrupt flag"
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
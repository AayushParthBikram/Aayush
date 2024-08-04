const quizData = [
    {
        question: "What is Microprocessor?",
        options: [
          "A multipurpose PLD that accepts binary data as input",
          "A multipurpose PLD that accepts an integer as input",
          "A multipurpose PLD that accepts whole numbers as input",
          "A multipurpose PLD that accepts prime numbers as input"
        ],
        correctAnswer: "A multipurpose PLD that accepts binary data as input",
        explanation: "A microprocessor is a multipurpose PLD that accepts binary data as input and processes data according to the instructions, and outputs the result. Binary instructions are read from memory."
      },
      {
        question: "Which of the following is correct about 8086 microprocessor?",
        options: [
          "Intel’s first x86 processor",
          "Motrola’s first x86 processor",
          "STMICROELECTRONICS’s first x86 processor",
          "NanoXplore x86 processor"
        ],
        correctAnswer: "Intel’s first x86 processor",
        explanation: "The Intel 8086 is Intel’s first x86 processor. They launched the most powerful processor in terms of advanced architecture i.e. 8086 processor in 1978. It has larger memory addressing capability and a powerful instruction set."
      },
      {
        question: "Which of the following is a type of microprocessor?",
        options: [
          "CISC: Complex Instruction Set Computer",
          "RISC: Reduced Instruction Set Computer",
          "EPIC: Explicitly Parallel Instruction Computing",
          "All of the mentioned"
        ],
        correctAnswer: "All of the mentioned",
        explanation: "Microprocessors can be of various types, including CISC, RISC, and EPIC, each with its own characteristics."
      },
      {
        question: "The microprocessor of a computer can operate on any information if it is present in ______________ only.",
        options: [
          "Program Counter",
          "Flag",
          "Main Memory",
          "Secondary Memory"
        ],
        correctAnswer: "Main Memory",
        explanation: "If the information isn’t in the computer’s main store, the microprocessor can’t do anything with it. The primary storage area in a computer, also known as main storage or memory, is where data is stored for easy access by the computer’s processor. Random-access memory (RAM) and memory are frequently used interchangeably to refer to primary or main storage."
      },
      {
        question: "Which of the following technology was used by Intel to design its first 8-bit microprocessor?",
        options: [
          "NMOS",
          "HMOS",
          "PMOS",
          "TTL"
        ],
        correctAnswer: "PMOS",
        explanation: "PMOS technology was used for designing the processor because this technology was slow but simple."
      },
      {
        question: "Which of the following addressing method does the instruction, MOV AX,[BX] represent?",
        options: [
          "register indirect addressing mode",
          "direct addressing mode",
          "register addressing mode",
          "register relative addressing mode"
        ],
        correctAnswer: "register indirect addressing mode",
        explanation: "In register indirect addressing mode the address of the operand is stored in the register. Since the instruction specifies that the register used to refer to the address is accessed indirectly, it represents the register indirect addressing mode."
      },
      {
        question: "What is the word length of an 8-bit microprocessor?",
        options: [
          "8-bits – 64 bits",
          "4-bits – 32 bits",
          "8-bits – 16 bits",
          "8-bits – 32 bits"
        ],
        correctAnswer: "8-bits – 64 bits",
        explanation: "At a time, an 8-bit CPU can process 8 bits of data. Depending on the type of microcomputer, the word length might range from 4 to 64 bits."
      },
      {
        question: "In 8-bit microprocessor, how many opcodes are present?",
        options: [
          "246",
          "278",
          "250",
          "256"
        ],
        correctAnswer: "246",
        explanation: "In an 8-bit microprocessor, maximum 28 = 256 opcodes are possible. But it consists of only 246 opcodes."
      },
      {
        question: "Which of the following is not true about the address bus?",
        options: [
          "It consists of control PIN 21 to 28",
          "It is a bidirectional bus",
          "It is 16 bits in length",
          "Lower address bus lines (AD0 – AD7) are called “Line number”"
        ],
        correctAnswer: "It is a bidirectional bus",
        explanation: "Data bus in the microprocessor is bidirectional but the address bus is unidirectional. AD0 – AD7 are the address lines that can be used for both address and data bus lines."
      },
      {
        question: "Which of the following is true about microprocessors?",
        options: [
          "It has an internal memory",
          "It has interfacing circuits",
          "It contains ALU, CU, and registers",
          "It uses Harvard architecture"
        ],
        correctAnswer: "It contains ALU, CU, and registers",
        explanation: "Microprocessors don’t have memory and interfacing circuits. They follow Princeton architecture and they contain ALU, CU, and registers inside them."
      },
      {
        question: "Which of the following is the correct sequence of operations in a microprocessor?",
        options: [
          "Opcode fetch, memory read, memory write, I/O read, I/O write",
          "Opcode fetch, memory write, memory read, I/O read, I/O write",
          "I/O read, opcode fetch, memory read, memory write, I/O write",
          "I/O read, opcode fetch, memory write, memory read, I/O write"
        ],
        correctAnswer: "Opcode fetch, memory read, memory write, I/O read, I/O write",
        explanation: "Initially, the opcode is fetched from memory, then memory read and write operations are performed followed by I/O read and I/O write operations."
      },
      {
        question: "The ________ directive instructs the assembler to begin memory allocation for a segment/block/code from the stated address.",
        options: [
          "GROUP",
          "OFFSET",
          "ORG",
          "LABEL"
        ],
        correctAnswer: "ORG",
        explanation: "When an ORG is written, the assembler starts the location counter to keep track of the module’s allotted address as specified in the directive. The location counter is initialized to 0000H if the directive is not present."
      },
      {
        question: "Which of the following is not a microprocessor?",
        options: [
          "Z8000",
          "Motorola 6809",
          "Zilog Z8",
          "PIC1x"
        ],
        correctAnswer: "PIC1x",
        explanation: "Z8000, Motorola 6809, and Zilog Z8 are microprocessors but PIC1x is an 8-bit microcontroller."
      },
      {
        question: "Which of the following is not a property of TRAP interrupt in microprocessor?",
        options: [
          "It is a non-maskable interrupt",
          "It is of highest priority",
          "It uses edge-triggered signal",
          "It is a vectored interrupt"
        ],
        correctAnswer: "It uses edge-triggered signal",
        explanation: "TRAP interrupt in 8085 microprocessor uses both level and edge-triggered clock because it is of highest priority among all the interrupts."
      },
      {
        question: "Which of the following is a property of RST 7.5 interrupt?",
        options: [
          "It is a non-maskable interrupt",
          "It has 3rd highest priority",
          "It uses level-triggered signal",
          "Its vectored address is 003C H"
        ],
        correctAnswer: "Its vectored address is 003C H",
        explanation: "RST 7.5 is a maskable interrupt with 2nd highest priority after RST-4.5. It uses only the edge-triggered signal. It is a vectored interrupt and its vectored address is 003C H."
      },
      {
        question: "Which of the following flag is used to mask INTR interrupt?",
        options: [
          "zero flag",
          "auxiliary carry flag",
          "interrupt flag",
          "sign flag"
        ],
        correctAnswer: "interrupt flag",
        explanation: "If the interrupt flag, IF=1, is set, the microprocessor will serve any interrupt. The processor ignores the service if the interrupt flag, IF=0, is set to 0."
      },
      {
        question: "Which of the following is a special-purpose register of microprocessor?",
        options: [
          "Program counter",
          "Instruction register",
          "Accumulator",
          "Temporary register"
        ],
        correctAnswer: "Program counter",
        explanation: "Instruction register, accumulator, and temporary register are general-purpose registers but program counter is a special-purpose register because it holds the address of the next instruction."
      },
      {
        question: "Which of the following circuit is used as a special signal to demultiplex the address bus and data bus?",
        options: [
          "Priority Encoder",
          "Decoder",
          "Address Latch Enable",
          "Demultiplexer"
        ],
        correctAnswer: "Address Latch Enable",
        explanation: "Address Latch Enable is a positive pulse and it is generated whenever the microprocessor starts an operation to latch the lower order address lines (AD7 to AD0)."
      },
      {
        question: "How many flip-flops are there in a flag register of 8085 microprocessor?",
        options: [
          "4",
          "5",
          "7",
          "10"
        ],
        correctAnswer: "5",
        explanation: "There are five flags or flip-flops in a flag register in 8085 microprocessor that shows the status after ALU operation. They are mainly affected by the content of the accumulator."
      },
      {
        question: "Which of the following flag condition is used for BCD arithmetic operations in microprocessor?",
        options: [
          "Sign flag",
          "Auxiliary carry flag",
          "Parity flag",
          "Zero flag"
        ],
        correctAnswer: "Auxiliary carry flag",
        explanation: "Among all the five flag conditions in microprocessor, the auxiliary carry flag is used internally for BCD arithmetic operations. Based on the auxiliary flag, the instruction set doesn’t contain the conditional jump operation."
      },
      {
        "question": "Whenever a non-maskable interrupt occurs in 8085 microprocessor, which of the following data line contains the data?",
        "options": ["2C H", "3C H", "36 H", "24 H"],
        "correctAnswer": "24 H",
        "explanation": "TRAP interrupt is a non-maskable interrupt with the highest priority. When it occurs, its vectored address 0024 H is placed on the program counter. 24 H is the lower address bus which also acts as the data bus."
      },
      {
        "question": "What does a microprocessor understand after decoding opcode?",
        "options": ["Perform ALU operation", "Go to memory", "Length of the instruction and number of operations", "Go to the output device"],
        "correctAnswer": "Length of the instruction and number of operations",
        "explanation": "After decoding the opcode of the instruction, a microprocessor understands the length of the instruction and the total number of operations to be performed."
      },
      {
        "question": "How many address lines are present in 8086 microprocessor?",
        "options": ["16", "20", "32", "40"],
        "correctAnswer": "20",
        "explanation": "8086 microprocessor is a 16-bit microprocessor that uses 20 address lines and 16 data lines. AD0 to AD15 are 16 lower order address lines that can be operated in both address and data bus mode."
      },
      {
        "question": "Which of the following is not a status flag in microprocessor?",
        "options": ["Overflow flag", "Direction flag", "Interrupt flag", "Index flag"],
        "correctAnswer": "Index flag",
        "explanation": "Overflow flag represents whether the result is out of scope or not. Direction flag is used in string operations and interrupt flag is used to enable the interrupts."
      },
      {
        "question": "Which of the following is not a condition flag?",
        "options": ["Trap flag", "Auxiliary carry flag", "Parity flag", "Zero flag"],
        "correctAnswer": "Trap flag",
        "explanation": "Trap, direction, and interrupt are the control flags. Carry, parity, auxiliary carry, zero, sign and overflow flags are the condition flags."
      },
      {
        "question": "Which of the following register is not used in opcode fetch operations?",
        "options": ["Program counter", "Memory address register", "Memory data register", "Flag register"],
        "correctAnswer": "Flag register",
        "explanation": "Flag register is not used in opcode fetch operations. It is used to represent the status of ALU operation which is performed after decoding of the opcode."
      },
      {
        "question": "A memory connected to a microprocessor has 20 address lines and 16 data lines. What will be the memory capacity?",
        "options": ["8 KB", "2 MB", "16 MB", "64 KB"],
        "correctAnswer": "2 MB",
        "explanation": "Total number of locations of the memory possible for 20 address lines is 220 and every location has 16/8 = 2 bytes. So, total memory capacity will be 220 × 2 = 2 MB."
      },
      {
        "question": "What is the word length of the Pentium-II microprocessor?",
        "options": ["8-bit", "32-bit", "64-bit", "16-bit"],
        "correctAnswer": "64-bit",
        "explanation": "The Pentium-II microprocessor is a 64-bit microprocessor. It was introduced in 1997 and designed with 7.5 million transistors. Its word length is 64-bit."
      },
      {
        "question": "Which of the following is not true about 8085 microprocessor?",
        "options": ["It is an 8-bit microprocessor", "It is a 40 pin DIP chip", "It is manufactured using PMOS technology", "It has 16 address lines"],
        "correctAnswer": "It is manufactured using PMOS technology",
        "explanation": "8085 microprocessor is manufactured using NMOS technology. PMOS technology is used in a 4004 microprocessors. NMOS technology is faster than PMOS technology."
      },
      {
        "question": "Which of the following is a non-vectored input?",
        "options": ["TRAP", "RST-7.5", "RST-6.5", "INTR"],
        "correctAnswer": "INTR",
        "explanation": "TRAP, RST-7.5, and RST-6.5 are vectored inputs but INTR is a non-vectored input. It has the least priority and its address is provided by the user using an external device."
      },
      {
        "question": "Which of the following is true?",
        "options": [
          "Every instruction has two parts i.e. opcode and operands",
          "MOV B, C is a two-byte instruction",
          "MVI A, 90H is a three-byte instruction",
          "Maximum number of T-states possible for the execution of an instruction is 16"
        ],
        "correctAnswer": "Every instruction has two parts i.e. opcode and operands",
        "explanation": "MOV B, C is a one-byte instruction. MVI A, 90H is a two-byte instruction and the maximum number of T-states possible for the execution of an instruction in 8085 microprocessor is 18."
      },
      {
        "question": "Which of the following addressing mode is used by 8085 microprocessor for array and list operations?",
        "options": ["Base-Register", "Direct", "Indexed", "Immediate"],
        "correctAnswer": "Indexed",
        "explanation": "Indexed addressing mode is used for array and list operations. It uses a constant value and index register to execute the instruction."
      },
      {
        "question": "What is stored in the H & L general-purpose register?",
        "options": [
          "Opcode",
          "Address of memory",
          "Address of next instruction",
          "Temporary data"
        ],
        "correctAnswer": "Address of memory",
        "explanation": "H and L are 8-bit general-purpose registers. They are used to store the address of memory. Together they can store a 16-bit address."
      },
      {
        "question": "If a 90 GB memory has to be connected to a microprocessor, minimum how many address lines are required?",
        "options": ["36", "39", "32", "37"],
        "correctAnswer": "37",
        "explanation": "90 GB is greater than 64 GB and less than 128 GB. For 64 GB (236 Bytes), a minimum of 36 address lines are needed. So, for 90 GB, we need 36 + 1 = 37 address lines."
      },
      {
        "question": "Which of the following is a software interrupt?",
        "options": ["TRAP", "INTR", "RST-6.5", "RST-5"],
        "correctAnswer": "RST-5",
        "explanation": "TRAP, INTR, and RST-6.5 are the hardware interrupts but RST-5 is a software interrupt present. All software interrupts are vectored interrupts."
      },
      {
        "question": "What is the vectored address of RST-5?",
        "options": [
          "0010 H",
          "0032 H",
          "0028 H",
          "0030 H"
        ],
        "correctAnswer": "0028 H",
        "explanation": "Vectored address of RST-n is calculated by the formula n × 8. So, vectored address of RST-5 is (40)10. (40)10 in hexadecimal is (28)16 = 0028 H."
      },
      {
        "question": "Which of the following is true about stack pointer?",
        "options": [
          "Stack pointer contains the address of the top of the stack memory",
          "Stack pointer is an 8-bit register",
          "Stack pointer stores data permanently",
          "Stack pointer is initialized after stack operation"
        ],
        "correctAnswer": "Stack pointer contains the address of the top of the stack memory",
        "explanation": "Stack pointer is initialized before stack operation, it is a 16-bit register that stores data temporarily. It follows a LIFO operation. So, it contains the address of the top of the stack memory."
      },
      {
        "question": "How many address lines are required to connect a 4 KB RAM to a microprocessor?",
        "options": ["10", "16", "12", "20"],
        "correctAnswer": "12",
        "explanation": "4 KB RAM is equal to 4096 × 8 bits. Total number locations are (4096 × 8)/8 = 4096 and 4096 = 212. So, 12 address lines are required to connect a 4 KB RAM to a microprocessor."
      },
      {
        "question": "Which of the following is true about MOV A, B instruction?",
        "options": [
          "It means move the content of register A to register B",
          "It uses immediate addressing mode",
          "It doesn’t affect the flag register",
          "It is a 2-byte instruction"
        ],
        "correctAnswer": "It doesn’t affect the flag register",
        "explanation": "MOV A, B means moving the content of register B to register A. It is a 1-byte instruction and it uses register addressing mode. No flags are affected because operations of this instruction are not performed in the ALU."
    },
    {
        "question": "Which of the following is true about STA instruction?",
        "options": [
          "It uses immediate addressing mode",
          "It is a 3-byte instruction",
          "It required three machine cycles",
          "Accumulator is loaded with the content of memory"
        ],
        "correctAnswer": "It is a 3-byte instruction",
        "explanation": "STA is a direct addressing mode instruction which stands for Store Accumulator Direct. It is a 3-byte instruction and it requires four machine cycles. In STA instruction memory is loaded with the content of the accumulator."
      },
      {
        "question": "DAA instruction is used to perform which type of addition?",
        "options": [
          "BCD addition",
          "Excess-3 addition",
          "Binary addition",
          "Octal addition"
        ],
        "correctAnswer": "BCD addition",
        "explanation": "DAA instruction is used to perform BCD addition. DAA instruction changes the binary values of the contents of the accumulator to BCD."
      },
      {
        "question": "What does a loader do in a microprocessor?",
        "options": [
          "Converts hexadecimal code to binary",
          "Converts decimal to binary",
          "Increments the content of the program counter by 1",
          "Decodes an opcode"
        ],
        "correctAnswer": "Converts hexadecimal code to binary",
        "explanation": "Microprocessor understands only 0s & 1s. So, a loader first converts hexadecimal code to binary form and then loads it to the memory."
      },
      {
        "question": "Suppose registers ‘A’ and ‘B’ contain 50H and 40H respectively. After instruction MOV A, B, what will be the contents of registers A and B?",
        "options": [
          "40H, 40H",
          "50H, 40H",
          "50H, 50H",
          "60H, 40H"
        ],
        "correctAnswer": "40H, 40H",
        "explanation": "Initially, register A contains 50H & B contains 40H. Instruction MOV A, B means move the content of B to A. So, after this operation, both registers A & B will contain 40H."
      },
      {
        "question": "For how many times per instruction, the content of the program counter is placed on the address bus?",
        "options": [
          "One time",
          "Two times",
          "Depends on the memory capacity of the processor",
          "Depends on the length of the instruction"
        ],
        "correctAnswer": "Depends on the length of the instruction",
        "explanation": "After decoding an opcode the microprocessor understands the length of the instruction. So, the content of the program counter is placed on the address bus as many times as the length of the instruction."
      },
      {
        "question": "Conditional instructions are independent of which of the following flag?",
        "options": ["Z", "AC", "CY", "P"],
        "correctAnswer": "AC",
        "explanation": "Conditional instructions are the branching instructions. In this group, the program control is transferred from one location to another conditionally. They depend on the status of flags affected for previous ALU operations except the AC flag."
      },
      {
        "question": "Which of the following is not correct about HLT instruction?",
        "options": [
          "It is a machine control instruction",
          "It is used to start the execution of the program",
          "PC is disconnected from the address bus",
          "A reset interrupt is required to come out of halt state"
        ],
        "correctAnswer": "It is used to start the execution of the program",
        "explanation": "HLT is a machine control statement. Internally, the PC is disconnected from the address bus so, the next fetch is not possible. It is used mainly to stop the execution of the program."
      },
      {
        "question": "When data required for instruction is present inside the register of a microprocessor then which of the following addressing mode is used?",
        "options": [
          "Indexed",
          "Register",
          "Relative",
          "Direct"
        ],
        "correctAnswer": "Register",
        "explanation": "Register addressing mode is used when data is present inside the register of the microprocessor. For example, MOV B, C. Here, B and C are the registers of the microprocessor."
      },
      {
        "question": "Which of the following interfacing IC is a DMA controller?",
        "options": [
          "8257/37",
          "8155",
          "8253/54",
          "8279"
        ],
        "correctAnswer": "8257/37",
        "explanation": "8155 is a multipurpose programmable I/O device. 8253/54 is a programmable counter. 8279 is a keyboard/display controller and 8257/37 is a DMA controller."
      },
      {
        "question": "Which of the following is a 2-word instruction set?",
        "options": [
          "LDA 2500H",
          "MOV A, B",
          "IN 01H",
          "JMP 2085H"
        ],
        "correctAnswer": "IN 01H",
        "explanation": "LDA 2500H and JMP 2085H are 3-word instructions. MOV A, B is a 1-word instruction. IN 01H is a 2-word instruction, the first byte specifies the opcode and the second byte specifies the operand."
      },
      {
        "question": "Which of the following is a register-indirect addressing mode instruction set?",
        "options": [
          "LDA 2700H",
          "ADI 36H",
          "DAA",
          "LDAX B"
        ],
        "correctAnswer": "LDAX B",
        "explanation": "LDA 2700H is a direct addressing mode instruction. ADI 36H is an immediate addressing mode instruction. DAA is an implicit addressing mode and LDAX B is a register-indirect addressing mode instruction."
      },
      {
        "question": "Which is of the following is true about SPHL instruction?",
        "options": [
          "It uses indexed addressing mode",
          "It is a 3-byte instruction",
          "It requires three T-states",
          "Contents of HL pair is moved to SP"
        ],
        "correctAnswer": "Contents of HL pair is moved to SP",
        "explanation": "SPHL is a 1-byte instruction. It uses register addressing mode. It required 6 T-states and it means moving the contents of the HL pair to SP."
      },
      {
        "question": "The disadvantage of CISC design processors is",
        "options": [
          "low burden on compiler developers",
          "wide availability of existing software",
          "complex in nature",
          "none"
        ],
        "correctAnswer": "complex in nature",
        "explanation": "Some computers are used in preference to CISC design due to its low burden on compiler developers and wide availability of existing software. But they are complex in nature."
      },
      {
        "question": "The RISC architecture is preferred to CISC because RISC architecture has",
        "options": [
          "simplicity",
          "efficiency",
          "high speed",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "The RISC architecture is preferred to CISC because RISC architecture is simple, highly efficient and the processors using RISC architecture have high speed."
      },
      {
        "question": "The feature of RISC that is not present in CISC is",
        "options": [
          "branch prediction",
          "pipelining",
          "branch prediction and pipelining",
          "none"
        ],
        "correctAnswer": "branch prediction and pipelining",
        "explanation": "A RISC core allows performance enhancing features, such as branch prediction and pipelining. Traditionally, these have only been possible in RISC designs."
      },
      {
        "question": "The feature of hybrid CISC-RISC architecture is",
        "options": [
          "consume a lot of power",
          "not applicable to mobile applications",
          "processed by RISC core",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "The CISC-RISC hybrids continue to consume a lot of power and are not best candidates for mobile and embedded applications."
      },
      {
        "question": "Which of the following is an application of RISC architecture by adding more instructions?",
        "options": [
          "multimedia applications",
          "telecommunication encoding",
          "image conversion",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "By adding more instructions to the RISC architecture, some applications can be run much faster like multimedia applications, telecommunication encoding/decoding, image conversion and video processing."
      },
      {
        "question": "Which of the following processor belongs to hybrid RISC-CISC architecture?",
        "options": [
          "Intel Pentium III",
          "Intel Itanium 64",
          "AMD’s X86-64",
          "All of the mentioned"
        ],
        "correctAnswer": "All of the mentioned",
        "explanation": "The processors, Intel Pentium III, Intel Itanium 64 and AMD’s X86-64 consists of hybrid RISC-CISC architecture."
      },
      {
        "question": "In order to implement complex instructions, CISC architectures use",
        "options": [
          "macroprogramming",
          "hardwire",
          "microprogramming",
          "none"
        ],
        "correctAnswer": "microprogramming",
        "explanation": "In order to implement complex instructions, CISC architectures use microprogramming."
      },
      {
        "question": "The advantage of RISC processors is",
        "options": [
          "can operate at high clock frequency",
          "shorter design cycle",
          "simple and fast",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "The advantages of RISC processors are that they can work at high clock frequency, can be designed, developed and tested more quickly with a high speed."
      },
      {
        "question": "The additional functionality that can be placed on the same chip of RISC is",
        "options": [
          "Memory management units",
          "Floating point units",
          "Memory management and floating point arithmetic units",
          "RAM, ROM"
        ],
        "correctAnswer": "Memory management and floating point arithmetic units",
        "explanation": "Several extra functionalities, such as memory management units or floating point arithmetic units, can also be placed on the same chip of RISC."
      },
      {
        "question": "The number of clockcycles that take to wait until the length of the instruction is known in order to start decoding is",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctAnswer": "0",
        "explanation": "The loading and decoding the instructions in a RISC processor is simple and fast. It is not needed to wait until the length of the instruction is known in order to start the decoding."
      },
      {
        "question": "The number of CPIs(Clock Per Instruction) for an instruction of RISC processors is",
        "options": [
          "0",
          "1",
          "2",
          "3"
        ],
        "correctAnswer": "1",
        "explanation": "RISC processors have unity CPI(Clock Per Instruction), which is due to the optimization of each instruction on the CPU and massive pipelining embedded in a RISC processor."
      },
      {
        "question": "Which of the following is not true about RISC processors?",
        "options": [
          "addressing modes are less",
          "pipelining is key for high speed",
          "microcoding is required",
          "single machine cycle instructions"
        ],
        "correctAnswer": "microcoding is required",
        "explanation": "Unlike the CISC, in RISC architecture, instruction microcoding is not required."
      },
      {
        "question": "The RISC processors that support variable length instructions are from",
        "options": [
          "Intel",
          "Motorola",
          "AMD",
          "Intel and Motorola"
        ],
        "correctAnswer": "Intel and Motorola",
        "explanation": "In RISC, each instruction is of the same length, so that it may be fetched in a single operation. The traditional microprocessors from Intel or Motorola support variable length instructions."
      },
      {
        "question": "Which of the following is true about register windowing?",
        "options": [
          "chips expose 32 registers to programmer",
          "puts demands on multiplexers",
          "puts enormous demands on register ports",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "The register windowing involves a mechanism where the chips expose 32 registers to the programmer at any one time. It puts enormous demands on multiplexers and register ports to make any physical register appear to be any logical register."
      },
      {
        "question": "The disadvantage of register windowing is",
        "options": [
          "high speed",
          "puts demands on multiplexers/register ports",
          "consumes less cycles",
          "doesn’t handle overflow/underflow"
        ],
        "correctAnswer": "doesn’t handle overflow/underflow",
        "explanation": "It is impossible to predict when the register file will overflow or underflow, so performance is unpredictable. It generates a software fault, which the operating system has to handle, consuming more cycles."
      },
      {
        "question": "The register window is used to point the number of physical registers is",
        "options": [
          "infinite",
          "that are currently used",
          "finite",
          "that are unused"
        ],
        "correctAnswer": "finite",
        "explanation": "The register window only helps us to point the number of physical registers is finite."
      },
      {
        "question": "Which of the following is not a stage of pipeline of a RISC processor?",
        "options": [
          "read registers and decode the instructions",
          "fetch instructions from registers",
          "write result into a register",
          "access an operand in data memory"
        ],
        "correctAnswer": "fetch instructions from registers",
        "explanation": "There are 5 stages in pipelining. They are\n1. Fetch instructions from memory\n2. Read registers and decode the instructions\n3. Execute the instructions or calculate an address\n4. Access an operand in data memory\n5. Write result into a register."
      },
      {
        "question": "When an instruction depends on the results of the previous instructions then",
        "options": [
          "error occurs",
          "software fault occurs",
          "data dependency occurs",
          "hardware fault occurs"
        ],
        "correctAnswer": "data dependency occurs",
        "explanation": "A data dependency occurs when an instruction depends on the results of the previous instructions."
      },
      {
        "question": "The instructions that instruct the processor to make a decision about the next instruction to be executed are",
        "options": [
          "data dependency instructions",
          "branch instructions",
          "control transfer instructions",
          "none"
        ],
        "correctAnswer": "branch instructions",
        "explanation": "The branch instructions are those which instruct the processor to make a decision about the next instruction to be executed, depending upon whether the condition is satisfied or not."
      },
      {
        "question": "The reason for which the RISC processor goes to idle state(or stall) is",
        "options": [
          "delay in reading information from memory",
          "poor instruction set design",
          "dependencies between instructions",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "There are a variety of reasons, including delays in reading information from memory, poor instruction set design, or dependencies between instructions for the RISC processor to remain idle."
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
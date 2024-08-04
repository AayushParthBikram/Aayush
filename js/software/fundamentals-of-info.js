const quizData = [
    {
      "question": "Who is the father of Computers?",
      "options": [
        "James Gosling",
        "Charles Babbage",
        "Dennis Ritchie",
        "Bjarne Stroustrup"
      ],
      "correctAnswer": "Charles Babbage",
      "explanation": "Charles Babbage is known as the father of computers. Charles Babbage designed and built the first mechanical computer and Difference Engine."
    },
    {
      "question": "Which of the following is the correct abbreviation of COMPUTER?",
      "options": [
        "Commonly Occupied Machines Used in Technical and Educational Research",
        "Commonly Operated Machines Used in Technical and Environmental Research",
        "Commonly Oriented Machines Used in Technical and Educational Research",
        "Commonly Operated Machines Used in Technical and Educational Research"
      ],
      "correctAnswer": "Commonly Operated Machines Used in Technical and Educational Research",
      "explanation": "The word COMPUTER is an abbreviation for the terms “Commonly Operated Machines Used in Technical and Educational Research”. The word COMPUTER also relates to the word COMPUTE which means to calculate. So initially, it was thought that a computer is a device that is used to perform calculations."
    },
    {
      "question": "Which of the following is the correct definition of Computer?",
      "options": [
        "Computer is a machine or device that can be programmed to perform arithmetical or logic operation sequences automatically",
        "Computer understands only binary language which is written in the form of 0s & 1s",
        "Computer is a programmable electronic device that stores, retrieves, and processes the data",
        "All of the mentioned"
      ],
      "correctAnswer": "All of the mentioned",
      "explanation": "A computer is a machine or device that can be programmed to perform arithmetical or logic operation sequences automatically. The computer understands only binary codes (0s & 1s)."
    },
    {
      "question": "What is the full form of CPU?",
      "options": [
        "Computer Processing Unit",
        "Computer Principle Unit",
        "Central Processing Unit",
        "Control Processing Unit"
      ],
      "correctAnswer": "Central Processing Unit",
      "explanation": "CPU stands for Central Processing Unit. CPU is the part of a computer system that is mainly referred as the brain of the computer."
    },
    {
      "question": "Which of the following language does the computer understand?",
      "options": [
        "Computer understands only C Language",
        "Computer understands only Assembly Language",
        "Computer understands only Binary Language",
        "Computer understands only BASIC"
      ],
      "correctAnswer": "Computer understands only Binary Language",
      "explanation": "The Computer understands only binary language which is written in the form of 0s & 1s. A computer can understand assembly language but an assembler is required which convert the assembly language to binary language. Similarly, for understanding high level languages, compilers/interpreters are required."
    },
    {
      "question": "Which of the following computer language is written in binary codes only?",
      "options": [
        "pascal",
        "machine language",
        "C",
        "C#"
      ],
      "correctAnswer": "machine language",
      "explanation": "Machine Language is written in binary codes only. It can be easily understood by the computer and is very difficult for us to understand. A machine language, unlike other languages, requires no translators or interpreters."
    },
    {
      "question": "Which of the following is the brain of the computer?",
      "options": [
        "Central Processing Unit",
        "Memory",
        "Arithmetic and Logic unit",
        "Control unit"
      ],
      "correctAnswer": "Central Processing Unit",
      "explanation": "The CPU is referred to as the brain of a computer. It consists of a control unit and an arithmetic and logic unit. It is responsible for performing all the processes and operations."
    },
    {
      "question": "Which of the following is not a characteristic of a computer?",
      "options": [
        "Versatility",
        "Accuracy",
        "Diligence",
        "I.Q."
      ],
      "correctAnswer": "I.Q.",
      "explanation": "The Computer system has no I.Q. of its own. It does only what it is programmed to do. It cannot take decisions of its own. A computer is diligent because it can work continuously for hours without getting any errors or without getting grumbled. The accuracy of a computer is consistently high and its level of accuracy depends on its design. A computer can perform any task if, it can be broken down into a series of logical steps. Therefore, a computer is versatile."
    },
    {
      "question": "Which of the following is the smallest unit of data in a computer?",
      "options": [
        "Bit",
        "KB",
        "Nibble",
        "Byte"
      ],
      "correctAnswer": "Bit",
      "explanation": "A bit is defined as the smallest unit of data in a computer system. It is used as a short form of Binary Digit. A bit can have only two values 0 or 1. A nibble comprises 4 bits, a byte is a collection of 8 bits whereas KB (Kilobyte) is equal to 1024 bytes."
    },
    {
      "question": "Which of the following unit is responsible for converting the data received from the user into a computer understandable format?",
      "options": [
        "Output Unit",
        "Input Unit",
        "Memory Unit",
        "Arithmetic & Logic Unit"
      ],
      "correctAnswer": "Input Unit",
      "explanation": "The Input Unit converts the data, which the user enters into a language that the computer understands, i.e. it converts the data into binary format. The Output Unit is responsible for giving the results in a user-understandable format. The Storage Unit is responsible for storing the data after immediate results of processing whereas; the ALU is responsible for various arithmetic and bitwise operations."
    },
    {
      "question": "Which of the following monitor looks like a television and are normally used with non-portable computer systems?",
      "options": [
        "LED",
        "LCD",
        "CRT",
        "Flat Panel Monitors"
      ],
      "correctAnswer": "CRT",
      "explanation": "A CRT (or the Cathode Ray Tube) Monitor looks like a television ideally. The flat-panel monitors are thinner and lighter in comparison."
    },
    {
      "question": "Which of the following is the first neural network computer?",
      "options": [
        "AN",
        "AM",
        "RFD",
        "SNARC"
      ],
      "correctAnswer": "SNARC",
      "explanation": "SNARC was the first neural network computer. it was built by Minsky and Edmonds in 1956."
    },
    {
      "question": "Which of the following service allows a user to log in to another computer somewhere on the Internet?",
      "options": [
        "e-mail",
        "UseNet",
        "Telnet",
        "FTP"
      ],
      "correctAnswer": "Telnet",
      "explanation": "Telnet is the answer. It is a service that enables the user to log into another computer somewhere on the Internet."
    },
    {
      "question": "Which of the following computers are lower than mainframe computers in terms of speed and storage capacity?",
      "options": [
        "Mainframes",
        "Hybrid",
        "Mini",
        "Super"
      ],
      "correctAnswer": "Mini",
      "explanation": "The answer is c. Mini computers are compared to mainframe computers in terms of: 1. speed and, 2. storage capacity."
    },
    {
      "question": "Which of the following is the device used for converting maps, pictures, and drawings into digital form for storage in computers?",
      "options": [
        "Image Scanner",
        "Digitizer",
        "MICR",
        "Scanner"
      ],
      "correctAnswer": "Digitizer",
      "explanation": "A digitizer serves the purpose given in the question. Digitizers are generally used in the area of Computer-Aided Design by architects and engineers to design cars, buildings, etc."
    },
    {
      "question": "Which of the following is not a type of computer on the basis of operation?",
      "options": [
        "Digital",
        "Analog",
        "Hybrid",
        "Remote"
      ],
      "correctAnswer": "Remote",
      "explanation": "There are three types of computers basically on the basis of operation: Analog, Digital, and Hybrid."
    },
    {
      "question": "Which of the following type of computer is mostly used for automatic operations?",
      "options": [
        "Analog",
        "Digital",
        "Hybrid",
        "Remote"
      ],
      "correctAnswer": "Hybrid",
      "explanation": "Hybrid computer is mostly used with automatic operations of complicated physical processes and machines."
    },
    {
      "question": "Which of the following invention gave birth to the much cheaper microcomputers?",
      "options": [
        "PDAs",
        "Microprocessors",
        "Microcomputers",
        "Mainframes"
      ],
      "correctAnswer": "Microprocessors"
    },
    {
      "question": "Which of the following type of technique in which dumb terminals are connected to a central computer system?",
      "options": [
        "Time Sharing",
        "Message passing",
        "Batch environment",
        "User environment"
      ],
      "correctAnswer": "Time Sharing",
      "explanation": "This happens in time-sharing. In time-sharing, Users were able to interact with the computer and could share its information processing resources."
    },
    {
      "question": "Which of the following is a type of technique in which dumb terminals are connected to a central computer system?",
      "options": [
        "Time Sharing",
        "Message passing",
        "Batch environment",
        "User environment"
      ],
      "correctAnswer": "Time Sharing",
      "explanation": "This happens in time-sharing. In time-sharing, Users were able to interact with the computer and could share its information processing resources."
    },
    {
      "question": "Which of the following service allows a user to log in to another computer somewhere on the Internet?",
      "options": [
        "e-mail",
        "UseNet",
        "Telnet",
        "FTP"
      ],
      "correctAnswer": "Telnet",
      "explanation": "Telnet is the answer. It is a service that enables the user to log into another computer somewhere on the Internet."
    },
    {
      "question": "Which of the following is a type of technique in which dumb terminals are connected to a central computer system?",
      "options": [
        "Time Sharing",
        "Message passing",
        "Batch environment",
        "User environment"
      ],
      "correctAnswer": "Time Sharing",
      "explanation": "This happens in time-sharing. In time-sharing, Users were able to interact with the computer and could share its information processing resources."
    },
    {
      "question": "Which of the following service allows a user to log in to another computer somewhere on the Internet?",
      "options": [
        "e-mail",
        "UseNet",
        "Telnet",
        "FTP"
      ],
      "correctAnswer": "Telnet",
      "explanation": "Telnet is the answer. It is a service that enables the user to log into another computer somewhere on the Internet."
    },
    {
      "question": "Which of the following is a type of technique in which dumb terminals are connected to a central computer system?",
      "options": [
        "Time Sharing",
        "Message passing",
        "Batch environment",
        "User environment"
      ],
      "correctAnswer": "Time Sharing",
      "explanation": "This happens in time-sharing. In time-sharing, Users were able to interact with the computer and could share its information processing resources."
    },
    {
      "question": "Which of the following service allows a user to log in to another computer somewhere on the Internet?",
      "options": [
        "e-mail",
        "UseNet",
        "Telnet",
        "FTP"
      ],
      "correctAnswer": "Telnet",
      "explanation": "Telnet is the answer. It is a service that enables the user to log into another computer somewhere on the Internet."
    },
    {
        "question": "The ‘heart’ of the processor which performs many different operations _____________",
        "options": [
          "Arithmetic and logic unit",
          "Motherboard",
          "Control Unit",
          "Memory"
        ],
        "correctAnswer": "Arithmetic and logic unit",
        "explanation": "The Arithmetic and logic unit performs all the basic operations of the computer system. It performs all the arithmetic(+,-,*,/,etc) as well as the logical operations( AND, OR, NOT, etc.)."
      },
      {
        "question": "ALU is the place where the actual executions of instructions take place during the processing operation.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "ALU is a combinational electronic circuit which basically performs all the logical or the bitwise operations and the arithmetic operations. Therefore, it is the place where the actual executions of instructions take place."
      },
      {
        "question": "Which of the following is not a bitwise operator?",
        "options": [
          "|",
          "^",
          ".",
          "<<"
        ],
        "correctAnswer": ".",
        "explanation": "All except the dot(.) operator are bitwise operators.\n| : Bitwise OR\n^ : Bitwise XOR\n<< : Shift Left"
      },
      {
        "question": "The sign magnitude representation of -1 is __________",
        "options": [
          "0001",
          "1110",
          "1000",
          "1001"
        ],
        "correctAnswer": "1001",
        "explanation": "The first leftmost bit i.e. the most significant bit in the sign magnitude represents if the number is positive or negative. If the MSB is 1, the number is negative else if it is 0, the number is positive. Here, +1=0001 and for -1=1001."
      },
      {
        "question": "IEEE stands for ___________",
        "options": [
          "Instantaneous Electrical Engineering",
          "Institute of Emerging Electrical Engineers",
          "Institute of Emerging Electronic Engineers",
          "Institute of Electrical and electronics engineers"
        ],
        "correctAnswer": "Institute of Electrical and electronics engineers",
        "explanation": "The IEEE is an organization of professionals in the field of electronics and electrical engineering. IEEE has given certain standards of its own which are followed in the field of computer science and electrical engineering."
      },
      {
        "question": "The ALU gives the output of the operations and the output is stored in the ________",
        "options": [
          "Memory Devices",
          "Registers",
          "Flags",
          "Output Unit"
        ],
        "correctAnswer": "Registers",
        "explanation": "Any output generated by the ALU gets stored in the registers. The registers are the temporary memory locations within the processor that are connected by signal paths to the CPU."
      },
      {
        "question": "The process of division on memory spaces is called ______________",
        "options": [
          "Paging",
          "Segmentation",
          "Bifurcation",
          "Dynamic Division"
        ],
        "correctAnswer": "Segmentation",
        "explanation": "The memory space is divided into segments of dynamic size. The programmer is aware of the segmentation and can reallocate the segments accordingly."
      },
      {
        "question": "Number of bits in ALU is _________",
        "options": [
          "4",
          "8",
          "16",
          "2"
        ],
        "correctAnswer": "16",
        "explanation": "Arithmetic and Logic Unit consists of 16bits. They perform certain Arithmetic and bitwise operations (add, subtract, AND, OR, XOR, Increment, decrement, shift)."
      },
      {
        "question": "Which flag indicates the number of 1 bit that results from an operation?",
        "options": [
          "Zero",
          "Parity",
          "Auxiliary",
          "Carry"
        ],
        "correctAnswer": "Parity",
        "explanation": "The parity flag indicates the number of 1 bit in any operation. The resultant bit is called the parity bit. The main aim of the parity bit is to check for errors."
      },
      {
        "question": "The bitwise complement of 0 is ___________",
        "options": [
          "00000001",
          "10000000",
          "11111111",
          "11111110"
        ],
        "correctAnswer": "11111111",
        "explanation": "Bitwise complement is basically used to convert all the 0 digits to 1 and the 1s to 0s. So, for 0 = 00000000(in 8-bits) ::: 11111111(1s complement). The bitwise complement is often referred to as the 1s complement."
      },
      {
        "question": "__________ is the raw material used as input and __________ is the processed data obtained as output of data processing.",
        "options": [
          "Data, Instructions",
          "Instructions, Program",
          "Data, Program",
          "Program, Code"
        ],
        "correctAnswer": "Data, Instructions",
        "explanation": "Data can be assumed as a raw material which, in turns after processing gives the desired output in the form of instructions. Further, a set of ordered and meaningful instructions is known as a program."
      },
      {
        "question": "Which of the following is not a characteristic of a computer?",
        "options": [
          "Diligence",
          "I.Q.",
          "Accuracy",
          "Versatility"
        ],
        "correctAnswer": "I.Q.",
        "explanation": "The Computer system has no I.Q. of its own. It does only what it is programmed to do. It cannot take decisions of its own.\nA computer is diligent because it can work continuously for hours without getting any errors or without getting grumbled.\nThe accuracy of a computer is consistently high and its level of accuracy depends on its design. A computer can perform any task if, it can be broken down into a series of logical steps. Therefore, a computer is versatile."
      },
      {
        "question": "Fill in the blank in the diagram.\ncomputer-fundamentals-questions-answers-control-unit-q3",
        "options": [
          "Input Unit",
          "Memory Unit",
          "Control Unit",
          "I/O Unit"
        ],
        "correctAnswer": "Control Unit",
        "explanation": "The control unit manages and coordinates the operations of a computer system. The ALU is responsible for performing all the arithmetic and bitwise operations. Therefore, both these units combine to form the brain of the computer, which is the central processing unit."
      },
      {
        "question": "The part of a processor which contains hardware necessary to perform all the operations required by a computer:",
        "options": [
          "Data path",
          "Controller",
          "Registers",
          "Cache"
        ],
        "correctAnswer": "Data path",
        "explanation": "A processor is a part of the computer which does all the data manipulation and decision making. A processor comprises of:\nA data path which contains the hardware necessary to perform all the operations. A controller tells the data path what needs to be done.\nThe registers act as intermediate storage for the data."
      },
      {
        "question": "What does MAR stand for?",
        "options": [
          "Main Address Register",
          "Memory Access Register",
          "Main Accessible Register",
          "Memory Address Register"
        ],
        "correctAnswer": "Memory Address Register",
        "explanation": "MAR is a type of register which is responsible for the fetch operation. MAR is connected to the address bus and it specifies the address for the read and write operations."
      },
      {
        "question": "If the control signals are generated by combinational logic, then they are generated by a type of _______________ controlled unit.",
        "options": [
          "Micro programmed",
          "Software",
          "Logic",
          "Hardwired"
        ],
        "correctAnswer": "Hardwired",
        "explanation": "The main task of a control unit is to generate control signals. There are two main types of control units:\nA hardwired control unit generates control signals by using combinational logic circuits and the Micro programmed control unit generates control signals by using some softwares."
      },
      {
        "question": "Which is the simplest method of implementing hardwired control unit?",
        "options": [
          "State Table Method",
          "Delay Element Method",
          "Sequence Counter Method",
          "Using Circuits"
        ],
        "correctAnswer": "State Table Method",
        "explanation": "There are 3 ways of implementing hardwired control unit:\nA state table is the simplest method in which a number of circuits are designed based on the cells in the table.\nA delay element method consists of a flowchart drawn for the circuit. A D-flip flop is used as a delay element.\nA sequence counter method used k-modulo counter as a replacement for k delay elements."
      },
      {
        "question": "A set of microinstructions for a single machine instruction is called ___________",
        "options": [
          "Program",
          "Command",
          "Micro program",
          "Micro command"
        ],
        "correctAnswer": "Micro program",
        "explanation": "For every micro-operation, a set of microinstructions are written which indicate the control signals to be activated. A set of microinstructions is a micro program. The address of the next microinstruction is given by a Micro-program counter."
      },
      {
        "question": "Micro-program consists of a set of microinstructions which are strings of 0s and 1s.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "The computer understands only binary language. So, the micro-program should have instructions which are in the form of 0s and 1s. Each output line of the micro-program corresponds to one control signal."
      },
      {
        "question": "A decoder is required in case of a ______________",
        "options": [
          "Vertical Microinstruction",
          "Horizontal Microinstruction",
          "Multilevel Microinstruction",
          "All types of microinstructions"
        ],
        "correctAnswer": "Vertical Microinstruction",
        "explanation": "There are two types of microinstructions: Horizontal and Vertical.\nIn a horizontal microinstruction, each bit represents a signal to be activated whereas, in case of vertical microinstruction bits are decoded and, the decoder then produces signals."
      },
      {
        "question": "Which of the following is not a type of number system?",
        "options": [
          "Positional",
          "Non-Positional",
          "Octal",
          "Fractional"
        ],
        "correctAnswer": "Fractional",
        "explanation": "There are two main types of number systems : Positional & Non-positional.\nPositional System uses digits for the representation whereas, non-positional number systems use certain symbols for the representation of numbers. Octal is a type of positional number systems with base 8."
      },
      {
        "question": "How is the number 5 represented in non-positional number system?",
        "options": [
          "IIIII",
          "5",
          "V",
          "v"
        ],
        "correctAnswer": "V",
        "explanation": "In a non-positional number system, 1 is represented as I, 2 as II, 3 as III, 4 as IIII and therefore, 5 is represented as V in Roman Code. The digits in this number system are represented by symbols."
      },
      {
        "question": "The base is the total number of digits in a number system.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "The statement is true. In a positional number system, base is the number of digits the system comprises. For example, a binary number system comprises of only 2 digits, 0 and 1, therefore its base is 2. Similarly, the decimal system comprises 10 digits 0 to 9, therefore its base is 10."
      },
      {
        "question": "The LSB and MSB of 1243247 are ____ and ____",
        "options": [
          "1, 7",
          "4, 7",
          "7, 1",
          "4, 1"
        ],
        "correctAnswer": "7, 1",
        "explanation": "The LSB or the least significant bit is the rightmost digit at the zeros position. The MSB or the most significant bit is the leftmost digit."
      },
      {
        "question": "A device that uses positional notation to represent a decimal number.",
        "options": [
          "Abacus",
          "Calculator",
          "Pascaline",
          "Computer"
        ],
        "correctAnswer": "Abacus",
        "explanation": "Abacus was used to doing arithmetic calculations around 2500 years ago. Pascaline was the pascal’s calculator by Blaise Pascal invented for doing laborious calculations."
      },
      {
        "question": "The 2’s complement of 5 is ______________",
        "options": [
          "1011",
          "0101",
          "1010",
          "0011"
        ],
        "correctAnswer": "1011",
        "explanation": "The 2’s complement is obtained by adding 1 to the 1s complement of a number. The 1’s complement of 5(0101) is 1010. For 2’s complement : 1010+1=1011."
      },
      {
        "question": "What does BCD stand for?",
        "options": [
          "Bitwise coded decimal",
          "Binary coded decimal",
          "Binary converted decimal",
          "Bitwise Converted Decimal"
        ],
        "correctAnswer": "Binary coded decimal",
        "explanation": "BCD is the binary coded decimal form of representation of numbers in 4 bits.E.g. The BCD representation of 5 is 0101. BCD representation of 22 is 00100010."
      },
      {
        "question": "1 zettabyte = ______________",
        "options": [
          "1024 TB",
          "1024 EB",
          "1024 ZB",
          "1024 PB"
        ],
        "correctAnswer": "1024 EB",
        "explanation": "1 ZB=1024 EB(exabyte)\n1 EB=1024PB(petabyte)\n1 YB(yottabyte)=1024ZB."
      },
      {
        "question": "Perfrom BCD addition: 2+3= _______________",
        "options": [
          "0010",
          "0011",
          "0101",
          "1010"
        ],
        "correctAnswer": "0101",
        "explanation": "BCD of 2 =0010\nBCD of 3=0011\n0010+0011=0101\nTherefore, 2+3=0101(5)."
      },
      {
        "question": "ASCII stands for _____________________",
        "options": [
          "American standard code for information interchange",
          "American scientific code for information interchange",
          "American scientific code for international interchange",
          "American standard code of international interchange"
        ],
        "correctAnswer": "American standard code for information interchange",
        "explanation": "ASCII is an encoding standard which is used for communications worldwide. ASCII codes are allotted to digits, special characters and alphabets for data communication purpose."
      },
      {
        "question": "The physical devices of a computer :",
        "options": [
          "Software",
          "Package",
          "Hardware",
          "System Software"
        ],
        "correctAnswer": "Hardware",
        "explanation": "Hardware refers to the physical devices of a computer system. Software refers to a collection of programs. A program is a sequence of instructions."
      },
      {
        "question": "Software Package is a group of programs that solve multiple problems.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False",
        "explanation": "The statement is false. The software package is a group of programs that solve a specific problem or perform a specific type of job."
      },
      {
        "question": "________ refer to renewing or changing components like increasing the main memory, or hard disk capacities, or adding speakers, or modems, etc.",
        "options": [
          "Grades",
          "Prosody",
          "Synthesis",
          "Upgrades"
        ],
        "correctAnswer": "Upgrades",
        "explanation": "Upgrades is the right term to be used. Upgrades are installed to renew or implement a new feature. Except for upgrades, hardware is normally one-time expense."
      },
      {
        "question": "Which of the following is designed to control the operations of a computer?",
        "options": [
          "Application Software",
          "System Software",
          "Utility Software",
          "User"
        ],
        "correctAnswer": "System Software",
        "explanation": "Software is basically classified into two: System and application. System Software is designed to control the operations and extend the processing capability of a computer system."
      },
      {
        "question": "Which of the following is not an example of system software?",
        "options": [
          "Language Translator",
          "Utility Software",
          "Communication Software",
          "Word Processors"
        ],
        "correctAnswer": "Word Processors",
        "explanation": "A system software is responsible for controlling the operations of a computer system. Word Processor is an application software since it is specific to its purpose."
      },
      {
        "question": "A person who designs the programs in a software package is called :",
        "options": [
          "User",
          "Software Manager",
          "System Developer",
          "System Programmer"
        ],
        "correctAnswer": "System Programmer",
        "explanation": "The programs included in a system software package are called system programs. The programmers who design them and prepare them are called system programmers."
      },
      {
        "question": "___________________ is designed to solve a specific problem or to do a specific task.",
        "options": [
          "Application Software",
          "System Software",
          "Utility Software",
          "User"
        ],
        "correctAnswer": "Application Software",
        "explanation": "An application software is specific to solving a specific problem. System software is designed for controlling the operations of a computer system."
      },
      {
        "question": "Assembler is used as a translator for?",
        "options": [
          "Low level language",
          "High Level Language",
          "COBOL",
          "C"
        ],
        "correctAnswer": "Low level language",
        "explanation": "Assembler is used in case of low level languages. It is generally used to make the binary code into an understandable format. Interpreter is used with the high level languages similarly."
      },
      {
        "question": "What do you call a program in execution?",
        "options": [
          "Command",
          "Process",
          "Task",
          "Instruction"
        ],
        "correctAnswer": "Process",
        "explanation": "Option Process is correct. A program is a set of instructions. A program in execution is called a process."
      },
      {
        "question": "Which of the following is not a process state?",
        "options": [
          "Terminated",
          "Running",
          "Blocked",
          "Execution"
        ],
        "correctAnswer": "Blocked",
        "explanation": "There is no blocked state in a process model. The different states are ready, running, executing, waiting and terminated."
      },
      {
        "question": "The software designed to perform a specific task:",
        "options": [
          "Synchronous Software",
          "Package Software",
          "Application Software",
          "System Software"
        ],
        "correctAnswer": "Application Software",
        "explanation": "Software refers to a collection of programs. Software designed to do a specific task are referred to as the application software. Eg: Inventory management, banking, etc."
      },
      {
        "question": "Word processing software is a type of application software.\n a) True\n b) False",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "The statement is true. Since, application software are designed to do a specific job, word processing is a type of application software used for the designing of text documents."
      },
      {
        "question": "Developing software __________ means a major commitment of time, money and resources.",
        "options": [
          "In-house",
          "In-sync",
          "On-date",
          "On-duration"
        ],
        "correctAnswer": "In-house",
        "explanation": "Developing software in-house means the same. It is easier to carry out changes in the software if it is developed in-house"
      },
      {
        "question": "Which of the following is not a way of acquiring software?",
        "options": [
          "Buying pre-written software",
          "Ordering customized software",
          "Downloading public-domain Software",
          "Duplicating the software"
        ],
        "correctAnswer": "Duplicating the software",
        "explanation": "Duplication is not a correct way of acquiring the software. All the other options are valid. Apart from these, another option could be development of a customized software."
      },
      {
        "question": "OSS stands for:",
        "options": [
          "Open System Service",
          "Open Source Software",
          "Open System Software",
          "Open Synchronized Software"
        ],
        "correctAnswer": "Open Source Software",
        "explanation": "OSS stands for open source software. OSS allows any user to download, view, modify and redistribute the software. Also, the user can fix bugs according to needs."
      },
      {
        "question": "Public domain software is usually:",
        "options": [
          "System supported",
          "Source supported",
          "Community supported",
          "Programmer supported"
        ],
        "correctAnswer": "Community supported",
        "explanation": "The public domain software is generally community supported. It is community supported as author does not support users directly."
      },
      {
        "question": "Set of programs which consist of full documentation.",
        "options": [
          "Software Package",
          "System Software",
          "Utility Software",
          "File package"
        ],
        "correctAnswer": "Software Package",
        "explanation": "It is called a software package. A software is nothing but a collection of programs. A software package can solve a specific problem or perform a specific type of job."
      },
      {
        "question": "Interpreter is used as a translator for __________",
        "options": [
          "Low level language",
          "High Level Language",
          "COBOL",
          "C"
        ],
        "correctAnswer": "High Level Language",
        "explanation": "It is generally used to make the code into an machine understandable format. Interpreter is used with the high level languages similarly. Assembler is used in case of low level languages."
      },
      {
        "question": "What do you call a specific instruction designed to do a task?",
        "options": [
          "Command",
          "Process",
          "Task",
          "Instruction"
        ],
        "correctAnswer": "Command",
        "explanation": "A program is a set of instructions. A command is given to do a specific job. A program in execution is called a process."
      },
      {
        "question": "They normally interact with the system via user interface provided by the application software.",
        "options": [
          "Programmers",
          "Developers",
          "Users",
          "Testers"
        ],
        "correctAnswer": "Users",
        "explanation": "Users interact with the system via user interface that is given by the application software. An application software is a set of instructions designed to serve a particular purpose."
      },
      {
        "question": "A ____________ disk consists of a circular disk, which is coated with a thin metal or some other material that is highly reflective.",
        "options": [
          "magnetic",
          "optical",
          "compact",
          "hard"
        ],
        "correctAnswer": "optical",
        "explanation": "Optical disks are highly reflective. They can be used to store extremely large amounts of data in a limited space."
      },
      {
        "question": "Optical disks are proved to be a promising random access medium for high capacity secondary storage.\n a) True\n b) False",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Optical disks can store large amounts of data. The storage capacity depends on the sectors and the number of bytes."
      },
      {
        "question": "The technology used in optical disks is ______",
        "options": [
          "Reflective",
          "Refractive",
          "Laser Beam",
          "Diffraction"
        ],
        "correctAnswer": "Laser Beam",
        "explanation": "Laser beam technology is used in optical disks for recording or reading of data on the disk.\nIt is sometimes called the laser disk/optical laser disk due to the use of laser beam technology."
      },
      {
        "question": "The storage capacity of an optical disk is given by:",
        "options": [
          "Number of sectors * number of bytes per sector",
          "Number of sectors * 2(number of bytes per sector)",
          "Number of sectors * 3(number of bytes per sector)",
          "Number of sectors * 0.5(number of bytes per sector)"
        ],
        "correctAnswer": "Number of sectors * number of bytes per sector",
        "explanation": "The storage capacity is given by the formula in option a. The most popular disk uses a disk of 5.25 inch diameter with a storage capacity of around 650 megabytes."
      },
      {
        "question": "Rotation of the disk must vary __________ with the radius of the disk.",
        "options": [
          "directly",
          "inversely",
          "concurrently",
          "accordingly"
        ],
        "correctAnswer": "inversely",
        "explanation": "The rotation speed is inversely proportional to the radius of the disk.\nOptical drives use a constant linear velocity encoding scheme often referred to as the CLV scheme."
      },
      {
        "question": "The tracks are divided into sectors whose size _______",
        "options": [
          "remains the same",
          "keeps increasing",
          "keeps decreasing",
          "remains uneven"
        ],
        "correctAnswer": "remains the same",
        "explanation": "The tracks in an optical disk are divided into equal size sectors. Optical disk has one long spiral track, which starts at the outer edge and spirals inward to the center. Each sector is of the same length regardless of whether it is located near or away from the disk’s center."
      },
      {
        "question": "CLV stands for, in terms of rotation of the optical disk ___",
        "options": [
          "Concurrent lines value",
          "Constant Linear velocity",
          "Constant linear value",
          "Concurrent linear velocity"
        ],
        "correctAnswer": "Constant Linear velocity",
        "explanation": "It stands for constant linear velocity. The optical disk uses the CLV encoding scheme. Rotation speed depends on the radius of the disk."
      },
      {
        "question": "The range of access times of optical disks is generally ______",
        "options": [
          "100 to 300 milliseconds",
          "10 to 30 milliseconds",
          "200 to 400 milliseconds",
          "20 to 40 milliseconds"
        ],
        "correctAnswer": "100 to 300 milliseconds",
        "explanation": "The access times of optical disks are typically in the range of 100 to 300 milliseconds and that of hard disks are in the range of 10 to 30 milliseconds."
      },
      {
        "question": "Which of the following is not a type of optical disk?",
        "options": [
          "DVD",
          "CD",
          "WORM",
          "Winchester"
        ],
        "correctAnswer": "Winchester",
        "explanation": "The Winchester disk is a type of hard disk. Others are all optical disks. WORM is nothing but CD-R i.e., CD recordable. Stands for write once read many."
      },
      {
        "question": "Winchester disks are a type of _______\n a) optical disks\n b) magnetic disks\n c) compact disks\n d) magnetic drives",
        "options": [
          "optical disks",
          "magnetic disks",
          "compact disks",
          "magnetic drives"
        ],
        "correctAnswer": "magnetic disks",
        "explanation": "Bernoulli disks are a type of magnetic hard disks and not floppy disks. They are also called as zip disks. It uses a single hard disk platter encased in a plastic cartidge."
      },
      {
        "question": "Bernoulli disks are a type of magnetic floppy disks.\n a) True\n b) False",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False",
        "explanation": "Bernoulli disks are a type of magnetic hard disks and not floppy disks. They are also called as zip disks. It uses a single hard disk platter encased in a plastic cartidge."
      },
      {
        "question": "A plug and play storage device that simply plugs in the port of a computer is __________\n a) Flash drive\n b) Compact disk\n c) Hard disk\n d) CD",
        "options": [
          "Flash drive",
          "Compact disk",
          "Hard disk",
          "CD"
        ],
        "correctAnswer": "Flash drive",
        "explanation": "A flash drive often called as a pen drive enables easy transport of data from one computer to another. It comes in various shapes and sizes and may have different added features."
      },
      {
        "question": "What does USB stand for?\n a) Universal Signal Board\n b) Universal Signal Bus\n c) Universal Serial Bus\n d) Universal Serial Board",
        "options": [
          "Universal Signal Board",
          "Universal Signal Bus",
          "Universal Serial Bus",
          "Universal Serial Board"
        ],
        "correctAnswer": "Universal Serial Bus",
        "explanation": "USB stands for universal serial bus. A flash drive simply plugs in the USB port of a computer."
      },
      {
        "question": "A device similar to a flash drive ______________\n a) Memory card\n b) Compact drive\n c) Compact disk\n d) Memory disk",
        "options": [
          "Memory card",
          "Compact drive",
          "Compact disk",
          "Memory disk"
        ],
        "correctAnswer": "Memory card",
        "explanation": "Memory card serves a similar purpose as that of a flash drive. It is in the shape of a card. Useful in electronic devices like Camera, music player, etc."
      },
      {
        "question": "What does RAID stand for?\n a) Redundant array of independent disks\n b) Redundant array of inexpensive disks\n c) Redundant array of intermediate disks\n d) Redundant array of improper disks",
        "options": [
          "Redundant array of independent disks",
          "Redundant array of inexpensive disks",
          "Redundant array of intermediate disks",
          "Redundant array of improper disks"
        ],
        "correctAnswer": "Redundant array of independent disks",
        "explanation": "RAID is Redundant array of independent disks. It is an array of disks which can store data bits."
      },
      {
        "question": "A set of hard disk drives with a controller mounted in a single box, forming a single large storage unit is ____________\n a) Disk array\n b) Drives\n c) Compact drives\n d) Multi-cores",
        "options": [
          "Disk array",
          "Drives",
          "Compact drives",
          "Multi-cores"
        ],
        "correctAnswer": "Disk array",
        "explanation": "The answer is disk array. It is commonly known as RAID. As a secondary storage device, provides enhanced performance, enhanced storage capacity and reliability."
      },
      {
        "question": "The process in which a file is partitioned into smaller parts and different parts are stored in different disks is ____________\n a) RAID\n b) Mirroring\n c) Stripping\n d) RAID classification",
        "options": [
          "RAID",
          "Mirroring",
          "Stripping",
          "RAID classification"
        ],
        "correctAnswer": "Stripping",
        "explanation": "Enhanced reliability is achieved by using techniques like mirroring and stripping in case of disk arrays. Stripping is the division of a large file into smaller parts and then storing them on different disks."
      },
      {
        "question": "Which of the following uses multiple hard disk platters mounted on a single central shift?\n a) Disk drives\n b) Hard disks\n c) Disk packs\n d) Compact disks",
        "options": [
          "Disk drives",
          "Hard disks",
          "Disk packs",
          "Compact disks"
        ],
        "correctAnswer": "Disk packs",
        "explanation": "Disk packs use a number of hard disk platters. Also, they are mounted on a single central shaft."
      },
      {
        "question": "Which of the following is not a magnetic disk?\n a) Floppy\n b) Winchester\n c) Zip\n d) FLASH",
        "options": [
          "Floppy",
          "Winchester",
          "Zip",
          "FLASH"
        ],
        "correctAnswer": "FLASH",
        "explanation": "Flash drives are a type of memory storage devices. It is a relatively newer type of secondary storage device which enables easy transfer of data from one computer to another."
      },
      {
        "question": "The physical layer is concerned with ___________\n a) bit-by-bit delivery\n b) process to process delivery\n c) application to application delivery\n d) port to port delivery",
        "options": [
          "bit-by-bit delivery",
          "process to process delivery",
          "application to application delivery",
          "port to port delivery"
        ],
        "correctAnswer": "bit-by-bit delivery",
        "explanation": "Physical layer deals with bit to bit delivery in networking. The data unit in the physical layer is bits. Process to process delivery or the port to port delivery is dealt in the transport layer. The various transmission mediums aid the physical layer in performing its functions."
      },
      {
        "question": "Which transmission media provides the highest transmission speed in a network?\n a) coaxial cable\n b) twisted pair cable\n c) optical fiber\n d) electrical cable",
        "options": [
          "coaxial cable",
          "twisted pair cable",
          "optical fiber",
          "electrical cable"
        ],
        "correctAnswer": "optical fiber",
        "explanation": "Fiber optics is considered to have the highest transmission speed among the all mentioned above. The fiber optics transmission runs at 1000Mb/s. It is called as 1000Base-Lx whereas IEEE standard for it is 802.3z. It is popularly used for modern day network connections due to its high transmission rate."
      },
      {
        "question": "Bits can be sent over guided and unguided media as analog signal by ___________\n a) digital modulation\n b) amplitude modulation\n c) frequency modulation\n d) phase modulation",
        "options": [
          "digital modulation",
          "amplitude modulation",
          "frequency modulation",
          "phase modulation"
        ],
        "correctAnswer": "digital modulation",
        "explanation": "In analog modulation, digital low frequency baseband signal (digital bit stream) is transmitted over a higher frequency. Whereas in digital modulation the only difference is that the base band signal is of discrete amplitude level. The bits are represented by only two frequency levels, one for high and one for low."
      },
      {
        "question": "The portion of physical layer that interfaces with the media access control sublayer is called ___________\n a) physical signalling sublayer\n b) physical data sublayer\n c) physical address sublayer\n d) physical transport sublayer",
        "options": [
          "physical signalling sublayer",
          "physical data sublayer",
          "physical address sublayer",
          "physical transport sublayer"
        ],
        "correctAnswer": "physical signalling sublayer",
        "explanation": "The portion of physical layer that interfaces with the medium access control sublayer is Physical Signaling Sublayer. The main function of this layer is character encoding, reception, decoding and performs optional isolation functions. It handles which media connection the signal should be forwarded to physically."
      },
      {
        "question": "The physical layer provides __________\n a) mechanical specifications of electrical connectors and cables\n b) electrical specification of transmission line signal level\n c) specification for IR over optical fiber\n d) all of the mentioned",
        "options": [
          "mechanical specifications of electrical connectors and cables",
          "electrical specification of transmission line signal level",
          "specification for IR over optical fiber",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "Anything dealing with a network cable or the standards in use – including pins, connectors and the electric current used is dealt in the physical layer (Layer 1). Physical layer deals with bit to bit delivery of the data aided by the various transmission mediums."
      },
      {
        "question": "In asynchronous serial communication the physical layer provides ___________\n a) start and stop signalling\n b) flow control\n c) both start & stop signalling and flow control\n d) only start signalling",
        "options": [
          "start and stop signalling",
          "flow control",
          "both start & stop signalling and flow control",
          "only start signalling"
        ],
        "correctAnswer": "both start & stop signalling and flow control",
        "explanation": "In asynchronous serial communication, the communication is not synchronized by clock signal. Instead of a start and stop signaling and flow control method is followed. Unlike asynchronous serial communication, in synchronous serial communication a clock signal is used for communication, so the start and stop method is not really required."
      },
      {
        "question": "The physical layer is responsible for __________\n a) line coding\n b) channel coding\n c) modulation\n d) all of the mentioned",
        "options": [
          "line coding",
          "channel coding",
          "modulation",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "The physical layer is responsible for line coding, channel coding and modulation that is needed for the transmission of the information. The physical configuration including pins, connectors and the electric current used is dealt in the physical layer based on the requirement of the network application."
      },
      {
        "question": "The physical layer translates logical communication requests from the ______ into hardware specific operations.\n a) data link layer\n b) network layer\n c) trasnport layer\n d) application layer",
        "options": [
          "data link layer",
          "network layer",
          "trasnport layer",
          "application layer"
        ],
        "correctAnswer": "data link layer",
        "explanation": "Physical layer accepts data or information from the data link layer and converts it into hardware specific operations so as to transfer the message through physical cables. Some examples of the cables used are optical fiber cables, twisted pair cables and co-axial cables."
      },
      {
        "question": "A single channel is shared by multiple signals by ____________\n a) analog modulation\n b) digital modulation\n c) multiplexing\n d) phase modulation",
        "options": [
          "analog modulation",
          "digital modulation",
          "multiplexing",
          "phase modulation"
        ],
        "correctAnswer": "multiplexing",
        "explanation": "In communication and computer networks, the main goal is to share a scarce resource. This is done by multiplexing, where multiple analog or digital signals are combined into one signal over a shared medium. The multiple kinds of signals are designated by the transport layer which is the layer present on a higher level than the physical layer."
      },
      {
        "question": "Wireless transmission of signals can be done via ___________\n a) radio waves\n b) microwaves\n c) infrared\n d) all of the mentioned",
        "options": [
          "radio waves",
          "microwaves",
          "infrared",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "Wireless transmission is carried out by radio waves, microwaves and IR waves. These waves range from 3 Khz to above 300 Ghz and are more suitable for wireless transmission."
      },
      {
        "question": "The data link layer takes the packets from _________ and encapsulates them into frames for transmission.\n a) network layer\n b) physical layer\n c) transport layer\n d) application layer",
        "options": [
          "network layer",
          "physical layer",
          "transport layer",
          "application layer"
        ],
        "correctAnswer": "network layer",
        "explanation": "In computer networks, the data from application layer is sent to transport layer and is converted to segments. These segments are then transferred to the network layer and these are called packets. These packets are then sent to data link layer where they are encapsulated into frames. These frames are then transferred to physical layer where the frames are converted to bits. Error control and flow control data is inserted in the frames at the data link layer."
      },
      {
        "question": "Which of the following tasks is not done by data link layer?\n a) framing\n b) error control\n c) flow control\n d) channel coding",
        "options": [
          "framing",
          "error control",
          "flow control",
          "channel coding"
        ],
        "correctAnswer": "channel coding",
        "explanation": "Channel coding is the function of physical layer. Data link layer mainly deals with framing, error control and flow control. Data link layer is the layer where the packets are encapsulated into frames."
      },
      {
        "question": "Which sublayer of the data link layer performs data link functions that depend upon the type of medium?\n a) logical link control sublayer\n b) media access control sublayer\n c) network interface control sublayer\n d) error control sublayer",
        "options": [
          "logical link control sublayer",
          "media access control sublayer",
          "network interface control sublayer",
          "error control sublayer"
        ],
        "correctAnswer": "media access control sublayer",
        "explanation": "Media access control (MAC) deals with transmission of data packets to and from the network-interface card, and also to and from another remotely shared channel. The MAC sublayer also prevents collision using protocols like CSMA/CD."
      },
      {
        "question": "Header of a frame generally contains ______________\n a) synchronization bytes\n b) addresses\n c) frame identifier\n d) all of the mentioned",
        "options": [
          "synchronization bytes",
          "addresses",
          "frame identifier",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "In a frame, the header is a part of the data that contains all the required information about the transmission of the file. It contains information like synchronization bytes, addresses, frame identifier etc. It also contains error control information for reducing the errors in the transmitted frames."
      },
      {
        "question": "Automatic repeat request error management mechanism is provided by ________\n a) logical link control sublayer\n b) media access control sublayer\n c) network interface control sublayer\n d) application access control sublayer",
        "options": [
          "logical link control sublayer",
          "media access control sublayer",
          "network interface control sublayer",
          "application access control sublayer"
        ],
        "correctAnswer": "logical link control sublayer",
        "explanation": "The logical link control is a sublayer of data link layer whose main function is to manage traffic, flow and error control. The automatic repeat request error management mechanism is provided by the LLC when an error is found in the received frame at the receiver’s end to inform the sender to re-send the frame."
      },
      {
        "question": "When 2 or more bits in a data unit has been changed during the transmission, the error is called ____________\n a) random error\n b) burst error\n c) inverted error\n d) double error",
        "options": [
          "random error",
          "burst error",
          "inverted error",
          "double error"
        ],
        "correctAnswer": "burst error",
        "explanation": "When a single bit error occurs in a data, it is called single bit error. When more than a single bit of data is corrupted or has error, it is called burst error. If a single bit error occurs, the bit can be simply repaired by inverting it, but in case of a burst error, the sender has to send the frame again."
      },
      {
        "question": "CRC stands for __________\n a) cyclic redundancy check\n b) code repeat check\n c) code redundancy check\n d) cyclic repeat check",
        "options": [
          "cyclic redundancy check",
          "code repeat check",
          "code redundancy check",
          "cyclic repeat check"
        ],
        "correctAnswer": "cyclic redundancy check",
        "explanation": "Cyclic redundancy check is a code that is added to a data which helps us to identify any error that occurred during the transmission of the data. CRC is only able to detect errors, not correct them. CRC is inserted in the frame trailer."
      },
      {
        "question": "The network layer is concerned with __________ of data.\n a) bits\n b) frames\n c) packets\n d) bytes",
        "options": [
          "bits",
          "frames",
          "packets",
          "bytes"
        ],
        "correctAnswer": "packets",
        "explanation": "In computer networks, the data from the application layer is sent to the transport layer and is converted to segments. These segments are then transferred to the network layer and these are called packets. These packets are then sent to data link layer where they are encapsulated into frames. These frames are then transferred to physical layer where the frames are converted to bits."
      },
      {
        "question": "Which one of the following is not a function of network layer?\n a) routing\n b) inter-networking\n c) congestion control\n d) error control",
        "options": [
          "routing",
          "inter-networking",
          "congestion control",
          "error control"
        ],
        "correctAnswer": "error control",
        "explanation": "In the OSI model, network layer is the third layer and it provides data routing paths for network communications. Error control is a function of the data link layer and the transport layer."
      },
      {
        "question": "A 4 byte IP address consists of __________\n a) only network address\n b) only host address\n c) network address & host address\n d) network address & MAC address",
        "options": [
          "only network address",
          "only host address",
          "network address & host address",
          "network address & MAC address"
        ],
        "correctAnswer": "network address & host address",
        "explanation": "An ip address which is 32 bits long, that means it is of 4 bytes and is composed of a network and host portion and it depends on address class. The size of the host address and network address depends upon the class of the address in classful IP addressing."
      },
      {
        "question": "In virtual circuit network each packet contains ___________\n a) full source and destination address\n b) a short VC number\n c) only source address\n d) only destination address",
        "options": [
          "full source and destination address",
          "a short VC number",
          "only source address",
          "only destination address"
        ],
        "correctAnswer": "a short VC number",
        "explanation": "A short VC number also called as VCID (virtual circuit identifier) is a type of identifier which is used to distinguish between several virtual circuits in a connection oriented circuit switched network. Each virtual circuit is used to transfer data over a larger packet switched network."
      },
      {
        "question": "Which of the following routing algorithms can be used for network layer design?\n a) shortest path algorithm\n b) distance vector routing\n c) link state routing\n d) all of the mentioned",
        "options": [
          "shortest path algorithm",
          "distance vector routing",
          "link state routing",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "The routing algorithm is what decides where a packet should go next. There are several routing techniques like shortest path algorithm, static and dynamic routing, decentralized routing, distance vector routing, link state routing, Hierarchical routing etc. The routing algorithms go hand in hand with the operations of all the routers in the networks. The routers are the main participants in these algorithms."
      },
      {
        "question": "Which of the following is not correct in relation to multi-destination routing?\n a) is same as broadcast routing\n b) contains the list of all destinations\n c) data is not sent by packets\n d) there are multiple receivers",
        "options": [
          "is same as broadcast routing",
          "contains the list of all destinations",
          "data is not sent by packets",
          "there are multiple receivers"
        ],
        "correctAnswer": "data is not sent by packets",
        "explanation": "In multi-destination routing, there is more than one receiver and the route for each destination which is contained in a list of destinations is to be found by the routing algorithm. Multi-destination routing is also used in broadcasting."
      },
      {
        "question": "A subset of a network that includes all the routers but contains no loops is called ________\n a) spanning tree\n b) spider structure\n c) spider tree\n d) special tree",
        "options": [
          "spanning tree",
          "spider structure",
          "spider tree",
          "special tree"
        ],
        "correctAnswer": "spanning tree",
        "explanation": "Spanning tree protocol (STP) is a network protocol that creates a loop free logical topology for ethernet networks. It is a layer 2 protocol that runs on bridges and switches. The main purpose of STP is to ensure that you do not create loops when you have redundant paths in your network."
      },
      {
        "question": "Which one of the following algorithm is not used for congestion control?\n a) traffic aware routing\n b) admission control\n c) load shedding\n d) routing information protocol",
        "options": [
          "traffic aware routing",
          "admission control",
          "load shedding",
          "routing information protocol"
        ],
        "correctAnswer": "routing information protocol",
        "explanation": "The Routing Information Protocol (RIP) is used by the network layer for the function of dynamic routing. Congestion control focuses on the flow of the traffic in the network and uses algorithms like traffic aware routing, admission control and load shedding to deal with congestion."
      },
      {
        "question": "Transport layer aggregates data from different applications into a single stream before passing it to ____________\n a) network layer\n b) data link layer\n c) application layer\n d) physical layer",
        "options": [
          "network layer",
          "data link layer",
          "application layer",
          "physical layer"
        ],
        "correctAnswer": "network layer",
        "explanation": "The flow of data in the OSI model flows in the following manner: Application -> Presentation -> Session -> Transport -> Network -> Data Link -> Physical. Each and every layer has its own set of functions and protocols to ensure efficient network performance."
      },
      {
        "question": "Which of the following are transport layer protocols used in networking?\n a) TCP and FTP\n b) UDP and HTTP\n c) TCP and UDP\n d) HTTP and FTP",
        "options": [
          "TCP and FTP",
          "UDP and HTTP",
          "TCP and UDP",
          "HTTP and FTP"
        ],
        "correctAnswer": "TCP and UDP",
        "explanation": "Both TCP and UDP are transport layer protocols in networking. TCP is an abbreviation for Transmission Control Protocol and UDP is an abbreviation for User Datagram Protocol. TCP is connection oriented whereas UDP is connectionless."
      },
      {
        "question": "User datagram protocol is called connectionless because _____________\n a) all UDP packets are treated independently by transport layer\n b) it sends data as a stream of related packets\n c) it is received in the same order as sent order\n d) it sends data very quickly",
        "options": [
          "all UDP packets are treated independently by transport layer",
          "it sends data as a stream of related packets",
          "it is received in the same order as sent order",
          "it sends data very quickly"
        ],
        "correctAnswer": "all UDP packets are treated independently by transport layer",
        "explanation": "UDP is an alternative for TCP and it is used for those purposes where speed matters most whereas loss of data is not a problem. UDP is connectionless whereas TCP is connection oriented."
      },
      {
        "question": "Transmission control protocol ___________\n a) is a connection-oriented protocol\n b) uses a three way handshake to establish a connection\n c) receives data from application as a single stream\n d) all of the mentioned",
        "options": [
          "is a connection-oriented protocol",
          "uses a three way handshake to establish a connection",
          "receives data from application as a single stream",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "TCP provides reliable and ordered delivery of a stream of bytes between hosts communicating via an IP network. Major internet applications like www, email, file transfer etc rely on TCP. TCP is connection oriented and it is optimized for accurate delivery rather than timely delivery."
      },
      {
        "question": "An endpoint of an inter-process communication flow across a computer network is called __________\n a) socket\n b) pipe\n c) port\n d) machine",
        "options": [
          "socket",
          "pipe",
          "port",
          "machine"
        ],
        "correctAnswer": "socket",
        "explanation": "Socket is one end point in a two-way communication link in the network. TCP layer can identify the application that data is destined to be sent by using the port number that is bound to the socket."
      },
      {
        "question": "Socket-style API for Windows is called ____________\n a) wsock\n b) winsock\n c) wins\n d) sockwi",
        "options": [
          "wsock",
          "winsock",
          "wins",
          "sockwi"
        ],
        "correctAnswer": "winsock",
        "explanation": "Winsock is a programming interface which deals with input-output requests for internet applications in Windows OS. It defines how Windows network software should access network services."
      },
      {
        "question": "Which one of the following is a version of UDP with congestion control?\n a) datagram congestion control protocol\n b) stream control transmission protocol\n c) structured stream transport\n d) user congestion control protocol",
        "options": [
          "datagram congestion control protocol",
          "stream control transmission protocol",
          "structured stream transport",
          "user congestion control protocol"
        ],
        "correctAnswer": "datagram congestion control protocol",
        "explanation": "The datagram congestion control is a transport layer protocol which deals with reliable connection setup, teardown, congestion control, explicit congestion notification, and feature negotiation. It is used in modern-day systems where there are really high chances of congestion. The protocol was last updated in the year 2008."
      },
      {
        "question": "A _____ is a TCP name for a transport service access point.\n a) port\n b) pipe\n c) node\n d) protocol",
        "options": [
          "port",
          "pipe",
          "node",
          "protocol"
        ],
        "correctAnswer": "port",
        "explanation": "Just as the IP address identifies the computer, the network port identifies the application or service running on the computer. A port number is 16 bits. The combination of IP address preceded with the port number is called the socket address."
      },
      {
        "question": "Transport layer protocols deal with ____________\n a) application to application communication\n b) process to process communication\n c) node to node communication\n d) man to man communication",
        "options": [
          "application to application communication",
          "process to process communication",
          "node to node communication",
          "man to man communication"
        ],
        "correctAnswer": "process to process communication",
        "explanation": "Transport layer is the 4th layer in TCP/IP model and OSI reference model. It deals with logical communication between processes. It is responsible for delivering a message between network hosts."
      },
      {
        "question": "Which of the following is a transport layer protocol?\n a) stream control transmission protocol\n b) internet control message protocol\n c) neighbor discovery protocol\n d) dynamic host configuration protocol",
        "options": [
          "stream control transmission protocol",
          "internet control message protocol",
          "neighbor discovery protocol",
          "dynamic host configuration protocol"
        ],
        "correctAnswer": "stream control transmission protocol",
        "explanation": "The Stream Control Transmission Protocol (SCTP) is a transport layer protocol used in networking systems where streams of data are to be continuously transmitted between two connected network nodes. Some of the other transport layer protocols are RDP, RUDP, TCP, DCCP, UDP, etc."
      }
  ]
  

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
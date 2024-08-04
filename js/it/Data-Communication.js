const quizData = [
    {
        "question": "The data link layer takes the packets from _________ and encapsulates them into frames for transmission.",
        "options": [
          "network layer",
          "physical layer",
          "transport layer",
          "application layer"
        ],
        "correctAnswer": "network layer"
      },
      {
        "question": "Which of the following tasks is not done by data link layer?",
        "options": [
          "framing",
          "error control",
          "flow control",
          "channel coding"
        ],
        "correctAnswer": "channel coding"
      },
      {
        "question": "Which sublayer of the data link layer performs data link functions that depend upon the type of medium?",
        "options": [
          "logical link control sublayer",
          "media access control sublayer",
          "network interface control sublayer",
          "error control sublayer"
        ],
        "correctAnswer": "media access control sublayer"
      },
      {
        "question": "Header of a frame generally contains ______________",
        "options": [
          "synchronization bytes",
          "addresses",
          "frame identifier",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned"
      },
      {
        "question": "Automatic repeat request error management mechanism is provided by ________",
        "options": [
          "logical link control sublayer",
          "media access control sublayer",
          "network interface control sublayer",
          "application access control sublayer"
        ],
        "correctAnswer": "logical link control sublayer"
      },
      {
        "question": "When 2 or more bits in a data unit has been changed during the transmission, the error is called ____________",
        "options": [
          "random error",
          "burst error",
          "inverted error",
          "double error"
        ],
        "correctAnswer": "burst error"
      },
      {
        "question": "CRC stands for __________",
        "options": [
          "cyclic redundancy check",
          "code repeat check",
          "code redundancy check",
          "cyclic repeat check"
        ],
        "correctAnswer": "cyclic redundancy check"
      },
      {
        "question": "Which of the following is a data link protocol?",
        "options": [
          "ethernet",
          "point to point protocol",
          "hdlc",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned"
      },
      {
        "question": "Which of the following is the multiple access protocol for channel access control?",
        "options": [
          "CSMA/CD",
          "CSMA/CA",
          "Both CSMA/CD & CSMA/CA",
          "HDLC"
        ],
        "correctAnswer": "Both CSMA/CD & CSMA/CA"
      },
      {
        "question": "The technique of temporarily delaying outgoing acknowledgements so that they can be hooked onto the next outgoing data frame is called ____________",
        "options": [
          "piggybacking",
          "cyclic redundancy check",
          "fletcher’s checksum",
          "parity check"
        ],
        "correctAnswer": "piggybacking"
      },
      {
        "question": "The network layer is concerned with __________ of data.",
        "options": [
          "bits",
          "frames",
          "packets",
          "bytes"
        ],
        "correctAnswer": "packets"
      },
      {
        "question": "Which one of the following is not a function of network layer?",
        "options": [
          "routing",
          "inter-networking",
          "congestion control",
          "error control"
        ],
        "correctAnswer": "error control"
      },
      {
        "question": "A 4 byte IP address consists of __________",
        "options": [
          "only network address",
          "only host address",
          "network address & host address",
          "network address & MAC address"
        ],
        "correctAnswer": "network address & host address"
      },
      {
        "question": "In virtual circuit network each packet contains ___________",
        "options": [
          "full source and destination address",
          "a short VC number",
          "only source address",
          "only destination address"
        ],
        "correctAnswer": "a short VC number"
      },
      {
        "question": "Which of the following routing algorithms can be used for network layer design?",
        "options": [
          "shortest path algorithm",
          "distance vector routing",
          "link state routing",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned"
      },
      {
        "question": "Which of the following is not correct in relation to multi-destination routing?",
        "options": [
          "is same as broadcast routing",
          "contains the list of all destinations",
          "data is not sent by packets",
          "there are multiple receivers"
        ],
        "correctAnswer": "data is not sent by packets"
      },
      {
        "question": "A subset of a network that includes all the routers but contains no loops is called ________",
        "options": [
          "spanning tree",
          "spider structure",
          "spider tree",
          "special tree"
        ],
        "correctAnswer": "spanning tree"
      },
      {
        "question": "Which one of the following algorithm is not used for congestion control?",
        "options": [
          "traffic aware routing",
          "admission control",
          "load shedding",
          "routing information protocol"
        ],
        "correctAnswer": "routing information protocol"
      },
      {
        "question": "The network layer protocol for internet is __________",
        "options": [
          "ethernet",
          "internet protocol",
          "hypertext transfer protocol",
          "file transfer protocol"
        ],
        "correctAnswer": "internet protocol"
      },
      {
        "question": "ICMP is primarily used for __________",
        "options": [
          "error and diagnostic functions",
          "addressing",
          "forwarding",
          "routing"
        ],
        "correctAnswer": "error and diagnostic functions"
      },
      {
        "question": "Transport layer aggregates data from different applications into a single stream before passing it to ____________",
        "options": [
          "network layer",
          "data link layer",
          "application layer",
          "physical layer"
        ],
        "correctAnswer": "network layer"
      },
      {
        "question": "Which of the following are transport layer protocols used in networking?",
        "options": [
          "TCP and FTP",
          "UDP and HTTP",
          "TCP and UDP",
          "HTTP and FTP"
        ],
        "correctAnswer": "TCP and UDP"
      },
      {
        "question": "User datagram protocol is called connectionless because _____________",
        "options": [
          "all UDP packets are treated independently by transport layer",
          "it sends data as a stream of related packets",
          "it is received in the same order as sent order",
          "it sends data very quickly"
        ],
        "correctAnswer": "all UDP packets are treated independently by transport layer"
      },
      {
        "question": "Transmission control protocol ___________",
        "options": [
          "is a connection-oriented protocol",
          "uses a three way handshake to establish a connection",
          "receives data from application as a single stream",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned"
      },
      {
        "question": "An endpoint of an inter-process communication flow across a computer network is called __________",
        "options": [
          "socket",
          "pipe",
          "port",
          "machine"
        ],
        "correctAnswer": "socket"
      },
      {
        "question": "Socket-style API for windows is called ____________",
        "options": [
          "wsock",
          "winsock",
          "wins",
          "sockwi"
        ],
        "correctAnswer": "winsock"
      },
      {
        "question": "Which one of the following is a version of UDP with congestion control?",
        "options": [
          "datagram congestion control protocol",
          "stream control transmission protocol",
          "structured stream transport",
          "user congestion control protocol"
        ],
        "correctAnswer": "datagram congestion control protocol"
      },
      {
        "question": "A _____ is a TCP name for a transport service access point.",
        "options": [
          "port",
          "pipe",
          "node",
          "protocol"
        ],
        "correctAnswer": "port"
      },
      {
        "question": "Transport layer protocols deals with ____________",
        "options": [
          "application to application communication",
          "process to process communication",
          "node to node communication",
          "man to man communication"
        ],
        "correctAnswer": "process to process communication"
      },
      {
        "question": "Which of the following is a transport layer protocol?",
        "options": [
          "stream control transmission protocol",
          "internet control message protocol",
          "neighbor discovery protocol",
          "dynamic host configuration protocol"
        ],
        "correctAnswer": "stream control transmission protocol"
      },
      {
        "question": "Which of the following delay is faced by the packet in travelling from one end system to another?",
        "options": [
          "Propagation delay",
          "Queuing delay",
          "Transmission delay",
          "All of the mentioned"
        ],
        "correctAnswer": "All of the mentioned"
      },
      {
        "question": "For a 10Mbps Ethernet link, if the length of the packet is 32bits, the transmission delay is ____________ (in microseconds)",
        "options": [
          "3.2",
          "32",
          "0.32",
          "320"
        ],
        "correctAnswer": "3.2"
      },
      {
        "question": "The time required to examine the packet’s header and determine where to direct the packet is part of __________",
        "options": [
          "Processing delay",
          "Queuing delay",
          "Transmission delay",
          "Propagation delay"
        ],
        "correctAnswer": "Processing delay"
      },
      {
        "question": "Given L = number of bits in the packet, a = average rate and R = transmission rate. The Traffic intensity in the network is given by ____________",
        "options": [
          "La/R",
          "LR/a",
          "R/La",
          "Ra/L"
        ],
        "correctAnswer": "La/R"
      },
      {
        "question": "In the transfer of file between server and client, if the transmission rates along the path is 10Mbps, 20Mbps, 30Mbps, 40Mbps. The throughput is usually ___________",
        "options": [
          "20Mbps",
          "10Mbps",
          "40Mbps",
          "50Mbps"
        ],
        "correctAnswer": "10Mbps"
      },
      {
        "question": "If end to end delay is given by dend-end = N(dproc + dtrans + dprop) is a non congested network. The number of routers between source and destination is?",
        "options": [
          "N/2",
          "N",
          "N-1",
          "2N"
        ],
        "correctAnswer": "N-1"
      },
      {
        "question": "The total nodal delay is given by ____________",
        "options": [
          "dnodal = dproc - dqueue + dtrans + dprop",
          "dnodal = dproc + dtrans - dqueue",
          "dnodal = dproc + dqueue + dtrans + dprop",
          "dnodal = dproc + dqueue - dtrans - dprop"
        ],
        "correctAnswer": "dnodal = dproc + dqueue + dtrans + dprop"
      },
      {
        "question": "In a network, If P is the only packet being transmitted and there was no earlier transmission, which of the following delays could be zero?",
        "options": [
          "Propagation delay",
          "Queuing delay",
          "Transmission delay",
          "Processing delay"
        ],
        "correctAnswer": "Queuing delay"
      },
      {
        "question": "Transmission delay does not depend on _____________",
        "options": [
          "Packet length",
          "Distance between the routers",
          "Transmission rate",
          "Bandwidth of medium"
        ],
        "correctAnswer": "Distance between the routers"
      },
      {
        "question": "Propagation delay depends on ___________",
        "options": [
          "Packet length",
          "Transmission rate",
          "Distance between the routers",
          "Speed of the CPU"
        ],
        "correctAnswer": "Distance between the routers"
      },
      {
        "question": "____________ is the raw material used as input and __________ is the processed data obtained as output of data processing.",
        "options": [
          "Data, Instructions",
          "Instructions, Program",
          "Data, Program",
          "Program, Code"
        ],
        "correctAnswer": "Data, Instructions"
      },
      {
        "question": "Which of the following is not a characteristic of a computer?",
        "options": [
          "Diligence",
          "I.Q.",
          "Accuracy",
          "Versatility"
        ],
        "correctAnswer": "I.Q."
      },
      {
        "question": "The part of a processor which contains hardware necessary to perform all the operations required by a computer:",
        "options": [
          "Data path",
          "Controller",
          "Registers",
          "Cache"
        ],
        "correctAnswer": "Data path"
      },
      {
        "question": "What does MAR stand for?",
        "options": [
          "Main Address Register",
          "Memory Access Register",
          "Main Accessible Register",
          "Memory Address Register"
        ],
        "correctAnswer": "Memory Address Register"
      },
      {
        "question": "If the control signals are generated by combinational logic, then they are generated by a type of _______________ controlled unit.",
        "options": [
          "Micro programmed",
          "Software",
          "Logic",
          "Hardwired"
        ],
        "correctAnswer": "Hardwired"
      },
      {
        "question": "Which is the simplest method of implementing hardwired control unit?",
        "options": [
          "State Table Method",
          "Delay Element Method",
          "Sequence Counter Method",
          "Using Circuits"
        ],
        "correctAnswer": "State Table Method"
      },
      {
        "question": "A set of microinstructions for a single machine instruction is called ___________",
        "options": [
          "Program",
          "Command",
          "Micro program",
          "Micro command"
        ],
        "correctAnswer": "Micro program"
      },
      {
        "question": "Micro-program consists of a set of microinstructions which are strings of 0s and 1s.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True"
      },
      {
        "question": "A decoder is required in case of a ______________",
        "options": [
          "Vertical Microinstruction",
          "Horizontal Microinstruction",
          "Multilevel Microinstruction",
          "All types of microinstructions"
        ],
        "correctAnswer": "Vertical Microinstruction"
      },
      {
        "question": "The CISC stands for ___________",
        "options": [
          "Computer Instruction Set Compliment",
          "Complete Instruction Set Compliment",
          "Computer Indexed Set Components",
          "Complex Instruction set computer"
        ],
        "correctAnswer": "Complex Instruction set computer"
      },
      {
        "question": "The computer architecture aimed at reducing the time of execution of instructions is ________",
        "options": [
          "CISC",
          "RISC",
          "ISA",
          "ANNA"
        ],
        "correctAnswer": "RISC"
      },
      {
        "question": "The Sun micro systems processors usually follow _____ architecture.",
        "options": [
          "CISC",
          "ISA",
          "ULTRA SPARC",
          "RISC"
        ],
        "correctAnswer": "RISC"
      },
      {
        "question": "The RISC processor has a more complicated design than CISC.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False"
      },
      {
        "question": "The iconic feature of the RISC machine among the following is _______",
        "options": [
          "Reduced number of addressing modes",
          "Increased memory size",
          "Having a branch delay slot",
          "All of the mentioned"
        ],
        "correctAnswer": "Having a branch delay slot"
      },
      {
        "question": "Both the CISC and RISC architectures have been developed to reduce the ______",
        "options": [
          "Cost",
          "Time delay",
          "Semantic gap",
          "All of the mentioned"
        ],
        "correctAnswer": "Semantic gap"
      },
      {
        "question": "Out of the following which is not a CISC machine.",
        "options": [
          "IBM 370/168",
          "VAX 11/780",
          "Intel 80486",
          "Motorola A567"
        ],
        "correctAnswer": "Motorola A567"
      },
      {
        "question": "Pipe-lining is a unique feature of _______",
        "options": [
          "RISC",
          "CISC",
          "ISA",
          "IANA"
        ],
        "correctAnswer": "RISC"
      },
      {
        "question": "In CISC architecture most of the complex instructions are stored in _____",
        "options": [
          "Register",
          "Diodes",
          "CMOS",
          "Transistors"
        ],
        "correctAnswer": "Transistors"
      },
      {
        "question": "Which of the architecture is power efficient?",
        "options": [
          "CISC",
          "RISC",
          "ISA",
          "IANA"
        ],
        "correctAnswer": "RISC"
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
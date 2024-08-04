const quizData = [
    {
        "question": "What are the main reasons for the need of maintenance in industrial systems?",
        "options": [
          "To increase production speed.",
          "To improve aesthetics.",
          "To prevent equipment failure and ensure reliability.",
          "To reduce the number of employees."
        ],
        "correctAnswer": "To prevent equipment failure and ensure reliability."
      },
      {
        "question": "What can happen if maintenance is neglected in industrial systems?",
        "options": [
          "Equipment will become too heavy.",
          "Equipment will become faster.",
          "Increased productivity.",
          "Increased downtime and unexpected failures."
        ],
        "correctAnswer": "Increased downtime and unexpected failures."
      },
      {
        "question": "What are the benefits of having a well-structured maintenance plan?",
        "options": [
          "Increased energy consumption.",
          "Higher production costs.",
          "Improved safety and reduced accidents.",
          "Decreased product quality."
        ],
        "correctAnswer": "Improved safety and reduced accidents."
      },
      {
        "question": "How does a good maintenance plan contribute to cost savings?",
        "options": [
          "It increases spending on unnecessary repairs.",
          "It lowers initial equipment costs.",
          "It reduces equipment lifespan.",
          "It minimizes unplanned downtime and extends equipment life."
        ],
        "correctAnswer": "It minimizes unplanned downtime and extends equipment life."
      },
      {
        "question": "What is the main purpose of fire protection measures in industrial settings?",
        "options": [
          "To increase energy consumption.",
          "To improve aesthetic appeal.",
          "To prevent equipment wear and tear.",
          "To ensure safety by preventing and controlling fires."
        ],
        "correctAnswer": "To ensure safety by preventing and controlling fires."
      },
      {
        "question": "Which type of fire extinguisher is suitable for flammable liquid fires?",
        "options": [
          "Class A",
          "Class B",
          "Class C",
          "Class D"
        ],
        "correctAnswer": "Class B"
      },
      {
        "question": "What are some common electrical hazards in industrial environments?",
        "options": [
          "Excessive noise levels.",
          "Overexposure to UV radiation.",
          "Contact with moving machinery.",
          "Electric shocks and arc flash incidents."
        ],
        "correctAnswer": "Electric shocks and arc flash incidents."
      },
      {
        "question": "What is an arc flash?",
        "options": [
          "A type of welding technique.",
          "A protective coating for electrical equipment.",
          "A dangerous release of energy due to an electrical fault.",
          "A type of fire protection system."
        ],
        "correctAnswer": "A dangerous release of energy due to an electrical fault."
      },
      {
        "question": "Why is machine tools safety important in industrial operations?",
        "options": [
          "To slow down production.",
          "To create obstacles for workers.",
          "To prioritize aesthetics over functionality.",
          "To prevent accidents and injuries to operators."
        ],
        "correctAnswer": "To prevent accidents and injuries to operators."
      },
      {
        "question": "What should operators do before using machine tools?",
        "options": [
          "Read an unrelated novel.",
          "Wear improper personal protective equipment.",
          "Start the machine immediately.",
          "Undergo proper training and wear appropriate protective gear."
        ],
        "correctAnswer": "Undergo proper training and wear appropriate protective gear."
      },
      {
        "question": "What are the different types of corrosion?",
        "options": [
          "Mechanical, electrical, thermal.",
          "Oxidation, reduction, neutralization.",
          "Rusting, burning, melting.",
          "Uniform, pitting, galvanic."
        ],
        "correctAnswer": "Uniform, pitting, galvanic."
      },
      {
        "question": "What is the primary purpose of corrosion prevention methods?",
        "options": [
          "To increase corrosion rates.",
          "To accelerate material degradation.",
          "To improve aesthetics.",
          "To slow down or prevent material deterioration."
        ],
        "correctAnswer": "To slow down or prevent material deterioration."
      },
      {
        "question": "What is the purpose of protective coatings on surfaces?",
        "options": [
          "To make surfaces slippery.",
          "To increase corrosion rates.",
          "To create decorative patterns.",
          "To provide a barrier against environmental factors and prevent corrosion."
        ],
        "correctAnswer": "To provide a barrier against environmental factors and prevent corrosion."
      },
      {
        "question": "What is cathodic protection?",
        "options": [
          "A method of amplifying noise.",
          "A method of accelerating corrosion.",
          "A technique to prevent corrosion by making the metal the cathode in an electrochemical cell.",
          "A method of generating heat in metals."
        ],
        "correctAnswer": "A technique to prevent corrosion by making the metal the cathode in an electrochemical cell."
      },
      {
        "question": "What are the main factors considered when choosing a maintenance strategy?",
        "options": [
          "Weather conditions in the region.",
          "Employee availability.",
          "Equipment color.",
          "Equipment criticality, cost, and operational impact."
        ],
        "correctAnswer": "Equipment criticality, cost, and operational impact."
      },
      {
        "question": "Why is equipment criticality important in selecting a maintenance strategy?",
        "options": [
          "It determines the color of the equipment.",
          "It has no impact on maintenance decisions.",
          "It helps in prioritizing maintenance efforts based on importance.",
          "It reduces the need for maintenance altogether."
        ],
        "correctAnswer": "It helps in prioritizing maintenance efforts based on importance."
      },
      {
        "question": "What is preventive maintenance?",
        "options": [
          "Waiting until equipment fails before repairing it.",
          "Performing maintenance only when requested by operators.",
          "Regularly scheduled maintenance to prevent equipment failures.",
          "Using temporary fixes for equipment issues."
        ],
        "correctAnswer": "Regularly scheduled maintenance to prevent equipment failures."
      },
      {
        "question": "What is the main goal of preventive maintenance?",
        "options": [
          "To maximize downtime.",
          "To minimize equipment lifespan.",
          "To save money on maintenance costs.",
          "To minimize unplanned downtime and extend equipment life."
        ],
        "correctAnswer": "To minimize unplanned downtime and extend equipment life."
      },
      {
        "question": "What is scheduled maintenance?",
        "options": [
          "Maintenance performed randomly.",
          "Maintenance performed only during weekends.",
          "Maintenance done on an unplanned basis.",
          "Maintenance performed at specified intervals based on equipment needs."
        ],
        "correctAnswer": "Maintenance performed at specified intervals based on equipment needs."
      },
      {
        "question": "How does scheduled maintenance help in managing maintenance activities?",
        "options": [
          "It creates more confusion and chaos.",
          "It eliminates the need for maintenance altogether.",
          "It allows maintenance to be performed whenever convenient.",
          "It helps in planning and optimizing maintenance activities for efficient operations."
        ],
        "correctAnswer": "It helps in planning and optimizing maintenance activities for efficient operations."
      },
      {
        "question": "What is breakdown maintenance?",
        "options": [
          "Maintenance performed during scheduled intervals.",
          "Maintenance performed only on weekends.",
          "Maintenance done in response to equipment failures.",
          "Maintenance performed before equipment failure occurs."
        ],
        "correctAnswer": "Maintenance done in response to equipment failures."
      },
      {
        "question": "What are the potential drawbacks of relying solely on breakdown maintenance?",
        "options": [
          "It reduces unplanned downtime.",
          "It saves time and money.",
          "It can lead to costly downtime, decreased productivity, and higher repair costs.",
          "It improves equipment lifespan."
        ],
        "correctAnswer": "It can lead to costly downtime, decreased productivity, and higher repair costs."
      },
      {
        "question": "What is Total Productive Maintenance (TPM)?",
        "options": [
          "A method of increasing equipment downtime.",
          "A strategy to maximize equipment failures.",
          "An approach to involve only maintenance personnel in equipment care.",
          "A holistic approach that involves all employees in equipment maintenance and improvement."
        ],
        "correctAnswer": "A holistic approach that involves all employees in equipment maintenance and improvement."
      },
      {
        "question": "What is the role of employees in Total Productive Maintenance?",
        "options": [
          "To ignore equipment issues.",
          "To blame maintenance personnel for equipment failures.",
          "To be passive observers.",
          "To actively participate in maintaining and improving equipment reliability and performance."
        ],
        "correctAnswer": "To actively participate in maintaining and improving equipment reliability and performance."
      },
      {
        "question": "What is Total Planned Quality Maintenance (TPQM)?",
        "options": [
          "A strategy to randomly perform maintenance tasks.",
          "A method of avoiding maintenance altogether.",
          "An approach to prioritize aesthetics over maintenance.",
          "A comprehensive strategy that integrates quality improvement and maintenance to achieve high equipment performance."
        ],
        "correctAnswer": "A comprehensive strategy that integrates quality improvement and maintenance to achieve high equipment performance."
      },
      {
        "question": "How does Total Planned Quality Maintenance benefit operations?",
        "options": [
          "It increases equipment failures.",
          "It decreases equipment performance.",
          "It leads to higher maintenance costs.",
          "It enhances equipment performance, quality, and overall business efficiency."
        ],
        "correctAnswer": "It enhances equipment performance, quality, and overall business efficiency."
      },
      {
        "question": "What is condition monitoring?",
        "options": [
          "Ignoring equipment conditions.",
          "Regularly replacing all equipment components.",
          "Monitoring equipment conditions to detect signs of deterioration and performance issues.",
          "Assuming equipment will always perform optimally."
        ],
        "correctAnswer": "Monitoring equipment conditions to detect signs of deterioration and performance issues."
      },
      {
        "question": "How does condition monitoring contribute to maintenance decision-making?",
        "options": [
          "It removes the need for maintenance decisions.",
          "It helps in making informed decisions by providing data on equipment health.",
          "It only monitors aesthetics of equipment.",
          "It results in unplanned downtime."
        ],
        "correctAnswer": "It helps in making informed decisions by providing data on equipment health."
      },
      {
        "question": "What are failure modes in the context of system safety and reliability?",
        "options": [
          "Modes of success.",
          "Different ways to achieve desired outcomes.",
          "Various ways in which a system or component can fail.",
          "Mechanisms to prevent failures."
        ],
        "correctAnswer": "Various ways in which a system or component can fail."
      },
      {
        "question": "Why is understanding failure modes important?",
        "options": [
          "It's not important; failures are inevitable.",
          "It helps in promoting a blame culture.",
          "It allows ignoring potential risks.",
          "It enables proactive measures to prevent and mitigate failures."
        ],
        "correctAnswer": "It enables proactive measures to prevent and mitigate failures."
      },
      {
        "question": "What does Mean Time Before Failure (MTBF) refer to?",
        "options": [
          "The time taken to repair a failed system.",
          "The average time between failures of a system or component.",
          "The maximum time a system can operate before failure.",
          "The time taken to replace a failed component."
        ],
        "correctAnswer": "The average time between failures of a system or component."
      },
      {
        "question": "How is MTBF related to system reliability?",
        "options": [
          "Higher MTBF leads to lower system reliability.",
          "Higher MTBF indicates higher system reliability.",
          "MTBF and system reliability are unrelated.",
          "Lower MTBF results in higher system reliability."
        ],
        "correctAnswer": "Higher MTBF indicates higher system reliability."
      },
      {
        "question": "What is the 'bathtub curve' in reliability engineering?",
        "options": [
          "A curve resembling a bathtub used for aesthetic purposes.",
          "A curve representing an ideal system with no failures.",
          "A graphical representation of the distribution of failure rates over time.",
          "A curve that indicates when to clean bathtubs."
        ],
        "correctAnswer": "A graphical representation of the distribution of failure rates over time."
      },
      {
        "question": "What does the 'infant mortality' phase of the bathtub curve represent?",
        "options": [
          "When old systems start failing.",
          "When failures occur randomly.",
          "When young systems fail due to initial defects.",
          "When systems reach their peak performance."
        ],
        "correctAnswer": "When young systems fail due to initial defects."
      },
      {
        "question": "What are some common causes of failure in industrial systems?",
        "options": [
          "High energy consumption.",
          "High employee morale.",
          "Poor maintenance practices, design flaws, and material defects.",
          "Excessive aesthetic focus."
        ],
        "correctAnswer": "Poor maintenance practices, design flaws, and material defects."
      },
      {
        "question": "What are some potential effects of failure?",
        "options": [
          "Decreased safety concerns.",
          "Increased productivity.",
          "Increased customer satisfaction.",
          "Safety hazards, downtime, reduced performance, and financial losses."
        ],
        "correctAnswer": "Safety hazards, downtime, reduced performance, and financial losses."
      },
      {
        "question": "What is Fault Tree Analysis (FTA)?",
        "options": [
          "A technique to design fault-tolerant systems.",
          "A method to ignore faults in a system.",
          "A technique for creating faults intentionally.",
          "A graphical method to analyze the causes of a specific event and its outcomes."
        ],
        "correctAnswer": "A graphical method to analyze the causes of a specific event and its outcomes."
      },
      {
        "question": "How is a fault tree constructed?",
        "options": [
          "Starting from the top with the basic event and breaking it down into contributing events.",
          "Starting from the bottom with the basic event and building up the contributing events.",
          "Randomly placing events on a tree structure.",
          "Ignoring the event hierarchy and listing all events at once."
        ],
        "correctAnswer": "Starting from the top with the basic event and breaking it down into contributing events."
      },
      {
        "question": "What is Event Tree Analysis (ETA)?",
        "options": [
          "A method to plant trees during events.",
          "A technique to predict future events.",
          "A method to prevent events from happening.",
          "A graphical method to analyze the possible outcomes of a specific initiating event."
        ],
        "correctAnswer": "A graphical method to analyze the possible outcomes of a specific initiating event."
      },
      {
        "question": "How does Event Tree Analysis differ from Fault Tree Analysis?",
        "options": [
          "They are the same; the terms can be used interchangeably.",
          "Event Tree Analysis focuses on causes, while Fault Tree Analysis focuses on effects.",
          "Event Tree Analysis works only for natural events, while Fault Tree Analysis works for human-made events.",
          "Event Tree Analysis analyzes outcomes of a specific event, while Fault Tree Analysis analyzes the causes of a specific event."
        ],
        "correctAnswer": "Event Tree Analysis analyzes outcomes of a specific event, while Fault Tree Analysis analyzes the causes of a specific event."
      },
      {
        "question": "What is Hazard Analysis?",
        "options": [
          "A method to create hazards intentionally.",
          "A technique to increase hazards in a system.",
          "A systematic process to identify potential hazards and assess their risks.",
          "A method to ignore hazards in a system."
        ],
        "correctAnswer": "A systematic process to identify potential hazards and assess their risks."
      },
      {
        "question": "Why is Hazard Analysis important?",
        "options": [
          "It increases safety concerns.",
          "It helps in promoting hazardous practices.",
          "It adds unnecessary complexity to systems.",
          "It allows organizations to proactively mitigate risks and prevent accidents."
        ],
        "correctAnswer": "It allows organizations to proactively mitigate risks and prevent accidents."
      },
      {
        "question": "What is a Block Diagram?",
        "options": [
          "A diagram used in art and design.",
          "A graphical representation of building structures.",
          "A diagram that focuses only on aesthetics.",
          "A diagram that shows the components of a system and their interactions."
        ],
        "correctAnswer": "A diagram that shows the components of a system and their interactions."
      },
      {
        "question": "How does a Block Diagram help in understanding system safety and reliability?",
        "options": [
          "It doesn't; Block Diagrams are only for aesthetics.",
          "It increases complexity and confusion.",
          "It provides a visual representation of failure modes.",
          "It excludes the need for understanding system components."
        ],
        "correctAnswer": "It provides a visual representation of failure modes."
      },
      {
        "question": "What is a Fishbone Diagram?",
        "options": [
          "A diagram used to illustrate fish anatomy.",
          "A diagram representing the relationships between aquatic animals.",
          "A diagram for tracking fishing locations.",
          "A graphical tool for identifying the causes of a specific problem or event."
        ],
        "correctAnswer": "A graphical tool for identifying the causes of a specific problem or event."
      },
      {
        "question": "How does a Fishbone Diagram assist in analyzing system failures?",
        "options": [
          "It's irrelevant to system failures.",
          "It highlights fish-related failures.",
          "It visually represents potential causes of a problem, allowing thorough analysis.",
          "It encourages ignoring potential causes."
        ],
        "correctAnswer": "It visually represents potential causes of a problem, allowing thorough analysis."
      },
      {
        "question": "What is risk in the context of risk assessment?",
        "options": [
          "A guaranteed outcome.",
          "An unpredictable event.",
          "The likelihood of a positive outcome.",
          "The possibility of negative outcomes or losses."
        ],
        "correctAnswer": "The possibility of negative outcomes or losses."
      },
      {
        "question": "How is risk typically measured in risk assessment?",
        "options": [
          "Using subjective feelings.",
          "Using a single universal metric.",
          "Using financial profit.",
          "Using a combination of likelihood and consequences."
        ],
        "correctAnswer": "Using a combination of likelihood and consequences."
      },
      {
        "question": "What are some common risk analysis techniques?",
        "options": [
          "Guessing and intuition.",
          "Coin tossing.",
          "Quantitative and qualitative analysis, FMEA, FTA, HAZOP.",
          "Ignoring potential risks."
        ],
        "correctAnswer": "Quantitative and qualitative analysis, FMEA, FTA, HAZOP."
      },
      {
        "question": "How does Fault Tree Analysis (FTA) contribute to risk assessment?",
        "options": [
          "By intentionally causing faults.",
          "By eliminating all potential risks.",
          "By identifying potential causes of specific events and their outcomes.",
          "By ignoring potential causes of failures."
        ],
        "correctAnswer": "By identifying potential causes of specific events and their outcomes."
      },
      {
        "question": "What are risk reduction resources?",
        "options": [
          "Resources to increase risk levels.",
          "Resources used to ignore risks.",
          "Resources that don't impact risks.",
          "Measures and actions to mitigate and manage risks."
        ],
        "correctAnswer": "Measures and actions to mitigate and manage risks."
      },
      {
        "question": "How do risk reduction resources contribute to minimizing risks?",
        "options": [
          "They increase risks.",
          "They distract from risks.",
          "They have no impact on risks.",
          "They help in preventing, minimizing, or addressing potential negative outcomes."
        ],
        "correctAnswer": "They help in preventing, minimizing, or addressing potential negative outcomes."
      },
      {
        "question": "Why is industrial safety important?",
        "options": [
          "It's not important; safety slows down operations.",
          "It increases aesthetic appeal.",
          "It improves equipment performance.",
          "It prevents accidents, injuries, and promotes employee well-being."
        ],
        "correctAnswer": "It prevents accidents, injuries, and promotes employee well-being."
      },
      {
        "question": "How does risk assessment contribute to industrial safety?",
        "options": [
          "It has no impact on industrial safety.",
          "It increases accidents by focusing on risks.",
          "It helps in identifying and mitigating potential hazards, ensuring safer operations.",
          "It increases the complexity of operations."
        ],
        "correctAnswer": "It helps in identifying and mitigating potential hazards, ensuring safer operations."
      },
      {
        "question": "What is ultrasonic testing?",
        "options": [
          "Testing using ultraviolet light.",
          "Testing using high-frequency sound waves.",
          "Testing by dropping objects from a height.",
          "Testing using radio waves."
        ],
        "correctAnswer": "Testing using high-frequency sound waves."
      },
      {
        "question": "How does ultrasonic testing work?",
        "options": [
          "By measuring temperature changes.",
          "By analyzing colors.",
          "By sending sound waves into a material and detecting reflected waves.",
          "By using strong magnetic fields."
        ],
        "correctAnswer": "By sending sound waves into a material and detecting reflected waves."
      },
      {
        "question": "What is dye penetration testing?",
        "options": [
          "Testing the color of materials.",
          "Testing using colorful dyes.",
          "Testing by immersing materials in a dye.",
          "Testing for surface defects by applying a liquid dye and observing its penetration."
        ],
        "correctAnswer": "Testing for surface defects by applying a liquid dye and observing its penetration."
      },
      {
        "question": "What is the main advantage of dye penetration testing?",
        "options": [
          "It only works on metallic materials.",
          "It's highly cost-effective.",
          "It can detect subsurface defects.",
          "It can only detect large defects."
        ],
        "correctAnswer": "It's highly cost-effective."
      },
      {
        "question": "What is magnetic resonance testing?",
        "options": [
          "Testing using strong magnetic fields only.",
          "Testing by measuring the resonance frequency of materials.",
          "Testing using microwave radiation.",
          "Testing using visible light."
        ],
        "correctAnswer": "Testing by measuring the resonance frequency of materials."
      },
      {
        "question": "How does magnetic resonance testing detect defects?",
        "options": [
          "By analyzing colors.",
          "By measuring electrical conductivity.",
          "By observing changes in resonance frequency caused by defects.",
          "By applying dyes to materials."
        ],
        "correctAnswer": "By observing changes in resonance frequency caused by defects."
      },
      {
        "question": "What is X-ray testing?",
        "options": [
          "Testing by using visible light.",
          "Testing by exposing materials to radio waves.",
          "Testing by analyzing colors.",
          "Testing by using high-energy X-rays to penetrate materials and create images."
        ],
        "correctAnswer": "Testing by using high-energy X-rays to penetrate materials and create images."
      },
      {
        "question": "What is one of the main applications of X-ray testing?",
        "options": [
          "Detecting radioactivity.",
          "Creating abstract art.",
          "Testing the color of materials.",
          "Inspecting welds and internal structures."
        ],
        "correctAnswer": "Inspecting welds and internal structures."
      },
      {
        "question": "What is eddy current testing?",
        "options": [
          "Testing using electric currents only.",
          "Testing by exposing materials to strong magnetic fields.",
          "Testing by inducing electrical currents in materials and measuring resulting magnetic fields.",
          "Testing using visible light."
        ],
        "correctAnswer": "Testing by inducing electrical currents in materials and measuring resulting magnetic fields."
      },
      {
        "question": "What is a key advantage of eddy current testing?",
        "options": [
          "It's only applicable to metallic materials.",
          "It's extremely expensive.",
          "It can only detect surface defects.",
          "It can detect subsurface defects and material thickness variations."
        ],
        "correctAnswer": "It can detect subsurface defects and material thickness variations."
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
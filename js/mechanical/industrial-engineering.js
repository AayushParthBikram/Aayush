const quizData = [
    {
        "question": "What is metrology?",
        "options": [
          "The study of meteorological phenomena.",
          "The study of meteors and meteorites.",
          "The science of measurement and its application.",
          "The practice of mixing different materials."
        ],
        "correctAnswer": "The science of measurement and its application."
      },
      {
        "question": "Why is accurate measurement important in various industries?",
        "options": [
          "It has no impact on industries.",
          "It increases production costs.",
          "It improves customer satisfaction and product quality.",
          "It decreases equipment efficiency."
        ],
        "correctAnswer": "It improves customer satisfaction and product quality."
      },
      {
        "question": "What are standards in metrology?",
        "options": [
          "Traditional units of measurement.",
          "Quantities without measurement units.",
          "Reference values used for comparison and calibration.",
          "Opinions on measurements."
        ],
        "correctAnswer": "Reference values used for comparison and calibration."
      },
      {
        "question": "What is traceability in metrology?",
        "options": [
          "The ability to measure only once.",
          "The process of measuring without standards.",
          "The ability to trace the history, location, or application of a measurement result.",
          "The process of measuring blindly."
        ],
        "correctAnswer": "The ability to trace the history, location, or application of a measurement result."
      },
      {
        "question": "What are systematic errors in measurement?",
        "options": [
          "Errors caused by random chance.",
          "Errors that are impossible to correct.",
          "Errors that are consistent and repeatable.",
          "Errors that don't affect measurement accuracy."
        ],
        "correctAnswer": "Errors that are consistent and repeatable."
      },
      {
        "question": "How can random errors in measurement be minimized?",
        "options": [
          "By ignoring them.",
          "By blaming measuring instruments.",
          "By increasing measurement speed.",
          "By taking multiple measurements and calculating their average."
        ],
        "correctAnswer": "By taking multiple measurements and calculating their average."
      },
      {
        "question": "What is linear measurement?",
        "options": [
          "Measuring angles.",
          "Measuring temperature.",
          "Measuring distances along straight lines.",
          "Measuring time intervals."
        ],
        "correctAnswer": "Measuring distances along straight lines."
      },
      {
        "question": "What is a micrometer used for?",
        "options": [
          "Measuring temperature.",
          "Measuring angles.",
          "Measuring small distances with high accuracy.",
          "Measuring loudness."
        ],
        "correctAnswer": "Measuring small distances with high accuracy."
      },
      {
        "question": "What is angular measurement?",
        "options": [
          "Measuring distances along straight lines.",
          "Measuring temperature.",
          "Measuring angles.",
          "Measuring time intervals."
        ],
        "correctAnswer": "Measuring angles."
      },
      {
        "question": "What is taper measurement?",
        "options": [
          "Measuring the time it takes for a substance to dissolve.",
          "Measuring the length of a substance.",
          "Measuring angles.",
          "Measuring the gradual decrease or increase in diameter of a cylindrical object."
        ],
        "correctAnswer": "Measuring the gradual decrease or increase in diameter of a cylindrical object."
      },
      {
        "question": "What is a vernier caliper used for?",
        "options": [
          "Measuring temperature.",
          "Measuring angles.",
          "Measuring large distances.",
          "Measuring lengths and internal/external diameters with high accuracy."
        ],
        "correctAnswer": "Measuring lengths and internal/external diameters with high accuracy."
      },
      {
        "question": "What is a feeler gauge used for?",
        "options": [
          "Measuring time intervals.",
          "Measuring angles.",
          "Measuring distances along straight lines.",
          "Measuring small gaps and clearances."
        ],
        "correctAnswer": "Measuring small gaps and clearances."
      },
      {
        "question": "What are some applications of metrology?",
        "options": [
          "Cooking and baking.",
          "Fishing and hunting.",
          "Astronomy and space exploration.",
          "Manufacturing, automotive, aerospace, and precision industries."
        ],
        "correctAnswer": "Manufacturing, automotive, aerospace, and precision industries."
      },
      {
        "question": "How does metrology impact quality control in manufacturing?",
        "options": [
          "It doesn't impact quality control.",
          "It increases defects.",
          "It helps in ensuring product conformance to specifications and customer requirements.",
          "It focuses only on aesthetics."
        ],
        "correctAnswer": "It helps in ensuring product conformance to specifications and customer requirements."
      },
      {
        "question": "Why is inspection necessary in manufacturing processes?",
        "options": [
          "It increases production speed.",
          "It focuses only on aesthetics.",
          "It's not necessary; defects are acceptable.",
          "It ensures product quality, safety, and compliance with standards."
        ],
        "correctAnswer": "It ensures product quality, safety, and compliance with standards."
      },
      {
        "question": "What is the purpose of inspection in the automotive industry?",
        "options": [
          "To increase vehicle weight.",
          "To reduce vehicle cost.",
          "To ensure product quality, safety, and performance.",
          "To ignore product defects."
        ],
        "correctAnswer": "To ensure product quality, safety, and performance."
      },
      {
        "question": "What is accuracy in measurement?",
        "options": [
          "The ability to measure only once.",
          "The ability to measure quickly.",
          "The closeness of measured values to the true value.",
          "The consistency of repeated measurements."
        ],
        "correctAnswer": "The closeness of measured values to the true value."
      },
      {
        "question": "What is precision in measurement?",
        "options": [
          "The ability to measure quickly.",
          "The consistency of repeated measurements.",
          "The ability to measure only once.",
          "The closeness of measured values to the true value."
        ],
        "correctAnswer": "The consistency of repeated measurements."
      },
      {
        "question": "What is calibration in metrology?",
        "options": [
          "A process to adjust measurement standards.",
          "A process to discard measurement standards.",
          "A process to ignore measurement standards.",
          "A process to avoid using measurement standards."
        ],
        "correctAnswer": "A process to adjust measurement standards."
      },
      {
        "question": "Why is regular calibration of measuring instruments important?",
        "options": [
          "It increases defects in measurements.",
          "It helps in avoiding measurement standards.",
          "It ensures measuring instruments are accurate and reliable.",
          "It's not important; calibration is unnecessary."
        ],
        "correctAnswer": "It ensures measuring instruments are accurate and reliable."
      },
      {
        "question": "What is an acceptance test on machine tools?",
        "options": [
          "A test to determine the fastest machine tool.",
          "A test to determine the most expensive machine tool.",
          "A test to evaluate machine tool aesthetics.",
          "A test to ensure machine tools meet specified standards and performance criteria."
        ],
        "correctAnswer": "A test to ensure machine tools meet specified standards and performance criteria."
      },
      {
        "question": "Why is conducting acceptance tests important in manufacturing?",
        "options": [
          "It increases production costs.",
          "It improves machine tool aesthetics.",
          "It's not important; any machine tool is acceptable.",
          "It ensures machine tools are of high quality and will perform as expected."
        ],
        "correctAnswer": "It ensures machine tools are of high quality and will perform as expected."
      },
      {
        "question": "What are sensors in the context of engineering?",
        "options": [
          "Devices that emit light.",
          "Devices that generate electricity.",
          "Devices that measure physical quantities and convert them into electrical signals.",
          "Devices that control fluid flow."
        ],
        "correctAnswer": "Devices that measure physical quantities and convert them into electrical signals."
      },
      {
        "question": "What is the primary function of sensors?",
        "options": [
          "To generate energy.",
          "To emit light.",
          "To create physical quantities.",
          "To detect and measure changes in physical quantities."
        ],
        "correctAnswer": "To detect and measure changes in physical quantities."
      },
      {
        "question": "How are sensors used in fluid pressure measurement?",
        "options": [
          "By emitting light.",
          "By generating electricity.",
          "By measuring electrical resistance.",
          "By detecting changes in pressure and converting them into electrical signals."
        ],
        "correctAnswer": "By detecting changes in pressure and converting them into electrical signals."
      },
      {
        "question": "Why is fluid pressure measurement important in various industries?",
        "options": [
          "It's not important; fluid pressure doesn't affect industries.",
          "It's only important in the automotive industry.",
          "It's important for maintaining process efficiency, safety, and quality control.",
          "It's important for increasing production costs."
        ],
        "correctAnswer": "It's important for maintaining process efficiency, safety, and quality control."
      },
      {
        "question": "How are sensors used in liquid flow measurement?",
        "options": [
          "By emitting sound waves.",
          "By generating electricity.",
          "By measuring magnetic fields.",
          "By detecting changes in flow rate and converting them into electrical signals."
        ],
        "correctAnswer": "By detecting changes in flow rate and converting them into electrical signals."
      },
      {
        "question": "Why is accurate liquid flow measurement crucial in industries?",
        "options": [
          "It doesn't impact industries; inaccurate measurements are acceptable.",
          "It increases production speed.",
          "It ensures proper utilization of resources, cost control, and product quality.",
          "It only affects aesthetics."
        ],
        "correctAnswer": "It ensures proper utilization of resources, cost control, and product quality."
      },
      {
        "question": "How are sensors used in temperature measurement?",
        "options": [
          "By emitting visible light.",
          "By generating heat.",
          "By measuring electrical resistance.",
          "By detecting temperature changes and converting them into electrical signals."
        ],
        "correctAnswer": "By detecting temperature changes and converting them into electrical signals."
      },
      {
        "question": "Why is accurate temperature measurement important in various applications?",
        "options": [
          "It's not important; temperature doesn't affect anything.",
          "It's important only for cooking.",
          "It's important for process control, equipment performance, and product quality.",
          "It's important for increasing energy consumption."
        ],
        "correctAnswer": "It's important for process control, equipment performance, and product quality."
      },
      {
        "question": "What factors should be considered when selecting sensors?",
        "options": [
          "Aesthetic appeal.",
          "Sensor color.",
          "Cost and availability.",
          "Accuracy, range, sensitivity, compatibility, and environmental conditions."
        ],
        "correctAnswer": "Accuracy, range, sensitivity, compatibility, and environmental conditions."
      },
      {
        "question": "Why is sensor selection crucial for specific applications?",
        "options": [
          "It doesn't affect applications; any sensor will do.",
          "It increases complexity.",
          "It ensures the use of sensors with the highest cost.",
          "It affects the performance, accuracy, and reliability of measurements."
        ],
        "correctAnswer": "It affects the performance, accuracy, and reliability of measurements."
      },
      {
        "question": "How are sensors used in mass measurement?",
        "options": [
          "By emitting electromagnetic waves.",
          "By generating mass.",
          "By measuring electrical resistance.",
          "By detecting the force of gravity and converting it into electrical signals."
        ],
        "correctAnswer": "By detecting the force of gravity and converting it into electrical signals."
      },
      {
        "question": "Why is accurate mass measurement important in industries?",
        "options": [
          "It's not important; mass doesn't impact industries.",
          "It's only important for fitness industries.",
          "It's important for quality control, material handling, and resource management.",
          "It's important for increasing production costs."
        ],
        "correctAnswer": "It's important for quality control, material handling, and resource management."
      },
      {
        "question": "How are sensors used in force and torque measurement?",
        "options": [
          "By emitting radio waves.",
          "By generating force and torque.",
          "By measuring electrical resistance.",
          "By detecting changes in force and torque and converting them into electrical signals."
        ],
        "correctAnswer": "By detecting changes in force and torque and converting them into electrical signals."
      },
      {
        "question": "Why is accurate force and torque measurement important?",
        "options": [
          "It's not important; force and torque have no impact.",
          "It's important only for athletes.",
          "It's important for ensuring product performance, safety, and equipment design.",
          "It's important for increasing manufacturing complexity."
        ],
        "correctAnswer": "It's important for ensuring product performance, safety, and equipment design."
      },
      {
        "question": "What are actuators in engineering?",
        "options": [
          "Devices that generate heat.",
          "Devices that control fluid flow.",
          "Devices that convert electrical signals into physical motion.",
          "Devices that emit light."
        ],
        "correctAnswer": "Devices that convert electrical signals into physical motion."
      },
      {
        "question": "How do hydraulic actuators function?",
        "options": [
          "By using electrical signals.",
          "By generating hydraulic pressure to create motion.",
          "By emitting light.",
          "By generating heat."
        ],
        "correctAnswer": "By generating hydraulic pressure to create motion."
      },
      {
        "question": "What are some applications of actuators?",
        "options": [
          "Cooking and baking.",
          "Dancing and singing.",
          "Manufacturing, robotics, automotive, aerospace, and automation.",
          "Astronomy and space exploration."
        ],
        "correctAnswer": "Manufacturing, robotics, automotive, aerospace, and automation."
      },
      {
        "question": "Why is selecting the appropriate actuator important for specific applications?",
        "options": [
          "It doesn't matter which actuator is chosen.",
          "It ensures the most expensive actuator is used.",
          "It affects the performance, speed, accuracy, and reliability of mechanical systems.",
          "It only affects visual aesthetics."
        ],
        "correctAnswer": "It affects the performance, speed, accuracy, and reliability of mechanical systems."
      },
      {
        "question": "What are measurement standards?",
        "options": [
          "A type of rulers used for measurement.",
          "Specific quantities chosen arbitrarily.",
          "Reference values or objects used to define and maintain units of measurement.",
          "Materials used for creating measurement instruments."
        ],
        "correctAnswer": "Reference values or objects used to define and maintain units of measurement."
      },
      {
        "question": "Why are measurement standards important?",
        "options": [
          "They increase measurement errors.",
          "They make measurements complex.",
          "They ensure consistency, accuracy, and uniformity in measurements across industries.",
          "They only apply to specific industries."
        ],
        "correctAnswer": "They ensure consistency, accuracy, and uniformity in measurements across industries."
      },
      {
        "question": "What is linear measurement?",
        "options": [
          "Measuring angles.",
          "Measuring temperature.",
          "Measuring distances along straight lines.",
          "Measuring time intervals."
        ],
        "correctAnswer": "Measuring distances along straight lines."
      },
      {
        "question": "What is angular measurement?",
        "options": [
          "Measuring distances along straight lines.",
          "Measuring temperature.",
          "Measuring angles.",
          "Measuring time intervals."
        ],
        "correctAnswer": "Measuring angles."
      },
      {
        "question": "What is measurement error?",
        "options": [
          "An intentional mistake in measurement.",
          "An unavoidable discrepancy between a measured value and the true value.",
          "A perfect match between measured and true values.",
          "A term for extremely accurate measurements."
        ],
        "correctAnswer": "An unavoidable discrepancy between a measured value and the true value."
      },
      {
        "question": "What are systematic errors in measurement?",
        "options": [
          "Errors caused by random chance.",
          "Errors that are impossible to correct.",
          "Errors that are consistent and repeatable.",
          "Errors that don't affect measurement accuracy."
        ],
        "correctAnswer": "Errors that are consistent and repeatable."
      },
      {
        "question": "What is calibration in measurement?",
        "options": [
          "A process to discard measurement instruments.",
          "A process to avoid using measurement instruments.",
          "A process to adjust measurement instruments.",
          "A process to ignore measurement instruments."
        ],
        "correctAnswer": "A process to adjust measurement instruments."
      },
      {
        "question": "Why is regular calibration of measurement instruments important?",
        "options": [
          "It's not important; calibration is unnecessary.",
          "It helps in avoiding measurement instruments.",
          "It ensures measurement instruments are accurate and reliable.",
          "It increases measurement errors."
        ],
        "correctAnswer": "It ensures measurement instruments are accurate and reliable."
      },
      {
        "question": "What is a zero-order system in terms of measurement?",
        "options": [
          "A system with no measurable quantities.",
          "A system that never works.",
          "A system with a linear response to inputs.",
          "A system with an output response directly proportional to the input."
        ],
        "correctAnswer": "A system with an output response directly proportional to the input."
      },
      {
        "question": "What is a first-order system in terms of measurement?",
        "options": [
          "A system that measures temperature only.",
          "A system with a non-linear response to inputs.",
          "A system with a delayed response to inputs.",
          "A system with an output response that changes linearly over time in response to a step input."
        ],
        "correctAnswer": "A system with an output response that changes linearly over time in response to a step input."
      },
      {
        "question": "What is damping in measurement systems?",
        "options": [
          "Adding weight to a measurement instrument.",
          "The tendency of a system to oscillate.",
          "The resistance of a system to oscillations or vibrations.",
          "A process to eliminate measurement errors."
        ],
        "correctAnswer": "The resistance of a system to oscillations or vibrations."
      },
      {
        "question": "Why is damping important in measurement systems?",
        "options": [
          "It increases measurement errors.",
          "It ensures rapid oscillations.",
          "It helps in minimizing oscillations and settling time, improving measurement accuracy.",
          "It's not important; damping doesn't affect measurements."
        ],
        "correctAnswer": "It helps in minimizing oscillations and settling time, improving measurement accuracy."
      },
      {
        "question": "What are static characteristics of a measurement system?",
        "options": [
          "Characteristics that change rapidly.",
          "Characteristics that are irrelevant to measurements.",
          "Characteristics that remain constant over time.",
          "Characteristics that vary with temperature."
        ],
        "correctAnswer": "Characteristics that remain constant over time."
      },
      {
        "question": "Why are static characteristics important in measurement systems?",
        "options": [
          "They increase measurement errors.",
          "They ensure constant measurement accuracy.",
          "They make measurements complex.",
          "They affect the speed of measurements."
        ],
        "correctAnswer": "They ensure constant measurement accuracy."
      },
      {
        "question": "What is plant layout in production systems?",
        "options": [
          "The arrangement of plants for decoration.",
          "The arrangement of machinery, equipment, and workers within a manufacturing facility.",
          "The location of plants in different countries.",
          "The process of growing plants in a controlled environment."
        ],
        "correctAnswer": "The arrangement of machinery, equipment, and workers within a manufacturing facility."
      },
      {
        "question": "Why is plant layout important in manufacturing?",
        "options": [
          "It has no impact on production efficiency.",
          "It improves employee morale.",
          "It ensures that plants are randomly arranged.",
          "It affects production efficiency, workflow, and utilization of space."
        ],
        "correctAnswer": "It affects production efficiency, workflow, and utilization of space."
      },
      {
        "question": "What is material handling in production systems?",
        "options": [
          "Handling of raw materials only.",
          "The process of transporting, storing, and managing materials throughout the production process.",
          "Handling of finished products only.",
          "Handling of machinery and equipment."
        ],
        "correctAnswer": "The process of transporting, storing, and managing materials throughout the production process."
      },
      {
        "question": "Why is efficient material handling important in manufacturing?",
        "options": [
          "It increases the cost of production.",
          "It only impacts aesthetics.",
          "It improves the safety of employees.",
          "It reduces production lead times, minimizes delays, and optimizes resource utilization."
        ],
        "correctAnswer": "It reduces production lead times, minimizes delays, and optimizes resource utilization."
      },
      {
        "question": "What is production planning and control?",
        "options": [
          "A process of randomly assigning tasks to employees.",
          "A process of creating production schedules without considering demand.",
          "A process of ensuring that production processes run smoothly, efficiently, and according to plan.",
          "A process of outsourcing production to other companies."
        ],
        "correctAnswer": "A process of ensuring that production processes run smoothly, efficiently, and according to plan."
      },
      {
        "question": "Why is production planning and control important in manufacturing?",
        "options": [
          "It's not important; production will happen regardless.",
          "It increases production costs.",
          "It helps in optimizing resources, meeting demand, and minimizing waste.",
          "It decreases employee satisfaction."
        ],
        "correctAnswer": "It helps in optimizing resources, meeting demand, and minimizing waste."
      },
      {
        "question": "What is Economic Order Quantity (EOQ) in inventory control?",
        "options": [
          "The quantity of inventory that is ordered without considering costs.",
          "The quantity of inventory that is ordered to minimize ordering and holding costs.",
          "The quantity of inventory that is ordered to maximize costs.",
          "The quantity of inventory that is ordered based on random factors."
        ],
        "correctAnswer": "The quantity of inventory that is ordered to minimize ordering and holding costs."
      },
      {
        "question": "Why is calculating EOQ important for inventory management?",
        "options": [
          "It increases inventory costs.",
          "It ensures the highest possible inventory levels.",
          "It minimizes the need for forecasting.",
          "It optimizes inventory levels and reduces costs."
        ],
        "correctAnswer": "It optimizes inventory levels and reduces costs."
      },
      {
        "question": "What is Safety Stock in inventory control?",
        "options": [
          "Stock that is stored in an unsafe location.",
          "Excess stock that is not needed.",
          "Additional stock that is held to account for uncertainties in demand and lead time.",
          "Stock that is labeled as 'unsafe to use'."
        ],
        "correctAnswer": "Additional stock that is held to account for uncertainties in demand and lead time."
      },
      {
        "question": "Why is safety stock important in inventory management?",
        "options": [
          "It increases inventory costs.",
          "It's not important; safety stock is unnecessary.",
          "It ensures optimal inventory levels.",
          "It's only important in seasonal businesses."
        ],
        "correctAnswer": "It ensures optimal inventory levels."
      },
      {
        "question": "What is Reorder Quantity in inventory control?",
        "options": [
          "The quantity of items that are returned to the supplier.",
          "The quantity of items ordered when the inventory level reaches a specific point.",
          "The quantity of items that are discarded.",
          "The quantity of items that are counted during an inventory audit."
        ],
        "correctAnswer": "The quantity of items ordered when the inventory level reaches a specific point."
      },
      {
        "question": "Why is determining the reorder quantity important?",
        "options": [
          "It increases inventory costs.",
          "It's not important; any quantity is acceptable.",
          "It ensures timely replenishment of inventory.",
          "It only affects the appearance of inventory shelves."
        ],
        "correctAnswer": "It ensures timely replenishment of inventory."
      },
      {
        "question": "What is Lead Time in inventory control?",
        "options": [
          "The time taken for inventory to reach the customer.",
          "The time taken for inventory to be produced.",
          "The time taken to count inventory.",
          "The time taken for inventory to be ordered and delivered."
        ],
        "correctAnswer": "The time taken for inventory to be ordered and delivered."
      },
      {
        "question": "Why is lead time important in inventory management?",
        "options": [
          "It increases inventory costs.",
          "It ensures immediate inventory delivery.",
          "It helps in calculating reorder points and safety stock.",
          "It only impacts the appearance of inventory shelves."
        ],
        "correctAnswer": "It helps in calculating reorder points and safety stock."
      },
      {
        "question": "What is ABC Analysis in inventory management?",
        "options": [
          "An analysis of the alphabet's impact on inventory.",
          "An analysis of the availability of items in the inventory.",
          "A classification of items into groups based on their value and importance.",
          "A calculation of average business costs."
        ],
        "correctAnswer": "A classification of items into groups based on their value and importance."
      },
      {
        "question": "Why is ABC Analysis useful for inventory control?",
        "options": [
          "It doesn't impact inventory management.",
          "It helps in alphabetizing inventory items.",
          "It provides insights into which items require more attention and control.",
          "It's only useful for small businesses."
        ],
        "correctAnswer": "It provides insights into which items require more attention and control."
      },
      {
        "question": "What are forecasting techniques in inventory management?",
        "options": [
          "Techniques for counting inventory accurately.",
          "Techniques for predicting future demand based on historical data and trends.",
          "Techniques for randomly choosing inventory items.",
          "Techniques for calculating inventory costs."
        ],
        "correctAnswer": "Techniques for predicting future demand based on historical data and trends."
      },
      {
        "question": "Why are forecasting techniques important for inventory management?",
        "options": [
          "They increase inventory costs.",
          "They ensure immediate inventory delivery.",
          "They guarantee 100% accuracy in inventory counts.",
          "They help in making informed decisions about inventory levels and ordering."
        ],
        "correctAnswer": "They help in making informed decisions about inventory levels and ordering."
      },
      {
        "question": "What are engine efficiencies?",
        "options": [
          "Efforts made to build engines quickly.",
          "The measurement of engine speed only.",
          "The ratio of useful work output to the energy input of an engine.",
          "The measurement of engine aesthetics."
        ],
        "correctAnswer": "The ratio of useful work output to the energy input of an engine."
      },
      {
        "question": "Why are engine efficiencies important?",
        "options": [
          "They increase engine costs.",
          "They ensure engines are heavy.",
          "They affect fuel consumption, performance, and environmental impact of engines.",
          "They only impact engine color."
        ],
        "correctAnswer": "They affect fuel consumption, performance, and environmental impact of engines."
      },
      {
        "question": "What is testing of engines?",
        "options": [
          "Testing engines for their ability to fly.",
          "A process to ensure engines are never tested.",
          "Testing engines for their emissions only.",
          "A process to assess engine performance, emissions, and reliability."
        ],
        "correctAnswer": "A process to assess engine performance, emissions, and reliability."
      },
      {
        "question": "Why is testing of engines crucial?",
        "options": [
          "It increases engine costs.",
          "It's not important; engines will work without testing.",
          "It ensures engines are always faulty.",
          "It verifies that engines meet performance, safety, and environmental standards."
        ],
        "correctAnswer": "It verifies that engines meet performance, safety, and environmental standards."
      },
      {
        "question": "What is engine power and heat?",
        "options": [
          "The power generated by engines and the heat they emit.",
          "The power generated by engines only.",
          "The heat emitted by engines only.",
          "The power generated by engines and the heat they absorb."
        ],
        "correctAnswer": "The power generated by engines and the heat they emit."
      },
      {
        "question": "Why is understanding engine power and heat important?",
        "options": [
          "It increases engine costs.",
          "It's not important; engines don't produce power or heat.",
          "It helps in optimizing engine performance, efficiency, and cooling.",
          "It's only important for decorative purposes."
        ],
        "correctAnswer": "It helps in optimizing engine performance, efficiency, and cooling."
      },
      {
        "question": "What is engine cooling?",
        "options": [
          "Cooling engines for display purposes.",
          "The process of cooling the surrounding environment using engines.",
          "The process of maintaining optimal operating temperatures in engines.",
          "Cooling engines for aesthetic reasons only."
        ],
        "correctAnswer": "The process of maintaining optimal operating temperatures in engines."
      },
      {
        "question": "Why is engine cooling crucial?",
        "options": [
          "It increases engine costs.",
          "It's not important; engines can operate at any temperature.",
          "It helps in preventing overheating, ensuring efficient combustion, and extending engine life.",
          "It's only crucial for cold weather operations."
        ],
        "correctAnswer": "It helps in preventing overheating, ensuring efficient combustion, and extending engine life."
      },
      {
        "question": "What is knocking and pre-ignition in engines?",
        "options": [
          "A type of dance performed by engines.",
          "An intentional process to damage engines.",
          "Unwanted combustion phenomena in engines.",
          "A process to improve engine efficiency."
        ],
        "correctAnswer": "Unwanted combustion phenomena in engines."
      },
      {
        "question": "Why are knocking and pre-ignition problematic in engines?",
        "options": [
          "They increase engine costs.",
          "They improve engine efficiency.",
          "They are not problematic; they are beneficial for engines.",
          "They can cause engine damage, reduced performance, and increased emissions."
        ],
        "correctAnswer": "They can cause engine damage, reduced performance, and increased emissions."
      },
      {
        "question": "What are the carburetor and fuel injection system in engines?",
        "options": [
          "Devices that emit exhaust gases from engines.",
          "Devices that measure engine temperature.",
          "Devices that convert engine power into electricity.",
          "Devices that control the fuel-air mixture for combustion in engines."
        ],
        "correctAnswer": "Devices that control the fuel-air mixture for combustion in engines."
      },
      {
        "question": "Why are the carburetor and fuel injection system important in engines?",
        "options": [
          "They increase engine costs.",
          "They have no impact on engine performance.",
          "They affect fuel efficiency, combustion quality, and emissions of engines.",
          "They are only important for engine aesthetics."
        ],
        "correctAnswer": "They affect fuel efficiency, combustion quality, and emissions of engines."
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
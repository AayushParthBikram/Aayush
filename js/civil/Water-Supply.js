const quizData = [
  {
    question: "The fire demand of a city may be worked out by",
    options: ["Kuichling’s formula", "Freeman formula", "Bustan’s formula", "All the above"],
    correctAnswer: "All the above"
  },
  {
    question: "Mathamoglobinemia or blue baby disease is caused due to",
    options: ["Chlorides", "Nitrites", "Nitrates", "Sulphides"],
    correctAnswer: "Nitrates"
  },
  {
    question: "Acidity in water is caused due to",
    options: ["Mineral acids", "Free CO2", "Aluminium sulphate", "All the above"],
    correctAnswer: "All the above"
  },
  {
    question: "The specific retention is least in case of",
    options: ["Clay", "Sand", "Silt", "Coarse gravel"],
    correctAnswer: "Coarse gravel"
  },
  {
    question: "Time of concentration",
    options: ["is the time taken, for precipitation", "duration of rainfall", "time taken for all the runoff to reach the drain", "time taken for the storm water to travel from the most remote point to the drain"],
    correctAnswer: "time taken for the storm water to travel from the most remote point to the drain"
  },
  {
    question: "The R.L. of the ground water table on the sides of a valley is 1505 m whereas R.L. of the stream water is 1475 m. If 60° slope consists of pervious soil between R.L. 1485 m to 1500 m, the gravity spring may be expected at the point of reduced level",
    options: ["1500 m", "1505 m", "1475 m", "1485 m"],
    correctAnswer: "1485 m"
  },
  {
    question: "Average annual rainfall at any station is the average of annual rainfall over a period of",
    options: ["14 years", "21 years", "28 years", "35 years"],
    correctAnswer: "35 years"
  },
  {
    question: "While determining the yield of open wells by the pumping test",
    options: ["Velocity of recharging water increases with depression head", "Depression head resulting at critical velocity is called critical depression head", "Working head is generally limited to ?rd of the critical depression head", "Maximum safe yield of an open well is expected at critical depression head"],
    correctAnswer: "Maximum safe yield of an open well is expected at critical depression head"
  },
  {
    question: "According to IS : 1172-1963, a minimum of 135 litres of water capita per day, is required for",
    options: ["Boarding schools", "Nurses home and medical quarters", "Hostels", "All the above"],
    correctAnswer: "All the above"
  },
  {
    question: "If four fires break out in a city of population 40 lakhs and if each hydrant has three streams and duration of each fire is four hours, the total quantity of water required is",
    options: ["1880 kilo litres", "2880 kilo litres", "3880 kilo litres", "4880 kilo litres"],
    correctAnswer: "2880 kilo litres"
  },
  {
    question: "Biochemical Oxygen Demand (B.O.D.) of safe drinking water must be",
    options: ["nil", "5", "10", "15"],
    correctAnswer: "nil"
  },
  {
    question: "For determining the velocity of flow of underground water, the most commonly used non-empirical formula is",
    options: ["Darcy’s formula", "Slichter’s formula", "Hazen’s formula", "Lacy’s formula"],
    correctAnswer: "Darcy’s formula"
  },
  {
    question: "Aeration of water is done to remove",
    options: ["odour", "colour", "bacterias", "hardness"],
    correctAnswer: "odour"
  },
  {
    question: "Disinfection of drinking water, is done to remove",
    options: ["odour", "bacterias", "turbidity", "colour"],
    correctAnswer: "bacterias"
  },
  {
    question: "Specific capacity or yield of wells, is generally expressed, as",
    options: ["m3/sec", "m3/hour", "m3/hour/m2", "m3/hour/m2/m"],
    correctAnswer: "m3/hour/m2/m"
  },
  {
    question: "The least thickness of class B cast iron (spun) pipe, is",
    options: ["7.2 mm", "7.9 mm", "8.6 mm", "10 mm"],
    correctAnswer: "8.6 mm"
  },
  {
    question: "The maximum depth of sedimentation tanks is limited to",
    options: ["3 m", "4 m", "5 m", "6 m"],
    correctAnswer: "6 m"
  },
  {
    question: "Corrosion of well pipes may not be reduced by",
    options: ["reducing the draw down and the pumping rate", "reducing the flow velocity", "using thicker pipes", "using screens having larger area of openings"],
    correctAnswer: "using screens having larger area of openings"
  },
  {
    question: "Pick up the incorrect statement from the following. The underground sources of water are from",
    options: ["wells", "springs", "infiltration wells", "storage reservoirs"],
    correctAnswer: "storage reservoirs"
  },
  {
    question: "Pick up the correct statement from the following:",
    options: ["The water level in a still well represents the ground water table level", "The difference between water table level and the water level in a well after pumping is called depression head", "The surface of water table surrounding a well during pumping forms a cone of depression", "All the above"],
    correctAnswer: "All the above"
  },
  {
    question: "The water supply system means",
    options: ["The entire scheme of collection and disposal of liquid waste", "Construction of reservoirs", "Construction of canals", "The complete layout from the source of supply to the distribution system"],
    correctAnswer: "The complete layout from the source of supply to the distribution system"
  },
  {
    question: "The design period for a water supply project is taken as",
    options: ["5 to 10 years", "10 to 15 years", "15 to 20 years", "20 to 30 years"],
    correctAnswer: "20 to 30 years"
  },
  {
    question: "Pump commonly used for lifting water in water supply mains is",
    options: ["centrifugal pump", "axial-flow pump", "reciprocating pump", "rotary-type pump"],
    correctAnswer: "axial-flow pump"
  },
  {
    question: "The suitable layout for a water supply distribution system for an irregularly grown town is",
    options: ["Grid iron system", "Dead end system", "Ring system", "Radial system"],
    correctAnswer: "Dead end system"
  },
  {
    question: "The suitable layout for a water supply distribution system, for a city of roads of rectangular pattern is",
    options: ["Dead end system", "Grid iron system", "Ring system", "Radial system"],
    correctAnswer: "Grid iron system"
  },
  {
    question: "The purpose of providing a balancing reservoir in a water supply distribution system is to",
    options: ["equalize pressure in the distribution system", "store adequate quantity of water to meet requirement in case of breakdown of inflow", "store adequate fire fighting reserve", "take care of fluctuations in the rate of consumption"],
    correctAnswer: "take care of fluctuations in the rate of consumption"
  },
  {
    question: "From high level water resource, the water supply system used in termed as",
    options: ["Pumping and storage system", "Pumping system", "Gravity system", "Dual system"],
    correctAnswer: "Gravity system"
  },
  {
    question: "The equation used commonly for the design of distribution system for water supply is designed by",
    options: ["Manning", "Darcy", "Hazen and Williams", "Kutter"],
    correctAnswer: "Hazen and Williams"
  },
  {
    question: "Ferrule is one of the important appurtenances installed in",
    options: ["combined sewerage system", "water distribution system", "house drainage system", "storm sewerage system"],
    correctAnswer: "water distribution system"
  },
  {
    question: "The four major water supply distribution systems are",
    options: ["dead end, trees, grid iron, and reticulation", "dead end, trees, grid iron, and circular", "trees, grid iron, ring, and radial", "tree, reticulation, circular, and ring"],
    correctAnswer: "trees, grid iron, ring, and radial"
  },
  {
    question: "For water supply to residences, the service are provided by",
    options: ["P.V.C. pipes", "lead pipes", "galvanized iron pipes", "cast iron pipes"],
    correctAnswer: "galvanized iron pipes"
  },
  {
    question: "The method which is most widely used for analyzing and designing the pipes of all types of complex water distribution network is",
    options: ["Equivalent pipe method", "Hardy-cross method", "Circle method", "Electric network analyzer method"],
    correctAnswer: "Hardy-cross method"
  },
  {
    question: "Water losses in water supply are assumed as",
    options: ["5%", "7.5%", "10%", "15%"],
    correctAnswer: "15%"
  },
  {
    question: "Which of the following processes are necessary for removing suspended solids from water?",
    options: ["Coagulation", "Flocculation", "Sedimentation", "All of these"],
    correctAnswer: "All of these"
  },
  {
    question: "Alum acts as",
    options: ["coagulant", "flocculent", "catalyst", "disinfectant"],
    correctAnswer: "coagulant"
  },
  {
    question: "Activated carbon removes from water",
    options: ["Organic matter", "Iron", "Manganese", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "For proper slow mixing in the flocculator of a water treatment plant, the temporal mean velocity gradient G needs to be of the order of",
    options: ["5 S-1 to 10 S-1", "20 S-1 to 80 S-1", "100 S-1 to 200 S-1", "250 S-1 to 350 S-1"],
    correctAnswer: "20 S-1 to 80 S-1"
  },
  {
    question: "Self-purification of natural streams is caused due to",
    options: ["Turbulence of water", "Dilution", "Oxidation-reduction", "All the above"],
    correctAnswer: "All the above"
  },
  {
    question: "In a water treatment, the optimum time of flocculation is usually given as 30 minutes. In case the time of flocculation is increased beyond this value, the flocs will",
    options: ["become heavy and settle down in the flocculation tank itself", "entrap air and will float in the sedimentation tank", "break up and defeat the purpose of flocculation", "stick to the paddles"],
    correctAnswer: "entrap air and will float in the sedimentation tank"
  },
  {
    question: "Break-point chlorination of water involves addition of chlorine in an amount sufficient to",
    options: ["kill Guardia cysts", "react with any ammonia and oxidisable organic matter", "reduce bacterial growth", "react with inorganic matter"],
    correctAnswer: "react with any ammonia and oxidisable organic matter"
  },
  {
    question: "Aeration of water is done to remove",
    options: ["Odour", "Colour", "Bacteria’s", "Turbidity"],
    correctAnswer: "Odour"
  },
  {
    question: "The most ideal disinfectant used for drinking water is",
    options: ["Alum", "Chlorine", "Lime", "Nitrogen"],
    correctAnswer: "Chlorine"
  },
  {
    question: "In water treatment, rapid gravity filters are adopted to remove",
    options: ["Dissolved organic substances", "Dissolved solids and gases", "Floating solids and dissolved inorganic solids", "Bacteria and colloidal solids"],
    correctAnswer: "Bacteria and colloidal solids"
  },
  {
    question: "The treatment of water is required mainly for",
    options: ["the removal of germs of diseases", "the removal of copper sulphate", "increasing pH value", "the removal of chlorides"],
    correctAnswer: "the removal of germs of diseases"
  },
  {
    question: "Activated carbon is used in water treatment for",
    options: ["disinfection", "removing hardness", "removing odour", "aeration"],
    correctAnswer: "removing odour"
  },
  {
    question: "During treatment of water, sedimentation is done",
    options: ["before filtration", "after filtration", "simultaneously with filtration", "along with chlorination"],
    correctAnswer: "before filtration"
  },
  {
    question: "Self-cleansing velocity is",
    options: ["The minimum velocity of flow required to maintain a certain amount of solids in the flow", "The maximum velocity of flow required to maintain a certain amount of solids in the flow", "Such flow velocity as would be sufficient to flush out any deposited solids in the sewer", "Such flow velocity as would be sufficient to ensure that sewage does not remain in the sewer"],
    correctAnswer: "Such flow velocity as would be sufficient to flush out any deposited solids in the sewer"
  },
  {
    question: "In a water supply scheme, for what purpose aeration is carried out?",
    options: ["to remove taste and odour", "for complete elimination of colloidal matter", "for killing pathogenic bacteria", "for coagulation"],
    correctAnswer: "to remove taste and odour"
  },
  {
    question: "The various treatment processes in a water treatment plant are listed below",
    options: ["Filtration, Chlorination, Sedimentation, Coagulation, Flocculation", "Coagulation, Sedimentation, Chlorination", "Coagulation, Filtration, Sedimentation, Chlorination", "Sedimentation, Chlorination"],
    correctAnswer: "Coagulation, Filtration, Sedimentation, Chlorination"
  },
  {
    question: "Which of the following treatments is the most economically effective method for controlling Schistosomiasis?",
    options: ["Filtration", "Ozonation", "Chlorination", "UV radiation"],
    correctAnswer: "Chlorination"
  },
  {
    question: "Which of these is an indirect method for the determination of stream flow?",
    options: ["Dilution techniques", "Slope area method", "Ultrasonic method", "Area velocity method"],
    correctAnswer: "Slope area method"
  },
  {
    question: "Consider the following unit process commonly used in water treatment; Rapid Mixing (RM), Flocculation (F), Primary Sedimentation (PS), Secondary Sedimentation (SS), Chlorination (C), and Rapid Sand Filtration (RSF). The order of these unit processes (first to last) in conventional water treatment plant is",
    options: ["PS → RSF → F → RM → SS → C", "PS → F → RM → RSF → SS → C", "PS → F → SS → RSF → RM → C", "PS → RM → F → SS → RSF → C"],
    correctAnswer: "PS → F → RM → RSF → SS → C"
  },
  {
    question: "A river is the source of water supply to a town. Its water is very turbid and polluted. The correct sequence of steps for treating the river water would be",
    options: ["presedimentation → prechlorination → coagulation → sedimentation → filtration → post chlorination", "coagulation → sedimentation → prechlorination", "coagulation → filtration → sedimentation → prechlorination", "sedimentation → prechlorination"],
    correctAnswer: "presedimentation → prechlorination → coagulation → sedimentation → filtration → post chlorination"
  },
  {
    question: "What is the recommended diameter of a domestic sewer pipe laid at gradient 1 in 100?",
    options: ["100 mm", "50 mm", "175 mm", "150 mm"],
    correctAnswer: "150 mm"
  },
  {
    question: "If the slopes of two sewers A and B of the same size are 1 in 100 and 1 in 400 respectively, the ratio of velocity of flow in the two sewers A and B will be",
    options: ["1", "0.5", "22/3", "2"],
    correctAnswer: "2"
  },
  {
    question: "If D is the diameter of the upper circular portion, the overall depth of New Egg-shaped sewer section is",
    options: ["1.350 D", "1.250 D", "1.625 D", "1.425 D"],
    correctAnswer: "1.625 D"
  },
  {
    question: "The minimum diameter for the public sewer in hilly areas where steep slopes are prevalent is",
    options: ["150", "3000", "20", "100"],
    correctAnswer: "100"
  },
  {
    question: "For taking the sewer line below road/canal/railway line, the following type of sewer appurtenances should be provided",
    options: ["Stormwater relief work", "Siphon spillways", "Jumping weir", "Inverted syphon"],
    correctAnswer: "Inverted syphon"
  },
  {
    question: "The best sewer material to resist hydrogen sulfide corrosion is",
    options: ["glazed stoneware", "reinforced cement concrete", "asbestos cement", "none of these"],
    correctAnswer: "glazed stoneware"
  },
  {
    question: "The diameter of an RCC sewer pipe is 300mm. The gradient required to generate self-cleansing velocity would be of the order of",
    options: ["1 in 190", "1 in 100", "1 in 920", "1 in 220"],
    correctAnswer: "1 in 220"
  },
  {
    question: "Laying of sewers is usually done with the help of",
    options: ["a theodolite", "a compass", "a plane table", "sight rails and boning rods"],
    correctAnswer: "sight rails and boning rods"
  },
  {
    question: "Sewer pipes are made of",
    options: ["stoneware", "earthenware", "terracotta", "refractory ware"],
    correctAnswer: "stoneware"
  },
  {
    question: "Crown corrosion in the sewer is caused due to the presence of",
    options: ["Bromide", "Nitrate", "Chloride", "Sulphate"],
    correctAnswer: "Sulphate"
  },
  {
    question: "In stoneware pipe, glazing is made for",
    options: ["waterproofing", "softening", "hardening", "none of the above"],
    correctAnswer: "waterproofing"
  },
  {
    question: "Corrosion in concrete sewer is caused by",
    options: ["DO", "H2S", "Chlorine", "Nitrogen"],
    correctAnswer: "H2S"
  },
  {
    question: "The hydraulic mean depth of a circular sewer running full is equal to",
    options: ["d/4", "d/2", "d/8", "d/6"],
    correctAnswer: "d/4"
  },
  {
    question: "In a wastewater treatment process, the biomass produced is 12,000 units, while substrate consumed is 54,000 units. Estimate the biomass synthesis yield.",
    options: ["0.22", "0.35", "0.45", "0.78"],
    correctAnswer: "0.22"
  },
  {
    question: "At what stage of the waste management system can we recycle the waste?",
    options: ["Waste can be recycled during handling and storage only", "Waste can be recycled during sorting and processing of waste only", "Waste can be recycled during collection and transportation only", "Waste can be recycled at any stage"],
    correctAnswer: "Waste can be recycled at any stage"
  },
  {
    question: "Which of the following Anaerobic Reactor does not require any special media to keep sludge in suspension during treatment?",
    options: ["Up flow anaerobic filters", "Down flow anaerobic filters", "Fluidized bed units", "UASB type units"],
    correctAnswer: "UASB type units"
  },
  {
    question: "Which of the following is an attached growth process used for treating wastewater?",
    options: ["Rotating biological contactors", "Aerated lagoons", "Activated sludge process", "Sludge digestion system"],
    correctAnswer: "Rotating biological contactors"
  },
  {
    question: "Winkler’s method is used to determine",
    options: ["Methane content of wastewater", "Biological Oxygen Demand (BOD) of wastewater", "Chemical Oxygen Demand (COD) of wastewater", "Dissolved Oxygen (DO) content of wastewater"],
    correctAnswer: "Dissolved Oxygen (DO) content of wastewater"
  },
  {
    question: "The biochemical treatment of sewage effluents is a process of",
    options: ["Dehydration", "Carbonation", "Oxidation", "Reduction"],
    correctAnswer: "Oxidation"
  },
  {
    question: "Sewage that has received no purification treatment is called",
    options: ["Raw sewage", "Untreated sewage", "Crude sewage", "Fresh sewage"],
    correctAnswer: "Crude sewage"
  },
  {
    question: "As per IS 2490-1981, the general tolerance limit of biological oxygen demand (5 days at 20°C) in public sewers is",
    options: ["200 mg/L", "300 mg/L", "350 mg/L", "250 mg/L"],
    correctAnswer: "350 mg/L"
  },
  {
    question: "Minimum concentration of dissolved oxygen that should be ensured while discharging the treated wastewater into receiving waters is",
    options: ["1 ppm", "2 ppm", "3 ppm", "4 ppm"],
    correctAnswer: "4 ppm"
  },
  {
    question: "What is the main reason for providing an equalization tank in the sewage treatment plant?",
    options: ["Damping the hourly variation in the sewage flow", "Damping the daily variations in the sewage flow", "Aeration of the sewage", "Proper mixing of the sewage before further treatment"],
    correctAnswer: "Damping the hourly variation in the sewage flow"
  },
  {
    question: "The COD/BOD5 ratio of two wastewater samples from different sources was measured as 1.5 and 3.0 respectively. Based on this information, the following conclusion may be arrived at.",
    options: ["The sample with a higher COD/BOD5 ratio has more organic matter", "The sample with a lower COD/BOD5 ratio has a higher percentage of biodegradable organic matter", "The sample with a lower COD/BOD5 ratio is from an industrial source", "The sample with a higher COD/BOD5 ratio is a sample of domestic sewage"],
    correctAnswer: "The sample with a lower COD/BOD5 ratio has a higher percentage of biodegradable organic matter"
  },
  {
    question: "Biochemical oxygen demand of wastewater represents",
    options: ["Total concentration of biochemical matter", "Total organic matter", "Concentration of biodegradable organic matter", "Concentration of chemically degradable organic matter"],
    correctAnswer: "Concentration of biodegradable organic matter"
  },
  {
    question: "When wastewater is disposed of into a running stream, 4 zones are formed. In which of the following zones will the minimum level of dissolved oxygen be found?",
    options: ["Zone of degradation", "Zone of active decomposition", "Zone of recovery", "Zone of clear water"],
    correctAnswer: "Zone of active decomposition"
  },
  {
    question: "Consider the following impurities",
    options: ["CO and H2S", "Finely divided suspended matter", "Disease-causing bacteria", "Excess alkalinity"],
    correctAnswer: "CO and H2S"
  },
  {
    question: "Which of the following sewage treatment methods has inherent problems of odor, ponding, and fly nuisance?",
    options: ["UASB system", "Activated sludge process", "Trickling filters", "Stabilization ponds"],
    correctAnswer: "Stabilization ponds"
  },
  {
    question: "Sewage treatment units are normally designed for",
    options: ["15-20 years", "5-10 years", "30-40 years", "40-50 years"],
    correctAnswer: "30-40 years"
  },
  {
    question: "The BOD removal efficiency in percentage, during primary treatment, under normal conditions is about",
    options: ["65%", "85%", "30%", "zero"],
    correctAnswer: "30%"
  },
  {
    question: "A treated wastewater (initial contaminant concentration, flow rate = 5C, 0.2Q) enters a stream (initial concentration, flow rate = 0.01C, Q). Calculate the contaminant concentration in the stream immediately after mixing of wastewater with stream water?",
    options: ["0.04 C", "0.84 C", "1.2 C", "1.0 C"],
    correctAnswer: "0.84 C"
  },
  {
    question: "The bio-chemical oxygen demand (BOD) of sewage is measured after",
    options: ["1 day at 20 °C", "5 days at 25°C", "7 days at 25°C", "5 days at 20°C"],
    correctAnswer: "5 days at 20°C"
  },
  {
    question: "The coagulant which is generally not used for treating the sewage is",
    options: ["Alum", "Ferric Chloride", "Ferric sulphate", "Chlorinated copperas"],
    correctAnswer: "Ferric sulphate"
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
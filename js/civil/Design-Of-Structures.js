const quizData = [
    {
      question: "Which of the following structural loads are not applied commonly to a building?",
      options: ["Dead load", "Rain load", "Live load", "Environmental load"],
      correctAnswer: "Rain load"
    },
    {
      question: "Dead load comprises of:-",
      options: ["Permanently attached loads", "Temporarily attached loads", "Permanent as well as temporary loads", "Snow load"],
      correctAnswer: "Permanently attached loads"
    },
    {
      question: "Live loads, with time can vary in:-",
      options: ["Magnitude", "Position", "Neither position nor magnitude", "Position as well as magnitude"],
      correctAnswer: "Position as well as magnitude"
    },
    {
      question: "Most of the loads applied to a building are environmental load. State whether this statement is true or false.",
      options: ["True", "False"],
      correctAnswer: "False"
    },
    {
      question: "Building codes require the partition load to be considered even without partition if live load is less than:-",
      options: ["60 psf", "70 psf", "80 psf", "90 psf"],
      correctAnswer: "80 psf"
    },
    {
      question: "In the method used to establish the magnitude of live load, what is the reference time period?",
      options: ["30 years", "35 years", "50 years", "60 years"],
      correctAnswer: "50 years"
    },
    {
      question: "Impact loads are equal to the sum of the magnitude of the loads actually caused and the magnitude if the loads had they been dead loads. State whether this statement is true or false.",
      options: ["True", "False"],
      correctAnswer: "False"
    },
    {
      question: "Impact load results from which type of effects of loads applied?",
      options: ["Static", "Dynamic", "Static and dynamic", "Neither static nor dynamic"],
      correctAnswer: "Dynamic"
    },
    {
      question: "How does an increase in the pitch of the roof affects the amount of load that can be placed on it?",
      options: ["It increases", "It decreases", "Remains constant", "Depends upon case"],
      correctAnswer: "It decreases"
    },
    {
      question: "If R1 = 1.1 and R2 = 1.2, then what is the value of Lr(in psf)?",
      options: ["26.1", "26.2", "26.3", "26.4"],
      correctAnswer: "26.4"
    },
    
        {
          question: "The practical utility of concrete technology for civil engineers is to",
          options: [
            "A. enable them to know how to stock properly the materials required for concrete",
            "B. enable them to perform different tests concerning concrete",
            "C. make them conversant with fundamental principles of concrete",
            "D. all of the above"
          ],
          correctAnswer: "D. all of the above"
        },
        {
          question: "The strength and durability of concrete depends upon",
          options: [
            "A. size of aggregates",
            "B. grading of aggregates",
            "C. moisture contents of aggregates",
            "D. all of these"
          ],
          correctAnswer: "D. all of these"
        },
        {
          question: "The breaking up of cohesion in a mass of concrete is called",
          options: ["A. workability", "B. bleeding", "C. segregation", "D. creep"],
          correctAnswer: "C. segregation"
        },
        {
          question: "The workability of concrete is defined as the",
          options: [
            "A. ease with which it can be mixed, transported and placed in position in a homogeneous state",
            "B. breaking up of cohesion in a mass of concrete",
            "C. separation of water or water-cement mixture from the freshly mixed concrete",
            "D. none of the above"
          ],
          correctAnswer: "A. ease with which it can be mixed, transported and placed in position in a homogeneous state"
        },
        {
          question: "The separation of water or water-cement mixture from the freshly mixed concrete is known as bleeding.",
          options: ["A. True", "B. False"],
          correctAnswer: "A. True"
        },
        {
          question: "The continuous strain, which the concrete undergoes due to the application of external loads, is called",
          options: ["A. workability", "B. bleeding", "C. segregation", "D. creep"],
          correctAnswer: "D. creep"
        },
        {
          question: "A good concrete should be subjected to",
          options: ["A. maximum", "B. minimum"],
          correctAnswer: "B. minimum"
        },
        {
          question: "Segregation in concrete results in",
          options: ["A. honeycombing", "B. porous layers", "C. surface scaling", "D. all of these"],
          correctAnswer: "D. all of these"
        },
        {
          question: "Harshness in concrete is due to the excess of",
          options: ["A. water", "B. finer particles", "C. middle-sized particles", "D. coarser particles"],
          correctAnswer: "C. middle-sixed particle"
        },
        {
          question: "In order to avoid segregation, the concrete should not be thrown from a height.",
          options: ["A. Agree", "B. Disagree"],
          correctAnswer: "A. Agree"
        },
        {
          question: "Rivets connecting flange angles to cover plates in a plate girder are subjected to:",
          options: ["Horizontal shear only", "Vertical load only", "Both (A) and (B)", "None of the above"],
          correctAnswer: "Horizontal shear only"
        },
        {
          question: "When the axis of load lies in the plane of the rivet group, then the rivets are subjected to:",
          options: ["Only shear stresses", "Only tensile stresses", "Both (A) and (B)", "None of the above"],
          correctAnswer: "Only shear stresses"
        },
        {
          question: "Hudson’s formula gives the dead weight of a truss bridge as a function of:",
          options: ["Bottom chord area", "Top chord area", "Effective span of the bridge", "Heaviest axle load of the engine"],
          correctAnswer: "Bottom chord area"
        },
        {
          question: "The number of seismic zones in which the country has been divided is:",
          options: ["3", "5", "6", "7"],
          correctAnswer: "5"
        },
        {
          question: "The maximum pitch of rivets, used in steel stacks, is limited to (where t is the thickness of the thinner plate being connected):",
          options: ["6t", "10t", "12t", "16t"],
          correctAnswer: "10t"
        },
        {
          question: "If the floor is supported at or near the bottom but the top chords of a bridge are not braced, then the bridge is called:",
          options: ["Deck type", "Through type", "Half through type", "Double deck type"],
          correctAnswer: "Half through type"
        },
        {
          question: "By providing sufficient edge distance, which of the following failures of the riveted joint can be avoided?",
          options: ["Tension failure of the plate", "Shear failure of the rivet", "Shear failure of the plate", "Crushing failure of the rivet"],
          correctAnswer: "Shear failure of the plate"
        },
        {
          question: "The maximum permissible span of asbestos cement sheets is:",
          options: ["650 mm", "810 mm", "1250 mm", "1680 mm"],
          correctAnswer: "1680 mm"
        },
        {
          question: "The use of tie plates in laced columns is:",
          options: ["Prohibited", "Not prohibited", "Permitted at the start and end of the lacing system only", "Permitted between two parts of the lacing"],
          correctAnswer: "Permitted at the start and end of the lacing system only"
        },
        {
          question: "The effective length of a fillet weld should not be less than:",
          options: ["Two times the weld size", "Four times the weld size", "Six times the weld size", "Weld size"],
          correctAnswer: "Four times the weld size"
        },
        {
          question: "A free-standing brick wall 20 cm thick is subjected to a wind pressure of 75 kg/m2. The maximum height of the wall from stability consideration is:",
          options: ["0.64 m", "0.96 m", "1.28 m", "1.5 m"],
          correctAnswer: "0.64 m"
        },
        {
          question: "For masonry work with solid bricks, the consistency of mortar should be:",
          options: ["5 to 8 cm", "9 to 13 cm", "14 to 18 cm", "19 to 23 cm"],
          correctAnswer: "9 to 13 cm"
        },
        {
          question: "Minimum thickness of the stiffening wall for 1 to 3 storeys shall not be less than:",
          options: ["10 cm", "15 cm", "20 cm", "30 cm"],
          correctAnswer: "15 cm"
        },
        {
          question: "The thickness of each leaf of a cavity wall shall not be less than:",
          options: ["5 cm", "7.5 cm", "10 cm", "15 cm"],
          correctAnswer: "7.5 cm"
        },
        {
          question: "Water retentivity for brick masonry should not be less than:",
          options: ["50%", "60%", "70%", "80%"],
          correctAnswer: "70%"
        },
        {
          question: "For earthquake-resistant masonry buildings, the vertical distance between openings one above the other in a load-bearing wall shall not be less than:",
          options: ["50 cm", "60 cm", "75 cm", "100 cm"],
          correctAnswer: "60 cm"
        },
        {
          question: "For earthquake-resistant masonry buildings, where the seismic coefficient is less than 0.08, the horizontal distance between two openings shall not be less than:",
          options: ["Vt × height of shorter opening", "Vt × height of longer opening", "Vi × height of shorter opening", "Vi × height of longer opening"],
          correctAnswer: "Vt × height of shorter opening"
        },
        {
          question: "In the case of a panel wall subjected to horizontal loads at right angles to the plane of the wall, with the mortar not leaner than M1 type, tensile stress in bending in the vertical direction may be allowed to the extent of:",
          options: ["0.4 kg/cm2", "0.7 kg/cm2", "1.0 kg/cm2", "1.2 kg/cm2"],
          correctAnswer: "1.0 kg/cm2"
        },
        {
          question: "Full restraint is provided by (i) Foundation footing of a wall (ii) Timber floor spanning on the wall and anchored to the wall (iii) RCC slab with a minimum bearing of 10 cm on the wall:",
          options: ["(i) and (iii) are correct", "(i) and (ii) are correct", "(ii) and (iii) are correct", "(i), (ii), and (iii) are correct"],
          correctAnswer: "(i), (ii), and (iii) are correct"
        },
        {
          question: "Consider the following statements: A high lime content in a composite cement-lime mortar results in (i) Slow hardening (ii) Quick setting (iii) Weaker mortar:",
          options: ["(ii) and (iii) are correct", "(i) and (ii) are correct", "(i) and (iii) are correct", "(i), (ii), and (iii) are correct"],
          correctAnswer: "(i) and (iii) are correct"
        },
        {
          question: "For strengthening a 50 m long and 5 m high straight compound wall built in brickwork, which one of the following would be most suitable?",
          options: ["Providing buttresses at certain intervals", "Providing a deeper foundation", "Using a richer mortar", "Using stronger bricks"],
          correctAnswer: "Providing buttresses at certain intervals"
        },
        {
          question: "Assertion A: For eccentricity ratio exceeding 16/6, effective thickness of masonry will get reduced.\nReason R: For eccentricity ratio exceeding 16/6, there will be tension on one side of the member.\nSelect your answer according to the codes given below:",
          options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true and R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"],
          correctAnswer: "Both A and R are true and R is the correct explanation of A"
        },
        {
          question: "Consider the following statements regarding bands to be provided for strengthening masonry work in masonry buildings constructed in zone III, IV, and V.\n(i) Lintel band is provided at lintel level on partition walls,\n(ii) Gable band is provided at the top of the gable masonry below the purlins,\n(iii) The bands shall be to the full width of the wall and not less than 7.5 cm in depth,\n(iv) The bands shall be made of reinforced concrete only.\nOf these statements, the correct statements are",
          options: ["(i) and (ii)", "(i) and (iii)", "(ii) and (iv)", "(ii) and (iii)"],
          correctAnswer: "(ii) and (iii)"
        },
        {
          question: "Consider the following statements regarding the provision of chases in masonry:\n(i) No chase should be permitted in a half brick load-bearing wall,\n(ii) Vertical chases should not be closer than 2 m in any stretch of a wall,\n(iii) Chases should be provided near the bearings of beams and lintels.",
          options: ["(i) and (ii) are correct", "(i) and (iii) are correct", "(ii) and (iii) are correct", "(i), (ii), and (iii) are correct"],
          correctAnswer: "(i) and (ii) are correct"
        },
        {
          question: "The basic stress in masonry units having a height-to-width ratio of 1.5 may be increased by a factor of",
          options: ["1.2", "1.4", "1.6", "2.0"],
          correctAnswer: "1.6"
        },
        {
          question: "Minimum compressive strength in N/mm2 for H1 type mortar used for masonry is",
          options: ["3", "5", "7.5", "10"],
          correctAnswer: "10"
        },
        {
          question: "For designing masonry components of a structure, seismic forces provision in the design calculation is not necessary for buildings constructed in",
          options: ["Zone I only", "Zone I and II", "Zone I, II, and III", "Zone I, II, III, and IV"],
          correctAnswer: "Zone I and II"
        },
        {
          question: "A 200 mm thick wall made of modular bricks is 5 m long between cross walls and 3.8 m clear height between RCC slabs at the top and bottom. The slenderness ratio of the wall is",
          options: ["15", "19", "20", "25"],
          correctAnswer: "15"
        },
        {
          question: "In a cavity wall, both leaves of which are load-bearing, the effective thickness is taken as",
          options: ["Sum of the thickness of both leaves", "Two-thirds of the sum of the thickness of both the leaves", "Actual thickness of the stronger leaf", "Larger of (B) and (C)"],
          correctAnswer: "Larger of (B) and (C)"
        },
        {
          question: "The mode of failure of a very short masonry member having h/t ratio of less than 4 is by",
          options: ["Shear", "Vertical tensile splitting", "Buckling", "Any of the above"],
          correctAnswer: "Shear"
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
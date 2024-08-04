const quizData = [
    {
      question: "Columns of given length, cross-section, and material have different values of buckling loads for different end conditions. The strongest column is one whose",
      options: ["one end is fixed and other end is hinged", "both ends are hinged or pin jointed", "one end is fixed and the other end entirely free", "both the ends are fixed"],
      correctAnswer: "both the ends are fixed"
    },
    {
      question: "The slenderness ratio of a vertical column of square cross-section of 10 cm side and 500 cm long is",
      options: ["117.2", "17.3", "173.2", "137.2"],
      correctAnswer: "173.2"
    },
    {
      question: "The equivalent length of a column fixed at one end and free at the other end is",
      options: ["0.5L", "0.7L", "L", "2L"],
      correctAnswer: "2L"
    },
    {
      question: "The radius of gyration of a square section is not proportional to",
      options: ["square root of the moment of inertia", "square root of the inverse of the area", "square root of the moment of inertia divided by the area of the section", "side of square"],
      correctAnswer: "side of squar"
    },
    {
      question: "The length of a column, having a uniform circular cross-section of 7.5 cm diameter and whose ends are hinged, is 5 m. If the value of E for the material is 2100 kN/cm2, the permissible maximum crippling load will be",
      options: ["1.288 kN", "12.88 kN", "128.8 kN", "288.0 kN"],
      correctAnswer: "288.0 kN"
    },
    {
      question: "A sudden increase or decrease in the shear force diagram between any two points indicates that there is",
      options: ["No loading between the two points", "Point loads between the two points", "U.D.L. between the two points", "None of these"],
      correctAnswer: "None of these"
    },
    {
      question: "A beam is a structural member which is subjected to",
      options: ["Axial tension or compression", "Transverse loads and couples", "Twisting moment", "No load, but its axis should be horizontal and x-section rectangular or circular"],
      correctAnswer: "Transverse loads and couples"
    },
    {
      question: "Which of the following are statically determinate beams?",
      options: ["Only simply supported beams", "Cantilever, overhanging and simply supported", "Fixed beams", "Continuous beams"],
      correctAnswer: "Cantilever, overhanging and simply supported"
    },
    {
      question: "A cantilever is a beam whose",
      options: ["Both ends are supported either on rollers or hinges", "One end is fixed and the other end is free", "Both ends are fixed", "Whose both or one of the ends has an overhang"],
      correctAnswer: "One end is fixed and the other end is free"
    },
    {
      question: "In a cantilever carrying a uniformly varying load starting from zero at the free end, the shear force diagram is",
      options: ["A horizontal line parallel to x-axis", "A line inclined to x-axis", "Follows a parabolic law", "Follows a cubic law"],
      correctAnswer: "Follows a parabolic law"
    },
    {
      question: "In a cantilever carrying a uniformly varying load starting from zero at the free end, the bending moment diagram is",
      options: ["A horizontal line parallel to x-axis", "A line inclined to x-axis", "Follows a parabolic law", "Follows a cubic law"],
      correctAnswer: "Follows a cubic law"
    },
    {
      question: "In a simply supported beam, bending moment at the end",
      options: ["Is always zero if it does not carry a couple at the end", "Is zero if the beam has a uniformly distributed load only", "Is zero if the beam has concentrated loads only", "May or may not be zero"],
      correctAnswer: "Is always zero if it does not carry a couple at the end"
    },
    {
      question: "For any part of the beam, between two concentrated loads, the shear force diagram is",
      options: ["A horizontal straight line", "A vertical straight line", "A line inclined to x-axis", "A parabola"],
      correctAnswer: "A horizontal straight line"
    },
    {
      question: "For any part of a beam between two concentrated loads, the bending moment diagram is",
      options: ["A horizontal straight line", "A vertical straight line", "A line inclined to x-axis", "A parabola"],
      correctAnswer: "A line inclined to x-axis"
    },
    {
      question: "For any part of a beam subjected to uniformly distributed load, the shear force diagram is",
      options: ["A horizontal straight line", "A vertical straight line", "A line inclined to x-axis", "A parabola"],
      correctAnswer: "A line inclined to x-axis"
    },
    {
      question: "For any part of a beam subjected to uniformly distributed load, the bending moment diagram is",
      options: ["A horizontal straight line", "A vertical straight line", "A line inclined to x-axis", "A parabola"],
      correctAnswer: "A parabola"
    },
    {
      question: "In a simple supported beam having a length = l and subjected to a concentrated load (W) at the mid-point.",
      options: ["Maximum Bending moment = Wl/4 at the mid-point", "Maximum Bending moment = Wl/4 at the end", "Maximum Bending moment = Wl/8 at the mid-point", "Maximum Bending moment = Wl/8 at the end"],
      correctAnswer: "Maximum Bending moment = Wl/4 at the mid-point"
    },
    {
      question: "In a cantilever subjected to a concentrated load (W) at the free end and having a length =l, the Maximum bending moment is",
      options: ["Wl at the free end", "Wl at the fixed end", "Wl/2 at the fixed end", "Wl at the free end"],
      correctAnswer: "Wl at the fixed end"
    },
    {
      question: "At a point in a simply supported or overhanging beam where Shear force changes sign and = 0, Bending moment is",
      options: ["Maximum", "Zero", "Either increasing or decreasing", "Infinity"],
      correctAnswer: "Maximum"
    },
    {
      question: "In a cantilever subjected to a combination of concentrated load, uniformly distributed load and uniformly varying load, Maximum bending moment is",
      options: ["Where shear force=0", "At the free end", "At the fixed end", "At the mid-point"],
      correctAnswer: "At the fixed end"
    },
    {
      question: "Point of contra-flexure is a",
      options: ["Point where Shear force is maximum", "Point where Bending moment is maximum", "Point where Bending moment is zero", "Point where Bending moment=0 but also changes sign from positive to negative"],
      correctAnswer: "Point where Bending moment=0 but also changes sign from positive to negative"
    },
    {
      question: "Point of contra-flexure is also called",
      options: ["Point of maximum Shear force", "Point of maximum Bending moment", "Point of inflexion", "Fixed end"],
      correctAnswer: "Point of inflexion"
    },
    {
      question: "The slope of the shear force line at any section of the beam is also called",
      options: ["Bending moment at that section", "Rate of loading at that section", "Maximum Shear force", "Maximum bending moment"],
      correctAnswer: "Rate of loading at that section"
    },
    {
      question: "The direction of shear stress in a loaded beam is",
      options: ["Horizontal", "Horizontal as well as vertical", "Vertical", "None"],
      correctAnswer: "Horizontal as well as vertical"
    },
    {
      question: "Shear stress in the beam acting on the cross-section is",
      options: ["Normal to the cross section", "Tangential to the cross section", "Neither normal nor tangential", "None"],
      correctAnswer: "Tangential to the cross section"
    },
    {
        question: "What is elasticity?",
        options: ["ability to re-gain It's original size and shape", "ability to produce permanent deformation", "both", "none of above"],
        correctAnswer: "ability to re-gain It's original size and shape"
      },
      {
        question: "What is modular ratio?",
        options: ["ratio of deflection in each material", "ratio of modulus of elasticity of both material", "ratio of load acting in each section", "all of above"],
        correctAnswer: "ratio of load acting in each section"
      },
      {
        question: "3.5 m long bar is under tensile load and due to that increase in length of bar is 1.75 mm then strain =",
        options: ["0.0035", "0.0005", "0.002", "0.0175"],
        correctAnswer: "0.002"
      },
      {
        question: "The increase in the length of a bar of length 1 m, area 300 mm2, modulus of elasticity 2×10^5 N/mm2 due to a tensile load of 120 KN is .",
        options: ["1 mm", "2mm", "3mm", "4mm"],
        correctAnswer: "2mm"
      },
      {
        question: "Shear stress causes .",
        options: ["Deformation", "Elongation", "contraction", "None of above"],
        correctAnswer: "None of above"
      },
      {
        question: "which of the following has the same unit?",
        options: ["modulus of elasticity, pressure, stress", "elasticity, strain, stress", "pressure, strain, stress", "modulus of elasticity, strain, modulus of rigidity"],
        correctAnswer: "modulus of elasticity, pressure, stress"
      },
      {
        question: "The unit of stress is .",
        options: ["Pascal", "Newton", "N/m2", "a and c both"],
        correctAnswer: "a and c both"
      },
      {
        question: "In composite section deformation is the same in both materials.",
        options: ["True", "False", "none", "all"],
        correctAnswer: "True"
      },
      {
        question: "which of the following is a type of stress?",
        options: ["tensile stress", "compressive stress", "shear stress", "all of the above"],
        correctAnswer: "all of the above"
      },
      {
        question: "Strain is defined as the ratio of",
        options: ["change in volume to the original volume", "change in length to the original length", "change in cross-sectional area to the original cross-sectional area", "any one of the above"],
        correctAnswer: "change in length to the original length"
      },
      {
        question: "Hooke's law holds good up to",
        options: ["yield point", "limit of proportionality", "breaking point", "elastic limit"],
        correctAnswer: "limit of proportionality"
      },
      {
        question: "Young's modulus is defined as the ratio of",
        options: ["volumetric stress and volumetric strain", "lateral stress and lateral strain", "longitudinal stress and longitudinal strain", "shear stress to shear strain"],
        correctAnswer: "volumetric stress and volumetric strain"
      },
      {
        question: "The unit of Young's modulus is",
        options: ["mm/mm", "kg/cm", "kg", "kg/cm2"],
        correctAnswer: "kg/cm2"
      },
      {
        question: "Deformation per unit length in the direction of force is known as",
        options: ["Strain", "lateral strain", "linear strain", "linear stress"],
        correctAnswer: "linear stress"
      },
      {
        question: "If equal and opposite forces applied to a body tend to elongate it, the stress so produced is called",
        options: ["internal resistance", "tensile stress", "transverse stress", "compressive stress"],
        correctAnswer: "transverse stress"
      },
      {
        question: "The materials having the same elastic properties in all directions are called",
        options: ["ideal materials", "uniform materials", "isotropic materials", "elastic materials"],
        correctAnswer: "elastic materials"
      },
      {
        question: "Modulus of rigidity is defined as the ratio of",
        options: ["longitudinal stress and longitudinal strain", "volumetric stress and volumetric strain", "lateral stress and lateral strain", "shear stress and shear strain"],
        correctAnswer: "shear stress and shear strain"
      },
      {
        question: "If the radius of wire stretched by a load is doubled, then its Young's modulus will be",
        options: ["Doubled", "Halved", "become four times", "remain unaffected"],
        correctAnswer: "remain unaffected"
      },
      {
        question: "The intensity of stress which causes unit strain is called",
        options: ["unit stress", "bulk modulus", "modulus of rigidity", "modulus of elasticity"],
        correctAnswer: "modulus of rigidity"
      },
      {
        question: "Which of the following has no unit",
        options: ["kinematic viscosity", "surface tension", "bulk modulus", "strain"],
        correctAnswer: "bulk modulus"
      },
      {
        question: "Euler's formula states that the buckling load P for a column of length l, both ends hinged and whose least moment of inertia and modulus of elasticity of the material of the column are I and E respectively, is given by the relation",
        options: ["P=π2EIL2", "P=πL2EI", "P=πEIL2", "P=π2EIL3"],
        correctAnswer: "P=πEIL2"
      },
      {
        question: "Rankine-Golden formula accounts for direct as well as buckling stress and is applicable to",
        options: ["very long columns", "long columns", "short columns", "intermediate columns"],
        correctAnswer: "intermediate columns"
      },
      {
        question: "Maximum deflection of a cantilever due to pure bending moment M at its free end, is",
        options: ["ML2/3EI", "ML2/4EI", "ML2/6EI", "ML2/2EI"],
        correctAnswer: "ML2/2EI"
      },
      {
        question: "The ratio of the effective length of a column and the minimum radius of gyration of its cross-sectional area is known",
        options: "buckling factor",
        correctAnswer: "slenderness ratio"
      },
      {
        question: "A long vertical member, subjected to an axial compressive load, is called",
        options: "column",
        correctAnswer: "a column"
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
const quizData = [
    {
      question: "The process of removing water from a saturated soil by applying an external load is known as:",
      options: ["Permeability", "Consolidation", "Compaction", "Shearing"],
      correctAnswer: "Consolidation"
    },
    {
      question: "The pressure exerted by a confined soil mass due to the weight of the overlying soil is called:",
      options: ["Pore pressure", "Buoyant pressure", "Overburden pressure", "Effective stress"],
      correctAnswer: "Overburden pressure"
    },
    {
      question: "The line that represents the relationship between effective stress and void ratio in a soil is known as:",
      options: ["Flow net", "Mohr's circle", "Compaction curve", "Critical state line"],
      correctAnswer: "Critical state line"
    },
    {
      question: "The process of reducing the volume of a soil mass by the expulsion of water under load is called:",
      options: ["Swelling", "Permeability", "Consolidation", "Friction angle"],
      correctAnswer: "Consolidation"
    },
    {
      question: "The minimum volume change that a saturated soil can undergo without any change in effective stress is known as:",
      options: ["Compressibility", "Elastic settlement", "Swell pressure", "Hydraulic conductivity"],
      correctAnswer: "Elastic settlement"
    },
    {
      question: "The ratio of change in volume to the initial volume of a soil mass, due to the application of stress, is called:",
      options: ["Coefficient of permeability", "Coefficient of consolidation", "Coefficient of compressibility", "Coefficient of curvature"],
      correctAnswer: "Coefficient of compressibility"
    },
    {
      question: "The property of a soil to change in volume with changes in water content is known as:",
      options: ["Compressibility", "Consolidation", "Swelling", "Permeability"],
      correctAnswer: "Swelling"
    },
    {
      question: "The shape of a grain-size distribution curve can be expressed by:",
      options: ["Coefficient of gradation", "Coefficient of uniformity", "Coefficient of curvature", "Coefficient of permeability"],
      correctAnswer: "Coefficient of curvature"
    },
    {
      question: "The angle of repose is defined as the angle between the:",
      options: ["Plane of rupture and horizontal plane", "Surface of water table and horizontal plane", "Inclined plane and horizontal plane", "Mohr's circle and horizontal plane"],
      correctAnswer: "Inclined plane and horizontal plane"
    },
    {
      question: "The process of rearrangement of soil particles due to vibration or mechanical means is called:",
      options: ["Compaction", "Permeability", "Consolidation", "Shearing"],
      correctAnswer: "Compaction"
    },
    {
      question: "The plasticity index is the difference between:",
      options: ["Liquid limit and plastic limit", "Liquid limit and shrinkage limit", "Plastic limit and shrinkage limit", "Cohesion and friction angle"],
      correctAnswer: "Liquid limit and plastic limit"
    },
    {
      question: "The strength of a cohesive soil is mainly due to:",
      options: ["Friction between particles", "Buoyancy effect", "Presence of water", "Cohesion between particles"],
      correctAnswer: "Cohesion between particles"
    },
    {
      question: "The property of a soil to return to its original volume after the removal of load is known as:",
      options: ["Compressibility", "Swelling", "Elasticity", "Permeability"],
      correctAnswer: "Elasticity"
    },
    {
      question: "The process of compacting soil to increase its density is important in:",
      options: ["Reducing soil permeability", "Increasing shear strength", "Reducing settlement", "Improving frost resistance"],
      correctAnswer: "Reducing settlement"
    },
    {
      question: "The percentage of water content at which a soil passes from liquid to plastic state is called:",
      options: ["Plastic limit", "Liquid limit", "Shrinkage limit", "Plasticity index"],
      correctAnswer: "Liquid limit"
    },
    {
      question: "The difference in water content between the liquid limit and the plastic limit is known as:",
      options: ["Shrinkage limit", "Compressibility", "Plasticity index", "Cohesion"],
      correctAnswer: "Plasticity index"
    },
    {
      question: "Which of the following is NOT a primary variable in the Terzaghi's consolidation theory?",
      options: ["Coefficient of consolidation", "Permeability of soil", "Compressibility of soil", "Initial void ratio"],
      correctAnswer: "Permeability of soil"
    },
    {
      question: "Which type of soil has the highest permeability?",
      options: ["Clay", "Silt", "Sand", "Gravel"],
      correctAnswer: "Gravel"
    },
    {
      question: "The phenomenon of a decrease in volume of a soil mass due to the expulsion of water when subjected to pressure is called:",
      options: ["Swelling", "Consolidation", "Compressibility", "Compressibility index"],
      correctAnswer: "Consolidation"
    },
    {
      question: "The state where the voids in a soil are filled with both air and water is known as:",
      options: ["Dry state", "Saturated state", "Submerged state", "Unsaturated state"],
      correctAnswer: "Unsaturated state"
    },
    {
      question: "The process of adding water to a dry soil to increase its water content and workability is known as:",
      options: ["Compaction", "Permeability", "Saturation", "Swelling"],
      correctAnswer: "Saturation"
    },
    {
      question: "The principle of effective stress is applicable to:",
      options: ["Cohesionless soils only", "Cohesive soils only", "Both cohesive and cohesionless soils", "Saturated soils only"],
      correctAnswer: "Both cohesive and cohesionless soils"
    },
    {
      question: "Which of the following factors does NOT influence the shear strength of a soil mass?",
      options: ["Cohesion", "Friction angle", "Void ratio", "Effective stress"],
      correctAnswer: "Void ratio"
    },
    {
      question: "The coefficient of curvature of a soil particle size distribution curve is a measure of:",
      options: ["Uniformity of particles", "Gradation of particles", "Particle shape", "Void ratio"],
      correctAnswer: "Gradation of particles"
    },
    {
      question: "The water content at which a soil changes from a plastic to a liquid state is called the:",
      options: ["Plastic limit", "Shrinkage limit", "Liquid limit", "Plasticity index"],
      correctAnswer: "Liquid limit"
    },
    {
      question: "The shear strength of a soil is directly proportional to the:",
      options: ["Cohesion of the soil", "Unit weight of the soil", "Porosity of the soil", "Plasticity index of the soil"],
      correctAnswer: "Cohesion of the soil"
    },
    {
      question: "The initial water content of a soil sample is 20% and its final water content after consolidation is 14%. The degree of consolidation is:",
      options: ["6%", "14%", "20%", "30%"],
      correctAnswer: "30%"
    },
    {
      question: "The ability of a soil to carry a load without excessive deformation is called:",
      options: ["Compressibility", "Plasticity", "Stability", "Stiffness"],
      correctAnswer: "Stability"
    },
    {
      question: "The curve obtained by plotting the relationship between void ratio and effective stress for a soil mass is known as:",
      options: ["Swelling curve", "Stress-strain curve", "Compressibility curve", "E-log p curve"],
      correctAnswer: "Stress-strain curve"
    },
    {
      question: "The phenomenon of expansion in volume of a soil mass due to the absorption of water is called:",
      options: ["Permeability", "Compressibility", "Swelling", "Consolidation"],
      correctAnswer: "Swelling"
    },
    {
      question: "A soil sample has a liquid limit of 40% and a plastic limit of 20%. Its plasticity index is:",
      options: ["20%", "30%", "40%", "60%"],
      correctAnswer: "20%"
    },
    {
      question: "The angle between the plane of rupture and the horizontal plane under shear stress is called:",
      options: ["Cohesion", "Friction angle", "Compressibility", "Permeability"],
      correctAnswer: "Friction angle"
    },
    {
      question: "The process of removing water from a saturated soil by applying an external load is known as:",
      options: ["Permeability", "Consolidation", "Compaction", "Shearing"],
      correctAnswer: "Consolidation"
    },
    {
      question: "The pressure exerted by a confined soil mass due to the weight of the overlying soil is called:",
      options: ["Pore pressure", "Buoyant pressure", "Overburden pressure", "Effective stress"],
      correctAnswer: "Overburden pressure"
    },
    {
      question: "The line that represents the relationship between effective stress and void ratio in a soil is known as:",
      options: ["Flow net", "Mohr's circle", "Compaction curve", "Critical state line"],
      correctAnswer: "Critical state line"
    },
    {
      question: "The process of reducing the volume of a soil mass by the expulsion of water under load is called:",
      options: ["Swelling", "Permeability", "Consolidation", "Friction angle"],
      correctAnswer: "Consolidation"
    },
    {
      question: "The minimum volume change that a saturated soil can undergo without any change in effective stress is known as:",
      options: ["Compressibility", "Elastic settlement", "Swell pressure", "Hydraulic conductivity"],
      correctAnswer: "Elastic settlement"
    },
    {
      question: "The ratio of change in volume to the initial volume of a soil mass, due to the application of stress, is called:",
      options: ["Coefficient of permeability", "Coefficient of consolidation", "Coefficient of compressibility", "Coefficient of curvature"],
      correctAnswer: "Coefficient of compressibility"
    },
    {
      question: "The property of a soil to change in volume with changes in water content is known as:",
      options: ["Compressibility", "Consolidation", "Swelling", "Permeability"],
      correctAnswer: "Swelling"
    },
    {
      question: "The shape of a grain-size distribution curve can be expressed by:",
      options: ["Coefficient of gradation", "Coefficient of uniformity", "Coefficient of curvature", "Coefficient of permeability"],
      correctAnswer: "Coefficient of curvature"
    },
    {
      question: "The angle of repose is defined as the angle between the:",
      options: ["Plane of rupture and horizontal plane", "Surface of water table and horizontal plane", "Inclined plane and horizontal plane", "Mohr's circle and horizontal plane"],
      correctAnswer: "Inclined plane and horizontal plane"
    },
    {
      question: "The process of rearrangement of soil particles due to vibration or mechanical means is called:",
      options: ["Compaction", "Permeability", "Consolidation", "Shearing"],
      correctAnswer: "Compaction"
    },
    {
      question: "The plasticity index is the difference between:",
      options: ["Liquid limit and plastic limit", "Liquid limit and shrinkage limit", "Plastic limit and shrinkage limit", "Cohesion and friction angle"],
      correctAnswer: "Liquid limit and plastic limit"
    },
    {
      question: "The strength of a cohesive soil is mainly due to:",
      options: ["Friction between particles", "Buoyancy effect", "Presence of water", "Cohesion between particles"],
      correctAnswer: "Cohesion between particles"
    },
    {
      question: "The property of a soil to return to its original volume after the removal of load is known as:",
      options: ["Compressibility", "Swelling", "Elasticity", "Permeability"],
      correctAnswer: "Elasticity"
    },
    {
      question: "The process of compacting soil to increase its density is important in:",
      options: ["Reducing soil permeability", "Increasing shear strength", "Reducing settlement", "Improving frost resistance"],
      correctAnswer: "Reducing settlement"
    },
    {
      question: "The percentage of water content at which a soil passes from liquid to plastic state is called:",
      options: ["Plastic limit", "Shrinkage limit", "Liquid limit", "Plasticity index"],
      correctAnswer: "Liquid limit"
    },
    {
      question: "The difference in water content between the liquid limit and the plastic limit is known as:",
      options: ["Shrinkage limit", "Compressibility", "Plasticity index", "Cohesion"],
      correctAnswer: "Plasticity index"
    },
    {
      question: "Which of the following is NOT a primary variable in the Terzaghi's consolidation theory?",
      options: ["Coefficient of consolidation", "Permeability of soil", "Compressibility of soil", "Initial void ratio"],
      correctAnswer: "Permeability of soil"
    },
    {
      question: "Which type of soil has the highest permeability?",
      options: ["Clay", "Silt", "Sand", "Gravel"],
      correctAnswer: "Gravel"
    },
    {
      question: "The phenomenon of a decrease in volume of a soil mass due to the expulsion of water when subjected to pressure is called:",
      options: ["Swelling", "Consolidation", "Compressibility", "Compressibility index"],
      correctAnswer: "Consolidation"
    },
    {
      question: "The state where the voids in a soil are filled with both air and water is known as:",
      options: ["Dry state", "Saturated state", "Submerged state", "Unsaturated state"],
      correctAnswer: "Unsaturated state"
    },
    {
      question: "The process of adding water to a dry soil to increase its water content and workability is known as:",
      options: ["Compaction", "Permeability", "Saturation", "Swelling"],
      correctAnswer: "Saturation"
    },
    {
      question: "The principle of effective stress is applicable to:",
      options: ["Cohesionless soils only", "Cohesive soils only", "Both cohesive and cohesionless soils", "Saturated soils only"],
      correctAnswer: "Both cohesive and cohesionless soils"
    },
    {
      question: "Which of the following factors does NOT influence the shear strength of a soil mass?",
      options: ["Cohesion", "Friction angle", "Void ratio", "Effective stress"],
      correctAnswer: "Void ratio"
    },
    {
      question: "The coefficient of curvature of a soil particle size distribution curve is a measure of:",
      options: ["Uniformity of particles", "Gradation of particles", "Particle shape", "Void ratio"],
      correctAnswer: "Gradation of particles"
    },
    {
      question: "The water content at which a soil changes from a plastic to a liquid state is called the:",
      options: ["Plastic limit", "Shrinkage limit", "Liquid limit", "Plasticity index"],
      correctAnswer: "Liquid limit"
    },
    {
      question: "The shear strength of a soil is directly proportional to the:",
      options: ["Cohesion of the soil", "Unit weight of the soil", "Porosity of the soil", "Plasticity index of the soil"],
      correctAnswer: "Cohesion of the soil"
    },
    {
      question: "The initial water content of a soil sample is 20% and its final water content after consolidation is 14%. The degree of consolidation is:",
      options: ["6%", "14%", "20%", "30%"],
      correctAnswer: "30%"
    },
    {
      question: "The ability of a soil to carry a load without excessive deformation is called:",
      options: ["Compressibility", "Plasticity", "Stability", "Stiffness"],
      correctAnswer: "Stability"
    },
    {
      question: "The curve obtained by plotting the relationship between void ratio and effective stress for a soil mass is known as:",
      options: ["Swelling curve", "Stress-strain curve", "Compressibility curve", "E-log p curve"],
      correctAnswer: "Stress-strain curve"
    },
    {
      question: "The phenomenon of expansion in volume of a soil mass due to the absorption of water is called:",
      options: ["Permeability", "Compressibility", "Swelling", "Consolidation"],
      correctAnswer: "Swelling"
    },
    {
      question: "A soil sample has a liquid limit of 40% and a plastic limit of 20%. Its plasticity index is:",
      options: ["20%", "30%", "40%", "60%"],
      correctAnswer: "20%"
    },
    {
      question: "The angle between the plane of rupture and the horizontal plane under shear stress is called:",
      options: ["Cohesion", "Friction angle", "Compressibility", "Permeability"],
      correctAnswer: "Friction angle"
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
const quizData = [
    {
      question: "The process of collecting, storing, and transmitting water to meet the water demand of various users is known as:",
      options: ["Irrigation engineering", "Water resources engineering", "Hydraulic engineering", "Environmental engineering"],
      correctAnswer: "Water resources engineering"
    },
    {
      question: "The largest source of freshwater on Earth is:",
      options: ["Rivers and streams", "Glaciers and ice caps", "Lakes and ponds", "Groundwater"],
      correctAnswer: "Glaciers and ice caps"
    },
    {
      question: "The natural movement of water vapor from the Earth's surface to the atmosphere is known as:",
      options: ["Infiltration", "Transpiration", "Evaporation", "Percolation"],
      correctAnswer: "Evaporation"
    },
    {
      question: "The process of water vapor returning to the Earth's surface in the form of liquid is called:",
      options: ["Infiltration", "Transpiration", "Evaporation", "Precipitation"],
      correctAnswer: "Precipitation"
    },
    {
      question: "The process of water seeping into the soil from the ground surface is known as:",
      options: ["Infiltration", "Transpiration", "Evaporation", "Percolation"],
      correctAnswer: "Infiltration"
    },
    {
      question: "The continuous movement of water within the Earth's crust is called:",
      options: ["Surface runoff", "Subsurface flow", "Overland flow", "Base flow"],
      correctAnswer: "Subsurface flow"
    },
    {
      question: "The water stored beneath the Earth's surface in the saturated zone is called:",
      options: ["Groundwater", "Surface water", "Base flow", "Runoff"],
      correctAnswer: "Groundwater"
    },
    {
      question: "The total amount of water present on Earth is called:",
      options: ["Groundwater", "Surface water", "Global water", "Water budget"],
      correctAnswer: "Global water"
    },
    {
      question: "The study of the relationship between water and its environment, including the physical, chemical, and biological aspects, is known as:",
      options: ["Water chemistry", "Water biology", "Hydrology", "Limnology"],
      correctAnswer: "Limnology"
    },
    {
      question: "The natural process of water purification as it passes through the soil and rock layers is called:",
      options: ["Filtration", "Desalination", "Reverse osmosis", "Natural attenuation"],
      correctAnswer: "Natural attenuation"
    },
    {
      question: "The process of removing salt and other minerals from seawater to make it suitable for drinking and irrigation is known as:",
      options: ["Filtration", "Desalination", "Reverse osmosis", "Natural attenuation"],
      correctAnswer: "Desalination"
    },
    {
      question: "The method of extracting groundwater by means of a well is called:",
      options: ["Artificial recharge", "Groundwater pumping", "Surface water diversion", "Flood irrigation"],
      correctAnswer: "Groundwater pumping"
    },
    {
      question: "The process of artificially adding water to the ground to replenish an aquifer is known as:",
      options: ["Artificial recharge", "Groundwater pumping", "Surface water diversion", "Flood irrigation"],
      correctAnswer: "Artificial recharge"
    },
    {
      question: "The measure of the total dissolved solids in water is expressed as:",
      options: ["Water hardness", "Turbidity", "Salinity", "Alkalinity"],
      correctAnswer: "Salinity"
    },
    {
      question: "The process of reducing water consumption through efficient technologies and practices is known as:",
      options: ["Water conservation", "Water quality", "Water management", "Water treatment"],
      correctAnswer: "Water conservation"
    },
    {
      question: "The study of the physical properties and behavior of water is known as:",
      options: ["Hydraulics", "Hydrology", "Hydrogeology", "Hydrodynamics"],
      correctAnswer: "Hydrodynamics"
    },
    {
      question: "The primary source of energy for the water cycle is:",
      options: ["Sun", "Wind", "Earth's core", "Moon"],
      correctAnswer: "Sun"
    },
    {
      question: "The process of channeling water from rivers or lakes to be used for various purposes is called:",
      options: ["Surface water diversion", "Groundwater pumping", "Artificial recharge", "Flood irrigation"],
      correctAnswer: "Surface water diversion"
    },
    {
      question: "The average annual flow of a river or stream over a period of time is known as:",
      options: ["Base flow", "Peak flow", "Flood flow", "Streamflow"],
      correctAnswer: "Streamflow"
    },
    {
      question: "The measure of the cloudiness or haziness of a fluid caused by large numbers of individual particles is called:",
      options: ["Water hardness", "Turbidity", "Salinity", "Alkalinity"],
      correctAnswer: "Turbidity"
    },
    {
      question: "The water quality parameter that measures the capacity of water to neutralize acids is called:",
      options: ["Water hardness", "Turbidity", "Salinity", "Alkalinity"],
      correctAnswer: "Alkalinity"
    },
    {
      question: "The process of water flowing over the ground surface due to rainfall or snowmelt is known as:",
      options: ["Base flow", "Peak flow", "Flood flow", "Overland flow"],
      correctAnswer: "Overland flow"
    },
    {
      question: "The artificial application of water to land or soil for growing crops is called:",
      options: ["Irrigation", "Flood irrigation", "Sprinkler irrigation", "Drip irrigation"],
      correctAnswer: "Irrigation"
    },
    {
      question: "The process of estimating the amount of water required for various purposes is known as:",
      options: ["Water demand assessment", "Water supply analysis", "Water allocation", "Water use forecasting"],
      correctAnswer: "Water demand assessment"
    },
    {
      question: "The process of melting snow and ice on mountains during warm weather, leading to increased river flow, is called:",
      options: ["Glacial melt", "Snowmelt", "Runoff", "Permafrost thaw"],
      correctAnswer: "Snowmelt"
    },
    {
      question: "The percentage of water vapor present in the air compared to the maximum amount of water vapor the air can hold at a given temperature is known as:",
      options: ["Relative humidity", "Dew point", "Vapor pressure", "Saturation point"],
      correctAnswer: "Relative humidity"
    },
    {
      question: "The process of collecting and storing rainwater for future use is known as:",
      options: ["Rainwater harvesting", "Stormwater management", "Groundwater recharge", "Irrigation"],
      correctAnswer: "Rainwater harvesting"
    },
    {
      question: "The process of water infiltrating through the soil and moving downward is called:",
      options: ["Percolation", "Evaporation", "Transpiration", "Precipitation"],
      correctAnswer: "Percolation"
    },
    {
      question: "The study of the movement, distribution, and properties of water in the atmosphere is known as:",
      options: ["Meteorology", "Hydrology", "Climatology", "Hydrometeorology"],
      correctAnswer: "Hydrometeorology"
    },
    {
      question: "The process of water moving from the roots of plants to the atmosphere in the form of water vapor is called:",
      options: ["Percolation", "Evaporation", "Transpiration", "Precipitation"],
      correctAnswer: "Transpiration"
    },
    {
      question: "The ratio of the volume of voids in a soil to the total volume of the soil is known as:",
      options: ["Porosity", "Permeability", "Specific gravity", "Compressibility"],
      correctAnswer: "Porosity"
    },
    {
      question: "The study of the properties, distribution, and effects of groundwater is known as:",
      options: ["Hydrometeorology", "Hydrogeology", "Hydraulics", "Hydrology"],
      correctAnswer: "Hydrogeology"
    },
    {
      question: "The process of water being held as a solid (ice) in glaciers and polar ice caps is called:",
      options: ["Sublimation", "Evaporation", "Condensation", "Freezing"],
      correctAnswer: "Freezing"
    },
    {
      question: "The process of water vapor turning directly into ice without passing through the liquid phase is called:",
      options: ["Sublimation", "Evaporation", "Condensation", "Freezing"],
      correctAnswer: "Sublimation"
    },
    {
      question: "The study of the physical and chemical properties of water as well as its effects on the environment and living organisms is known as:",
      options: ["Hydraulics", "Hydrology", "Hydrogeology", "Water chemistry"],
      correctAnswer: "Water chemistry"
    },
    {
      question: "The process of water vapor changing into liquid water due to a decrease in temperature is called:",
      options: ["Sublimation", "Evaporation", "Condensation", "Freezing"],
      correctAnswer: "Condensation"
    },
    {
      question: "The process of reducing the flow of water in a river or stream by the construction of dams and reservoirs is called:",
      options: ["Flood control", "River training", "Water diversion", "Flow regulation"],
      correctAnswer: "Flow regulation"
    },
    {
      question: "The method of irrigation that involves applying water directly to the root zone of plants through pipes and tubes is called:",
      options: ["Flood irrigation", "Surface irrigation", "Sprinkler irrigation", "Drip irrigation"],
      correctAnswer: "Drip irrigation"
    },
    {
      question: "The process of transferring water from one place to another to meet water supply needs is known as:",
      options: ["Water diversion", "Water transfer", "Water allocation", "Water distribution"],
      correctAnswer: "Water transfer"
    },
    {
      question: "The process of water flowing back into the ground from a river or stream is called:",
      options: ["Base flow", "Groundwater recharge", "Streamflow", "Runoff"],
      correctAnswer: "Groundwater recharge"
    },
    {
      question: "The water quality parameter that measures the amount of calcium and magnesium ions in water is called:",
      options: ["Water hardness", "Turbidity", "Salinity", "Alkalinity"],
      correctAnswer: "Water hardness"
    },
    {
      question: "The process of water moving over the ground surface and eventually entering a river or stream is known as:",
      options: ["Base flow", "Groundwater recharge", "Streamflow", "Runoff"],
      correctAnswer: "Runoff"
    },
    {
      question: "The process of water vapor turning into liquid water due to contact with a colder surface is called:",
      options: ["Sublimation", "Evaporation", "Condensation", "Freezing"],
      correctAnswer: "Evaporation"
    },
    {
      question: "The measure of the temperature at which air becomes saturated with water vapor and condensation begins is known as:",
      options: ["Relative humidity", "Dew point", "Vapor pressure", "Saturation point"],
      correctAnswer: "Dew point"
    },
    {
      question: "The study of the characteristics and behavior of rivers and streams is known as:",
      options: ["River engineering", "Stream ecology", "River morphology", "River hydrology"],
      correctAnswer: "River morphology"
    },
    {
      question: "The process of water evaporating from the leaves of plants is called:",
      options: ["Percolation", "Evaporation", "Transpiration", "Precipitation"],
      correctAnswer: "Transpiration"
    },
    {
      question: "The process of water flowing from the land surface into the ground is known as:",
      options: ["Base flow", "Groundwater recharge", "Streamflow", "Runoff"],
      correctAnswer: "Groundwater recharge"
    },
    {
      question: "The process of removing suspended particles and impurities from water to make it safe for drinking is called:",
      options: ["Water purification", "Water treatment", "Water filtration", "Water chlorination"],
      correctAnswer: "Water purification"
    },
    {
      question: "The process of water flowing from the ground into a river or stream is called:",
      options: ["Base flow", "Groundwater recharge", "Streamflow", "Runoff"],
      correctAnswer: "Base flow"
    },
    {
      question: "The process of water evaporating from the surface of the Earth is called:",
      options: ["Percolation", "Evaporation", "Transpiration", "Precipitation"],
      correctAnswer: "Evaporation"
    },
    {
      question: "The study of the distribution, movement, and properties of water in the Earth's atmosphere is known as:",
      options: ["Meteorology", "Hydrology", "Climatology", "Hydrometeorology"],
      correctAnswer: "Hydrometeorology"
    },
    {
      question: "The process of water vapor changing into liquid water due to a decrease in temperature is called:",
      options: ["Sublimation", "Evaporation", "Condensation", "Freezing"],
      correctAnswer: "Condensation"
    },
    {
      question: "The process of reducing the flow of water in a river or stream by the construction of dams and reservoirs is called:",
      options: ["Flood control", "River training", "Water diversion", "Flow regulation"],
      correctAnswer: "Flow regulation"
    },
    {
      question: "The method of irrigation that involves applying water directly to the root zone of plants through pipes and tubes is called:",
      options: ["Flood irrigation", "Surface irrigation", "Sprinkler irrigation", "Drip irrigation"],
      correctAnswer: "Drip irrigation"
    },
    {
      question: "The process of transferring water from one place to another to meet water supply needs is known as:",
      options: ["Water diversion", "Water transfer", "Water allocation", "Water distribution"],
      correctAnswer: "Water transfer"
    },
    {
      question: "The process of water flowing back into the ground from a river or stream is called:",
      options: ["Base flow", "Groundwater recharge", "Streamflow", "Runoff"],
      correctAnswer: "Groundwater recharge"
    },
    {
      question: "The water quality parameter that measures the amount of calcium and magnesium ions in water is called:",
      options: ["Water hardness", "Turbidity", "Salinity", "Alkalinity"],
      correctAnswer: "Water hardness"
    },
    {
      question: "The process of water moving over the ground surface and eventually entering a river or stream is known as:",
      options: ["Base flow", "Groundwater recharge", "Streamflow", "Runoff"],
      correctAnswer: "Runoff"
    },
    {
      question: "The process of water vapor turning into liquid water due to contact with a colder surface is called:",
      options: ["Sublimation", "Evaporation", "Condensation", "Freezing"],
      correctAnswer: "Evaporation"
    },
    {
      question: "The measure of the temperature at which air becomes saturated with water vapor and condensation begins is known as:",
      options: ["Relative humidity", "Dew point", "Vapor pressure", "Saturation point"],
      correctAnswer: "Dew point"
    },
    {
      question: "The study of the characteristics and behavior of rivers and streams is known as:",
      options: ["River engineering", "Stream ecology", "River morphology", "River hydrology"],
      correctAnswer: "River morphology"
    },
    {
      question: "The process of water evaporating from the leaves of plants is called:",
      options: ["Percolation", "Evaporation", "Transpiration", "Precipitation"],
      correctAnswer: "Transpiration"
    },
    {
      question: "The process of water flowing from the land surface into the ground is known as:",
      options: ["Base flow", "Groundwater recharge", "Streamflow", "Runoff"],
      correctAnswer: "Groundwater recharge"
    },
    {
      question: "The process of removing suspended particles and impurities from water to make it safe for drinking is called:",
      options: ["Water purification", "Water treatment", "Water filtration", "Water chlorination"],
      correctAnswer: "Water purification"
    },
    {
      question: "The process of water flowing from the ground into a river or stream is called:",
      options: ["Base flow", "Groundwater recharge", "Streamflow", "Runoff"],
      correctAnswer: "Base flow"
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
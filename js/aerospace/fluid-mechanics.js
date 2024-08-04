const quizData = [
    {
        "question": "The continuum assumption in fluid mechanics refers to:",
        "options": [
          "The distinction between liquid and gas",
          "The separation of fluid particles from each other",
          "The concept of a continuous and uninterrupted fluid medium",
          "The boundary between fluid and solid"
        ],
        "correctAnswer": "The concept of a continuous and uninterrupted fluid medium",
        "explanation": "The continuum assumption in fluid mechanics assumes that a fluid is continuous and uninterrupted at a microscopic level, regardless of whether it is liquid or gas."
      },
      {
        "question": "The no-slip condition at a solid boundary implies that:",
        "options": [
          "Fluid particles slip along the solid surface",
          "Fluid particles adhere to the solid surface",
          "Fluid particles jump over the solid surface",
          "Fluid particles evaporate at the solid surface"
        ],
        "correctAnswer": "Fluid particles adhere to the solid surface",
        "explanation": "The no-slip condition at a solid boundary implies that fluid particles adhere to the solid surface, resulting in zero relative velocity between the fluid and the solid."
      },
      {
        "question": "The Lagrangian approach in fluid dynamics is based on:",
        "options": [
          "Tracking individual fluid particles in space and time",
          "Fixed control volumes in the fluid",
          "Control surfaces enclosing fluid regions",
          "Studying fluid flow using Euler's equations"
        ],
        "correctAnswer": "Tracking individual fluid particles in space and time",
        "explanation": "The Lagrangian approach in fluid dynamics involves tracking individual fluid particles in space and time, making it suitable for analyzing the motion of specific fluid elements."
      },
      {
        "question": "The Eulerian approach in fluid dynamics is based on:",
        "options": [
          "Tracking individual fluid particles in space and time",
          "Fixed control volumes in the fluid",
          "Control surfaces enclosing fluid regions",
          "Studying fluid flow using Euler's equations"
        ],
        "correctAnswer": "Fixed control volumes in the fluid",
        "explanation": "The Eulerian approach in fluid dynamics involves using fixed control volumes in the fluid to analyze the flow variables at specific points in space."
      },
      {
        "question": "Viscosity is a fluid property that measures its resistance to:",
        "options": [
          "Temperature change",
          "Flow",
          "Pressure change",
          "Density change"
        ],
        "correctAnswer": "Flow",
        "explanation": "Viscosity is a fluid property that measures its resistance to flow, determining how easily the fluid can deform and move."
      },
      {
        "question": "Newtonian fluids are characterized by:",
        "options": [
          "Constant viscosity regardless of the shear rate",
          "Variable viscosity depending on the shear rate",
          "The absence of viscosity",
          "High surface tension"
        ],
        "correctAnswer": "Constant viscosity regardless of the shear rate",
        "explanation": "Newtonian fluids are characterized by constant viscosity, meaning the viscosity remains the same regardless of the shear rate or applied stress."
      },
      {
        "question": "Non-Newtonian fluids are characterized by:",
        "options": [
          "Constant viscosity regardless of the shear rate",
          "Variable viscosity depending on the shear rate",
          "The absence of viscosity",
          "High surface tension"
        ],
        "correctAnswer": "Variable viscosity depending on the shear rate",
        "explanation": "Non-Newtonian fluids are characterized by variable viscosity, meaning their viscosity changes with the shear rate or applied stress."
      },
      {
        "question": "Surface tension is the property of a liquid that results in:",
        "options": [
          "Evaporation",
          "High density",
          "Tendency to spread over a surface",
          "A resistance to flow"
        ],
        "correctAnswer": "Tendency to spread over a surface",
        "explanation": "Surface tension is the property of a liquid that results in a tendency to minimize its surface area, causing it to form droplets and exhibit cohesive behavior."
      },
      {
        "question": "Pressure is defined as:",
        "options": [
          "The force per unit area",
          "The volume per unit mass",
          "The temperature per unit volume",
          "The mass per unit volume"
        ],
        "correctAnswer": "The force per unit area",
        "explanation": "Pressure is defined as the force per unit area and is commonly expressed in units like Pascals (Pa) or pounds per square inch (psi)."
      },
      {
        "question": "The force on a plane surface submerged in a fluid is equal to:",
        "options": [
          "The area of the surface multiplied by the density of the fluid",
          "The area of the surface multiplied by the acceleration due to gravity",
          "The pressure acting on the surface multiplied by the area",
          "The volume of the fluid displaced by the surface"
        ],
        "correctAnswer": "The pressure acting on the surface multiplied by the area",
        "explanation": "The force on a plane surface submerged in a fluid is equal to the pressure acting on the surface multiplied by the area of the surface."
      },
      {
        "question": "Steady flow in fluid dynamics refers to a flow in which:",
        "options": [
          "The flow rate remains constant over time",
          "The flow is always laminar",
          "The flow changes direction periodically",
          "The flow velocity varies with time"
        ],
        "correctAnswer": "The flow rate remains constant over time",
        "explanation": "Steady flow in fluid dynamics refers to a flow in which the flow rate remains constant over time at any given point in the flow field."
      },
      {
        "question": "Uniform flow in fluid dynamics refers to a flow in which:",
        "options": [
          "The flow rate remains constant over time",
          "The flow is always laminar",
          "The flow changes direction periodically",
          "The flow velocity varies with time"
        ],
        "correctAnswer": "The flow velocity varies with time",
        "explanation": "Uniform flow in fluid dynamics refers to a flow in which the flow velocity remains constant over time at any given point in the flow field."
      },
      {
        "question": "Compressible flow in fluid dynamics refers to a flow in which:",
        "options": [
          "The fluid is highly viscous",
          "The fluid velocity is low",
          "The fluid density changes significantly",
          "The fluid is incompressible"
        ],
        "correctAnswer": "The fluid density changes significantly",
        "explanation": "Compressible flow in fluid dynamics refers to a flow in which the fluid density changes significantly, leading to variations in pressure and density throughout the flow."
      },
      {
        "question": "Rotational flow in fluid dynamics refers to a flow in which:",
        "options": [
          "The fluid particles move along straight paths",
          "The flow is always turbulent",
          "The fluid particles follow circular paths",
          "The flow is always laminar"
        ],
        "correctAnswer": "The fluid particles follow circular paths",
        "explanation": "Rotational flow in fluid dynamics refers to a flow in which the fluid particles follow circular paths around an axis of rotation, creating vortices."
      },
      {
        "question": "Laminar flow in fluid dynamics is characterized by:",
        "options": [
          "Smooth and predictable flow with parallel streamlines",
          "Chaotic and unpredictable flow with mixing",
          "High turbulence and swirling motion",
          "High Reynolds number"
        ],
        "correctAnswer": "Smooth and predictable flow with parallel streamlines",
        "explanation": "Laminar flow in fluid dynamics is characterized by smooth and predictable flow with parallel streamlines, and it typically occurs at low flow velocities and low Reynolds numbers."
      },
      {
        "question": "Turbulent flow in fluid dynamics is characterized by:",
        "options": [
          "Smooth and predictable flow with parallel streamlines",
          "Chaotic and unpredictable flow with mixing",
          "High turbulence and swirling motion",
          "Low Reynolds number"
        ],
        "correctAnswer": "Chaotic and unpredictable flow with mixing",
        "explanation": "Turbulent flow in fluid dynamics is characterized by chaotic and unpredictable flow with mixing, and it typically occurs at high flow velocities and high Reynolds numbers."
      },
      {
        "question": "The Reynolds number is a dimensionless quantity used to predict the:",
        "options": [
          "Flow rate in a pipe",
          "Density of the fluid",
          "Viscosity of the fluid",
          "Type of flow (laminar or turbulent)"
        ],
        "correctAnswer": "Type of flow (laminar or turbulent)",
        "explanation": "The Reynolds number is a dimensionless quantity used to predict the type of flow (laminar or turbulent) in a fluid based on its velocity, density, viscosity, and characteristic length scale."
      },
      {
        "question": "The stream function in fluid dynamics is a mathematical function used to represent:",
        "options": [
          "Velocity vector field",
          "Pressure distribution",
          "Density variation",
          "Temperature distribution"
        ],
        "correctAnswer": "Velocity vector field",
        "explanation": "The stream function in fluid dynamics is a mathematical function used to represent the velocity vector field of a two-dimensional, irrotational flow."
      },
      {
        "question": "The potential function in fluid dynamics is a mathematical function used to represent:",
        "options": [
          "Velocity vector field",
          "Pressure distribution",
          "Density variation",
          "Temperature distribution"
        ],
        "correctAnswer": "Pressure distribution",
        "explanation": "The potential function in fluid dynamics is a mathematical function used to represent the pressure distribution of a two-dimensional, irrotational flow."
      },
      {
        "question": "Vorticity in fluid dynamics refers to the local spinning motion of fluid particles and is related to:",
        "options": [
          "Pressure changes in the flow",
          "Density variations in the flow",
          "Temperature gradients in the flow",
          "Velocity gradients in the flow"
        ],
        "correctAnswer": "Velocity gradients in the flow",
        "explanation": "Vorticity in fluid dynamics refers to the local spinning motion of fluid particles and is related to velocity gradients in the flow, representing the local rotation of fluid elements."
      },
      {
        "question": "Laminar flow in a pipe is characterized by:",
        "options": [
          "High flow velocity and turbulent motion",
          "Smooth and orderly flow with parallel streamlines",
          "Chaotic and unpredictable flow with mixing",
          "High friction and pressure drop"
        ],
        "correctAnswer": "Smooth and orderly flow with parallel streamlines",
        "explanation": "Laminar flow in a pipe is characterized by smooth and orderly flow with parallel streamlines, and it typically occurs at low flow velocities and low Reynolds numbers."
      },
      {
        "question": "Laminar flow between parallel plates is also known as:",
        "options": [
          "Viscous flow",
          "Turbulent flow",
          "Compressible flow",
          "Potential flow"
        ],
        "correctAnswer": "Viscous flow",
        "explanation": "Laminar flow between parallel plates is often referred to as viscous flow, as it is dominated by the viscous forces within the fluid."
      },
      {
        "question": "Major losses in fluid flow refer to:",
        "options": [
          "Losses due to pipe material",
          "Losses due to sudden expansions or contractions",
          "Losses due to friction in the pipe",
          "Losses due to flow separation"
        ],
        "correctAnswer": "Losses due to friction in the pipe",
        "explanation": "Major losses in fluid flow refer to losses due to friction in the pipe, which are caused by the shearing action of the fluid as it moves along the pipe walls."
      },
      {
        "question": "Minor losses in fluid flow refer to:",
        "options": [
          "Losses due to pipe material",
          "Losses due to sudden expansions or contractions",
          "Losses due to friction in the pipe",
          "Losses due to flow separation"
        ],
        "correctAnswer": "Losses due to sudden expansions or contractions",
        "explanation": "Minor losses in fluid flow refer to losses due to sudden expansions or contractions in the flow path, as well as other minor obstructions such as valves and fittings."
      },
      {
        "question": "The boundary layer in fluid flow is a thin region near a solid surface where:",
        "options": [
          "The flow is always turbulent",
          "The flow velocity is highest",
          "The flow changes direction periodically",
          "The flow velocity changes from zero at the surface to the free-stream velocity"
        ],
        "correctAnswer": "The flow velocity changes from zero at the surface to the free-stream velocity",
        "explanation": "The boundary layer in fluid flow is a thin region near a solid surface where the flow velocity changes from zero at the surface to the free-stream velocity of the fluid away from the surface."
      },
      {
        "question": "The boundary layer thickness is defined as the distance from the solid surface to where:",
        "options": [
          "The flow becomes turbulent",
          "The flow velocity is highest",
          "The flow changes direction",
          "The flow velocity reaches 99% of the free-stream velocity"
        ],
        "correctAnswer": "The flow velocity reaches 99% of the free-stream velocity",
        "explanation": "The boundary layer thickness is defined as the distance from the solid surface to where the flow velocity reaches 99% of the free-stream velocity."
      },
      {
        "question": "Turbines can be classified based on:",
        "options": [
          "Pressure ratio",
          "Operating temperature",
          "Blade material",
          "Fluid flow direction"
        ],
        "correctAnswer": "Fluid flow direction",
        "explanation": "Turbines can be classified based on the direction of fluid flow through the blades. The main classifications are axial flow, radial flow, and mixed flow turbines."
      },
      {
        "question": "The working principle of a turbine involves:",
        "options": [
          "Converting mechanical energy into electrical energy",
          "Converting electrical energy into mechanical energy",
          "Converting heat energy into mechanical energy",
          "Converting mechanical energy into heat energy"
        ],
        "correctAnswer": "Converting heat energy into mechanical energy",
        "explanation": "The working principle of a turbine involves converting the kinetic energy of a fluid into mechanical energy by utilizing the fluid's pressure and velocity."
      },
      {
        "question": "The function of the turbine blades is to:",
        "options": [
          "Accelerate the fluid flow",
          "Reduce the fluid pressure",
          "Generate electricity",
          "Extract energy from the fluid"
        ],
        "correctAnswer": "Extract energy from the fluid",
        "explanation": "The function of the turbine blades is to extract energy from the fluid by converting the pressure and velocity of the fluid into mechanical energy."
      },
      {
        "question": "Turbine governors are devices used to:",
        "options": [
          "Control the speed of the turbine",
          "Generate electricity",
          "Increase the fluid flow rate",
          "Reduce cavitation"
        ],
        "correctAnswer": "Control the speed of the turbine",
        "explanation": "Turbine governors are devices used to control the speed of the turbine by adjusting the flow of fluid or the position of the turbine blades."
      },
      {
        "question": "Cavitation in turbines refers to:",
        "options": [
          "The formation of ice on the turbine blades",
          "The generation of electricity by the turbine",
          "The sudden increase in turbine speed",
          "The formation of vapor bubbles due to low pressure"
        ],
        "correctAnswer": "The formation of vapor bubbles due to low pressure",
        "explanation": "Cavitation in turbines refers to the formation of vapor bubbles due to low pressure on the turbine blades, which can lead to damage and reduced turbine efficiency."
      },
      {
        "question": "Performance curves of turbines show the relationship between:",
        "options": [
          "Pressure and temperature",
          "Flow rate and efficiency",
          "Turbine speed and power output",
          "Turbine blades and fluid flow direction"
        ],
        "correctAnswer": "Flow rate and efficiency",
        "explanation": "Performance curves of turbines show the relationship between the flow rate of fluid through the turbine and its efficiency or power output."
      },
      {
        "question": "A draft tube in a turbine is used to:",
        "options": [
          "Accelerate the fluid flow",
          "Reduce the fluid pressure",
          "Increase cavitation",
          "Generate electricity"
        ],
        "correctAnswer": "Reduce the fluid pressure",
        "explanation": "A draft tube in a turbine is used to reduce the fluid pressure at the turbine exit, preventing cavitation and improving turbine efficiency."
      },
      {
        "question": "Axial flow turbines have fluid flow:",
        "options": [
          "Perpendicular to the turbine axis",
          "Parallel to the turbine axis",
          "In a radial direction",
          "In both radial and axial directions"
        ],
        "correctAnswer": "Parallel to the turbine axis",
        "explanation": "Axial flow turbines have fluid flow parallel to the turbine axis. The fluid enters and exits the turbine along the same direction as the axis of rotation."
      },
      {
        "question": "Radial flow turbines have fluid flow:",
        "options": [
          "Perpendicular to the turbine axis",
          "Parallel to the turbine axis",
          "In a radial direction",
          "In both radial and axial directions"
        ],
        "correctAnswer": "In a radial direction",
        "explanation": "Radial flow turbines have fluid flow in a radial direction. The fluid enters and exits the turbine perpendicular to the axis of rotation."
      },
      {
        "question": "Mixed flow turbines have fluid flow:",
        "options": [
          "Perpendicular to the turbine axis",
          "Parallel to the turbine axis",
          "In a radial direction",
          "In both radial and axial directions"
        ],
        "correctAnswer": "In both radial and axial directions",
        "explanation": "Mixed flow turbines have fluid flow in both radial and axial directions. The fluid enters the turbine in a radial direction and exits parallel to the turbine axis."
      },
      {
        "question": "Pumps can be classified based on:",
        "options": [
          "Operating temperature",
          "Operating pressure",
          "Fluid flow rate",
          "Mechanical energy input"
        ],
        "correctAnswer": "Mechanical energy input",
        "explanation": "Pumps can be classified based on the mechanical energy input they receive. The main classifications are positive displacement pumps and dynamic (centrifugal) pumps."
      },
      {
        "question": "The working principle of a pump involves:",
        "options": [
          "Converting mechanical energy into electrical energy",
          "Converting electrical energy into mechanical energy",
          "Converting heat energy into mechanical energy",
          "Converting mechanical energy into hydraulic energy"
        ],
        "correctAnswer": "Converting mechanical energy into hydraulic energy",
        "explanation": "The working principle of a pump involves converting the mechanical energy supplied to the pump into hydraulic energy, increasing the pressure and velocity of the fluid."
      },
      {
        "question": "The main components of a pump include:",
        "options": [
          "Impeller, diffuser, and nozzle",
          "Valve, piston, and cylinder",
          "Suction pipe, discharge pipe, and casing",
          "Compressor, condenser, and evaporator"
        ],
        "correctAnswer": "Suction pipe, discharge pipe, and casing",
        "explanation": "The main components of a pump include the suction pipe, discharge pipe, and casing, along with other parts like impeller, volute, and shaft."
      },
      {
        "question": "Priming in pumps refers to:",
        "options": [
          "The process of starting a pump",
          "The process of shutting down a pump",
          "The process of maintaining constant flow rate",
          "The process of removing air or gas from the pump and suction pipe"
        ],
        "correctAnswer": "The process of removing air or gas from the pump and suction pipe",
        "explanation": "Priming in pumps refers to the process of removing air or gas from the pump and suction pipe to ensure proper fluid flow and prevent cavitation during operation."
      },
      {
        "question": "Net Positive Suction Head (NPSH) is a measure of:",
        "options": [
          "Pump efficiency",
          "Pump discharge pressure",
          "Available pump power",
          "The pressure head available at the pump suction to avoid cavitation"
        ],
        "correctAnswer": "The pressure head available at the pump suction to avoid cavitation",
        "explanation": "Net Positive Suction Head (NPSH) is a measure of the pressure head available at the pump suction to avoid cavitation. It ensures that the pressure at the pump inlet remains above the vapor pressure of the pumped fluid."
      },
      {
        "question": "Performance curves of pumps show the relationship between:",
        "options": [
          "Pressure and temperature",
          "Flow rate and efficiency",
          "Pump speed and power input",
          "Pump components and their functions"
        ],
        "correctAnswer": "Flow rate and efficiency",
        "explanation": "Performance curves of pumps show the relationship between the flow rate of fluid through the pump and its efficiency or power input."
      },
      {
        "question": "Positive displacement pumps work by:",
        "options": [
          "Generating a centrifugal force",
          "Moving a fluid through a rotating impeller",
          "Using a reciprocating motion to trap and displace fluid",
          "Changing the shape of the pump casing"
        ],
        "correctAnswer": "Using a reciprocating motion to trap and displace fluid",
        "explanation": "Positive displacement pumps work by using a reciprocating motion to trap and displace fluid. Examples include piston pumps and diaphragm pumps."
      },
      {
        "question": "Dynamic (centrifugal) pumps work by:",
        "options": [
          "Generating a centrifugal force",
          "Moving a fluid through a rotating impeller",
          "Using a reciprocating motion to trap and displace fluid",
          "Changing the shape of the pump casing"
        ],
        "correctAnswer": "Moving a fluid through a rotating impeller",
        "explanation": "Dynamic (centrifugal) pumps work by moving a fluid through a rotating impeller, imparting energy to the fluid and increasing its velocity and pressure."
      },
      {
        "question": "The impeller in a pump is responsible for:",
        "options": [
          "Maintaining the flow rate",
          "Converting mechanical energy into electrical energy",
          "Increasing the fluid pressure",
          "Removing air from the pump"
        ],
        "correctAnswer": "Increasing the fluid pressure",
        "explanation": "The impeller in a pump is responsible for increasing the fluid pressure by imparting kinetic energy to the fluid through its rotating blades."
      },
      {
        "question": "The volute in a pump casing is designed to:",
        "options": [
          "Rotate the fluid flow",
          "Reduce the fluid pressure",
          "Direct the fluid flow from the impeller to the discharge",
          "Minimize cavitation"
        ],
        "correctAnswer": "Direct the fluid flow from the impeller to the discharge",
        "explanation": "The volute in a pump casing is designed to direct the fluid flow from the impeller to the discharge, converting kinetic energy into pressure energy."
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
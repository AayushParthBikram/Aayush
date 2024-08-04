const quizData = [
    {
        "question": "Cast making in foundry refers to:",
        "options": [
          "The process of shaping a mold",
          "Melting the metal",
          "Cleaning the castings",
          "Applying the finishing touches to the castings"
        ],
        "correctAnswer": "The process of shaping a mold",
        "explanation": "Cast making in foundry refers to the process of shaping a mold that will be used to cast the metal into the desired shape. It involves creating the mold cavity using patterns and cores before the metal is poured into the mold."
      },
      {
        "question": "Metal melting in foundry involves:",
        "options": [
          "Heating the mold to high temperatures",
          "Pouring the molten metal into the mold",
          "Removing the castings from the mold",
          "Applying a protective coating to the castings"
        ],
        "correctAnswer": "Pouring the molten metal into the mold",
        "explanation": "Metal melting in foundry involves the process of melting the metal to its liquid state and pouring the molten metal into the prepared mold cavity. It is a crucial step in the casting process."
      },
      {
        "question": "Die casting is a casting process that involves:",
        "options": [
          "Using a reusable mold made of metal",
          "Pouring the molten metal into a sand mold",
          "Melting the metal at high temperatures",
          "Applying precision machining to the castings"
        ],
        "correctAnswer": "Using a reusable mold made of metal",
        "explanation": "Die casting is a casting process that involves using a reusable mold, often made of metal, called a die. The molten metal is forced into the die under high pressure to create the desired shape of the casting."
      },
      {
        "question": "Precision casting, also known as investment casting, is a process that:",
        "options": [
          "Requires precise temperature control during metal melting",
          "Involves using a reusable mold made of metal",
          "Produces highly accurate and intricate castings",
          "Is used for cleaning the castings after solidification"
        ],
        "correctAnswer": "Produces highly accurate and intricate castings",
        "explanation": "Precision casting, also known as investment casting, is a process that produces highly accurate and intricate castings. It involves creating a wax pattern, investing it in a ceramic mold, melting the wax out, and pouring the molten metal into the mold to create the final casting."
      },
      {
        "question": "Cleaning the castings in foundry includes:",
        "options": [
          "Melting the metal to high temperatures",
          "Removing the castings from the mold",
          "Applying a protective coating to the castings",
          "Removing excess material, scale, and impurities from the castings"
        ],
        "correctAnswer": "Removing excess material, scale, and impurities from the castings",
        "explanation": "Cleaning the castings in foundry includes the process of removing excess material, scale, and impurities from the castings after solidification. This step is essential to ensure the final castings meet the required specifications and quality standards."
      },
      {
        "question": "Annealing is a heat treatment process that involves:",
        "options": [
          "Rapid cooling of the material",
          "Heating the material to a specific temperature and then slowly cooling it",
          "Applying mechanical pressure to the material",
          "Subjecting the material to a corrosive environment"
        ],
        "correctAnswer": "Heating the material to a specific temperature and then slowly cooling it",
        "explanation": "Annealing is a heat treatment process that involves heating the material to a specific temperature and then slowly cooling it in order to soften the material, improve its machinability, and reduce internal stresses."
      },
      {
        "question": "Quenching is a heat treatment process that involves:",
        "options": [
          "Slow cooling of the material",
          "Heating the material to a specific temperature and then rapidly cooling it",
          "Applying mechanical pressure to the material",
          "Subjecting the material to a corrosive environment"
        ],
        "correctAnswer": "Heating the material to a specific temperature and then rapidly cooling it",
        "explanation": "Quenching is a heat treatment process that involves heating the material to a specific temperature and then rapidly cooling it, usually in a liquid medium such as water or oil. This rapid cooling results in the material becoming harder and stronger."
      },
      {
        "question": "Tempering is a heat treatment process that involves:",
        "options": [
          "Rapid cooling of the material",
          "Heating the material to a specific temperature and then slowly cooling it",
          "Applying mechanical pressure to the material",
          "Subjecting the material to a corrosive environment"
        ],
        "correctAnswer": "Heating the material to a specific temperature and then slowly cooling it",
        "explanation": "Tempering is a heat treatment process that involves heating the material to a specific temperature and then slowly cooling it, similar to annealing. However, the temperature used in tempering is lower than in annealing. Tempering is done to reduce the hardness and brittleness of quenched materials and improve their toughness."
      },
      {
        "question": "Powder metallurgy is a manufacturing process that involves:",
        "options": [
          "Casting molten metal into a mold",
          "Pressing and sintering metal powders to form a solid component",
          "Using chemical vapor deposition to deposit a thin film on a substrate",
          "Applying a coating to a metal surface"
        ],
        "correctAnswer": "Pressing and sintering metal powders to form a solid component",
        "explanation": "Powder metallurgy is a manufacturing process that involves compacting metal powders into the desired shape using a die, followed by sintering the compacted powder in a furnace. Sintering fuses the metal particles together, creating a solid component with excellent dimensional accuracy and material properties."
      },
      {
        "question": "Nitriding is a surface hardening heat treatment process that involves:",
        "options": [
          "Rapid cooling of the material",
          "Heating the material to a specific temperature and then slowly cooling it",
          "Exposing the material to nitrogen-rich environments",
          "Subjecting the material to a corrosive environment"
        ],
        "correctAnswer": "Exposing the material to nitrogen-rich environments",
        "explanation": "Nitriding is a surface hardening heat treatment process that involves exposing the material to nitrogen-rich environments, such as ammonia gas or liquid baths. This process diffuses nitrogen into the material's surface, forming hard nitride compounds that improve wear resistance and fatigue strength."
      },
      {
        "question": "Hot working of metals involves:",
        "options": [
          "Processing metals at room temperature",
          "Heating metals to a high temperature before shaping",
          "Subjecting metals to rapid cooling after shaping",
          "Applying high pressure to deform metals"
        ],
        "correctAnswer": "Heating metals to a high temperature before shaping",
        "explanation": "Hot working of metals involves heating metals to a high temperature before shaping to make them more ductile and easier to deform. This process is typically done above the recrystallization temperature of the metal."
      },
      {
        "question": "Among the types of hot working, rolling is a process that involves:",
        "options": [
          "Heating a metal billet and pressing it between two rotating rollers",
          "Forcing a metal through a die to produce long sections",
          "Applying compressive force to shape a metal by striking it with a hammer",
          "Heating and shaping a metal using a rotating mandrel"
        ],
        "correctAnswer": "Heating a metal billet and pressing it between two rotating rollers",
        "explanation": "In hot rolling, a metal billet is heated and then passed between two rotating rollers to reduce its thickness and shape it into long sections such as sheets, plates, or rails."
      },
      {
        "question": "Cold rolling is a metalworking process that involves:",
        "options": [
          "Heating a metal billet and pressing it between two rotating rollers",
          "Forcing a metal through a die to produce long sections",
          "Applying compressive force to shape a metal by striking it with a hammer",
          "Passing a metal through rollers at room temperature to reduce its thickness"
        ],
        "correctAnswer": "Passing a metal through rollers at room temperature to reduce its thickness",
        "explanation": "Cold rolling is a metalworking process that involves passing a metal through rollers at room temperature to reduce its thickness and improve its surface finish. This process is commonly used for producing sheets and strips with precise dimensions and smooth surfaces."
      },
      {
        "question": "Drawing in metalworking refers to the process of:",
        "options": [
          "Heating a metal billet and pressing it between two rotating rollers",
          "Forcing a metal through a die to produce long sections",
          "Applying compressive force to shape a metal by striking it with a hammer",
          "Pulling a metal through a die to reduce its cross-sectional area and increase its length"
        ],
        "correctAnswer": "Pulling a metal through a die to reduce its cross-sectional area and increase its length",
        "explanation": "Drawing in metalworking refers to the process of pulling a metal through a die to reduce its cross-sectional area and increase its length. This process is often used to produce wires and other elongated metal products."
      },
      {
        "question": "Shot peening is a metalworking technique used for:",
        "options": [
          "Heating and shaping metals using a rotating mandrel",
          "Producing long sections of metal by forcing it through a die",
          "Applying compressive residual stresses to the surface of metals",
          "Cutting metals using a specialized cutting tool"
        ],
        "correctAnswer": "Applying compressive residual stresses to the surface of metals",
        "explanation": "Shot peening is a metalworking technique used to improve the fatigue life and strength of metals. It involves bombarding the metal surface with small spherical particles (shot) at high velocity to create compressive residual stresses on the surface, which enhances the material's resistance to crack propagation and fatigue failure."
      },
      {
        "question": "A lathe is a machine tool used for:",
        "options": [
          "Cutting and shaping metal using a rotating cutter",
          "Drilling holes in metal",
          "Turning and facing operations on a workpiece",
          "Grinding metal surfaces"
        ],
        "correctAnswer": "Turning and facing operations on a workpiece",
        "explanation": "A lathe is a machine tool used for turning and facing operations on a workpiece. It rotates the workpiece against a cutting tool to remove material and create cylindrical shapes."
      },
      {
        "question": "A milling machine is a machine tool used for:",
        "options": [
          "Cutting and shaping metal using a rotating cutter",
          "Drilling holes in metal",
          "Turning and facing operations on a workpiece",
          "Grinding metal surfaces"
        ],
        "correctAnswer": "Cutting and shaping metal using a rotating cutter",
        "explanation": "A milling machine is a machine tool used for cutting and shaping metal using a rotating cutter. It can perform various operations such as milling, drilling, and boring to produce complex shapes and features on the workpiece."
      },
      {
        "question": "A drilling machine is a machine tool used for:",
        "options": [
          "Cutting and shaping metal using a rotating cutter",
          "Drilling holes in metal",
          "Turning and facing operations on a workpiece",
          "Grinding metal surfaces"
        ],
        "correctAnswer": "Drilling holes in metal",
        "explanation": "A drilling machine is a machine tool used for drilling holes in metal or other materials. It employs a rotating drill bit to create cylindrical holes by removing material from the workpiece."
      },
      {
        "question": "Grinding is a machine tool operation used for:",
        "options": [
          "Cutting and shaping metal using a rotating cutter",
          "Drilling holes in metal",
          "Turning and facing operations on a workpiece",
          "Grinding metal surfaces"
        ],
        "correctAnswer": "Grinding metal surfaces",
        "explanation": "Grinding is a machine tool operation used for grinding metal surfaces to achieve high dimensional accuracy and smooth finishes. It employs an abrasive wheel to remove material from the workpiece's surface."
      },
      {
        "question": "Pressing, in the context of machine tools, refers to:",
        "options": [
          "Cutting and shaping metal using a rotating cutter",
          "Forming metal into desired shapes under pressure",
          "Turning and facing operations on a workpiece",
          "Grinding metal surfaces"
        ],
        "correctAnswer": "Forming metal into desired shapes under pressure",
        "explanation": "Pressing, in the context of machine tools, refers to forming metal into desired shapes under pressure. It is commonly used in industries like metalworking and plastics to create complex parts and components."
      },
      {
        "question": "Welding is a process that involves:",
        "options": [
          "Joining materials using mechanical fasteners",
          "Heating and melting materials to fuse them together",
          "Exposing materials to extreme temperatures",
          "Applying adhesive to bond materials"
        ],
        "correctAnswer": "Heating and melting materials to fuse them together",
        "explanation": "Welding is a process that involves heating and melting materials to fuse them together, creating a strong and continuous joint between the materials."
      },
      {
        "question": "The term 'arc welding' refers to a welding process that uses:",
        "options": [
          "A gas flame to melt the materials",
          "An electric arc to melt the materials",
          "A laser beam to melt the materials",
          "An ultrasonic vibration to melt the materials"
        ],
        "correctAnswer": "An electric arc to melt the materials",
        "explanation": "Arc welding is a welding process that uses an electric arc to melt the materials and create a weld. The arc is generated between the workpiece and a welding electrode, which serves as the filler material."
      },
      {
        "question": "Gas welding is a process that involves:",
        "options": [
          "Heating the materials with a gas flame and adding filler metal",
          "Using a laser beam to melt the materials",
          "Applying pressure to join the materials",
          "Melting the materials with an electric arc"
        ],
        "correctAnswer": "Heating the materials with a gas flame and adding filler metal",
        "explanation": "Gas welding is a process that involves heating the materials with a gas flame and adding filler metal to create a weld. The heat from the gas flame melts the materials, and the filler metal is added to fill the gap between the pieces being joined."
      },
      {
        "question": "Spot welding is a type of welding used for:",
        "options": [
          "Joining large structural components",
          "Creating continuous welds along the length of a joint",
          "Welding thin sheets of metal by applying localized heat",
          "Welding materials underwater"
        ],
        "correctAnswer": "Welding thin sheets of metal by applying localized heat",
        "explanation": "Spot welding is a type of welding used for welding thin sheets of metal by applying localized heat to the area to be joined. It is commonly used in the automotive industry to join sheet metal components."
      },
      {
        "question": "Soldering and brazing are processes used for joining materials using:",
        "options": [
          "Mechanical fasteners",
          "Adhesive",
          "Heat and a filler material with a lower melting point",
          "Ultrasonic vibration"
        ],
        "correctAnswer": "Heat and a filler material with a lower melting point",
        "explanation": "Soldering and brazing are processes used for joining materials using heat and a filler material with a lower melting point. In soldering, the filler material, called solder, melts at a lower temperature and wets the surfaces to be joined. In brazing, a higher temperature is used, and the filler material, called brazing alloy, forms a metallurgical bond with the base materials."
      },
      {
        "question": "CAD in CAD/CAM stands for:",
        "options": [
          "Computer-Aided Drafting",
          "Computer-Aided Design",
          "Computer-Assisted Drawing",
          "Computer-Assisted Design"
        ],
        "correctAnswer": "Computer-Aided Design",
        "explanation": "CAD in CAD/CAM stands for Computer-Aided Design. It refers to the use of computer software and systems to create, modify, analyze, and optimize designs for various products and components."
      },
      {
        "question": "CAM in CAD/CAM stands for:",
        "options": [
          "Computer-Aided Modeling",
          "Computer-Assisted Manufacturing",
          "Computer-Assisted Machining",
          "Computer-Aided Manufacturing"
        ],
        "correctAnswer": "Computer-Aided Manufacturing",
        "explanation": "CAM in CAD/CAM stands for Computer-Aided Manufacturing. It involves the use of computer software and systems to control and automate manufacturing processes, such as machining, assembly, and quality control."
      },
      {
        "question": "Additive manufacturing, also known as 3D printing, is based on the principle of:",
        "options": [
          "Subtracting material to create a final product",
          "Joining and fusing materials layer by layer",
          "Molding materials to form the desired shape",
          "Assembling parts together using fasteners"
        ],
        "correctAnswer": "Joining and fusing materials layer by layer",
        "explanation": "Additive manufacturing, or 3D printing, is based on the principle of joining and fusing materials layer by layer to build a final product. It allows for the creation of complex geometries and the customization of designs."
      },
      {
        "question": "Rapid prototyping is a process used for:",
        "options": [
          "Mass production of products",
          "Creating functional prototypes quickly and cost-effectively",
          "Automating manufacturing processes",
          "Customizing designs for individual customers"
        ],
        "correctAnswer": "Creating functional prototypes quickly and cost-effectively",
        "explanation": "Rapid prototyping is a process used for creating functional prototypes quickly and cost-effectively. It allows designers and engineers to validate their designs, test product functionality, and identify design flaws before mass production."
      },
      {
        "question": "CNC in manufacturing refers to:",
        "options": [
          "Computer Numerical Control",
          "Computerized Numerical Configuration",
          "Controlled Numerical Cambering",
          "Cyclic Numerical Coordination"
        ],
        "correctAnswer": "Computer Numerical Control",
        "explanation": "CNC in manufacturing stands for Computer Numerical Control. It is a technology that uses computer programs and numerical data to control and automate machine tools, such as lathes, mills, and routers, to produce precision parts and components."
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
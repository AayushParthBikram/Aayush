const quizData = [
    {
      question: "When creating an isometric drawing in Auto-CAD the drafter can utilize the Dynamic Input and Polar Coordinate system to place both vertical and horizontal lines. A line created from one point 3 inches at 180 degrees would be a ________ line.",
      options: ["A. Horizontal", "B. Vertical", "C. Inclined", "D. None of the above"],
      correctAnswer: "B. Vertical"
    },
    {
      question: "The type of line that projects from an object for the express purpose of locating a dimension is a ________ line.",
      options: ["A. Visible", "B. Hidden", "C. Extension", "D. Dimension"],
      correctAnswer: "C. Extension"
    },
    {
      question: "This is the measured size of a finished part:",
      options: ["A. Actual size", "B. Dimensioned size", "C. Production size", "D. Basic size"],
      correctAnswer: "A. Actual size"
    },
    {
      question: "Drafters should use a ________ in a section view of a mechanical part that includes the cylindrical view of a threaded hole.",
      options: ["A. Center line", "B. Hatch line", "C. Poly line", "D. Dimension line"],
      correctAnswer: "A. Center line"
    },
    {
      question: "A ________ section allows the drafter to create a Cutting Plane line which is not in a straight line across the part.",
      options: ["A. Offset", "B. Half", "C. Whole", "D. Broken out"],
      correctAnswer: "A. Offset"
    },
    {
      question: "Lines of an isometric drawing that are not parallel to the isometric axes are called this:",
      options: ["A. Trimetric lines", "B. Non-isometric lines", "C. Multiview lines", "D. Dimetric lines"],
      correctAnswer: "B. Non-isometric lines"
    },
    {
      question: "This type of section is limited by a break line:",
      options: ["A. Removed section", "B. Revolved section", "C. Broken-out section", "D. Half section"],
      correctAnswer: "C. Broken-out section"
    },
    {
      question: "Isometric drawings are often used by ________ to help illustrate complex designs.",
      options: ["A. Mechanical engineers", "B. Piping drafters", "C. Aerospace engineers", "D. All of the above"],
      correctAnswer: "D. All of the above"
    },
    {
      question: "When creating a Cutting Plane line with Auto-CAD it is customary to use a ________ to create the line.",
      options: ["A. Center line", "B. Polyline", "C. Dashed line", "D. Hatch line"],
      correctAnswer: "B. Polyline"
    },
    {
      question: "How can the drafter prevent Auto-CAD from placing or stacking another center mark on a circle when adding a diameter dimension to it?",
      options: ["A. Explode the dimension and then erase the center mark", "B. Use the Properties dialog box to turn off the center mark of the dimension", "C. It can't be done", "D. Use the trim tool to take away the stacked center mark"],
      correctAnswer: "B. Use the Properties dialog box to turn off the center mark of the dimension"
    },
    {
      question: "If designs require changes, they should be documented with:",
      options: ["A. Development plans", "B. Product proposals", "C. Document reviews", "D. Engineering change orders"],
      correctAnswer: "D. Engineering change orders"
    },
    {
      question: "Some of the common terms used to describe technical drawing include:",
      options: ["A. Drafting", "B. Engineering Graphics", "C. Engineering Drawing", "D. All of the above"],
      correctAnswer: "D. All of the above"
    },
    {
      question: "In U.S. structural and architectural drafting, all dimensions of this length are usually expressed in feet and inches:",
      options: ["A. One inch or over", "B. One foot or over", "C. One yard or over", "D. One rod or over"],
      correctAnswer: "B. One foot or over"
    },
    {
      question: "This type of structural steel drawing shows all dimensions necessary for fabrication:",
      options: ["A. Shop drawings", "B. Design drawings", "C. Weldment drawings", "D. Application drawings"],
      correctAnswer: "A. Shop drawings"
    },
    {
      question: "These maps are used in planning installations of trees, shrubbery, drives, and other garden features:",
      options: ["A. Landscape maps", "B. Engineering maps", "C. Topographic maps", "D. Cadastral maps"],
      correctAnswer: "A. Landscape maps"
    },
    {
      question: "This is the term for the range of tightness or looseness resulting from the allowances and tolerances in mating parts:",
      options: ["A. Limits", "B. Fit", "C. Specifications", "D. Allowance"],
      correctAnswer: "B. Fit"
    },
    {
      question: "The offset distance for the width (front to back) distance of the auxiliary view is the same distance of the ________ in the top view.",
      options: ["A. Width", "B. Height", "C. Length", "D. None of the above"],
      correctAnswer: "A. Width"
    },
    {
      question: "Schematic and single-line diagrams should be arranged so that signal or transmission path from input to output proceeds in this fashion:",
      options: ["A. Right to left and top to bottom", "B. Right to left and bottom to top", "C. Left to right and top to bottom", "D. Left to right and bottom to top"],
      correctAnswer: "C. Left to right and top to bottom"
    },
    {
      question: "A line drawn with a long section, short dash and another long section is a __________.",
      options: ["A. Hidden feature", "B. Center of a circle", "C. Center axis of a hidden cylinder", "D. Center of a radius"],
      correctAnswer: "C. Center axis of a hidden cylinder"
    },
    {
      question: "An Auto-CAD term that refers to a pre-drawn object which is stored in a drawing file and can be inserted into any other drawing file as needed is a __________.",
      options: ["A. Block", "B. Brick", "C. Balloon", "D. None of the above"],
      correctAnswer: "A. Block"
    },
    {
      question: "The CRF (ep) is also known as: [CRF(EP) - 8% - 7], where",
      options: ["A. 8% is the rate of interest per year", "B. Money is borrowed for n = 7 years", "C. Both (A) and (B)", "D. Neither (A) nor (B)"],
      correctAnswer: "C. Both (A) and (B)"
    },
    {
      question: "A form of business organization in which a person conducts his business alone and entirely for his own profit, being solely responsible for all its activities and liabilities.",
      options: ["A. Sole proprietorship", "B. Entrepreneurship", "C. Partnership", "D. Corporation"],
      correctAnswer: "A. Sole proprietorship"
    },
    {
      question: "A man loans P 187,400 from a bank with interest at 5% compounded annually. He agrees to pay his obligations by paying 8 equal annual payments, the first being due at the end of 10 years. Find the annual payments.",
      options: ["A. P 43,600.10", "B. P 43,489.47", "C. P 43,263.91", "D. P 43,763.20"],
      correctAnswer: "D. P 43,763.20"
    },
    {
      question: "Keeping in view, the feasibility order of magnitude, the preliminary, conceptual or budget estimates, are prepared by:",
      options: ["A. Architect/engineer", "B. Construction manager", "C. Owner himself/herself", "D. Construction manager"],
      correctAnswer: "C. Owner himself/herself"
    },
    {
      question: "What is the reduction in the money value of capital asset is called?",
      options: ["A. Capital expenditure", "B. Capital loss", "C. Loss", "D. Deficit"],
      correctAnswer: "B. Capital loss"
    },
    {
      question: "What is the increase in the money value of a capital asset is called?",
      options: ["A. Profit", "B. Capital gain", "C. Capital expenditure", "D. Capital stock"],
      correctAnswer: "B. Capital gain"
    },
    {
      question: "A construction estimate is used",
      options: ["A. To judge tentatively or approximate value of the project", "B. To produce a statement of the approximate cost", "C. To decide an approximation of the value of the project and not the exact cost", "D. None of these"],
      correctAnswer: "C. To decide an approximation of the value of the project and not the exact cost"
    },
    {
      question: "If P is principal amount, I is the rate of interest per annum and n is the number of periods in years, the compound amount factor (CAF) is:",
      options: ["A. (1+I)^n/(1+I)", "B. (1+I)^(12n)/(1+I)", "C. n+I√/n+I", "D. None of these"],
      correctAnswer: "A. (1+I)^n/(1+I)"
    },
    {
      question: "If interest is paid more than once in a year, ‘i’ is the rate of interest per year, ‘n’ is the number of periods in years and ‘m’ is a number of periods per years, compound amount factor (CAF) is:",
      options: ["A. (1+im)^n/(1+i/m)", "B. (1+in)^m/(1+i/n)", "C. (1+in)^(1/m)/(1+i/n)", "D. (1+im)^(1/n)/(1+i/m)"],
      correctAnswer: "A. (1+im)^n/(1+i/m)"
    },
    {
      question: "What is the term for an annuity with a fixed time span?",
      options: ["A. Ordinary annuity", "B. Perpetuity", "C. Annuity certain", "D. Annuity due"],
      correctAnswer: "C. Annuity certain"
    },
    {
      question: "Which of the following is the reason that software is delivered late?",
      options: [
        "a) Changing customer requirements that are not reflected in schedule changes",
        "b) Technical difficulties that could not have been foreseen in advance",
        "c) Human difficulties that could not have been foreseen in advance",
        "d) All of the mentioned"
      ],
      correctAnswer: "d"
    },
    {
      question: "Which of the following is an activity that distributes estimated effort across the planned project duration by allocating the effort to specific software engineering tasks?",
      options: [
        "a) Software Macroscopic schedule",
        "b) Software Project scheduling",
        "c) Software Detailed schedule",
        "d) None of the mentioned"
      ],
      correctAnswer: "b"
    },
    {
      question: "Every task that is scheduled should be assigned to a specific team member is termed as",
      options: [
        "a) Compartmentalization",
        "b) Defined milestones",
        "c) Defined responsibilities",
        "d) Defined outcomes"
      ],
      correctAnswer: "c"
    },
    {
      question: "What is a collection of software engineering work tasks, milestones, and deliverables that must be accomplished to complete a particular project?",
      options: [
        "a) Task set",
        "b) Degree of milestone",
        "c) Adaptation criteria",
        "d) All of the mentioned"
      ],
      correctAnswer: "a"
    },
    {
      question: "Ensuring that no more than the allocated number of people are allocated at any given time in Software Scheduling is known as",
      options: [
        "a) Time Allocation",
        "b) Effort Validation",
        "c) Defined Milestone",
        "d) Effort Distribution"
      ],
      correctAnswer: "b"
    },
    {
      question: "What is used to determine the recommended degree of rigor with which the software process should be applied on a project?",
      options: [
        "a) Degree of Rigor",
        "b) Adaptation criteria",
        "c) Task Set",
        "d) Both degree of Rigor and adaptation criteria"
      ],
      correctAnswer: "b"
    },
    {
      question: "What evaluates the risk associated with the technology to be implemented as part of project scope?",
      options: [
        "a) Concept scoping",
        "b) Preliminary concept planning",
        "c) Technology risk assessment",
        "d) Customer reaction to the concept"
      ],
      correctAnswer: "b"
    },
    {
      question: "Which of the following is not an adaptation criteria for software projects?",
      options: [
        "a) Size of the project",
        "b) Customers Complaints",
        "c) Project staff",
        "d) Mission criticality"
      ],
      correctAnswer: "b"
    },
    {
      question: "Which of the following is a project scheduling method that can be applied to software development?",
      options: [
        "a) PERT",
        "b) CPM",
        "c) CMM",
        "d) Both PERT and CPM"
      ],
      correctAnswer: "d"
    },
    {
      question: "A technique for performing quantitative analysis of progress is known as",
      options: [
        "a) BCWS",
        "b) EVA",
        "c) BAC",
        "d) CBSE"
      ],
      correctAnswer: "b"
    },
    {
      question: "What is the recommended distribution of effort for a project?",
      options: [
        "a) 40-20-40",
        "b) 50-20-30",
        "c) 30-40-30",
        "d) 50-30-20"
      ],
      correctAnswer: "a"
    },
    {
      question: "A project usually has a timeline chart which was developed by",
      options: [
        "a) Henry Gantt",
        "b) Barry Boehm",
        "c) Ivar Jacabson",
        "d) None of the mentioned"
      ],
      correctAnswer: "a"
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
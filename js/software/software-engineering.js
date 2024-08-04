const quizData = [
    {
        "question": "Choose the incorrect statement in terms of Objects.",
        "options": [
          "Objects are abstractions of real-world",
          "Objects can’t manage themselves",
          "Objects encapsulate state and representation information",
          "All of the mentioned"
        ],
        "correctAnswer": "Objects can’t manage themselves",
        "explanation": "Objects are independent."
      },
      {
        "question": "What encapsulates both data and data manipulation functions ?",
        "options": [
          "Object",
          "Class",
          "Super Class",
          "Sub Class"
        ],
        "correctAnswer": "Object",
        "explanation": "None."
      },
      {
        "question": "Which of the following is a mechanism that allows several objects in a class hierarchy to have different methods with the same name?",
        "options": [
          "Aggregation",
          "Polymorphism",
          "Inheritance",
          "All of the mentioned"
        ],
        "correctAnswer": "Polymorphism",
        "explanation": "In polymorphism instances of each subclass will be free to respond to messages by calling their own version of the method."
      },
      {
        "question": "Inherited object classes are self-contained.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False",
        "explanation": "Inherited object classes are not self-contained. They cannot be understood without reference to their super-classes."
      },
      {
        "question": "Which of the following points related to Object-oriented development (OOD) is true?",
        "options": [
          "OOA is concerned with developing an object model of the application domain",
          "OOD is concerned with developing an object-oriented system model to implement requirements",
          "All of the mentioned",
          "None of the mentioned"
        ],
        "correctAnswer": "All of the mentioned",
        "explanation": "The answer is in support of OOD."
      },
      {
        "question": "How is generalization implemented in Object Oriented programming languages?",
        "options": [
          "Inheritance",
          "Polymorphism",
          "Encapsulation",
          "Abstract Classes"
        ],
        "correctAnswer": "Inheritance",
        "explanation": "None."
      },
      {
        "question": "Which of the following is a disadvantage of OOD ?",
        "options": [
          "Easier maintenance",
          "Objects may be understood as stand-alone entities",
          "Objects are potentially reusable components",
          "None of the mentioned"
        ],
        "correctAnswer": "None of the mentioned",
        "explanation": "All the options define the characteristics of OOD."
      },
      {
        "question": "Which of the following describes 'Is-a-Relationship' ?",
        "options": [
          "Aggregation",
          "Inheritance",
          "Dependency",
          "All of the mentioned"
        ],
        "correctAnswer": "Inheritance",
        "explanation": "None."
      },
      {
        "question": "Object that collects data on request rather than autonomously is known as",
        "options": [
          "Active Object",
          "Passive Object",
          "Multiple instance",
          "None of the mentioned"
        ],
        "correctAnswer": "Passive Object",
        "explanation": "A passive object holds data, but does not initiate control."
      },
      {
        "question": "Objects are executed",
        "options": [
          "sequentially",
          "in Parallel",
          "sequentially & Parallel",
          "none of the mentioned"
        ],
        "correctAnswer": "sequentially & Parallel",
        "explanation": "Objects may be distributed and may execute sequentially or in parallel."
      },
      {
        "question": "How many layers are present in the OO design pyramid?",
        "options": [
          "three",
          "four",
          "five",
          "one"
        ],
        "correctAnswer": "four",
        "explanation": "The four layers are: Subsystem layer, class and object layer, message layer and responsibilities layer"
      },
      {
        "question": "Which of the following early OOD methods incorporates both a “micro development process” and a “macro development process.” ?",
        "options": [
          "Booch method",
          "Rumbaugh method",
          "Wirfs-Brock method",
          "Coad and Yourdon method"
        ],
        "correctAnswer": "Booch method",
        "explanation": "The macro development process includes the architectural planning and micro developments process defines rules that govern the use of operations and attributes and the domain-specific policies for memory management, error handling, and other infrastructure functions."
      },
      {
        "question": "Grady Booch, James Rumbaugh, and Ivar Jacobson combined the best features of their individual object-oriented analysis into a new method for object oriented design known as",
        "options": [
          "HTML",
          "XML",
          "UML",
          "SGML"
        ],
        "correctAnswer": "UML",
        "explanation": "The Unified Modeling Language (UML) has become widely used throughout the industry as the standard approach to OOD."
      },
      {
        "question": "A design description of an object is known as a class",
        "options": [
          "instance",
          "object",
          "case",
          "both instance and object"
        ],
        "correctAnswer": "both instance and object",
        "explanation": "None."
      },
      {
        "question": "Which of the following is conceptually similar to objects?",
        "options": [
          "PACKAGE",
          "PROC",
          "PRIVATE",
          "None of the mentioned"
        ],
        "correctAnswer": "PACKAGE",
        "explanation": "A package is a namespace that organizes a set of related classes and interfaces."
      },
      {
        "question": "A design description in OOD includes",
        "options": [
          "Protocol Description",
          "Implementation Description",
          "Type Description",
          "both Protocol and Implementation Description"
        ],
        "correctAnswer": "both Protocol and Implementation Description",
        "explanation": "None."
      },
      {
        "question": "Which of the following is not an operation as per OOD algorithms and data structures?",
        "options": [
          "operations that manipulate data in some way",
          "operations that perform a computation",
          "operations that check for syntax errors",
          "operations that monitor an object for the occurrence of a controlling event"
        ],
        "correctAnswer": "operations that check for syntax errors",
        "explanation": "Operations that check for syntax errors is concerned with the programming language used, so it will be handled by the compiler."
      },
      {
        "question": "Throughout the OOD process, a software engineer should look for every opportunity for creating new design process.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False",
        "explanation": "A software engineer should look for every opportunity to reuse existing design patterns whenever they meet the needs of the design rather than creating new ones."
      },
      {
        "question": "Which is the first step in the software development life cycle ?",
        "options": [
          "Analysis",
          "Design",
          "Problem/Opportunity Identification",
          "Development and Documentation"
        ],
        "correctAnswer": "Problem/Opportunity Identification",
        "explanation": "None."
      },
      {
        "question": "Which tool is use for structured designing ?",
        "options": [
          "Program flowchart",
          "Structure chart",
          "Data-flow diagram",
          "Module"
        ],
        "correctAnswer": "Structure chart",
        "explanation": "A Structure Chart (SC) in software engineering and organizational theory, is a chart which shows the breakdown of a system to its lowest manageable levels."
      },
      {
        "question": "A step by step instruction used to solve a problem is known as",
        "options": [
          "Sequential structure",
          "A List",
          "A plan",
          "An Algorithm"
        ],
        "correctAnswer": "An Algorithm",
        "explanation": "None."
      },
      {
        "question": "In the Analysis phase, the development of the ____________ occurs, which is a clear statement of the goals and objectives of the project.",
        "options": [
          "documentation",
          "flowchart",
          "program specification",
          "design"
        ],
        "correctAnswer": "program specification",
        "explanation": "Program specification is the definition of what a computer program is expected to do."
      },
      {
        "question": "Actual programming of software code is done during the ____________ step in the SDLC.",
        "options": [
          "Maintenance and Evaluation",
          "Design",
          "Analysis",
          "Development and Documentation"
        ],
        "correctAnswer": "Development and Documentation",
        "explanation": "The developer has to find in the technical documentation enough information to start coding."
      },
      {
        "question": "Who designs and implement database structures.",
        "options": [
          "Programmers",
          "Project managers",
          "Technical writers",
          "Database administrators"
        ],
        "correctAnswer": "Database administrators",
        "explanation": "The role of database administrators includes the development and design of database strategies, system monitoring and improving database performance and capacity, and planning for future expansion requirements."
      },
      {
        "question": "_________ is the process of translating a task into a series of commands that a computer will use to perform that task.",
        "options": [
          "Project design",
          "Installation",
          "Systems analysis",
          "Programming"
        ],
        "correctAnswer": "Programming",
        "explanation": "None."
      },
      {
        "question": "Debugging is:",
        "options": [
          "creating program code",
          "finding and correcting errors in the program code",
          "identifying the task to be computerized",
          "creating the algorithm"
        ],
        "correctAnswer": "finding and correcting errors in the program code",
        "explanation": "Debugging is a methodical process of finding and reducing the number of bugs, or defects, in a computer program or a piece of electronic hardware, thus making it behave as expected."
      },
      {
        "question": "In Design phase, which is the primary area of concern ?",
        "options": [
          "Architecture",
          "Data",
          "Interface",
          "All of the mentioned"
        ],
        "correctAnswer": "All of the mentioned",
        "explanation": "Part of the design phase is to create structural and behavioral models of the system which is covered by architecture, data and the interface of the product."
      },
      {
        "question": "The importance of software design can be summarized in a single word which is:",
        "options": [
          "Efficiency",
          "Accuracy",
          "Quality",
          "Complexity"
        ],
        "correctAnswer": "Quality",
        "explanation": "Software functional quality reflects how well it complies with or conforms to a given design, based on functional requirements or specifications."
      },
      {
        "question": "Cohesion is a qualitative indication of the degree to which a module",
        "options": [
          "can be written more compactly",
          "focuses on just one thing",
          "is able to complete its function in a timely manner",
          "is connected to other modules and the outside world"
        ],
        "correctAnswer": "focuses on just one thing",
        "explanation": "Cohesion of a single module/component is the degree to which its responsibilities form a meaningful unit."
      },
      {
        "question": "Coupling is a qualitative indication of the degree to which a module",
        "options": [
          "can be written more compactly",
          "focuses on just one thing",
          "is able to complete its function in a timely manner",
          "is connected to other modules and the outside world"
        ],
        "correctAnswer": "is connected to other modules and the outside world",
        "explanation": "Coupling between modules/components is their degree of mutual interdependence."
      },
      {
        "question": "Java packages and Fortran subroutine are examples of__________",
        "options": [
          "Functions",
          "Modules",
          "Classes",
          "Sub procedures"
        ],
        "correctAnswer": "Modules",
        "explanation": "A modular system consists of well defined manageable units with well defined interfaces among the units."
      },
      {
        "question": "Which of the property of software modularity is incorrect with respect to benefits software modularity?",
        "options": [
          "Modules are robust",
          "Module can use other modules",
          "Modules Can be separately compiled and stored in a library",
          "Modules are mostly dependent"
        ],
        "correctAnswer": "Modules are mostly dependent",
        "explanation": "Modularity cannot bring benefits unless the modules are autonomous or independent."
      },
      {
        "question": "_______________ is a measure of the degree of interdependence between modules.",
        "options": [
          "Cohesion",
          "Coupling",
          "None of the mentioned",
          "All of the mentioned"
        ],
        "correctAnswer": "Coupling",
        "explanation": "Coupling or dependency is the degree to which each program module relies on each one of the other modules."
      },
      {
        "question": "Which of the following is the best type of module coupling?",
        "options": [
          "Control Coupling",
          "Stamp Coupling",
          "Data Coupling",
          "Content Coupling"
        ],
        "correctAnswer": "Data Coupling",
        "explanation": "The dependency between module A and B is said to be data coupled if their dependency is based on the fact they communicate by only passing of data."
      },
      {
        "question": "Which of the following is the worst type of module coupling?",
        "options": [
          "Control Coupling",
          "Stamp Coupling",
          "External Coupling",
          "Content Coupling"
        ],
        "correctAnswer": "External Coupling",
        "explanation": "Content coupling occurs when module A changes data of module B or when control is passed from one module to the middle of another."
      },
      {
        "question": "Which of the following is the worst type of module cohesion?",
        "options": [
          "Logical Cohesion",
          "Temporal Cohesion",
          "Functional Cohesion",
          "Coincidental Cohesion"
        ],
        "correctAnswer": "Coincidental Cohesion",
        "explanation": "Coincidental cohesion exists in modules that contain instructions that have little or no relationship to one another."
      },
      {
        "question": "Which of the following is the best type of module cohesion?",
        "options": [
          "Functional Cohesion",
          "Temporal Cohesion",
          "Functional Cohesion",
          "Sequential Cohesion"
        ],
        "correctAnswer": "Functional Cohesion",
        "explanation": "Functional Cohesion is a type of cohesion in which the tasks performed by a software module all contribute to the performance of a single function."
      },
      {
        "question": "A software engineer must design the modules with the goal of high cohesion and low coupling.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "If the software is not properly modularized, a host of seemingly trivial enhancement or changes will result into death of the project."
      },
      {
        "question": "In what type of coupling, the complete data structure is passed from one module to another?",
        "options": [
          "Control Coupling",
          "Stamp Coupling",
          "External Coupling",
          "Content Coupling"
        ],
        "correctAnswer": "Stamp Coupling",
        "explanation": "None."
      },
      {
        "question": "If all tasks must be executed in the same time-span, what type of cohesion is being exhibited?",
        "options": [
          "Functional Cohesion",
          "Temporal Cohesion",
          "Functional Cohesion",
          "Sequential Cohesion"
        ],
        "correctAnswer": "Temporal Cohesion",
        "explanation": "A Module exhibits temporal cohesion when it contains tasks that are related by the fact that all tasks must be executed in the same time-span."
      },
      {
        "question": "Quality Management in software engineering is also known as",
        "options": [
          "SQA",
          "SQM",
          "SQI",
          "SQA and SQM"
        ],
        "correctAnswer": "SQA",
        "explanation": "Quality Management is also called software quality assurance (SQA) which serves as an umbrella activity that is applied throughout the software process."
      },
      {
        "question": "Quality also can be looked at in terms of user satisfaction which includes",
        "options": [
          "A compliant product",
          "Good quality output",
          "Delivery within budget and schedule",
          "All of the mentioned"
        ],
        "correctAnswer": "All of the mentioned",
        "explanation": "This focuses on how well the implementation follows the design and how well the resulting system meets its requirements."
      },
      {
        "question": "Inspections and testing are what kinds of Quality Costs?",
        "options": [
          "Prevention",
          "Internal Failure",
          "External Failure",
          "Appraisal"
        ],
        "correctAnswer": "Appraisal",
        "explanation": "Inspections, equipment calibration, maintenance and testing appraisal costs is quality management."
      },
      {
        "question": "According to Pareto’s principle, x% of defects can be traced to y% of all causes. What are the values of x and y?",
        "options": [
          "60, 40",
          "70, 30",
          "80, 20",
          "No such principle exists"
        ],
        "correctAnswer": "80, 20",
        "explanation": "The Pareto principle (also known as the 80–20 rule) states that, for many events, roughly 80% of the effects come from 20% of the causes."
      },
      {
        "question": "What is Six Sigma?",
        "options": [
          "It is the most widely used strategy for statistical quality assurance",
          "The “Six Sigma” refers to six standard deviations",
          "It is the most widely used strategy for statistical quality assurance AND The “Six Sigma” refers to six standard deviations",
          "A Formal Technical Review(FTR) guideline for quality walkthrough or inspection"
        ],
        "correctAnswer": "It is the most widely used strategy for statistical quality assurance AND The “Six Sigma” refers to six standard deviations",
        "explanation": "The Six Sigma uses data and statistical analysis to measure and improve a company’s operational performance."
      },
      {
        "question": "Which of the following is not a core step of Six Sigma?",
        "options": [
          "Define",
          "Control",
          "Measure",
          "Analyse"
        ],
        "correctAnswer": "Control",
        "explanation": "It is an additional step added for existing processes and can be done in parallel."
      },
      {
        "question": "Non-conformance to software requirements is known as",
        "options": [
          "Software availability",
          "Software reliability",
          "Software failure",
          "None of the mentioned"
        ],
        "correctAnswer": "Software failure",
        "explanation": "Given a set of valid requirements, all software failures can be traced to design or implementation problems."
      },
      {
        "question": "Software safety is equivalent to software reliability.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "False",
        "explanation": "Software reliability uses statistical analysis to determine the likelihood that a software failure will occur; however, the failure may not necessarily result in a hazard or mishap."
      },
      {
        "question": "Misinterpretation of customer communication is a sample of possible cause defects.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Translation gap between the client and the developer often leads to software defects."
      },
      {
        "question": "What kind of quality cost is incurred when an error is detected in a product prior to shipment?",
        "options": [
          "Prevention",
          "Internal Failure",
          "External Failure",
          "Appraisal"
        ],
        "correctAnswer": "Internal Failure",
        "explanation": "This includes rework, repair, and failure mode analysis."
      },
      {
        "question": "The degree to which the design specifications are followed during manufacturing is known as",
        "options": [
          "Quality of design",
          "Quality of conformance",
          "Quality of testing",
          "None of the mentioned"
        ],
        "correctAnswer": "Quality of conformance",
        "explanation": "This focuses on how well the implementation follows the design and how well the resulting system meets its requirements."
      },
      {
        "question": "Quality of design encompasses requirements and specifications of the system.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "The characteristic that designers specify for an item are covered in quality of design."
      },
      {
        "question": "According to ISO 9001, inspection and testing comes under which management responsibility?",
        "options": [
          "Process control",
          "Document control",
          "Control of nonconforming products",
          "Servicing"
        ],
        "correctAnswer": "Process control",
        "explanation": "None."
      },
      {
        "question": "The method of design encompassing the process of object oriented decomposition and a notation for depicting both logical and physical and as well as static and dynamic models of the system under design is known as:",
        "options": [
          "Object- Oriented Programming",
          "Object- Oriented Design",
          "Object- Oriented Analysis",
          "None of the mentioned"
        ],
        "correctAnswer": "Object- Oriented Design",
        "explanation": "The definition has two important parts. The former part uses the class and object abstractions to logically structure systems, and the latter uses algorithmic abstractions. The term object oriented design (OOD) is used to refer any method that leads to object oriented decomposition."
      },
      {
        "question": "What is the programming style of the object oriented conceptual model?",
        "options": [
          "Invariant relationships",
          "Algorithms",
          "Classes and objects",
          "Goals, often expressed in a predicate calculus."
        ],
        "correctAnswer": "Classes and objects",
        "explanation": "Object oriented programming follows a conceptual framework called object model and is implemented by writing classes and objects to make its style clear unlike procedure- oriented language."
      },
      {
        "question": "The essential characteristics of an object that distinguish it from all other kinds of objects and thus provide crisply defined conceptual boundaries, relative to the perspective of the viewer is called:",
        "options": [
          "Encapsulation",
          "Modularity",
          "Hierarchy",
          "Abstraction"
        ],
        "correctAnswer": "Abstraction",
        "explanation": "Abstraction focuses only on the outside view of an object and separates object’s essential behavior from its implementation. It explains what an object does but doesn’t explain how it does."
      },
      {
        "question": "Abstraction is classified into _______ types",
        "options": [
          "4",
          "3",
          "2",
          "1"
        ],
        "correctAnswer": "4",
        "explanation": "Entity abstraction, Action abstraction, Virtual machine abstraction, Coincidental abstraction"
      },
      {
        "question": "The process of compartmentalizing the elements of an abstraction that constitute its structure and behavior is called as",
        "options": [
          "Hierarchy",
          "Encapsulation",
          "Modularity",
          "Entity Abstraction"
        ],
        "correctAnswer": "Encapsulation",
        "explanation": "Encapsulation focuses upon the implementation that gives rise to this behavior and is mostly often achieved through information hiding i.e., abstraction."
      },
      {
        "question": "Single inheritance, Multiple inheritance, and Aggregation comes under _______",
        "options": [
          "Modularity",
          "Typing",
          "Hierarchy",
          "None of the mentioned"
        ],
        "correctAnswer": "Hierarchy",
        "explanation": "All the three types are the examples of Hierarchy, as it denotes ranking or ordering of abstractions."
      },
      {
        "question": "In which of the following mechanisms, types of all variables and expressions are fixed at compilation time.",
        "options": [
          "Strong Typing",
          "Weak Typing",
          "Static Binding/ early binding",
          "Dynamic Binding/ late binding"
        ],
        "correctAnswer": "Static Binding/ early binding",
        "explanation": "The memory address of a variable can be statically bound to the variable at compile time or dynamically at runtime. Likewise, variables in some languages have dynamic types that change during program execution, while other variables have static types that remain fixed over the execution of the program. Only the binding of the value determines whether the object is a variable or something else (such as constant)."
      },
      {
        "question": "In which of the following mechanisms, types of all variables and expressions are not known until runtime",
        "options": [
          "Strong Typing",
          "Weak Typing",
          "Static Binding/ early binding",
          "Dynamic Binding/ late binding"
        ],
        "correctAnswer": "Dynamic Binding/ late binding",
        "explanation": "The memory address of a variable can be statically bound to the variable at compile time or dynamically at runtime. Likewise, variables in some languages have dynamic types that change during program execution, while other variables have static types that remain fixed over the execution of the program. Only the binding of the value determines whether the object is a variable or something else (such as constant)."
      },
      {
        "question": "Which of the following statements about Persistence is correct?",
        "options": [
          "It is the enforcement of the class of an object, such that objects of different types may not be interchanged, or at the most they may be interchanged only in very restricted ways.",
          "It is the property of an object through which its existence transcends time and/or space.",
          "It is the property that distinguishes an active object from one that is not active.",
          "All of the mentioned"
        ],
        "correctAnswer": "It is the property of an object through which its existence transcends time and/or space.",
        "explanation": "Persistence deals with lifetime of data. Persistence saves the state and class of an object across time or space."
      },
      {
        "question": "What is that concept in type theory in which a single name may denote objects of many different classes that are related by some common super class referred to",
        "options": [
          "Monomorphism",
          "Type Checking",
          "Polymorphism",
          "Generalization"
        ],
        "correctAnswer": "Polymorphism",
        "explanation": "Polymorphism is a feature of object oriented programming that usually takes the ability of creating an object, or variable, or a function in more than one form. Polymorphism exists when the features of inheritance and dynamic binding interact."
      },
      {
        "question": "Object oriented technology is built upon a sound engineering foundation, whose elements are collectively called as _________",
        "options": [
          "Von Neumann Model",
          "Object Model",
          "Structured Model",
          "Programming Model"
        ],
        "correctAnswer": "Object Model",
        "explanation": "The object mode encompasses the principles of abstraction, encapsulation, modularity, typing, concurrency, and persistence which are the principles of object oriented programming language."
      },
      {
        "question": "Which of the following programming language are object oriented in nature",
        "options": [
          "Smalltalk and Simula",
          "FORTRAN and ALGOL",
          "C and Ada",
          "Perl and Python"
        ],
        "correctAnswer": "Smalltalk and Simula",
        "explanation": "In Smalltalk and Simula, data and methods of manipulating the data are kept as a single unit called an object."
      },
      {
        "question": "Callback is an operation provided by",
        "options": [
          "Inheritance",
          "Encapsulation",
          "Modularity",
          "Abstraction"
        ],
        "correctAnswer": "Abstraction",
        "explanation": "A call back is a programming idiom which a client provides a function to the server and the server calls the client’s function whenever the appropriate conditions are met."
      },
      {
        "question": ":reader, :writer or :accessor are the slot options in",
        "options": [
          "Smalltalk",
          "LISP",
          "Object Pascal",
          "CLOS"
        ],
        "correctAnswer": "CLOS",
        "explanation": "These are the options which grant a client read access, write access, or read/write access respectively."
      },
      {
        "question": "Dependencies among files can then be asserted using the macro",
        "options": [
          "#define",
          "#undef",
          "#include",
          "#endif"
        ],
        "correctAnswer": "#include",
        "explanation": "Modular implementations are placed in file named with a .c sufficx which are called header files. #include is necessary to tell the preprocessor where to look for header files if they are not placed in the current directory."
      },
      {
        "question": "Inheritance is an example of which type of hierarchy",
        "options": [
          "Class Structure",
          "Object Structure",
          "Both",
          "None of the mentioned"
        ],
        "correctAnswer": "Class Structure",
        "explanation": "Inheritance is the most important “is a” (class structure) hierarchy and not “part of” (object structure) hierarchy."
      },
      {
        "question": "Superclass represents ______________ abstractions",
        "options": [
          "Generalized abstractions",
          "Specialization abstractions",
          "Both",
          "None of the mentioned"
        ],
        "correctAnswer": "Generalized abstractions",
        "explanation": "Generalization is the process of extracting shared characteristics from two or more classes, and combining them into a generalized superclass."
      },
      {
        "question": "Subclass represents _______________ abstractions",
        "options": [
          "Generalized abstractions",
          "Specialization abstractions",
          "Both",
          "None of the mentioned"
        ],
        "correctAnswer": "Specialization abstractions",
        "explanation": "Specialization means creating new subclasses from an existing class."
      },
      {
        "question": "_____________ is the property that distinguishes an active object from one that is not active.",
        "options": [
          "Persistence",
          "Typing",
          "Aggregation",
          "Concurrency"
        ],
        "correctAnswer": "Concurrency",
        "explanation": "None."
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
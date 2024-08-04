const quizData = [
    {
        question: "Who is the father of C language?",
        options: [
          "Steve Jobs",
          "James Gosling",
          "Dennis Ritchie",
          "Rasmus Lerdorf"
        ],
        correctAnswer: "Dennis Ritchie"
      },
      {
        question: "Which of the following is not a valid C variable name?",
        options: [
          "int number;",
          "float rate;",
          "int variable_count;",
          "int $main;"
        ],
        correctAnswer: "int $main;"
      },
      {
        question: "All keywords in C are in ____________",
        options: [
          "LowerCase letters",
          "UpperCase letters",
          "CamelCase letters",
          "None of the mentioned"
        ],
        correctAnswer: "LowerCase letters"
      },
      {
        question: "Which of the following is true for variable names in C?",
        options: [
          "They can contain alphanumeric characters as well as special characters",
          "It is not an error to declare a variable to be one of the keywords(like goto, static)",
          "Variable names cannot start with a digit",
          "Variable can be of any length"
        ],
        correctAnswer: "Variable names cannot start with a digit"
      },
      {
        question: "Which is valid C expression?",
        options: [
          "int my_num = 100,000;",
          "int my_num = 100000;",
          "int my num = 1000;",
          "int $my_num = 10000;"
        ],
        correctAnswer: "int my_num = 100000;"
      },
      {
        question: "Which of the following cannot be a variable name in C?",
        options: [
          "volatile",
          "true",
          "friend",
          "export"
        ],
        correctAnswer: "volatile"
      },
      {
        question: "What is short int in C programming?",
        options: [
          "The basic data type of C",
          "Qualifier",
          "Short is the qualifier and int is the basic data type",
          "All of the mentioned"
        ],
        correctAnswer: "Short is the qualifier and int is the basic data type"
      },
      {
        question: "Which of the following declaration is not supported by C language?",
        options: [
          "String str;",
          "char *str;",
          "float str = 3e2;",
          "Both String str; and float str = 3e2;"
        ],
        correctAnswer: "String str;"
      },
      {
        question: "Which keyword is used to prevent any changes in the variable within a C program?",
        options: [
          "immutable",
          "mutable",
          "const",
          "volatile"
        ],
        correctAnswer: "const"
      },
      {
        question: "What is the result of logical or relational expression in C?",
        options: [
          "True or False",
          "0 or 1",
          "0 if an expression is false and any positive number if an expression is true",
          "None of the mentioned"
        ],
        correctAnswer: "0 or 1"
      },
      {
        question: "Which of the following typecasting is accepted by C language?",
        options: [
          "Widening conversions",
          "Narrowing conversions",
          "Widening & Narrowing conversions",
          "None of the mentioned"
        ],
        correctAnswer: "Widening & Narrowing conversions"
      },
      {
        question: "Where in C the order of precedence of operators do not exist?",
        options: [
          "Within conditional statements, if, else",
          "Within while, do-while",
          "Within a macro definition",
          "None of the mentioned"
        ],
        correctAnswer: "None of the mentioned"
      },
      {
        question: "Which of the following is NOT possible with any 2 operators in C?",
        options: [
          "Different precedence, same associativity",
          "Different precedence, different associativity",
          "Same precedence, different associativity",
          "All of the mentioned"
        ],
        correctAnswer: "Same precedence, different associativity"
      },
      {
        question: "What is an example of iteration in C?",
        options: [
          "for",
          "while",
          "do-while",
          "all of the mentioned"
        ],
        correctAnswer: "all of the mentioned"
      },
      {
        question: "Functions can return enumeration constants in C?",
        options: [
          "true",
          "false",
          "depends on the compiler",
          "depends on the standard"
        ],
        correctAnswer: "true"
      },
      {
        question: "Functions in C Language are always _________",
        options: [
          "Internal",
          "External",
          "Both Internal and External",
          "External and Internal are not valid terms for functions"
        ],
        correctAnswer: "External"
      },
      {
        question: "Which of following is not accepted in C?",
        options: [
          "static a = 10; //static as",
          "static int func (int); //parameter as static",
          "static static int a; //a static variable prefixed with static",
          "all of the mentioned"
        ],
        correctAnswer: "static static int a; //a static variable prefixed with static"
      },
      {
        question: "Property which allows to produce different executable for different platforms in C is called?",
        options: [
          "File inclusion",
          "Selective inclusion",
          "Conditional compilation",
          "Recursive macros"
        ],
        correctAnswer: "Conditional compilation"
      },
      {
        question: "What is #include <stdio.h>?",
        options: [
          "Preprocessor directive",
          "Inclusion directive",
          "File inclusion directive",
          "None of the mentioned"
        ],
        correctAnswer: "Preprocessor directive"
      },
      {
        question: "C preprocessors can have compiler specific features.",
        options: [
          "True",
          "False",
          "Depends on the standard",
          "Depends on the platform"
        ],
        correctAnswer: "True"
      },
      {
        question: "Which of the following are C preprocessors?",
        options: [
          "#ifdef",
          "#define",
          "#endif",
          "all of the mentioned"
        ],
        correctAnswer: "all of the mentioned"
      },
      {
        question: "The C-preprocessors are specified with _________ symbol.",
        options: [
          "#",
          "$",
          "\"\"",
          "&"
        ],
        correctAnswer: "#"
      },
      {
        question: "How is search done in #include and #include somelibrary.h according to C standard?",
        options: [
          "When former is used, current directory is searched and when latter is used, standard directory is searched",
          "When former is used, standard directory is searched and when latter is used, current directory is searched",
          "When former is used, search is done in implementation defined manner and when latter is used, current directory is searched",
          "For both, search for ‘somelibrary’ is done in implementation-defined places"
        ],
        correctAnswer: "When former is used, standard directory is searched and when latter is used, current directory is searched"
      },
      {
        question: "How many number of pointer (*) does C have against a pointer variable declaration?",
        options: [
          "7",
          "127",
          "255",
          "No limits"
        ],
        correctAnswer: "No limits"
      },
      {
        question: "Which of the following is not possible statically in C language?",
        options: [
          "Jagged Array",
          "Rectangular Array",
          "Cuboidal Array",
          "Multidimensional Array"
        ],
        correctAnswer: "Jagged Array"
      },
      {
        question: "Which of the following return-type cannot be used for a function in C?",
        options: [
          "char *",
          "struct",
          "void",
          "none of the mentioned"
        ],
        correctAnswer: "none of the mentioned"
      },
      {
        question: "The standard header _______ is used for variable list arguments (...) in C.",
        options: [
          "<stdio.h >",
          "<stdlib.h>",
          "<math.h>",
          "<stdarg.h>"
        ],
        correctAnswer: "<stdarg.h>"
      },
      {
        question: "When a C program is started, O.S environment is responsible for opening file and providing pointer for that file?",
        options: [
          "Standard input",
          "Standard output",
          "Standard error",
          "All of the mentioned"
        ],
        correctAnswer: "All of the mentioned"
      },
      {
        question: "In C language, FILE is of which data type?",
        options: [
          "int",
          "char *",
          "struct",
          "None of the mentioned"
        ],
        correctAnswer: "struct"
      },
      {
        question: "What is the sizeof(char) in a 32-bit C compiler?",
        options: [
          "1 bit",
          "2 bits",
          "1 Byte",
          "2 Bytes"
        ],
        correctAnswer: "1 Byte"
      },
      {
        question: "Which of the following is not an operator in C?",
        options: [
          ",",
          "sizeof()",
          "~",
          "None of the mentioned"
        ],
        correctAnswer: "None of the mentioned"
      },
      {
        question: "scanf() is a predefined function in______header file.",
        options: [
          "stdlib. h",
          "ctype. h",
          "stdio. h",
          "stdarg. h"
        ],
        correctAnswer: "stdio. h"
      },
      {
        question: "Which of the following is the correct syntax to send an array as a parameter to function?",
        options: [
          "func(&array);",
          "func(#array);",
          "func(*array);",
          "func(array[size]);"
        ],
        correctAnswer: "func(&array);"
      },
      {
        question: "Which of the following can never be sent by call-by-value?",
        options: [
          "Variable",
          "Array",
          "Structures",
          "Both Array and Structures"
        ],
        correctAnswer: "Array"
      },
      {
        question: "Which type of variables can have the same name in a different function?",
        options: [
          "Global variables",
          "Static variables",
          "Function arguments",
          "Both static variables and Function arguments"
        ],
        correctAnswer: "Both static variables and Function arguments"
      },
      {
        question: "Arguments that take input by user before running a program are called?",
        options: [
          "Main function arguments",
          "Main arguments",
          "Command-Line arguments",
          "Parameterized arguments"
        ],
        correctAnswer: "Command-Line arguments"
      },
      {
        question: "What is the maximum number of arguments that can be passed in a single function?",
        options: [
          "127",
          "253",
          "361",
          "No limits in number of arguments"
        ],
        correctAnswer: "253"
      },
      {
        question: "An array of similar data types which themselves are a collection of dissimilar data type are ___________",
        options: [
          "Linked Lists",
          "Trees",
          "Array of Structure",
          "All of the mentioned"
        ],
        correctAnswer: "Array of Structure"
      },
      {
        question: "Comment on an array of the void data type.",
        options: [
          "It can store any data-type",
          "It only stores element of similar data type to first element",
          "It acquires the data type with the highest precision in it",
          "You cannot have an array of void data type"
        ],
        correctAnswer: "You cannot have an array of void data type"
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
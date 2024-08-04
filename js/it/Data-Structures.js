const quizData = [
    {
        "question": "How can we describe an array in the best possible way?",
        "options": [
          "The Array shows a hierarchical structure.",
          "Arrays are immutable.",
          "Container that stores the elements of similar types",
          "The Array is not a data structure"
        ],
        "correctAnswer": "Container that stores the elements of similar types"
      },
      {
        "question": "Which of the following is the correct way of declaring an array?",
        "options": [
          "int javatpoint[10];",
          "int javatpoint;",
          "javatpoint{20};",
          "array javatpoint[10];"
        ],
        "correctAnswer": "int javatpoint[10];"
      },
      {
        "question": "How can we initialize an array in C language?",
        "options": [
          "int arr[2]=(10, 20)",
          "int arr(2)={10, 20}",
          "int arr[2] = {10, 20}",
          "int arr(2) = (10, 20)"
        ],
        "correctAnswer": "int arr[2] = {10, 20}"
      },
      {
        "question": "Which of the following is the advantage of the array data structure?",
        "options": [
          "Elements of mixed data types can be stored.",
          "Easier to access the elements in an array",
          "Index of the first element starts from 1.",
          "Elements of an array cannot be sorted"
        ],
        "correctAnswer": "Easier to access the elements in an array"
      },
      {
        "question": "Which of the following highly uses the concept of an array?",
        "options": [
          "Binary Search tree",
          "Caching",
          "Spatial locality",
          "Scheduling of Processes"
        ],
        "correctAnswer": "Spatial locality"
      },
      {
        "question": "Which of the following is the disadvantage of the array?",
        "options": [
          "Stack and Queue data structures can be implemented through an array.",
          "Index of the first element in an array can be negative",
          "Wastage of memory if the elements inserted in an array are lesser than the allocated size",
          "Elements can be accessed sequentially."
        ],
        "correctAnswer": "Wastage of memory if the elements inserted in an array are lesser than the allocated size"
      },
      {
        "question": "What is the output of the below code?\n#include <stdio.h>\nint main()\n{\n   int arr[5]={10,20,30,40,50};\n   printf(\"%d\", arr[5]);\n\n    return 0;\n}",
        "options": [
          "Garbage value",
          "10",
          "50",
          "None of the above"
        ],
        "correctAnswer": "Garbage value"
      },
      {
        "question": "Which one of the following is the size of int arr[9] assuming that int is of 4 bytes?",
        "options": [
          "9",
          "36",
          "35",
          "None of the above"
        ],
        "correctAnswer": "36"
      },
      {
        "question": "Which one of the following is the process of inserting an element in the stack?",
        "options": [
          "Insert",
          "Add",
          "Push",
          "None of the above"
        ],
        "correctAnswer": "Push"
      },
      {
        "question": "When the user tries to delete the element from the empty stack then the condition is said to be a ____",
        "options": [
          "Underflow",
          "Garbage collection",
          "Overflow",
          "None of the above"
        ],
        "correctAnswer": "Underflow"
      },
      {
        "question": "If the size of the stack is 10 and we try to add the 11th element in the stack then the condition is known as___",
        "options": [
          "Underflow",
          "Garbage collection",
          "Overflow",
          "None of the above"
        ],
        "correctAnswer": "Overflow"
      },
      {
        "question": "Which one of the following is not the application of the stack data structure",
        "options": [
          "String reversal",
          "Recursion",
          "Backtracking",
          "Asynchronous data transfer"
        ],
        "correctAnswer": "Asynchronous data transfer"
      },
      {
        "question": "Which data structure is mainly used for implementing the recursive algorithm?",
        "options": [
          "Queue",
          "Stack",
          "Binary tree",
          "Linked list"
        ],
        "correctAnswer": "Stack"
      },
      {
        "question": "Which data structure is required to convert the infix to prefix notation?",
        "options": [
          "Stack",
          "Linked list",
          "Binary tree",
          "Queue"
        ],
        "correctAnswer": "Stack"
      },
      {
        "question": "Which of the following is the infix expression?",
        "options": [
          "A+B*C",
          "+A*BC",
          "ABC+*",
          "None of the above"
        ],
        "correctAnswer": "A+B*C"
      },
      {
        "question": "Which of the following is the prefix form of A+B*C?",
        "options": [
          "A+(BC*)",
          "+AB*C",
          "ABC+*",
          "+A*BC"
        ],
        "correctAnswer": "+A*BC"
      },
      {
        "question": "Which one of the following is not the correct statement for a stack data structure?",
        "options": [
          "Arrays can be used to implement the stack",
          "Stack follows FIFO",
          "Elements are stored in a sequential manner",
          "Top of the stack contains the last inserted element"
        ],
        "correctAnswer": "Stack follows FIFO"
      },
      {
        "question": "If the elements '1', '2', '3' and '4' are added in a stack, so what would be the order for the removal?",
        "options": [
          "1234",
          "2134",
          "4321",
          "None of the above"
        ],
        "correctAnswer": "4321"
      },
      {
        "question": "What is the outcome of the prefix expression +, -, *, 3, 2, /, 8, 4, 1?",
        "options": [
          "12",
          "11",
          "5",
          "4"
        ],
        "correctAnswer": "5"
      },
      {
        "question": "The minimum number of stacks required to implement a Stack is __",
        "options": [
          "1",
          "3",
          "2",
          "5"
        ],
        "correctAnswer": "2"
      },
      {
        "question": "Which one of the following node is considered the top of the stack if the stack is implemented using the linked list?",
        "options": [
          "Last inserted node",
          "First inserted node",
          "Random node",
          "None of the above"
        ],
        "correctAnswer": "First inserted node"
      },
      {
        "question": "Which one of the following is not the operation of the stack?",
        "options": [
          "Push",
          "Add",
          "Pop",
          "None of the above"
        ],
        "correctAnswer": "Add"
      },
      {
        "question": "Which of the following is the correct way to declare and initialize an array?",
        "options": [
          "int arr[5] = {1, 2, 3, 4, 5}",
          "int arr[] = {1, 2, 3, 4, 5}",
          "int arr[5] = {1 2 3 4 5}",
          "int arr[5] = (1, 2, 3, 4, 5)"
        ],
        "correctAnswer": "int arr[5] = {1, 2, 3, 4, 5}"
      },
      {
        "question": "What will be the output of the following C code?\n#include <stdio.h>\nint main()\n{\n  int arr[] = {1, 2, 3, 4, 5};\n  int *ptr = arr;\n  printf(\"%d\", ++*ptr);\n  return 0;\n}",
        "options": [
          "1",
          "2",
          "Compilation Error",
          "Runtime Error"
        ],
        "correctAnswer": "2"
      },
      {
        "question": "Which of the following is true about the sizeof() operator in C?",
        "options": [
          "It returns the size of the datatype.",
          "It returns the size in bytes of the variable.",
          "It returns the size in bits of the variable.",
          "It returns the size of the variable in KB."
        ],
        "correctAnswer": "It returns the size in bytes of the variable."
      },
      {
        "question": "Which of the following is not a primary data type in C?",
        "options": [
          "int",
          "float",
          "string",
          "char"
        ],
        "correctAnswer": "string"
      },
      {
        "question": "Which of the following is used to represent a character in C?",
        "options": [
          "char",
          "Character",
          "chr",
          "c"
        ],
        "correctAnswer": "char"
      },
      {
        "question": "Which of the following is a loop statement in C?",
        "options": [
          "if",
          "switch",
          "for",
          "define"
        ],
        "correctAnswer": "for"
      },
      {
        "question": "Which of the following is used to take input from the user in C?",
        "options": [
          "scanf",
          "print",
          "input",
          "read"
        ],
        "correctAnswer": "scanf"
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
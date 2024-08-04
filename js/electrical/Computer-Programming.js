const quizData = [
  {
    "question": "What are programming tokens?",
    "options": [
      "Instructions given to the computer.",
      "Identifiers used for variable names.",
      "The smallest units of a program that have meaning.",
      "Comments added to explain code to humans."
    ],
    "correctAnswer": "The smallest units of a program that have meaning."
  },
  {
    "question": "What are operators in programming?",
    "options": [
      "People who operate computers.",
      "Special symbols that perform operations on operands.",
      "Sections of code that execute specific tasks.",
      "Devices used to input data into the computer."
    ],
    "correctAnswer": "Special symbols that perform operations on operands."
  },
  {
    "question": "What is Formatted Input/Output in programming?",
    "options": [
      "Printing text without any formatting.",
      "Input and output operations using specific formatting codes.",
      "Adding decorative elements to code.",
      "Printing code on paper for documentation."
    ],
    "correctAnswer": "Input and output operations using specific formatting codes."
  },
  {
    "question": "What is Unformatted Input/Output in programming?",
    "options": [
      "Input/output without any structure or organization.",
      "Printing code without indentation.",
      "Using formatting codes without proper syntax.",
      "Interacting with the computer using natural language."
    ],
    "correctAnswer": "Input/output without any structure or organization."
  },
  {
    "question": "What is Structured Programming?",
    "options": [
      "A way to write programs without using variables.",
      "Programming using only basic statements and loops.",
      "Programming using only one type of data structure.",
      "A programming paradigm that promotes modular and organized code."
    ],
    "correctAnswer": "A programming paradigm that promotes modular and organized code."
  },
  {
    "question": "What is Object-Oriented Programming (OOP)?",
    "options": [
      "A programming style that focuses on using a single data type.",
      "Programming using only objects and classes.",
      "A programming paradigm that emphasizes the use of objects and their interactions.",
      "Programming that doesn't use any functions."
    ],
    "correctAnswer": "A programming paradigm that emphasizes the use of objects and their interactions."
  },
  {
    "question": "What is an algorithm in programming?",
    "options": [
      "A list of programming keywords.",
      "A set of instructions to assemble hardware.",
      "A sequence of steps to solve a problem.",
      "A type of data structure."
    ],
    "correctAnswer": "A sequence of steps to solve a problem."
  },
  {
    "question": "What is a flowchart?",
    "options": [
      "A diagram that shows the flow of data in a computer.",
      "A representation of the binary code of a program.",
      "A type of programming language.",
      "A diagram that visually represents the steps of an algorithm."
    ],
    "correctAnswer": "A diagram that visually represents the steps of an algorithm."
  },
  {
    "question": "What are data types in programming?",
    "options": [
      "Types of computers used for data processing.",
      "The different ways to format data on a screen.",
      "Categories of data that determine the type of operations that can be performed.",
      "Sizes of memory chips used in computers."
    ],
    "correctAnswer": "Categories of data that determine the type of operations that can be performed."
  },
  {
    "question": "What are variables in programming?",
    "options": [
      "Values that don't change.",
      "Reserved keywords in programming.",
      "Names used to represent data storage locations.",
      "Functions used to manipulate data."
    ],
    "correctAnswer": "Names used to represent data storage locations."
  },
  {
    "question": "What are constants in programming?",
    "options": [
      "Values that can change during program execution.",
      "Reserved keywords for mathematical operations.",
      "Names given to variables.",
      "Values that remain the same throughout program execution."
    ],
    "correctAnswer": "Values that remain the same throughout program execution."
  },
  {
    "question": "What are Arithmetic Operators in programming?",
    "options": [
      "Operators used for complex mathematical operations.",
      "Operators used to perform text manipulation.",
      "Operators used for comparing values.",
      "Operators used for basic mathematical operations."
    ],
    "correctAnswer": "Operators used for basic mathematical operations."
  },
  {
    "question": "What is an Assignment Operator in programming?",
    "options": [
      "An operator used to compare values.",
      "An operator used to perform logical operations.",
      "An operator used to assign a value to a variable.",
      "An operator used for string manipulation."
    ],
    "correctAnswer": "An operator used to assign a value to a variable."
  },
  {
    "question": "What are Logical and Comparison Operations in programming?",
    "options": [
      "Operations used to manipulate images.",
      "Operations used to control program flow.",
      "Operations used to combine different data types.",
      "Operations used to evaluate conditions and compare values."
    ],
    "correctAnswer": "Operations used to evaluate conditions and compare values."
  },
  {
    "question": "What is an Input Statement in programming?",
    "options": [
      "A statement that prints text on the screen.",
      "A statement that performs arithmetic operations.",
      "A statement that reads data from the user or a file.",
      "A statement that declares variables."
    ],
    "correctAnswer": "A statement that reads data from the user or a file."
  },
  {
    "question": "What is an Output Statement in programming?",
    "options": [
      "A statement that calculates complex equations.",
      "A statement that displays text or data on the screen.",
      "A statement that defines data types.",
      "A statement that controls program flow."
    ],
    "correctAnswer": "A statement that displays text or data on the screen."
  },
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
        {
          question: "Who invented OOP?",
          options: [
            "Andrea Ferro",
            "Adele Goldberg",
            "Alan Kay",
            "Dennis Ritchie"
          ],
          correctAnswer: "Alan Kay"
        },
        {
          question: "Which is not a feature of OOP in general definitions?",
          options: [
            "Efficient Code",
            "Code reusability",
            "Modularity",
            "Duplicate/Redundant data"
          ],
          correctAnswer: "Duplicate/Redundant data"
        },
        {
          question: "Which was the first purely object oriented programming language developed?",
          options: [
            "Kotlin",
            "SmallTalk",
            "Java",
            "C++"
          ],
          correctAnswer: "SmallTalk"
        },
        {
          question: "When did OOP concept first come into the picture?",
          options: [
            "1980’s",
            "1995",
            "1970’s",
            "1993"
          ],
          correctAnswer: "1970’s"
        },
        {
          question: "Which feature of OOP indicates code reusability?",
          options: [
            "Abstraction",
            "Polymorphism",
            "Encapsulation",
            "Inheritance"
          ],
          correctAnswer: "Inheritance"
        },
        {
          question: "Which header file is required in C++ to use OOP?",
          options: [
            "OOP can be used without using any header file",
            "stdlib.h",
            "iostream.h",
            "stdio.h"
          ],
          correctAnswer: "OOP can be used without using any header file"
        },
        {
          question: "Why is Java considered a Partially OOP language?",
          options: [
            "It allows code to be written outside classes",
            "It supports usual declaration of primitive data types",
            "It does not support pointers",
            "It doesn’t support all types of inheritance"
          ],
          correctAnswer: "It supports usual declaration of primitive data types"
        },
        {
          question: "Which among the following doesn’t come under OOP concept?",
          options: [
            "Data hiding",
            "Message passing",
            "Platform independent",
            "Data binding"
          ],
          correctAnswer: "Platform independent"
        },
        {
          question: "Which is the correct syntax of inheritance?",
          options: [
            "class base_classname :access derived_classname{ /*define class body*/ };",
            "class derived_classname : access base_classname{ /*define class body*/ };",
            "class derived_classname : base_classname{ /*define class body*/ };",
            "class base_classname : derived_classname{ /*define class body*/ };"
          ],
          correctAnswer: "class derived_classname : access base_classname{ /*define class body*/ };"
        },
        
        {
          question: "The feature by which one object can interact with another object is _____________",
          options: [
            "Message reading",
            "Message Passing",
            "Data transfer",
            "Data Binding"
          ],
          correctAnswer: "Message Passing"
        },
        {
          question: "Which is true for a pure OOP language?",
          options: [
            "The language should follow at least 1 feature of OOP",
            "The language must follow only 3 features of OOP",
            "The language must follow all the rules of OOP",
            "The language should follow 3 or more features of OOP"
          ],
          correctAnswer: "The language must follow all the rules of OOP"
        },
        {
          question: "How many types of access specifiers are provided in OOP (C++)?",
          options: [
            "4",
            "3",
            "2",
            "1"
          ],
          correctAnswer: "3"
        },
        {
          question: "In multilevel inheritance, which is the most significant feature of OOP used?",
          options: [
            "Code efficiency",
            "Code readability",
            "Flexibility",
            "Code reusability"
          ],
          correctAnswer: "Code reusability"
        },
        {
          question: "What is encapsulation in OOP?",
          options: [
            "It is a way of combining various data members and member functions that operate on those data members into a single unit",
            "It is a way of combining various data members and member functions into a single unit which can operate on any data",
            "It is a way of combining various data members into a single unit",
            "It is a way of combining various member functions into a single unit"
          ],
          correctAnswer: "It is a way of combining various data members and member functions that operate on those data members into a single unit"
        },
        {
          question: "Which of the following is not true about polymorphism?",
          options: [
            "Helps in redefining the same functionality",
            "Increases overhead of function definition always",
            "It is feature of OOP",
            "Ease in readability of program"
          ],
          correctAnswer: "Increases overhead of function definition always"
        },
        {
          question: "What is an abstraction in object-oriented programming?",
          options: [
            "Hiding the implementation and showing only the features",
            "Hiding the important data",
            "Hiding the implementation",
            "Showing the important data"
          ],
          correctAnswer: "Hiding the implementation and showing only the features"
        },
        {
          question: "Which among the following can show polymorphism?",
          options: [
            "Overloading &&",
            "Overloading <<",
            "Overloading ||",
            "Overloading +="
          ],
          correctAnswer: "Overloading <<"
        },
        {
          question: "In which access should a constructor be defined, so that an object of the class can be created in any function?",
          options: [
            "Any access specifier will work",
            "Private",
            "Public",
            "Protected"
          ],
          correctAnswer: "Public"
        },
        
        {
          question: "The copy constructors can be used to ________",
          options: [
            "Copy an object so that it can be passed to another primitive type variable",
            "Copy an object for type casting",
            "Copy an object so that it can be passed to a function",
            "Copy an object so that it can be passed to a class"
          ],
          correctAnswer: "Copy an object so that it can be passed to a function"
        },
        {
          question: "Which among the following represents the correct constructor syntax?",
          options: [
            "–classname()",
            "classname()",
            "()classname",
            "~classname()"
          ],
          correctAnswer: "classname()"
        },
        {
          question: "What happens when an object is passed by reference?",
          options: [
            "Destructor is called at the end of the function",
            "Destructor is called when called explicitly",
            "Destructor is not called",
            "Destructor is called when the function is out of scope"
          ],
          correctAnswer: "Destructor is not called"
        },
        {
          question: "Which access specifier is usually used for data members of a class?",
          options: [
            "Protected",
            "Private",
            "Public",
            "Default"
          ],
          correctAnswer: "Private"
        },
        {
          question: "How to access data members of a class?",
          options: [
            "Dot, arrow, or direct call",
            "Dot operator",
            "Arrow operator",
            "Dot or arrow as required"
          ],
          correctAnswer: "Dot or arrow as required"
        },
        {
          question: "Which feature of OOP reduces the use of nested classes?",
          options: [
            "Inheritance",
            "Binding",
            "Abstraction",
            "Encapsulation"
          ],
          correctAnswer: "Inheritance"
        },
        {
          question: "Which keyword among the following can be used to declare an array of objects in Java?",
          options: [
            "allocate",
            "arr",
            "new",
            "create"
          ],
          correctAnswer: "new"
        },
        {
          question: "Which operator can be used to free the memory allocated for an object in C++?",
          options: [
            "Unallocate",
            "Free()",
            "Collect",
            "Delete"
          ],
          correctAnswer: "Delete"
        },
        {
          question: "Which of the following best describes the member function overriding?",
          options: [
            "Member functions having the same name in the derived class only",
            "Member functions having the same name and different signature inside the main function",
            "Member functions having the same name in base and derived classes",
            "Member functions having the same name in the base class only"
          ],
          correctAnswer: "Member functions having the same name in base and derived classes"
        },
        {
          question: "Encapsulation and abstraction differ as ____________",
          options: [
            "Hiding and hiding respectively",
            "Binding and hiding respectively",
            "Hiding and binding respectively",
            "Can be used any way"
          ],
          correctAnswer: "Binding and hiding respectively"
        },
        {
          question: "Which feature in OOP is used to allocate additional functions to a predefined operator in any language?",
          options: [
            "Function Overloading",
            "Function Overriding",
            "Operator Overloading",
            "Operator Overriding"
          ],
          correctAnswer: "Operator Overloading"
        },
        {
          question: "Which type of inheritance supports runtime inheritance?",
          options: [
            "Language independency",
            "Multiple inheritance",
            "Compile-time",
            "Runtime"
          ],
          correctAnswer: "Runtime"
        },
        {
          question: "Which of the following is true for HTML?",
          options: [
            "Browser displays only body part",
            "Browser displays only header part",
            "Browser displays body and header both",
            "None of the above"
          ],
          correctAnswer: "Browser displays body and header both"
        },
        {
          question: "URL includes",
          options: [
            "Protocol type",
            "Path of web resource",
            "Domain Name and Port Number",
            "All of above"
          ],
          correctAnswer: "All of above"
        },
        {
          question: "Which of the following software is not a web server?",
          options: [
            "Apache",
            "Internet Information Services (IIS)",
            "Mongoose",
            "Python"
          ],
          correctAnswer: "Python"
        },
        {
          question: "In HTML, colour code #FF7F3F represents a color in which intensity levels of primary colors are",
          options: [
            "Red = 255, Green = 127 and Blue = 63",
            "Blue = 255, Green = 127 and Red = 63",
            "Green = 255, Blue = 127 and Red = 63",
            "Invalid color code"
          ],
          correctAnswer: "Red = 255, Green = 127 and Blue = 63"
        },
        {
          question: "In Internet communication, ‘‘cookie’’ is used for",
          options: [
            "storing authentication information at server side for entire session",
            "storing authentication information at client side for entire session",
            "detecting intrusion at client side for entire session",
            "detecting intrusion at server side for entire session"
          ],
          correctAnswer: "storing authentication information at server side for entire session"
        },
        {
          question: "Which of the following is not system software?",
          options: [
            "WinZip",
            "Compiler",
            "Virtual Machine",
            "YACC"
          ],
          correctAnswer: "WinZip"
        },
        {
          question: "Which of the following E-commerce model is also a part of E-governance?",
          options: [
            "B2B",
            "G2C",
            "B2C",
            "C2C"
          ],
          correctAnswer: "G2C"
        },
        {
          question: "A cross-compiler is a",
          options: [
            "compiler for object oriented languages",
            "compiler for JAVA written in C",
            "compiler that can generate machine codes for other platform",
            "compiler for non-procedural languages"
          ],
          correctAnswer: "compiler for non-procedural languages"
        },
        {
          question: "Basic XML can be described as:",
          options: [
            "A hierarchical structure of tagged elements, attributes and text.",
            "All the HTML tags plus a set of new XML only tags.",
            "Object-oriented structure of rows and columns.",
            "Processing instructions (PIs) for text data."
          ],
          correctAnswer: "A hierarchical structure of tagged elements, attributes and text."
        },
        {
          question: "A client _______ a service.",
          options: [
            "requests",
            "provides",
            "a or b",
            "a and b"
          ],
          correctAnswer: "requests"
        },
        {
          question: "A server _______ a service.",
          options: [
            "requests",
            "provides",
            "a or b",
            "a and b"
          ],
          correctAnswer: "provides"
        },
        {
          question: "WiFi is a short name for ___________",
          options: [
            "Wired Fidelity",
            "Wireless Fidelity",
            "Wireless Frequency",
            "None of above"
          ],
          correctAnswer: "Wireless Fidelity"
        },
        {
          question: "Responsibility of implementation of IT/ITeS Policy lies with",
          options: [
            "State Technology park Unit",
            "Ministry of IT at State and Center",
            "Director (IT) in consultation with DST",
            "Industrial Commissioner"
          ],
          correctAnswer: "Ministry of IT at State and Center"
        },
        {
          question: "In India Subject to a ceiling of Rs. 25 crores, Capital Subsidy for Horizontal IT/ITeS Parks shall be",
          options: [
            "10% of fixed capital investment (excluding the cost of land)",
            "Rs. 200 per sq. ft. for built-up area",
            "25% of fixed capital investment (excluding the cost of land)",
            "Rs. 300 per sq. ft. for built-up area"
          ],
          correctAnswer: "25% of fixed capital investment (excluding the cost of land)"
        },
        {
          question: "In As per IT/ITeS Policy (2016-21), term BPO refers to",
          options: [
            "Business Process Outsourcing",
            "Business Process Outcomes",
            "Best Processing Outcomes",
            "Business Practices and Outcomes"
          ],
          correctAnswer: "Business Process Outsourcing"
        },
        {
          question: "In India, Which of the following is not CORRECT about “DigiLocker”?",
          options: [
            "Signing for DigiLocker requires an individual’s mobile number",
            "DigiLocker is a platform for issuance and verification of documents & certificates in a digital way, thus eliminating the use of physical documents.",
            "Organizations registered with DigiLocker can store electronic copies of documents/certificates directly into citizens’s lockers.",
            "Citizens can download e-documents but can not upload any document in their accounts."
          ],
          correctAnswer: "Citizens can download e-documents but can not upload any document in their accounts."
        },
        {
          question: "To change an IP address to xxxx@yyyy.zzzz, we should use the _______ protocol",
          options: [
            "TELNET",
            "DNS",
            "NVT",
            "none of the above"
          ],
          correctAnswer: "DNS"
        },
        {
          question: "Internet is",
          options: [
            "a local computer network",
            "a world wide network of computers",
            "an interconnected network of computers",
            "a world wide interconnected network of computers which use a common protocol to communicate with one another"
          ],
          correctAnswer: "a world wide interconnected network of computers which use a common protocol to communicate with one another"
        },
        {
          question: "Each computer connected to the internet must",
          options: [
            "be an IBM PC",
            "have a unique IP address",
            "be internet compatible",
            "have a modem connection"
          ],
          correctAnswer: "have a unique IP address"
        },
        {
          question: "To change xxxx@yyyy.edu to an IP address, we should use the _______ domain in the DNS protocol.",
          options: [
            "generic",
            "country",
            "inverse",
            "none of the above"
          ],
          correctAnswer: "generic"
        },
        {
          question: "IP address is currently",
          options: [
            "4 bytes long",
            "available in plenty",
            "6 bytes long",
            "not assigned as it is all used up"
          ],
          correctAnswer: "4 bytes long"
        },
        {
          question: "To change xxxx@yyyy.zzzz.us to an IP address, we should use the _______ domain in the DNS protocol",
          options: [
            "generic",
            "country",
            "inverse",
            "none of the above"
          ],
          correctAnswer: "country"
        },
        {
          question: "IP addresses are converted to",
          options: [
            "a binary string",
            "alphanumeric string",
            "a hierarchy of domain names",
            "a hexadecimal string"
          ],
          correctAnswer: "a hierarchy of domain names"
        },
        {
          question: "To change an IP address to xxxx@yyyy.edu, we should use the _______ domain in the DNS protocol.",
          options: [
            "generic",
            "country",
            "inverse",
            "none of the above"
          ],
          correctAnswer: "inverse"
        },
        {
          question: "Internet addresses must always have at least (i) a country name or organization type (ii) internet service provider’s name (iii) name of organization (iv) name of individual (v) type of organization",
          options: [
            "i, ii, iii",
            "ii, iii, iv",
            "i, iii",
            "ii, iii, iv, v"
          ],
          correctAnswer: "ii, iii, iv, v"
        },
        {
          question: "By Electronic Commerce we mean:",
          options: [
            "Commerce of electronic goods",
            "Commerce which depends on electronics",
            "Commerce which is based on the use of internet",
            "Commerce which is based on transactions using computers connected by telecommunication network"
          ],
          correctAnswer: "Commerce which is based on transactions using computers connected by telecommunication network"
        },
        {
          question: "A query may include a _______ that specifies the fields from the matching documents to return.",
          options: [
            "selection",
            "projection",
            "union",
            "none of the mentioned"
          ],
          correctAnswer: "b"
        },
        {
          question: "Point out the correct statement.",
          options: [
            "Secondary indexes allow applications to store a view of a portion of the collection in an efficient data structure",
            "MongoDB has full support for secondary indexes",
            "Most indexes store an ordered representation of all values of a field or a group of fields",
            "All of the mentioned"
          ],
          correctAnswer: "b"
        },
        {
          question: "MongoDB stores all documents in _______",
          options: [
            "tables",
            "collections",
            "rows",
            "all of the mentioned"
          ],
          correctAnswer: "b"
        },
        {
          question: "In MongoDB _______ operations modify the data of a single collection.",
          options: [
            "CRUD",
            "GRID",
            "READ",
            "All of the mentioned"
          ],
          correctAnswer: "a"
        },
        {
          question: "Point out the wrong statement.",
          options: [
            "Indexes cannot enforce uniqueness in collection",
            "CRUD stands for create, read, update, and delete",
            "CRUD application is the most simplest application",
            "All of the mentioned"
          ],
          correctAnswer: "a"
        },
        {
          question: "Which of the following operation adds a new document to the users collection?",
          options: [
            "add",
            "insert",
            "truncate",
            "drop"
          ],
          correctAnswer: "b"
        },
        {
          question: "Which of the following preference determines how the client direct read operations to the set?",
          options: [
            "read",
            "write",
            "update",
            "delete"
          ],
          correctAnswer: "a"
        },
        {
          question: "Applications can also control the behavior of write operations using _______ concern.",
          options: [
            "read",
            "write",
            "truncate",
            "all of the mentioned"
          ],
          correctAnswer: "b"
        },
        {
          question: "MongoDB process collection of documents using _______ operations.",
          options: [
            "Hbase",
            "Hive",
            "Map-reduce",
            "None of the mentioned"
          ],
          correctAnswer: "c"
        },
        {
          question: "Which of the following pipeline is used for aggregation in MongoDB?",
          options: [
            "data processing",
            "information processing",
            "knowledge processing",
            "none of the mentioned"
          ],
          correctAnswer: "a"
        },
        {
          question: "Which one of the following is correct syntax for opening a file?",
          options: [
              "a) FILE *fopen(const *filename, const char *mode)",
              "b) FILE *fopen(const *filename)",
              "c) FILE *open(const *filename, const char *mode)",
              "d) FILE open(const*filename)"
          ],
          correctAnswer: "a"
      },
      {
          question: "What is the function of the mode ‘w+’?",
          options: [
              "a) create text file for writing, discard previous contents if any",
              "b) create text file for update, discard previous contents if any",
              "c) create text file for writing, do not discard previous contents if any",
              "d) create text file for update, do not discard previous contents if any"
          ],
          correctAnswer: "b"
      },
      {
          question: "If the mode includes b after the initial letter, what does it indicates?",
          options: [
              "a) text file",
              "b) big text file",
              "c) binary file",
              "d) blueprint text"
          ],
          correctAnswer: "c"
      },
      {
          question: "fflush(NULL) flushes all ____________",
          options: [
              "a) input streams",
              "b) output streams",
              "c) previous contents",
              "d) appended text"
          ],
          correctAnswer: "b"
      },
      {
          question: "_____removes the named file, so that a subsequent attempt to open it will fail.",
          options: [
              "a) remove(const *filename)",
              "b) remove(filename)",
              "c) remove()",
              "d) fclose(filename)"
          ],
          correctAnswer: "a"
      },
      {
          question: "What is the function of FILE *tmpfile(void)?",
          options: [
              "a) creates a temporary file of mode “wb+”",
              "b) creates a temporary file of mode “wb”",
              "c) creates a temporary file of mode ” w”",
              "d) creates a temporary file of mode “w+”"
          ],
          correctAnswer: "a"
      },
      {
          question: "What does tmpfile() return when it could not create the file?",
          options: [
              "a) stream and NULL",
              "b) only stream",
              "c) only NULL",
              "d) does not return anything"
          ],
          correctAnswer: "a"
      },
      {
          question: "Choose the right statement for fscanf() and scanf()",
          options: [
              "a) fscanf() can read from standard input whereas scanf() specifies a stream from which to read",
              "b) fscanf() can specifies a stream from which to read whereas scanf() can read only from standard input",
              "c) fscanf() and scanf() have no difference in their functions",
              "d) fscanf() and scanf() can read from specified stream"
          ],
          correctAnswer: "b"
      },
      {
          question: "EOF is an integer type defined in stdio. and has a value ____________",
          options: [
              "a) 1",
              "b) 0",
              "c) NULL",
              "d) – 1"
          ],
          correctAnswer: "d"
      },
      {
          question: "fwrite() can be used only with files that are opened in binary mode.",
          options: [
              "a) true",
              "b) false"
          ],
          correctAnswer: "a"
      },
      {
        question: "Which functions is declared in <errno. h>?",
        options: [
            "a) fseek()",
            "b) ftell()",
            "c) ferror()",
            "d) fsetpos()"
        ],
        correctAnswer: "c"
    },
    {
        question: "setvbuf() and setbuf() function controls buffering for the stream.",
        options: [
            "a) true",
            "b) false"
        ],
        correctAnswer: "a"
    },
    {
        question: "The functions vprintf(), vfprintf(), and vsprintf() are not equivalent to the corresponding printf() functions except the variable argument list.",
        options: [
            "a) true",
            "b) false"
        ],
        correctAnswer: "b"
    },
    {
        question: "The______function reads atmost one less than the number of characters specified by size from the given stream and it is stored in the string str.",
        options: [
            "a) fget()",
            "b) fgets()",
            "c) fput()",
            "d) fputs()"
        ],
        correctAnswer: "b"
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
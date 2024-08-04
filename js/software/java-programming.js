const quizData = [
    {
        "question": "Who invented Java Programming?",
        "options": [
          "Guido van Rossum",
          "James Gosling",
          "Dennis Ritchie",
          "Bjarne Stroustrup"
        ],
        "correctAnswer": "James Gosling",
        "explanation": "Java programming was developed by James Gosling at Sun Microsystems in 1995. James Gosling is well known as the father of Java."
      },
      {
        "question": "Which statement is true about Java?",
        "options": [
          "Java is a sequence-dependent programming language",
          "Java is a code dependent programming language",
          "Java is a platform-dependent programming language",
          "Java is a platform-independent programming language"
        ],
        "correctAnswer": "Java is a platform-independent programming language",
        "explanation": "Java is called ‘Platform Independent Language’ as it primarily works on the principle of ‘compile once, run everywhere’."
      },
      {
        "question": "Which component is used to compile, debug and execute the java programs?",
        "options": [
          "JRE",
          "JIT",
          "JDK",
          "JVM"
        ],
        "correctAnswer": "JDK",
        "explanation": "JDK is a core component of Java Environment and provides all the tools, executables and binaries required to compile, debug and execute a Java Program."
      },
      {
        "question": "Which one of the following is not a Java feature?",
        "options": [
          "Object-oriented",
          "Use of pointers",
          "Portable",
          "Dynamic and Extensible"
        ],
        "correctAnswer": "Use of pointers",
        "explanation": "Pointers is not a Java feature. Java provides an efficient abstraction layer for developing without using a pointer in Java. Features of Java Programming are Portable, Architectural Neutral, Object-Oriented, Robust, Secure, Dynamic and Extensible, etc."
      },
      {
        "question": "Which of these cannot be used for a variable name in Java?",
        "options": [
          "Identifier & Keyword",
          "Identifier",
          "Keyword",
          "None of the mentioned"
        ],
        "correctAnswer": "Keyword",
        "explanation": "Keywords are specially reserved words that can not be used for naming a user-defined variable, for example: class, int, for, etc."
      },
      {
        "question": "What is the extension of java code files?",
        "options": [
          ".js",
          ".txt",
          ".class",
          ".java"
        ],
        "correctAnswer": ".java",
        "explanation": "Java files have .java extension."
      },
      {
        "question": "Which environment variable is used to set the java path?",
        "options": [
          "MAVEN_Path",
          "JavaPATH",
          "JAVA",
          "JAVA_HOME"
        ],
        "correctAnswer": "JAVA_HOME",
        "explanation": "JAVA_HOME is used to store a path to the java installation."
      },
      {
        "question": "Which of the following is not an OOPS concept in Java?",
        "options": [
          "Polymorphism",
          "Inheritance",
          "Compilation",
          "Encapsulation"
        ],
        "correctAnswer": "Compilation",
        "explanation": "There are 4 OOPS concepts in Java. Inheritance, Encapsulation, Polymorphism and Abstraction."
      },
      {
        "question": "What is not the use of “this” keyword in Java?",
        "options": [
          "Referring to the instance variable when a local variable has the same name",
          "Passing itself to the method of the same class",
          "Passing itself to another method",
          "Calling another constructor in constructor chaining"
        ],
        "correctAnswer": "Passing itself to the method of the same class",
        "explanation": "\"this\" is an important keyword in java. It helps to distinguish between local variable and variables passed in the method as parameters."
      },
      {
        "question": "Which of these is a type of polymorphism in Java Programming?",
        "options": [
          "Multiple polymorphism",
          "Compile time polymorphism",
          "Multilevel polymorphism",
          "Execution time polymorphism"
        ],
        "correctAnswer": "Compile time polymorphism",
        "explanation": "There are two types of polymorphism in Java. Compile time polymorphism (overloading) and runtime polymorphism (overriding)."
      },
      {
        "question": "What is Truncation in Java?",
        "options": [
          "Floating-point value assigned to a Floating type",
          "Floating-point value assigned to an integer type",
          "Integer value assigned to floating type",
          "Integer value assigned to floating type"
        ],
        "correctAnswer": "Floating-point value assigned to an integer type",
        "explanation": "None."
      },
      {
        "question": "What is the extension of compiled java classes?",
        "options": [
          ".txt",
          ".js",
          ".class",
          ".java"
        ],
        "correctAnswer": ".class",
        "explanation": "The compiled java files have .class extension."
      },
      {
        "question": "Which exception is thrown when java is out of memory?",
        "options": [
          "MemoryError",
          "OutOfMemoryError",
          "MemoryOutOfBoundsException",
          "MemoryFullException"
        ],
        "correctAnswer": "OutOfMemoryError",
        "explanation": "The Xms flag has no default value, and Xmx typically has a default value of 256MB. A common use for these flags is when you encounter a java.lang.OutOfMemoryError."
      },
      {
        "question": "Which of these are selection statements in Java?",
        "options": [
          "break",
          "continue",
          "for()",
          "if()"
        ],
        "correctAnswer": "if()",
        "explanation": "Continue and break are jump statements, and for is a looping statement."
      },
      {
        "question": "Which of these keywords is used to define interfaces in Java?",
        "options": [
          "intf",
          "Intf",
          "interface",
          "Interface"
        ],
        "correctAnswer": "interface",
        "explanation": "interface keyword is used to define interfaces in Java."
      },
      {
        "question": "Which of the following is a superclass of every class in Java?",
        "options": [
          "ArrayList",
          "Abstract class",
          "Object class",
          "String"
        ],
        "correctAnswer": "Object class",
        "explanation": "Object class is superclass of every class in Java."
      },
      {
        "question": "Which of these keywords are used for the block to be examined for exceptions?",
        "options": [
          "check",
          "throw",
          "catch",
          "try"
        ],
        "correctAnswer": "try",
        "explanation": "try is used for the block that needs to checked for exception."
      },
      {
        "question": "Which one of the following is not an access modifier?",
        "options": [
          "Protected",
          "Void",
          "Public",
          "Private"
        ],
        "correctAnswer": "Void",
        "explanation": "Public, private, protected and default are the access modifiers."
      },
      {
        "question": "What requires less resources?",
        "options": [
          "Thread",
          "Process",
          "Thread and Process",
          "Neither Thread nor Process"
        ],
        "correctAnswer": "Thread",
        "explanation": "Thread is a lightweight and requires less resources to create and exist in the process. Thread shares the process resources."
      },
      {
        "question": "What does not prevent JVM from terminating?",
        "options": [
          "Process",
          "Daemon Thread",
          "User Thread",
          "JVM Thread"
        ],
        "correctAnswer": "Daemon Thread",
        "explanation": "Daemon thread runs in the background and does not prevent JVM from terminating. Child of daemon thread is also daemon thread."
      },
      {
        "question": "What decides thread priority?",
        "options": [
          "Process",
          "Process scheduler",
          "Thread",
          "Thread scheduler"
        ],
        "correctAnswer": "Thread scheduler",
        "explanation": "Thread scheduler decides the priority of the thread execution. This cannot guarantee that higher priority thread will be executed first, it depends on thread scheduler implementation that is OS dependent."
      },
      {
        "question": "What is true about time slicing?",
        "options": [
          "Time slicing is OS service that allocates CPU time to available runnable thread",
          "Time slicing is the process to divide the available CPU time to available runnable thread",
          "Time slicing depends on its implementation in OS",
          "Time slicing allocates more resources to thread"
        ],
        "correctAnswer": "Time slicing is the process to divide the available CPU time to available runnable thread",
        "explanation": "Time slicing is the process to divide the available CPU time to available runnable thread."
      },
      {
        "question": "Deadlock is a situation when thread is waiting for other thread to release acquired object.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Deadlock is java programming situation where one thread waits for an object lock that is acquired by other thread and vice-versa."
      },
      {
        "question": "What should not be done to avoid deadlock?",
        "options": [
          "Avoid using multiple threads",
          "Avoid hold several locks at once",
          "Execute foreign code while holding a lock",
          "Use interruptible locks"
        ],
        "correctAnswer": "Execute foreign code while holding a lock",
        "explanation": "To avoid deadlock situation in Java programming do not execute foreign code while holding a lock."
      },
      {
        "question": "What is true about threading?",
        "options": [
          "run() method calls start() method and runs the code",
          "run() method creates new thread",
          "run() method can be called directly without start() method being called",
          "start() method creates new thread and calls code written in run() method"
        ],
        "correctAnswer": "start() method creates new thread and calls code written in run() method",
        "explanation": "start() eventually calls run() method. Start() method creates thread and calls the code written inside run method."
      },
      {
        "question": "Which of the following is a correct constructor for thread?",
        "options": [
          "Thread(Runnable a, String str)",
          "Thread(int priority)",
          "Thread(Runnable a, int priority)",
          "Thread(Runnable a, ThreadGroup t)"
        ],
        "correctAnswer": "Thread(Runnable a, String str)",
        "explanation": "Thread(Runnable a, String str) is a valid constructor for thread. Thread() is also a valid constructor."
      },
      {
        "question": "Which of the following stops execution of a thread?",
        "options": [
          "Calling SetPriority() method on a Thread object",
          "Calling notify() method on an object",
          "Calling wait() method on an object",
          "Calling read() method on an InputStream object"
        ],
        "correctAnswer": "Calling notify() method on an object",
        "explanation": "notify() wakes up a single thread which is waiting for this object."
      },
      {
        "question": "Which of the following will ensure the thread will be in running state?",
        "options": [
          "yield()",
          "notify()",
          "wait()",
          "Thread.killThread()"
        ],
        "correctAnswer": "wait()",
        "explanation": "wait() always causes the current thread to go into the object’s wait pool. Hence, using this in a thread will keep it in running state."
      },
      {
        "question": "Which of these keywords are used to implement synchronization?",
        "options": [
          "synchronize",
          "syn",
          "synch",
          "synchronized"
        ],
        "correctAnswer": "synchronized",
        "explanation": "None."
      },
      {
        "question": "Which of this method is used to avoid polling in Java?",
        "options": [
          "wait()",
          "notify()",
          "notifyAll()",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "Polling is a usually implemented by looping in CPU is wastes CPU time, one thread being executed depends on other thread output and the other thread depends on the response on the data given to the first thread. In such situation CPU time is wasted, in Java this is avoided by using methods wait(), notify() and notifyAll()."
      },
      {
        "question": "Which of these method is used to tell the calling thread to give up a monitor and go to sleep until some other thread enters the same monitor?",
        "options": [
          "wait()",
          "notify()",
          "notifyAll()",
          "sleep()"
        ],
        "correctAnswer": "wait()",
        "explanation": "wait() method is used to tell the calling thread to give up a monitor and go to sleep until some other thread enters the same monitor. This helps in avoiding polling and minimizes CPU idle time."
      },
      {
        "question": "Which of these method wakes up the first thread that called wait()?",
        "options": [
          "wake()",
          "notify()",
          "start()",
          "notifyAll()"
        ],
        "correctAnswer": "notify()",
        "explanation": "None."
      },
      {
        "question": "Which of these method wakes up all the threads?",
        "options": [
          "wakeAll()",
          "notify()",
          "start()",
          "notifyAll()"
        ],
        "correctAnswer": "notifyAll()",
        "explanation": "notifyAll() wakes up all the threads that called wait() on the same object. The highest priority thread will run first."
      },
      {
        "question": "What is synchronization in reference to a thread?",
        "options": [
          "It’s a process of handling situations when two or more threads need access to a shared resource",
          "It’s a process by which many thread are able to access same shared resource simultaneously",
          "It’s a process by which a method is able to access many different threads simultaneously",
          "It’s a method that allow too many threads to access any information the require"
        ],
        "correctAnswer": "It’s a process of handling situations when two or more threads need access to a shared resource",
        "explanation": "When two or more threads need to access the same shared resource, they need some way to ensure that the resource will be used by only one thread at a time, the process by which this is achieved is called synchronization"
      },
      {
        "question": "What does AWT stands for?",
        "options": [
          "All Window Tools",
          "All Writing Tools",
          "Abstract Window Toolkit",
          "Abstract Writing Toolkit"
        ],
        "correctAnswer": "Abstract Window Toolkit",
        "explanation": "AWT stands for Abstract Window Toolkit, it is used by applets to interact with the user."
      },
      {
        "question": "Which of these is used to perform all input & output operations in Java?",
        "options": [
          "streams",
          "Variables",
          "classes",
          "Methods"
        ],
        "correctAnswer": "streams",
        "explanation": "Like in any other language, streams are used for input and output operations."
      },
      {
        "question": "Which of these is a type of stream in Java?",
        "options": [
          "Integer stream",
          "Short stream",
          "Byte stream",
          "Long stream"
        ],
        "correctAnswer": "Byte stream",
        "explanation": "Java defines only two types of streams – Byte stream and character stream."
      },
      {
        "question": "Which of these classes are used by Byte streams for input and output operation?",
        "options": [
          "InputStream",
          "InputOutputStream",
          "Reader",
          "All of the mentioned"
        ],
        "correctAnswer": "InputStream",
        "explanation": "Byte stream uses InputStream and OutputStream classes for input and output operation."
      },
      {
        "question": "Which of these classes are used by character streams for input and output operations?",
        "options": [
          "InputStream",
          "Writer",
          "ReadStream",
          "InputOutputStream"
        ],
        "correctAnswer": "Writer",
        "explanation": "Character streams uses Writer and Reader classes for input & output operations."
      },
      {
        "question": "Which of these class is used to read from byte array?",
        "options": [
          "InputStream",
          "BufferedInputStream",
          "ArrayInputStream",
          "ByteArrayInputStream"
        ],
        "correctAnswer": "ByteArrayInputStream",
        "explanation": "None."
      },
      {
        "question": "Which exception is thrown by read() method?",
        "options": [
          "IOException",
          "InterruptedException",
          "SystemException",
          "SystemInputException"
        ],
        "correctAnswer": "IOException",
        "explanation": "read method throws IOException."
      },
      {
        "question": "Which of these is used to read a string from the input stream?",
        "options": [
          "get()",
          "getLine()",
          "read()",
          "readLine()"
        ],
        "correctAnswer": "read()",
        "explanation": "None."
      },
      {
        "question": "Which of these class is used to read characters and strings in Java from console?",
        "options": [
          "BufferedReader",
          "StringReader",
          "BufferedStreamReader",
          "InputStreamReader"
        ],
        "correctAnswer": "BufferedReader",
        "explanation": "None."
      },
      {
        "question": "Which of these class is implemented by FilterInputStream class?",
        "options": [
          "InputStream",
          "InputOutputStream",
          "BufferedInputStream",
          "SequenceInputStream"
        ],
        "correctAnswer": "InputStream",
        "explanation": "FileInputStream implements InputStream."
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
const quizData = [
    {
        "question": "In real time operating system ____________",
        "options": [
          "all processes have the same priority",
          "a task must be serviced by its deadline period",
          "process scheduling can be done only once",
          "kernel is not required"
        ],
        "correctAnswer": "a task must be serviced by its deadline period",
        "explanation": "None."
      },
      {
        "question": "Hard real time operating system has ______________ jitter than a soft real time operating system.",
        "options": [
          "less",
          "more",
          "equal",
          "none of the mentioned"
        ],
        "correctAnswer": "less",
        "explanation": "Jitter is the undesired deviation from the true periodicity."
      },
      {
        "question": "For real time operating systems, interrupt latency should be ____________",
        "options": [
          "minimal",
          "maximum",
          "zero",
          "dependent on the scheduling"
        ],
        "correctAnswer": "minimal",
        "explanation": "Interrupt latency is the time duration between the generation of interrupt and execution of its service."
      },
      {
        "question": "In rate monotonic scheduling ____________",
        "options": [
          "shorter duration job has higher priority",
          "longer duration job has higher priority",
          "priority does not depend on the duration of the job",
          "none of the mentioned"
        ],
        "correctAnswer": "shorter duration job has higher priority",
        "explanation": "None."
      },
      {
        "question": "In which scheduling certain amount of CPU time is allocated to each process?",
        "options": [
          "earliest deadline first scheduling",
          "proportional share scheduling",
          "equal share scheduling",
          "none of the mentioned"
        ],
        "correctAnswer": "proportional share scheduling",
        "explanation": "None."
      },
      {
        "question": "The problem of priority inversion can be solved by ____________",
        "options": [
          "priority inheritance protocol",
          "priority inversion protocol",
          "both priority inheritance and inversion protocol",
          "none of the mentioned"
        ],
        "correctAnswer": "priority inheritance protocol",
        "explanation": "None."
      },
      {
        "question": "Time duration required for scheduling dispatcher to stop one process and start another is known as ____________",
        "options": [
          "process latency",
          "dispatch latency",
          "execution latency",
          "interrupt latency"
        ],
        "correctAnswer": "dispatch latency",
        "explanation": "None."
      },
      {
        "question": "Time required to synchronous switch from the context of one thread to the context of another thread is called?",
        "options": [
          "threads fly-back time",
          "jitter",
          "context switch time",
          "none of the mentioned"
        ],
        "correctAnswer": "context switch time",
        "explanation": "None."
      },
      {
        "question": "Which one of the following is a real time operating system?",
        "options": [
          "RTLinux",
          "VxWorks",
          "Windows CE",
          "All of the mentioned"
        ],
        "correctAnswer": "All of the mentioned",
        "explanation": "None."
      },
      {
        "question": "VxWorks is centered around ____________",
        "options": [
          "wind microkernel",
          "linux kernel",
          "unix kernel",
          "none of the mentioned"
        ],
        "correctAnswer": "wind microkernel",
        "explanation": "None."
      },
      {
        "question": "What is the disadvantage of real addressing mode?",
        "options": [
          "there is a lot of cost involved",
          "time consumption overhead",
          "absence of memory protection between processes",
          "restricted access to memory locations by processes"
        ],
        "correctAnswer": "absence of memory protection between processes",
        "explanation": "None."
      },
      {
        "question": "Preemptive, priority based scheduling guarantees ____________",
        "options": [
          "hard real time functionality",
          "soft real time functionality",
          "protection of memory",
          "none of the mentioned"
        ],
        "correctAnswer": "soft real time functionality",
        "explanation": "None."
      },
      {
        "question": "Real time systems must have ____________",
        "options": [
          "preemptive kernels",
          "non preemptive kernels",
          "preemptive kernels or non preemptive kernels",
          "neither preemptive nor non preemptive kernels"
        ],
        "correctAnswer": "preemptive kernels",
        "explanation": "None."
      },
      {
        "question": "What is Event latency?",
        "options": [
          "the amount of time an event takes to occur from when the system started",
          "the amount of time from the event occurrence till the system stops",
          "the amount of time from event occurrence till the event crashes",
          "the amount of time that elapses from when an event occurs to when it is serviced."
        ],
        "correctAnswer": "the amount of time that elapses from when an event occurs to when it is serviced.",
        "explanation": "None."
      },
      {
        "question": "Interrupt latency refers to the period of time ____________",
        "options": [
          "from the occurrence of an event to the arrival of an interrupt",
          "from the occurrence of an event to the servicing of an interrupt",
          "from arrival of an interrupt to the start of the interrupt service routine",
          "none of the mentioned"
        ],
        "correctAnswer": "from arrival of an interrupt to the start of the interrupt service routine",
        "explanation": "None."
      },
      {
        "question": "Real time systems need to __________ the interrupt latency.",
        "options": [
          "minimize",
          "maximize",
          "not bother about",
          "none of the mentioned"
        ],
        "correctAnswer": "minimize",
        "explanation": "None."
      },
      {
        "question": "The amount of time required for the scheduling dispatcher to stop one process and start another is known as ______________",
        "options": [
          "event latency",
          "interrupt latency",
          "dispatch latency",
          "context switch"
        ],
        "correctAnswer": "dispatch latency",
        "explanation": "None."
      },
      {
        "question": "The most effective technique to keep dispatch latency low is to ____________",
        "options": [
          "provide non preemptive kernels",
          "provide preemptive kernels",
          "make it user programmed",
          "run less number of processes at a time"
        ],
        "correctAnswer": "provide preemptive kernels",
        "explanation": "None."
      },
      {
        "question": "Priority inversion is solved by use of _____________",
        "options": [
          "priority inheritance protocol",
          "two phase lock protocol",
          "time protocol",
          "all of the mentioned"
        ],
        "correctAnswer": "priority inheritance protocol",
        "explanation": "None."
      },
      {
        "question": "In a real time system the computer results ____________",
        "options": [
          "must be produced within a specific deadline period",
          "may be produced at any time",
          "may be correct",
          "all of the mentioned"
        ],
        "correctAnswer": "must be produced within a specific deadline period",
        "explanation": "None."
      },
      {
        "question": "In a safety critical system, incorrect operation ____________",
        "options": [
          "does not affect much",
          "causes minor problems",
          "causes major and serious problems",
          "none of the mentioned"
        ],
        "correctAnswer": "causes major and serious problems",
        "explanation": "None."
      },
      {
        "question": "Antilock brake systems, flight management systems, pacemakers are examples of ____________",
        "options": [
          "safety critical system",
          "hard real time system",
          "soft real time system",
          "safety critical system and hard real time system"
        ],
        "correctAnswer": "safety critical system and hard real time system",
        "explanation": "None."
      },
      {
        "question": "In a ______ real time system, it is guaranteed that critical real time tasks will be completed within their deadlines.",
        "options": [
          "soft",
          "hard",
          "critical",
          "none of the mentioned"
        ],
        "correctAnswer": "hard",
        "explanation": "None."
      },
      {
        "question": "Some of the properties of real time systems include ____________",
        "options": [
          "single purpose",
          "inexpensively mass produced",
          "small size",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "None."
      },
      {
        "question": "The amount of memory in a real time system is generally ____________",
        "options": [
          "less compared to PCs",
          "high compared to PCs",
          "same as in PCs",
          "they do not have any memory"
        ],
        "correctAnswer": "less compared to PCs",
        "explanation": "None."
      },
      {
        "question": "What is the priority of a real time task?",
        "options": [
          "must degrade over time",
          "must not degrade over time",
          "may degrade over time",
          "none of the mentioned"
        ],
        "correctAnswer": "must not degrade over time",
        "explanation": "None."
      },
      {
        "question": "Memory management units ____________",
        "options": [
          "increase the cost of the system",
          "increase the power consumption of the system",
          "increase the time required to complete an operation",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "None."
      },
      {
        "question": "The technique in which the CPU generates physical addresses directly is known as ____________",
        "options": [
          "relocation register method",
          "real addressing",
          "virtual addressing",
          "none of the mentioned"
        ],
        "correctAnswer": "real addressing",
        "explanation": "None."
      },
      {
        "question": "Earliest deadline first algorithm assigns priorities according to ____________",
        "options": [
          "periods",
          "deadlines",
          "burst times",
          "none of the mentioned"
        ],
        "correctAnswer": "deadlines",
        "explanation": "None."
      },
      {
        "question": "A process P1 has a period of 50 and a CPU burst of t1 = 25, P2 has a period of 80 and a CPU burst of 35. The total CPU utilization is ____________",
        "options": [
          "0.90",
          "0.74",
          "0.94",
          "0.80"
        ],
        "correctAnswer": "0.94",
        "explanation": "None."
      },
      {
        "question": "A process P1 has a period of 50 and a CPU burst of t1 = 25, P2 has a period of 80 and a CPU burst of 35., the priorities of P1 and P2 are?",
        "options": [
          "remain the same throughout",
          "keep varying from time to time",
          "may or may not be change",
          "none of the mentioned"
        ],
        "correctAnswer": "keep varying from time to time",
        "explanation": "None."
      },
      {
        "question": "A process P1 has a period of 50 and a CPU burst of t1 = 25, P2 has a period of 80 and a CPU burst of 35., can the two processes be scheduled using the EDF algorithm without missing their respective deadlines?",
        "options": [
          "Yes",
          "No",
          "Maybe",
          "None of the mentioned"
        ],
        "correctAnswer": "Yes",
        "explanation": "None."
      },
      {
        "question": "Using EDF algorithm practically, it is impossible to achieve 100 percent utilization due to __________",
        "options": [
          "the cost of context switching",
          "interrupt handling",
          "power consumption",
          "all of the mentioned"
        ],
        "correctAnswer": "the cost of context switching",
        "explanation": "None."
      },
      {
        "question": "T shares of time are allocated among all processes out of N shares in __________ scheduling algorithm.",
        "options": [
          "rate monotonic",
          "proportional share",
          "earliest deadline first",
          "none of the mentioned"
        ],
        "correctAnswer": "proportional share",
        "explanation": "None."
      },
      {
        "question": "If there are a total of T = 100 shares to be divided among three processes, A, B and C. A is assigned 50 shares, B is assigned 15 shares and C is assigned 20 shares.\nA will have ______ percent of the total processor time.",
        "options": [
          "20",
          "15",
          "50",
          "none of the mentioned"
        ],
        "correctAnswer": "50",
        "explanation": "None."
      },
      {
        "question": "If there are a total of T = 100 shares to be divided among three processes, A, B and C. A is assigned 50 shares, B is assigned 15 shares and C is assigned 20 shares.\nB will have ______ percent of the total processor time.",
        "options": [
          "20",
          "15",
          "50",
          "none of the mentioned"
        ],
        "correctAnswer": "15",
        "explanation": "None."
      },
      {
        "question": "If there are a total of T = 100 shares to be divided among three processes, A, B and C. A is assigned 50 shares, B is assigned 15 shares and C is assigned 20 shares.\nC will have ______ percent of the total processor time.",
        "options": [
          "20",
          "15",
          "50",
          "none of the mentioned"
        ],
        "correctAnswer": "20",
        "explanation": "None."
      },
      {
        "question": "If there are a total of T = 100 shares to be divided among three processes, A, B and C. A is assigned 50 shares, B is assigned 15 shares and C is assigned 20 shares.\nIf a new process D requested 30 shares, the admission controller would __________",
        "options": [
          "allocate 30 shares to it",
          "deny entry to D in the system",
          "all of the mentioned",
          "none of the mentioned"
        ],
        "correctAnswer": "deny entry to D in the system",
        "explanation": "None."
      },
      {
        "question": "To schedule the processes, they are considered _________",
        "options": [
          "infinitely long",
          "periodic",
          "heavy weight",
          "light weight"
        ],
        "correctAnswer": "periodic",
        "explanation": "None."
      },
      {
        "question": "If the period of a process is ‘p’, then what is the rate of the task?",
        "options": [
          "p2",
          "2*p",
          "1/p",
          "p"
        ],
        "correctAnswer": "1/p",
        "explanation": "None."
      },
      {
        "question": "The scheduler admits a process using __________",
        "options": [
          "two phase locking protocol",
          "admission control algorithm",
          "busy wait polling",
          "none of the mentioned"
        ],
        "correctAnswer": "busy wait polling",
        "explanation": "None."
      },
      {
        "question": "The ____________ scheduling algorithm schedules periodic tasks using a static priority policy with preemption.",
        "options": [
          "earliest deadline first",
          "rate monotonic",
          "first cum first served",
          "priority"
        ],
        "correctAnswer": "rate monotonic",
        "explanation": "None."
      },
      {
        "question": "Rate monotonic scheduling assumes that the __________",
        "options": [
          "processing time of a periodic process is same for each CPU burst",
          "processing time of a periodic process is different for each CPU burst",
          "periods of all processes is the same",
          "none of the mentioned"
        ],
        "correctAnswer": "processing time of a periodic process is same for each CPU burst",
        "explanation": "None."
      },
      {
        "question": "In rate monotonic scheduling, a process with a shorter period is assigned __________",
        "options": [
          "a higher priority",
          "a lower priority",
          "higher & lower priority",
          "none of the mentioned"
        ],
        "correctAnswer": "a higher priority",
        "explanation": "None."
      },
      {
        "question": "There are two processes P1 and P2, whose periods are 50 and 100 respectively. P1 is assigned higher priority than P2. The processing times are t1 = 20 for P1 and t2 = 35 for P2. Is it possible to schedule these tasks so that each meets its deadline using Rate monotonic scheduling?",
        "options": [
          "yes",
          "no",
          "maybe",
          "none of the mentioned"
        ],
        "correctAnswer": "yes",
        "explanation": "None."
      },
      {
        "question": "If a set of processes cannot be scheduled by rate monotonic scheduling algorithm, then __________",
        "options": [
          "they can be scheduled by EDF algorithm",
          "they cannot be scheduled by EDF algorithm",
          "they cannot be scheduled by any other algorithm",
          "none of the mentioned"
        ],
        "correctAnswer": "they cannot be scheduled by any other algorithm",
        "explanation": "None."
      },
      {
        "question": "A process P1 has a period of 50 and a CPU burst of t1 = 25, P2 has a period of 80 and a CPU burst of 35. The total CPU utilization is?",
        "options": [
          "0.90",
          "0.74",
          "0.94",
          "0.80"
        ],
        "correctAnswer": "0.94",
        "explanation": "None."
      },
      {
        "question": "A process P1 has a period of 50 and a CPU burst of t1 = 25, P2 has a period of 80 and a CPU burst of 35. Can the processes be scheduled without missing the deadlines?",
        "options": [
          "Yes",
          "No",
          "Maybe",
          "None of the mentioned"
        ],
        "correctAnswer": "No",
        "explanation": "None."
      },
      {
        "question": "What is not true about a distributed system?",
        "options": [
          "It is a collection of processor",
          "All processors are synchronized",
          "They do not share memory",
          "None of the mentioned"
        ],
        "correctAnswer": "All processors are synchronized",
        "explanation": "None."
      },
      {
        "question": "What are the characteristics of processor in distributed system?",
        "options": [
          "They vary in size and function",
          "They are same in size and function",
          "They are manufactured with single purpose",
          "They are real-time devices"
        ],
        "correctAnswer": "They vary in size and function",
        "explanation": "None."
      },
      {
        "question": "What are the characteristics of a distributed file system?",
        "options": [
          "Its users, servers and storage devices are dispersed",
          "Service activity is not carried out across the network",
          "They have single centralized data repository",
          "There are multiple dependent storage devices"
        ],
        "correctAnswer": "Its users, servers and storage devices are dispersed",
        "explanation": "None."
      },
      {
        "question": "What is not a major reason for building distributed systems?",
        "options": [
          "Resource sharing",
          "Computation speedup",
          "Reliability",
          "Simplicity"
        ],
        "correctAnswer": "Simplicity",
        "explanation": "None."
      },
      {
        "question": "What are the types of distributed operating system?",
        "options": [
          "Network Operating system",
          "Zone based Operating system",
          "Level based Operating system",
          "All of the mentioned"
        ],
        "correctAnswer": "Network Operating system",
        "explanation": "None."
      },
      {
        "question": "What are characteristic of Network Operating Systems?",
        "options": [
          "Users are aware of multiplicity of machines",
          "They are transparent",
          "They are simple to use",
          "All of the mentioned"
        ],
        "correctAnswer": "Users are aware of multiplicity of machines",
        "explanation": "None."
      },
      {
        "question": "How is access to resources of various machines is done?",
        "options": [
          "Remote logging using ssh or telnet",
          "Zone are configured for automatic access",
          "FTP is not used",
          "All of the mentioned"
        ],
        "correctAnswer": "Remote logging using ssh or telnet",
        "explanation": "None."
      },
      {
        "question": "What are the characteristics of Distributed Operating system?",
        "options": [
          "Users are aware of multiplicity of machines",
          "Access is done like local resources",
          "Users are aware of multiplicity of machines",
          "They have multiple zones to access files"
        ],
        "correctAnswer": "Access is done like local resources",
        "explanation": "None."
      },
      {
        "question": "What are the characteristics of data migration?",
        "options": [
          "transfer data by entire file or immediate portion required",
          "transfer the computation rather than the data",
          "execute an entire process or parts of it at different sites",
          "none of the mentioned"
        ],
        "correctAnswer": "transfer data by entire file or immediate portion required",
        "explanation": "None."
      },
      {
        "question": "What are the characteristics of computation migration?",
        "options": [
          "transfer data by entire file or immediate portion required",
          "transfer the computation rather than the data",
          "execute an entire process or parts of it at different sites",
          "none of the mentioned"
        ],
        "correctAnswer": "transfer the computation rather than the data",
        "explanation": "None."
      },
      {
        "question": "What are the characteristics of process migration?",
        "options": [
          "transfer data by entire file or immediate portion required",
          "transfer the computation rather than the data",
          "execute an entire process or parts of it at different sites",
          "none of the mentioned"
        ],
        "correctAnswer": "execute an entire process or parts of it at different sites",
        "explanation": "None."
      },
      {
        "question": "What are the different ways in which clients and servers are dispersed across machines?",
        "options": [
          "Servers may not run on dedicated machines",
          "Servers and clients can be on same machines",
          "Distribution cannot be interposed between a OS and the file system",
          "OS cannot be distributed with the file system a part of that distribution"
        ],
        "correctAnswer": "Servers and clients can be on same machines",
        "explanation": "None."
      },
      {
        "question": "What are not the characteristics of a DFS?",
        "options": [
          "login transparency and access transparency",
          "Files need not contain information about their physical location",
          "No Multiplicity of users",
          "No Multiplicity if files"
        ],
        "correctAnswer": "No Multiplicity of users",
        "explanation": "None."
      },
      {
        "question": "What are characteristic of a DFS?",
        "options": [
          "Fault tolerance",
          "Scalability",
          "Heterogeneity of the system",
          "Upgradation"
        ],
        "correctAnswer": "Upgradation",
        "explanation": "None."
      },
      {
        "question": "What are the different ways file accesses take place?",
        "options": [
          "sequential access",
          "direct access",
          "indexed sequential access",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "None."
      },
      {
        "question": "Which is not a major component of a file system?",
        "options": [
          "Directory service",
          "Authorization service",
          "Shadow service",
          "System service"
        ],
        "correctAnswer": "Shadow service",
        "explanation": "None."
      },
      {
        "question": "What are the different ways mounting of the file system?",
        "options": [
          "boot mounting",
          "auto mounting",
          "explicit mounting",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "None."
      },
      {
        "question": "What is the advantage of caching in remote file access?",
        "options": [
          "Reduced network traffic by retaining recently accessed disk blocks",
          "Faster network access",
          "Copies of data creates backup automatically",
          "None of the mentioned"
        ],
        "correctAnswer": "Reduced network traffic by retaining recently accessed disk blocks",
        "explanation": "None."
      },
      {
        "question": "What is networked virtual memory?",
        "options": [
          "Caching",
          "Segmentation",
          "RAM disk",
          "None of the mentioned"
        ],
        "correctAnswer": "Caching",
        "explanation": "None."
      },
      {
        "question": "What are the examples of state information?",
        "options": [
          "opened files and their clients",
          "file descriptors and file handles",
          "current file position pointers",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "None."
      },
      {
        "question": "Which is not an example of state information?",
        "options": [
          "Mounting information",
          "Description of HDD space",
          "Session keys",
          "Lock status"
        ],
        "correctAnswer": "Description of HDD space",
        "explanation": "None."
      },
      {
        "question": "What is a stateless file server?",
        "options": [
          "It keeps tracks of states of different objects",
          "It maintains internally no state information at all",
          "It maintains some information in them",
          "None of the mentioned"
        ],
        "correctAnswer": "It maintains internally no state information at all",
        "explanation": "None."
      },
      {
        "question": "What are the characteristics of the stateless server?",
        "options": [
          "Easier to implement",
          "They are not fault-tolerant upon client or server failures",
          "They store all information file server",
          "They are redundant to keep data safe"
        ],
        "correctAnswer": "Easier to implement",
        "explanation": "None."
      },
      {
        "question": "Implementation of a stateless file server must not follow?",
        "options": [
          "Idempotency requirement",
          "Encryption of keys",
          "File locking mechanism",
          "Cache consistency"
        ],
        "correctAnswer": "Encryption of keys",
        "explanation": "None."
      },
      {
        "question": "What are the advantages of file replication?",
        "options": [
          "Improves availability & performance",
          "Decreases performance",
          "They are consistent",
          "Improves speed"
        ],
        "correctAnswer": "Improves availability & performance",
        "explanation": "None."
      },
      {
        "question": "What are characteristic of NFS protocol?",
        "options": [
          "Search for file within directory",
          "Read a set of directory entries",
          "Manipulate links and directories",
          "All of the mentioned"
        ],
        "correctAnswer": "All of the mentioned",
        "explanation": "None."
      },
      {
        "question": "What is the coherency of replicated data?",
        "options": [
          "All replicas are identical at all times",
          "Replicas are perceived as identical only at some points in time",
          "Users always read the most recent data in the replicas",
          "All of the mentioned"
        ],
        "correctAnswer": "All of the mentioned",
        "explanation": "None."
      },
      {
        "question": "What are the three popular semantic modes?",
        "options": [
          "Unix, Coherent & Session semantics",
          "Unix, Transaction & Session semantics",
          "Coherent, Transaction & Session semantics",
          "Session, Coherent semantics"
        ],
        "correctAnswer": "Unix, Transaction & Session semantics",
        "explanation": "None."
      },
      {
        "question": "What are the characteristics of Unix semantics?",
        "options": [
          "Easy to implement in a single processor system",
          "Data cached on a per process basis using write through case control",
          "Write-back enhances access performance",
          "All of the mentioned"
        ],
        "correctAnswer": "All of the mentioned",
        "explanation": "None."
      },
      {
        "question": "What are the characteristics of transaction semantics?",
        "options": [
          "Suitable for applications that are concerned about coherence of data",
          "The users of this model are interested in the atomicity property for their transaction",
          "Easy to implement in a single processor system",
          "Write-back enhances access performance"
        ],
        "correctAnswer": "The users of this model are interested in the atomicity property for their transaction",
        "explanation": "None."
      },
      {
        "question": "What are non characteristics of session semantics?",
        "options": [
          "Each client obtains a working copy from the server",
          "When file is closed, the modified file is copied to the file server",
          "The burden of coordinating file sharing is ignored by the system",
          "Easy to implement in a single processor system"
        ],
        "correctAnswer": "Easy to implement in a single processor system",
        "explanation": "None."
      },
      {
        "question": "The file once created can not be changed is called ___________",
        "options": [
          "immutable file",
          "mutex file",
          "mutable file",
          "none of the mentioned"
        ],
        "correctAnswer": "immutable file",
        "explanation": "None."
      },
      {
        "question": "_______ of the distributed file system are dispersed among various machines of distributed system.",
        "options": [
          "Clients",
          "Servers",
          "Storage devices",
          "All of the mentioned"
        ],
        "correctAnswer": "All of the mentioned",
        "explanation": "None."
      },
      {
        "question": "_______ is not possible in distributed file system.",
        "options": [
          "File replication",
          "Migration",
          "Client interface",
          "Remote access"
        ],
        "correctAnswer": "Migration",
        "explanation": "None."
      },
      {
        "question": "Which one of the following hides the location where in the network the file is stored?",
        "options": [
          "transparent distributed file system",
          "hidden distributed file system",
          "escaped distribution file system",
          "spy distributed file system"
        ],
        "correctAnswer": "transparent distributed file system",
        "explanation": "None."
      },
      {
        "question": "In a distributed file system, when a file’s physical storage location changes ___________",
        "options": [
          "file name need to be changed",
          "file name need not to be changed",
          "file’s host name need to be changed",
          "file’s local name need to be changed"
        ],
        "correctAnswer": "file name need not to be changed",
        "explanation": "None."
      },
      {
        "question": "In a distributed file system, _______ is mapping between logical and physical objects.",
        "options": [
          "client interfacing",
          "naming",
          "migration",
          "heterogeneity"
        ],
        "correctAnswer": "naming",
        "explanation": "None."
      },
      {
        "question": "In a distributed file system, a file is uniquely identified by ___________",
        "options": [
          "host name",
          "local name",
          "the combination of host name and local name",
          "none of the mentioned"
        ],
        "correctAnswer": "the combination of host name and local name",
        "explanation": "None."
      },
      {
        "question": "There is no need to establish and terminate a connection through open and close operation in ___________",
        "options": [
          "stateless file service",
          "stateful file service",
          "both stateless and stateful file service",
          "none of the mentioned"
        ],
        "correctAnswer": "stateless file service",
        "explanation": "None."
      },
      {
        "question": "In distributed file system, file name does not reveal the file’s ___________",
        "options": [
          "local name",
          "physical storage location",
          "both local name and physical storage location",
          "none of the mentioned"
        ],
        "correctAnswer": "physical storage location",
        "explanation": "None."
      },
      {
        "question": "Which one of the following is a distributed file system?",
        "options": [
          "andrew file system",
          "network file system",
          "novel network",
          "all of the mentioned"
        ],
        "correctAnswer": "all of the mentioned",
        "explanation": "None."
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
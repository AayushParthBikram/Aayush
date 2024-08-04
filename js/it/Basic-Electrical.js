const quizData = [
    {
        question: "Which of the following elements of electrical engineering cannot be analyzed using Ohm’s law?",
        options: [
          "Capacitors",
          "Inductors",
          "Transistors",
          "Resistance"
        ],
        correctAnswer: "Transistors"
      },
      {
        question: "What is constant for a charged spherical shell according to basic electrical energy?",
        options: [
          "Electrical potential outside the spherical shell",
          "Electrical potential inside the spherical shell",
          "Electrical field outside the spherical shell",
          "Electrical field inside the spherical shell"
        ],
        correctAnswer: "Electrical field inside the spherical shell"
      },
      {
        question: "Where does electro-static shielding occur in a charged spherical shell?",
        options: [
          "When electrical potential outside spherical shell is zero",
          "When electrical potential inside the spherical shell is zero",
          "When electrical field outside the spherical shell",
          "Electrical field inside the spherical shell"
        ],
        correctAnswer: "Electrical field inside the spherical shell"
      },
      {
        question: "Which of the following is a correct representation of peak value in an AC Circuit?",
        options: [
          "RMS value/Peak factor",
          "RMS value*Form factor",
          "RMS value/Form factor",
          "RMS value*Peak factor"
        ],
        correctAnswer: "RMS value*Peak factor"
      },
      {
        question: "Which of the following according to fundamentals of electrical energy is correct about alternating current?",
        options: [
          "Frequency is zero",
          "Magnitude changes with time",
          "Can be transported to larger distances with less loss in power",
          "Flows in both directions"
        ],
        correctAnswer: "Frequency is zero"
      },
      {
        question: "How many cycles will an AC signal make in 2 seconds if its frequency is 100 Hz?",
        options: [
          "50",
          "100",
          "150",
          "200"
        ],
        correctAnswer: "200"
      },
      {
        question: "What will be the direction of the drift velocity of electrons change with respect to the electric field?",
        options: [
          "Same as that of electric field",
          "Opposite to that of electric field",
          "Perpendicular to that of the electric field in a positive direction",
          "Perpendicular to that of the electric field in a negative direction"
        ],
        correctAnswer: "Opposite to that of electric field"
      },
      {
        question: "What will be the current density of metal if a current of 30A is passed through a cross-sectional area of 0.5m2?",
        options: [
          "7.5 A/m2",
          "15 A/m2",
          "60 A/m2",
          "120 A/m2"
        ],
        correctAnswer: "60 A/m2"
      },
      {
        question: "Which of the following will happen in a transformer when the number of secondary turns is greater than the number of primary turns?",
        options: [
          "The voltage gets stepped up",
          "The voltage gets stepped down",
          "The power gets stepped up",
          "The power gets stepped down"
        ],
        correctAnswer: "The voltage gets stepped up"
      },
      {
        question: "Which of the following is correct about the voltage transformation ratio in electrical engineering?",
        options: [
          "Ratio of number of primary turns to the number of secondary turns",
          "Ratio of induced emf in secondary to induced emf in primary",
          "Ratio of secondary current to the primary current",
          "Ratio of power in primary to power in secondary"
        ],
        correctAnswer: "Ratio of induced emf in secondary to induced emf in primary"
      },
      {
        question: "Which of the following according to the fundamentals of electrical engineering is correct about the induced emf in primary of transformer?",
        options: [
          "It is the ratio of primary turns to emf induced per turn",
          "It is the product of primary turns and emf induced per turn",
          "It is the ratio of secondary turns to emf induced per turn",
          "It is the product of secondary turns and emf induced per turn"
        ],
        correctAnswer: "It is the product of primary turns and emf induced per turn"
      },
      {
        question: "Which of the following current is drawn by the primary circuit of an ideal transformer when the secondary is open?",
        options: [
          "Secondary current",
          "Leakage current",
          "Magnetizing current",
          "Working on current"
        ],
        correctAnswer: "Magnetizing current"
      },
      {
        question: "What does positive power in an electrical element indicate?",
        options: [
          "Element is absorbing power",
          "Element is supplying power",
          "Element may absorb or supply power",
          "Element is neither absorbing nor supplying power"
        ],
        correctAnswer: "Element is absorbing power"
      },
      {
        question: "How does induce emf in DC motor react to supply voltage?",
        options: [
          "It will aid the supply voltage",
          "It will be double the supply voltage",
          "It will oppose the supply voltage",
          "It will be half of the supply voltage"
        ],
        correctAnswer: "It will oppose the supply voltage"
      },
      {
        question: "Which of the following type of circuits in electrical engineering cannot be analyzed using Ohm’s law?",
        options: [
          "Unilateral",
          "Bilateral",
          "Linear",
          "Conductors"
        ],
        correctAnswer: "Unilateral"
      },
      {
        question: "Which of the following according to KVL must be zero?",
        options: [
          "Algebraic sum of currents in closed-loop",
          "Algebraic sum of power in closed-loop",
          "Algebraic sum of losses in closed-loop",
          "Algebraic sum of voltages in closed-loop"
        ],
        correctAnswer: "Algebraic sum of voltages in closed-loop"
      },
      {
        question: "Batteries are generally connected in______",
        options: [
          "Series",
          "Parallel",
          "Either series or parallel",
          "Neither series nor parallel"
        ],
        correctAnswer: "Series"
      },
      {
        question: "In a _________ circuit, the total resistance is greater than the largest resistance in the circuit.",
        options: [
          "Series",
          "Parallel",
          "Either series or parallel",
          "Neither series nor parallel"
        ],
        correctAnswer: "Series"
      },
      {
        question: "In a ____________ circuit, the total resistance is smaller than the smallest resistance in the circuit.",
        options: [
          "Series",
          "Parallel",
          "Either series or parallel",
          "Neither series nor parallel"
        ],
        correctAnswer: "Parallel"
      },
      {
        question: "Which is the most cost efficient connection?",
        options: [
          "Series",
          "Parallel",
          "Either series or parallel",
          "Neither series nor parallel"
        ],
        correctAnswer: "Series"
      },
      {
        question: "What is the value of current if a 50C charge flows in a conductor over a period of 5 seconds?",
        options: [
          "5A",
          "10A",
          "15A",
          "20A"
        ],
        correctAnswer: "10A"
      },
      {
        question: "KCL deals with the conservation of?",
        options: [
          "Momentum",
          "Mass",
          "Potential Energy",
          "Charge"
        ],
        correctAnswer: "Charge"
      },
      {
        question: "KCL is applied at _________",
        options: [
          "Loop",
          "Node",
          "Both loop and node",
          "Neither loop nor node"
        ],
        correctAnswer: "Node"
      },
      {
        question: "KCL can be applied for __________",
        options: [
          "Planar networks",
          "Non-planar networks",
          "Both planar and non-planar",
          "Neither planar nor non-planar"
        ],
        correctAnswer: "Both planar and non-planar"
      },
      {
        question: "KVL deals with the conservation of?",
        options: [
          "Mass",
          "Momentum",
          "Charge",
          "Energy"
        ],
        correctAnswer: "Energy"
      },
      {
        question: "The sum of the voltages over any closed loop is equal to __________",
        options: [
          "0V",
          "Infinity",
          "1V",
          "2V"
        ],
        correctAnswer: "0V"
      },
      {
        question: "What is the basic law that has to be followed in order to analyze the circuit?",
        options: [
          "Newton’s laws",
          "Faraday’s laws",
          "Ampere’s laws",
          "Kirchhoff’s law"
        ],
        correctAnswer: "Kirchhoff’s law"
      },
      {
        question: "Every____________ is a ____________ but every __________ is not a __________",
        options: [
          "Mesh, loop, loop, mesh",
          "Loop, mesh, mesh, loop",
          "Loop, mesh, loop, mesh",
          "Mesh, loop, mesh, loop"
        ],
        correctAnswer: "Mesh, loop, loop, mesh"
      },
      {
        question: "KVL is applied in ____________",
        options: [
          "Mesh analysis",
          "Nodal analysis",
          "Both mesh and nodal",
          "Neither mesh nor nodal"
        ],
        correctAnswer: "Mesh analysis"
      },
      {
        question: "Statement (I): Linear system may have multiple equilibrium states.\n\n" +
                   "Statement (II): If a system is BIBO stable, it must also be zero-input or asymptotically stable.",
        options: [
          "Both Statement (I) and Statement (II) are individually true and Statement (II) is the correct explanation of Statement (I).",
          "Both Statement (I) and Statement (II) are individually true, but Statement (II) is not the correct explanation of Statement (I).",
          "Statement (I) is true, but Statement (II) is false.",
          "Statement (I) is false, but Statement (II) is true."
        ],
        correctAnswer: "Statement (I) is false, but Statement (II) is true."
      },
      {
        question: "A system is linear if and only if it satisfies",
        options: [
          "principle of additivity",
          "principle of homogeneity",
          "both (A) and (B) above",
          "neither (A) nor (B) above"
        ],
        correctAnswer: "both (A) and (B) above"
      },
      {
        question: "In a nonlinear control system, limit cycle is self-sustained oscillation of",
        options: [
          "variable amplitude",
          "variable frequency",
          "fixed frequency",
          "fixed frequency and amplitude"
        ],
        correctAnswer: "fixed frequency and amplitude"
      },
      {
        question: "A system is linear if and only if it satisfies",
        options: [
          "principle of superposition",
          "principle of homogeneity",
          "both (A) and (B) above",
          "neither (A) and (B) above"
        ],
        correctAnswer: "both (A) and (B) above"
      },
      {
        question: "In a nonlinear control system, limit cycle is self-sustained oscillation of",
        options: [
          "variable amplitude",
          "variable frequency",
          "fixed frequency",
          "fixed frequency and amplitude"
        ],
        correctAnswer: "fixed frequency and amplitude"
      },
      {
        question: "Which of the following is a characteristic of a linear system?",
        options: [
          "The output is proportional to the input",
          "The output is not proportional to the input",
          "The output is exponential",
          "The output is periodic"
        ],
        correctAnswer: "The output is proportional to the input"
      },
      {
        question: "In superposition theorem, when we consider the effect of one voltage source, all the other voltage sources are ____________",
        options: [
          "Shorted",
          "Opened",
          "Removed",
          "Undisturbed"
        ],
        correctAnswer: "Shorted"
      },
      {
        question: "In superposition theorem, when we consider the effect of one current source, all the other voltage sources are ____________",
        options: [
          "Shorted",
          "Opened",
          "Removed",
          "Undisturbed"
        ],
        correctAnswer: "Shorted"
      },
      {
        question: "In superposition theorem, when we consider the effect of one voltage source, all the other current sources are ____________",
        options: [
          "Shorted",
          "Opened",
          "Removed",
          "Undisturbed"
        ],
        correctAnswer: "Opened"
      },
      {
        question: "In superposition theorem, when we consider the effect of one current source, all the other current sources are ____________",
        options: [
          "Shorted",
          "Opened",
          "Removed",
          "Undisturbed"
        ],
        correctAnswer: "Opened"
      },
      {
        question: "Superposition theorem does not work for ________",
        options: [
          "Current",
          "Voltage",
          "Power",
          "Works for all: current, voltage and power"
        ],
        correctAnswer: "Power"
      },
      {
        question: "The Thevenin voltage is the__________",
        options: [
          "Open circuit voltage",
          "Short circuit voltage",
          "Open circuit and short circuit voltage",
          "Neither open circuit nor short circuit voltage"
        ],
        correctAnswer: "Open circuit voltage"
      },
      {
        question: "Thevenin resistance is found by ________",
        options: [
          "Shorting all voltage sources",
          "Opening all current sources",
          "Shorting all voltage sources and opening all current sources",
          "Opening all voltage sources and shorting all current sources"
        ],
        correctAnswer: "Shorting all voltage sources and opening all current sources"
      },
      {
        question: "Thevenin’s theorem is true for __________",
        options: [
          "Linear networks",
          "Non-Linear networks",
          "Both linear networks and nonlinear networks",
          "Neither linear networks nor non-linear networks"
        ],
        correctAnswer: "Linear networks"
      },
      {
        question: "In Thevenin’s theorem Vth is __________",
        options: [
          "Sum of two voltage sources",
          "A single voltage source",
          "Infinite voltage sources",
          "0"
        ],
        correctAnswer: "A single voltage source"
      },
      {
        question: "Vth is found across the ____________ terminals of the network.",
        options: [
          "Input",
          "Output",
          "Neither input nor output",
          "Either input or output"
        ],
        correctAnswer: "Output"
      },
      {
        question: "Which of the following is also known as the dual of Thevenin’s theorem?",
        options: [
          "Norton’s theorem",
          "Superposition theorem",
          "Maximum power transfer theorem",
          "Millman’s theorem"
        ],
        correctAnswer: "Norton’s theorem"
      },
      {
        question: "Can we use Thevenin’s theorem on a circuit containing a BJT?",
        options: [
          "Yes",
          "No",
          "Depends on the BJT",
          "Insufficient data provided"
        ],
        correctAnswer: "No"
      },
      {
        question: "The Norton current is the_______",
        options: [
          "Short circuit current",
          "Open circuit current",
          "Open circuit and short circuit current",
          "Neither open circuit nor short circuit current"
        ],
        correctAnswer: "Short circuit current"
      },
      {
        question: "Norton resistance is found by?",
        options: [
          "Shorting all voltage sources",
          "Opening all current sources",
          "Shorting all voltage sources and opening all current sources",
          "Opening all voltage sources and shorting all current sources"
        ],
        correctAnswer: "Shorting all voltage sources and opening all current sources"
      },
      {
        question: "Norton’s theorem is true for __________",
        options: [
          "Linear networks",
          "Non-Linear networks",
          "Both linear networks and nonlinear networks",
          "Neither linear networks nor non-linear networks"
        ],
        correctAnswer: "Linear networks"
      },
      {
        question: "In Norton’s theorem Isc is__________",
        options: [
          "Sum of two current sources",
          "A single current source",
          "Infinite current sources",
          "0"
        ],
        correctAnswer: "A single current source"
      },
      {
        question: "Isc is found across the ____________ terminals of the network.",
        options: [
          "Input",
          "Output",
          "Neither input nor output",
          "Either input or output"
        ],
        correctAnswer: "Output"
      },
      {
        question: "Which of the following is also known as the dual of Norton’s theorem?",
        options: [
          "Thevenin’s theorem",
          "Superposition theorem",
          "Maximum power transfer theorem",
          "Millman’s theorem"
        ],
        correctAnswer: "Thevenin’s theorem"
      },
      {
        question: "Can we use Norton’s theorem on a circuit containing a BJT?",
        options: [
          "Yes",
          "No",
          "Depends on the BJT",
          "Insufficient data provided"
        ],
        correctAnswer: "No"
      },
      {
        question: "In a series RLC circuit, the phase difference between the current in the capacitor and the current in the inductor is?",
        options: [
          "00",
          "900",
          "1800",
          "3600"
        ],
        correctAnswer: "00"
      },
      {
        question: "In a series RLC circuit, the phase difference between the current in the circuit and the voltage across the resistor is?",
        options: [
          "00",
          "900",
          "1800",
          "3600"
        ],
        correctAnswer: "00"
      },
      {
        question: "In a series RLC circuit, the phase difference between the current in the circuit and the voltage across the capacitor is?",
        options: [
          "00",
          "900",
          "1800",
          "3600"
        ],
        correctAnswer: "900"
      },
      {
        question: "_________ the resonant frequency, the current in the inductor lags the voltage in a series RLC circuit.",
        options: [
          "Above",
          "Below",
          "Equal to",
          "Depends on the circuit"
        ],
        correctAnswer: "Above"
      },
      {
        question: "_________ the resonant frequency, the current in the capacitor leads the voltage in a series RLC circuit.",
        options: [
          "Above",
          "Below",
          "Equal to",
          "Depends on the circuit"
        ],
        correctAnswer: "Below"
      },
      {
        question: "The reactive power equation (Pr) is?",
        options: [
          "Ieff2 (ωL)sin2(ωt+θ)",
          "Ieff2 (ωL)cos2(ωt+θ)",
          "Ieff2 (ωL)sin(ωt+θ)",
          "Ieff2 (ωL)cos(ωt+θ)"
        ],
        correctAnswer: "Ieff2 (ωL)sin2(ωt+θ)"
      },
      {
        question: "Reactive power is expressed in?",
        options: [
          "Watts (W)",
          "Volt Amperes Reactive (VAR)",
          "Volt Ampere (VA)",
          "No units"
        ],
        correctAnswer: "Volt Amperes Reactive (VAR)"
      },
      {
        question: "The expression of reactive power (Pr) is?",
        options: [
          "VeffImsinθ",
          "VmImsinθ",
          "VeffIeffsinθ",
          "VmIeffsinθ"
        ],
        correctAnswer: "VeffIeffsinθ"
      },
      {
        question: "The power factor is the ratio of ________ power to the ______ power.",
        options: [
          "average, apparent",
          "apparent, reactive",
          "reactive, average",
          "apparent, average"
        ],
        correctAnswer: "average, apparent"
      },
      {
        question: "The expression of true power (Ptrue) is?",
        options: [
          "Pasinθ",
          "Pacosθ",
          "Patanθ",
          "Pasecθ"
        ],
        correctAnswer: "Pacosθ"
      },
      {
        question: "The average power (Pavg) is expressed as?",
        options: [
          "Pasecθ",
          "Patanθ",
          "Pacosθ",
          "Pasinθ"
        ],
        correctAnswer: "Pacosθ"
      },
      {
        question: "The equation of reactive power is?",
        options: [
          "Pacosθ",
          "Pasecθ",
          "Pasinθ",
          "Patanθ"
        ],
        correctAnswer: "Pasinθ"
      },
      {
        question: "A sinusoidal voltage v = 50sinωt is applied to a series RL circuit. The current in the circuit is given by I = 25sin (ωt-53⁰). Determine the apparent power (VA).",
        options: [
          "620",
          "625",
          "630",
          "635"
        ],
        correctAnswer: "630"
      },
      {
        question: "A sinusoidal voltage v = 50sinωt is applied to a series RL circuit. The current in the circuit is given by I = 25sin (ωt-53⁰). Find the power factor.",
        options: [
          "0.4",
          "0.5",
          "0.6",
          "0.7"
        ],
        correctAnswer: "0.6"
      },
      {
        question: "A sinusoidal voltage v = 50sinωt is applied to a series RL circuit. The current in the circuit is given by I = 25sin (ωt-53⁰). Determine the average power.",
        options: [
          "365",
          "370",
          "375",
          "380"
        ],
        correctAnswer: "375"
      },
      {
        question: "Which of the following refers to a parallel circuit?",
        options: [
          "The current through each element is same",
          "The voltage across element is in proportion to it's resistance value",
          "The equivalent resistance is greater than any one of the resistors",
          "The current through any one element is less than the source current"
        ],
        correctAnswer: "The current through any one element is less than the source current"
      },
      {
        question: "In any A.C. circuit always",
        options: [
          "Apparent power is more than actual power",
          "Reactive power is more than apparent power",
          "Actual power is more than reactive power",
          "Reactive power is more than actual power"
        ],
        correctAnswer: "Apparent power is more than actual power"
      },
      {
        question: "The transient currents are associated with the",
        options: [
          "Changes in the stored energy in the inductors and capacitors",
          "Impedance of the circuit",
          "Applied voltage to the circuit",
          "Resistance of the circuit"
        ],
        correctAnswer: "Changes in the stored energy in the inductors and capacitors"
      },
      {
        question: "The inductance of a coil can be increased by",
        options: [
          "Increasing core length",
          "Decreasing the number of turns",
          "Decreasing the diameter of the former",
          "Choosing core material having high relative permeability"
        ],
        correctAnswer: "Choosing core material having high relative permeability"
      },
      {
        question: "Power factor of an electrical circuit is equal to",
        options: [
          "RZ/R",
          "Cosine of phase angle difference between current and voltage",
          "Ratio of useful current to total current Iwl",
          "All above"
        ],
        correctAnswer: "All above"
      },
      {
        question: "The 'time constant' of a series RC circuit is",
        options: [
          "RC/R",
          "RC/C",
          "1/RC",
          "RC/RC"
        ],
        correctAnswer: "RC/RC"
      },
      {
        question: "The power is measured in terms of decibels in case of",
        options: [
          "Electronic equipment",
          "Transformers",
          "Current transformers",
          "Auto transformers"
        ],
        correctAnswer: "Electronic equipment"
      },
      {
        question: "Inductance affects the direct current flow",
        options: [
          "Only at the time of turning off",
          "Only at the time of turning on",
          "At the time of turning on and off",
          "At all the time of operation"
        ],
        correctAnswer: "At the time of turning on and off"
      },
      {
        question: "The r.m.s. value of alternating current is given by steady (D.C.) current which when flowing through a given circuit for a given time produces",
        options: [
          "The more heat than produced by A.C. when flowing through the same circuit",
          "The same heat as produced by A.C. when flowing through the same circuit",
          "The less heat than produced by A.C. flowing through the same circuit",
          "None of the above"
        ],
        correctAnswer: "The same heat as produced by A.C. when flowing through the same circuit"
      },
      {
        question: "The ratio of active power to apparent power is known as factor.",
        options: [
          "Demand",
          "Load",
          "Power",
          "Form"
        ],
        correctAnswer: "Power"
      },
      {
        question: "What is the SI unit of conductivity?",
        options: [
          "Ωm",
          "(Ωm)-1",
          "Ω",
          "m"
        ],
        correctAnswer: "(Ωm)-1"
      },
      {
        question: "Which of the following expressions doesn’t represent the correct formula for Drift current density?",
        options: [
          "J=σE",
          "J=qnµE",
          "J=µE",
          "None"
        ],
        correctAnswer: "J=µE"
      },
      {
        question: "Does a semiconductor satisfy the ohm’s law?",
        options: [
          "True",
          "False"
        ],
        correctAnswer: "True"
      },
      {
        question: "In which range of temperature, freeze out point begins to occur?",
        options: [
          "Higher range",
          "Lower range",
          "Middle range",
          "None"
        ],
        correctAnswer: "Lower range"
      },
      {
        question: "Which of the following expression represents the correct formula for the conductivity in an intrinsic material?",
        options: [
          "ρ=e(μn+μp )ni",
          "σ=e(μn+μp )ni",
          "σ=1/(e(μn+μp )ni)",
          "ρ=1/(e(μn+μp )ni)"
        ],
        correctAnswer: "σ=e(μn+μp )ni"
      },
      {
        question: "What is the voltage difference if the current is 1mA and length and area is 2cm and 4cm2 respectively?(ρ=2Ωm)",
        options: [
          "0.025V",
          "25V",
          "0.25V",
          "None"
        ],
        correctAnswer: "None"
      },
      {
        question: "Is resistivity a function of temperature?",
        options: [
          "True",
          "False"
        ],
        correctAnswer: "True"
      },
      {
        question: "What is the electric field when the voltage applied is 5V and the length is 100cm?",
        options: [
          "0.5V/m",
          "5V/m",
          "50V/m",
          "None"
        ],
        correctAnswer: "50V/m"
      },
      {
        question: "Calculate the average random thermal energy at T=300K?",
        options: [
          "0.038eV",
          "3.8eV",
          "38eV",
          "0.38eV"
        ],
        correctAnswer: "0.038eV"
      },
      {
        question: "BJT is biased to _________",
        options: [
          "Work as a switch",
          "Prevent thermal runaway",
          "Increase DC collector current",
          "Operate it in the saturation region"
        ],
        correctAnswer: "Prevent thermal runaway"
      },
      {
        question: "Choose the incorrect option according to self bias circuit?",
        options: [
          "Voltage gain increases",
          "Stability factor is independent of collector resistance",
          "BJT can be used in either of the three configurations",
          "Excellent stability in collector current is achieved"
        ],
        correctAnswer: "Excellent stability in collector current is achieved"
      },
      {
        question: "Why is self bias circuit not used in IC amplifier?",
        options: [
          "To reduce power losses",
          "To reduce area used on the chip",
          "Stability factor reduces in the IC",
          "Voltage gain is reduced"
        ],
        correctAnswer: "To reduce area used on the chip"
      },
      {
        question: "Widlar current source was introduced to obtain a smaller output current.",
        options: [
          "True",
          "False"
        ],
        correctAnswer: "True"
      },
      {
        question: "The MOSFET combines the areas of _______ & _________",
        options: [
          "field effect & MOS technology",
          "semiconductor & TTL",
          "mos technology & CMOS technology",
          "none of the mentioned"
        ],
        correctAnswer: "field effect & MOS technology"
      },
      {
        question: "Which of the following terminals does not belong to the MOSFET?",
        options: [
          "Drain",
          "Gate",
          "Base",
          "Source"
        ],
        correctAnswer: "Base"
      },
      {
        question: "Choose the correct statement",
        options: [
          "MOSFET is a uncontrolled device",
          "MOSFET is a voltage controlled device",
          "MOSFET is a current controlled device",
          "MOSFET is a temperature controlled device"
        ],
        correctAnswer: "MOSFET is a voltage controlled device"
      },
      {
        question: "Choose the correct statement(s)",
        options: [
          "i) The gate circuit impedance of MOSFET is higher than that of a BJT\nii) The gate circuit impedance of MOSFET is lower than that of a BJT\niii) The MOSFET has higher switching losses than that of a BJT\niv) The MOSFET has lower switching losses than that of a BJT",
          "Both ii & iv",
          "Both i & iv",
          "Only ii"
        ],
        correctAnswer: "Both i & iv"
      },
      {
        question: "Choose the correct statement",
        options: [
          "MOSFET is a unipolar, voltage controlled, two terminal device",
          "MOSFET is a bipolar, current controlled, three terminal device",
          "MOSFET is a unipolar, voltage controlled, three terminal device",
          "MOSFET is a bipolar, current controlled, two terminal device"
        ],
        correctAnswer: "MOSFET is a unipolar, voltage controlled, three terminal device"
      },
      {
        question: "The arrow on the symbol of MOSFET indicates",
        options: [
          "that it is a N-channel MOSFET",
          "the direction of electrons",
          "the direction of conventional current flow",
          "that it is a P-channel MOSFET"
        ],
        correctAnswer: "the direction of electrons"
      },
      {
        question: "The controlling parameter in MOSFET is",
        options: [
          "Vds",
          "Ig",
          "Vgs",
          "Is"
        ],
        correctAnswer: "Vgs"
      },
      {
        question: "In the internal structure of a MOSFET, a parasitic BJT exists between the",
        options: [
          "source & gate terminals",
          "source & drain terminals",
          "drain & gate terminals",
          "there is no parasitic BJT in MOSFET"
        ],
        correctAnswer: "source & drain terminals"
      },
      {
        question: "In the transfer characteristics of a MOSFET, the threshold voltage is the measure of the",
        options: [
          "minimum voltage to induce a n-channel/p-channel for conduction",
          "minimum voltage till which temperature is constant",
          "minimum voltage to turn off the device",
          "none of the above mentioned is true"
        ],
        correctAnswer: "minimum voltage to induce a n-channel/p-channel for conduction"
      },
      {
        question: "The output characteristics of a MOSFET, is a plot of",
        options: [
          "Id as a function of Vgs with Vds as a parameter",
          "Id as a function of Vds with Vgs as a parameter",
          "Ig as a function of Vgs with Vds as a parameter",
          "Ig as a function of Vds with Vgs as a parameter"
        ],
        correctAnswer: "Id as a function of Vds with Vgs as a parameter"
      },
      {
        question: "Which of the following signals are generated by Wien-bridge oscillators?",
        options: [
          "Square wave",
          "Sine wave",
          "Triangular wave",
          "Pulse wave"
        ],
        correctAnswer: "Sine wave"
      },
      {
        question: "In a Wien-bridge oscillator for obtaining 160Hz frequency output what will be the capacitor value if resistance is selected as 1KΩ?",
        options: [
          "10 µF",
          "1 µF",
          "1 nF",
          "10 nF"
        ],
        correctAnswer: "1 µF"
      },
      {
        question: "In a Wien-bridge oscillator, frequency of oscillation and capacitor value have ____________________",
        options: [
          "Direct proportionality",
          "Inverse proportionality",
          "Equality",
          "No relation"
        ],
        correctAnswer: "Inverse proportionality"
      },
      {
        question: "Which of the following device is a non-linear device?",
        options: [
          "Resistance",
          "Diode",
          "Op-amp",
          "Capacitor"
        ],
        correctAnswer: "Diode"
      },
      {
        question: "In RC phase shift oscillator, one R-C bridge provides ___________ phase shift.",
        options: [
          "300",
          "600",
          "900",
          "1800"
        ],
        correctAnswer: "600"
      },
      {
        question: "Which of the following oscillators have higher stability at a higher frequency?",
        options: [
          "Wien-bridge oscillator",
          "RC phase shift oscillator",
          "Crystal oscillator",
          "All of the mentioned"
        ],
        correctAnswer: "Crystal oscillator"
      },
      {
        question: "Which of the following can be considered as oscillation frequency controlling element in RC phase shift oscillator?",
        options: [
          "Resistance",
          "Capacitor",
          "Both resistor and capacitor",
          "None of the mentioned"
        ],
        correctAnswer: "Both resistor and capacitor"
      },
      {
        question: "Which of the following represents the LC tuned circuit?",
        options: [
          "Wien bridge oscillator",
          "T oscillator",
          "Hartley oscillator",
          "All of the mentioned"
        ],
        correctAnswer: "Hartley oscillator"
      },
      {
        question: "Which of the following can be used to produce a square waveform?",
        options: [
          "Wien bridge oscillators",
          "T-oscillator",
          "Hartley oscillator",
          "Multivibrators"
        ],
        correctAnswer: "Multivibrators"
      },
      {
        question: "Pulse wave and square wave are the same in all aspect.",
        options: [
          "True",
          "False"
        ],
        correctAnswer: "False"
      },
      {
        question: "An amplifier operating from ±3V provide a 2.2V peak sine wave across a 100 ohm load when provided with a 0.2V peak sine wave as an input from which 1.0mA current is drawn. The average current in each supply is measured to be 20mA. What is the amplifier efficiency?",
        options: [
          "20.2%",
          "25.2%",
          "30.2%",
          "35.2%"
        ],
        correctAnswer: "20.2%"
      },
      {
        question: "In order to prevent distortion in the output signal after amplification, the input signal must be",
        options: [
          "Higher than the positive saturation level of the amplifier",
          "Lower than the negative saturation level of the amplifier",
          "Must lie within the negative and positive saturation level of the amplifier",
          "Both higher than the positive saturation level of the amplifier and lower than the negative saturation level of the amplifier"
        ],
        correctAnswer: "Must lie within the negative and positive saturation level of the amplifier"
      },
      {
        question: "The voltage gain of the amplifier is 8 and the current gain is 7. The power gain of the amplifier is",
        options: [
          "56 db",
          "17.481 db",
          "34.963 db",
          "1 db"
        ],
        correctAnswer: "17.481 db"
      },
      {
        question: "Statement 1: Voltage gain of -5 means that the output voltage has been attenuated.\nStatement 2: Voltage gain of -5db means that the output voltage has been attenuated.",
        options: [
          "Statement 1 and Statement 2 are true",
          "Statement 1 and Statement 2 are false",
          "Only Statement 1 is true",
          "Only Statement 2 is true"
        ],
        correctAnswer: "Only Statement 2 is true"
      },
      {
        question: "Which of the following isn’t true?",
        options: [
          "Both transformer and amplifier can provide voltage gain",
          "Both transformer and amplifier can provide current gain",
          "Both transformer and amplifier can provide power gain",
          "None of the mentioned"
        ],
        correctAnswer: "Both transformer and amplifier can provide power gain"
      },
      {
        question: "Symmetrically saturated amplifiers operating in clipping mode can be used to convert a sine wave to a",
        options: [
          "Square wave",
          "Pseudo Square wave",
          "Sawtooth wave",
          "Triangular wave"
        ],
        correctAnswer: "Pseudo Square wave"
      },
      {
        question: "What is meant by stability of the amplified signal?",
        options: [
          "The amplified signal must have a finite amplitude",
          "The amplified signal should not have self oscillation",
          "The input and the output signal must be proportional",
          "The ratio of the input and the output signal must be finite"
        ],
        correctAnswer: "The amplified signal should not have self oscillation"
      },
      {
        question: "If Av, Ai and Ap represents the voltage gain, current gain and power gain ratio of an amplifier which of the below is not the correct expression for the corresponding values in decibel?",
        options: [
          "Current gain: 20 log Ai db",
          "Voltage gain: 20 log Av db",
          "Power gain: 20 log Ap db",
          "Power gain: 10 log Ap"
        ],
        correctAnswer: "Power gain: 20 log Ap db"
      },
      {
        question: "An amplifier has a voltage gain of 100 V/V and a current gain of 1000A/A. the value of the power gain decibel is",
        options: [
          "30 db",
          "40 db",
          "50 db",
          "60 db"
        ],
        correctAnswer: "50 db"
      },
      {
        question: "The units of voltage gain is",
        options: [
          "It has no units, it is a ratio",
          "Decibels (db)",
          "All of the mentioned",
          "None of the mentioned"
        ],
        correctAnswer: "It has no units, it is a ratio"
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

window.onload = displayQuiz;
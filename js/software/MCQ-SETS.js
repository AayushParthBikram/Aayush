const quizData = [
    {
        question: "1. Which of the following is the largest cranial nerve?",
        answers: {
            a: "Vague nerve",
            b: "Optic nerve",
            c: "Trigeminal nerve",
            d: "Trochlear nerve"
        },
        correctAnswer: "c"
    },
    {
        question: "2. A state due to the loss of excessive ion of carbon dioxide from the body is known as:",
        answers: {
            a: "Respiratory acidosis",
            b: "Metabolic acidosis",
            c: "Respiratory alkalosis",
            d: "Metabolic alkalosis"
        },
        correctAnswer: "c"
    },
    {
        question: "3. Which part of the mammalian alimentary canal does not secrete any enzyme?",
        answers: {
            a: "Mouth",
            b: "Oesophagus",
            c: "Stomach",
            d: "Duodenum"
        },
        correctAnswer: "b"
    },
    {
        question: "4. The arteriole which takes blood away from the glomerular capsule is:",
        answers: {
            a: "Afferent arteriole",
            b: "Efferent arteriole",
            c: "Loop of Henle",
            d: "Distal convoluted tubule"
        },
        correctAnswer: "b"
    },
    {
        question: "5. What is the pressure of vitreous humor in the eye?",
        answers: {
            a: "5-10 mm of Hg",
            b: "15-20 mm of Hg",
            c: "10-15 mm of Hg",
            d: "20-25 mm of Hg"
        },
        correctAnswer: "b"
    },
    {
        question: "6. Which type of drug is mebendazole?",
        answers: {
            a: "Antifungal",
            b: "Antihelminthic",
            c: "Anti-bacterial",
            d: "Antiviral"
        },
        correctAnswer: "b"
    },
    {
        question: "7. The most important electrolyte of intracellular fluid is:",
        answers: {
            a: "Sodium",
            b: "Calcium",
            c: "Potassium",
            d: "Chloride"
        },
        correctAnswer: "c"
    },
    {
        question: "8. Nepal Nursing Council was established in",
        answers: {
            a: "1953 BS",
            b: "2053 BS",
            c: "1954 BS",
            d: "2054 BS"
        },
        correctAnswer: "b"
    },
    {
        question: "9. A nurse administers an intravenous solution of 0.45% sodium chloride with respect to human blood cell. To which category of fluid does this solution belong?",
        answers: {
            a: "Isotonic",
            b: "Hypotonic",
            c: "Isometric",
            d: "Hypertonic"
        },
        correctAnswer: "b"
    },
    {
        question: "10. In a water seal drainage bottle should be",
        answers: {
            a: "Above the chest level of the patient",
            b: "Below the chest level of the patient",
            c: "At the level of the chest",
            d: "At any convenient level."
        },
        correctAnswer: "b"
    },
    {
        question: "11. Approximately height of the bottle from the bed of the client should be_______",
        answers: {
            a: "30cm",
            b: "45cm",
            c: "35cm",
            d: "55cm"
        },
        correctAnswer: "b"
    },
    {
        question: "12. Nursing care for a patient with an indwelling catheter includes which of the following_______",
        answers: {
            a: "Irrigation of the catheter with 30ml of normal saline solution every 4 hours",
            b: "Encourage a generous fluid intake if permitted",
            c: "Changing catheter every fortnight",
            d: "Informing the patient that burning and irritation of the meatus are normal subsiding within few days."
        },
        correctAnswer: "b"
    },
    {
        question: "13. A patient is scheduled for NG feeding. In which position should the nurse place the patient?",
        answers: {
            a: "Low Fowler's position",
            b: "Supine position",
            c: "Trendelenburg position",
            d: "Side-lying position"
        },
        correctAnswer: "a"
    },
    {
        question: "14. Sterile urine specimen is collected from:",
        answers: {
            a: "From a clean bedpan or urinal",
            b: "The first small amount of urine voided",
            c: "Urine voided at midstream"
        },
        correctAnswer: "c"
    },
    {
        question: "15. A patient has an abnormal, unexpected response to a drug. This is defined as:",
        answers: {
            a: "Drug Intolerance",
            b: "Anaphylactic reaction",
            c: "A cumulative effect",
            d: "Idiosyncratic effect"
        },
        correctAnswer: "d"
    },
    {
        question: "16. A patient is having dyspnea. To facilitate respiration, the nurse would________",
        answers: {
            a: "Remove the pillow from under the head",
            b: "Elevate the head of the body",
            c: "Elevate the foot of the body",
            d: "Take the blood pressure"
        },
        correctAnswer: "b"
    },
    {
        question: "17. A patient is to have gastric gavage. In which position should the nurse place the client when the gavage tube is being inserted_______",
        answers: {
            a: "Supine Position",
            b: "Mid Fowler's position",
            c: "High Fowler's position",
            d: "Trendelenburg position"
        },
        correctAnswer: "c"
    },
    {
        question: "18. Vitamin K 10 mg given 1M, is ordered. Vitamin K is available as 5 mg/ml. How much would the nurse administer?",
        answers: {
            a: "1ml",
            b: "4ml",
            c: "3ml",
            d: "2ml"
        },
        correctAnswer: "d"
    },
    {
        question: "19. The difference between the apical and radial pulse rate is called____",
        answers: {
            a: "Pulse deficit",
            b: "Pulse amplitude",
            c: "Ventricular system",
            d: "Heart arrhythmia"
        },
        correctAnswer: "a"
    },
    {
        question: "20. When the elevated temperature fluctuates widely but does not reach normal levels between fluctuations, it is called____",
        answers: {
            a: "Constant fever",
            b: "Relapsing fever",
            c: "Intermittent fever",
            d: "Remittent fever"
        },
        correctAnswer: "d"
    },
    {
        question: "21. The movement of the solvent water from an area of lesser solute concentration to an area of greater solute concentration until equilibrium is established is known as _________",
        answers: {
            a: "Osmosis",
            b: "Diffusion",
            c: "Active transport",
            d: "Filtration"
        },
        correctAnswer: "a"
    },
    {
        question: "22. A nurse must get consent for procedures for the following clients. Which client is legally allowed to give informed consent?",
        answers: {
            a: "An unconscious fever",
            b: "A sedated client",
            c: "A client who cannot read",
            d: "A 14-year-old with a broken arm"
        },
        correctAnswer: "c"
    },
    {
        question: "23. Elimination means:",
        answers: {
            a: "Termination end of transmission",
            b: "Interruption of transformation",
            c: "Both (a) and (b)",
            d: "Effects to infection"
        },
        correctAnswer: "c"
    },
    {
        question: "24. Which of the following is the contraindication to study magnetic resonance Image (MRI)?",
        answers: {
            a: "The patient is allergic to shellfish",
            b: "The patient has a pacemaker",
            c: "The patient suffers from claustrophobia",
            d: "The patient takes antipsychotic medicine"
        },
        correctAnswer: "c"
    },
    {
        question: "25. During CPR, if your rescue breathing is appropriate, which finding will you act?",
        answers: {
            a: "Pupils are dilated",
            b: "Chest rises when air is forced in",
            c: "Heart sound is heard",
            d: "Pupils are equal and normal in both eyes"
        },
        correctAnswer: "b"
    },
    {
        question: "26. Which is the Best position for a woman in labor when prolapse of the cord is present?",
        answers: {
            a: "Trendelenburg",
            b: "Fowler's",
            c: "Lithotomy",
            d: "Prone"
        },
        correctAnswer: "a"
    },
    

{
    question: "27. Which is the unfavorable factor affecting wound healing?",
    answers: {
        a: "Young age",
        b: "Intake of Protein, calcium",
        c: "Hemorrhage",
        d: "Abundant blood supply to the injured part"
    },
    correctAnswer: "c"
},
{
    question: "28. Which one of the following methods is appropriate for maintaining the airway in case of a suspected cervical injury?",
    answers: {
        a: "Head tilt, chin lift",
        b: "Head down and chin down",
        c: "Extend the neck",
        d: "Jaw thrust maneuver"
    },
    correctAnswer: "d"
},
{
    question: "29. The best position for the client in shock is _______",
    answers: {
        a: "Prone",
        b: "Supine",
        c: "On the back with legs elevated",
        d: "On his side with his neck extended"
    },
    correctAnswer: "c"
},
{
    question: "30. QRS wave in ECG indicates_________",
    answers: {
        a: "Arterial depolarization",
        b: "Atrial repolarization",
        c: "Ventricular repolarization",
        d: "Ventricular depolarization"
    },
    correctAnswer: "c"
},
{
    question: "31. The triage categories of victims in mass casualties are:",
    answers: {
        a: "Red, blue, green, black",
        b: "Green, yellow, black, red",
        c: "Green, yellow, red, black",
        d: "Red, green, black, blue"
    },
    correctAnswer: "c"
},
{
    question: "32. To prevent a pulmonary embolism in a patient on bed rest, the nurse should _________",
    answers: {
        a: "Encourage deep breathing and coughing exercises",
        b: "Use knee support when the patient is in bed",
        c: "Limit the patient's intake of fluids",
        d: "Teach the patient to move the legs when in bed"
    },
    correctAnswer: "d"
},
{
    question: "33. A patient is receiving 1000ml of IV fluid per 24 hours. Using an IV set with a drop rate of 15 drops/ml. The nurse should plan to regulate the IV to _______",
    answers: {
        a: "10 drops/min",
        b: "15 drops/min",
        c: "20 drops/min",
        d: "30 drops/min"
    },
    correctAnswer: "a"
},
{
    question: "34. One of the major processes to evaluate the nursing care of the patient is_________",
    answers: {
        a: "Patient's chart",
        b: "Doctor's instructions",
        c: "Nursing progress note",
        d: "Doctor's progress note"
    },
    correctAnswer: "a"
},
{
    question: "35. While administering a blood transfusion when would the nurse assess the patient for a blood transfusion reaction?",
    answers: {
        a: "15 minutes after the infusion is started",
        b: "After the blood is all infused",
        c: "Every hour",
        d: "Every 15 minutes"
    },
    correctAnswer:"d"
},
{
    question: "36. NLEN is conducted by:",
    answers: {
        a: "NNC",
        b: "ICN",
        c: "NAN",
        d: "ICN"
    },
    correctAnswer:"a"
},
{
    question: "37. Immediately after a snake bite, the most important part of treatment is:",
    answers: {
        a: "Reassuring the victim",
        b: "Tourniquet is applied",
        c: "Incision and suction",
        d: "Treated with anti-snake venom"
    },
    correctAnswer:"a"
},
{
    question: "38. Vomiting is contraindicated in which type of poisoning?",
    answers: {
        a: "OP poisoning",
        b: "Mushroom poisoning",
        c: "Kerosene",
        d: "Dhatura poisoning"
    },
    correctAnswer:"c"
},
{
    question: "39. To obtain a specimen for sputum culture and sensitivity, which of the following instructions is the best?",
    answers: {
        a: "Upon waking up, cough deeply and expectorate into a container",
        b: "Cough after pursed lip breathing",
        c: "Save sputum for two days in a covered container",
        d: "After a respiratory treatment, expectorate into a container"
    },
    correctAnswer:"a"
},
{
    question: "40. A client has a temperature of 104 degrees F, this temperature is equal to_________",
    answers: {
        a: "38 degrees C",
        b: "40 degrees C",
        c: "41 degrees C",
        d: "42 degrees C"
    },
    correctAnswer:"b"
},
{
    question: "41. When suctioning an unconscious client, which nursing intervention should the nurse prioritize in maintaining cerebral perfusion?",
    answers: {
        a: "Administer diuretics",
        b: "Administer analgesic",
        c: "Provide hygiene",
        d: "Hyperoxygenate before"
    },
    correctAnswer: "d"
},
{
    question: "42. Scald is a burn caused by:",
    answers: {
        a: "Dry heat",
        b: "Radiation",
        c: "Moist heat"
    },
    correctAnswer: "c"
},
{
    question: "43. Which of the following is the best indicator of the patient's fluid balance status?",
    answers: {
        a: "Intake and Output",
        b: "Skin turgor",
        c: "Complete blood count",
        d: "Daily weight"
    },
    correctAnswer: "d"
},
{
    question: "44. The nurse determines that a client is having a transfusion reaction. After the nurse stops the transfusion, which action should immediately be taken next?",
    answers: {
        a: "Remove IV line",
        b: "Run normal saline at a deep vein often rate ",
        c: "Run 5% dextrose",
        d: "Obtain a culture of the tip of the catheter device removed from the client (Correct Answer)"
    },
    correctAnswer: "b"
},
{
    question: "45. The nurse is performing an abdominal assessment. The nurse performs which assessment at first?",
    answers: {
        a: "Auscultation",
        b: "Inspection ",
        c: "Palpation",
        d: "Percussion"
    },
    correctAnswer: "b"
},
{
    question: "46. If the client is receiving mannitol, which information is important to receive?",
    answers: {
        a: "Urinary output ",
        b: "Pulse rate",
        c: "Respiratory rate",
        d: "Skin Condition"
    },
    correctAnswer: "a"
},
{
    question: "47. Time required for the used gloves and instruments in 0.5% chlorine solution is",
    answers: {
        a: "10 minutes ",
        b: "20 minutes",
        c: "30 minutes",
        d: "40 minutes"
    },
    correctAnswer: "a"
},
{
    question: "48. During administration of an enema, a client complains of intestinal cramps, the nurse should:",
    answers: {
        a: "Give it at a slower rate",
        b: "Discontinue the procedure",
        c: "Stop until cramps are gone ",
        d: "Lower the height of the container"
    },
    correctAnswer: "c"
},
{
    question: "49. Which of the following is the backbone in disease prevention?",
    answers: {
        a: "Epidemiology ",
        b: "Demography",
        c: "Vital statistics",
        d: "Health statistics"
    },
    correctAnswer: "a"
},
{
    question: "50. Father of public health is:",
    answers: {
        a: "Susruta",
        b: "Charaka",
        c: "Areya",
        d: "Cholera "
    },
    correctAnswer: "d"
},
{
    question: "51. Kala-azar is transmitted by:",
    answers: {
        a: "Mosquito",
        b: "Sandfly ",
        c: "House fly",
        d: "Bee"
    },
    correctAnswer: "b"
},
{
    question: "52. Oral contraceptives act by:",
    answers: {
        a: "Preventing ovulation ",
        b: "Making endometrium non-reactive to embryo",
        c: "Making inactive to sperm",
        d: "Inhibiting sperm penetration to the ovum"
    },
    correctAnswer: "a"
},
{
    question: "53. Koplik’s spot is the clinical feature of:",
    answers: {
        a: "Measles ",
        b: "Tuberculosis",
        c: "Chicken Pox",
        d: "Leprosy"
    },
    correctAnswer: "a"
},
{
    question: "54. Which of the following is a principle of Primary Health Care?",
    answers: {
        a: "Health Education",
        b: "Dental Health",
        c: "Mental Health",
        d: "Community Participation "
    },
    correctAnswer: "d"
},
{
    question: "55. Which type of vaccination is given against measles?",
    answers: {
        a: "Live, attenuated ",
        b: "Killed",
        c: "Toxoid",
        d: "Inactive"
    },
    correctAnswer: "a"
},
{
    question: "56. The comprehensive assessment of the health status of an entire community is called:",
    answers: {
        a: "Community diagnoses ",
        b: "Home visit",
        c: "Micro teaching",
        d: "Health Education"
    },
    correctAnswer: "a"
},
{
    question: "57. The most commonly accepted family planning method in Nepal is:",
    answers: {
        a: "Oral Pills",
        b: "Condoms",
        c: "Dep-provera ",
        d: "Norplant"
    },
    correctAnswer: "c"
},
{
    question: "58. Incubation period of influenza is:",
    answers: {
        a: "6-18 Hours",
        b: "12-36 Hours",
        c: "18-17 Hours ",
        d: "1 week"
    },
    correctAnswer: "c"
},
{
    question: "59. Which of the following vitamins is not stored in the liver?",
    answers: {
        a: "Vitamin A ",
        b: "Vitamin B",
        c: "Vitamin C",
        d: "Vitamin D"
    },
    correctAnswer: "a"
},
{
    question: "60. One gram of carbohydrate provides:",
    answers: {
        a: "4 kcal ",
        b: "9 kcal",
        c: "7 kcal",
        d: "10 kcal"
    },
    correctAnswer: "a"
},
{
    question: "61. Which of the following drugs is not used as a first-line drug in the treatment of TB?",
    answers: {
        a: "Rifampicin",
        b: "Ethambutol",
        c: "Isoniazide",
        d: "Kanamycin "
    },
    correctAnswer: "d"
},
{
    question: "62. One is said to be a neonate from birth to:",
    answers: {
        a: "4 weeks of age ",
        b: "4 months",
        c: "4 days of age",
        d: "4 years of age"
    },
    correctAnswer: "a"
},
{
    question: "63. Except breast milk, no other food is required to be given up to:",
    answers: {
        a: "4 months",
        b: "6 months ",
        c: "7 months",
        d: "9 months"
    },
    correctAnswer: "b"
},
{
    question: "64. A body weight triples its birth weight by the end of:",
    answers: {
        a: "6 months",
        b: "1 year ",
        c: "9 months",
        d: "2 years"
    },
    correctAnswer: "b"
},
{
    question: "65. Anterior fontanels usually close at:",
    answers: {
        a: "2-3 months",
        b: "18-24 months ",
        c: "10-12 months",
        d: "50-36 months"
    },
    correctAnswer: "b"
},
{
    question: "66. Child growth and development is most affected by:",
    answers: {
        a: "Peers",
        b: "Home Environment",
        c: "Parent Child bond ",
        d: "School Environment"
    },
    correctAnswer: "c"
},
{
    question: "67. When observing a toddler and other children in the playroom, the nurse should expect the toddler to engage in:",
    answers: {
        a: "Parallel Play ",
        b: "Competitive play",
        c: "Solitary play",
        d: "Co-operative play"
    },
    correctAnswer: "a"
},
{
    question: "68. The nurse is aware that children born with a missing chromosome are most likely to have:",
    answers: {
        a: "Cretinism",
        b: "Down’s syndrome",
        c: "Phenylketonuria",
        d: "Turner’s syndrome "
    },
    correctAnswer: "d"
},
{
    question: "69. When an infant’s vomiting is uncontrolled, it is most important for the nurse to assess for which complication:",
    answers: {
        a: "Acidosis",
        b: "Hyperkalemia",
        c: "Alkalosis ",
        d: "Hypokalemia"
    },
    correctAnswer: "c"
},
{
    question: "70. At birth, the length of the baby measures about:",
    answers: {
        a: "20 cm",
        b: "50 cm",
        c: "40 cm",
        d: "60 cm"
    },
    correctAnswer: "b"
},
{
    question: "71. The range of normal heart rate in children is:",
    answers: {
        a: "60-80 beats/min",
        b: "120-140/min",
        c: "80-120/min ",
        d: "140-160/min"
    },
    correctAnswer: "c"
},
{
    question: "72. A child can sit with support at the age of:",
    answers: {
        a: "6 months ",
        b: "8 months",
        c: "10 months",
        d: "1 year"
    },
    correctAnswer: "a"
},
{
    question: "73. Toddler means:",
    answers: {
        a: "Under 1 year of age",
        b: "3-5 years of age",
        c: "1-3 years of age ",
        d: "6-12 years of age"
    },
    correctAnswer: "c"
},
{
    question: "74. A child with cystic fibrosis:",
    answers: {
        a: "Gains weight",
        b: "Rarely plays",
        c: "Tastes salty when kissed ",
        d: "Has poor concentration"
    },
    correctAnswer: "c"
},
{
    question: "75. A nurse is putting together a presentation on meningitis. Which of the following microorganisms has not been listed to cause meningitis?",
    answers: {
        a: "Staphylococcus pneumonia",
        b: "Hemophilus influenza",
        c: "Neisseria Meningitidis",
        d: "Clostridium difficile "
    },
    correctAnswer: "d"
},
{
    question: "76. What is the primary critical observation for APGAR scoring?",
    answers: {
        a: "Heart rate ",
        b: "Respiratory rate",
        c: "Presence of meconium",
        d: "Evaluation of moro reflex"
    },
    correctAnswer: "a"
},
{
    question: "77. Getting things done is the definition of:",
    answers: {
        a: "Management ",
        b: "Leadership",
        c: "Organization",
        d: "Leader"
    },
    correctAnswer: "a"
},
{
    question: "78. Putting plans into action:",
    answers: {
        a: "Working",
        b: "Motivation",
        c: "Evaluation",
        d: "Implementation "
    },
    correctAnswer: "d"
},
{
    question: "79. In your organization, your supervisor has direct command over the subordinate is:",
    answers: {
        a: "Line Authority ",
        b: "Functional authority",
        c: "Staff authority",
        d: "Organizational authority"
    },
    correctAnswer: "a"
},
{
    question: "80. The national health policy started from:",
    answers: {
        a: "1990",
        b: "1991 ",
        c: "1972",
        d: "1952"
    },
    correctAnswer: "b"
},
{
    question: "81. The process of selecting the right person in the right place at the right time is:",
    answers: {
        a: "Leadership",
        b: "Staffing ",
        c: "",
        d: "Co-ordination"
    },
    correctAnswer: "b"
},
{
    question: "82. In which type of leadership style there is a feeling of 'we' rather than 'I':",
    answers: {
        a: "Democratic ",
        b: "Laissez-faire",
        c: "Supervision",
        d: "Autocratic"
    },
    correctAnswer: "a"
},
{
    question: "83. The process of observing whether subordinates are working correctly in accordance with the policies is:",
    answers: {
        a: "Leadership",
        b: "Communication",
        c: "Supervision ",
        d: "Evaluation"
    },
    correctAnswer: "c"
},
{
    question: "84. The process of comparing actual performance with standards and taking corrective decisions is:",
    answers: {
        a: "Management",
        b: "Leadership",
        c: "Staffing",
        d: "Controlling "
    },
    correctAnswer: "d"
},
{
    question: "85. An educational experience provided in a job setting is called:",
    answers: {
        a: "Health Teaching",
        b: "Inservice education ",
        c: "Interaction",
        d: "Training"
    },
    correctAnswer: "b"
},
{
    question: "86. Which of the following is not a basic function of the management process?",
    answers: {
        a: "Controlling",
        b: "Organizing",
        c: "Working ",
        d: "Leading"
    },
    correctAnswer: "c"
},
{
    question: "87. Rhesus incompatibility may result in:",
    answers: {
        a: "Anencephaly",
        b: "Spina bifida",
        c: "Erythroblastosis fetalis ",
        d: "None of the above"
    },
    correctAnswer: "c"
},
{
    question: "88. A pregnant woman has hypertension combined with proteinuria and generalized edema. What is her diagnosis?",
    answers: {
        a: "Anemia",
        b: "Pre-eclampsia ",
        c: "Eclampsia",
        d: "None of the above"
    },
    correctAnswer: "b"
},
{
    question: "89. Which one of the following focuses the major part of the placenta?",
    answers: {
        a: "Chorion ",
        b: "Germ layers",
        c: "Decidua",
        d: "Amnion"
    },
    correctAnswer: "a"
},
{
    question: "90. A client in labor has been pushing effectively for one hour. A nurse determines that the client’s primary physiological need at this time is to:",
    answers: {
        a: "Ambulate",
        b: "Rest between contractions ",
        c: "Change position frequently",
        d: "Consume oral food and fluids"
    },
    correctAnswer: "b"
},
{
    question: "91. An extra calories required for pregnant women is:",
    answers: {
        a: "200 cal/day",
        b: "300 cal/day ",
        c: "500 cal/day",
        d: "600 cal/day"
    },
    correctAnswer: "b"
},
{
    question: "92. The physiologic anemia during pregnancy is a result of:",
    answers: {
        a: "Decreased dietary intake of iron",
        b: "Increased plasma volume of the mother ",
        c: "Decreased erythropoiesis after the first trimester",
        d: "Increased detoxification demands on the mother's liver"
    },
    correctAnswer: "b"
},
{
    question: "93. At what week during pregnancy does the uterus rise out of the pelvis and becomes an abdominal organ?",
    answers: {
        a: "8th week of pregnancy",
        b: "10th week",
        c: "18th week ",
        d: "20th week"
    },
    correctAnswer: "c"
},
{
    question: "94. The greatest total weight gain is at ___________ trimester:",
    answers: {
        a: "First",
        b: "Third ",
        c: "Second",
        d: "Implantation"
    },
    correctAnswer: "b"
},
{
    question: "95. A client tells the nurse that the first day of her last menstrual period was July 22, 2011. What is the expected date of delivery?",
    answers: {
        a: "May 7, 2012",
        b: "April 29, 2012 ",
        c: "April 22, 2012",
        d: "March 6, 2012"
    },
    correctAnswer: "b"
},
{
    question: "96. Nausea and vomiting commonly experienced by many women during the first trimester of pregnancy is an adaptation of the increased level of which hormone?",
    answers: {
        a: "Estrogen",
        b: "Progesterone",
        c: "LH",
        d: "Chorionic Gonadotropin "
    },
    correctAnswer: "d"
},
{
    question: "97. The largest part of the weight gain during pregnancy is because of:",
    answers: {
        a: "Fetal growth ",
        b: "Fluid retention",
        c: "Metabolic alteration",
        d: "Increased blood volume"
    },
    correctAnswer: "a"
},
{
    question: "98. What is the most therapeutic position for the client with pelvic inflammatory disease?",
    answers: {
        a: "Sim’s position",
        b: "Fowler’s position ",
        c: "Supine position with knees flexed",
        d: "Lithotomy position with head elevated"
    },
    correctAnswer: "b"
},
{
    question: "99. A sign which indicates the placenta is beginning to separate from the uterus and is about to be expelled is the:",
    answers: {
        a: "Relaxation of the uterus",
        b: "Descent of uterus in the abdomen",
        c: "Appearance of a sudden gush of blood ",
        d: "Retraction of the umbilical cord into the vagina"
    },
    correctAnswer: "c"
},
{
    question: "100. In pregnancy, there is increased blood supply to the pelvic region that results in a purplish discoloration of the vaginal mucosa, which is known as:",
    answers: {
        a: "Ludwig’s sign",
        b: "Goodell’s sign",
        c: "Hegar’s sign",
        d: "Chadwick’s sign "
    },
    correctAnswer: "d"
},
{
    question: "101. The most common cause of spontaneous abortion is:",
    answers: {
        a: "Physical trauma",
        b: "Unresolved stress",
        c: "Embryonic defect ",
        d: "Congenital defects"
    },
    correctAnswer: "c"
},
{
    question: "102. Zinc deficiency is characterized by:",
    answers: {
        a: "Sexual infantilism",
        b: "Poor growth",
        c: "Poor wound healing",
        d: "All of the above "
    },
    correctAnswer: "d"
},
{
    question: "103. Which is the most common cause that leads to postpartum hemorrhage in mothers?",
    answers: {
        a: "Uterine atony ",
        b: "Tear of cervix",
        c: "Vaginal tear",
        d: "Rupture of uterus"
    },
    correctAnswer: "a"
},
{
    question: "104. A patient has a high fever, nuchal rigidity, and a severe headache. A lumbar puncture shows cloudy CSF and gram-negative diplococci. What is the most likely diagnosis?",
    answers: {
        a: "Herpes simplex virus",
        b: "Streptococcus pneumonia",
        c: "Haemophilus influenzae",
        d: "Neisseria meningitidis "
    },
    correctAnswer: "d"
},
{
    question: "105. The nurse is caring for a client with mitral stenosis and atrial fibrillation who is taking digoxin. The nurse monitors for which of the following early signs of digoxin toxicity?",
    answers: {
        a: "Anorexia ",
        b: "Hypotension",
        c: "Tachycardia",
        d: "Polyuria"
    },
    correctAnswer: "a"
},
{
    question: "106. A 40-year-old man with chronic alcohol abuse presents with memory loss, confabulation, and ataxia. What is the most likely cause?",
    answers: {
        a: "Wernicke-Korsakoff syndrome ",
        b: "Huntington disease",
        c: "Neurosyphilis",
        d: "Creutzfeldt-Jakob disease"
    },
    correctAnswer: "a"
},
{
    question: "107. A nurse is monitoring a client who is at risk for increased intracranial pressure (ICP). Which of the following findings should alert the nurse to the possibility that ICP is increasing?",
    answers: {
        a: "Hypotension",
        b: "Bradycardia ",
        c: "Restlessness",
        d: "Hyperventilation"
    },
    correctAnswer: "b"
},
{
    question: "108. The nurse is assessing a client's pain level using the numeric rating scale (NRS). The client rates their pain as 7 on a scale of 0 to 10. What action should the nurse take?",
    answers: {
        a: "Administer pain medication",
        b: "Reassess the pain in 30 minutes",
        c: "Document the pain rating and continue to monitor ",
        d: "Administer a non-pharmacological pain intervention"
    },
    correctAnswer: "c"
},
{
    question: "109. A client is receiving chemotherapy and has severe neutropenia. Which nursing intervention is the most important to prevent infection in this client?",
    answers: {
        a: "Administering prophylactic antibiotics",
        b: "Maintaining strict isolation",
        c: "Limiting visitors",
        d: "Frequent hand washing "
    },
    correctAnswer: "d"
},
{
    question: "110. The nurse is assessing a client's nutritional status. Which finding is most indicative of a nutritional deficiency?",
    answers: {
        a: "A body mass index (BMI) of 25",
        b: "Edema",
        c: "Dry, scaly skin ",
        d: "Increased muscle mass"
    },
    correctAnswer: "c"
},
{
    question: "111. A client is scheduled for a cardiac catheterization. What is the priority nursing action before the procedure?",
    answers: {
        a: "Administering preoperative medications",
        b: "Verifying informed consent ",
        c: "Starting an IV line",
        d: "Checking the client's blood pressure"
    },
    correctAnswer: "b"
},
{
    question: "112. A nurse is caring for a client who has a history of seizures. Which nursing intervention is most important in preventing seizures during the hospital stay?",
    answers: {
        a: "Administering antiepileptic medications on time",
        b: "Monitoring the client's vital signs",
        c: "Placing the client in a padded room",
        d: "Ensuring that the client is well-rested "
    },
    correctAnswer: "d"
},
{
    question: "113. A nurse is caring for a client with a diagnosis of major depressive disorder (MDD). What is the priority nursing intervention for this client?",
    answers: {
        a: "Providing the client with opportunities to talk about their feelings",
        b: "Administering prescribed antidepressant medications",
        c: "Assisting the client with self-care activities",
        d: "Ensuring the client's safety "
    },
    correctAnswer: "d"
},
{
    question: "114. A client is receiving total parenteral nutrition (TPN). What is the nurse's primary responsibility when caring for this client?",
    answers: {
        a: "Changing the TPN solution every 24 hours",
        b: "Monitoring the client's blood glucose levels",
        c: "Administering TPN through a central venous catheter",
        d: "Preventing infection at the TPN site "
    },
    correctAnswer: "d"
},
{
    question: "115. A client is admitted with a suspected deep vein thrombosis (DVT). Which nursing assessment finding is most indicative of a DVT?",
    answers: {
        a: "Localized pain and erythema",
        b: "Bilateral pedal edema",
        c: "Pitting edema of both lower extremities",
        d: "Unilateral calf tenderness and swelling "
    },
    correctAnswer: "d"
},
{
    question: "116. A client is receiving heparin therapy. What laboratory test should the nurse monitor to assess the client's response to heparin?",
    answers: {
        a: "PT ",
        b: "INR (international normalized ratio)",
        c: "aPTT (activated partial thromboplastin time) ",
        d: "Fibrin degradation products (FDP)"
    },
    correctAnswer: "c"
},
{
    question: "117. A client with diabetes mellitus is receiving regular insulin. The nurse knows that the client should be monitored for hypoglycemia at what time following administration of regular insulin?",
    answers: {
        a: "15 minutes after injection",
        b: "30 minutes after injection",
        c: "1 hour after injection",
        d: "2 hours after injection "
    },
    correctAnswer: "d"
},
{
    question: "118. A client is admitted with a suspected myocardial infarction (MI). What medication is administered immediately to treat an acute MI?",
    answers: {
        a: "Aspirin",
        b: "Morphine",
        c: "Nitroglycerin",
        d: "Alteplase "
    },
    correctAnswer: "d"
},
{
    question: "119. A client is experiencing alcohol withdrawal. Which of the following medications is used as the first-line treatment for alcohol withdrawal?",
    answers: {
        a: "Lorazepam",
        b: "Olanzapine",
        c: "Chlordiazepoxide (Librium) ",
        d: "Haloperidol"
    },
    correctAnswer: "c"
},
{
    question: "120. A client is receiving chemotherapy and is at risk for neutropenia. What is the priority nursing intervention to prevent infection in this client?",
    answers: {
        a: "Administering prophylactic antibiotics",
        b: "Maintaining strict isolation",
        c: "Limiting visitors",
        d: "Frequent hand washing "
    },
    correctAnswer: "d"
},
{
    question: "121. According to WHO anaemia in pregnancy is diagnosed when hemoglobin level is less than?",
    answers: {
        a: "9 mg/dl",
        b: "10 gm/dl",
        c: "11 gm/dl ",
        d: "12 gm/dl"
    },
    correctAnswer: "c"
},
{
    question: "122. A birth hazard associated with breech delivery may be?",
    answers: {
        a: "Abruptio placenta",
        b: "Cephalohematoma",
        c: "Pathological jaundice",
        d: "Compression of cord "
    },
    correctAnswer: "d"
},
{
    question: "123. The main objective of antenatal visit is?",
    answers: {
        a: "To prevent congenital defects in the fetus",
        b: "To help give birth to a healthy child from a healthy mother ",
        c: "To prevent complications to the mother regarding lactation",
        d: "To provide education regarding lactation"
    },
    correctAnswer: "b"
},
{
    question: "124. A nurse teaches a woman in the fertility clinic that after ovulation has occurred, the ovum remains viable for?",
    answers: {
        a: "1 to 6 hours",
        b: "12 to 18 hours",
        c: "24 to 36 hours ",
        d: "48 to 72 hours"
    },
    correctAnswer: "c"
},
{
    question: "125. Ovulation occurs when?",
    answers: {
        a: "Oxytocin level is high",
        b: "Progesterone level is high",
        c: "Luteinizing hormone level is high ",
        d: "Chorionic gonadotropin level is high"
    },
    correctAnswer: "c"
},
{
    question: "126. Safest administration of drugs, the nurse should follow the right?",
    answers: {
        a: "4 rights",
        b: "5 rights",
        c: "6 rights ",
        d: "7 rights"
    },
    correctAnswer: "c"
},
{
    question: "127. The nurse assessing the client's casted extremity, which finding indicates infection?",
    answers: {
        a: "Edema",
        b: "Coolness of the skin",
        c: "Weak distal pulse",
        d: "Presence of a hot spot on the cast "
    },
    correctAnswer: "d"
},
{
    question: "128. The first step to be taken for a client with a fracture would be?",
    answers: {
        a: "Reassure the client",
        b: "Transfer to a health facility",
        c: "Use of padding",
        d: "Immobilization "
    },
    correctAnswer: "d"
},
{
    question: "129. For correct palpation of the breast (during breast examination), the nurse uses her:",
    answers: {
        a: "Heel of hand",
        b: "Index finger and thumb",
        c: "General finger only",
        d: "Pads of her fingertips "
    },
    correctAnswer: "d"
},
{
    question: "130. For what clinical indicator should a nurse assess ",
    answers: {
        a: "Client who is having a gastric lavage ",
        b: "Increased serum bicarbonate level",
        c: "Increased serum oxygen level",
        d: "Decreased serum osmotic level"
    },
    correctAnswer: "a"
},
{
    question: "131. The most common cause of death in burn cases is?",
    answers: {
        a: "Hypovolemic shock ",
        b: "Septic shock",
        c: "Vasovagal shock",
        d: "Traumatic shock"
    },
    correctAnswer: "a"
},
{
    question: "132. In adults, intravenous fluid is given if the burn exceeds?",
    answers: {
        a: "2%",
        b: "10%",
        c: "5%",
        d: "15% "
    },
    correctAnswer: "d"
},
{
    question: "133. In a water seal drainage bottle should be?",
    answers: {
        a: "Above the chest level of the patient",
        b: "Below the chest level of the patient ",
        c: "At the level of the chest",
        d: "At any convenient level"
    },
    correctAnswer: "b"
},
{
    question: "134. Pulmonary edema is associated with?",
    answers: {
        a: "Right-sided heart failure",
        b: "Left-sided heart failure ",
        c: "Myocardial infarction",
        d: "Ventricular fibrillation"
    },
    correctAnswer: "b"
},
{
    question: "135. The nurse understands that a client with dysphagia has difficulty?",
    answers: {
        a: "Writing",
        b: "Focusing",
        c: "Swallowing ",
        d: "Understanding"
    },
    correctAnswer: "c"
},
{
    question: "136. If a patient is getting streptokinase, what is essential for the nurse to monitor?",
    answers: {
        a: "Hypovolemia",
        b: "Hypotension",
        c: "Bleeding ",
        d: "Loose stools"
    },
    correctAnswer: "c"
},
{
    question: "137. The main health problem of young adults is?",
    answers: {
        a: "Accidents ",
        b: "Dementia",
        c: "ASD",
        d: "Cardiovascular problems"
    },
    correctAnswer: "a"
},
{
    question: "138. Chronic health problems are  very common in",
    answers: {
        a: "Adolescene",
        b: "Adulthood",
        c: "Young adulthood ",
        d: "Older adulthood" 
    },
    correctAnswer: "d"
},
{
    question: "139. If a patient is unable to breath in horizontal position it is called:",
    answers: {
        a: "Dysnpea",
        b: "Hypernea",
        c: "orthopnea",
        d: "Apnea"
    },
    correctAnswer: "c"
},
{
    question: "140. Before giving digoxin, the nurse assess:",
    answers: {
        a: "Heart rate",
        b: "Blood pressure",
        c: "Heart Sounds",
        d: "Lung sound"
    },
    correctAnswer: "a"
},
{
    question: "141. Homan's sign is an assessment used to detect:",
    answers: {
        a: "Venous thrombosis",
        b: "Appendicitis",
        c: "Peripheral edema",
        d: "Pulmonary edema"
    },
    correctAnswer: "a"
},
{
    question: "142. The clinical indicator of a patient with Cushing syndrome is:",
    answers: {
        a: "Menorrhagia",
        b: "Buffalo hump",
        c: "Dependent edema",
        d: "Migraine headache"
    },
    correctAnswer: "b"
},
{
    question: "143. Echolalia is a disorder of :",
    answers: {
        a: "Speech",
        b: "Hearing",
        c: "Mood",
        d: "Perception"
    },
    correctAnswer: "a"
},
{
    question: "144. Prolong use of alcohol in excess leads to:",
    answers: {
        a: "Cirrhosis of liver",
        b: "Lung Disease",
        c: "Kidney Disease",
        d: "Bone Disease"
    },
    correctAnswer: "a"
},
{
    question: "145. Otitis media is the inflammation of:",
    answers: {
        a: "Middle ear",
        b: "Outer ear",
        c: "Inner ear",
        d: "None of the above"
    },
    correctAnswer: "a"
},
{
    question: "146. Which is a clinical indicator parasympathetic dominance in a client under stress?",
    answers: {
        a: "Constipation",
        b: "Goose pimple",
        c: "Increase GI secretion",
        d: "Excess epinephrine section"
    },
    correctAnswer: "c"
},
{
    question: "147. The nurse is caring a client with chronic kidney failure. Which adaptation should the nurse expect?",
    answers: {
        a: "Polyuria",
        b: "Hypotension",
        c: "Muscle Twitching",
        d: "Respiratory acidosis"
    },
    correctAnswer: "c"
},
{
    question: "148. The client with open burn wounds begin to have diarrhea. The client is found to have  normal temp. with WBC of 4000 which is nurse best action",
    answers: {
        a: "Continuing to monitor the client",
        b: "increase temp in room",
        c: "increase rate of IV fluid",
        d: "Preparing to do workup for sepsis"
    },
    correctAnswer: "c"
},
{
    question: "149. A patient has experienced full thickness burns to face and neck. As nurse it is priority to?",
    answers: {
        a: "Prevent hypothemia",
        b: "Assess blood pressure",
        c: "Assess Airway",
        d: "Prevent from infection"
    },
    correctAnswer: "c"
},
{
    question: "150. Sympathetic stimulation of urinary bladder results in",
    answers: {
        a: "Contraction of internal urethral sphincter",
        b: "Contraction of internal urethral sphincter and trigone of bladder",
        c: "Relaxation of internal urethral sphincter",
        d: "Relaxation if internal urethral sphincter and trigone of bladder"
    },
    correctAnswer: "b"
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
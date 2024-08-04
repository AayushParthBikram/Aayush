const quizData = [
    {
        "question": "How many passes does an insertion sort algorithm consist of?",
        "options": [
          "N",
          "N-1",
          "N+1",
          "N2"
        ],
        "correctAnswer": "N-1",
        "explanation": "An insertion algorithm consists of N-1 passes when an array of N elements is given."
      },
      {
        "question": "Which of the following algorithm implementations is similar to that of an insertion sort?",
        "options": [
          "Binary heap",
          "Quick sort",
          "Merge sort",
          "Radix sort"
        ],
        "correctAnswer": "Binary heap",
        "explanation": "Insertion sort is similar to that of a binary heap algorithm because of the use of temporary variable to swap."
      },
      {
        "question": "What is the average case running time of an insertion sort algorithm?",
        "options": [
          "O(N)",
          "O(N log N)",
          "O(log N)",
          "O(N2)"
        ],
        "correctAnswer": "O(N2)",
        "explanation": "The average case analysis of a tight bound algorithm is mathematically achieved to be O(N2)."
      },
      {
        "question": "Any algorithm that sorts by exchanging adjacent elements require O(N2) on average.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Each swap removes only one inversion, so O(N2) swaps are required."
      },
      {
        "question": "What is the average number of inversions in an array of N distinct numbers?",
        "options": [
          "N(N-1)/4",
          "N(N+1)/2",
          "N(N-1)/2",
          "N(N-1)/3"
        ],
        "correctAnswer": "N(N-1)/4",
        "explanation": "The total number of pairs in a list L is N(N-1)/2. Thus, an average list has half this amount, or N(N-1)/4 inversions."
      },
      {
        "question": "What is the running time of an insertion sort algorithm if the input is pre-sorted?",
        "options": [
          "O(N2)",
          "O(N log N)",
          "O(N)",
          "O(M log N)"
        ],
        "correctAnswer": "O(N)",
        "explanation": "If the input is pre-sorted, the running time is O(N), because the test in the inner for loop always fails immediately and the algorithm will run quickly."
      },
      {
        "question": "What will be the number of passes to sort the elements using insertion sort? 14, 12, 16, 6, 3, 10",
        "options": [
          "6",
          "5",
          "7",
          "1"
        ],
        "correctAnswer": "5",
        "explanation": "The number of passes is given by N-1. Here, N=6. Therefore, 6-1=5 passes."
      },
      {
        "question": "For the following question, how will the array elements look like after the second pass? 34, 8, 64, 51, 32, 21",
        "options": [
          "8, 21, 32, 34, 51, 64",
          "8, 32, 34, 51, 64, 21",
          "8, 34, 51, 64, 32, 21",
          "8, 34, 64, 51, 32, 21"
        ],
        "correctAnswer": "8, 34, 64, 51, 32, 21",
        "explanation": "After swapping elements in the second pass, the array will look like, 8, 34, 64, 51, 32, 21."
      },
      {
        "question": "Which of the following real-time examples is based on insertion sort?",
        "options": [
          "arranging a pack of playing cards",
          "database scenarios and distributes scenarios",
          "arranging books on a library shelf",
          "real-time systems"
        ],
        "correctAnswer": "arranging a pack of playing cards",
        "explanation": "Arranging a pack of cards mimics an insertion sort. Database scenario is an example for merge sort, arranging books is a stack, and real-time systems use quick sort."
      },
      {
        "question": "In C, what are the basic loops required to perform an insertion sort?",
        "options": [
          "do-while",
          "if else",
          "for and while",
          "for and if"
        ],
        "correctAnswer": "for and while",
        "explanation": "To perform an insertion sort, we use two basic loops- an outer for loop and an inner while loop."
      },
      {
        "question": "Binary search can be used in an insertion sort algorithm to reduce the number of comparisons.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Binary search can be used in an insertion sort algorithm to reduce the number of comparisons. This is called a Binary insertion sort."
      },
      {
        "question": "Which of the following options contain the correct feature of an insertion sort algorithm?",
        "options": [
          "anti-adaptive",
          "dependable",
          "stable, not in-place",
          "stable, adaptive"
        ],
        "correctAnswer": "stable, adaptive",
        "explanation": "An insertion sort is stable, adaptive, in-place, and incremental in nature."
      },
      {
        "question": "Which of the following sorting algorithms is the fastest for sorting small arrays?",
        "options": [
          "Quick sort",
          "Insertion sort",
          "Shell sort",
          "Heap sort"
        ],
        "correctAnswer": "Insertion sort",
        "explanation": "For sorting small arrays, insertion sort runs even faster than quick sort. But, it is impractical to sort large arrays."
      },
      {
        "question": "For the best case input, the running time of an insertion sort algorithm is?",
        "options": [
          "Linear",
          "Binary",
          "Quadratic",
          "Depends on the input"
        ],
        "correctAnswer": "Linear",
        "explanation": "The best case input for an insertion sort algorithm runs in linear time and is given by O(N)."
      },
      {
        "question": "Which of the following examples represent the worst case input for an insertion sort?",
        "options": [
          "array in sorted order",
          "array sorted in reverse order",
          "normal unsorted array",
          "large array"
        ],
        "correctAnswer": "array sorted in reverse order",
        "explanation": "The worst case input for an insertion sort algorithm will be an array sorted in reverse order and its running time is quadratic."
      },
      {
        "question": "What is the advantage of selection sort over other sorting techniques?",
        "options": [
          "It requires no additional storage space",
          "It is scalable",
          "It works best for inputs which are already sorted",
          "It is faster than any other sorting technique"
        ],
        "correctAnswer": "It requires no additional storage space",
        "explanation": "Since selection sort is an in-place sorting algorithm, it does not require additional storage."
      },
      {
        "question": "What is the average case complexity of selection sort?",
        "options": [
          "O(nlogn)",
          "O(logn)",
          "O(n)",
          "O(n2)"
        ],
        "correctAnswer": "O(n2)",
        "explanation": "In the average case, even if the input is partially sorted, selection sort behaves as if the entire array is not sorted. Selection sort is insensitive to input."
      },
      {
        "question": "What is the disadvantage of selection sort?",
        "options": [
          "It requires auxiliary memory",
          "It is not scalable",
          "It can be used for small keys",
          "It takes linear time to sort the elements"
        ],
        "correctAnswer": "It is not scalable",
        "explanation": "As the input size increases, the performance of selection sort decreases."
      },
      {
        "question": "The given array is arr = {3,4,5,2,1}. The number of iterations in bubble sort and selection sort respectively are __________",
        "options": [
          "5 and 4",
          "4 and 5",
          "2 and 4",
          "2 and 5"
        ],
        "correctAnswer": "5 and 4",
        "explanation": "Since the input array is not sorted, bubble sort takes 5 iterations and selection sort takes 4(n-1) iterations."
      },
      {
        "question": "The given array is arr = {1,2,3,4,5}. (bubble sort is implemented with a flag variable)The number of iterations in selection sort and bubble sort respectively are __________",
        "options": [
          "5 and 4",
          "1 and 4",
          "0 and 4",
          "4 and 1"
        ],
        "correctAnswer": "4 and 1",
        "explanation": "Selection sort is insensitive to input, hence 4(n-1) iterations. Whereas bubble sort iterates only once to set the flag to 0 as the input is already sorted."
      },
      {
        "question": "What is the best case complexity of selection sort?",
        "options": [
          "O(nlogn)",
          "O(logn)",
          "O(n)",
          "O(n2)"
        ],
        "correctAnswer": "O(n2)",
        "explanation": "The best, average and worst case complexities of selection sort is O(n2).\n(n-1) + (n-2) + (n-3) + …. + 1 = (n(n-1))/2 ~ (n2)/2."
      },
      {
        "question": "What is the best case efficiency of bubble sort in the improvised version?",
        "options": [
          "O(nlogn)",
          "O(logn)",
          "O(n)",
          "O(n2)"
        ],
        "correctAnswer": "O(n)",
        "explanation": "Some iterations can be skipped if the list is sorted, hence efficiency improves to O(n)."
      },
      {
        "question": "The given array is arr = {1,2,4,3}. Bubble sort is used to sort the array elements. How many iterations will be done to sort the array with improvised version?",
        "options": [
          "4",
          "2",
          "1",
          "0"
        ],
        "correctAnswer": "2",
        "explanation": "Only 2 elements in the given array are not sorted, hence only 2 iterations are required to sort them."
      },
      {
        "question": "What is the average case complexity of bubble sort?",
        "options": [
          "O(nlogn)",
          "O(logn)",
          "O(n)",
          "O(n2)"
        ],
        "correctAnswer": "O(n2)",
        "explanation": "Bubble sort works by starting from the first element and swapping the elements if required in each iteration even in the average case."
      },
      {
        "question": "Which of the following is not an advantage of optimised bubble sort over other sorting techniques in case of sorted elements?",
        "options": [
          "It is faster",
          "Consumes less memory",
          "Detects whether the input is already sorted",
          "Consumes less time"
        ],
        "correctAnswer": "Detects whether the input is already sorted",
        "explanation": "Optimised Bubble sort is one of the simplest sorting techniques and perhaps the only advantage it has over other techniques is that it can detect whether the input is already sorted. It is faster than other in case of sorted array and consumes less time to describe whether the input array is sorted or not. It consumes same memory than other sorting techniques. Hence it is not an advantage."
      },
      {
        "question": "The given array is arr = {1, 2, 4, 3}. Bubble sort is used to sort the array elements. How many iterations will be done to sort the array?",
        "options": [
          "4",
          "2",
          "1",
          "0"
        ],
        "correctAnswer": "4",
        "explanation": "Even though the first two elements are already sorted, bubble sort needs 4 iterations to sort the given array."
      },
      {
        "question": "What is an external sorting algorithm?",
        "options": [
          "Algorithm that uses tape or disk during the sort",
          "Algorithm that uses main memory during the sort",
          "Algorithm that involves swapping",
          "Algorithm that are considered ‘in place’"
        ],
        "correctAnswer": "Algorithm that uses tape or disk during the sort",
        "explanation": "As the name suggests, external sorting algorithm uses external memory like tape or disk."
      },
      {
        "question": "What is an internal sorting algorithm?",
        "options": [
          "Algorithm that uses tape or disk during the sort",
          "Algorithm that uses main memory during the sort",
          "Algorithm that involves swapping",
          "Algorithm that are considered ‘in place’"
        ],
        "correctAnswer": "Algorithm that uses main memory during the sort",
        "explanation": "As the name suggests, internal sorting algorithm uses internal main memory."
      },
      {
        "question": "What is the worst case complexity of bubble sort?",
        "options": [
          "O(nlogn)",
          "O(logn)",
          "O(n)",
          "O(n2)"
        ],
        "correctAnswer": "O(n2)",
        "explanation": "Bubble sort works by starting from the first element and swapping the elements if required in each iteration."
      },
      {
        "question": "Merge sort uses which of the following technique to implement sorting?",
        "options": [
          "backtracking",
          "greedy algorithm",
          "divide and conquer",
          "dynamic programming"
        ],
        "correctAnswer": "divide and conquer",
        "explanation": "Merge sort uses divide and conquer in order to sort a given array. This is because it divides the array into two halves and applies merge sort algorithm to each half individually after which the two sorted halves are merged together."
      },
      {
        "question": "What is the average case time complexity of merge sort?",
        "options": [
          "O(n log n)",
          "O(n2)",
          "O(n2 log n)",
          "O(n log n2)"
        ],
        "correctAnswer": "O(n log n)",
        "explanation": "The recurrence relation for merge sort is given by T(n) = 2T(n/2) + n. It is found to be equal to O(n log n) using the master theorem."
      },
      {
        "question": "What is the auxiliary space complexity of merge sort?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n log n)"
        ],
        "correctAnswer": "O(n)",
        "explanation": "An additional space of O(n) is required in order to merge two sorted arrays. Thus merge sort is not an in place sorting algorithm."
      },
      {
        "question": "Merge sort can be implemented using O(1) auxiliary space.",
        "options": [
          "true",
          "false"
        ],
        "correctAnswer": "true",
        "explanation": "Standard merge sort requires O(n) space to merge two sorted arrays. We can optimize this merging process so that it takes only constant space. This version is known as in place merge sort."
      },
      {
        "question": "What is the worst case time complexity of merge sort?",
        "options": [
          "O(n log n)",
          "O(n2)",
          "O(n2 log n)",
          "O(n log n2)"
        ],
        "correctAnswer": "O(n log n)",
        "explanation": "The time complexity of merge sort is not affected by worst case as its algorithm has to implement the same number of steps in any case. So its time complexity remains to be O(n log n)."
      },
      {
        "question": "Which of the following method is used for sorting in merge sort?",
        "options": [
          "merging",
          "partitioning",
          "selection",
          "exchanging"
        ],
        "correctAnswer": "merging",
        "explanation": "Merge sort algorithm divides the array into two halves and applies merge sort algorithm to each half individually after which the two sorted halves are merged together. Thus its method of sorting is called merging."
      },
      {
        "question": "What will be the best case time complexity of merge sort?",
        "options": [
          "O(n log n)",
          "O(n2)",
          "O(n2 log n)",
          "O(n log n2)"
        ],
        "correctAnswer": "O(n log n)",
        "explanation": "The time complexity of merge sort is not affected in any case as its algorithm has to implement the same number of steps. So its time complexity remains to be O(n log n) even in the best case."
      },
      {
        "question": "Which of the following is not a variant of merge sort?",
        "options": [
          "in-place merge sort",
          "bottom up merge sort",
          "top down merge sort",
          "linear merge sort"
        ],
        "correctAnswer": "linear merge sort",
        "explanation": "In-place, top down and bottom up merge sort are different variants of merge sort. Whereas linear merge sort is not a possible variant as it is a comparison based sort and the minimum time complexity of any comparison based sort is O(n log n)."
      },
      {
        "question": "Choose the incorrect statement about merge sort from the following?",
        "options": [
          "it is a comparison based sort",
          "it is an adaptive algorithm",
          "it is not an in place algorithm",
          "it is stable algorithm"
        ],
        "correctAnswer": "it is an adaptive algorithm",
        "explanation": "Merge sort is not an adaptive sorting algorithm. This is because it takes O(n log n) time complexity irrespective of any case."
      },
      {
        "question": "Which of the following is not in place sorting algorithm by default?",
        "options": [
          "merge sort",
          "quick sort",
          "heap sort",
          "insertion sort"
        ],
        "correctAnswer": "merge sort",
        "explanation": "Quick sort, heap sort, and insertion sort are in-place sorting algorithms, whereas an additional space of O(n) is required in order to merge two sorted arrays. Even though we have a variation of merge sort (to do in-place sorting), it is not the default option. So, among the given choices, merge sort is the most appropriate answer."
      },
      {
        "question": "Which of the following is not a stable sorting algorithm?",
        "options": [
          "Quick sort",
          "Cocktail sort",
          "Bubble sort",
          "Merge sort"
        ],
        "correctAnswer": "Quick sort",
        "explanation": "Out of the given options quick sort is the only algorithm which is not stable. Merge sort is a stable sorting algorithm."
      },
      {
        "question": "Which of the following stable sorting algorithm takes the least time when applied to an almost sorted array?",
        "options": [
          "Quick sort",
          "Insertion sort",
          "Selection sort",
          "Merge sort"
        ],
        "correctAnswer": "Merge sort",
        "explanation": "Insertion sort takes linear time to sort a partially sorted array. Though merge and quick sort takes O(n*logn) complexity to sort, merge sort is stable. Hence, Merge sort takes less time to sort partially sorted array."
      },
      {
        "question": "Merge sort is preferred for arrays over linked lists.",
        "options": [
          "true",
          "false"
        ],
        "correctAnswer": "false",
        "explanation": "Merge sort is preferred for linked list over arrays. It is because in a linked list the insert operation takes only O(1) time and space which implies that we can implement merge operation in constant time."
      },
      {
        "question": "Which of the following sorting algorithm makes use of merge sort?",
        "options": [
          "tim sort",
          "intro sort",
          "bogo sort",
          "quick sort"
        ],
        "correctAnswer": "tim sort",
        "explanation": "Tim sort is a hybrid sorting algorithm as it uses more than one sorting algorithm internally. It makes use of merge sort and insertion sort."
      },
      {
        "question": "Which of the following sorting algorithms is the fastest?",
        "options": [
          "Merge sort",
          "Quick sort",
          "Insertion sort",
          "Shell sort"
        ],
        "correctAnswer": "Quick sort",
        "explanation": "Quick sort is the fastest known sorting algorithm because of its highly optimized inner loop."
      },
      {
        "question": "Quick sort follows Divide-and-Conquer strategy.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "In quick sort, the array is divided into sub-arrays and then it is sorted (divide-and-conquer strategy)."
      },
      {
        "question": "What is the worst case time complexity of a quick sort algorithm?",
        "options": [
          "O(N)",
          "O(N log N)",
          "O(N2)",
          "O(log N)"
        ],
        "correctAnswer": "O(N2)",
        "explanation": "The worst case performance of a quick sort algorithm is mathematically found to be O(N2)."
      },
      {
        "question": "Which of the following methods is the most effective for picking the pivot element?",
        "options": [
          "First element",
          "Last element",
          "Median-of-three partitioning",
          "Random element"
        ],
        "correctAnswer": "Median-of-three partitioning",
        "explanation": "Median-of-three partitioning is the best method for choosing an appropriate pivot element. Picking a first, last or random element as a pivot is not much effective."
      },
      {
        "question": "Find the pivot element from the given input using median-of-three partitioning method.\n8, 1, 4, 9, 6, 3, 5, 2, 7, 0.",
        "options": [
          "8",
          "7",
          "9",
          "6"
        ],
        "correctAnswer": "6",
        "explanation": "Left element=8, right element=0,\nCentre=[position(left+right)/2]=6."
      },
      {
        "question": "Which is the safest method to choose a pivot element?",
        "options": [
          "Choosing a random element as pivot",
          "Choosing the first element as pivot",
          "Choosing the last element as pivot",
          "Median-of-three partitioning method"
        ],
        "correctAnswer": "Choosing a random element as pivot",
        "explanation": "This is the safest method to choose the pivot element since it is very unlikely that a random pivot would consistently provide a poor partition."
      },
      {
        "question": "What is the average running time of a quick sort algorithm?",
        "options": [
          "O(N2)",
          "O(N)",
          "O(N log N)",
          "O(log N)"
        ],
        "correctAnswer": "O(N log N)",
        "explanation": "The best case and average case analysis of a quick sort algorithm are mathematically found to be O(N log N)."
      },
      {
        "question": "Which of the following sorting algorithms is used along with quick sort to sort the sub arrays?",
        "options": [
          "Merge sort",
          "Shell sort",
          "Insertion sort",
          "Bubble sort"
        ],
        "correctAnswer": "Insertion sort",
        "explanation": "Insertion sort is used along with quick sort to sort the sub arrays.\nIt is used only at the end."
      },
      {
        "question": "Quick sort uses join operation rather than merge operation.",
        "options": [
          "True",
          "False"
        ],
        "correctAnswer": "True",
        "explanation": "Quick sort uses join operation since join is a faster operation than merge."
      },
      {
        "question": "How many sub arrays does the quick sort algorithm divide the entire array into?",
        "options": [
          "One",
          "Two",
          "Three",
          "Four"
        ],
        "correctAnswer": "Two",
        "explanation": "The entire array is divided into two partitions, 1st sub array containing elements less than the pivot element and 2nd sub array containing elements greater than the pivot element."
      },
      {
        "question": "Which is the worst method of choosing a pivot element?",
        "options": [
          "First element as pivot",
          "Last element as pivot",
          "Median-of-three partitioning",
          "Random element as pivot"
        ],
        "correctAnswer": "First element as pivot",
        "explanation": "Choosing the first element as pivot is the worst method because if the input is pre-sorted or in reverse order, then the pivot provides a poor partition."
      },
      {
        "question": "Which among the following is the best cut-off range to perform insertion sort within a quick sort?",
        "options": [
          "N=0-5",
          "N=5-20",
          "N=20-30",
          "N>30"
        ],
        "correctAnswer": "N=5-20",
        "explanation": "A good cut-off range is anywhere between N=5 and N=20 to avoid nasty degenerate cases."
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
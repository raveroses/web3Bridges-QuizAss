const quizQuestions = [
    {
        question: "What is the output of the following code?",
        code: `console.log(typeof null);`,
        options: {
            A: "'null'",
            B: "'object'",
            C: "'undefined'",
            D: "'number'"
        },
        correctAnswer: "B"
    },
    {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        code: ``,
        options: {
            A: "var x = 10;",
            B: "let x = 10;",
            C: "const x = 10;",
            D: "All of the above"
        },
        correctAnswer: "D"
    },
    {
        question: "What will be the output of the following code?",
        code: `let x = 5;\nx++;\nconsole.log(x);`,
        options: {
            A: "4",
            B: "5",
            C: "6",
            D: "7"
        },
        correctAnswer: "C"
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        code: ``,
        options: {
            A: "pop()",
            B: "push()",
            C: "shift()",
            D: "unshift()"
        },
        correctAnswer: "A"
    },
    {
        question: "What is the purpose of the 'use strict' directive in JavaScript?",
        code: ``,
        options: {
            A: "To enforce stricter parsing and error handling in the code",
            B: "To optimize the code for performance",
            C: "To enable the use of modern JavaScript features",
            D: "To define a strict scope for variables"
        },
        correctAnswer: "A"
    },
    {
        question: "What will be the output of the following code?",
        code: `console.log('10' == 10);`,
        options: {
            A: "true",
            B: "false",
            C: "TypeError",
            D: "undefined"
        },
        correctAnswer: "A"
    },
    {
        question: "How can you create an array in JavaScript?",
        code: ``,
        options: {
            A: "let arr = ();",
            B: "let arr = [];",
            C: "let arr = {};",
            D: "let arr = <>;"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the output of the following code?",
        code: `let arr = [1, 2, 3];\nconsole.log(arr.length);`,
        options: {
            A: "1",
            B: "2",
            C: "3",
            D: "undefined"
        },
        correctAnswer: "C"
    },
    {
        question: "Which operator is used to assign a value to a variable in JavaScript?",
        code: ``,
        options: {
            A: "==",
            B: "===",
            C: "=",
            D: "<="
        },
        correctAnswer: "C"
    },
    {
        question: "What will be the output of the following code?",
        code: `let a = true + false;\nconsole.log(a);`,
        options: {
            A: "1",
            B: "truefalse",
            C: "NaN",
            D: "undefined"
        },
        correctAnswer: "A"
    },
    {
        question: "Which of the following is not a primitive data type in JavaScript?",
        code: ``,
        options: {
            A: "String",
            B: "Number",
            C: "Boolean",
            D: "Object"
        },
        correctAnswer: "D"
    },
    {
        question: "What is the output of the following code?",
        code: `console.log(typeof []);`,
        options: {
            A: "'array'",
            B: "'object'",
            C: "'undefined'",
            D: "'null'"
        },
        correctAnswer: "B"
    },
    {
        question: "Which method is used to add one or more elements to the beginning of an array?",
        code: ``,
        options: {
            A: "push()",
            B: "pop()",
            C: "shift()",
            D: "unshift()"
        },
        correctAnswer: "D"
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        code: ``,
        options: {
            A: "To refer to the current object",
            B: "To declare a new object",
            C: "To bind a function",
            D: "To create a closure"
        },
        correctAnswer: "A"
    },
    {
        question: "What will be the output of the following code?",
        code: `let x = '5';\nlet y = 2;\nconsole.log(x * y);`,
        options: {
            A: "'52'",
            B: "'10'",
            C: "10",
            D: "NaN"
        },
        correctAnswer: "C"
    },
    {
        question: "Which of the following is a way to create a function in JavaScript?",
        code: ``,
        options: {
            A: "function myFunction() {}",
            B: "let myFunction = function() {}",
            C: "let myFunction = () => {}",
            D: "All of the above"
        },
        correctAnswer: "D"
    },
    {
        question: "What is the output of the following code?",
        code: `console.log(1 + '2' + 3);`,
        options: {
            A: "'123'",
            B: "6",
            C: "'15'",
            D: "NaN"
        },
        correctAnswer: "A"
    },
    {
        question: "Which of the following is true about JavaScript?",
        code: ``,
        options: {
            A: "JavaScript is a strongly typed language",
            B: "JavaScript is a loosely typed language",
            C: "JavaScript is a compiled language",
            D: "JavaScript does not support object-oriented programming"
        },
        correctAnswer: "B"
    },
    {
        question: "What will be the output of the following code?",
        code: `let x = 0;\nif (x) {\n  console.log('True');\n} else {\n  console.log('False');\n}`,
        options: {
            A: "'True'",
            B: "'False'",
            C: "TypeError",
            D: "undefined"
        },
        correctAnswer: "B"
    },
    {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        code: ``,
        options: {
            A: "JSON.parse()",
            B: "JSON.stringify()",
            C: "JSON.objectify()",
            D: "JSON.convert()"
        },
        correctAnswer: "A"
    },
    {
        question: "What will be the output of the following code?",
        code: `let str = 'JavaScript';\nconsole.log(str.charAt(4));`,
        options: {
            A: "'a'",
            B: "'S'",
            C: "'v'",
            D: "'J'"
        },
        correctAnswer: "C"
    },
    {
        question: "Which of the following is the correct way to write an arrow function in JavaScript?",
        code: ``,
        options: {
            A: "let myFunction = => {}",
            B: "let myFunction = () => {}",
            C: "let myFunction = () {}",
            D: "let myFunction => {}"
        },
        correctAnswer: "B"
    },
    {
        question: "What will be the output of the following code?",
        code: `console.log(5 == '5');`,
        options: {
            A: "true",
            B: "false",
            C: "TypeError",
            D: "undefined"
        },
        correctAnswer: "A"
    },
    {
        question: "Which of the following is used to handle exceptions in JavaScript?",
        code: ``,
        options: {
            A: "try...catch",
            B: "if...else",
            C: "for...loop",
            D: "while...loop"
        },
        correctAnswer: "A"
    },
    {
        question: "What is the output of the following code?",
        code: `console.log(5 === '5');`,
        options: {
            A: "true",
            B: "false",
            C: "TypeError",
            D: "undefined"
        },
        correctAnswer: "B"
    },
    {
        question: "Which method is used to join all elements of an array into a string?",
        code: ``,
        options: {
            A: "join()",
            B: "concat()",
            C: "push()",
            D: "toString()"
        },
        correctAnswer: "A"
    },
    {
        question: "What will be the output of the following code?",
        code: `let a;\nconsole.log(a);`,
        options: {
            A: "null",
            B: "undefined",
            C: "0",
            D: "NaN"
        },
        correctAnswer: "B"
    },
    {
        question: "Which of the following is not a looping structure in JavaScript?",
        code: ``,
        options: {
            A: "for",
            B: "while",
            C: "foreach",
            D: "do...while"
        },
        correctAnswer: "C"
    },
    {
        question: "What will be the output of the following code?",
        code: `let obj = { a: 1, b: 2 };\nconsole.log(Object.keys(obj));`,
        options: {
            A: "['a', 'b']",
            B: "[1, 2]",
            C: "'a', 'b'",
            D: "Error"
        },
        correctAnswer: "A"
    },
    {
        question: "Which of the following is used to create an asynchronous function in JavaScript?",
        code: ``,
        options: {
            A: "async/await",
            B: "setTimeout",
            C: "Promise",
            D: "All of the above"
        },
        correctAnswer: "D"
    },
    {
        question: "What will be the output of the following code?",
        code: `let x = [1, 2, 3];\nconsole.log(x[1]);`,
        options: {
            A: "1",
            B: "2",
            C: "3",
            D: "undefined"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the purpose of the spread operator (...) in JavaScript?",
        code: ``,
        options: {
            A: "To create arrays",
            B: "To copy objects",
            C: "To spread elements of an array or object",
            D: "To concatenate strings"
        },
        correctAnswer: "C"
    },
    {
        question: "What will be the output of the following code?",
        code: `let arr = [1, 2, 3, 4, 5];\nconsole.log(arr.slice(2, 4));`,
        options: {
            A: "[1, 2]",
            B: "[3, 4]",
            C: "[4, 5]",
            D: "[2, 3, 4]"
        },
        correctAnswer: "B"
    },
    {
        question: "Which of the following is a way to add elements to an array in JavaScript?",
        code: ``,
        options: {
            A: "push()",
            B: "concat()",
            C: "unshift()",
            D: "All of the above"
        },
        correctAnswer: "D"
    },
    {
        question: "What is the output of the following code?",
        code: `let num = 10;\nconsole.log(num.toString(2));`,
        options: {
            A: "'10'",
            B: "'1010'",
            C: "'2'",
            D: "'undefined'"
        },
        correctAnswer: "B"
    },
    {
        question: "What will be the output of the following code?",
        code: `let num = [1, 2, 3];\nconsole.log(num.reverse());`,
        options: {
            A: "[3, 2, 1]",
            B: "[1, 2, 3]",
            C: "[2, 3, 1]",
            D: "Error"
        },
        correctAnswer: "A"
    },
    {
        question: "Which method is used to find the index of an element in an array?",
        code: ``,
        options: {
            A: "indexOf()",
            B: "findIndex()",
            C: "find()",
            D: "search()"
        },
        correctAnswer: "A"
    },
    {
        question: "What will be the output of the following code?",
        code: `let str = 'JavaScript';\nconsole.log(str.includes('Script'));`,
        options: {
            A: "true",
            B: "false",
            C: "TypeError",
            D: "undefined"
        },
        correctAnswer: "A"
    },
    {
        question: "Which of the following is the correct way to define a class in JavaScript?",
        code: ``,
        options: {
            A: "class MyClass {}",
            B: "let MyClass = {}",
            C: "function MyClass() {}",
            D: "MyClass = {}"
        },
        correctAnswer: "A"
    },
    {
        question: "What will be the output of the following code?",
        code: `let x = 5;\nconsole.log(x === 5 && x < 10);`,
        options: {
            A: "true",
            B: "false",
            C: "TypeError",
            D: "undefined"
        },
        correctAnswer: "A"
    },
    {
        question: "Which method is used to remove the first element from an array?",
        code: ``,
        options: {
            A: "pop()",
            B: "shift()",
            C: "unshift()",
            D: "slice()"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the output of the following code?",
        code: `let x = 10;\nconsole.log(x % 3);`,
        options: {
            A: "1",
            B: "2",
            C: "3",
            D: "4"
        },
        correctAnswer: "B"
    },
    {
        question: "Which of the following is true about the Array.map() method?",
        code: ``,
        options: {
            A: "It modifies the original array",
            B: "It creates a new array with the results of calling a function on every element",
            C: "It filters the array",
            D: "It reduces the array to a single value"
        },
        correctAnswer: "B"
    },
    {
        question: "What will be the output of the following code?",
        code: `let a = [1, 2, 3];\nlet b = a;\nb.push(4);\nconsole.log(a);`,
        options: {
            A: "[1, 2, 3]",
            B: "[1, 2, 3, 4]",
            C: "[4, 2, 3]",
            D: "[1, 2, 4]"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the output of the following code?",
        code: `let a = 5;\nlet b = '5';\nconsole.log(a === b);`,
        options: {
            A: "true",
            B: "false",
            C: "TypeError",
            D: "undefined"
        },
        correctAnswer: "B"
    },
    {
        question: "Which method is used to filter elements of an array that pass a test?",
        code: ``,
        options: {
            A: "filter()",
            B: "find()",
            C: "map()",
            D: "reduce()"
        },
        correctAnswer: "A"
    },
    {
        question: "What will be the output of the following code?",
        code: `let a = 0;\nlet b = a++;\nconsole.log(b);`,
        options: {
            A: "0",
            B: "1",
            C: "NaN",
            D: "undefined"
        },
        correctAnswer: "A"
    },
    {
        question: "Which method is used to create a shallow copy of an array?",
        code: ``,
        options: {
            A: "copy()",
            B: "slice()",
            C: "splice()",
            D: "map()"
        },
        correctAnswer: "B"
    },
    {
        question: "What is the output of the following code?",
        code: `let arr = [1, 2, 3, 4];\narr.length = 2;\nconsole.log(arr);`,
        options: {
            A: "[1, 2]",
            B: "[1, 2, 3, 4]",
            C: "[1, 2, undefined, undefined]",
            D: "[]"
        },
        correctAnswer: "A"
    },
    {
        question: "What will be the output of the following code?",
        code: `let obj = { a: 1 };\nlet newObj = Object.assign({}, obj);\nnewObj.a = 2;\nconsole.log(obj.a);`,
        options: {
            A: "1",
            B: "2",
            C: "undefined",
            D: "Error"
        },
        correctAnswer: "A"
    },
];


let image= document.querySelector(".image");
let quizRules= document.querySelector(".quizRules");
let exist=document.querySelector(".exist");
let continues= document.querySelector(".continue");
let questionmother=document.querySelector(".questionmother");


let number= document.querySelector(".number p");
let progressPlace=document.querySelector(".progressPlace");
let questionStarter= document.querySelector(".questionStarter");
let optionList= document.querySelector(".optionList");
let nextBtn= document.querySelector(".nextBtn");


let sec = 15;
let time=document.querySelector(".time span")
let retry=document.querySelector(".resultModal button")
let currentIndex=0;
let score=0;
let timer; 

image.addEventListener("click", function(e){
e.preventDefault();
if(quizRules.classList.contains("quizrulesHidden")){
    quizRules.classList.remove("quizrulesHidden");
    image.classList.add("quizrulesHidden");
}else{
    quizRules.classList.add("quizrulesHidden");
    image.classList.remove("quizrulesHidden")
}

})

exist.addEventListener("click",function(){
    quizRules.classList.add("quizrulesHidden");
    image.classList.remove("quizrulesHidden")
})

continues.addEventListener("click",function(){
if(questionmother.classList.contains("questionHidden")){
    questionmother.classList.remove("questionHidden");
    quizRules.classList.add("quizrulesHidden");
}
})






function DisplayQuestion(zero){
    questionStarter.innerHTML = '';
optionList.innerHTML = '';
    let quetionHeading= document.createElement("p");
    quetionHeading.textContent= quizQuestions[zero].question;
questionStarter.appendChild(quetionHeading);



if(quizQuestions[zero].code){
    let code= document.createElement("p");
    code.textContent= quizQuestions[zero].code;
    code.style.paddingTop="5px"
    questionStarter.appendChild(code);
}

number.textContent=`${zero}/${quizQuestions.length}`
DivIncrement(zero);

let correct= quizQuestions[zero].correctAnswer;
Object.entries(quizQuestions[zero].options).forEach(([keys,value])=> {
    let divClass= document.createElement("div");
    divClass.className="option";
let spanAnswer= document.createElement("span");
spanAnswer.textContent=value;
divClass.appendChild(spanAnswer);





divClass.addEventListener("click",function handleClick(e){
    e.preventDefault()
    let resultModal=document.querySelector(".resultModal h1")

    if(sec > 0){
    if(keys === correct){
        divClass.style.backgroundColor="green";
        score++;
    }else{
        divClass.style.backgroundColor="darkred";
       divClass.removeEventListener("click", handleClick);
    // }
    resultModal.textContent=`${score}/50`;
    }
    optionList.querySelectorAll(".option").forEach(option => {
        option.style.pointerEvents = "none";
        option.removeEventListener("click", handleClick);
    })
}else{
    optionList.querySelectorAll(".option").forEach(option => {
        option.style.pointerEvents = "none";
        option.removeEventListener("click", handleClick);
    });

}})
    
    
    
    
    

optionList.appendChild(divClass)
});

startTimer()
}

 DisplayQuestion(currentIndex)


 
function NextQuestion(){
    currentIndex++;
 
    if(currentIndex >= quizQuestions.length){
        let modal= document.querySelector(".modal");
    
        if(modal.classList.contains("modalhidden")){
            modal.classList.remove("modalhidden")
            retry.addEventListener("click",function(){
                questionmother.classList.remove("questionHidden");
                modal.classList.add("modalhidden");
                currentIndex=0;
                score=0;
                DisplayQuestion(currentIndex);
                startTimer()
            })

            questionmother.classList.add("questionHidden");
        }else{
            modal.classList.add("modalhidden");
            questionmother.classList.remove("questionHidden")
        }
    }else{
        DisplayQuestion(currentIndex)
    }
    startTimer()
}

    
nextBtn.addEventListener("click",function(e){
    e.preventDefault()
    NextQuestion()
    
})



function DivIncrement(zero){
    zero = Math.min(zero + 50, 100);
progressPlace.style.width=`${zero}%`;
progressPlace.style.transition="width 0.3s ease";
    return zero;
    }

    
   

    
    function resetTimer() {
        sec = 15;
        time.textContent = sec; 
    }
    
    function clearExistingTimer() {
        if (timer) {
            clearInterval(timer);
        }
    }
    
    function startCountdown(zero) {
        timer = setInterval(() => {
            if (sec > 0) {
                sec--;
                time.textContent = sec;
            } else {
                clearInterval(timer);
            }
        }, 1000);
    }
    
    function startTimer() {
        resetTimer();        
        clearExistingTimer();
        startCountdown(currentIndex);   
    }
    startTimer(); 

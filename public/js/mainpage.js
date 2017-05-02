var allSelector = document.getElementById("all");


/**
    Add one question/answer pair to DOM
*/
function displayOneQuestion(qa) {
    var list = document.getElementById("qa-list");
    var qaLi = document.createElement("li");
    var question = document.createElement("a");
    question.className="question";
    var answer = document.createElement("a");
    answer.className="answer"
   
    question.innerText = qa.question;
    answer.innerText = qa.answer;

    qaLi.appendChild(question);
    qaLi.appendChild(answer);
    
    displayOneQuestionControls(qaLi);
    list.appendChild(qaLi);
}

/**
    Setup answer toggle
*/
function setupAnswerToggle(qaLi, answerToggle) {
    answerToggle.onclick = function() {
        var cl = qaLi.className;
        if (cl && cl.includes("hide-answer")) {
            qaLi.className = "";
        } else {
            qaLi.className = "hide-answer";
        }
            
        console.log (this.className);
    }
}


/**
    Display controls for one questions
*/

function displayOneQuestionControls(qaLi) {
     var controls =  document.createElement("div");
     controls.className = "qa-controls";
     var del = document.createElement("a");
     del.className = "delete-qa";
     del.innerText = "Delete";
     var answerToggle = document.createElement("a");
     answerToggle.className = "answer-toggle";
     answerToggle.innerText = "Hide Answer";
    
     controls.appendChild(del);
     controls.appendChild(answerToggle);
    
     setupAnswerToggle(qaLi, answerToggle);
     qaLi.appendChild(controls);
}



/**
    add list of question/answers to the webpage
    (practicing "while" loop, we should have remove the whole container instead)
*/
function displayQuestions(qaItems) {
    
    // cleanup the list before regenerating
    var qas = document.getElementById("qa-list").childNodes;
    while (qas.length > 0) {
        qas[0].remove();
    }

    // create list    
    for (var i = 0; i < qaItems.length; i++) {
        displayOneQuestion(qaItems[i]);
    };
}

/** 
    display all categories 
*/
allSelector.onclick = function(){
    qaApi.getAll(displayQuestions);
};


document.querySelector('.main-nav').onclick = function(e) {
    var category = e.target.dataset.category;

    if (category) {
        qaApi.getCategory(category, displayQuestions);
    }
}


document.querySelector("#new-question").onclick = function(e) {
    document.querySelector("#question-box").visibility="hidden";
    document.querySelector("#question-form-box").visibility="visible";
}

// show all question on page render
document.addEventListener("DOMContentLoaded", function(event) { 
   // qaApi.getAll(displayQuestions);
});

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
    qaLi.dataset.questionid = qa.id;
    
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
            answerToggle.innerText = "Hide Answer";
        } else {
            qaLi.className = "hide-answer";
            answerToggle.innerText = "Show Answer";
        }
            
        console.log (this.className);
    }
}

/** Setup delete Question button 
*/

function setupDeleteQA(qaLi, delEl) {
    delEl.onclick = function() {
        var response = confirm("Are you sure you want to remove this question");
        if (response) {
            console.log("Delete this " + qaLi.dataset.questionid);
            qaApi.deleteQuestion(qaLi.dataset.questionid, 
                function() {
                    qaLi.remove();
            });
        }
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
     setupDeleteQA(qaLi,del);
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
    Create one question and refresh question list
*/
function postQA() {  
    var o = {
        question: document.getElementById('qtext').value,
        answer: document.getElementById('atext').value,
        category: document.getElementById('input-cat').value
    };         
    qaApi.createQuestion(o, function (){
        console.log("your questions are posted");
        // change view
        toggleHidden(document.querySelector("#qa-section"), false);
        toggleHidden(document.querySelector("#question-form-box"), true);
        //get data in 
        qaApi.getAll(displayQuestions);
    });    
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
    toggleHidden(document.querySelector("#qa-section"), false);
    toggleHidden(document.querySelector("#question-form-box"), true);
}

function toggleHidden(el, hide) {
    if (hide) {
        el.style.visibility = "hidden";
        el.style.display="none";
    } else {
        el.style.visibility = "visible";
        el.style.display="block";
    }
}

document.querySelector("#new-question").onclick = function(e) {
    toggleHidden(document.querySelector("#qa-section"), true);
    toggleHidden(document.querySelector("#question-form-box"), false);
}

// show all question on page render
document.addEventListener("DOMContentLoaded", function(event) { 
   qaApi.getAll(displayQuestions);
});


document.getElementById('submitBtn').onclick = postQA;

var allSelector = document.getElementById("all");

function setupAnswerToggle(answer) {
    var button = document.createElement("button");
    button.innerHTML = '&#9786; Answer!';
    button.onclick = function() {
        //this.parentNode.appendChild(showAnswer);
        //showAnswer.innerHTML = "&#9752; " + qa.answer;
        answer.className = "show qaWrap green";
        this.className = "hide";
    }

    return button;
}

function displayOneQuestion(qa) {
    var questionBox = document.getElementById("question-box");
    var container = document.createElement("div");
    var header = document.createElement("h3");
    var sentence = document.createElement("p");
    var answer = document.createElement("p");
    answer.className = "hide";

    var hideQuestion = document.createElement("button");
    hideQuestion.innerHTML = "&#9986; Hide";
    hideQuestion.onclick = function() {
        this.parentNode.className = "hide qaWrap";
    }
    
    var showAnswer = setupAnswerToggle(answer);

    header.innerText = 'Question' + qa.id;
    sentence.innerText = ': ' + qa.question;
    answer.innerText = ': ' + qa.answer;

    container.appendChild(header);
    container.appendChild(hideQuestion);
    container.appendChild(showAnswer);
    container.appendChild(sentence);
    container.appendChild(answer); 
    container.className = "show qaWrap";
    questionBox.appendChild(container);
}

function displayQuestions(qaItems) {

    var removeWrap = document.getElementsByClassName("qaWrap");

    while (removeWrap.length > 0) {
        removeWrap[0].remove();
    }

    for (var i = 0; i < qaItems.length; i++) {
        displayOneQuestion(qaItems[i]);
    };
}


allSelector.onclick = function(){
    qaApi.getAll(displayQuestions);
};
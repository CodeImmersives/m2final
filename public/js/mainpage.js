var allSelector = document.getElementById("all");

function setupAnswerToggle(answer) {
    var button = document.createElement("button");
    button.innerHTML  = '&#9786; Answer!';
    button.onclick = function () {
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
        var checkBox = document.createElement("INPUT");
        var header = document.createElement("h3");
        var sentence = document.createElement("p");
        var answer = document.createElement("p");
        
        var deleteAnswer = document.createElement("button");
            deleteAnswer.onclick = function () {
            this.parentNode.className = "hide qaWrap";
        }
  
        checkBox.setAttribute("type", "checkbox");        
        header.innerText = 'Question' + qa.id;
        sentence.innerText = ': ' + qa.question;
        answer.innerText = ': ' + qa.answer;
    
        deleteAnswer.innerHTML = "&#9986; Delete";

        container.className = "show qaWrap";
        
        var showAnswer = setupAnswerToggle(answer);  
      
        questionBox.appendChild(container);
        container.appendChild(header);
        header.appendChild(checkBox);
        container.appendChild(deleteAnswer);
        container.appendChild(showAnswer);
        container.appendChild(sentence);
        container.appendChild(answer);
    
        
}

function displayQuestions(qaItems) {
    // todo clear container first
    var removeWrap = document.getElementsByClassName("qaWrap");
    
    while (removeWrap.length > 0) {
        removeWrap[0].remove();
    }
    
    for (var i = 0; i < qaItems.length; i++) {
      displayOneQuestion(qaItems[i]);
    };
}

var baseurl = window.location.origin;

function getAll() {                
    var xhttp = new XMLHttpRequest();
    var url = baseurl + "/qas"
      xhttp.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           var questions = JSON.parse(this.responseText);
           console.log(questions);
           displayQuestions(questions);
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();                
};




allSelector.onclick = getAll;

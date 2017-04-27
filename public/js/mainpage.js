var allSelector = document.getElementById("all");

function displayOneQuestion(qa) {
        var questionBox = document.getElementById("question-box");
        var container = document.createElement("div");
        var checkBox = document.createElement("INPUT");
        var header = document.createElement("h3");
        var sentence = document.createElement("p");
        var deleteAnswer = document.createElement("button");
        var answer = document.createElement("button");
        var showAnswer = document.createElement("p");
        
        deleteAnswer.onclick = function () {
        this.parentNode.className = "hide qaWrap";
        }
        
        answer.onclick = function () {
            this.parentNode.appendChild(showAnswer);
            showAnswer.innerHTML = "&#9752; " +qa.answer;
            showAnswer.className = "show qaWrap green";
        }
        
        checkBox.setAttribute("type", "checkbox");        
        header.innerText = 'Question' + qa.id;
        sentence.innerText = ': ' + qa.question;
        deleteAnswer.innerHTML = "&#9986; Delete";
        answer.innerHTML  = '&#9786; Answer!';
        container.className = "show qaWrap";
        
    
        questionBox.appendChild(container);
        container.appendChild(header);
        header.appendChild(checkBox);
        container.appendChild(deleteAnswer);
        container.appendChild(answer);
        container.appendChild(sentence);
}

function displayQuestions(qaItems) {
    // todo clear conttainer first
    var removeWrap = document.getElementsByClassName("qaWrap");
    
    while (removeWrap.length > 0) {
        removeWrap[0].remove();
    }
    
    for (var i = 0; i < qaItems.length; i++) {
      displayOneQuestion(qaItems[i]);
    };
}


    
    // error this function(let's check it out later)

var baseurl = "http://localhost:3000";

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

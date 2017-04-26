var allSelector = document.getElementById("all");

function createQuestion() {
    var questionBox = document.getElementById("question-box");

    for (var i = 0; i <7; i++) {
        var checkBox = document.createElement("INPUT");
        var header = document.createElement("h3");
        var sentence = document.createElement("p");
        var answer = document.createElement("button");
        
        checkBox.setAttribute("type", "checkbox");        
        header.innerText = 'Question' + qaItems[i].id;
        sentence.innerText = ':' + qaItems[i].question;
        answer.innerText  = 'Answer!';

        questionBox.appendChild(header);
        header.appendChild(checkBox);
        questionBox.appendChild(answer);
        questionBox.appendChild(sentence);
    };
    
    // error this function(let's check it out later)
    checkBox.onchange = function() {
        if (this.checked) {
            this.questionBox.className = "hide";
            header.removeChild(checkBox);
            questionBox.removeChild(answer);
            questionBox.removeChild(sentence);
        };
    }

}
    

allSelector.onclick = createQuestion;

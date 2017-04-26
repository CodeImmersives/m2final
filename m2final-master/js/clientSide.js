function postSomeData() {
    var o = {
        question: "lorem ipsum question 1",
        answer: "lorem ipsum question 2"
    };

    var xhttp = new XMLHttpRequest();
    var url = "http://localhost:3000/qas";

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

    xhttp.open("POST", url, true);

    xhttp.setRequestHeader("Content-Type", "application/json");

    xhttp.send(JSON.stringify(o));
}


document.querySelector('#postdata').onclick = postSomeData;

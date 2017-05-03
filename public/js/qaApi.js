
var baseurl = window.location.origin;

var qaApi = {
    getAll: function(callback){                
        var xhttp = new XMLHttpRequest();
        var url = baseurl + "/qas"
          xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
               var questions = JSON.parse(this.responseText);
               console.log(questions);
               callback(questions);
            }
          };
          xhttp.open("GET", url, true);
          xhttp.send();                
    },
    
    getCategory: function(cat, callback) {
        var xhttp = new XMLHttpRequest();
        var url = baseurl + "/qas?category=" + encodeURIComponent(cat);
        
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               var questions = JSON.parse(this.responseText);
               console.log(questions);
               callback(questions);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();                
    },
    
    deleteQuestion: function(questionId, callback) {
        var xhttp = new XMLHttpRequest();
        var url = baseurl + "/qas/" + questionId;
          xhttp.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                callback();
            }
          };
          xhttp.open("DELETE", url, true);
          xhttp.send();
    },
    

    createQuestion: function(qa, callback) {
        var xhttp = new XMLHttpRequest();
        var url = baseurl + "/qas";
                
        xhttp.onreadystatechange = function() {
    
            if (this.readyState == 4 && this.status == 200) {
                console.log("got my response back for real");
               // console.log(this.responseText);
                callback();
            }
        };
        
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(JSON.stringify(qa));
        
    }
   
}
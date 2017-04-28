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
    }
}
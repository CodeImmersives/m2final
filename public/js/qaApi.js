
var qaApi = {
    getAll: function(callback){                
        var xhttp = new XMLHttpRequest();
        var url = window.location.origin + "/qas"
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

    getCategory: function() {}
}
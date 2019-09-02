(function(){
    console.log("Test Javascript");
    
    function fun()
    {
        console.log("Inside fun");
    
    };
    
    window.loadDoc = function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
           document.getElementById("demo").innerHTML = this.responseText;
          }
        };
        xhttp.open("GET", "https://www.eventbriteapi.com/v3/events/search/?token=TLZ2ZAVIUBAW44GVQG7Q&page=1", true);
        xhttp.send();
      }})();
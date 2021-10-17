// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
                
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("https://simsim-s.github.io/WebDevCourse/aj_exs1/data/name.txt", 
            function (request) {
              var name = request.responseText;
              

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
  }
);






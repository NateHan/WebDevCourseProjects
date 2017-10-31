document.getElementById("buttonChange").addEventListener("click", function(){
    if (document.body.style.background !== "red") {
      document.body.style.background = "red";
    } else {
      document.body.style.background = "blue";
    }
  });

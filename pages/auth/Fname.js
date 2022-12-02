let fnameInput=document.getElementById("Fname");
let lets = document.getElementById("letter");
fnameInput.onfocus = function() {
    document.getElementById("error").style.display = "block";
  }
  
  fmameInput.onblur = function() {
    document.getElementById("error").style.display = "none";
  }

  fnameInput.onkeyup = function() {
    let lowerCaseLetters = /[a-z]/g;
    if(fnameInput.value.match(lowerCaseLetters)) {
      lets.classList.remove("invalid");
      lets.classList.add("valid");
    } else {
      lets.classList.remove("valid");
      lets.classList.add("invalid");
    }}
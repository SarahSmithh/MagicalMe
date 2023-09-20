function Answer(){
  var password=document.getElementById("quizQuestion");
  var passwordText=password.value.toUpperCase();
  if (passwordText =="FLORIDA"){
    return true;
  }
  alert("WRONG!")
  return false;
}
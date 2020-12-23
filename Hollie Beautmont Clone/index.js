var fname=document.querySelector("#fname");
var lname=document.querySelector("#lname");
var email=document.querySelector("#email");
var business=document.querySelector("#business");
var project=document.querySelector("#project");


document.querySelector("#btn").addEventListener("click" , function(){
if(fname.value === ""){
  document.querySelectorAll("input")[0].style.borderColor="#cc3b3b";
  document.querySelectorAll("label")[0].style.color="#cc3b3b";
  document.querySelectorAll(".error")[0].style.display="inline";
}else{
  document.querySelectorAll(".error")[0].style.display="none";
}

if(lname.value === ""){
  document.querySelectorAll("input")[1].style.borderColor="#cc3b3b";
  document.querySelectorAll("label")[1].style.color="#cc3b3b";
  document.querySelectorAll(".error")[1].style.display="inline";
}else {
  document.querySelectorAll(".error")[1].style.display="none";
}

if(email.value === ""){
  document.querySelectorAll("input")[2].style.borderColor="#cc3b3b";
  document.querySelectorAll("label")[2].style.color="#cc3b3b";
  document.querySelectorAll(".error")[2].style.display="inline";
}else{
  document.querySelectorAll(".error")[2].style.display="none";
}

if(business.value === ""){
  document.querySelectorAll("textarea")[0].style.borderColor="#cc3b3b";
  document.querySelectorAll("label")[4].style.color="#cc3b3b";
  document.querySelectorAll(".error")[3].style.display="inline";
}else{
  document.querySelectorAll(".error")[3].style.display="none";
}

if(project.value === ""){
  document.querySelectorAll("textarea")[1].style.borderColor="#cc3b3b";
  document.querySelectorAll("label")[5].style.color="#cc3b3b";
  document.querySelectorAll(".error")[4].style.display="inline";
}else{
  document.querySelectorAll(".error")[4].style.display="none";
}



});


















// var targetInput = document.querySelector("input");
//
// for(var i=0; i<targetInput; i++){
//   document.querySelectorAll(".input-border")[i];
// }
//
//
// document.querySelector("#btn").addEventListener("click" , function(){
// if(targetInput.value ==="" ){
//   document.querySelectorAll("input")[0].style.borderColor="hsl(0, 100%, 74%)";
//     document.querySelectorAll("input")[1].style.borderColor="hsl(0, 100%, 74%)";
//     document.querySelectorAll("input")[2].style.borderColor="hsl(0, 100%, 74%)";
//     document.querySelectorAll("textarea")[0].style.borderColor="hsl(0, 100%, 74%)";
//     document.querySelectorAll("textarea")[1].style.borderColor="hsl(0, 100%, 74%)";
//
//
//
// }else{
//
// }
//
//
// });

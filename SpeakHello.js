(function (window){
var SaludoH={};
var speakWord = "Hello";
SaludoH.speak=function (name) {
  console.log(speakWord + " " + name);
};
 
window.SaludoH=SaludoH;
})(window);


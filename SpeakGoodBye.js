(function (window){
var Despedida={};
var speakWord = "Good Bye";
Despedida.speak=function (name) {
  console.log(speakWord + " " + name);
};
 
window.Despedida=Despedida;
})(window);
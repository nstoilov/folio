
function shrug() {
    document.getElementById("button1").setAttribute("value", " つ -_- ༽つ");
    
    document.getElementById("text").setAttribute("transform", "rotate(-20 20,80)")
    document.getElementById("text").setAttribute("fill", "red");
    for (var i = 0; i < document.getElementsByClassName("inner").length; i++) {
	document.getElementsByClassName("inner")[i].setAttribute("fill", "yellow");
}
 
    setTimeout(function(){
    document.getElementById("button1").setAttribute("value", " つ ◕_◕ ༽つ");    
     }, 100);
    setTimeout(function(){        
    document.getElementById("text").setAttribute("transform", "rotate(-25 20,80)");
    document.getElementById("text").setAttribute("fill", "black");
    for (var i = 0; i < document.getElementsByClassName("inner").length; i++) {
	document.getElementsByClassName("inner")[i].setAttribute("fill", "white");

}
     }, 300);
 }
  

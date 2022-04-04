
console.log("Hello World");

console.log( document.getElementById("field1").value )
console.log( document.getElementById("field2").value )
console.log( document.getElementById("field3").value )
console.log( document.getElementById("field4").value )

document.getElementById("mybutton1").onclick = function() {

  document.getElementById("word1").innerHTML = document.getElementById("field1").value;
  document.getElementById("word1").style.fontWeight = "700";

  document.getElementById("word2").innerHTML = document.getElementById("field2").value;
  document.getElementById("word2").style.fontWeight = "700";

  document.getElementById("word3").innerHTML = document.getElementById("field3").value;
  document.getElementById("word3").style.fontWeight = "700";

  document.getElementById("word4").innerHTML = document.getElementById("field4").value;
  document.getElementById("word4").style.fontWeight = "700";

  document.getElementById("word5").innerHTML = document.getElementById("field5").value;
  document.getElementById("word5").style.fontWeight = "700";

  document.getElementById("word6").innerHTML = document.getElementById("field6").value;
  document.getElementById("word6").style.fontWeight = "700";

  document.getElementById("word7").innerHTML = document.getElementById("field7").value;
  document.getElementById("word7").style.fontWeight = "700";

  document.getElementById("word8").innerHTML = document.getElementById("field8").value;
  document.getElementById("word8").style.fontWeight = "700";

  document.getElementById("word9").innerHTML = document.getElementById("field9").value;
  document.getElementById("word9").style.fontWeight = "700";

  document.getElementById("word10").innerHTML = document.getElementById("field10").value;
  document.getElementById("word10").style.fontWeight = "700";

  window.scrollTo(0,0);
  document.getElementById("story").style.display = "block";
  document.getElementById("pinkrect").style.display = "none";
  document.getElementById("mybutton1").style.display = "none";
  document.getElementById("mybutton2").style.display = "block";
}

document.getElementById("mybutton2").onclick = function() {
  window.scrollTo(0,0);
  document.getElementById("story").style.display = "none";
  document.getElementById("pinkrect").style.display = "block";
  document.getElementById("mybutton1").style.display = "block";
  document.getElementById("mybutton2").style.display = "none";
}

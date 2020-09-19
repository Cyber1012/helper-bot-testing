var myArray = [
    "Pro",
    "Coder",
    "Captain"
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    function myFunction() {
    var x = document.getElementById("myForm").elements[0].value + " and " + randomItem ;
    document.getElementById("demo").innerHTML = x;
  }
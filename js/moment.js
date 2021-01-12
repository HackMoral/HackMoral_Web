
var btn = document.getElementById("btnCounter");

var count = 5;     // Set count
var timer = null;  // For referencing the timer

(function countDown(){
  // Display counter and start counting down

  // Run the function again every second if the count is not zero
  if(count !== 0){
    timer = setTimeout(countDown, 1000);
    count--; // decrease the timer
  } else {
    // Enable the button
    btn.removeAttribute("disabled");
  }
}());
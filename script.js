

// Simulate an alarm trigger based on conditions.
// Task:
// Ask the user two yes/no questions:
// Is the door open? (yes or no)
// Is motion detected? (yes or no)
// Use if conditions to print:
// "Alarm Triggered" if either condition is yes.
// "All Safe" if both conditions are no.


var doorOpen = prompt("Doors are open/close");
var motionDetected = prompt("Motion detected Yes/No");

if(doorOpen === "open" || motionDetected === "yes")
   {
  console.log("Alarm Triggered");
}
 else if (doorOpen === "close" && motionDetected === "no") {
  console.log("All Safe");
} 
else {
  console.log("Invalid input. Please enter 'open' or 'close' for the door status, and 'yes' or 'no' for motion detection.");
}

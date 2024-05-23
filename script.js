// calculater progrm
let display=document.getElementById("display")
const dis=document.getElementById("disable")

function appendToDisplay(input){
  display.value += input;
}

function calculate(){
  try{
    display.value=eval(display.value);
  }
  catch(error){
    display.value="Error"
    
    setTimeout(()=>{
      display.value=""
    }, 1000)
  }
}

function clearDisplay(){
  display.value = "";
}
function simulateBackspace() {
  var inputField = document.getElementById('display');
  var currentValue = inputField.value;
  // Check if there are characters to remove
  if (currentValue.length > 0) {
    // Remove the last character
    var newValue = currentValue.substring(0, currentValue.length - 1);
    // Update the input field with the new value
    inputField.value = newValue;
  }
}
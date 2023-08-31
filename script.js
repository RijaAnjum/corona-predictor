
const arraySize = 10;
const defaultValue = ""; 

const array = initializeArray(arraySize, defaultValue);


function addValueAtIndex(index, value) {
  if (index >= 0 && index < array.length) {
    array[index] = value;
  }
}

function calculate() {
  if (
    array[1] === "yes" &&
    array[2] === "yes" &&
    array[4] === "yes" &&
    array[6] === "yes" &&
    array[8] === "yes" &&
    array[9] === "yes"
  ) {
    window.location.href = "result1.html";
  } else if (
    array[1] === "yes" &&
    array[2] === "yes" &&
    array[4] === "yes"
  ) {
    window.location.href = "result2.html";
  } else {
    window.location.href = "result3.html";
  }
}


  
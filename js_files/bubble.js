function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue('height');
  const transform2 = style2.getPropertyValue('height');

  el1.style.height = transform2;
  el2.style.height = transform1;
}
const sleepNow = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

async function bubbleSort() {
  document.getElementById('arr_sz').disabled = true;
  document.getElementById('spd').disabled = true;
  document.getElementById('selection').disabled = true;
  document.getElementById('merge').disabled = true;
  document.getElementById('quick').disabled = true;
  document.getElementById('insertion').disabled = true;
  newArrayButton.setAttribute('disabled', 'true');
  var no_of_bar = document.getElementById('arr_sz').value; //get inputs from sliders
  var the_speed = document.getElementById('spd').value;
  for (var i = 0; i < no_of_bar; i++) {
    var j;
    // Last i elements are already in place
    for (j = 0; j < no_of_bar - i - 1; j++) {
      await sleepNow(100 - the_speed); //delay

      // Checking if the item at present iteration
      // is greater than the next iteration
      if (num[j] > num[j + 1]) {
        special[j + 1].style.background = 'orangered';
        special[j].style.background = 'orangered';
        // If the condition is true then swap them

        var temp = num[j];
        num[j] = num[j + 1];
        num[j + 1] = temp;

        swap(special[j], special[j + 1]);
        await sleepNow(100 - the_speed); //for delay
        special[j + 1].style.background = 'dodgerblue';
        special[j].style.background = 'dodgerblue';
      }
    }
    special[j].style.background = 'lightgreen';
  }
  newArrayButton.removeAttribute('disabled');
  document.getElementById('arr_sz').disabled = false;
  document.getElementById('spd').disabled = false;
  document.getElementById('selection').disabled = false;
  document.getElementById('merge').disabled = false;
  document.getElementById('quick').disabled = false;
  document.getElementById('insertion').disabled = false;
}

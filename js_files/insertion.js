async function insertionSort() {
  newArrayButton.setAttribute('disabled', 'true');
  document.getElementById('arr_sz').disabled = true;
  document.getElementById('spd').disabled = true;
  document.getElementById('selection').disabled = true;
  
  document.getElementById('quick').disabled = true;
  document.getElementById('bubble').disabled = true;
  var no_of_bar = document.getElementById('arr_sz').value;
  var the_speed = document.getElementById('spd').value;

  for (let i = 1; i < no_of_bar; i++) {
    // Choosing the first element in our unsorted subarray
    let current = num[i];
    const currenta = window
      .getComputedStyle(special[i])
      .getPropertyValue('height');
    // The last element of our sorted subarray
    let j = i - 1;
    while (j > -1 && current < num[j]) {
      special[j + 1].style.background = 'red';
      await sleepNow(100 - the_speed);
      num[j + 1] = num[j];
      const currentb = window
        .getComputedStyle(special[j])
        .getPropertyValue('height');
      special[j + 1].style.height = currentb;
      special[j + 1].style.background = 'green';
      j--;
    }
    num[j + 1] = current;
    special[j + 1].style.height = currenta;
    special[j + 1].style.background = 'green';
  }
  newArrayButton.removeAttribute('disabled');
  document.getElementById('arr_sz').disabled = false;
  document.getElementById('spd').disabled = false;
  document.getElementById('selection').disabled = false;
  
  document.getElementById('quick').disabled = false;
  document.getElementById('bubble').disabled = false;
}

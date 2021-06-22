async function insertionSort() {
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
}

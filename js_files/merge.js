const _mergeArrays = (a, b) => {
  const c = [];

  while (a.length && b.length) {
    c.push(a[0] > b[0] ? b.shift() : a.shift());
  }

  //if we still have values, let's add them at the end of `c`
  while (a.length) {
    c.push(a.shift());
  }
  while (b.length) {
    c.push(b.shift());
  }

  return c;
};

function mergeSort() {
  var no_of_bar = document.getElementById('arr_sz').value; //get inputs from sliders
  var the_speed = document.getElementById('spd').value;
  for (var i = 0; i < no_of_bar; i++) {
    var j;
    // Last i elements are already in place
    for (j = 0; j < no_of_bar - i - 1; j++) {
      await sleepNow(100 - the_speed); //delay
      const middle = Math.floor(special.length / 2);
      const a_l = special.slice(0, middle);
      const a_r = special.slice(middle, a.length);
      const sorted_l = mergeSort(a_l);
      const sorted_r = mergeSort(a_r);
      num = _mergeArrays(sorted_l, sorted_r);
      // Checking if the item at present iteration
      // is greater than the next iteration

      special[j + 1].style.background = 'orangered';
      special[j].style.background = 'orangered';
      // If the condition is true then swap them

      await sleepNow(100 - the_speed); //for delay
      special[j + 1].style.background = 'dodgerblue';
      special[j].style.background = 'dodgerblue';
    }
  }
  special[j].style.background = 'lightgreen';
}

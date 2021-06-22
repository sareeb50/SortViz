
function quickSort()
{
    var no_of_bar = document.getElementById("arr_sz").value;
    var the_speed = document.getElementById("spd").value;
    quickSortRecursive( 0, no_of_bar - 1);
    
}

async function quickSortRecursive(start, end) 
{
    var the_speed = document.getElementById("spd").value;
    // Base case or terminating case
    if (start >= end) 
    {
        return;
    }
   






    //partition
    const pivotValue = num[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) 
    {
        
        if (num[i] < pivotValue) 
        {
        // Swapping elements
        await sleepNow(100-the_speed);
        special[i].style.background="red";
        special[pivotIndex].style.background="red";
        swap(special[i],special[pivotIndex]);
        [num[i], num[pivotIndex]] = [num[pivotIndex], num[i]];
        await sleepNow(100-the_speed);
        special[i].style.background="green";
        special[pivotIndex].style.background="green";
        // Moving to next element
        pivotIndex++;
        }
    }
    await sleepNow(100-the_speed);
    // Putting the pivot value in the middle
    swap(special[end],special[pivotIndex]);
    special[end].style.background="green";
    special[pivotIndex].style.background="green";
    [num[pivotIndex], num[end]] = [num[end], num[pivotIndex]] ;
    
   








    // Returns pivotIndex
    let index = pivotIndex;
    
    // Recursively apply the same logic to the left and right subarrays
    quickSortRecursive(start, index - 1);
    
    quickSortRecursive(index + 1, end);

    
}
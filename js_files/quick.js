function quickSort()
{
    var no_of_bar = document.getElementById("arr_sz").value;
    quickSortRecursive( 0, no_of_bar - 1);
}
function partition(start, end)
{
    
    
    // Taking the last element as the pivot
    const pivotValue = num[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) 
    {
        
        if (num[i] < pivotValue) 
        {
        // Swapping elements
        
        swap(special[i],special[pivotIndex]);
        [num[i], num[pivotIndex]] = [num[pivotIndex], num[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    swap(special[end],special[pivotIndex]);
    [num[pivotIndex], num[end]] = [num[end], num[pivotIndex]] ;
    return pivotIndex;
}

function quickSortRecursive(start, end) 
{
    //var the_speed = document.getElementById("spd").value;
    // Base case or terminating case
    if (start >= end) {
        return;
    }
    
    
    // Returns pivotIndex
    let index = partition(start, end);
    
    // Recursively apply the same logic to the left and right subarrays
    quickSortRecursive(start, index - 1);
    quickSortRecursive(index + 1, end);
}
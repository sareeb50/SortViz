async function selectionSort() 
{ 
    var no_of_bar = document.getElementById("arr_sz").value;
    var the_speed = document.getElementById("spd").value;    
    for(let i = 0; i < no_of_bar; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < no_of_bar; j++)
        {
            if(num[j] < num[min]) 
            {
                min=j; 
            }
         }
         if (min != i) 
         {
            
            special[i].style.background="red";
            special[min].style.background="red"; 
            await sleepNow(100-the_speed);
            // Swapping the elements
             swap(special[i],special[min]);
             let tmp = num[i]; 
             num[i] = num[min];
             num[min] = tmp; 
             
             special[i].style.background="yellow";
             special[min].style.background="yellow";
             await sleepNow(100-the_speed);

        }
        special[i].style.background="green";
    }
    
}
var num = [];
var special = [];







function newBars()
{
    
    var no_of_bar = document.getElementById("arr_sz").value;
    document.getElementById("arr_sz").addEventListener("input",newBars);
    document.getElementById('bars').innerHTML = ''
    for (let i = 0; i < no_of_bar; i++) 
    {
        num[i] = Math.floor(Math.random() * 100);
        special[i] = document.createElement("DIV");
        
         
        special[i].classList.add("barstyle");
        special[i].style.background = "yellow";
        special[i].style.height= num[i]*4 + "px";
        
        
        special[i].style.float="left";
        document.getElementById("bars").appendChild(special[i]);
        
         

    } 

    var elements = document.getElementsByClassName("barstyle");
    for(var i=0; i<elements.length; i++) { 
        elements[i].style.margin="2px";
        elements[i].style.width=(950-2*2*no_of_bar)/no_of_bar + "px";

      }
    
    
}
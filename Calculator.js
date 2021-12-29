 let display=document.getElementById("display")
//  console.log(display)
 
 let prev =document.getElementById("prev")
//  console.log(prev)





 function buttonClick(event)
 {
     let str=event.innerHTML
    //  console.log(str)
     

          switch(str){
           case "=" :display.innerText= eval(display.innerText)
              prev.innerText=display.innerText
              break;
           case "C" : display.innerText=""
              prev.innerText=""
              break;
           case "←": display.innerText= display.innerText.slice(0,-1)
              break;
              case "+": checkLastInsert();
              if(display.innerText.length!==0)display.innerText =display.innerText +str
               break;
               case "-": checkLastInsert();
               if(display.innerText.length!==0)display.innerText =display.innerText +str
               break;
               case "/": checkLastInsert();
               if(display.innerText.length!==0)display.innerText =display.innerText +str
               break;
               case "*": checkLastInsert();
               if(display.innerText.length!==0)display.innerText =display.innerText +str
               break;
           default : display.innerText =display.innerText +str
             break;

            
          }
     }
function checkLastInsert(){
    
    if(display.innerText.charAt(display.innerText.length -1 ) === "+"||
    display.innerText.charAt(display.innerText.length -1 ) ==="-" ||
    display.innerText.charAt(display.innerText.length -1 )==="/" ||
    display.innerText.charAt(display.innerText.length -1 )==="*")
    {
        display.innerText= display.innerText.slice(0,-1)

    }
}
    
 
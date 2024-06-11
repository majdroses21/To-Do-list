       const boton = document.getElementById("put-one");

 const frm = document.querySelector("form");

const conta = document.getElementById("container");

const input = document.querySelector("input");

 



frm.addEventListener("submit", 
(eo) => {
  eo.preventDefault();
      
  const newtask = ` 
  <div class="in1">
  <span class="icon-star-full icon"></span>
  
  <p class="para" lang="ar">
    
     ${input.value }
  
     </p>
        <div>
             <span class="icon-bin icon"></span>
             <span class="icon-evil2 icon"></span>
       </div>
   
  </div>
  `; 


    conta.innerHTML += newtask;

    input.value = ""

  
});

  // conta.style.border = "solid 3px red "
 
  const hart = `     <span class="icon-heart icon"></span> 
  `

   
   conta.addEventListener("click" ,
   (eo) => {
          
     
        
         

    


          switch (eo.target.className) {
            case "icon-bin icon":
              
              eo.target.parentElement.parentElement.remove();


              break;


              //
              case "icon-evil2 icon":
    
                eo.target.parentElement.parentElement.getElementsByClassName("para")[0].classList.add("finish");

                eo.target.classList.add("dn")
 
                eo.target.parentElement.innerHTML += hart;
             


               break;
             
              //

               //
               case "icon-heart icon":

                eo.target.parentElement.parentElement.getElementsByClassName("para")[0].classList.remove("finish");

               eo.target.classList.add("dn")

               const addgry = `

                  <span class="icon-evil2 icon"></span>


               `

               eo.target.parentElement.innerHTML += addgry



                break;
              
               //

                //
              case "icon-star-full icon" :

                eo.target.classList.add("oran")

                conta.prepend(eo.target.parentElement)
    


                break;
              
               //
                //
              case "icon-star-full icon oran":

                eo.target.classList.remove("oran")


                break;
              
               ///
          
            default:
              break;
          }

   });















  
















  
  
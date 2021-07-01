
 

let btn = document.getElementById('btn')
let search = document.getElementById('search')











btn.onclick = (event) => {
 search.value = "";
 btn.disabled=true
 
}










search.onkeyup = (event) => {
   if(search.value.length > 0) {
     btn.disabled=false
   }
 
  let filter = search.value.toUpperCase();
  let card = document.getElementsByClassName("card");
  let cardBody = document.getElementsByClassName("card-body");
  var i;
  
  for (i = 0; i <card.length; i++) {
    let p = card[i].getElementsByTagName("p")[0];
    if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
      card[i].style.display = "";
    } else {
      card[i].style.display = "none";
    }
  }
 
}




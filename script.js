
 

let btn = document.getElementById('btn')
let search = document.getElementById('search')











btn.onclick = (event) => {
 search.value = "";
 btn.disabled=true
 
}










search.onkeyup = (event) => {
   if(search.value.length > 0) {
     btn.disabled=false
   } else {
     btn.disabled=true
   }
 
  let filter = search.value.toUpperCase();
  // let card = document.getElementsByClassName("card");
  let cards = document.getElementsByClassName('cards')
  // let cardBody = document.getElementsByClassName("card-body");
  // var i;
  
  for (i = 0; i <cards.length; i++) {
    let p = cards[i].getElementsByTagName("p")[0];
    if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
 
}




// let page = document.getElementsByClassName('')

 

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



let remove = document.getElementById('rm')
let card = document.getElementById('card')
let del = document.getElementsByClassName('delete')

// remove.addEventListener('click', function(event) {
 
// 	// var target = event.target;
//   // console.log(target)
//   // console.log(this.remove())
// 	// console.log(target.tagName); //выведет 'p' - абзац
//   console.log(this.parentNode)
//   // this.parentNode.parentNode.removeChild(this.parentNode)
//   del.remove()

// });



document.addEventListener('DOMContentLoaded', function() {
  var buttons_collection = document.getElementsByClassName('del');
  for(var i=0; i<buttons_collection.length; i++)
{
  buttons_collection[i].addEventListener('click', function(event) {
    // var cards_collection = document.getElementsByClassName('card');
    this.parentNode.parentNode.removeChild(this.parentNode)
  })
  
}

})

function deleting() {
  var cards = document.getElementsByClassName('card');
  for(var i=0; i<cards.length; i++)
{
  this.parentNode.parentNode.removeChild(this.parentNode)
 
}
}

// card.forEach(function(item) {
//     item.addEventListener("click", function(){
//         item.parentNode.parentNode.removeChild(item.parentNode);
//     });
// });






// let page = document.getElementsByClassName('')



// let check = (event) => {
//   const pattern =
//   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+(?:com|net)))$/;
// return pattern.test(event.target.value) || "Invalid e-mail.";
  
// }

// function check(email) {
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
 
// }
// return typeof input.checkValidity === 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(value)


let input = document.getElementById('email');


function check() {

  input.type='email';
  input.value=document.getElementById('email').value;
  return typeof input.checkValidity === 'function' ? input.checkValidity() : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}

function change_style(event) {
  
  if (input.checkValidity()) {
    document.getElementById('email').style.color = '#090';
    document.getElementsByClassName('invalid')[0].style.display='none'
   
  } else {
    document.getElementById('email').style.color = '#f00';
    document.getElementsByClassName('invalid')[0].style.display='block'
  }
 
    
  return false;
}




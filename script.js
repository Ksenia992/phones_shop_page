let btn = document.getElementById("btn");
let search = document.getElementById("search");



            // Clear list button

btn.onclick = () => {
  search.value = "";
  btn.disabled = true;
  let cards = document.getElementsByClassName("cards");
  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "flex";
  }
};

            // Pagination items

let pag_links = document.getElementsByClassName("page-item");

for (i = 0; i < pag_links.length; i++) {
  pag_links[i].onclick = () => {
    let cards = document.getElementsByClassName("cards");

    for (i = 0; i < cards.length; i++) {
      cards[i].style.display = "flex";
      search.value = "";
      btn.disabled = true;
    }
  };
}



            // Filter

search.onkeyup = (event) => {
  if (search.value.length > 0) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }

  let filter = search.value.toUpperCase();

  let cards = document.getElementsByClassName("cards");

  for (i = 0; i < cards.length; i++) {
    let p = cards[i].getElementsByTagName("p")[0];
    let price = cards[i].getElementsByTagName("p")[1];
    if (
      p.innerHTML.toUpperCase().indexOf(filter) > -1 ||
      price.innerHTML.toUpperCase().indexOf(filter) > -1
    ) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
};



            // Remove


let card = document.getElementsByClassName("card");

let del = document.getElementsByClassName("delete");

document.addEventListener("DOMContentLoaded", function () {
  var buttons_collection = document.getElementsByClassName("del");

  for (var i = 0; i < buttons_collection.length; i++) {
    buttons_collection[i].addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
});

function deleting() {
  var cards = document.getElementsByClassName("card");
  for (var i = 0; i < cards.length; i++) {
    this.parentNode.parentNode.removeChild(this.parentNode);
  }
}



            // Validation email

let input = document.getElementById("email");

function check() {
  input.type = "email";
  input.value = document.getElementById("email").value;
  return typeof input.checkValidity === "function"
    ? input.checkValidity()
    : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        value
      );
}

function change_style(event) {
  if (input.checkValidity()) {
    document.getElementById("email").style.color = "#090";
    document.getElementsByClassName("invalid")[0].style.display = "none";
  } else {
    document.getElementById("email").style.color = "#f00";
    document.getElementsByClassName("invalid")[0].style.display = "block";
  }

  return false;
}

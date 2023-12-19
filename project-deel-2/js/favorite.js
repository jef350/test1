 const favoriteButtons = document.querySelectorAll(".favorite-button");

 favoriteButtons.forEach((button) => {
   button.addEventListener("click", toggle);
 });

 function toggle() {
   if (this.style.color == "red") {
     this.style.color = "white";
   } else {
     this.style.color = "red";
   }
 }
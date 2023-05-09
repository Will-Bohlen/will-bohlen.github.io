var coll = document.getElementsByClassName("collapsible");
var i;

window.addEventListener("load", function() {
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
        this.textContent = this.textContent.replace("Collapse", "Expand");
      } else {
        this.textContent = this.textContent.replace("Expand", "Collapse");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
});
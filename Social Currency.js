function myFunction() {document.getElementById("List").classList.toggle("show")}
      
window.onclick = function(event) {
  if (!event.target.matches('.butt')) 
  { var dropdowns = document.getElementsByClassName("drpl"); var i; for (i=0; i<dropdowns.length; i++)
  { var openDropdown = dropdowns[i]; if (openDropdown.classList.contains('show'))(openDropdown.classList.remove('show'));
}
}
}

    
      

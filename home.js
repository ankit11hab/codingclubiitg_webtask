document.getElementById("close").style.display = "none";
function openForm() {
  document.getElementById("close").style.display = "block";
  document.getElementById("myForm").style.display = "block";
  document.getElementById("open").style.display = "none";
  
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("open").style.display = "block";
  document.getElementById("close").style.display = "none";
}
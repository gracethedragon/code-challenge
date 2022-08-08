var modal = document.getElementById("myModal");
var btn = document.getElementById("submit-button");
var span = document.getElementsByClassName("close")[0];

var address = document.getElementById("address")
var amount = document.getElementById("amount")
var otp = document.getElementById("otp")
var formSubmitted = false

amount.onchange = function (e) {
  console.log(e.target.value)
  if (parseFloat(e.target.value) === 0){
    e.target.value = ""
  }
}

btn.onclick = function(e) {
  if(address.value !== "" && amount.value !== "" && otp.value !== ""){
    e.preventDefault()
    modal.style.display = "block";
  }
}
span.onclick = function() {
  modal.style.display = "none";
  location.reload()
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
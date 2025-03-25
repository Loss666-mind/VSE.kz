document.getElementById("performerBtn") && (document.getElementById("performerBtn").onclick = function() {
  document.getElementById("performerModal").style.display = "block";
});

document.getElementById("customerBtn") && (document.getElementById("customerBtn").onclick = function() {
  document.getElementById("customerModal").style.display = "block";
});

var closes = document.getElementsByClassName("close");
for (var i = 0; i < closes.length; i++) {
  closes[i].onclick = function() {
    this.parentElement.parentElement.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
}

function register(event, role) {
  event.preventDefault();
  alert(`Регистрация ${role === 'performer' ? 'исполнителя' : 'заказчика'} отправлена!`);
}
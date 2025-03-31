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
  const form = event.target;
  const formData = new FormData(form);
  const data = {
    full_name: formData.get('full_name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    city: formData.get('city'),
    address: formData.get('address') || '',
    order: formData.get('order') || '',
    role: role,
  };

  fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(response => response.text())
    .then(message => {
      alert(message);
      if (message.includes('успешно')) {
        localStorage.setItem('userEmail', data.email); // Сохраняем email
      }
    })
    .catch(error => alert('Ошибка: ' + error));
}

function login(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = {
    email: formData.get('email'),
    phone: formData.get('phone'),
  };

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(result => {
      if (result.success) {
        localStorage.setItem('userEmail', data.email);
        window.location.href = data.email === 'vaire.print@mail.ru' ? 'moderator.html' : 'dashboard-performer.html';
      } else {
        alert('Ошибка входа');
      }
    })
    .catch(error => alert('Ошибка: ' + error));
}
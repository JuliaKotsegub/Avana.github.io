function sendEmail() {
    var emailInput = document.getElementById('email');
    var emailAddress = emailInput.value;

    // Опціонально: перевірка на правильний формат електронної адреси
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailAddress)) {
      alert('Please enter a valid email address');
      return;
    }

    // Виконується логіка відправки листа на вказану адресу
    // В даному випадку, просто відкривається поштовий клієнт з заповненою адресою
    window.location.href = 'mailto:' + emailAddress;
  }

  const btnDarkMode=document.querySelector(".dark-mode-btn");

  btnDarkMode.onclick = function(){
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    document.body.classList.toggle("light");
  }

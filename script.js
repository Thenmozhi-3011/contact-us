document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  const thankYou = document.getElementById("thankYouMsg");
  thankYou.classList.add("show");
  document.getElementById("contactForm").reset();

  setTimeout(() => {
    thankYou.classList.remove("show");
  }, 3000);
});

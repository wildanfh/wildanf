document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  
  if (name && email && message) {
      document.getElementById("form-message").innerText = "Pesan berhasil dikirim!";
  } else {
      document.getElementById("form-message").innerText = "Harap isi semua field!";
  }
});

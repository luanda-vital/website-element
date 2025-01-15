document.getElementById("contact-form").addEventListener("submit", async function(event) {
  event.preventDefault();

  const form = event.target;

  const contact = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  try {
    const res = await fetch("https://api.staticforms.xyz/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        accessKey: "2d11b544-4a1e-43e5-a2e0-a3ed69a0bb32",
        ...contact
      })
    });

    const json = await res.json();

    if (json.success) {
      Toastify({
        text: "Formulário enviado com sucesso!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)"
        },
        stopOnFocus: true
      }).showToast();
      form.reset();
    } else {
      console.log(json.message)
      Toastify({
        text: "Algo deu errado",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: "#a32020",
        },
        stopOnFocus: true
      }).showToast();
    }
  } catch (e) {
  }
});

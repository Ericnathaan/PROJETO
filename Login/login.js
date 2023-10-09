AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".form");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita o envio padrão do formulário

    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData) {
      const storedEmail = storedUserData.email;
      const storedPassword = storedUserData.password;

      if (
        emailInput.value === storedEmail &&
        passwordInput.value === storedPassword
      ) {
        localStorage.setItem("estaLogado", true);
        const estaLogado = localStorage.getItem("estaLogado");
        debugger;
        if (estaLogado === "true") {
          redirectToPage("http://127.0.0.1:5501/Horario/horario.html");
        } else {
          redirectToPage("../index.html");
        }
      } else {
        alert("Credenciais inválidas. Tente novamente.");
      }
    } else {
      alert(
        "Você ainda não se cadastrou. Redirecionando para a página de cadastro."
      );
      redirectToPage("../cadastro/cadastro.html");
    }
  });

  function redirectToPage(page) {
    window.location.href = page;
  }
});


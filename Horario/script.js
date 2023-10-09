document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointment-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const date = document.getElementById("date").value;
        const horario = document.getElementById("horario").value;
        const service = document.getElementById("service").value;
        const barber = document.getElementById("barber").value;

        // Crie um objeto com os valores selecionados
        const appointmentData = {
            date: date,
            horario: horario,
            service: service,
            barber: barber,
        };

        // Salve os dados no Local Storage
        localStorage.setItem("appointmentData", JSON.stringify(appointmentData));

        // Exiba um alerta antes de redirecionar
        alert("Seu agendamento foi salvo com sucesso!");

        // Redirecione para outra página ou execute outras ações necessárias
         window.location.href = "../index.html";
    });
});



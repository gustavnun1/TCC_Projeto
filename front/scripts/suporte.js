document.addEventListener("DOMContentLoaded", () => {
    const btnAssistencial = document.getElementById("btnAssistencial");
    const btnWhatsApp = document.getElementById("btnWhatsApp");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");

    // Exibir modal
    btnAssistencial.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });

    // Fechar modal
    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Redirecionar para o WhatsApp
    btnWhatsApp.addEventListener("click", () => {
        const phoneNumber = "5511999999999"; 
        const message = "Olá! Preciso de ajuda.";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    });
});

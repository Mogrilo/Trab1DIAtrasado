document.addEventListener("DOMContentLoaded", () => {

    const cardTitleInput = document.getElementById("cardTitle");
    const cardTitleDisplay = document.getElementById("cardTitleDisplay");

    const bgColorInput = document.getElementById("bgColor");
        const borderColorInput = document.getElementById("borderColor");
        const borderWidthInput = document.getElementById("borderWidth");
        const messageInput = document.getElementById("message");
        const imageSelect = document.getElementById("image");
        const uploadImageInput = document.getElementById("uploadImage");

        const card = document.getElementById("card");
        const cardMessage = document.getElementById("cardMessage");
        const cardImage = document.getElementById("cardImage");

        function updateCard() {
            card.style.backgroundColor = bgColorInput.value;
            card.style.borderColor = borderColorInput.value;
            card.style.borderWidth = `${borderWidthInput.value}px`;
            cardMessage.textContent = messageInput.value || "Muita paz e alegria para você.";
            cardTitleDisplay.textContent = cardTitleInput.value || "Feliz Natal 🎄";
        
        }
        

        uploadImageInput.addEventListener("change", function () {
        const file = this.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function (e) {
            cardImage.src = e.target.result;
            cardImage.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
        });

        // Atualizações em tempo real
        cardTitleInput.addEventListener("input", updateCard);
        bgColorInput.addEventListener("input", updateCard);
        borderColorInput.addEventListener("input", updateCard);
        borderWidthInput.addEventListener("input", () => {
            const val = parseInt(borderWidthInput.value, 10);
            if (val > 7) {
            borderWidthInput.value = 7;
            }
            updateCard();
        });    
        
        messageInput.addEventListener("input", updateCard);

        updateCard();
});

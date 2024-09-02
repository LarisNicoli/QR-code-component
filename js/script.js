const container = document.querySelector(".container")
const card = document.querySelector(".card")
const qrCodeBtn = document.querySelector("#qr-code button")

const qrInput = document.querySelector("#qr-code input")

const qrImage= document.querySelector("#qr-img")

function generateQrCode() {
  const qrInputValeu = qrInput.value
  
  if (!qrInputValeu) return;

  qrCodeBtn.innerText = "Gerando código"

  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInputValeu}`;

  qrImage.addEventListener("load", () => {
      container.classList.add("active")
      card.classList.add("active")
      qrCodeBtn.innerText = "Código gerado"
  })
}

qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
})

const btn = document.getElementById("generate-btn");
const input = document.getElementById("user-input");
const qrContainer = document.getElementById("qrcode");
const themeBtn = document.getElementById("toggle-theme");

function generateQR() {
  const text = input.value.trim();
  if (!text) {
    alert("Iltimos, xabar yozing!");
    return;
  }
  qrContainer.innerHTML = "";
  QRCode.toCanvas(text, { width: 200 }, function (err, canvas) {
    if (err) console.error(err);
    qrContainer.appendChild(canvas);
  });
}

btn.addEventListener("click", generateQR);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    generateQR();
  }
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

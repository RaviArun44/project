document.addEventListener("DOMContentLoaded", () => {
  /* 1.  Create a QR code that encodes the department page URL */
  const qrBox = document.getElementById("qrBox");
  new QRCode(qrBox, {
    text: window.location.href,
    width: 200,
    height: 200
  });

  /* 2.  Toggle faculty profiles */
  document.querySelectorAll(".faculty button").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.faculty;
      const panel = document.getElementById(id);
      panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
  });
});

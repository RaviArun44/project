document.addEventListener("DOMContentLoaded", () => {
  const readerDiv = document.getElementById("reader");
  const statusP   = document.getElementById("status");

  const scanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: 250, rememberLastUsedCamera: true },
    false
  );

  function onSuccess(decodedText) {
    scanner.clear().then(() => {
      statusP.textContent = "Opening " + decodedText;
      const url = decodedText.match(/^https?:\/\//i)
        ? decodedText
        : window.location.origin + "/" + decodedText;
      window.location.href = url;
    });
  }
  scanner.render(onSuccess, /* onFailure */ () => {});
});

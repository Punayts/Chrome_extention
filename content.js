// content.js — Phishing Warning Overlay (future use)

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "showWarning") {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "white";
    overlay.style.zIndex = "999999";
    overlay.style.display = "flex";
    overlay.style.flexDirection = "column";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.fontSize = "18px";
    overlay.style.color = "#b30000";
    overlay.style.fontFamily = "Arial, sans-serif";
    overlay.innerHTML = `
      <div>⚠️ This site may be unsafe.</div>
      <button style="
        margin-top: 20px;
        padding: 10px 20px;
        font-weight: bold;
        background: #f44336;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      " onclick="document.body.removeChild(this.parentElement)">Continue Anyway</button>
    `;

    document.body.appendChild(overlay);
  }
});
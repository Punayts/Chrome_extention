document.addEventListener("DOMContentLoaded", function () {
  const checkerBtn = document.getElementById('checkerBtn');
  const statsBtn = document.getElementById('statsBtn');
  const checkerPage = document.getElementById('checkerPage');
  const statsPage = document.getElementById('statsPage');

  // Tab Switching Logic
  checkerBtn.addEventListener('click', () => {
    checkerPage.classList.remove('hidden');
    statsPage.classList.add('hidden');
    checkerBtn.classList.add('active');
    statsBtn.classList.remove('active');
  });

  statsBtn.addEventListener('click', () => {
    statsPage.classList.remove('hidden');
    checkerPage.classList.add('hidden');
    statsBtn.classList.add('active');
    checkerBtn.classList.remove('active');
  });

  // Host Location Button
  document.getElementById("hostLocationBtn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      getHostLocation(tabs[0].url);
    });
  });
document.getElementById("hostLocationBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    getHostLocation(tabs[0].url);
  });
});
  // Scan URL and update UI
  chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
    const scannedEl = document.getElementById("scannedUrl");
    if (!tabs.length || !tabs[0].url) {
      scannedEl.innerText = "Unable to get URL.";
      return;
    }

    const url = tabs[0].url;
    scannedEl.innerText = url;

    const isSuspicious = ['login', 'verify', '@', 'secure', 'account'].some(k =>
      url.toLowerCase().includes(k)
    );

    const circle = document.querySelector(".status-circle");
    if (isSuspicious) {
      circle.innerText = "Phishing\nDetected";
      circle.style.borderColor = "red";
      circle.style.color = "red";
      document.getElementById("classification").innerText = "Phishing Threat Identified";
    } else {
      circle.innerText = "Safe";
      circle.style.borderColor = "#94bb86";
      circle.style.color = "#012b09";
      document.getElementById("classification").innerText = "No Threat Detected";
    }
  });
});

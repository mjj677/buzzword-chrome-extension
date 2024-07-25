document.getElementById("extract-btn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        files: ["scripts/content.js"],
      },
      () => {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: "getBuzzwords" },
          (response) => {
            const buzzwordsDiv = document.getElementById("buzzwords");
            buzzwordsDiv.innerHTML =
              "<ul>" +
              response.buzzwords.map((word) => `<li>${word}</li>`).join("") +
              "</ul>";
          }
        );
      }
    );
  });
});

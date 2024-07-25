const buzzwords = [
  "dynamic",
  "team player",
  "synergy",
  "proactive",
  "self-starter",
];
/**
 * Will link to API / Master JSON, basic implementation ^
 */
const bodyText = document.body.innerText.toLowerCase();
const foundBuzzwords = buzzwords.filter((word) => bodyText.includes(word));

foundBuzzwords.forEach((word) => {
  const regex = new RegExp(`\\b(${word})\\b`, "gi");
  document.body.innerHTML = document.body.innerHTML.replace(
    regex,
    '<span class="highlight">$1</span>'
  );
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getBuzzwords") {
    sendResponse({ buzzwords: foundBuzzwords });
  }
});

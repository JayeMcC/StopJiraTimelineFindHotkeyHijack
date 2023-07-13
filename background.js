chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url.includes(".atlassian.net/jira/software/projects") &&
    tab.url.includes("/boards/") &&
    tab.url.includes("/timeline")
  ) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["contentScript.js"],
    });
  }
});

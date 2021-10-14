let badMorty;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ badMorty });
});

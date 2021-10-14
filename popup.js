
let button = document.getElementById("button");
let submitButton = document.getElementById("submit");

chrome.storage.sync.get("color", ({ badMorty }) => {
  button.style.backgroundImage = "url('https://cdn.iconscout.com/icon/premium/png-256-thumb/rick-sanchez-1-563922.png')";
  button.style.backgroundSize = "100%";
  button.style.justifyContent = center;
});


button.addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackground,
    });
  });
  
  
function setPageBackground() {
    chrome.storage.sync.get("color", ({ badMorty }) => {
        
        const random = Math.floor(Math.random() * 10);
        console.log(random);
        if (random === 0) {
            document.body.style.backgroundImage = "url('https://c.tenor.com/HpqhNDMM_FIAAAAC/rick-and-morty-aesthetic.gif')";
        }
        if (random === 1) {
            document.body.style.backgroundImage = "url('https://mocah.org/thumbs/4553765-rick-sanchez-morty-smith-rick-and-morty.png')";
        }
        if (random === 2) {
            document.body.style.backgroundImage = "url('https://images3.alphacoders.com/879/thumbbig-879998.webp')";
        }
        if (random === 3) {
            document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/131/234/415/rick-and-morty-rick-sanchez-wubalubadubdub-old-people-wallpaper-preview.jpg')";
        }
        if (random === 4) {
            document.body.style.backgroundImage = "url('https://mocah.org/thumbs/4553765-rick-sanchez-morty-smith-rick-and-morty.png')";
        }
        if (random === 5) {
            document.body.style.backgroundImage = "url('https://c.tenor.com/HpqhNDMM_FIAAAAC/rick-and-morty-aesthetic.gif')";
        }
        if (random === 6) {
            document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/851/626/521/rick-and-morty-rick-sanchez-morty-smith-beth-smith-wallpaper-preview.jpg')";
        }
        if (random === 7) {
            document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/201/495/715/tv-mr-meeseeks-adult-swim-cartoon-wallpaper-preview.jpg')";
        }
        if (random === 8) {
            document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg8ImRghLs3wk-yfghErbGjJD4R6hjO8peWw&usqp=CAU')";
        }
        if (random === 9) {
            document.body.style.backgroundImage = "url('https://c.tenor.com/8KJmSuQgl-QAAAAC/show-me-wat-you-got-rick-and-morty.gif')";
        }

        document.body.style.backgroundSize = "100%";
        document.body.style.color = random === 5 || random === 6 ? "black" : "white";
    });
}

submitButton.addEventListener('click', async evt => {
    evt.preventDefault(); // prevents `submit` event from reloading the popup
    const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
    await chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: setPageListener,
    });
    const text = document.getElementById('summary').value;
    chrome.tabs.sendMessage(tab.id, {id: 'demo', text}); 
  });
  
  function setPageListener() {
    chrome.runtime.onMessage.addListener(function onMessage(msg) {
      document.body.style.backgroundImage = "url(" + msg.text + ")";
      document.body.style.backgroundSize = "100%";
      document.body.style.color = "white";
    }); //loop thru divs for text
  }


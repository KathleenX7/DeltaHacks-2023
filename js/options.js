document.getElementById("set-options").addEventListener("click", () => {
    chrome.storage.sync.set({"faculty": document.querySelector('input[name="faculty"]:checked').value});
});


function getFaculty() {
    chrome.storage.sync.get(["faculty"]).then((result) => {
        document.getElementById("idk-some-thingy").innerHTML = result.faculty;
        return result.faculty;
    });
}

getFaculty();
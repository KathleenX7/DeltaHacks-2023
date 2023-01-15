const FACULTY_MAP = {
    "art": "#F90",
    "engineering": "#F0F",
    "environment": "#0F0",
    "health": "#0FF",
    "mathematics": "#F99",
    "science": "#00F"
}

const images = document.querySelectorAll(".imageClass");

function getFaculty() {
    chrome.storage.sync.get(["faculty"]).then((result) => {
        // console.log(document.getElementsByClassName("imageClass"));
        // console.log(result.faculty);
        images.forEach(image => {
            image.style.borderColor = FACULTY_MAP[result.faculty];
        })
        document.getElementById("idk-some-thingy").innerHTML = result.faculty;
        return result.faculty;
    });
}

getFaculty();
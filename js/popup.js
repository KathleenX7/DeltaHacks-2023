const FACULTY_MAP_LIGHT = {
    "default": "#fdfeb3",
    "arts": "#f7d7ab",
    "engineering": "#cbb3ea",
    "environment": "#d5e986",
    "health": "#90d9ed",
    "mathematics": "#f4c3ec",
    "science": "#bcd4fa"
}
const FACULTY_MAP_LIGHT_MED = {
    "default": "#fae95f",
    "arts": "#f0b33e",
    "engineering": "#b03ed2",
    "environment": "#c2d343",
    "health": "#55bbcd",
    "mathematics": "#ec6ca9",
    "science": "#71a0f7"
}
const FACULTY_MAP_MED = {
    "default": "#f7d767",
    "arts": "#db8731",
    "engineering": "#7815ad",
    "environment": "#b7be3c",
    "health": "#4396a3",
    "mathematics": "#cd3993",
    "science": "#3070c7"
}
const FACULTY_MAP = {
    "default": "#ddb548",
    "arts": "#d34e23",
    "engineering": "#4f0f87",
    "environment": "#7b8a29",
    "health": "#255860",
    "mathematics": "#b42574",
    "science": "#1130b7",
}
const images = document.querySelectorAll(".imageClass");

function getFaculty() {
    chrome.storage.sync.get(["faculty"]).then((result) => {
        // console.log(document.getElementsByClassName("imageClass"));
        // console.log(result.faculty);
        var imageA = document.getElementsByClassName('imageA');
        for(i = 0; i < imageA.length; i++) {
            imageA[i].style.borderColor = FACULTY_MAP_MED[result.faculty];
        }
        var bodyClass = document.getElementsByClassName('bodyClass');
        for(i = 0; i < bodyClass.length; i++) {
            if(result.faculty == "engineering"){
                bodyClass[i].style.backgroundColor = FACULTY_MAP_MED[result.faculty];
            }else{
                bodyClass[i].style.backgroundColor = FACULTY_MAP[result.faculty];
            }
        }
        var bih = document.getElementsByClassName('bih');
        for(i = 0; i < bih.length; i++) {
            bih[i].style.color = FACULTY_MAP_LIGHT[result.faculty];
        }
        var line = document.getElementsByClassName('line1');
        line[0].style.backgroundColor = FACULTY_MAP[result.faculty];
        line = document.getElementsByClassName('line2');
        line[0].style.backgroundColor = FACULTY_MAP_MED[result.faculty];
        line = document.getElementsByClassName('line3');
        line[0].style.backgroundColor = FACULTY_MAP_LIGHT_MED[result.faculty];
        line = document.getElementsByClassName('line4');
        line[0].style.backgroundColor = FACULTY_MAP_LIGHT[result.faculty];
        // body.forEach(body => {
        //     body.style.backgroundColor = FACULTY_MAP[result.faculty];
        // })
        // document.getElementById("idk-some-thingy").innerHTML = result.faculty;
        return result.faculty;
    });
}

getFaculty();
const resumeSection = document.querySelector("#section-resume")
const skillsSection = document.querySelector("#section-skills")
const technologiesSection = document.querySelector("#section-technologies")

skillsSection.style.display = "none"
technologiesSection.style.display = "none"


leftBarNav = document.querySelector(".left-bar")
let leftBarLinks = leftBarNav.childNodes;

mainLinks = leftBarNav.querySelectorAll(".main-link")//document.querySelectorAll(".main-link")
var speed = 500000; /* The speed/duration of the effect in milliseconds */

console.log(leftBarLinks)
console.log(leftBarNav.querySelectorAll(".main-link"))

let blinkNode = document.querySelector(".resumelink")
setBlinkingCursor(blinkNode)

setLinkListeners(mainLinks)

startLinkBuild()

function setBlinkingCursor(selectedDiv){
    //Delete all current cursor-blinks
    let blinkers = document.querySelectorAll(".cursor-blink")
    blinkers.forEach(e => {
        e.parentNode.removeChild(e)
    })
    let newNode = document.createElement("span")
    newNode.classList.add("cursor-blink")
    newNode.innerHTML = "->"
    
    selectedDiv.appendChild(newNode)

    console.log(newNode)
}
function setLinkListeners(e)
{
    e.forEach(ele => {
        ele.addEventListener('click', () => setSubElements(ele), false)
        console.log('setting listener on ' + ele)
    })
}

function setSubElements(e){
    mainLinks.forEach(maine => {{
        maine.classList.remove("highlighted")
    }})
    setBlinkingCursor(e.parentNode)
    e.classList.add("highlighted")
    
    setSectionDisplay(e.id)
}

function setSectionDisplay(e){
    console.log("#section" + e)
    let allSections = document.querySelectorAll(".toplevelSection")
    allSections.forEach(section => {
        section.style.display = "none"
    })

    let visibleSection = document.querySelector("#section-" + e)
    visibleSection.style.display = ""
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }


function startLinkBuild() {


    mainLinks.forEach(mainLink => {
        //console.log(mainLink.innerHTML)
        newTxt = mainLink.innerHTML;
        mainLink.innerHTML = "";
        typeWriter(mainLink, newTxt,0 )
    }
    )
}

function typeWriter(e,txt, i) {

    //console.log(i)
    if (i < txt.length) {
       e.innerHTML += txt.charAt(i);
       i++;
        
    setTimeout(() => typeWriter(e,txt, i++), getRandomInt(200,500));
  } 
}


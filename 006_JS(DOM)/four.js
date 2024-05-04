// In this case here complete tree ais traverse.
function addLanguage(langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`;
    document.querySelector('.language').appendChild(li);
}
addLanguage("JAva");
addLanguage("Type Script");


// In this case it is directly insert.
function addOptiLaang(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}
addOptiLaang('Go Lang');


// Edit value
const secoundLang = document.querySelector("li:nth-child(2)");
// secoundLang.innerHTML="Spring booot";
const newLi = document.createElement('li');
newLi.textContent = "Springboot"
secoundLang.replaceWith(newLi);

const firstLang=document.querySelector("li:nth-child(1)");
firstLang.outerHTML="<li> Docker</li>"

// remove
const lastLang=document.querySelector("li:last-child");
lastLang.remove()
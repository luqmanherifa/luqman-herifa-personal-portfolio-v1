var triggerHidden = document.getElementById("triggerHidden");
var btnShow = document.getElementById("btnShow");
var otherProjectHidden1 = document.getElementById("otherProjectHidden1");
var otherProjectHidden2 = document.getElementById("otherProjectHidden2");
var otherProjectHidden3 = document.getElementById("otherProjectHidden3");
var otherProjectHidden4 = document.getElementById("otherProjectHidden4");
var otherProjectHidden5 = document.getElementById("otherProjectHidden5");
var otherProjectHidden6 = document.getElementById("otherProjectHidden6");

function functionShow() {
  if (triggerHidden.style.display === "none") {
    triggerHidden.style.display = "inline";
    btnShow.innerHTML = "Show More";
    otherProjectHidden1.style.display = "none";
    otherProjectHidden2.style.display = "none";
    otherProjectHidden3.style.display = "none";
    otherProjectHidden4.style.display = "none";
    otherProjectHidden5.style.display = "none";
    otherProjectHidden6.style.display = "none";
  } else {
    triggerHidden.style.display = "none";
    btnShow.innerHTML = "Show Less";
    otherProjectHidden1.style.display = "inline";
    otherProjectHidden2.style.display = "inline";
    otherProjectHidden3.style.display = "inline";
    otherProjectHidden4.style.display = "inline";
    otherProjectHidden5.style.display = "inline";
    otherProjectHidden6.style.display = "inline";
  }
}
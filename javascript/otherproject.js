var triggerHidden = document.getElementById("triggerHidden");
var btnShow = document.getElementById("btnShow");
var otherProjectHidden1 = document.getElementById("otherProjectHidden1");
var otherProjectHidden2 = document.getElementById("otherProjectHidden2");
var otherProjectHidden3 = document.getElementById("otherProjectHidden3");

function functionShow() {
  if (triggerHidden.style.display === "none") {
    triggerHidden.style.display = "inline";
    btnShow.innerHTML = "Show More";
    otherProjectHidden1.style.display = "none";
    otherProjectHidden2.style.display = "none";
    otherProjectHidden3.style.display = "none";
  } else {
    triggerHidden.style.display = "none";
    btnShow.innerHTML = "Show Less";
    otherProjectHidden1.style.display = "inline";
    otherProjectHidden2.style.display = "inline";
    otherProjectHidden3.style.display = "inline";
  }
}
var firstName = "Frost";
var firstRace = "Vampire";
var firstItem = "Sword";
var secondName = "Abbath";
var secondRace = "Orc";
var secondItem = "Axe";

var log = document.getElementById("log");
var logtxt = "Just another day at Wacken Open Air.";
log.innerHTML = logtxt;

document.getElementById("firstAttack").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + firstName + " attacks " + secondName + ".");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("secondAttack").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + secondName + " attacks " + firstName + ".");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("firstHeal").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + firstName + " heals himself.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("secondHeal").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + secondName + " heals himself.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("firstYield").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + firstName + " surrenders.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("secondYield").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + secondName + " surrenders.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});


// MODAL SELECTOR //

var modal = document.getElementById("selector");

window.onload = function() {
   modal.style.display = "block";
}

document.getElementById("firstChoose").addEventListener("click", () => {
    modal.style.display = "block";
});

fight.onclick = function() {
    firstName = document.getElementById("firstName").value;
    firstRace = document.getElementById("firstRace").value;
    firstItem = document.getElementById("firstItem").value;
    document.getElementById("firstNameDisplay").innerHTML = "Hero: " + firstName;
    document.getElementById("firstRaceDisplay").innerHTML = "Race: " + firstRace;
    document.getElementById("firstItemDisplay").innerHTML = "Special item: "+ firstItem;
    document.getElementById("secondNameDisplay").innerHTML = "Enemy: " + secondName;
    document.getElementById("secondRaceDisplay").innerHTML = "Race: " + secondRace;
    document.getElementById("secondItemDisplay").innerHTML = "Special item: " + secondItem;
    logtxt = "Just another day at Wacken Open Air.";
    log.innerHTML = logtxt;
    logtxt = logtxt + ("<br>" + firstName + " the " + firstRace + " will fight " + secondName + " the " + secondRace + "!");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
    modal.style.display = "none";
 }
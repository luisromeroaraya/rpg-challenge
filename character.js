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

var modalHero = document.getElementById("modalHero");

window.onload = function() {
   modalHero.style.display = "block";
}

document.getElementById("firstChoose").addEventListener("click", () => {
    modalHero.style.display = "block";
});

document.getElementById("fightHero").onclick = function() {
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
    modalHero.style.display = "none";
 }

 var modalEnemy = document.getElementById("modalEnemy");

 document.getElementById("secondChoose").addEventListener("click", () => {
    modalEnemy.style.display = "block";
});

document.getElementById("fightEnemy").onclick = function() {
    secondName = document.getElementById("secondName").value;
    secondRace = document.getElementById("secondRace").value;
    secondItem = document.getElementById("secondItem").value;
    document.getElementById("secondNameDisplay").innerHTML = "Enemy: " + secondName;
    document.getElementById("secondRaceDisplay").innerHTML = "Race: " + secondRace;
    document.getElementById("secondItemDisplay").innerHTML = "Special item: " + secondItem;
    logtxt = "Just another day at Wacken Open Air.";
    log.innerHTML = logtxt;
    logtxt = logtxt + ("<br>" + firstName + " the " + firstRace + " will fight " + secondName + " the " + secondRace + "!");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
    modalEnemy.style.display = "none";
 }

changeEnemy = () => {
    switch(document.getElementById("secondName").value) {
        case "Varg Vikernes":
            document.getElementById("secondRace").value = "Human";
            document.getElementById("secondItem").value = "Staff";
            document.getElementById("secondPhoto").src = "assets/enemy-varg-human-rest.jpg";
            break;
        case "Abbath":
            document.getElementById("secondRace").value = "Orc";
            document.getElementById("secondItem").value = "Sword";
            document.getElementById("secondPhoto").src = "assets/enemy-abbath-orc-rest.jpg";
            break;
            case "Aerendir":
            document.getElementById("secondRace").value = "Elf";
            document.getElementById("secondItem").value = "Bow";
            document.getElementById("secondPhoto").src = "assets/enemy-aerendir-elf-rest.jpg";
            break;
        case "Frost":
            document.getElementById("secondRace").value = "Vampire";
            document.getElementById("secondItem").value = "Boots";
            document.getElementById("secondPhoto").src = "assets/enemy-frost-vampire-rest.jpg";
            break;
      }
}

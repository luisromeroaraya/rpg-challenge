var heroName = "Frost";
var heroRace = "Vampire";
var heroItem = "Sword";
var enemyName = "Abbath";
var enemyRace = "Orc";
var enemyItem = "Axe";

var log = document.getElementById("log");
var logtxt = "Just another day at Wacken Open Air.";
log.innerHTML = logtxt;

document.getElementById("heroAttack").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + heroName + " attacks " + enemyName + ".");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("enemyAttack").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + enemyName + " attacks " + heroName + ".");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("heroHeal").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + heroName + " heals himself.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("enemyHeal").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + enemyName + " heals himself.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("heroYield").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + heroName + " surrenders.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("enemyYield").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + enemyName + " surrenders.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});


// MODAL SELECTOR //

var modalHero = document.getElementById("modalHero");

window.onload = function() {
   modalHero.style.display = "block";
}

document.getElementById("heroChoose").addEventListener("click", () => {
    modalHero.style.display = "block";
});

document.getElementById("fightHero").onclick = function() {
    heroName = document.getElementById("heroName").value;
    heroRace = document.getElementById("heroRace").value;
    heroItem = document.getElementById("heroItem").value;
    document.getElementById("heroNameDisplay").innerHTML = "Hero: " + heroName;
    document.getElementById("heroRaceDisplay").innerHTML = "Race: " + heroRace;
    document.getElementById("heroItemDisplay").innerHTML = "Special item: "+ heroItem;
    document.getElementById("enemyNameDisplay").innerHTML = "Enemy: " + enemyName;
    document.getElementById("enemyRaceDisplay").innerHTML = "Race: " + enemyRace;
    document.getElementById("enemyItemDisplay").innerHTML = "Special item: " + enemyItem;
    logtxt = "Just another day at Wacken Open Air.";
    log.innerHTML = logtxt;
    logtxt = logtxt + ("<br>" + heroName + " the " + heroRace + " will fight " + enemyName + " the " + enemyRace + "!");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
    modalHero.style.display = "none";
 }

 var modalEnemy = document.getElementById("modalEnemy");

 document.getElementById("enemyChoose").addEventListener("click", () => {
    modalEnemy.style.display = "block";
});

document.getElementById("fightEnemy").onclick = function() {
    enemyName = document.getElementById("enemyName").value;
    enemyRace = document.getElementById("enemyRace").value;
    enemyItem = document.getElementById("enemyItem").value;
    document.getElementById("enemyNameDisplay").innerHTML = "Enemy: " + enemyName;
    document.getElementById("enemyRaceDisplay").innerHTML = "Race: " + enemyRace;
    document.getElementById("enemyItemDisplay").innerHTML = "Special item: " + enemyItem;
    logtxt = "Just another day at Wacken Open Air.";
    log.innerHTML = logtxt;
    logtxt = logtxt + ("<br>" + heroName + " the " + heroRace + " will fight " + enemyName + " the " + enemyRace + "!");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
    modalEnemy.style.display = "none";
 }

changeEnemy = () => {
    switch(document.getElementById("enemyName").value) {
        case "Varg Vikernes":
            document.getElementById("enemyRace").value = "Human";
            document.getElementById("enemyItem").value = "Staff";
            document.getElementById("enemyPhoto").src = "assets/enemy-varg-human-rest.jpg";
            break;
        case "Abbath":
            document.getElementById("enemyRace").value = "Orc";
            document.getElementById("enemyItem").value = "Sword";
            document.getElementById("enemyPhoto").src = "assets/enemy-abbath-orc-rest.jpg";
            break;
            case "Aerendir":
            document.getElementById("enemyRace").value = "Elf";
            document.getElementById("enemyItem").value = "Bow";
            document.getElementById("enemyPhoto").src = "assets/enemy-aerendir-elf-rest.jpg";
            break;
        case "Frost":
            document.getElementById("enemyRace").value = "Vampire";
            document.getElementById("enemyItem").value = "Boots";
            document.getElementById("enemyPhoto").src = "assets/enemy-frost-vampire-rest.jpg";
            break;
      }
}

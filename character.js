// INITIAL VALUES //
var heroName = "Frost";
var heroRace = "Vampire";
var heroItem = "Sword";
var hero = new Person(heroName, heroRace, heroItem);

var enemyName = "Abbath";
var enemyRace = "Orc";
var enemyItem = "Axe";
var enemy = new Person(enemyName, enemyRace, enemyItem);

var log = document.getElementById("log");
var logtxt = "Just another day at Wacken Open Air.";
log.innerHTML = logtxt;


// BUTTON HANDLERS //
document.getElementById("heroAttack").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + hero.name + " attacks " + enemy.name + ".");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("enemyAttack").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name + ".");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("heroHeal").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + hero.name + " heals himself.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("enemyHeal").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + enemy.name + " heals himself.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("heroYield").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + hero.name + " surrenders.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("enemyYield").addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + enemy.name + " surrenders.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});


// MODAL SELECTORS //
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
    hero = new Person(heroName, heroRace, heroItem);
    document.getElementById("heroNameDisplay").innerHTML = "Hero: " + hero.name;
    document.getElementById("heroRaceDisplay").innerHTML = "Race: " + hero.race;
    document.getElementById("heroItemDisplay").innerHTML = "Special item: "+ hero.item;
    document.getElementById("heroHPDisplay").innerHTML = "HP: "+ hero.currentHealth + "/" + hero.maxHealth;
    document.getElementById("heroHP").value = hero.currentHealth;
    document.getElementById("heroHP").max = hero.maxHealth;
    enemy = new Person(enemyName, enemyRace, enemyItem);
    document.getElementById("enemyNameDisplay").innerHTML = "Enemy: " + enemy.name;
    document.getElementById("enemyRaceDisplay").innerHTML = "Race: " + enemy.race;
    document.getElementById("enemyItemDisplay").innerHTML = "Special item: " + enemy.item;
    document.getElementById("enemyHPDisplay").innerHTML = "HP: "+ enemy.currentHealth + "/" + enemy.maxHealth;
    document.getElementById("enemyHP").value = enemy.currentHealth;
    document.getElementById("enemyHP").max = enemy.maxHealth;
    logtxt = "Just another day at Wacken Open Air.";
    log.innerHTML = logtxt;
    logtxt = logtxt + ("<br>" + hero.name + " the " + hero.race + " will fight " + enemy.name + " the " + enemy.race + "!");
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
    enemy = new Person(enemyName, enemyRace, enemyItem);
    document.getElementById("enemyNameDisplay").innerHTML = "Enemy: " + enemy.name;
    document.getElementById("enemyRaceDisplay").innerHTML = "Race: " + enemy.race;
    document.getElementById("enemyItemDisplay").innerHTML = "Special item: " + enemy.item;
    document.getElementById("enemyHPDisplay").innerHTML = "HP: "+ enemy.currentHealth + "/" + enemy.maxHealth;
    document.getElementById("enemyHP").value = enemy.currentHealth;
    document.getElementById("enemyHP").max = enemy.maxHealth;
    logtxt = "Just another day at Wacken Open Air.";
    log.innerHTML = logtxt;
    logtxt = logtxt + ("<br>" + hero.name + " the " + hero.race + " will fight " + enemy.name + " the " + enemy.race + "!");
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

//Use this script to generate your character
function Person(name, race, item) {
    this.name = name;
    this.race = race;
    this.item = item;
    this.currentHealth = 100;
    this.maxHealth = 100;
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(){};

    this.damage = function(){};

    this.totalDamage = this.damage();

    this.displayChar = function(){
        return console.log(`I am ${this.name} the ${this.race}! I wield a ${this.item} and my total health points are ${this.maxHealth}`);
    };
}
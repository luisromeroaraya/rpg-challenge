// Use this script to generate your character //
function Person(name, race, item) {
    this.name = name;
    this.race = race;
    this.item = item;
    this.currentHealth = 100;
    this.maxHealth = 100;
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function(playerID, fixedHP) {
        if (fixedHP >= 100) {
            var healPoints = fixedHP;
        }
        else {
            var healPoints = Math.floor(Math.random() * (this.maxHealing - this.min) + this.min);
        }
        var targetHP = this.currentHealth + healPoints;
        var HPbar = document.getElementById(playerID+"HP");
        var HPbarDisplay = document.getElementById(playerID+"HPDisplay");
        var time = healPoints/2;
        const loading = () => {
            this.currentHealth = this.currentHealth + 1;
            HPbar.value = this.currentHealth;
            HPbarDisplay.innerHTML = "HP: "+ HPbar.value + "/" + HPbar.max;
            if (this.currentHealth == HPbar.max) {
                clearInterval(animate);
            }
            if (this.currentHealth == targetHP) {
                 clearInterval(animate);
             }
        };
        const animate = setInterval(() => loading (), time);
    };

    this.damage = function() {
        var damagePoints = Math.floor(Math.random() * (this.maxDamage - this.min) + this.min);
        return damagePoints;
    };

    this.totalDamage = this.damage();

    this.attack = function(enemyID, enemy) {
        this.totalDamage = this.damage();
        var targetHP = enemy.currentHealth - this.totalDamage;
        var HPbar = document.getElementById(enemyID + "HP");
        var HPbarDisplay = document.getElementById(enemyID + "HPDisplay");
        var time = this.totalDamage/2;
        const loading = () => {
            enemy.currentHealth = enemy.currentHealth - 1;
            HPbar.value = enemy.currentHealth;
            HPbarDisplay.innerHTML = "HP: "+ HPbar.value + "/" + HPbar.max;
            if (enemy.currentHealth == 0) {
                clearInterval(animate);
            }
            if (enemy.currentHealth == targetHP) {
                clearInterval(animate);
            }
        };
        const animate = setInterval(() => loading (), time);

    }

    this.displayChar = function() {
        return console.log(`I am ${this.name} the ${this.race}! I wield a ${this.item} and my total health points are ${this.maxHealth}`);
    };
}

// MODAL SELECTORS //
var modalHero = document.getElementById("modalHero");
var modalEnemy = document.getElementById("modalEnemy");

// SHOW HERO MODAL SELECTOR ON LOAD PAGE AND SETS RANDOM ENEMY //
window.onload = function() { 
    modalHero.style.display = "block";
    randomEnemy();
    changeEnemy();
    enemyName = document.getElementById("enemyName").value;
    enemyRace = document.getElementById("enemyRace").value;
    enemyItem = document.getElementById("enemyItem").value;
    enemy = new Person(enemyName, enemyRace, enemyItem);
    enemy.displayChar();
    document.getElementById("enemyNameDisplay").innerHTML = "Enemy: " + enemy.name;
    document.getElementById("enemyRaceDisplay").innerHTML = "Race: " + enemy.race;
    document.getElementById("enemyItemDisplay").innerHTML = "Special item: " + enemy.item;
    enemy.currentHealth = 0;
    document.getElementById("enemyHP").value = enemy.currentHealth;
    document.getElementById("enemyHP").max = enemy.maxHealth;
}

// SHOW HERO MODAL SELECTOR ON BUTTON CLICK //
document.getElementById("heroChoose").addEventListener("click", () => {
    modalHero.style.display = "block";
});

// SET VALUES AFTER CHOOSING HERO //
document.getElementById("fightHero").onclick = function() {
    heroName = document.getElementById("heroName").value;
    heroRace = document.getElementById("heroRace").value;
    heroItem = document.getElementById("heroItem").value;
    hero = new Person(heroName, heroRace, heroItem);
    hero.displayChar();
    document.getElementById("heroNameDisplay").innerHTML = "Hero: " + hero.name;
    document.getElementById("heroRaceDisplay").innerHTML = "Race: " + hero.race;
    document.getElementById("heroItemDisplay").innerHTML = "Special item: "+ hero.item;
    hero.currentHealth = 0;
    document.getElementById("heroHP").value = hero.currentHealth;
    document.getElementById("heroHP").max = hero.maxHealth;
    hero.heal("hero", hero.maxHealth);
    enemy.heal("enemy", enemy.maxHealth);
    logtxt = "Just another day at Wacken Open Air.";
    log.innerHTML = logtxt;
    logtxt = logtxt + ("<br>" + hero.name + " the " + hero.race + " will fight " + enemy.name + " the " + enemy.race + "!");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
    modalHero.style.display = "none";
 }

 // SHOW ENEMY MODAL SELECTOR ON BUTTON CLICK //
 document.getElementById("enemyChoose").addEventListener("click", () => {
    modalEnemy.style.display = "block";
});

// SET VALUES AFTER CHOOSING ENEMY //
document.getElementById("fightEnemy").onclick = function() {
    enemyName = document.getElementById("enemyName").value;
    enemyRace = document.getElementById("enemyRace").value;
    enemyItem = document.getElementById("enemyItem").value;
    enemy = new Person(enemyName, enemyRace, enemyItem);
    enemy.displayChar();
    document.getElementById("enemyNameDisplay").innerHTML = "Enemy: " + enemy.name;
    document.getElementById("enemyRaceDisplay").innerHTML = "Race: " + enemy.race;
    document.getElementById("enemyItemDisplay").innerHTML = "Special item: " + enemy.item;
    enemy.currentHealth = 0;
    document.getElementById("enemyHP").value = enemy.currentHealth;
    document.getElementById("enemyHP").max = enemy.maxHealth;
    hero.currentHealth = 0;
    document.getElementById("heroHP").value = hero.currentHealth;
    document.getElementById("heroHP").max = hero.maxHealth;
    hero.heal("hero", hero.maxHealth);
    enemy.heal("enemy", enemy.maxHealth);
    logtxt = "Just another day at Wacken Open Air.";
    log.innerHTML = logtxt;
    logtxt = logtxt + ("<br>" + hero.name + " the " + hero.race + " will fight " + enemy.name + " the " + enemy.race + "!");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
    modalEnemy.style.display = "none";
 }

// FIX ENEMY SELECTOR VALUES AFTER CHOOSING ENEMY //
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

// RANDOMIZE FIRST ENEMY //
randomEnemy = () => {
    var random = Math.floor(Math.random()*4);
    console.log(random);
    switch(random) {
        case 0:
            document.getElementById("enemyName").value = "Varg Vikernes";
            break;
        case 1:
            document.getElementById("enemyName").value = "Abbath";
            break;
        case 2:
            document.getElementById("enemyName").value = "Aerendir";
            break;
        case 3:
            document.getElementById("enemyName").value = "Frost";
            break;
      }
}

// BUTTON HANDLERS //
document.getElementById("heroAttack").addEventListener("click", () => {
    hero.attack("enemy", enemy);
    logtxt = logtxt + ("<br>" + hero.name + " attacks " + enemy.name + " dealing "+ hero.totalDamage + " points of damage.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("enemyAttack").addEventListener("click", () => {
    enemy.attack("hero", hero);
    logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name  + " dealing "+ enemy.totalDamage + " points of damage.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("heroHeal").addEventListener("click", () => {
    hero.heal("hero");
    logtxt = logtxt + ("<br>" + hero.name + " heals himself.");
    log.innerHTML = logtxt;
    document.getElementById("logContainer").scrollTop = 9999999;
});

document.getElementById("enemyHeal").addEventListener("click", () => {
    enemy.heal("enemy");
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
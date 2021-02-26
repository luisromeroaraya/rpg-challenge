// MODAL SELECTORS //

// SHOW HERO MODAL SELECTOR ON LOAD PAGE AND SETS RANDOM ENEMY //
window.onload = function() { 
    randomEnemy();
    changeEnemy();
    modalHero.style.display = "block";
}

// SHOW HERO MODAL SELECTOR ON BUTTON CLICK //
heroChoose.addEventListener("click", () => {
    modalHero.style.display = "block";
});

// SET VALUES AFTER CHOOSING HERO //
fightHero.onclick = function() {
    changeHero();
    hero.heal("hero", hero.maxHealth);
    enemy.heal("enemy", enemy.maxHealth);
    logtxt = "Just another day at Wacken Open Air.";
    updateLog();
    logtxt = logtxt + ("<br>" + hero.name + " the " + hero.race + " will fight " + enemy.name + " the " + enemy.race + "!");
    updateLog();
    musicHero.volume= 0.2;
    musicHero.currentTime = 0;
    musicHero.play();
    modalHero.style.display = "none";
 }

 // SHOW ENEMY MODAL SELECTOR ON BUTTON CLICK //
 enemyChoose.addEventListener("click", () => {
    modalEnemy.style.display = "block";
});

// SET VALUES AFTER CHOOSING ENEMY //
fightEnemy.onclick = function() {
    hero.currentHealth = 0;
    heroHP.value = hero.currentHealth;
    heroHP.max = hero.maxHealth;
    hero.heal("hero", hero.maxHealth);
    enemy.heal("enemy", enemy.maxHealth);
    logtxt = "Just another day at Wacken Open Air.";
    updateLog();
    logtxt = logtxt + ("<br>" + hero.name + " the " + hero.race + " will fight " + enemy.name + " the " + enemy.race + "!");
    updateLog();
    modalEnemy.style.display = "none";
 }

// UPDATE HERO VALUES AFTER CHOOSING HERO //
changeHero = () => {
    hero = new Person(heroName.value, heroRace.value, heroItem.value);
    heroNameDisplay.innerHTML = "Hero: " + hero.name;
    heroRaceDisplay.innerHTML = "Race: " + hero.race;
    heroItemDisplay.innerHTML = "Special item: "+ hero.item;
    hero.currentHealth = 0;
    raceBonus(hero);
    itemBonus(hero);
    heroHP.value = hero.currentHealth;
    heroHP.max = hero.maxHealth;
    hero.displayChar();
}

// FIX ENEMY SELECTOR AND UPDATE ENEMY VALUES AFTER CHOOSING ENEMY //
changeEnemy = () => {
    if (enemyName.value == "Varg Vikernes") {
        enemyRace.value = "Human";
        enemyItem.value = "Staff";
        enemyPhoto.src = "assets/enemy-varg-human-rest.jpg";
        document.body.style.background = "url(assets/background-day.jpg) no-repeat center fixed";
        document.body.style.backgroundSize = "cover";
    }
    else if (enemyName.value == "Abbath") {
        enemyRace.value = "Orc";
        enemyItem.value = "Sword";
        enemyPhoto.src = "assets/enemy-abbath-orc-rest.jpg";
        document.body.style.background = "url(assets/background-day.jpg) no-repeat center fixed";
        document.body.style.backgroundSize = "cover";
    } 
    else if (enemyName.value == "Aerendir") {
        enemyRace.value = "Elf";
        enemyItem.value = "Bow";
        enemyPhoto.src = "assets/enemy-aerendir-elf-rest.jpg";
        document.body.style.background = "url(assets/background-day.jpg) no-repeat center fixed";
        document.body.style.backgroundSize = "cover";
    } 
    else if (enemyName.value == "Frost") {
        enemyRace.value = "Vampire";
        enemyItem.value = "Boots";
        enemyPhoto.src = "assets/enemy-frost-vampire-rest.jpg";
        document.body.style.background = "url(assets/background-night.jpg) no-repeat center fixed";
        document.body.style.backgroundSize = "cover";
    }
    enemy = new Person(enemyName.value, enemyRace.value, enemyItem.value);
    enemyNameDisplay.innerHTML = "Enemy: " + enemy.name;
    enemyRaceDisplay.innerHTML = "Race: " + enemy.race;
    enemyItemDisplay.innerHTML = "Special item: " + enemy.item;
    raceBonus(enemy);
    itemBonus(enemy);
    enemy.currentHealth = 0;
    enemyHP.value = enemy.currentHealth;
    enemyHP.max = enemy.maxHealth;
    enemy.displayChar();
}

// RANDOM FUNCTION OF 30% CHANCE //
success = () => {
    const chance = [true, false, false, false, true, false, false, false, false, true];
    var random = Math.floor(Math.random()*10);
    return chance[random];
}

// RANDOMIZE FIRST ENEMY //
randomEnemy = () => {
    var random = Math.floor(Math.random()*4);
    switch(random) {
        case 0:
            enemyName.value = "Varg Vikernes";
            break;
        case 1:
            enemyName.value = "Abbath";
            break;
        case 2:
            enemyName.value = "Aerendir";
            break;
        case 3:
            enemyName.value = "Frost";
            break;
      }
}

// UPDATE BATTLE LOG //
updateLog = () => {
    log.innerHTML = logtxt;
    logContainer.scrollTop = 9999999;
}

// CHANGE ENEMY PHOTO WHILE ATTACKING //
enemyPhotoAttack = (enemy) => {
    switch(enemy.name) {
        case "Varg Vikernes":
            enemyPhoto.src = "assets/enemy-varg-human-attack.jpg";
            setTimeout(function(){ enemyPhoto.src = "assets/enemy-varg-human-rest.jpg"; }, 500);
            break;
        case "Abbath":
            enemyPhoto.src = "assets/enemy-abbath-orc-attack.jpg";
            setTimeout(function(){ enemyPhoto.src = "assets/enemy-abbath-orc-rest.jpg"; }, 500);
            break;
        case "Aerendir":
            enemyPhoto.src = "assets/enemy-aerendir-elf-attack.jpg";
            setTimeout(function(){ enemyPhoto.src = "assets/enemy-aerendir-elf-rest.jpg"; }, 500);
            break;
        case "Frost":
            enemyPhoto.src = "assets/enemy-frost-vampire-attack.jpg";
            setTimeout(function(){ enemyPhoto.src = "assets/enemy-frost-vampire-rest.jpg"; }, 500);
            break;
    }
}

// SELECT SOUND FX WHEN ATTACK //
attackSoundPlay = (player) => {
    if (player.item == "Staff") {
        soundStaff.currentTime = 0;
        soundStaff.play();
    }
    else if (player.item == "Bow") {
        soundArrow.currentTime = 0;
        soundArrow.play();
    }
    else if (player.name == "Abbath") {
        soundAxe.currentTime = 0;
        soundAxe.play();
    }
    else if (player.name == "Frost") {
        soundKnife.currentTime = 0;
        soundKnife.play();
    }
    else {
        soundSword.currentTime = 0;
        soundSword.play();
    }
}


// BATTLE BUTTONS LISTENERS //
heroAttack.addEventListener("click", () => {
    hero.attack("enemy", enemy);
    if (hero.totalDamage == 0) {
        logtxt = logtxt + ("<br>" + hero.name + " attacks " + enemy.name + " but he dodges the attack.");
        soundDodge.currentTime = 0;
        soundDodge.play();
    }
    else {
        logtxt = logtxt + ("<br>" + hero.name + " attacks " + enemy.name + " dealing " + hero.totalDamage + " points of damage.");
        attackSoundPlay(hero);
    }
    updateLog();
    if (hero.item == "Bow" && success()) {
        hero.attack("enemy", enemy);
        if (hero.totalDamage == 0) {
            logtxt = logtxt + ("<br>" + hero.name + " attacks " + enemy.name + " again, but he dodges the attack.");
            soundDodge.currentTime = 0;
            soundDodge.play();
        }
        else {
            logtxt = logtxt + ("<br>" + hero.name + " attacks " + enemy.name + " again, dealing "+ hero.totalDamage + " points of damage.");
            attackSoundPlay(hero);
        }
        updateLog();
    }
});

enemyAttack.addEventListener("click", () => {
    enemy.attack("hero", hero);
    enemyPhotoAttack(enemy);
        if (enemy.totalDamage == 0) {
        logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name  + " but he dodges the attack.");
        soundDodge.currentTime = 0;
        soundDodge.play();
    }
    else {
        logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name  + " dealing "+ enemy.totalDamage + " points of damage.");
        attackSoundPlay(enemy);
    }
    updateLog();
    if (enemy.item == "Bow" && success()) {
        enemy.attack("hero", hero);
        enemyPhotoAttack(enemy);
        if (enemy.totalDamage == 0) {
            logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name  + " again, but he dodges the attack.");
            soundDodge.currentTime = 0;
            soundDodge.play();
        }
        else {
            logtxt = logtxt + ("<br>" + enemy.name + " attacks " + hero.name  + " again, dealing "+ enemy.totalDamage + " points of damage.");
            attackSoundPlay(enemy);
        }
        updateLog();
    }
});

heroHeal.addEventListener("click", () => {
    hero.heal("hero");
    soundHeal.currentTime = 0;
    soundHeal.play();
    logtxt = logtxt + ("<br>" + hero.name + " heals himself " + hero.healPoints + " points.");
    updateLog();
});

enemyHeal.addEventListener("click", () => {
    enemy.heal("enemy");
    soundHeal.currentTime = 0;
    soundHeal.play();
    logtxt = logtxt + ("<br>" + enemy.name + " heals himself " + enemy.healPoints + " points.");
    updateLog();
});

heroYield.addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + hero.name + " surrenders.");
    updateLog();
});

enemyYield.addEventListener("click", () => {
    logtxt = logtxt + ("<br>" + enemy.name + " surrenders.");
    updateLog();
});
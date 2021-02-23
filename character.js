var firstName = "Frost";
var secondName = "Abbath";
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
// Dépendance minimale sur l'élément "body" et "head"
elements.frozen_head = {
    color: "#a0dfff", // Bleu clair glacé
    behavior: behaviors.SOLID,
    category: "life",
    state: "solid",
    temp: -20,
    stateHigh: "head",
    tick: function(pixel) {
        if (pixel.temp > 0) {
            changePixel(pixel, "head");
        }
    },
    onMix: function(pixel) {
        // Pas d'autres effets pour l’instant
    }
};

elements.frozen_body = {
    color: "#7dc9ff", // Bleu un peu plus foncé
    behavior: behaviors.SOLID,
    category: "life",
    state: "solid",
    temp: -20,
    stateHigh: "body",
    tick: function(pixel) {
        if (pixel.temp > 0) {
            changePixel(pixel, "body");
        }
    },
    onMix: function(pixel) {}
};

// Redéfinir le comportement du gel pour le head et body
eLists.LIFE.forEach(name => {
    let e = elements[name];
    if (e && e.tempLow && e.stateLow && (e.stateLow === "frozen_meat")) {
        if (name === "head") {
            e.stateLow = "frozen_head";
        }
        if (name === "body") {
            e.stateLow = "frozen_body";
        }
    }
});

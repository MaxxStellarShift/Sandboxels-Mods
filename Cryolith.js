// Mod Sandboxels - Humains Congelés
// Permet de congeler/décongeler les humains sans les transformer en viande

// Créer les nouveaux éléments congelés
elements.frozen_head = {
    color: "#6495ED", // Bleu cornflower
    behavior: behaviors.POWDER,
    tempHigh: 0,
    stateHigh: "head",
    category: "life",
    state: "solid",
    density: 1500,
    hardness: 0.8,
    breakInto: "bone",
    conduct: 0.1,
    desc: "Tête humaine congelée"
};

elements.frozen_body = {
    color: "#4682B4", // Bleu acier
    behavior: behaviors.POWDER,
    tempHigh: 0,
    stateHigh: "body", 
    category: "life",
    state: "solid",
    density: 1200,
    hardness: 0.8,
    breakInto: "bone",
    conduct: 0.1,
    desc: "Corps humain congelé"
};

// Supprimer complètement les réactions existantes qui causent frozen_meat
delete elements.head.reactions;
delete elements.body.reactions;

// Recréer les réactions sans celles qui font frozen_meat
elements.head.reactions = {};
elements.body.reactions = {};

// Ajouter les propriétés de température
elements.head.tempLow = 0;
elements.head.stateLow = "frozen_head";

elements.body.tempLow = 0;
elements.body.stateLow = "frozen_body";

// Forcer la suppression des réactions de glace existantes
runAfterLoad(function() {
    if (elements.head.reactions && elements.head.reactions.ice) {
        delete elements.head.reactions.ice;
    }
    if (elements.head.reactions && elements.head.reactions.liquid_nitrogen) {
        delete elements.head.reactions.liquid_nitrogen;
    }
    if (elements.body.reactions && elements.body.reactions.ice) {
        delete elements.body.reactions.ice;
    }
    if (elements.body.reactions && elements.body.reactions.liquid_nitrogen) {
        delete elements.body.reactions.liquid_nitrogen;
    }
});

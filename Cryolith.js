// Mod Sandboxels - Humains Congelés v2
// Empêche la transformation en frozen_meat et crée des humains congelés

// Créer les nouveaux éléments congelés
elements.frozen_head = {
    color: "#87CEEB", // Bleu ciel
    behavior: behaviors.POWDER,
    tempHigh: 0,
    stateHigh: "head",
    category: "life",
    state: "solid",
    density: 1500,
    hardness: 0.8,
    breakInto: "bone",
    conduct: 0.1,
    desc: "Tête humaine congelée - peut être décongelée"
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
    desc: "Corps humain congelé - peut être décongelé"
};

// Override complet des éléments head et body
elements.head = {
    ...elements.head,
    tempLow: 0,
    stateLow: "frozen_head",
    reactions: {
        // Garder seulement les réactions importantes, pas celles qui font frozen_meat
        "water": { "elem1": null, "elem2": "dirty_water" },
        "salt_water": { "elem1": null, "elem2": "dirty_water" },
        "sugar_water": { "elem1": null, "elem2": "dirty_water" },
        "blood": { "elem1": null, "elem2": "blood" },
        // Supprimer explicitement les réactions avec ice et liquid_nitrogen
    }
};

elements.body = {
    ...elements.body,
    tempLow: 0, 
    stateLow: "frozen_body",
    reactions: {
        // Garder seulement les réactions importantes
        "water": { "elem1": null, "elem2": "dirty_water" },
        "salt_water": { "elem1": null, "elem2": "dirty_water" },
        "sugar_water": { "elem1": null, "elem2": "dirty_water" },
        "blood": { "elem1": null, "elem2": "blood" },
        // Pas de réaction avec ice ou liquid_nitrogen
    }
};

// Alternative : Override après le chargement
setTimeout(function() {
    // Forcer la suppression des réactions indésirables
    if (elements.head.reactions) {
        delete elements.head.reactions.ice;
        delete elements.head.reactions.liquid_nitrogen;
        delete elements.head.reactions.snow;
        delete elements.head.reactions.ice_nine;
    }
    
    if (elements.body.reactions) {
        delete elements.body.reactions.ice;
        delete elements.body.reactions.liquid_nitrogen; 
        delete elements.body.reactions.snow;
        delete elements.body.reactions.ice_nine;
    }
    
    // Redéfinir les propriétés de température
    elements.head.tempLow = 0;
    elements.head.stateLow = "frozen_head";
    elements.body.tempLow = 0;
    elements.body.stateLow = "frozen_body";
}, 100);

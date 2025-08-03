// Mod Sandboxels - Humains Congelés
// Permet de congeler/décongeler les humains sans les transformer en viande

elements.frozen_head = {
    color: "#4169E1", // Bleu royal pour simuler la couleur gelée
    behavior: behaviors.POWDER,
    tempHigh: 0,
    stateHigh: "head",
    category: "life",
    state: "solid",
    density: 1500,
    hardness: 0.8,
    breakInto: "bone",
    conduct: 0.1
};

elements.frozen_body = {
    color: "#4682B4", // Bleu acier pour le corps gelé
    behavior: behaviors.POWDER,
    tempHigh: 0,
    stateHigh: "body", 
    category: "life",
    state: "solid",
    density: 1200,
    hardness: 0.8,
    breakInto: "bone",
    conduct: 0.1
};

// Modifier l'élément "head" pour qu'il se transforme en "frozen_head" quand gelé
elements.head.tempLow = 0;
elements.head.stateLow = "frozen_head";

// Modifier l'élément "body" pour qu'il se transforme en "frozen_body" quand gelé
elements.body.tempLow = 0;
elements.body.stateLow = "frozen_body";

// Empêcher la transformation en "frozen_meat" pour head et body
if (elements.head.reactions) {
    delete elements.head.reactions.ice;
    delete elements.head.reactions.liquid_nitrogen;
}
if (elements.body.reactions) {
    delete elements.body.reactions.ice;
    delete elements.body.reactions.liquid_nitrogen;
}

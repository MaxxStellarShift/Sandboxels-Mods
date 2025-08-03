// Mod Sandboxels - Humains Congelés v3
// Intercept les transformations vers frozen_meat

// Créer les nouveaux éléments congelés
elements.frozen_head = {
    color: "#87CEEB", // Bleu ciel pour la tête
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
    color: "#4682B4", // Bleu acier pour le corps
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

// Hook dans la fonction de transformation des éléments
if (typeof changePixel !== 'undefined') {
    const originalChangePixel = changePixel;
    changePixel = function(pixel, element, changePos = false) {
        // Intercepter les transformations vers frozen_meat
        if (element === "frozen_meat") {
            // Vérifier quel était l'élément d'origine
            if (pixel.element === "head") {
                return originalChangePixel(pixel, "frozen_head", changePos);
            } else if (pixel.element === "body") {
                return originalChangePixel(pixel, "frozen_body", changePos);
            }
        }
        // Sinon, comportement normal
        return originalChangePixel(pixel, element, changePos);
    };
}

// Alternative : Hook dans pixelTick si changePixel n'existe pas
if (typeof pixelTick !== 'undefined') {
    const originalPixelTick = pixelTick;
    pixelTick = function(pixel) {
        const result = originalPixelTick(pixel);
        
        // Post-process : si un head/body devient frozen_meat, le corriger
        if (pixel.element === "frozen_meat") {
            if (pixel.originalElement === "head" || pixel.lastElement === "head") {
                pixel.element = "frozen_head";
                pixelColorEffects(pixel);
            } else if (pixel.originalElement === "body" || pixel.lastElement === "body") {
                pixel.element = "frozen_body";
                pixelColorEffects(pixel);
            }
        }
        
        return result;
    };
}

// Fallback : modifier directement les réactions après chargement
runAfterLoad(function() {
    // Modifier les réactions de ice pour head et body
    if (elements.ice && elements.ice.reactions) {
        if (elements.ice.reactions.head) {
            elements.ice.reactions.head = { "elem1": "frozen_head", "elem2": null };
        }
        if (elements.ice.reactions.body) {
            elements.ice.reactions.body = { "elem1": "frozen_body", "elem2": null };
        }
    }
    
    // Modifier liquid_nitrogen aussi
    if (elements.liquid_nitrogen && elements.liquid_nitrogen.reactions) {
        if (elements.liquid_nitrogen.reactions.head) {
            elements.liquid_nitrogen.reactions.head = { "elem1": "frozen_head", "elem2": null };
        }
        if (elements.liquid_nitrogen.reactions.body) {
            elements.liquid_nitrogen.reactions.body = { "elem1": "frozen_body", "elem2": null };
        }
    }
    
    // Et snow
    if (elements.snow && elements.snow.reactions) {
        if (elements.snow.reactions.head) {
            elements.snow.reactions.head = { "elem1": "frozen_head", "elem2": null };
        }
        if (elements.snow.reactions.body) {
            elements.snow.reactions.body = { "elem1": "frozen_body", "elem2": null };
        }
    }
});

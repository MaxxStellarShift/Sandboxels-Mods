// Mod Sandboxels - Approche radicale
// Remplace complètement frozen_meat et force les transformations

// Sauvegarder l'ancien frozen_meat
elements.old_frozen_meat = {...elements.frozen_meat};

// Créer les éléments congelés
elements.frozen_head = {
    color: "#87CEEB",
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
    color: "#4682B4",
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

// REMPLACER frozen_meat par une fonction qui détecte l'origine
elements.frozen_meat = {
    ...elements.old_frozen_meat,
    tick: function(pixel) {
        // Vérifier les pixels adjacents pour deviner l'origine
        let hasHead = false;
        let hasBody = false;
        
        // Chercher dans un rayon de 2 pixels
        for(let i = -2; i <= 2; i++) {
            for(let j = -2; j <= 2; j++) {
                if(isEmpty(pixel.x+i, pixel.y+j)) continue;
                let neighbor = pixelMap[pixel.x+i][pixel.y+j];
                if(neighbor && (neighbor.element === "head" || neighbor.element === "frozen_head")) {
                    hasHead = true;
                }
                if(neighbor && (neighbor.element === "body" || neighbor.element === "frozen_body")) {
                    hasBody = true;
                }
            }
        }
        
        // Transformation basée sur le contexte
        if(hasHead && !hasBody) {
            changePixel(pixel, "frozen_head");
        } else if(hasBody && !hasHead) {
            changePixel(pixel, "frozen_body");
        } else if(Math.random() < 0.5) {
            // Si les deux ou aucun, choisir au hasard
            changePixel(pixel, hasHead ? "frozen_head" : "frozen_body");
        }
        
        // Appeler le tick original si il existe
        if(elements.old_frozen_meat.tick) {
            elements.old_frozen_meat.tick(pixel);
        }
    }
};

// Méthode alternative : surveillance active
setInterval(function() {
    if(typeof pixelMap !== 'undefined') {
        for(let x = 0; x < width; x++) {
            for(let y = 0; y < height; y++) {
                if(pixelMap[x] && pixelMap[x][y] && pixelMap[x][y].element === "frozen_meat") {
                    let pixel = pixelMap[x][y];
                    
                    // Convertir immédiatement selon la position
                    if(y < height/2) {
                        // Partie haute = tête
                        changePixel(pixel, "frozen_head");
                    } else {
                        // Partie basse = corps  
                        changePixel(pixel, "frozen_body");
                    }
                }
            }
        }
    }
}, 100); // Vérifier toutes les 100ms

// Début du Mod - Assurez-vous que l'objet "elements" existe
if (!elements) {
    var elements = {};
}

// Définition de l'élément Orangina
elements.orangina = {
    // COULEURS DE BASE
    color: ["#FF8C00", "#FFA07A", "#FF7F50", "#FF6347"], 
    
    // PROPRIÉTÉS
    category: "powders",
    state: "powder",
    name: "Orangina",
    behavior: behaviors.POWDER, 
    density: 1500,
    
    // INFLAMMABILITÉ ÉLEVÉE
    tempHigh: 100, // Température d'allumage très basse (brûle facilement)
    burn: 30, // Taux de combustion (très rapide)
    burnTime: 50, // Temps de combustion (brûle rapidement)
    
    // FONCTION DE VARIATION DE COULEUR (pour l'effet non-uni)
    change_temp: function(pixel, temp, new_temp) {
        // Cette fonction s'exécute à la création/mise à jour
        
        // --- LOGIQUE DE COULEUR ALÉATOIRE ---
        var baseColor = pixel.color; 
        
        // Convertir la couleur HEX en format RGB pour la modification
        var r = parseInt(baseColor.substring(1, 3), 16);
        var g = parseInt(baseColor.substring(3, 5), 16);
        var b = parseInt(baseColor.substring(5, 7), 16);

        // Variations légères et aléatoires
        var rOffset = Math.floor(Math.random() * 21) - 10;
        var gOffset = Math.floor(Math.random() * 21) - 10;
        var bOffset = Math.floor(Math.random() * 11) - 5; 

        // Application des variations (clamp entre 0 et 255)
        r = Math.min(255, Math.max(0, r + rOffset));
        g = Math.min(255, Math.max(0, g + gOffset));
        b = Math.min(255, Math.max(0, b + bOffset));

        // Reconversion en HEX et assignation
        var newHex = "#" + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        pixel.color = newHex;
    },
};

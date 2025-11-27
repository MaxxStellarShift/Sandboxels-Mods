elements.orangina = {
    color: ["#FF8C00", "#FFA07A", "#FF7F50", "#FF6347"], // Couleurs de base (orange à rouge-orange)
    category: "powders",
    state: "powder",
    tempHigh: 100, // Température à laquelle il commence à s'enflammer (très basse)
    burn: 30, // Taux de combustion (très rapide)
    burnTime: 50, // Temps de combustion (relativement court)
    density: 1500,
    behavior: behaviors.POWDER, // Comportement standard de la poudre (sable)
    name: "Orangina",
    
    // Fonction pour générer une couleur légèrement aléatoire lors de la création
    change_temp: function(pixel, temp, new_temp) {
        // Obtenir la couleur de base du pixel
        var baseColor = pixel.color; 
        
        // Convertir la couleur HEX en format RGB pour la modification
        var r = parseInt(baseColor.substring(1, 3), 16);
        var g = parseInt(baseColor.substring(3, 5), 16);
        var b = parseInt(baseColor.substring(5, 7), 16);

        // Ajouter ou soustraire une petite valeur aléatoire à chaque composante (R, G, B)
        // Cela crée les variations de nuance.
        var rOffset = Math.floor(Math.random() * 21) - 10; // Variation entre -10 et +10
        var gOffset = Math.floor(Math.random() * 21) - 10;
        var bOffset = Math.floor(Math.random() * 11) - 5; // Moins de variation pour le bleu/vert

        // Appliquer l'offset en s'assurant que les valeurs restent entre 0 et 255
        r = Math.min(255, Math.max(0, r + rOffset));
        g = Math.min(255, Math.max(0, g + gOffset));
        b = Math.min(255, Math.max(0, b + bOffset));

        // Reconvertir en HEX et l'assigner au pixel
        var newHex = "#" + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        pixel.color = newHex;
    },
};

// make custom items / elements

elements.frozen_head = {
  color: ["#8ecae6", elements.head.color], // teinte bleue + couleur originale
  behavior: behaviors.SUPPORT,
  category: "Corps",
  state: "solid",
  tempHigh: 50,
  stateHigh: "head",
  density: elements.head.density,
  hidden: false,
  desc: "Tête glacée. Peut revenir à la vie avec de la chaleur."
};

// Corps glacé
elements.frozen_body = {
  color: ["#5aa0c8", elements.body.color], // teinte bleue + couleur originale
  behavior: behaviors.SUPPORT,
  category: "Corps",
  state: "solid",
  tempHigh: 50,
  stateHigh: "body",
  density: elements.body.density,
  hidden: false,
  desc: "Corps glacé. Peut revenir à la vie avec de la chaleur."
};

// Modification du comportement de la tête et du corps au froid
if (enabledMods.includes("mods/tonMod.js")) {
  elements.head.tempLow = -50;
  elements.head.stateLow = "frozen_head";

  elements.body.tempLow = -50;
  elements.body.stateLow = "frozen_body";
}

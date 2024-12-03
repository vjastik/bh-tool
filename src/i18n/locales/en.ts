import { Translation } from "../../types/i18n";

const translation: Translation = {
  translation: {
    common: {
      back: "Back",
      save: "Save",
      cancel: "Cancel",
      confirm: "Confirm",
      edit: "Edit",
      delete: "Delete",
      add: "Add",
      use: "Use",
      empty: "Empty",
      name: "Name",
      description: "Description",
    },
    characters: {
      title: "Characters",
      create: "Create Character",
      create_char: "Create",
      edit: "Edit Character",
      delete: {
        title: "Delete Character",
        message:
          "Are you sure you want to delete {{name}}? This action cannot be undone.",
      },
      empty: {
        title: "No Characters Yet",
        description: "Create your first character to begin your adventure!",
      },
      form: {
        name: "Character Name",
        stats: "Character Stats",
      },
    },
    stats: {
      str: "STR",
      dex: "DEX",
      int: "INT",
      con: "CON",
      wis: "WIS",
      hp: "HP",
      mp: "MP",
      chaos: "Chaos",
    },
    features: {
      title: "Features",
      add: "Add",
      empty:
        "No features added yet. Click the button above to add your first feature.",
      new: {
        name: "New Feature",
        description: "Description of the feature",
      },
    },
    skills: {
      title: "Skills",
      add: "Add",
      empty:
        "No skills added yet. Click the button above to add your first skill.",
      mpCost: "MP Cost",
      new: {
        name: "New Skill",
        description: "Description of the skill",
      },
    },
    inventory: {
      pockets: "Pockets",
      weapon: "Weapon",
      backpack: "Backpack",
      addItem: "Add",
      emptyPocket: "Empty Pocket",
      emptyBackpack: "No items in backpack",
      noWeapon: "No weapon equipped",
      unequip: "Unequip",
      equip: "Equip",
      remove: "Remove",
      addFromBackpack: "Add item from backpack",
      itemType: {
        label: "Item Type",
        common: "Common Item",
        weapon: "Weapon",
        pocket: "Pocket",
      },
      damage: "Damage",
    },
    roll: {
      title: "Choose die to roll",
      button: "Roll",
      rolling: "Rolling...",
    }
  },
};

export default translation;

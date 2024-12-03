export interface Translation {
  translation: {
    common: {
      back: string;
      save: string;
      cancel: string;
      confirm: string;
      edit: string;
      delete: string;
      add: string;
      use: string;
      empty: string;
      name: string;
      description: string;
    };
    characters: {
      title: string;
      create: string;
      create_char: string;
      edit: string;
      delete: {
        title: string;
        message: string;
      };
      empty: {
        title: string;
        description: string;
      };
      form: {
        name: string;
        stats: string;
      };
    };
    stats: {
      str: string;
      dex: string;
      int: string;
      con: string;
      wis: string;
      hp: string;
      mp: string;
      chaos: string;
    };
    features: {
      title: string;
      add: string;
      empty: string;
      new: {
        name: string;
        description: string;
      };
    };
    skills: {
      title: string;
      add: string;
      empty: string;
      mpCost: string;
      new: {
        name: string;
        description: string;
      };
    };
    inventory: {
      pockets: string;
      weapon: string;
      backpack: string;
      addItem: string;
      emptyPocket: string;
      emptyBackpack: string;
      noWeapon: string;
      unequip: string;
      equip: string;
      remove: string;
      addFromBackpack: string;
      itemType: {
        label: string;
        common: string;
        weapon: string;
        pocket: string;
      };
      damage: string;
    };
  };
}
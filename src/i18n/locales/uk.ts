import { Translation } from "../../types/i18n";

const translation: Translation = {
  translation: {
    common: {
      back: "Назад",
      save: "Зберегти",
      cancel: "Скасувати",
      confirm: "Підтвердити",
      edit: "Редагувати",
      delete: "Видалити",
      add: "Додати",
      use: "Використати",
      empty: "Порожньо",
      name: "Ім'я",
      description: "Опис",
    },
    characters: {
      title: "Персонажі",
      create: "Створити персонажа",
      create_char: "Створити",
      edit: "Редагувати персонажа",
      delete: {
        title: "Видалити персонажа",
        message:
          "Ви впевнені, що хочете видалити {{name}}? Цю дію неможливо скасувати.",
      },
      empty: {
        title: "Ще немає персонажів",
        description: "Створіть свого першого персонажа, щоб почати пригоду!",
      },
      form: {
        name: "Ім'я персонажа",
        stats: "Характеристики персонажа",
      },
    },
    stats: {
      str: "М`язи",
      dex: "Реакція",
      int: "Розум",
      con: "Тіло",
      wis: "Таїнства",
      hp: "ОЗ",
      mp: "ОМ",
      chaos: "Хаос",
    },
    features: {
      title: "Особливості",
      add: "Додати",
      empty:
        "Ще немає особливостей. Натисніть кнопку вище, щоб додати першу особливість.",
      new: {
        name: "Нова особливість",
        description: "Опис особливості",
      },
    },
    skills: {
      title: "Навички",
      add: "Додати",
      empty:
        "Ще немає навичок. Натисніть кнопку вище, щоб додати першу навичку.",
      mpCost: "Вартість МП",
      new: {
        name: "Нова навичка",
        description: "Опис навички",
      },
    },
    inventory: {
      pockets: "Кишені",
      weapon: "Зброя",
      backpack: "Рюкзак",
      addItem: "Додати",
      emptyPocket: "Порожня кишеня",
      emptyBackpack: "Рюкзак порожній",
      noWeapon: "Немає спорядженої зброї",
      unequip: "Зняти",
      equip: "Спорядити",
      remove: "Прибрати",
      addFromBackpack: "Додати предмет з рюкзака",
      itemType: {
        label: "Тип предмета",
        common: "Звичайний предмет",
        weapon: "Зброя",
        pocket: "Кишені",
      },
      damage: "Пошкодження",
    },
  },
};

export default translation;

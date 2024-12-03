import { store } from '../../../../store/store'
import { addCharacter } from '../../../../store/characterSlice';

export const handleCreateNewCharacter = () => {
  store.dispatch(addCharacter({
    id: crypto.randomUUID(),
    name: 'Character Name',
    stats: {
      str: null,
      dex: null,
      int: null,
      con: null,
      wis: null
    },
    hp: 0,
    mp: 0,
    chaos: 0,
    features: [],
    skills: [],
    pockets: [null, null, null, null],
    backpack: [],
    weapon: null
  }))
}

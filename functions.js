const characters = require('./characters/characters.json');

const randomCharacter = () => {
  let randomID = Math.floor(Math.random() * characters.length);
  return characters[randomID];
}
const character_func = (charName) => {
  const singleCharacter = characters.find(
    (char__) => char__.character == charName)
    if(!singleCharacter) {
      return { error: 'Character Not found' };
    } else {
      return singleCharacter;
    }
}

module.exports = {randomCharacter, character_func};
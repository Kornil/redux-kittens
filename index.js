const catArray = ['/ᐠ｡ꞈ｡ᐟ\\', '🐱', '=^._.^= ∫', '(^._.^)ﾉ', '/ᐠ ._. ᐟ\\ﾉ', '[^._.^]ﾉ', '(ﾐㅇ ༝ ㅇﾐ)', '🐈'];

const reduxKittensLogger = store => next => (action) => {
  console.log('Previous cat', store.getState());
  console.log('Instructions', action);
  const result = next(action);
  console.log('Next cat', store.getState());
  console.log(catArray[Math.floor(Math.random() * catArray.length)]);
  return result;
};

export default reduxKittensLogger;

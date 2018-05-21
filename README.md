# redux-kittens
Testing redux middlewares with kittens addsadsadsa
## Install

`npm i https://github.com/Kornil/redux-kittens.git`

Just import it and use it as middleware for redux

```
import ...
import { createStore, applyMiddleware } from 'redux';
import reduxKittensLogger from 'redux-kittens';

const middleware = [reduxKittensLogger];

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);
```

and that's it, now you have kittens on the console.


### kitten example

```
Previous cat {counterReducer: 1}
Instructions {type: "INCREMENT"}
Next cat {counterReducer: 2}
/ᐠ｡ꞈ｡ᐟ\
```

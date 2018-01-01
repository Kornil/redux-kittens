# redux-kittens
Testing redux middlewares with kittens

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

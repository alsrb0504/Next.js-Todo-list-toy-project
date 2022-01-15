import reducer from './reducer';
const { createWrapper } = require('next-redux-wrapper');
const { createStore, applyMiddleware } = require('redux')
const { composeWithDevTools } = require('redux-devtools-extension');


const configureStore = () => {
  const middlewares = [];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  return store;
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development,'
})

export default wrapper;
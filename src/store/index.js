import { composeWithDevTools } from "@redux-devtools/extension";
import {
  combineReducers,
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import productsReducer from "./products";
import cartsReducer from "./carts";
import favoritesReducer from "./favorites";
import users from './users'
import { addLoggingOnDispatch, addAppVersion } from "../add-ons/enhancer";
import { blockActionMiddleware } from "../add-ons/middlewares";
import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";


const rootReducer = combineReducers({
  products: productsReducer,
  carts: cartsReducer,
  favorites: favoritesReducer,
  users: users
});

//added a ectra enhancer along with composed dev tools
//new extra reducer come in comma separte format
// enhancer1-->enhancer2-->enhancer2

// const store = createStore(rootReducer, composeWithDevTools(addLoggingOnDispatch, addAppVersion));

const composedEnhancer = compose(addLoggingOnDispatch, addAppVersion);

const sagaMiddleWare = createSagaMiddleware()
const middlewareEnhancer = applyMiddleware(blockActionMiddleware, sagaMiddleWare);

const store = createStore(
  rootReducer,
  composeWithDevTools(composedEnhancer, middlewareEnhancer)
);

// const store = createStore(rootReducer, addLoggingOnDispatch);

console.log(store.getState()); //print all the app state

sagaMiddleWare.run(rootSaga)
export default store;

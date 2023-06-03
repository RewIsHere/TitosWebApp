import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { promosListReducer } from "./reducers/promosReducers";
import navigationReducer from "./reducers/navigationReducers";

const reducer = combineReducers({
  promosList: promosListReducer,
  navigationReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

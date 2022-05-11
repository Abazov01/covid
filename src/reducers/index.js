import { applyMiddleware,  createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { countryReducer } from './coutnryRed';



export const store = createStore(
  countryReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

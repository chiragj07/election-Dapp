import reducer from './voter.reducer';
import { createStore, applyMiddleware,combineReducers } from "redux";
import { createLogger } from "redux-logger";
const logger = createLogger();
const rootReducer = combineReducers({
    voter : reducer
})
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from 'redux-thunk'
import firstReducer from "./reducers/firstReducer";
import secondReducer from "./reducers/secondReducer";
import thirdReducer from "./reducers/thirdReducer";


export type AppState = ReturnType<typeof store.getState>



const RootReducer = combineReducers({
    first: firstReducer,
    second: secondReducer,
    third: thirdReducer
})

export const store = legacy_createStore(RootReducer, applyMiddleware(thunk))

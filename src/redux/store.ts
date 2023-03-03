import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import calorieCalculatorReducer from "./CalorieCalculator";

const reducers = combineReducers({
    calorieCalculator: calorieCalculatorReducer,
  });
  const store = createStore(reducers, applyMiddleware(thunk));
  
  export default store;
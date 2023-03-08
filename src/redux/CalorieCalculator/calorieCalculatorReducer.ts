import { SET_VALUES } from "./calorieCalculatorTypes";


export type initialStateType = {
  age: string,
  currentWeight: 'pounds' | 'kilos',
  weight: string,
  currentHeight: 'feetInches'| 'cm',
  heightCm: string,
  heightInches: string,
  heightFeed: string,
  sex: 'female'| 'male' ,
  activity: 'lightly' |'no' | 'very' | 'active' | 'moderately' 
}

let initialState :initialStateType | any= {
  age: '',
  weight: '',
  currentWeight:  'pounds',
  currentHeight: 'feetInches',
  heightCm: '',
  heightInches: '',
  heightFeed: '', 
  sex: 'female', 
  activity: null
  };
  
  const calorieCalculatorReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_VALUES: {
          console.log(action) 
          console.log(state) 
          return { ...state, state : action.payload};
        }
  
        default:
          return state;
      }
     
    
  };
 export default calorieCalculatorReducer;
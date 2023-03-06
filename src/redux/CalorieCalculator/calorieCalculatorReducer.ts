
export type initialStateType = {
    sex: string | null,
    weight: null | number,
    height: null | number
}

let initialState :initialStateType = {
    sex: null,
    weight: null,
    height: null
  };
  
//   const calorieCalculatorReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_USERS: {
//           return { ...state, users: action.users };
//         }
//         case SET_USER: {
//           return { ...state, user: action.user};
//         }
//         default:
//           return state;
//       }
     
    
//   };
 // export default calorieCalculatorReducer;
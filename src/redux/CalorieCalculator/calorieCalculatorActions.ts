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

export const setValues = (values:any) => ({ type: SET_VALUES, payload: values });

const CountRate = (values:initialStateType ) => {
    let rate:number = 1;
    if(values.activity === "no"){
        rate = 1;
    } else if(values.activity === "lightly"){
        rate = 1.2;
    } else if(values.activity === "moderately"){
        rate = 1.6;
    } else if(values.activity === "active"){
        rate = 1.7;
    } else if(values.activity === "very"){
        rate = 1.9;
    } 
   return rate
    
  };

  export const CountCalories  = (values:initialStateType) => {

    console.log(values);
    let callories;
    let weight =  Number(values.weight);
    let height =  Number(values.heightCm);
    let age =  Number(values.age);
    let rate = CountRate(values)
    console.log('rate '+rate)

   if(values.sex === "male"){
        callories= 66.5 + 13.7  * weight + 5 * height - 6.775 * age  * rate;
        console.log(callories)
         return callories
 
     }
     else if(values.sex === "female"){
         callories= 655 + 9.5  * weight + 1.8 * height - 4.7 * age  * rate;
         console.log(callories)
         return callories
     }
  }
import React from "react";

import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import s from "./CalorieCalculator.module.css";
import classnames from 'classnames';
import {validateWeight, validateHeight, validateSex, validateAge} from "../../helpers/validadions/validations";
import { CountCalories , setValues} from "../../redux/CalorieCalculator/calorieCalculatorActions";

enum Activity {
    Active = 'active',
    Lightly = 'lightly',
    No = 'no',
    Very =  'very',
    Moderately = 'moderately'
}


interface MyFormValues {
  age: string,
  currentWeight: 'pounds' | 'kilos',
  weight: string,
  currentHeight: 'feetInches'| 'cm',
  heightCm: string,
  heightInches: string,
  heightFeed: string,
  sex: 'female'| 'male' ,
  activity: Activity
}



function CalorieCalculator() {

  const dispatch = useDispatch();
// const initialValues: MyFormValues | any = { 
  const initialValues: MyFormValues  = { 
    age: '',
    weight: '',
    currentWeight:  'pounds',
    currentHeight: 'feetInches',
    heightCm: '',
    heightInches: '',
    heightFeed: '', 
    sex: 'female', 
    activity: Activity.Lightly
  };

  
  
  function myfunction(){
    //console.log(e);
    console.log('lala')

  }
 

  return (
    <div >
      Calorie Calculator page
      <Formik
        initialValues={initialValues}
       
        onSubmit={(values: MyFormValues, { resetForm }) => {
          console.log(values)
          dispatch(setValues(values));
          dispatch<any>(CountCalories(values));
          resetForm({});
        }}

       

        

      >
        {({ errors, touched, values, handleChange }) => (
          <Form>
            <label htmlFor="age"> age <br />
              <Field
              //  onChange={(e: any) => {
              //      console.log(1)
              //     handleChange(e);
              //     //myfunction(e)
              // }} 
              className={classnames(
                s.label, { [s.errorLabel]: errors.age && touched.age }
              )} name="age" id='age' type="text" validate={validateAge} />
              {errors.age && touched.age ? (
             <div>{errors.age}</div>
           ) : null}
            </label>
            <br />
            <div id="currentWeight-radio-group">Weight</div>
            <div role="group" aria-labelledby="currentWeight-radio-group">
              <label >
                <Field 
              name="currentWeight" type="radio" value="pounds"   /> Pounds
              </label>
              <label >  

                <Field name="currentWeight" type="radio" value="kilos"  
              //    onChange={(e: any) => {
              //      console.log(2)
              //     handleChange(e);
              //    // myfunction(e)
              // }} 
              />Kilos
              </label>
            </div>

            <label htmlFor="weight">
              <Field name="weight" type="text" className={classnames(
                s.label, { [s.errorLabel]: errors.weight && touched.weight })} validate={validateWeight} />

              {errors.weight && touched.weight ? (
              <div>{errors.weight}</div>
            ) : null}
            </label>

            <div id="currentHeight-radio-group">Height</div>
            <div role="group" aria-labelledby="currentHeight-radio-group">
              <label >
                <Field name="currentHeight" type="radio" value="feetInches"  /> Feet / Inches
              </label>
              <label >  
                <Field name="currentHeight" type="radio" value="cm"   />Cm
              </label>
            </div>
            <br /> height <br />
            <label htmlFor="heightCm"> cm
              <Field id='heightCm' name="heightCm" type="text" className={classnames(
                s.label, { [s.errorLabel]: errors.heightCm && touched.heightCm })} validate={validateHeight} />
            </label>
            <br />
            <label htmlFor="heightFeed"> Feed
              <Field name="heightFeed" type="text" />
            </label>
            <label htmlFor="heightInches"> Inches
              <Field name="heightInches" type="text"   />
            </label>
            <br />

            <div id="activity-radio-group">Activity</div>
            <div role="group" aria-labelledby="activity-radio-group">

              <label>
                <Field name="activity" type="radio" value="no" /> Sedentary (little or no exercise)

              </label>
              <br />
              <label>
                <Field name="activity" type="radio" value="lightly" /> Lightly active (exercise 1–3 days/week)

              </label> <br />
              <label>
                <Field name="activity" type="radio" value="moderately" /> Moderately active (exercise 3–5 days/week)

              </label> <br />
              <label>
                <Field name="activity" type="radio" value="active" /> Active (exercise 6–7 days/week)

              </label> <br />
              <label>
                <Field name="activity" type="radio" value="very" /> Very active (hard exercise 6–7 days/week)

              </label> <br />

            </div>

            <div id="sex-radio-group">Picked</div>
            <div role="group" aria-labelledby="sex-radio-group">
              <label >
                <Field name="sex" type="radio" value="female" validate={validateSex} /> female

              </label>
              <label >  male
                <Field name="sex" type="radio" value="male" validate={validateSex} />
              </label>


            </div>
            <br />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CalorieCalculator;

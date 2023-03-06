import React from "react";
import { Formik, Field, Form } from "formik";
import s from "./CalorieCalculator.module.css";
import classnames from 'classnames';


interface MyFormValues {
  age: number | null,
  width: number | null,
  height: number | null,
  sex: '',
  activity: string,
}
const regNumber = new RegExp('^[0-9]+$')

function validateAge(age: any) {

  if (!age) {

    return "Required";

  } else if (!regNumber.test(age) || age > 120) {

    return "Invalid name"
  }
}
function validateSex(sex: any) {

  if (sex === '') {
    return "Required";

  } else if (sex == 'male' && sex == 'female') {
    return "Invalid name"
  }
}

function validateWidth(width: any) {
  if (!width) {
    return "Required";

  } else if (!regNumber.test(width) || width > 300) {
    return "Invalid name"
  }
}
function validateHeight(height: any) {
  if (!height) {

    return "Required";

  } else if (!regNumber.test(height) || height < 70 || height > 250) {

    return "Invalid name"
  }
}



function CalorieCalculator() {

  const initialValues: MyFormValues = { age: null, width: null, height: null, sex: '', activity: '' };
  return (
    <div >
      Calorie Calculator page
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          console.log(values)
          resetForm({});
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
            <label htmlFor="age">
              <Field className={classnames(
                s.label, { [s.errorLabel]: errors.age && touched.age }
              )} name="age" id='age' type="text" validate={validateAge} />
            </label>
            <br />
            <label htmlFor="width">
              <Field name="width" type="text" className={classnames(
                s.label, { [s.errorLabel]: errors.width && touched.width })} validate={validateWidth} />
            </label>
            <br />
            <label htmlFor="height">
              <Field name="height" type="text" className={classnames(
                s.label, { [s.errorLabel]: errors.height && touched.height })} validate={validateHeight} />
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

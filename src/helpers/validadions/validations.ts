const regNumber = new RegExp('^[0-9]+$');

export function validateAge(age: any) {
    if (!age) {
      return "Required";
    } else if (!regNumber.test(age)) {
      return "Enter numbers only"
    } else if( age < 13 || age > 120){
      return "Beetwen 13 and 120"
    }
  }

export function validateSex(sex: any) {
    if (sex === '') {
        return "Required";
    } else if (sex === 'male' && sex === 'female') {
        return "Invalid name"
    }
}

export function validateWeight(weight: any) {
    if (!weight) {
        return "Required";
    } else if (!regNumber.test(weight)) {
        return "Enter numbers only"
    } else if (weight < 30 || weight > 500) {
      return "Invalid weight"
  }
}

export function validateHeight(height: any) {
    if (!height) {
        return "Required";
    } else if (!regNumber.test(height) || height < 70 || height > 250) {
        return "Invalid name"
    }
}

export function validatecurrentHeight(currentHeight: 'feetInches'| 'cm') {
  if (currentHeight === 'feetInches') {
   // console.log('feet')
    //console.log(currentHeight)
    return "Required";
  } else if (currentHeight === 'cm') {
    //console.log('cm')
    //console.log(currentHeight)
    return "Enter numbers only"
    
  } 
}
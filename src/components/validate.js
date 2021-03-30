const validate = (inputs) => {
    const errors = {};
    // Mobile Errors
    if (!inputs.mobile) errors.mobile = 'Please enter mobile number';
    else{
        if(inputs.mobile.length > 10) errors.mobile = 'Mobile No Should be 10 of characters';
        else if(inputs.mobile.length < 10) errors.mobile = 'Mobile No Should be 10 of characters';
    }

    // MPin Errors
    if (!inputs.mpin) errors.mpin = 'Please enter Mpin';
    else{
        if(inputs.mpin.length > 4) errors.mpin = 'Mpin No Should be 4 of characters';
        else if(inputs.mpin.length < 4) errors.mpin = 'Mobile No Should be 4 of characters';
    }

    //Email errors
    if (!inputs.email) {
       errors.email = 'Check Email';
    } else if (
       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)
    ) {
       errors.email = 'Invalid email address';
    }

   //Password Errors
   if(!inputs.password  || inputs.password.length<6){
       errors.password = 'Check Password'
   }
   return errors;
}

export default validate;
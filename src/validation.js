const mobileValidation = mobile => {
    if (!mobile) {
      return 'mobile is required';
    }
    if (mobile.length < 10) {
      return 'mobile must be at least 10';
    }
    if (mobile.length == 0) {
      return 'mobile must be atlease 10';
    }
    return null;
};

const mPinValidation = mpin => {
    if (!mpin) {
        return 'mpin is required';
    }
    if (mpin.length < 3) {
        return 'mpin must be at least 3';
    }
    if (mpin.length == 0) {
        return 'mpin must be atlease 3';
    }
    return null;
};

export { mobileValidation, mPinValidation};
const handleClickShowPassword = (values = {}, setValues) => {
  setValues({
    ...values,
    showPassword: !values.showPassword,
  });
};

export default handleClickShowPassword;

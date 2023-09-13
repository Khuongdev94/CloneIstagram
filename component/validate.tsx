// email
export const isValidName = (stringEmail: string) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail);
};

// password
export const isValidPassword = (stringPassword: string) =>
  stringPassword.length > 6;

export const hasSpecialCharacter = (password) => /[!@#$%^&*]/.test(password);
export const hasNumber = (password) => /\d/.test(password);
export const hasUppercaseLetter = (password) => /[A-Z]/.test(password);
export const hasNoConsecutiveLetters = (password) => !/(.)\1/i.test(password);
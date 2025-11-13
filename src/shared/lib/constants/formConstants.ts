export const FORM_REG_EX = {
  PHONE: /^\+375-\(\d{2}\)-\d{3}-\d{2}-\d{2}$/,
  LETTERS: /^\p{L}+$/u,
};
export const FORM_ERROR_MESSAGES = {
  ONLY_LETTERS: 'Поле может содержать только буквы',
  REQUIRED: 'Поле не должно быть пустым',
  EMAIL: 'Введите email в формате: example@mail.com',
  PHONE: 'Введите телефон в формате: +375-(__)-___-__-__',
};

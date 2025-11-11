export const FORM_REG_EX = {
  PHONE: /^(?:\+375|80)\s*\(?(25|29|33|44|17|[0-9]{2})\)?\s*\d{7}$/,
  LETTERS: /^\p{L}+$/u,
};
export const FORM_ERROR_MESSAGES = {
  ONLY_LETTERS: 'Поле может содержать только буквы',
  REQUIRED: 'Поле не должно быть пустым',
  EMAIL: 'Введите email в формате: example@mail.com',
  PHONE: 'Введите телефон в формате: +375XXXXXXXXX',
};

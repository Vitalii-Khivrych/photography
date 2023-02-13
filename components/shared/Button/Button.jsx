import { Btn } from './Button.styled';

export const Button = ({ type, text, width, height }) => {
  return <Btn type={type}>{text}</Btn>;
};

import { Btn } from './Button.styled';

export const Button = ({ type, text, width, height, position }) => {
  return (
    <Btn type={type} width={width} height={height} position={position}>
      {text}
    </Btn>
  );
};

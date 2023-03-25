import { OpenBtn, Svg } from './OpenMobMenuBtn.styled';
import sprite from '/public/sprite.svg';

export const OpenMobMenuBtn = () => {
  return (
    <OpenBtn type="button">
      <Svg>
        <use href={`${sprite}#icon-menu-open`}></use>
      </Svg>
    </OpenBtn>
  );
};

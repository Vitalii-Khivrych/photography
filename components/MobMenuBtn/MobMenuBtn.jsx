import { OpenBtn, Svg } from './MobMenuBtn.styled';
import sprite from '/public/sprite.svg';

export const OpenMobMenuBtn = ({ handlerClick }) => {
  return (
    <OpenBtn type="button" onClick={() => handlerClick()} open>
      <Svg>
        <use href={`${sprite}#icon-menu-open`}></use>
      </Svg>
    </OpenBtn>
  );
};

export const CloseMobMenuBtn = ({ handlerClick }) => {
  return (
    <OpenBtn type="button" onClick={() => handlerClick()}>
      <Svg>
        <use href={`${sprite}#icon-menu-close`}></use>
      </Svg>
    </OpenBtn>
  );
};

import { OpenBtn, Svg } from './MobMenuBtn.styled';
import sprite from '/public/sprite.svg';

export const OpenMobMenuBtn = ({ handlerClick }) => {
  return (
    <OpenBtn type="button" onClick={() => handlerClick()} open>
      <Svg>
        <use xlinkHref={`${sprite}#icon-menu-open`}></use>
      </Svg>
    </OpenBtn>
  );
};

export const CloseMobMenuBtn = ({ handlerClick }) => {
  return (
    <OpenBtn type="button" onClick={() => handlerClick()}>
      <Svg>
        <use xlinkHref={`${sprite}#icon-menu-close`}></use>
      </Svg>
    </OpenBtn>
  );
};

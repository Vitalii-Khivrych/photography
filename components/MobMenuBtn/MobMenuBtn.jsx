import { OpenBtn, Svg } from './MobMenuBtn.styled';
import sprite from '/public/sprite.svg';

export const MobMenuBtn = ({ handlerClick, open }) => {
  const openId = 'icon-menu-open';
  const closeId = 'icon-menu-close';

  const svgIcon = () => {
    if (open) return openId;
    return closeId;
  };

  return (
    <OpenBtn
      type="button"
      onClick={() => handlerClick()}
      open={open ? true : false}
    >
      <Svg>
        <use href={`${sprite}#${svgIcon()}`}></use>
      </Svg>
    </OpenBtn>
  );
};

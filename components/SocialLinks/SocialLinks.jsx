import { socialLinks } from '@/data/socialLinks';
import sprite from '/public/sprite.svg';
import { List, Item, LinkStyled, Svg } from './SocialLinks.styled';

export const SocialLinks = () => {
  return (
    <List>
      {socialLinks.map(({ href, id }, ind) => {
        return (
          <Item key={ind}>
            <LinkStyled href={href} rel="nofollow noopener" target="_blank">
              <Svg>
                <use href={`${sprite}#${id}`}></use>
              </Svg>
            </LinkStyled>
          </Item>
        );
      })}
    </List>
  );
};

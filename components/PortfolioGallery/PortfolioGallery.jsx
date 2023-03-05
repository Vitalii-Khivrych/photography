import Image from 'next/image';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';

import { data } from '@/data/galleries';
import { List, Item } from './PortfolioGallery.styled';

export const PortfolioGallery = ({ id }) => {
  const [filterData] = data.filter(item => item.id === id);
  const imagesArr = filterData.data;

  return (
    <SlideshowLightbox
      lightboxIdentifier="lightbox1"
      framework="next"
      data={imagesArr}
    >
      <List>
        {imagesArr.map(({ href }, ind) => (
          <Item key={ind}>
            <Image
              src={href}
              alt={href}
              height={200}
              width={200}
              data-lightboxjs="lightbox1"
              quality={100}
              style={{
                objectFit: 'cover',
                width: '100% ',
                display: 'block',
                height: '100%',
              }}
            />
          </Item>
        ))}
      </List>
    </SlideshowLightbox>

    // <List>
    //   {data.map(({ id, href }) => {
    //     return (
    //       <Item key={id} className="gallery">
    //         <Image
    //           src={href}
    //           alt="image"
    //           width={200}
    //           height={300}
    //           style={{
    //             objectFit: 'cover',
    //             width: '100% ',
    //             display: 'block',
    //             height: '100%',
    //           }}
    //         />
    //       </Item>
    //     );
    //   })}
    // </List>
  );
};

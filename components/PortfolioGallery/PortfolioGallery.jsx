import Image from 'next/image';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';

import { data } from '@/data/galleries';
import { List, V_stretch, H_stretch } from './PortfolioGallery.styled';

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
        {imagesArr.map(({ href, position = 'v' }, ind) => {
          return position === 'v' ? (
            <V_stretch key={ind}>
              <Image
                priority
                src={href}
                alt={href}
                height={800}
                width={1000}
                data-lightboxjs="lightbox1"
                quality={100}
                style={{
                  objectFit: 'cover',
                  width: '100% ',
                  display: 'block',
                  height: '100%',
                }}
              />
            </V_stretch>
          ) : (
            <H_stretch key={ind}>
              <Image
                priority
                src={href}
                alt={href}
                height={1200}
                width={1500}
                data-lightboxjs="lightbox1"
                quality={100}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center 20%',
                  width: '100% ',
                  display: 'block',
                  height: '100%',
                }}
              />
            </H_stretch>
          );
        })}
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

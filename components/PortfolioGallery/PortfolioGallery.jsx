import Image from 'next/image';
import 'lightbox.js-react/dist/index.css';
import { SlideshowLightbox } from 'lightbox.js-react';

import { List, Item } from './PortfolioGallery.styled';

export const PortfolioGallery = ({ id }) => {
  const data = [
    { id: 1, href: `/images/galleries/${id}/1.jpg` },
    { id: 2, href: `/images/galleries/${id}/2.jpg` },
    { id: 3, href: `/images/galleries/${id}/3.jpg` },
    { id: 4, href: `/images/galleries/${id}/4.jpg` },
    { id: 5, href: `/images/galleries/${id}/5.jpg ` },
    { id: 6, href: `/images/galleries/${id}/6.jpg` },
    { id: 7, href: `/images/galleries/${id}/7.jpg` },
    { id: 8, href: `/images/galleries/${id}/8.jpg` },
    { id: 9, href: `/images/galleries/${id}/9.jpg` },
    { id: 10, href: `/images/galleries/${id}/10.jpg` },
    { id: 11, href: `/images/galleries/${id}/11.jpg` },
    { id: 12, href: `/images/galleries/${id}/12.jpg` },
  ];

  return (
    <SlideshowLightbox
      lightboxIdentifier="lightbox1"
      framework="next"
      data={data}
    >
      <List>
        {data.map(({ id, href }) => (
          <Item key={id}>
            <Image
              src={href}
              alt={href}
              height={500}
              width={500}
              data-lightboxjs="lightbox1"
              quality={80}
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

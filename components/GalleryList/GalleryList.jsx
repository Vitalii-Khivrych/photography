import Image from 'next/image';

const data = [
  { id: 1, name: 'i and you', href: '/images/galleryList/1.jpg' },
  { id: 2, name: 'architecture', href: '/images/galleryList/2.jpg' },
  { id: 3, name: 'forest nikolaev', href: '/images/galleryList/3.jpg' },
  { id: 4, name: 'our kids', href: '/images/galleryList/4.jpg' },
];

export const GalleryList = () => {
  return (
    <ul>
      {data.map(({ id, name, href }) => {
        return (
          <li key={id}>
            <Image
              src={href}
              alt={name}
              width={300}
              height={400}
              object-fit="contain"
            />
            <h4>{name}</h4>
          </li>
        );
      })}
    </ul>
  );
};

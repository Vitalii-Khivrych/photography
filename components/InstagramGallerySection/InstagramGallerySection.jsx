import Image from 'next/image';

const data = [
  { path: '/images/instagramGallery/IMG_9054.jpg' },
  { path: '/images/instagramGallery/IMG_9130.jpg' },
  { path: '/images/instagramGallery/IMG_9216.jpg' },
  { path: '/images/instagramGallery/IMG_9254.jpg' },
];

export const InstagramGallerySection = () => {
  return (
    <section>
      <h3>my work in instagram</h3>
      <ul>
        {data.map(({ path }) => (
          <li key={path}>
            <a href="#">
              <Image
                src={path}
                alt="instagram photo"
                width={250}
                height={350}
              />
            </a>
          </li>
        ))}
      </ul>

      <a href="#">@marina</a>
    </section>
  );
};

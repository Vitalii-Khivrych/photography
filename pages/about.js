import Image from 'next/image';

import { InstagramGallerySection } from '@/components';

const About = () => {
  return (
    <>
      <section>
        <Image
          src="/images/marina-about.jpg"
          alt="marina photo"
          width={400}
          height={550}
        />
        <div>
          <h3>ABOUT | Marina Khivrich PHOTOGRAPHY</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            molestias doloribus, voluptatum nisi excepturi consequatur facere
            odio placeat accusantium modi esse natus, cum sunt incidunt error,
            neque quisquam optio a.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            doloribus recusandae tempora quo facere eius quod enim, ducimus
            asperiores assumenda odio voluptate at impedit inventore, in, iusto
            ratione delectus doloremque! Dolores perspiciatis iste harum
            recusandae fugiat, quos facilis a ex dolorum. Veniam, aspernatur?
            Maiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel impedit
            sint sunt omnis veritatis modi explicabo incidunt nulla earum
            quibusdam!
          </p>
        </div>
      </section>
      <InstagramGallerySection />
    </>
  );
};

export default About;

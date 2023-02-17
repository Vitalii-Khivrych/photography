import { Container, PortfolioGallery, Section } from '@/components';

export const getServerSideProps = async context => {
  const { id } = context.params;
  return { props: { id: id } };
};

const Gallery = ({ id }) => {
  return (
    <>
      <Section top="40px" bottom="40px">
        <Container>
          <PortfolioGallery id={id} />
        </Container>
      </Section>
    </>
  );
};

export default Gallery;

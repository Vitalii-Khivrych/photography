import {
  Container,
  PortfolioGallery,
  Section,
  WrapperAbsoluteElement,
  GoBackLink,
} from '@/components';

export const getServerSideProps = async context => {
  const { id } = context.params;

  return { props: { id: id } };
};

const Gallery = ({ id }) => {
  return (
    <>
      <Section top="40px" bottom="40px">
        <Container>
          <WrapperAbsoluteElement>
            <PortfolioGallery id={id} />
            <GoBackLink href={`/portfolio`}>Go back</GoBackLink>
          </WrapperAbsoluteElement>
        </Container>
      </Section>
    </>
  );
};

export default Gallery;

import { Container, PortfolioList, Section } from '@/components';

const Portfolio = () => {
  return (
    <>
      <Section top="70px" bottom="70px">
        <Container>
          <PortfolioList />
        </Container>
      </Section>
    </>
  );
};

export default Portfolio;

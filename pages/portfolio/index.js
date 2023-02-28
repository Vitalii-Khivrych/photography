import { Container, PortfolioList, Section } from '@/components';

const Portfolio = () => {
  return (
    <>
      <Section top="20px" bottom="70px">
        <Container>
          <PortfolioList />
        </Container>
      </Section>
    </>
  );
};

export default Portfolio;

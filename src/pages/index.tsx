import { Box, Container } from "@chakra-ui/react";

// Components
import { Orcamentos } from "../components/Orc/Orcamentos";
const Home = () => {
  return (
    <Container p={0}>
      <Orcamentos></Orcamentos>
    </Container>
  );
};

export default Home;

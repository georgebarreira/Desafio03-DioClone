import { useNavigate } from "react-router";

import bannerImage from "../../assets/banner.png";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

import {
  Container,
  Title,
  TitleHighlight,
  TextContent,
  Column,
} from "./styles";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSingIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            <TitleHighlight>
              Implemente
              <br />{" "}
            </TitleHighlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSingIn}
          />
        </Column>
        <Column>
          <img src={bannerImage} alt="Imagem principal" />
        </Column>
      </Container>
    </>
  );
};

export { Home };

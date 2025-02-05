import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Header } from "../../components/Header";

import { Container, Title, TitleHighlight, Column } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={80}
            nome="George Barreira"
            imagem="https://avatars.githubusercontent.com/u/98276897?v=4"
          />
          <UserInfo
            percentual={27}
            nome="George Barreira"
            imagem="https://avatars.githubusercontent.com/u/98276897?v=4"
          />
          <UserInfo
            percentual={56}
            nome="George Barreira"
            imagem="https://avatars.githubusercontent.com/u/98276897?v=4"
          />
          <UserInfo
            percentual={20}
            nome="George Barreira"
            imagem="https://avatars.githubusercontent.com/u/98276897?v=4"
          />
          <UserInfo
            percentual={87}
            nome="George Barreira"
            imagem="https://avatars.githubusercontent.com/u/98276897?v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };

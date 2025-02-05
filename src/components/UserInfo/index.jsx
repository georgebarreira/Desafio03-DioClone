import React from "react";
import { Container, UserPicture, NameText, Progress } from "./styles";

const UserInfo = ({ nome, imagem, percentual }) => {
  return (
    <Container>
      <UserPicture src={imagem} />
      <NameText>{nome}</NameText>
      <Progress percentual={percentual} />
    </Container>
  );
};

export { UserInfo };

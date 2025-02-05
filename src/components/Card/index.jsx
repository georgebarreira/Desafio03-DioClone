import { FiThumbsUp } from "react-icons/fi";
import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://hermes.dio.me/articles/cover/ad038b4e-805d-4774-8bea-98946276229e.png" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/98276897?v=4" />
          <div>
            <h4>George Barreira</h4>
            <p>Há 8 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso HTML e CSS</h4>
          <p>
            Projeto para curso HTML e CSS no bootcamp dio do global avanade...
            <strong>Saiba Mais</strong>
          </p>{" "}
          {/* voltar no card para ver como foi feito saiba mais diferente */}
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp /> 10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };

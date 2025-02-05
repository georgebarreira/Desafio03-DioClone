import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png";

import { Button } from "../Button";

import {
  BuscarInputContainer,
  Column,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

const Header = ({ autenticado }) => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };
  const handleClickSingIn = () => {
    navigate("/login");
  };
  const handleClickSingUp = () => {
    navigate("/cadastro");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <img
            onClick={() => {
              navigate("/");
            }}
            src={logo}
            alt="Logo da Dio"
          />

          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/2254731?v=4" />
          ) : (
            <>
              <MenuRight>
                <a onClick={handleClickHome}>Home</a>
              </MenuRight>
              <Button title="Entrar" onClick={handleClickSingIn} />
              <Button title="Cadastrar" onClick={handleClickSingUp} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };

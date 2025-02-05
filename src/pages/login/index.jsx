import { useNavigate } from "react-router";

import { MdEmail, MdLock } from "react-icons/md";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Ancor } from "../../components/Ancor";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//import { api } from "../../services/api";

import {
  Container,
  Wrapper,
  Column,
  Row,
  Title,
  TitleLogin,
  SubTitleLogin,
  EsqueciText,
  CriarText,
} from "./styles";

import { useForm } from "react-hook-form";

const schema = yup
  .object({
    email: yup
      .string()
      .email("email nao e valido")
      .required("Campo obrigatorio"),
    password: yup
      .string()
      .min(3, "No minimo 3 caracteres")
      .required("Campo obrigatorio"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // função abaixo para verificar se o email já existe no banco de dados e efetuar login
  /*const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("Usuario ou senha invalidos");
      }
    } catch {
      alert("Houve um erro, tente novamente");
    }
  };*/
  const onSubmit = () => {
    navigate("/feed");
  };

  return (
    <>
      <Header autenticado={false} />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail color="#8647AD" />}
              />
              <Input
                name="password"
                errorMessage={errors.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock color="#8647AD" />}
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>
                <Ancor
                  onClick={() => navigate("/cadastro")}
                  text="Criar Conta"
                />
              </CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };

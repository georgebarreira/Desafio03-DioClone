import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Ancor } from "../../components/Ancor";
import { Container, Title, Column, TitleDir, SubTitleDir } from "./styles";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useNavigate } from "react-router";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Nome não é valido")
      .required("Campo obrigatorio"),
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

const Cadastro = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  // função abaixo para verificar se o email já existe no banco de dados
  /* const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}`);

      if (data.length === 1) {
        alert("Usuario já cadastrado! Tente esqueci minha senha.");
      } else {
        navigate("/feed");
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
          <TitleDir>Comece agora grátis</TitleDir>
          <SubTitleDir>Crie sua conta e make the change._</SubTitleDir>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="name"
              errorMessage={errors.name?.message}
              control={control}
              placeholder="Nome completo"
              leftIcon={<MdPerson color="#8647AD" />}
            />
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
              placeholder="Password"
              type="password"
              leftIcon={<MdLock color="#8647AD" />}
            />
            <Button
              title="Criar minha conta"
              variant="secondary"
              type="submit"
            />
          </form>
          <SubTitleDir>
            Ao clicar em criar minha conta grátis, declaro que aceito as
            Políticas de Privacidade e os Termos de Uso da DIO.
          </SubTitleDir>
          <SubTitleDir>
            Já tenho conta.{" "}
            <Ancor
              onClick={() => {
                navigate("/login");
              }}
              text="Fazer login"
            />
          </SubTitleDir>
        </Column>
      </Container>
    </>
  );
};

export { Cadastro };

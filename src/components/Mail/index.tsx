import logo from "../../assets/logo.png";
import { Container, Logo, Title, Content, Box, Footer, Header, Highlight, Link } from "./styles";

interface MailProps {
  nome_profissional: string;
  teste: string;
  software: string;
  equipamento: string;
  entrevistador: string;
  data_teste: string;
  horario_teste: string;
  link: string;
}

export function Mail({ nome_profissional, teste, software, equipamento, entrevistador, data_teste, horario_teste, link }: MailProps) {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo da Tecnocar Engenharia" />
        <Title>Instruções para o Teste Técnico</Title>
      </Header>

      <Content>
        <p>Prezado {nome_profissional}, esperamos que esteja bem!</p>
        <p>Como combinado, seguem as instruções detalhadas para a realização do seu teste técnico. Certifique-se de seguir todos os passos para garantir uma boa experiência.</p>

        <Box>
          <p>
            <Highlight>Teste:</Highlight> {teste}
          </p>
          <p>
            <Highlight>Software:</Highlight> {software}
          </p>
          <p>
            <Highlight>Equipamento:</Highlight> {equipamento}
          </p>
          <p>
            <Highlight>Entrevistador:</Highlight> {entrevistador}
          </p>
          <p>
            <Highlight>Data:</Highlight> {data_teste}
          </p>
          <p>
            <Highlight>Horário:</Highlight> {horario_teste}
          </p>
          <p>
            <Highlight>Teams:</Highlight> <Link href={link}>Link de acesso a reunião</Link>
          </p>
        </Box>
      </Content>

      <Footer>
        <p>Atenciosamente,</p>
        <p>
          <Highlight>Equipe Tecnocar Engenharia</Highlight>
        </p>
        <p>Conecte-se conosco:</p>
        <p>
          <Link href="https://www.linkedin.com/company/tecnocarengenharia">LinkedIn</Link> |
          <Link href="https://www.instagram.com/tecnocar_eng/">Instagram</Link> |
          <Link href="https://www.tecnocarengenharia.com.br/">Nosso site</Link>
        </p>
      </Footer>
    </Container>
  );
}

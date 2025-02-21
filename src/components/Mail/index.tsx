import logo from "../../assets/logo.png";
import { Container, Logo, Title, Content, Footer, Header, Highlight, Link, InfoTable, TableHeader, TableRow, TableCell } from "./styles";

interface MailProps {
  nome_profissional: string;
  teste: string;
  software: string;
  entrevistador: string;
  data_teste: string;
  horario_teste: string;
  link: string;
}

export function Mail({ nome_profissional, teste, software, entrevistador, data_teste, horario_teste, link }: MailProps) {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo da Tecnocar Engenharia" />
        <Title>Instruções para o Teste Técnico</Title>
      </Header>

      <Content>
        <p>Prezado {nome_profissional},</p>
        <p>Segue abaixo as instruções para a realização do seu teste técnico. Certifique-se de seguir todos os passos para uma melhor experiência.</p>

        <InfoTable>
          <thead>
            <tr>
              <TableHeader>Informações</TableHeader>
              <TableHeader>Detalhes</TableHeader>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>Teste:</TableCell>
              <TableCell>{teste}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Software:</TableCell>
              <TableCell>{software}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Entrevistador:</TableCell>
              <TableCell>{entrevistador}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Data:</TableCell>
              <TableCell>{data_teste}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Horário:</TableCell>
              <TableCell>{horario_teste}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Teams:</TableCell>
              <TableCell>
                <Link href={link} target="_blank" style={{ color: "#21A1FD" }}>
                  Acesse a reunião
                </Link>
              </TableCell>
            </TableRow>
          </tbody>
        </InfoTable>
      </Content>

      <Footer>
        <p>Atenciosamente,</p>
        <p><Highlight>Equipe Tecnocar Engenharia</Highlight></p>
      </Footer>
    </Container>
  );
}

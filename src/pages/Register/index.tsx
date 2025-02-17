import { useState } from "react";
import { Header } from "../../components/Header";
import { InputText } from "../../components/InputText";
import { RegisterContainer, FormContainer, FieldGroup, Button, Title } from "./styles";

export function Register() {
  const [nomeProjetista, setNomeProjetista] = useState("");
  const [emailProjetista, setEmailProjetista] = useState("");
  const [teste, setTeste] = useState("");
  const [entrevistador, setEntrevistador] = useState("");
  const [horarioTeste, setHorarioTeste] = useState("");
  const [dataTeste, setDataTeste] = useState("");
  const [equipamento, setEquipamento] = useState("");
  const [software, setSoftware] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = () => {
    console.log({
      nomeProjetista,
      emailProjetista,
      teste,
      entrevistador,
      horarioTeste,
      dataTeste,
      equipamento,
      software,
      link
    });
  };

  return (
    <>
      <Header />

      <RegisterContainer>
        <FormContainer>
          <Title>Formulario de Envio</Title>
          <FieldGroup>
            <InputText label="Nome do Projetista" value={nomeProjetista} onChange={(e) => setNomeProjetista(e.target.value)} />
            <InputText label="E-mail do Projetista" value={emailProjetista} onChange={(e) => setEmailProjetista(e.target.value)} />
          </FieldGroup>

          <FieldGroup>
            <InputText label="Teste" value={teste} onChange={(e) => setTeste(e.target.value)} options={["", "Plasticas", "Metalicas"]} />
            <InputText label="Entrevistador" value={entrevistador} onChange={(e) => setEntrevistador(e.target.value)} options={["", "Peter", "Samuel"]} />
          </FieldGroup>

          <FieldGroup>
            <InputText label="Horário do Teste" value={horarioTeste} onChange={(e) => setHorarioTeste(e.target.value)} options={["", "08:30 - 10:00", "10:30 - 12:00", "14:00 - 15:30", "16:00 - 17:30", "17:45 - 19:15"]} />
            <InputText label="Data do Teste" type="date" value={dataTeste} onChange={(e) => setDataTeste(e.target.value)} />
          </FieldGroup>

          <FieldGroup>
            <InputText label="Equipamento" value={equipamento} onChange={(e) => setEquipamento(e.target.value)} />
            <InputText label="Software" value={software} onChange={(e) => setSoftware(e.target.value)} options={["", "NX", "CATIA"]} />
          </FieldGroup>

          <InputText label="Link" value={link} onChange={(e) => setLink(e.target.value)} />
          <Button onClick={handleSubmit} type="button">Enviar</Button>
        </FormContainer>
      </RegisterContainer>
    </>
  );
}

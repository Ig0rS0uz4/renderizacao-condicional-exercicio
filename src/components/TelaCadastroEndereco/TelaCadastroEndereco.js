import { Form, FormContainer, Input, StyledLabel, SendButton } from "./styled";

function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>Cadastro Endereço</h1>
      <Form>
        <StyledLabel htmlFor="titulo">
          Endereco:
          <Input id="endereco" />
        </StyledLabel>
        <StyledLabel htmlFor="titulo">
          Numero:
          <Input id="numero" />
        </StyledLabel>
        <StyledLabel htmlFor="titulo">
          Telefone:
          <Input id="dtelefone" />
        </StyledLabel>
        <StyledLabel htmlFor="titulo">
          Complemento:
          <Input id="complemento" />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>Finalizar</SendButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;
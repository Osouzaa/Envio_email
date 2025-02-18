import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px; 
  align-items: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 20px;
`;
export const Title = styled.h1`
  color: #C6CCD0;
  font-family: 'Sora';
  font-size: 1.5rem;
`

export const FieldGroup = styled.div`
  display: flex;
  gap: 16px;width:100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #FF4D00;

  color: #DFE1E6;
  font-size: 20px;
  font-weight:500;
  border: none;
  border-radius: 6px;
`

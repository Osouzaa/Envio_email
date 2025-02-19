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
  cursor: pointer;

  color: #DFE1E6;
  font-size: 20px;
  font-weight:500;
  border: none;
  border-radius: 6px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  
  width: 400px;
  padding: 24px;
  background: #1E1E1E;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CardTitle = styled.h2`
  color: #C6CCD0;
  font-family: 'Sora';
  font-size: 1.5rem;
`;

export const CardContent = styled.p`
  color: #DFE1E6;
  font-size: 1rem;
  text-align: center;
`;

export const CardButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #FF4D00;
  border: none;
  border-radius: 6px;
  color: #DFE1E6;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #E64000;
  }
`;

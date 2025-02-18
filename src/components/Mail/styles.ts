import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 30px auto;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
`;

export const Header = styled.header`
  background-color: #222225;
  height: 84px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: #fff;
  border-radius: 12px 12px 0 0;
`;

export const Logo = styled.img`
  width: 250px;
  height: auto;
  margin-right: 20px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 20px;
`;

export const Content = styled.main`
  padding: 25px;
  color: #333;

  >  p {
    margin: 1rem 0 ;
  }
`;

export const Highlight = styled.span`
  color: #ff5200;
  font-weight: 700;

 
`;

export const Box = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-left: 6px solid #ff5200;
  border-radius: 8px;
  margin: 2rem 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Footer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #222225;
  border-radius: 0 0 12px 12px;
  color: #f6f6f6;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Link = styled.a`
  color: #21a1fd;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
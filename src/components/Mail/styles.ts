import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
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
  width: 180px;
  margin-left: 20px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
  line-height: 1.2;
  color: #fff;
`;

export const Content = styled.main`
  padding: 25px;
  color: #333333;
  text-align: left;
`;

export const Highlight = styled.span`
  color: #ff5200;
  font-weight: 700;
`;

export const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

export const TableHeader = styled.th`
  padding: 12px 20px;
  background-color: #222225;
  color: #fff;
  text-align: left;
  font-weight: 600;
  border: 1px solid #e5e5e5;
`;

export const TableRow = styled.tr`

`;

export const TableCell = styled.td`
  padding: 12px 20px;
  border: 1px solid #e5e5e5;
  text-align: left;
  vertical-align: middle;

  &:first-child {
    font-weight: 600;
    background: #f1f1f1;
  }

  &:last-child {
    color: #555;
  }
`;

export const Footer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #222225;
  border-radius: 0 0 12px 12px;
  color: #f6f6f6;
  font-size: 14px;
`;

export const Button = styled.a`
  display: inline-block;
  padding: 12px 25px;
  color: #ffffff;
  background-color: #21a1fd;
  text-decoration: none;
  border-radius: 8px;
  margin-top: 20px;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 16px;

  &:hover {
    background-color: #89dcfc;
    transform: translateY(-2px);
  }
`;

export const Link = styled.a`
  color: #21a1fd;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  padding-left: 20px;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
`;

export const Heading = styled.h2`
  color: #000;
  font-size: 20px;
  margin-bottom: 15px;
`;


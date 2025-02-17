import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 84px;
  background-color:#11171C;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`

export const LogoImage = styled.img`
  max-width: 300px;

`

export const ListContainer = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    list-style:none;

    li {
      color: #FFFF;
    }
  }
`
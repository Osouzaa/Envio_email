import logo from "../../assets/logo.png"
import { HeaderContainer, ListContainer, LogoImage } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <LogoImage src={logo} />

      <ListContainer>
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </ListContainer>
    </HeaderContainer>
  )
}
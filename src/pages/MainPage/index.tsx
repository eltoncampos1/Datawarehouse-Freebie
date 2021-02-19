import logoImg from "../../assets/Logo.png";
import {
  Container,
  Header,
  Logo,
  NavWrapper,
  NavTop,
  List,
  ListItem,
  HeaderButton,
} from "./styles";

const MainPage = () => {
  return (
    <Container>
      <Header>
        <NavWrapper>
          <Logo src={logoImg} alt="logo" />
          <NavTop>
            <List>
              <ListItem>About</ListItem>
              <ListItem>Help</ListItem>
              <ListItem>Features</ListItem>
              <ListItem>Signup</ListItem>
            </List>
          </NavTop>
        </NavWrapper>

        <HeaderButton>Request Demo</HeaderButton>
      </Header>
    </Container>
  );
};

export default MainPage;

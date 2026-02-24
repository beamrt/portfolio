import { Topnavbar, Ulnav, Titlenav, Logo } from './styled';
import logo from '../../image/logo.png';

export default function Navbar() {
  return (
    <Topnavbar>
      <Logo src={logo} />
      <Ulnav>
        <Titlenav>Home</Titlenav>
        <Titlenav>Sobre Mim</Titlenav>
        <Titlenav>Soft Skills</Titlenav>
        <Titlenav>Projetos</Titlenav>
        <Titlenav>Contato</Titlenav>
      </Ulnav>
    </Topnavbar>
  );
}

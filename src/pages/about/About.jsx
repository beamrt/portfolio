import { Aboutdiv, AboutImage, Me, AboutContent, AboutText } from './styled';
import aboutme from '../../image/aboutme.png';

export default function About() {
  return (
    <Aboutdiv>
      <AboutContent>
        <AboutImage src={aboutme} />
        <Me>Sobre Mim</Me>
        <AboutText>Sou estudante de desenvolvimento</AboutText>
      </AboutContent>
    </Aboutdiv>
  );
}

import { Aboutdiv, AboutImage, Me, AboutContent } from './styled';
import aboutme from '../../image/aboutme.png';

export default function About() {
  return (
    <Aboutdiv>
      <AboutContent>
        <AboutImage src={aboutme} />
        <Me>Sobre Mim</Me>
      </AboutContent>
    </Aboutdiv>
  );
}

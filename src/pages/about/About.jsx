import aboutme from '../../image/aboutme.png';

import * as about from './styled';

export default function About() {
  return (
    <about.Aboutdiv>
      <about.AboutContent>
        <about.AboutImage src={aboutme} />
        <about.Me>Sobre Mim</about.Me>
        <about.BoxAbout>
          <about.AboutText>
            Sou desenvolvedora front-end, apaixonada por criar interfaces
            intuitivas e visualmente agradáveis.
            <about.SecondText>
              Tenho foco em transformar ideias em experiências digitais
              funcionais, unindo código e design de forma equilibrada.
              Atualmente, estou aprofundando meus conhecimentos em UX/UI,
              JavaScript e React, buscando evoluir continuamente a cada projeto.
            </about.SecondText>
          </about.AboutText>
        </about.BoxAbout>
      </about.AboutContent>
    </about.Aboutdiv>
  );
}

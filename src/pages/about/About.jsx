import aboutme from '../../image/aboutme.png';

import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa6';
import { IoLogoFigma } from 'react-icons/io5';
import { IoLogoHtml5 } from 'react-icons/io';
import { FaCss3Alt } from 'react-icons/fa';
import { FaGithubAlt } from 'react-icons/fa';

import * as about from './styled';

export default function About() {
  return (
    <about.Aboutdiv>
      <about.AboutRow>
        <about.Left>
          <about.AboutImage src={aboutme} />
        </about.Left>

        <about.Right>
          <about.Me>Sobre Mim</about.Me>
          <about.BoxAbout>
            <div>
              <about.AboutText>
                Sou desenvolvedora front-end, apaixonada por criar interfaces
                intuitivas e visualmente agradáveis.
              </about.AboutText>

              <about.SecondText>
                Tenho foco em transformar ideias em experiências digitais
                funcionais, unindo código e design de forma equilibrada.
                Atualmente, estou aprofundando meus conhecimentos em UX/UI,
                JavaScript e React, buscando evoluir continuamente a cada
                projeto.
              </about.SecondText>
            </div>
          </about.BoxAbout>
          <about.TitleSkills>Skills</about.TitleSkills>
          <about.SkillsSection>
            <about.CardSkills>
              <IoLogoJavascript className="js" />
              <IoLogoFigma className="figma" />
              <FaReact className="react" />
              <FaCss3Alt className="css" />
              <IoLogoHtml5 className="html" />
              <FaGithubAlt className="github" />
            </about.CardSkills>
          </about.SkillsSection>
        </about.Right>
      </about.AboutRow>{' '}
    </about.Aboutdiv>
  );
}

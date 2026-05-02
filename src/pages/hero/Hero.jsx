import React from 'react';

import { FaGithub } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

import * as hero from './styled';
import Navbar from '../../components/navbar/Navbar';
import profile from '../../image/profile.png';

export default function Hero() {
  return (
    <>
      <Navbar />
      <hero.Herodiv>
        <hero.WrapperCloser>
          <hero.ProfileWrapper>
            <hero.ProfileImage src={profile} />
          </hero.ProfileWrapper>
          <hero.Seconddiv>
            <hero.Uldescription>
              <hero.Lidescription>Olá, meu nome é </hero.Lidescription>
              <hero.NameWrapper>
                <hero.Name>Beatriz Martins ✦</hero.Name>
              </hero.NameWrapper>
              <hero.Jobtitle>Front-end com foco em UI/UX</hero.Jobtitle>
              <hero.Lidescription>
                Interfaces funcionais, organizadas e agradáveis
              </hero.Lidescription>
            </hero.Uldescription>
          </hero.Seconddiv>
        </hero.WrapperCloser>
        <hero.WrapperIcon>
          <hero.LinkComponent
            href="https://github.com/beamrt"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="github" />
          </hero.LinkComponent>
          <hero.LinkComponent
            href="https://www.linkedin.com/in/beamrt/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </hero.LinkComponent>
          <hero.LinkComponent
            href="https://www.instagram.com/_beamrt"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareInstagram className="insta" />
          </hero.LinkComponent>
        </hero.WrapperIcon>
        <hero.WrapperCloser>
          <hero.ContactMe>Contato</hero.ContactMe>
          <hero.Projects>Projetos</hero.Projects>
        </hero.WrapperCloser>
      </hero.Herodiv>
    </>
  );
}

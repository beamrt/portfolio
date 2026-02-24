import {
  Herodiv,
  ProfileImage,
  ProfileWrapper,
  Seconddiv,
  Uldescription,
  Lidescription,
  Name,
  NameWrapper,
  Jobtitle,
} from './styled';
import Navbar from '../../components/navbar/Navbar';
import profile from '../../image/profile.png';

export default function Hero() {
  return (
    <>
      <Navbar />
      <Herodiv>
        <ProfileWrapper>
          <ProfileImage src={profile} />
        </ProfileWrapper>
        <Seconddiv>
          <Uldescription>
            <Lidescription>Olá, meu nome é </Lidescription>
            <NameWrapper>
              <Name>Beatriz Martins ✦</Name>
            </NameWrapper>
            <Jobtitle>Front-end com foco em UI/UX</Jobtitle>
            <Lidescription>
              Interfaces funcionais, organizadas e agradáveis
            </Lidescription>
          </Uldescription>
        </Seconddiv>
      </Herodiv>
    </>
  );
}

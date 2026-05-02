import styled from 'styled-components';

export const Aboutdiv = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  max-width: 1600px;
  min-height: 80vh;
  padding: 60px 40px;
  border-radius: 24px;
  background: #efe2e7;
  box-shadow: 0 8px 10px rgba(176, 122, 135, 0.15);
`;

export const AboutImage = styled.img`
  width: 490px;
  height: 490px;
  object-fit: contain;
  margin-top: 80px;
  border-radius: 20px;
  border: 1px solid rgba(176, 122, 158, 0.2);
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;

export const AboutRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  width: 100%;
  max-width: 1100px;
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -90px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
  margin-right: -90px;
`;

export const Me = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 40px;
  color: #b07a87;
  margin-top: 30px;
`;

export const AboutText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: #b07a87;
  font-size: 18px;
  text-align: left;
  line-height: 1.7;
`;

export const SecondText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  color: #b07a87;
  font-size: 18px;
  text-align: left;
  opacity: 0.8;
  line-height: 1.7;
`;

export const BoxAbout = styled.div`
  max-width: 950px;
  width: 100%;
  display: flex;
  flex: 1, 0, 60%;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 28px;
  gap: 20px;
  border-radius: 20px;
  background-color: #f6eef1;
  box-shadow: 2px 8px 12px rgba(176, 122, 135, 0.12);
  border: 2px solid rgba(176, 122, 135, 0.2);
`;

export const CardSkills = styled.div`
  background: #f6eef1;
  padding: 14px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(176, 122, 135, 0.15);
  border: 2px solid rgba(176, 122, 135, 0.2);
`;

export const TitleSkills = styled.h3`
  margin-top: 60px;
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 40px;
  color: #b07a87;
`;

export const SkillsSection = styled.div`
  display: flex;
  gap: 20px;

  .js,
  .react,
  .figma,
  .html,
  .css,
  .github {
    font-size: 50px;
    color: #5a3d44;
    opacity: 0.8;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.15);
    }
  }

  .js:hover {
    color: #e4d147;
  }
  .react:hover {
    color: #61dafb;
  }
  .html:hover {
    color: #e34f26;
  }
  .css:hover {
    color: #1572b6;
  }
  .figma:hover {
    color: #a259ff;
  }
  .github:hover {
    color: #171515;
  }
`;

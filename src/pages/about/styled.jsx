import styled from 'styled-components';

export const Aboutdiv = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 80px;
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  min-height: 80vh;
  padding: 60px 40px;
  border-radius: 24px;
  background: #f1e6ea;
  //background: #efe2e7;
  box-shadow: 0 8px 10px rgba(176, 122, 135, 0.15);
`;

export const AboutImage = styled.img`
  width: 468px;
  height: 480px;
  object-fit: cover;
  margin-top: -100px;
`;

export const AboutContent = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: -90px;
`;

export const Me = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 40px;
  color: #b07a87;
  margin-top: -102px;
`;

export const AboutText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  color: #b07a87;
  font-size: 20px;
`;

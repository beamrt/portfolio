import styled from 'styled-components';

export const Herodiv = styled.article`
  position: relative;
  z-index: 1000;
  margin: 0 auto;
  margin-top: 35px;
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
  box-shadow: 0 8px 10px rgba(176, 122, 135, 0.3);
`;

export const Seconddiv = styled.div`
  display: flex;
  flex: 1 0 60%;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
  height: 200px;
  gap: 20px;
  padding: 24px 28px;
  border-radius: 24px;
  border: 2px solid rgba(176, 122, 135, 0);
  background: #f6eef1;
  box-shadow: 2px 8px 12px rgba(176, 122, 135, 0.12);
`;

export const Uldescription = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Lidescription = styled.li`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  line-height: 1.5;
  font-style: normal;
  color: rgb(176, 122, 135);
`;

export const NameWrapper = styled.div`
  display: block;
`;

export const Name = styled.h1`
  font-family: 'DM Serif Display', serif;
  font-weight: 400;
  font-size: 44px;

  background-image: linear-gradient(90deg, #8f5f6b, #d9a1ad);
  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
  -webkit-text-fill-color: transparent;
`;

export const Jobtitle = styled.p`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  font-style: normal;
  color: #b07a87;
`;

export const ProfileWrapper = styled.div`
  width: clamp(220px, 30vw, 350px);
  height: clamp(220px, 30vw, 350px);
  border-radius: 50%;
  padding: 6px;
  flex-shrink: 0;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(176, 122, 135, 0.8),
    rgba(250, 244, 250, 0.9)
  );
`;

export const ProfileImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

export const Projects = styled.button`
  width: 180px;
  padding: 10px;
  background: linear-gradient(90deg, #ad828ccc, #8b5e69);
  border: 1px solid #8f616c;
  color: #fff5ee;
  border-radius: 10px;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 10px 10px 20px rgba(176, 122, 135, 0.35);
  }
`;

export const ContactMe = styled.button`
  width: 180px;
  padding: 10px;
  background: linear-gradient(90deg, #8b5e69, #ad828ccc);
  border: 1px solid #8f616c;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #fff5ee;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 10px 10px 20px rgba(176, 122, 135, 0.35);
  }
`;

export const WrapperCloser = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: 60px;
`;

export const WrapperIcon = styled.div`
  display: flex;
  /* width: 100%; */
  align-items: center;
  justify-content: center;
  gap: 20px;

  .github {
    font-size: 40px;
    color: #8f616c;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .linkedin {
    font-size: 40px;
    color: #8f616c;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .insta {
    font-size: 41px;
    color: #8f616c;
    margin-bottom: 1px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .github:hover,
  .linkedin:hover,
  .insta:hover {
    transform: scale(1.1) rotate(5deg);
  }
`;

export const LinkComponent = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;

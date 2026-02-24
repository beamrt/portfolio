import styled from 'styled-components';

export const Herodiv = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  min-height: 80vh;
  padding: 60px 40px;
  border-radius: 24px;
  //background: #f1e6ea;
  background: #efe2e7;
  box-shadow: 0 8px 10px rgba(176, 122, 135, 0.15);
`;

export const Seconddiv = styled.div`
  display: flex;
  flex: 1 0 60%;
  max-width: none;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
  gap: 20px;
  min-height: 20vh;
  padding: 24px 28px;
  border-radius: 24px;
  border: 2px solid rgba(176, 122, 135, 0.15);
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
  color: #b07a87;
`;

export const Jobtitle = styled.li`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  font-style: normal;
  color: #b07a87;
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

// export const Home = styled.h1`
//   position: absolute;
//   top: 160px;
//   right: 80px;
//   margin: 0;
//   font-family: 'DM Serif Display', serif;
//   font-weight: 400;
//   font-size: 50px;
//   color: #b07a87;
// `;

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

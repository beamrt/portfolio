import styled from 'styled-components';

export const Topnavbar = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  width: 1600px;
  height: 90px;
  padding: 10px;
  align-items: center;
  border-radius: 20px;
  border: 2px solid #bfa19a;
  background: #edeaed;
  box-shadow: 2px 1px 8px #bfa19a;
  justify-content: space-between;
`;

export const Logo = styled.img`
  max-height: 70px;
  width: auto;
  display: block;
  align-self: center;
`;

export const Ulnav = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const Titlenav = styled.li`
  margin-right: 20px;
  font-size: 20px;
  color: #b07a87;
  font-family: 'DM Serif Display', serif;
  font-weight: 500;
  font-style: normal;
`;

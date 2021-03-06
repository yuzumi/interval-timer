import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #010101;
  display: flex;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100vh;
`;

export const Sidebar = styled.aside`
  display: flex;
  justify-content: center;
  width: 30vw;
  height: 100vh;
`;

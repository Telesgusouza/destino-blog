import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 600;
  color: white;

  @media (max-width: 614px) {
    display: none;
  }
`;

export const Navigate = styled.div`
  position: relative;
`;

export const NavigateTitle = styled.p`
  cursor: pointer;
  padding: 5px 13px;
  &:hover {
    text-decoration: underline;
  }
`;

// parteb aonde o usuario clica
export const viewOptions = styled.div`
  position: absolute;
  top: 35px;
  left: -10px;
  margin: 0 10px;
  background-color: white;
  color: black;
  font-weight: 100;
  padding: 10px 14px;
  border-radius: 5px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
`;

// uma das opção
export const viewOption = styled.p`
  margin-bottom: 5px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    font-weight: 600;
  }
`;

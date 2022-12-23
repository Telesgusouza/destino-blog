import styled from "styled-components";

export const ContainerButtonsLogin = styled.div`
  position: absolute;
  right: 0;

  width: 200px;
  display: flex;
  justify-content: space-between;

  button {
    float: right;
    padding: 8px;
    width: 95px;
    font-size: 12px;
    font-weight: 600;
    color: white;

    border-radius: 40px;
    border: none;
    background: none;

    transition: all 0.15s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: rgba(250, 250, 250, 0.25);
    }
  }

  @media (max-width: 614px) {
    display: none;
  }
`;

export const ContainerNav = styled.menu`
display: none;
  position: absolute;
  right: 0;

  img {
    width: 22px;
    cursor: pointer;
  }

  @media (max-width: 614px) {
    display: block;
  }
`;

export const MenuNavigate = styled.div`
  position: absolute;
  right: 15px;
  top: 40px;
  background-color: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 400px) {
   width: 80vw;
  }
`;

export const ListOptions = styled.div`
  width: 180px;
  background-color: #efeff1;
  border-radius: 5px;
  padding: 10px;
`;

export const MenuOptions = styled.div`
  margin-bottom: 10px;
`;
export const Option = styled.div`
  /* display: none; */
  margin: 5px;
  font-size: 14px;
  color: hsl(208, 49%, 24%);
  font-weight: 600;
`;
export const titleOption = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 14px;
  color: hsl(208, 49%, 24%);
  display: flex;
  justify-content: center;
  margin-bottom: 8px;

  cursor: pointer;

  img {
    margin-left: 5px;
    width: 10px;
    object-fit: contain;
  }
`;

export const OptionsLogin = styled.div`
  border-top: 1px solid #efeff1; /// marcado
  padding-top: 100px;

  padding: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  button {
    margin-top: 10px;
    padding: 7px 20px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 50px;
    background-color: white;
    border: none;

    &:hover {
        background-color: aliceblue;
    }
  }
`;

export const ButtonSignUp = styled.button`
    background-image: linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%));
    color: white;
`;

import styled from "styled-components";
import bg from "../assets/images/bg-pattern-intro-desktop.svg"; //bg-pattern-intro-desktop.svg"; // bg-pattern-intro-desktop.svg

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

export const Center = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Main = styled.div`
  height: 340px;
  width: 100%;
  position: relative;
  /* overflow: hidden; */
  padding: 20px;

  border-end-start-radius: 60px;

  background-image: linear-gradient(
    to right,
    hsl(13, 100%, 72%),
    hsl(353, 100%, 62%)
  );

  @media (max-width: 380px) {
    height: 400px;
    background-color: aliceblue;
  }
`;

export const ImgBg = styled.img`
  width: 100%;
  position: absolute;
  bottom: -200%;
  left: 150px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  img {
    margin-right: 15px;
  }

  select {
    appearance: none;
    background: none;
    border: none;
    padding: 5px 10px;
    outline: 0;
    cursor: pointer;
    color: white;
    font-weight: 600;
    font-size: 12px;

    &:hover {
      border-bottom: 2px solid white;
    }
  }

  option {
    color: black;
    font-weight: 600;
    font-size: 12px;
  }

  @media (max-width: 610px) {
    select {
      display: none;
    }
  }

  /* tenho q tirar isso daqui */
  
`;


export const MainContent = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  width: fit-content;
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  color: white;

  h1 {
    margin-bottom: 10px;
    font-size: 40px;
    font-weight: 100;
  }
  p {
    margin-top: 15px;
    margin-bottom: 30px;
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const ContainerButtonsContent = styled.div`
  width: 270px;
  margin: 0 auto;
  margin-top: 15px;

  display: flex;
  justify-content: space-between;

  button {
    width: 130px;
    padding: 6px;
    border-radius: 20px;
    border: 1px solid white;
    background: none;
    color: white;
    font-weight: 600;

    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: white;
      color: hsl(353, 100%, 62%);
    }
  }
`;

export const ContainerContentFuture = styled.div`
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0 0 20px;
  /* padding: 60px 0;
  padding-bottom: 0px;
  padding-left: 20px; */

  color: hsl(237, 17%, 21%);

  h2 {
    text-align: center;
    margin-bottom: 45px;
    font-weight: 100;
  }

  @media (max-width: 670px) {
    padding-bottom: 100px;
  }
`;
export const ContentFuture = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  @media (max-width: 505px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const IntroductionToContent = styled.div`
  // oopa da da uma olhada nisso
  width: 45%;

  h3 {
    margin-bottom: 10px;
    font-weight: 100;
  }
  p {
    margin-bottom: 40px;
    font-size: 15px;
  }

  @media (max-width: 505px) {
    width: 100%;
  }
`;

export const IntroductionToContentImg = styled.div`
  width: 45%;
  position: relative;
  top: -100px;
  overflow: hidden;
  img {
    /* width: 100%; */
    width: 450px;
  }

  @media (max-width: 505px) {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    top: -30px ;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const ContainerInfoInfrastruture = styled.div`
  background-image: linear-gradient(
    to right,
    hsl(237, 17%, 21%),
    hsl(237, 23%, 32%)
  );
  position: relative;
  height: 300px;
  border-top-right-radius: 60px;
  border-end-start-radius: 60px;

  @media (max-width: 785px) {
    height: 250px;
  }

  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    background-color: black;
    height: fit-content;
    margin-top: 20px;
    /* min-height: 300px; */
  }
`;
export const ImgPhone = styled.div`
  height: 100%;
  padding-bottom: 50px;

  img {
    position: absolute;
    height: 150%;
    z-index: 20;
    bottom: -100px;
  }

  @media (max-width: 670px) {
    
    img {
      left: 30%;
      bottom: 70%;
      margin-top: 50px;

      height: 250px;
    }
  }

  @media (max-width: 420px) {
    img {
      height: 190px;
      left: 20%;
      right: 20%;
    }
  }
`;

export const bgPhone = styled.div`
  height: 300px;
  overflow: hidden;

  img {
    /* position: absolute; */
    position: relative;
    bottom: 100%;
    left: -120px;
    height: 200%;
  }

  @media (max-width: 670px) {

    img {
      height: 500px;
      left: 0;
    }
  }

  @media (max-width: 440px) {
   img{
    left: -150px;
   } 
  }

`;

export const InfoInfrastrutureContent = styled.div`
  position: absolute;
  top: 30%;
  right: 50px;
  width: 50%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: white;

  h3 {
    font-size: 25px;
    font-weight: 500;
    margin-bottom: 15px;
  }

  p {
    font-size: 15px;
    line-height: 18px;
  }

  @media (max-width: 930px) {
    width: 40%;
  }

  @media (max-width: 760px) {
    top: 20%;

    h3 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 670px) {
    top: 30%;
    /* color: black; */
    /* background-color: black; */
    margin: 0 auto;
    width: 80%;
    margin: 0 auto;

    /* position: initial; */
  }
`;

export const ContainerInfoNotebook = styled.div`
  padding: 120px 0;
  position: relative;
  display: flex;
  align-items: center;

  img {
    position: relative;
    left: -50px;
    height: 500px;
  }

  @media (max-width: 845px) {
    
    img {
      height: 300px;
    }
  }

  @media (max-width: 505px) {
    flex-direction: column;
    justify-content: center;

     img {
      /* background-color: aliceblue; */
      /* margin: 0 auto; */
      margin-left: 100px;
      
    } 
  }

  @media (max-width: 390px) {
    img {
      height: 200px;
    }
  }
`;

export const InfoNotebookContent = styled.div`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding: 10px;
  h3 {
    margin-bottom: 10px;
    color: hsl(207, 13%, 34%);
  }
  p {
    margin-bottom: 30px;
    color: hsl(207, 13%, 34%);
  }
  @media (max-width: 505px) {
    padding: 30px;
  }
`;

export const FooterContainer = styled.footer`
  background-color: hsl(240, 10%, 16%);
  padding: 30px;
  color: white;
  border-top-right-radius: 60px;
`;

export const Footer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  img {
    object-fit: contain;
    width: 150px;
  }

  span {
    font-size: 14px;
    margin-bottom: 3px;
    color: hsl(240, 2%, 79%);
  }
  
  h5 {
    font-size: 16px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 505px) {
    flex-direction: column;
    align-items: center;

    div {
      width: 70px;
    }
    
    img{
      width: 120px;
      margin: 20px;
    }

    h5 {
      margin: 15px 0 10px 0;
    }
  }
`;

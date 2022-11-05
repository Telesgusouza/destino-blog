import { useEffect, useState } from "react";
import * as Styled from "./style";
import open from "../../assets/images/icon-hamburger.svg";
import closed from "../../assets/images/icon-close.svg";
import arrowDark from "../../assets/images/icon-arrow-dark.svg";

export default function Button() {
  const [width, setWidth] = useState(null);
  const [imgMenu, setImgMenu] = useState(open);
  const [show, setShow] = useState(false);
  const [option, setOption] = useState("null");
  console.log(window.screen.width);

  useEffect(() => {
    setWidth(window.screen.width);
  }, [width]);

  console.log(width);

  function showMenu() {
    if (imgMenu === open) {
      setImgMenu(closed);
      setShow(true);
    } else {
      setImgMenu(open);
      setShow(false);
    }
  }

  function handleShowMenu(title) {

    if(title === option) {
        setOption("null")
    } else {
        setOption(title);
    }

  }

  return (
    <>
      {width >= 614 ? (
        <Styled.ContainerButtonsLogin>
          <button>Login</button>
          <button>Sign Up</button>
        </Styled.ContainerButtonsLogin>
      ) : (
        <>
          <Styled.ContainerNav>
            <img src={imgMenu} onClick={showMenu} />
            {show && (
              <Styled.MenuNavigate>
                <Styled.MenuOptions>
                  <Styled.titleOption onClick={() => handleShowMenu('Product')}>
                    Product <img src={arrowDark} />{" "}
                  </Styled.titleOption>
                  {option === "Product" && (
                    <Styled.ListOptions>
                      <Styled.Option>Contact</Styled.Option>
                      <Styled.Option>Newsletter</Styled.Option>
                      <Styled.Option>LinkedIn</Styled.Option>
                    </Styled.ListOptions>
                  )}
                </Styled.MenuOptions>

                <Styled.MenuOptions>
                  <Styled.titleOption onClick={() => handleShowMenu('Company')}>
                    Company <img src={arrowDark} />
                  </Styled.titleOption>
                  {option === "Company" && (
                    <Styled.ListOptions>
                      <Styled.Option>Contact</Styled.Option>
                      <Styled.Option>Newsletter</Styled.Option>
                      <Styled.Option>LinkedIn</Styled.Option>
                    </Styled.ListOptions>
                  )}
                </Styled.MenuOptions>

                <Styled.MenuOptions>
                  <Styled.titleOption onClick={() => handleShowMenu('Connect')} >
                    Connect <img src={arrowDark} />
                  </Styled.titleOption>
                  {option === "Connect" && (
                    <Styled.ListOptions>
                      <Styled.Option>Contact</Styled.Option>
                      <Styled.Option>Newsletter</Styled.Option>
                      <Styled.Option>LinkedIn</Styled.Option>
                    </Styled.ListOptions>
                  )}
                </Styled.MenuOptions>
                <Styled.OptionsLogin>
                    <button>Login</button>
                    <Styled.ButtonSignUp>Sign Up</Styled.ButtonSignUp>
                </Styled.OptionsLogin>
              </Styled.MenuNavigate>
            )}
          </Styled.ContainerNav>
        </>
      )}
    </>
  );
}

import { useState } from "react";
import * as Styled from "./style";

export default function Home() {
  const [show, setShow] = useState(["null", false]);

  function showOptions(title) {
    if (title === show[0]) {
      setShow(["null", false]);
    } else {
      setShow([title, true]);
    }
  }

  return (
    <Styled.NavContainer>
      <Styled.Navigate>
        <Styled.NavigateTitle onClick={() => showOptions("Product")}>
          Product
        </Styled.NavigateTitle>
        {show[0] === "Product" && (
          <Styled.viewOptions>
            <Styled.viewOption>Contact</Styled.viewOption>
            <Styled.viewOption>Newsletter</Styled.viewOption>
            <Styled.viewOption>LinkedIn</Styled.viewOption>
          </Styled.viewOptions>
        )}
      </Styled.Navigate>

      <Styled.Navigate>
        <Styled.NavigateTitle onClick={() => showOptions("Company")}>
          Company
        </Styled.NavigateTitle>

        {show[0] === "Company" && (
          <Styled.viewOptions>
            <Styled.viewOption>Contact</Styled.viewOption>
            <Styled.viewOption>Newsletter</Styled.viewOption>
            <Styled.viewOption>LinkedIn</Styled.viewOption>
          </Styled.viewOptions>
        )}
      </Styled.Navigate>

      <Styled.Navigate>
        <Styled.NavigateTitle onClick={() => showOptions("Connect")}>
          Connect
        </Styled.NavigateTitle>

        {show[0] === "Connect" && (
          <Styled.viewOptions>
            <Styled.viewOption>Contact</Styled.viewOption>
            <Styled.viewOption>Newsletter</Styled.viewOption>
            <Styled.viewOption>LinkedIn</Styled.viewOption>
          </Styled.viewOptions>
        )}
      </Styled.Navigate>
    </Styled.NavContainer>
  );
}

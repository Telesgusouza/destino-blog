import { useState } from "react";
import * as Styled from "./style";

export default function Home() {
  const [show, setShow] = useState(["null", false]);

 

  function showOptions(title) {
    // console.log(title);

    if(title === show[0]) {
        // console.log('clicou pela segunda vez')
        setShow(["null", false])
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

        { show[0] === 'Connect' &&
          <Styled.viewOptions>
            <Styled.viewOption>Contact</Styled.viewOption>
            <Styled.viewOption>Newsletter</Styled.viewOption>
            <Styled.viewOption>LinkedIn</Styled.viewOption>
          </Styled.viewOptions>
        }
      </Styled.Navigate>
    </Styled.NavContainer>
  );
}

// <select>
//             <option selected disabled>
//               Product
//             </option>

//             <option> Contact </option>
//             <option> Newsletter </option>
//             <option> Linkedin </option>
//           </select>

//           <select>
//             <option selected disabled>
//               Company
//             </option>

//             <option> Contact </option>
//             <option> Newsletter </option>
//             <option> Linkedin </option>
//           </select>

//           <select>
//             <option selected disabled>
//               Connect
//             </option>

//             <option> Contact </option>
//             <option> Newsletter </option>
//             <option> Linkedin </option>
//           </select>

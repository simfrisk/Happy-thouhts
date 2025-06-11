import styled from "styled-components";
import { Link } from "react-router";

export const Titlte = styled(Link)`
text-align: center;
text-decoration: none;
color: black;
 display: inline-block; 
  width: fit-content; 


 @media (min-width: 640px) {
    h1 {
      margin-top: 50px;
      margin-bottom: 25px;
    }
  }
`
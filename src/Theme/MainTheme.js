import { createGlobalStyle } from "styled-components";

const GlobalStyleComponent = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

*,*::before,*::after{
    box-sizing: border-box;
}
html{
    font-size: 67.5%; // 10 PX 
}
body{
//    padding-left: 160px;
    font-size: 1.6rem;
font-family: "Montserrat";

}
`;

export default GlobalStyleComponent;

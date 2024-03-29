import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin : 0 ; 
    padding : 0 ; 
    box-sizing : border-box ; 
}
html {
    &::-webkit-scrollbar{
        width : 0.5rem ; 
    }
    &::-webkit-scroll-thumb{
        background-color : darkgrey ; 
    }
    &::-webkit-scrollbar-track {
    background: white;
  }
}

body{
    font-family: 'Montserrat' , sans-serif;
    width: 100%;
}

h2{
    font-size: 3rem;
    font-family: 'Abril Fatface',cursive;
    font-weight: lighter;
}
h3{
    font-size: 1.3rem;
    padding: 1.5rem 0rem;
    color: #333;
}

p{
    font-size: 1.2rem;
    color: #696969;
    line-height: 200%;
}

a{
    text-decoration: none;
    color: #333;
}
img{
    display: block;
}
input{
    font-family: 'Montserrat' , sans-serif;
    font-weight: bold;
}
`;

export default GlobalStyles;

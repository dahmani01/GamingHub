import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <StyledFooter>Ignite | All Rights reserved© 2023</StyledFooter>;
};

const StyledFooter = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 8vh;
  background-color: #ff7676;
  color: white;
  font-size: 20px;
  margin-top: 1rem;
`;

export default Footer;

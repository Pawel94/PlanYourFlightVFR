import styled, { css } from "styled-components";

const SidebarDesign = styled.header`
  /* height: 10%; /* Full-height: remove this if you want "auto" height */
  // width: 100%; /* Set the width of the sidebar */
  // position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  //z-index: 1; /* Stay on top */
  //top: 0; /* Stay at the top */
  //left: 0;
  //background-color: hsl(49, 100%, 58%);
  //overflow-x: hidden; /* Disable horizontal scroll */
  //padding-top: 20px; */

  ${({ search }) =>
    search &&
    css`
      padding: 15px 30px;
    `};
`;

export default SidebarDesign;

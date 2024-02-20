import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

import NavBar from "../components/common/NavBar";
import { Colors } from "../constants/colors";

const RootLayout: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <NavBar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default RootLayout;

const Main = styled.main`
  margin-top: 10rem;
  color: ${Colors.gray800};
  padding-bottom: 2rem;
`;

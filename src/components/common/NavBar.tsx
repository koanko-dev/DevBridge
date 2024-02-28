import React from "react";
import styled from "styled-components";
import { Form, Link, NavLink, useRouteLoaderData } from "react-router-dom";

import { Colors } from "../../constants/colors";

const NavBar: React.FC = () => {
  const token = useRouteLoaderData("root");

  return (
    <Header>
      <NavBox>
        <HomeLinkBox>
          <Link to={"/"}>Home</Link>
        </HomeLinkBox>

        <NavListBox>
          <NavLi>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              suggestion
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink
              to="/jobs"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              find jobs
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink
              to="/saved_jobs"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              saved jobs
            </NavLink>
          </NavLi>

          {!token ? (
            <NavLi>
              <NavLink to={"/auth?mode=login"}>Login</NavLink>
            </NavLi>
          ) : (
            <>
              <NavLi>
                <NavLink to={"/profile"}>Profile</NavLink>
              </NavLi>
              <NavLi>
                <Form action="/logout" method="post">
                  <button>Logout</button>
                </Form>
              </NavLi>
            </>
          )}
        </NavListBox>
      </NavBox>
    </Header>
  );
};

export default NavBar;

const Header = styled.header`
  width: 100%;
  height: 10rem;
  position: fixed;
  top: 0;
  z-index: 10;
  border: 1px solid red;
  color: white;
  background-color: ${Colors.black};
`;

const NavBox = styled.nav``;

const HomeLinkBox = styled.div``;

const NavListBox = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavLi = styled.li`
  padding: 0px 20px;

  a {
    height: 100%;

    &:hover,
    &:active,
    &.active {
      color: ${Colors.primary800};
    }
  }
`;

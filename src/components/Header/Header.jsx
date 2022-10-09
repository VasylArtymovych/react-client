import React from "react";
import { Outlet } from "react-router-dom";
import { Container, StyledHeader, StyledLink, Title } from "./Header.styled";
import AuthNavigation from "components/AuthNavigation";
import UserMenu from "components/UserMenu";
import { useSelector } from "react-redux";

function Header() {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn);

  return (
    <>
      <StyledHeader as="header">
        <Container>
          <StyledLink to="/">
            <Title>Users</Title>
          </StyledLink>
          {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </Container>
      </StyledHeader>
      <Outlet />;
    </>
  );
}

export default Header;

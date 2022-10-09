import { StyledLink, LinkWraper } from "./AuthNavigation.styled";

function AuthNavigation() {
  return (
    <LinkWraper>
      <StyledLink to="/">Sign Up</StyledLink>
      <StyledLink to="login">Log in</StyledLink>
    </LinkWraper>
  );
}

export default AuthNavigation;

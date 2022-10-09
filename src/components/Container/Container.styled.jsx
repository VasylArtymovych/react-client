import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  flex-direction: ${(p) => p.flexDirection || "row"};
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

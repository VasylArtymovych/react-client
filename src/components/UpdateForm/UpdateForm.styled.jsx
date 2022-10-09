import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: ${(p) => p.theme.space[4]}px;
  background: ${(p) => p.theme.colors.active};
  color: ${(p) => p.theme.colors.white};
  border-radius: 10px;
`;

export const Label = styled.label`
  margin-bottom: ${(p) => p.theme.space[3]}px;
  width: 85%;
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  width: 85%;
  margin-bottom: ${(p) => p.theme.space[4]}px;
  padding: 7px 5px;
  font-size: ${(p) => p.theme.fontSizes.m}px;
  background: ${(p) => p.theme.colors.primary};
  outline: none;
  &::placeholder {
    color: ${(p) => p.theme.colors.secondary};
  }
`;

export const Button = styled.button.attrs({ type: "submit" })`
  width: 110px;
  height: 35px;
  background: linear-gradient(to right, #522a70, #5475c7);
  color: ${(p) => p.theme.colors.white};
  border: none;
  /* border-color: ${(p) => p.theme.colors.primary}; */
  border-radius: ${(p) => p.theme.space[4]}px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.text};
    box-shadow: 0px 0px 7px #fff;
  }
`;

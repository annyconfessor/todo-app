import React from "react";
import { StyledHeader } from "./styles"
import { Text } from '..'

const HeaderComponent = () => {
  return (
    <StyledHeader>
      <Text variant="title">
        Simple Todo App
      </Text>
      <p style={{ fontSize: "19px" }}>
        Please add to-dos item(s) through the input field
      </p>
    </StyledHeader>
  );
};

export default HeaderComponent

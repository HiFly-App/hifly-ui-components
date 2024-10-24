import styled from "@emotion/native";
import React from "react";

export type TextProps = {
  label: string;
};
export const Text = ({ label }: TextProps) => {
  return <StyledText>{label}</StyledText>;
};

const StyledText = styled.Text`
  color: red;
`;

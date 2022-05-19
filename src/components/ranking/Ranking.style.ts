import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.htmlBackground};
  width: 970px;
  height: 780px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

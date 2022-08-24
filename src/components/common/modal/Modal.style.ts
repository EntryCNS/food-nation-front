import styled, { ThemedGlobalStyledClassProps } from "styled-components";

interface ModalProps {
    visible?:boolean;
}

export const ModalOverlay = styled.div<ModalProps>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.6);

`;

export const ModalWrapper = styled.div<ModalProps>`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  outline: 0;
`;

export const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 10px 0px;
  width:fit-content;
  transition:width 0.5s;
`;

export const CloseButton = styled.button`
    border:none;
    position:absolute;
    right:15px;
    top:15px;
    background:none;
    font-weight:bold;
    font-size:15px;
    color:#0095f6;
    cursor:pointer;
` 
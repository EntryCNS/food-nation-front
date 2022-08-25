import React, { useEffect, SetStateAction, Dispatch, Component } from "react";
import * as M from "./Modal.style";

import Portal from "./Portal";

const Modal = ({
  name,
  onClose,
  maskCloseable,
  visible,
  children,
}: {
  name: string;
  onClose: () => void;
  maskCloseable: boolean;
  visible: boolean;
  children: React.ReactNode;
}) => {
  // useEffect(() => {
  //   document.body.style.cssText = `
  //       position:fixed;
  //       top:-${window.scrollY}px`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = ``;
  //     window.scrollTo(0, parseInt(scrollY || "0") * -1);
  //   };
  // }, []);

  // const onMaskClick = (e: Event) => {
  const onMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Portal elementId="modal-root">
      <M.ModalOverlay visible={visible} />
      <M.ModalWrapper
        visible={visible}
        className={name}
        onClick={maskCloseable ? onMaskClick : undefined}
        tabIndex={-1}
      >
        <M.ModalInner className="modal-inner" tabIndex={0}>
          {children}
        </M.ModalInner>
      </M.ModalWrapper>
    </Portal>
  );
};

export default Modal;

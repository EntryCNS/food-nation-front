import React, { useEffect, SetStateAction, Dispatch, Component } from "react";
import * as M from "./Modal.style";

import Portal from "./Portal";

const Modal = ({
  onClose,
  maskCloseable=true,
  visible=true,
  children,
}: {
  onClose: () => void;
  maskCloseable: boolean;
  visible: boolean;
  children: React.ReactNode;
}) => {
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
        onMouseDown={maskCloseable ? onMaskClick : undefined}
        tabIndex={-1}
      >
        <M.ModalInner 
        className="modal-inner" 
        tabIndex={0}
        >
          {children}
        </M.ModalInner>
      </M.ModalWrapper>
    </Portal>
  );
};

export default Modal;

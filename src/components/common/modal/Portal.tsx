import React, { useMemo } from "react";
import ReactDOM from "react-dom";

function Portal({ children, elementId }:{children:React.ReactNode, elementId:string}) {
    const element = typeof window !== "undefined" && document.querySelector(elementId);
    return element && children ? ReactDOM.createPortal(children,element) : null;
}

export default Portal
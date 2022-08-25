import React, { useMemo } from "react";
import ReactDOM from "react-dom";

function Portal({ children, elementId }:{children:React.ReactNode, elementId:string}) {
    const rootElement = useMemo(
        () => document.getElementById(elementId) as Element
        ,[elementId]
    )

    return ReactDOM.createPortal(children,rootElement)
}

export default Portal

// 이거 어케함?
// 날짜 타입 문제
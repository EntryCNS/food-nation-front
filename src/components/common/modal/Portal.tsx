import { useMemo } from "react";

function Portal({ children, elementId }) {
  const rootElement = useMemo(
    () => document.getElementById(elementId),
    [elementId]
  );

  return createPortal(children,rootElement)
}

export default Portal
import { createContext, useContext, useRef } from "react";

const SectionsRefContext = createContext(null);

function SectionsRefProvider({ children }) {
  const sectionsRef = useRef(new Map());

  return (
    <SectionsRefContext.Provider value={sectionsRef}>
      {children}
    </SectionsRefContext.Provider>
  );
}

function useSectionsRef() {
  return useContext(SectionsRefContext);
}

export { SectionsRefProvider, useSectionsRef };

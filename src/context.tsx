import React, { createContext, useContext, useRef } from "react";

interface GlobalContext {
  scrollToElementRef: React.RefObject<HTMLElement>;
}

const globalContext = createContext<GlobalContext>({
  scrollToElementRef: { current: null },
});

export const GlobalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scrollToElementRef = useRef<HTMLElement>(null);

  return (
    <globalContext.Provider value={{ scrollToElementRef }}>
      {children}
    </globalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(globalContext);

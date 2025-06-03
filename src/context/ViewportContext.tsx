import React, { createContext, useContext, useEffect, useState } from "react";

const ViewportContext = createContext<{ isMobile: boolean }>({
  isMobile: false,
});

export const ViewportProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <ViewportContext.Provider value={{ isMobile }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useIsMobile = () => useContext(ViewportContext).isMobile;

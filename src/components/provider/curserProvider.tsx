import React, { createContext, useContext, ReactNode } from "react";
interface CurserContextProps {
  isActive: any;
  setIsActive: any;
}

const CurserContext = createContext<CurserContextProps | undefined>(undefined);

interface CurserProviderProps {
  children: ReactNode;
}

export const CurserProvider: React.FC<CurserProviderProps> = ({ children }) => {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <CurserContext.Provider value={{ setIsActive, isActive }}>
      {children}
    </CurserContext.Provider>
  );
};

export const useCurser = (): CurserContextProps => {
  const context = useContext(CurserContext);
  if (!context) {
    throw new Error("useAuth must be used within an CurserProvider");
  }
  return context;
};

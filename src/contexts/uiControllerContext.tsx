import { createContext, useState, useContext, type ReactNode } from "react";

interface UiControllerContextType {
  open: boolean;
  openPanel: () => void;
  closePanel: () => void;
}

interface UiProviderProps {
  children: ReactNode;
}

const UiControllerContext = createContext<UiControllerContextType | undefined>(undefined);

export function UiControllerProvider({ children }: UiProviderProps) {
  const [open, setOpen] = useState(false);

  function openPanel() {
    setOpen(true);
  }

  function closePanel() {
    setOpen(false);
  }

  return (
    <UiControllerContext.Provider value={{ open, openPanel, closePanel }}>
      {children}
    </UiControllerContext.Provider>
  );
}

export function useUiController() {
  const context = useContext(UiControllerContext);

  if (!context) {
    throw new Error("useUiController deve ser usado dentro de UiControllerProvider");
  }

  return context;
}

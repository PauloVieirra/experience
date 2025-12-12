import { createContext, useContext, useState } from 'react';

interface AccessibilityContextType {
  brightness: number;
  setBrightness: (brightness: number) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [brightness, setBrightness] = useState(100);

  return (
    <AccessibilityContext.Provider value={{ brightness, setBrightness }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

import { createContext, useContext, useEffect, useState, useRef } from "react";

type Theme = "dark" | "light" | "system";

type ScopedThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ScopedThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const initialState: ScopedThemeProviderState = {
  theme: "system",
  setTheme: () => null,
};

const ScopedThemeProviderContext = createContext<ScopedThemeProviderState>(initialState);

export function ScopedThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ScopedThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const effectiveTheme = theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      : theme;

    wrapper.classList.remove("light", "dark");
    wrapper.classList.add(effectiveTheme);
    
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ScopedThemeProviderContext.Provider {...props} value={value}>
      <div ref={wrapperRef} className="h-full">
        {children}
      </div>
    </ScopedThemeProviderContext.Provider>
  );
}

export const useScopedTheme = () => {
  const context = useContext(ScopedThemeProviderContext);

  if (context === undefined)
    throw new Error("useScopedTheme must be used within a ScopedThemeProvider");

  return context;
};

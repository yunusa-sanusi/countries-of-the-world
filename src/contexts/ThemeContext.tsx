import { createContext, ReactNode, useContext, useState } from 'react';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

type ThemeProviderProp = {
  children: ReactNode;
};

type StateType = {
  theme: string;
};

const initialState: StateType = {
  theme: 'light',
};

const ThemeContext = createContext({} as ThemeContextType);

export const ThemeProvider = ({ children }: ThemeProviderProp) => {
  const [theme, setTheme] = useState<string>(initialState.theme);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);

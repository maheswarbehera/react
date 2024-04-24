
import { createContext, useContext, useState } from 'react'; 

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#282c34', color: theme === 'light' ? '#282c34' : '#fff' }}>
      <h1>{`Current Theme: ${theme}`}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>

    </div>
  );
};
